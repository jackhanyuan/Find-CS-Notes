import{_ as t}from"./app-CHw5kVYW.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.findn.cn/",login:"enable",emoji:["//unpkg.com/@waline/emojis@1.1.0/weibo","//unpkg.com/@waline/emojis@1.1.0/bilibili"],requiredMeta:[],pageview:!0,pageSize:10};const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-CHw5kVYW.js").then(i=>i.a6),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
