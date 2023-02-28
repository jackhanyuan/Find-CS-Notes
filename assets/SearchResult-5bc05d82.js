import{u as J,a as P,n as O,b as V,d as W,c as _,m as z,l as I,e as K,y as N,h as T,f as X,g as Y,v as Z,L as ee,H as ae,i as se,r as L}from"./app-aab1207b.js";import{c as le,B as te,J as re,r as m,h as w,o as ue,F as ne,j as e,R as E,w as oe,E as ce,i as ie}from"./framework-e0147dfb.js";const ve="search-pro-result-history",o=J(ve,[]),pe=()=>{const{resultHistoryCount:r}=L,c=r>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<r?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,r-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},he=r=>{const c=P(),l=m(!1),h=m([]);let i;const v=se(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/${L.worker}`,{}),i.addEventListener("message",({data:f})=>{h.value=f,l.value=!1}),i.postMessage({query:d,routeLocale:c.value})):(h.value=[],l.value=!1)},L.delay);return oe([r,c],()=>v(r.value),{immediate:!0}),{searching:l,results:h}};var me=le({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(r,{emit:c}){const l=Y(),h=te(),i=P(),v=O(Z),{addQueryHistory:d}=ee(),{enabled:f,resultHistory:b,addResultHistory:S,removeResultHistory:Q}=pe(),R=re(r,"query"),{results:y,searching:x}=he(R),u=m(0),t=m(0),q=m(),C=w(()=>b.value.length>0),$=w(()=>y.value.length>0),k=w(()=>y.value[u.value]||null),j=()=>{u.value=u.value>0?u.value-1:y.value.length-1,t.value=k.value.contents.length-1},F=()=>{u.value=u.value<y.value.length-1?u.value+1:0,t.value=0},M=()=>{t.value<k.value.contents.length-1?t.value=t.value+1:F()},U=()=>{t.value>0?t.value=t.value-1:j()},D=a=>a.map(s=>ie(s)?s:e(s[0],s[1])),B=a=>{if(a.type==="custom"){const s=ae[a.index]||"$content",[p,g=""]=ce(s)?s[i.value].split("$content"):s.split("$content");return D([p,...a.display,g])}return D(a.display)},H=()=>{u.value=0,t.value=0,c("updateQuery",""),c("close")};return ue(()=>{V("keydown",a=>{if($.value){if(a.key==="ArrowUp")U();else if(a.key==="ArrowDown")M();else if(a.key==="Enter"){const s=k.value.contents[t.value];l.value.path!==s.path&&(d(r.query),S(s),h.push(s.path),H())}}}),W(q.value,{reserveScrollBarGap:!0})}),ne(()=>{_()}),()=>e("div",{class:["search-pro-result",{empty:R.value?!$.value:!C.value}],id:"search-pro-results",ref:q},R.value===""?C.value?e("ul",{class:"search-pro-result-list"},e("li",{class:"search-pro-result-list-item"},[e("div",{class:"search-pro-result-title"},v.value.history),b.value.map((a,s)=>e(E,{to:a.path,class:["search-pro-result-item",{active:t.value===s}],onClick:()=>{H()}},()=>[e(z,{class:"search-pro-result-type"}),e("div",{class:"search-pro-result-content"},[a.type==="content"&&a.header?e("div",{class:"content-header"},a.header):null,e("div",B(a))]),e("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),Q(s)}},e(I))]))])):f?v.value.emptyHistory:v.value.emptyResult:x.value?e(K,{hint:v.value.searching}):$.value?e("ul",{class:"search-pro-result-list"},y.value.map(({title:a,contents:s},p)=>{const g=u.value===p;return e("li",{class:["search-pro-result-list-item",{active:g}]},[e("div",{class:"search-pro-result-title"},a||"Documentation"),s.map((n,G)=>{const A=g&&t.value===G;return e(E,{to:n.path,class:["search-pro-result-item",{active:A,"aria-selected":A}],onClick:()=>{d(r.query),S(n),H()}},()=>[n.type==="content"?null:e(n.type==="title"?N:n.type==="heading"?T:X,{class:"search-pro-result-type"}),e("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?e("div",{class:"content-header"},n.header):null,e("div",B(n))])])})])})):v.value.emptyResult)}});export{me as default};
