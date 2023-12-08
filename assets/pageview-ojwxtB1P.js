import{_ as r}from"./app-vmUhBKiq.js";var t={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.findn.cn/",login:"enable",emoji:["//unpkg.com/@waline/emojis@1.1.0/weibo","//unpkg.com/@waline/emojis@1.1.0/bilibili"],requiredMeta:[],pageview:!0,pageSize:10};const n=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-vmUhBKiq.js").then(i=>i.a6),__vite__mapDeps([]));return e({serverURL:t.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}