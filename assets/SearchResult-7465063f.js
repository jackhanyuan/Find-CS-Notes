import{u as F,a as A,W as G,b as M,d as Q,c as J,n as O,o as V,s as _,l as z,i as I,e as K,f as N,H as T,m as X,g as Y,h as L}from"./app-9c3f7490.js";import{c as Z,C as ee,J as ae,r as m,h as q,o as se,G as le,j as e,R as D,w as te,F as re,i as ue}from"./framework-c065f593.js";const ne="search-pro-history-results",n=F(ne,[]),oe=()=>{const{historyCount:o}=L;return{history:n,addHistory:t=>{n.value.length<o?n.value=[t,...n.value]:n.value=[t,...n.value.slice(0,o-1)]},removeHistory:t=>{n.value=[...n.value.slice(0,t),...n.value.slice(t+1)]}}},ce=o=>{const t=A(),i=m(!1),d=m([]);let c;const v=Y(p=>{i.value=!0,c==null||c.terminate(),p?(c=new Worker(`/${L.worker}`,{}),c.addEventListener("message",({data:g})=>{d.value=g,i.value=!1}),c.postMessage({query:p,routeLocale:t.value})):(d.value=[],i.value=!1)},L.delay);return te([o,t],()=>v(o.value),{immediate:!0}),{searching:i,results:d}};var pe=Z({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:o=>!0},setup(o,{emit:t}){const i=N(),d=ee(),c=A(),v=G(T),{history:p,addHistory:g,removeHistory:E}=oe(),$=ae(o,"query"),{results:y,searching:P}=ce($),r=m(0),l=m(0),S=m(),k=q(()=>y.value.length>0),R=q(()=>y.value[r.value]||null),B=()=>{r.value=r.value>0?r.value-1:y.value.length-1,l.value=R.value.contents.length-1},U=()=>{r.value=r.value<y.value.length-1?r.value+1:0,l.value=0},W=()=>{l.value<R.value.contents.length-1?l.value=l.value+1:U()},j=()=>{l.value>0?l.value=l.value-1:B()},H=a=>a.map(s=>ue(s)?s:e(s[0],s[1])),b=a=>{if(a.type==="custom"){const s=X[a.index]||"$content",[h,f=""]=re(s)?s[c.value].split("$content"):s.split("$content");return H([h,...a.display,f])}return H(a.display)},w=()=>{r.value=0,l.value=0,t("updateQuery",""),t("close")};return se(()=>{M("keydown",a=>{if(k.value){if(a.key==="ArrowUp")j();else if(a.key==="ArrowDown")W();else if(a.key==="Enter"){const s=R.value.contents[l.value];i.value.path!==s.path&&(g(s),d.push(s.path),w())}}}),Q(S.value,{reserveScrollBarGap:!0})}),le(()=>{J()}),()=>e("div",{class:["search-pro-result",{empty:$.value===""?p.value.length===0:!k.value}],ref:S},$.value===""?p.value.length?e("ul",{class:"search-pro-result-list"},e("li",{class:"search-pro-result-list-item"},[e("div",{class:"search-pro-result-title"},v.value.history),p.value.map((a,s)=>e(D,{to:a.path,class:["search-pro-result-item",{active:l.value===s}],onClick:()=>{w()}},()=>[e(O,{class:"search-pro-result-type"}),e("div",{class:"search-pro-result-content"},[a.type==="content"&&a.header?e("div",{class:"content-header"},a.header):null,e("div",b(a))]),e("button",{class:"search-pro-close-icon",onClick:h=>{h.preventDefault(),h.stopPropagation(),E(s)}},e(V))]))])):v.value.emptyHistory:P.value?e(_,{hint:v.value.searching}):k.value?e("ul",{class:"search-pro-result-list"},y.value.map(({title:a,contents:s},h)=>{const f=r.value===h;return e("li",{class:["search-pro-result-list-item",{active:f}]},[e("div",{class:"search-pro-result-title"},a||"Documentation"),s.map((u,x)=>{const C=f&&l.value===x;return e(D,{to:u.path,class:["search-pro-result-item",{active:C,"aria-selected":C}],onClick:()=>{g(u),w()}},()=>[u.type==="content"?null:e(u.type==="title"?z:u.type==="heading"?I:K,{class:"search-pro-result-type"}),e("div",{class:"search-pro-result-content"},[u.type==="content"&&u.header?e("div",{class:"content-header"},u.header):null,e("div",b(u))])])})])})):v.value.emptyResult)}});export{pe as default};
