#Requires -Version 7.0
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [ValidateNotNullOrEmpty()]
    [string]$Organization,

    [Parameter(Mandatory)]
    [ValidateNotNullOrEmpty()]
    [string]$Project,

    [Parameter(Mandatory)]
    [ValidateNotNullOrEmpty()]
    [string]$Repository,

    [Parameter(Mandatory)]
    [ValidateSet('javascript', 'dotnet', 'java')]
    [string]$Stack,

    [Parameter(Mandatory)]
    [ValidateNotNullOrEmpty()]
    [string]$OutputDirectory,

    [switch]$Offline
)

$ErrorActionPreference = 'Stop'

$organizationUri = $null
if (-not [Uri]::TryCreate($Organization, [UriKind]::Absolute, [ref]$organizationUri) -or
    $organizationUri.Scheme -ne 'https' -or
    $organizationUri.Host -ne 'dev.azure.com' -or
    -not $organizationUri.IsDefaultPort -or
    $organizationUri.UserInfo -or
    $organizationUri.Query -or
    $organizationUri.Fragment -or
    $organizationUri.AbsolutePath -notmatch '^/[A-Za-z0-9][A-Za-z0-9-]*/?$') {
    throw 'Organization must be an explicit URL such as https://dev.azure.com/<YOUR-ORG>, without credentials, query parameters, or extra paths.'
}
$organizationUrl = $organizationUri.AbsoluteUri.TrimEnd('/')

foreach ($targetName in @($Project, $Repository)) {
    if ([string]::IsNullOrWhiteSpace($targetName) -or $targetName -match '[\r\n]' -or $targetName.StartsWith('-')) {
        throw 'Project and Repository must be explicit names or IDs, not whitespace or command options.'
    }
}

$directory = Get-Item -LiteralPath $OutputDirectory -ErrorAction Stop
if (-not $directory.PSIsContainer -or $directory.PSProvider.Name -ne 'FileSystem') {
    throw 'OutputDirectory must be an existing local filesystem directory.'
}
for ($ancestor = $directory; $null -ne $ancestor; $ancestor = $ancestor.Parent) {
    if (($ancestor.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0) {
        throw 'Choose a real scratch directory whose path does not traverse a junction or symbolic link.'
    }
    if (Test-Path -LiteralPath (Join-Path $ancestor.FullName '.git')) {
        throw 'Choose a scratch output directory outside a Git checkout. This helper does not edit repositories.'
    }
}

$outputPath = Join-Path $directory.FullName 'azure-pipelines-security.yml'
if (Test-Path -LiteralPath $outputPath) {
    throw 'The output YAML already exists. Nothing will be overwritten; choose an empty output directory.'
}

$templatePath = Join-Path $PSScriptRoot "..\templates\security-$($Stack.ToLowerInvariant()).yml"
if (-not (Test-Path -LiteralPath $templatePath -PathType Leaf)) {
    throw "The selected pipeline template is missing: $templatePath"
}
$template = [IO.File]::ReadAllText((Resolve-Path -LiteralPath $templatePath).Path)

function Invoke-AzRead {
    param([Parameter(Mandatory)][string[]]$Arguments)

    $raw = & az @Arguments --output json
    if ($LASTEXITCODE -ne 0) {
        throw "Read-only Azure CLI check failed: az $($Arguments[0]) $($Arguments[1]). No Azure settings or files were changed."
    }
    $json = $raw -join "`n"
    if ([string]::IsNullOrWhiteSpace($json)) {
        throw 'The read-only check returned no JSON data. Target verification did not succeed.'
    }
    $parsed = ConvertFrom-Json -InputObject $json -NoEnumerate
    if ($null -eq $parsed) {
        throw 'The read-only check returned an empty result. Target verification did not succeed.'
    }
    Write-Output -NoEnumerate $parsed
}

$projectInfo = $null
$repoInfo = $null
if ($Offline) {
    Write-Warning 'Offline preparation only: organization, repository, permissions, billing, agent capacity, and security settings have NOT been verified.'
} else {
    Get-Command az -ErrorAction Stop | Out-Null
    $extension = Invoke-AzRead @('extension', 'show', '--name', 'azure-devops')
    if ($extension.name -ne 'azure-devops') {
        throw 'The Azure DevOps CLI extension was not verified.'
    }
    $projectInfo = Invoke-AzRead @(
        'devops', 'project', 'show', '--organization', $organizationUrl,
        '--project', $Project, '--detect', 'false'
    )
    if (-not $projectInfo.id -or -not $projectInfo.name -or $projectInfo.state -ne 'wellFormed') {
        throw 'The selected existing project could not be verified as ready.'
    }
    if ($Project -ne $projectInfo.name -and $Project -ne $projectInfo.id) {
        throw 'The returned project does not match the explicit name or ID.'
    }
    $repoInfo = Invoke-AzRead @(
        'repos', 'show', '--organization', $organizationUrl,
        '--project', $projectInfo.id, '--repository', $Repository, '--detect', 'false'
    )
    if (-not $repoInfo.id -or -not $repoInfo.name -or $repoInfo.project.id -ne $projectInfo.id) {
        throw 'The repository does not match the selected project. Preparation stopped.'
    }
    if ($repoInfo.isDisabled -eq $true) {
        throw 'The selected repository is disabled. Preparation stopped.'
    }
    if ($Repository -ne $repoInfo.name -and $Repository -ne $repoInfo.id) {
        throw 'The returned repository does not match the explicit name or ID.'
    }
    if (-not $repoInfo.defaultBranch) {
        Write-Warning 'This repository has no default branch. Select an existing source branch in the portal before creating or running a scan.'
    }
}

# CreateNew prevents a concurrent file creation from being silently overwritten.
$stream = [IO.File]::Open($outputPath, [IO.FileMode]::CreateNew, [IO.FileAccess]::Write, [IO.FileShare]::None)
$writer = [IO.StreamWriter]::new($stream, [Text.UTF8Encoding]::new($false))
try {
    $writer.Write($template)
} finally {
    $writer.Dispose()
}

[pscustomobject]@{
    Organization = $organizationUrl
    Project = $Project
    Repository = $Repository
    Stack = $Stack.ToLowerInvariant()
    OutputPath = $outputPath
    Verification = $(if ($Offline) { 'NotPerformed' } else { 'ExistingTargetOnly' })
    RepositoryId = $(if ($null -ne $repoInfo) { $repoInfo.id } else { $null })
    DefaultBranch = $(if ($null -ne $repoInfo) { $repoInfo.defaultBranch } else { $null })
    SecuritySettingsVerified = $false
    PipelineCreated = $false
    ProductsActivated = $false
    ScanStarted = $false
    NextStep = 'Review and adapt the YAML, then follow the portal guide for manual billing approval, pipeline creation, and scan execution.'
}
