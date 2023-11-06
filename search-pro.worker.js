const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const l of e.keys())if(l===F){const a=o[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=u;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=o[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=o[f+y]+ +b,A=o[f+y+1]+1,w=o[p+y]+1,L=o[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}R(e.get(l),t,s,n,o,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==F&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ut(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,M(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);let o=n.get(F);return o===void 0&&n.set(F,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},M=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==F&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const l=new Map;l.set(u.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(u),e=l}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ut=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==F&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",q="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},G=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},N=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),P(n.terms,u)}}return e},[q]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);P(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},ft=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,ht),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:q,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const l of Object.keys(u)){const a=u[l],h=e._fieldIds[l],m=o.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){gt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=at(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,lt(A.terms,t);const w=N(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:N(n.boost,g)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...J.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,o,u,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f?.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,o,u,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,o,u,d,m)}return m},X=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>X(e,m,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>At(e,a,i));return Y(l,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(u),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return o.sort(G),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of K(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(G),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=k(u),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(u,d)),u=l,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),l=u.includes("#"),[a,h]=u.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>o.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(o.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in o)for(const c of o.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),Q(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):kt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=it(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":55,\"nextId\":55,\"documentIds\":{\"0\":\"v-70bc2959\",\"1\":\"v-70bc2959#代码随想录\",\"2\":\"v-70bc2959#leetcode-hot100\",\"3\":\"v-2d0a8026\",\"4\":\"v-744e6dd4\",\"5\":\"v-38f5ae5e\",\"6\":\"v-46bbb146\",\"7\":\"v-46bbb146#_704-二分查找\",\"8\":\"v-46bbb146#思路\",\"9\":\"v-46bbb146#python代码\",\"10\":\"v-46bbb146#_27-移除元素\",\"11\":\"v-46bbb146#思路-1\",\"12\":\"v-46bbb146#python代码-1\",\"13\":\"v-46bbb146@0\",\"14\":\"v-46bbb146@1\",\"15\":\"v-487089e5\",\"16\":\"v-487089e5#_977-有序数组的平方\",\"17\":\"v-487089e5#思路\",\"18\":\"v-487089e5#python代码\",\"19\":\"v-487089e5#_209-长度最小的子数组\",\"20\":\"v-487089e5#思路-1\",\"21\":\"v-487089e5#python代码-1\",\"22\":\"v-487089e5#_59-螺旋矩阵ii\",\"23\":\"v-487089e5#思路-2\",\"24\":\"v-487089e5#python代码-2\",\"25\":\"v-487089e5@0\",\"26\":\"v-487089e5@1\",\"27\":\"v-4a256284\",\"28\":\"v-4a256284#_203-移除链表元素\",\"29\":\"v-4a256284#思路\",\"30\":\"v-4a256284#python代码\",\"31\":\"v-4a256284#_707-设计链表\",\"32\":\"v-4a256284#思路-1\",\"33\":\"v-4a256284#python代码-1\",\"34\":\"v-4a256284#_206-反转链表\",\"35\":\"v-4a256284#思路-2\",\"36\":\"v-4a256284#python代码-2\",\"37\":\"v-4a256284@0\",\"38\":\"v-4a256284@1\",\"39\":\"v-4bda3b23\",\"40\":\"v-4bda3b23#_24-两两交换链表中的节点\",\"41\":\"v-4bda3b23#思路\",\"42\":\"v-4bda3b23#python代码\",\"43\":\"v-4bda3b23#_19-删除链表的倒数第-n-个结点\",\"44\":\"v-4bda3b23#思路-1\",\"45\":\"v-4bda3b23#python代码-1\",\"46\":\"v-4bda3b23#面试题-02-07-链表相交\",\"47\":\"v-4bda3b23#思路-2\",\"48\":\"v-4bda3b23#python代码-2\",\"49\":\"v-4bda3b23#_142-环形链表ii\",\"50\":\"v-4bda3b23#思路-3\",\"51\":\"v-4bda3b23#python代码-3\",\"52\":\"v-4bda3b23@0\",\"53\":\"v-4bda3b23@1\",\"54\":\"v-f2e3287e\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1,35],\"2\":[2],\"3\":[1],\"4\":[1],\"5\":[1,24],\"6\":[8],\"7\":[2],\"8\":[1],\"9\":[1],\"10\":[2],\"11\":[1],\"12\":[1],\"13\":[null,null,1],\"14\":[null,null,1],\"15\":[10],\"16\":[2],\"17\":[1],\"18\":[1],\"19\":[2],\"20\":[1],\"21\":[1],\"22\":[2],\"23\":[1],\"24\":[1],\"25\":[null,null,1],\"26\":[null,null,1],\"27\":[10],\"28\":[2],\"29\":[1],\"30\":[1],\"31\":[2],\"32\":[1],\"33\":[1],\"34\":[2],\"35\":[1],\"36\":[1],\"37\":[null,null,1],\"38\":[null,null,1],\"39\":[14],\"40\":[2],\"41\":[1],\"42\":[1],\"43\":[4],\"44\":[1],\"45\":[1],\"46\":[4],\"47\":[1],\"48\":[1],\"49\":[2],\"50\":[1],\"51\":[1],\"52\":[null,null,1],\"53\":[null,null,1],\"54\":[1]},\"averageFieldLength\":[2.1412564732564734,18.583333333333332,0.26688004877305294],\"storedFields\":{\"0\":{\"h\":\"算法\"},\"1\":{\"h\":\"代码随想录\",\"t\":[\"刷题列表\",\"Day1 数组 LeetCode 704. 二分查找 27. 移除元素\",\"Day2 数组 LeetCode 977.有序数组的平方 209.长度最小的子数组 59.螺旋矩阵II\",\"Day3 链表 | LeetCode 203.移除链表元素 707.设计链表 206.反转链表\",\"Day4 链表 | LeetCode 24.两两交换链表中的节点 19.删除链表的倒数第N个节点 面试题 02.07. 链表相交 142.环形链表II\"]},\"2\":{\"h\":\"LeetCode Hot100\"},\"3\":{\"h\":\"计算机基础\"},\"4\":{\"h\":\"前端笔记\"},\"5\":{\"h\":\"代码随想录\",\"t\":[\"60天刷完代码随想录\",\"Day1 数组 LeetCode 704. 二分查找 27. 移除元素\",\"Day2 数组 LeetCode 977.有序数组的平方 209.长度最小的子数组 59.螺旋矩阵II\",\"Day3 链表 | LeetCode 203.移除链表元素 707.设计链表 206.反转链表\"]},\"6\":{\"h\":\"Day1 数组 | LeetCode 704. 二分查找 27. 移除元素\"},\"7\":{\"h\":\"704. 二分查找\"},\"8\":{\"h\":\"思路\"},\"9\":{\"h\":\"python代码\"},\"10\":{\"h\":\"27. 移除元素\"},\"11\":{\"h\":\"思路\"},\"12\":{\"h\":\"python代码\"},\"13\":{\"c\":[\"算法\"]},\"14\":{\"c\":[\"代码随想录\"]},\"15\":{\"h\":\"Day2 数组 | LeetCode 977.有序数组的平方 209.长度最小的子数组 59.螺旋矩阵II\"},\"16\":{\"h\":\"977.有序数组的平方\"},\"17\":{\"h\":\"思路\"},\"18\":{\"h\":\"python代码\"},\"19\":{\"h\":\"209.长度最小的子数组\"},\"20\":{\"h\":\"思路\"},\"21\":{\"h\":\"python代码\"},\"22\":{\"h\":\"59.螺旋矩阵II\"},\"23\":{\"h\":\"思路\"},\"24\":{\"h\":\"python代码\"},\"25\":{\"c\":[\"算法\"]},\"26\":{\"c\":[\"代码随想录\"]},\"27\":{\"h\":\"Day3 链表 | LeetCode 203.移除链表元素 707.设计链表 206.反转链表\"},\"28\":{\"h\":\"203.移除链表元素\"},\"29\":{\"h\":\"思路\"},\"30\":{\"h\":\"python代码\"},\"31\":{\"h\":\"707.设计链表\"},\"32\":{\"h\":\"思路\"},\"33\":{\"h\":\"python代码\"},\"34\":{\"h\":\"206.反转链表\"},\"35\":{\"h\":\"思路\"},\"36\":{\"h\":\"python代码\"},\"37\":{\"c\":[\"算法\"]},\"38\":{\"c\":[\"代码随想录\"]},\"39\":{\"h\":\"Day4 链表 | LeetCode 24.两两交换链表中的节点 19.删除链表的倒数第N个节点 面试题 02.07. 链表相交 142.环形链表II\"},\"40\":{\"h\":\"24.两两交换链表中的节点\"},\"41\":{\"h\":\"思路\"},\"42\":{\"h\":\"python代码\"},\"43\":{\"h\":\"19.删除链表的倒数第 N 个结点\"},\"44\":{\"h\":\"思路\"},\"45\":{\"h\":\"python代码\"},\"46\":{\"h\":\"面试题 02.07. 链表相交\"},\"47\":{\"h\":\"思路\"},\"48\":{\"h\":\"python代码\"},\"49\":{\"h\":\"142.环形链表II\"},\"50\":{\"h\":\"思路\"},\"51\":{\"h\":\"python代码\"},\"52\":{\"c\":[\"算法\"]},\"53\":{\"c\":[\"代码随想录\"]},\"54\":{\"h\":\"LeetCode\"}},\"dirtCount\":0,\"index\":[[\"个结点\",{\"0\":{\"43\":1}}],[\"n\",{\"0\":{\"43\":1}}],[\"删除链表的倒数第\",{\"0\":{\"43\":1}}],[\"删除链表的倒数第n个节点\",{\"0\":{\"39\":1},\"1\":{\"1\":1}}],[\"python代码\",{\"0\":{\"9\":1,\"12\":1,\"18\":1,\"21\":1,\"24\":1,\"30\":1,\"33\":1,\"36\":1,\"42\":1,\"45\":1,\"48\":1,\"51\":1}}],[\"思路\",{\"0\":{\"8\":1,\"11\":1,\"17\":1,\"20\":1,\"23\":1,\"29\":1,\"32\":1,\"35\":1,\"41\":1,\"44\":1,\"47\":1,\"50\":1}}],[\"60天刷完代码随想录\",{\"1\":{\"5\":1}}],[\"前端笔记\",{\"0\":{\"4\":1}}],[\"计算机基础\",{\"0\":{\"3\":1}}],[\"hot100\",{\"0\":{\"2\":1}}],[\"环形链表ii\",{\"0\":{\"39\":1,\"49\":1},\"1\":{\"1\":1}}],[\"142\",{\"0\":{\"39\":1,\"49\":1},\"1\":{\"1\":1}}],[\"19\",{\"0\":{\"39\":1,\"43\":1},\"1\":{\"1\":1}}],[\"07\",{\"0\":{\"39\":1,\"46\":1},\"1\":{\"1\":1}}],[\"02\",{\"0\":{\"39\":1,\"46\":1},\"1\":{\"1\":1}}],[\"面试题\",{\"0\":{\"39\":1,\"46\":1},\"1\":{\"1\":1}}],[\"两两交换链表中的节点\",{\"0\":{\"39\":1,\"40\":1},\"1\":{\"1\":1}}],[\"反转链表\",{\"0\":{\"27\":1,\"34\":1},\"1\":{\"1\":1,\"5\":1}}],[\"设计链表\",{\"0\":{\"27\":1,\"31\":1},\"1\":{\"1\":1,\"5\":1}}],[\"707\",{\"0\":{\"27\":1,\"31\":1},\"1\":{\"1\":1,\"5\":1}}],[\"704\",{\"0\":{\"6\":1,\"7\":1},\"1\":{\"1\":1,\"5\":1}}],[\"移除链表元素\",{\"0\":{\"27\":1,\"28\":1},\"1\":{\"1\":1,\"5\":1}}],[\"移除元素\",{\"0\":{\"6\":1,\"10\":1},\"1\":{\"1\":1,\"5\":1}}],[\"|\",{\"0\":{\"6\":1,\"15\":1,\"27\":1,\"39\":1},\"1\":{\"1\":2,\"5\":1}}],[\"链表相交\",{\"0\":{\"39\":1,\"46\":1},\"1\":{\"1\":1}}],[\"链表\",{\"0\":{\"27\":1,\"39\":1},\"1\":{\"1\":2,\"5\":1}}],[\"螺旋矩阵ii\",{\"0\":{\"15\":1,\"22\":1},\"1\":{\"1\":1,\"5\":1}}],[\"59\",{\"0\":{\"15\":1,\"22\":1},\"1\":{\"1\":1,\"5\":1}}],[\"长度最小的子数组\",{\"0\":{\"15\":1,\"19\":1},\"1\":{\"1\":1,\"5\":1}}],[\"24\",{\"0\":{\"39\":1,\"40\":1},\"1\":{\"1\":1}}],[\"206\",{\"0\":{\"27\":1,\"34\":1},\"1\":{\"1\":1,\"5\":1}}],[\"203\",{\"0\":{\"27\":1,\"28\":1},\"1\":{\"1\":1,\"5\":1}}],[\"209\",{\"0\":{\"15\":1,\"19\":1},\"1\":{\"1\":1,\"5\":1}}],[\"27\",{\"0\":{\"6\":1,\"10\":1},\"1\":{\"1\":1,\"5\":1}}],[\"有序数组的平方\",{\"0\":{\"15\":1,\"16\":1},\"1\":{\"1\":1,\"5\":1}}],[\"977\",{\"0\":{\"15\":1,\"16\":1},\"1\":{\"1\":1,\"5\":1}}],[\"day4\",{\"0\":{\"39\":1},\"1\":{\"1\":1}}],[\"day3\",{\"0\":{\"27\":1},\"1\":{\"1\":1,\"5\":1}}],[\"day2\",{\"0\":{\"15\":1},\"1\":{\"1\":1,\"5\":1}}],[\"day1\",{\"0\":{\"6\":1},\"1\":{\"1\":1,\"5\":1}}],[\"二分查找\",{\"0\":{\"6\":1,\"7\":1},\"1\":{\"1\":1,\"5\":1}}],[\"leetcode\",{\"0\":{\"2\":1,\"6\":1,\"15\":1,\"27\":1,\"39\":1,\"54\":1},\"1\":{\"1\":4,\"5\":3}}],[\"数组\",{\"0\":{\"6\":1,\"15\":1},\"1\":{\"1\":2,\"5\":2}}],[\"刷题列表\",{\"1\":{\"1\":1}}],[\"代码随想录\",{\"0\":{\"1\":1,\"5\":1},\"2\":{\"14\":1,\"26\":1,\"38\":1,\"53\":1}}],[\"算法\",{\"0\":{\"0\":1},\"2\":{\"13\":1,\"25\":1,\"37\":1,\"52\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
