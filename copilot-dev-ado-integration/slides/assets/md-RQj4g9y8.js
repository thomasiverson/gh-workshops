import{_ as c}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-D4F6BFIC.js";import{o as u,b as o,w as a,g as n,d as r,m as d,ad as s,v as m,x as f,T as e}from"./modules/vue-Bd6twrUX.js";import{I as g}from"./default-C-itynyy.js";import{u as k,f as h}from"./slidev/context-CFGEh12R.js";import"./modules/unplugin-icons-BHRNX9Qy.js";import"./index-DgRFZI6q.js";import"./modules/shiki-ZmAlgeQY.js";const I={__name:"gh-ado-integration.slidev.md__slidev_7",setup(_){const{$clicksContext:p,$frontmatter:i}=k();return p.setup(),(A,l)=>{const t=c;return u(),o(g,m(f(e(h)(e(i),6))),{default:a(()=>[l[1]||(l[1]=n("h1",null,"GitHub + ADO Architecture",-1)),r(t,d({},{title:"",ranges:[]}),{default:a(()=>[...l[0]||(l[0]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"┌─────────────────────────────────────────────────────────────────────┐")]),s(`
`),n("span",{class:"line"},[n("span",null,"│                       DEVELOPER WORKFLOW                             │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│                                                                      │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   ┌─────────────────────────────┐  ┌──────────────────────────────┐ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  GITHUB (Base Architecture) │  │  AZURE DEVOPS (Add-On)       │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  🔵 EMU / 🟢 Multi-Org /   │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  🟠 Mixed                   │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │                             │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  ┌───────────────────────┐  │  │  ┌────────────────────────┐ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  📦 Repos             │──┼──┼──│  📋 Boards             │ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  (Source of truth)    │  │  │  │  (Work items, sprints)  │ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  └───────────────────────┘  │  │  └────────────────────────┘ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │           │   AB# Linking   │  │           │                  │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │           ▼                 │  │           ▼                  │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  ┌───────────────────────┐  │  │  ┌────────────────────────┐ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  🔄 Pull Requests     │  │  │  │  🧪 Test Plans         │ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  (Code review, CI)    │  │  │  │  (Manual/automated)    │ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  └───────────────────────┘  │  │  └────────────────────────┘ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │           │                 │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │           ▼                 │  │  ┌────────────────────────┐ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  ┌───────────────────────┐  │  │  │  📦 Artifacts          │ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  🤖 Copilot           │  │  │  │  (Packages, feeds)     │ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  (AI code assistance) │  │  │  └────────────────────────┘ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  └───────────────────────┘  │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │                             │  │  ┌────────────────────────┐ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  ┌───────────────────────┐  │  │  │  🔧 Pipelines          │ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  🔒 GHAS              │  │  │  │  (Existing — or        │ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  (Secret scanning,   │  │  │  │   migrate to Actions)  │ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │   Code scanning,     │  │  │  └────────────────────────┘ │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │   Dependabot)        │  │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  └───────────────────────┘  │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │                             │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  ┌───────────────────────┐  │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  ⚡ Actions            │  │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  │  (CI/CD — new work)   │  │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │  └───────────────────────┘  │  │                              │ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   └─────────────────────────────┘  └──────────────────────────────┘ │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│                                                                      │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   ┌──────────────────────────────────────────────────────────────┐   │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │                   ENTRA ID (Shared Identity)                  │   │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   │       Single sign-on across both GitHub and Azure DevOps      │   │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│   └──────────────────────────────────────────────────────────────┘   │")]),s(`
`),n("span",{class:"line"},[n("span",null,"└─────────────────────────────────────────────────────────────────────┘")])])],-1)])]),_:1},16)]),_:1},16)}}};export{I as default};
