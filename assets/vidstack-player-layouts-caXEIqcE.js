import{c as p,b as l,u as r,i as q,g as u,f as k,h as rt,e as h,j as V,o as v,k as ct,l as ut,H as F,D as mt,s as N,m as pt,d as Q}from"./vidstack-UGaMhNs3-oMaa63Ea.js";import{e as vt,x as i,c as ht,t as ft,l as H,D as $t,o as gt,L as K}from"./vidstack-G0VUAMv_-Z2UcJl2r.js";import{_ as bt}from"./app-vmUhBKiq.js";class yt extends ht{constructor(t){super(t),this.Wh=null,this.$=null,this.Xh=!1,this.Xh=t.type===ft.ATTRIBUTE}render(t){this.Wh!==t&&(this.Wh=t,this.disconnected(),this.isConnected&&this._f());const e=this.Wh();return this.Xh?H(e):e}reconnected(){this._f()}disconnected(){var t;this.Xh||this.setValue(null),(t=this.$)==null||t.call(this),this.$=null}_f(){this.Wh&&(this.$=h(this.uf.bind(this)))}uf(){var t;this.setValue((t=this.Wh)==null?void 0:t.call(this))}}const c=vt(yt);function n(s){return c(p(s))}class _{constructor(t,e){this.elements=new Set,this.se=V(this.Wa.bind(this)),this.Yh=t,this.kb=e}connect(){this.Wa();const t=new MutationObserver(this.se);t.observe(this.Yh,{childList:!0}),v(()=>t.disconnect()),v(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){t instanceof Node?(e.textContent="",e.append(t)):$t(t,e),e.style.display||(e.style.display="contents");const a=e.firstElementChild;if(!a)return;const d=e.getAttribute("data-class");d&&a.classList.add(...d.split(" "))}Wa(){for(const t of this.Yh.querySelectorAll("slot"))t.hasAttribute("name")&&this.elements.add(t);this.kb(this.elements)}}let kt=0,y="data-slot-id";class U{constructor(t){this.se=V(this.Wa.bind(this)),this.Yh=t,this.slots=new _(t,this.Wa.bind(this))}connect(){this.slots.connect(),this.Wa();const t=new MutationObserver(this.se);t.observe(this.Yh,{childList:!0}),v(()=>t.disconnect())}Wa(){for(const t of this.Yh.children){if(t.nodeType!==1)continue;const e=t.getAttribute("slot");if(!e)continue;t.style.display="none";let a=t.getAttribute(y);a||t.setAttribute(y,a=++kt+"");for(const d of this.slots.elements){if(d.getAttribute("name")!==e||d.getAttribute(y)===a)continue;const m=document.importNode(t,!0);e.includes("-icon")&&m.classList.add("vds-icon"),m.style.display="",m.removeAttribute("slot"),this.slots.assign(m,d),d.setAttribute(y,a)}}}}function D({label:s,icon:t}){return i`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      <slot name="${t}-icon" data-class="vds-menu-button-icon"></slot>
      <span class="vds-menu-button-label">${c(s)}</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}function o(s,t){return n(()=>u(s,t))}function f({tooltip:s}){const{translations:t}=l(),{paused:e}=r().$state,a=n(()=>u(t,e()?"Play":"Pause"));return i`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button class="vds-play-button vds-button" aria-label=${a}>
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-play-tooltip-text">${o(t,"Play")}</span>
        <span class="vds-pause-tooltip-text">${o(t,"Pause")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function w({tooltip:s}){const{translations:t}=l(),{muted:e}=r().$state,a=n(()=>u(t,(e(),"Unmute")));return i`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button class="vds-mute-button vds-button" aria-label=${a}>
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-mute-tooltip-text">${o(t,"Unmute")}</span>
        <span class="vds-unmute-tooltip-text">${o(t,"Mute")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function x({tooltip:s}){const{translations:t}=l(),{textTrack:e}=r().$state,a=n(()=>u(t,e()?"Closed-Captions Off":"Closed-Captions On"));return i`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button class="vds-caption-button vds-button" aria-label=${a}>
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-cc-on-tooltip-text">${o(t,"Closed-Captions Off")}</span>
        <span class="vds-cc-off-tooltip-text">${o(t,"Closed-Captions On")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ct(){const{translations:s}=l(),{pictureInPicture:t}=r().$state,e=n(()=>u(s,t()?"Exit PiP":"Enter PiP"));return i`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button class="vds-pip-button vds-button" aria-label=${e}>
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${o(s,"Enter PiP")}</span>
        <span class="vds-pip-exit-tooltip-text">${o(s,"Exit PiP")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function X({tooltip:s}){const{translations:t}=l(),{fullscreen:e}=r().$state,a=n(()=>u(t,e()?"Exit Fullscreen":"Enter Fullscreen"));return i`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button class="vds-fullscreen-button vds-button" aria-label=${a}>
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-fs-enter-tooltip-text">${o(t,"Enter Fullscreen")}</span>
        <span class="vds-fs-exit-tooltip-text">${o(t,"Exit Fullscreen")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function C({seconds:s,tooltip:t}){const{translations:e}=l(),a=s>=0?"Seek Forward":"Seek Backward",d=o(e,a);return i`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${s}
          aria-label=${d}
        >
          ${s>=0?i`<slot name="seek-forward-icon"></slot>`:i`<slot name="seek-backward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${o(e,a)}
      </media-tooltip-content>
    </media-tooltip>
  `}function j(){const{translations:s}=l(),t=o(s,"Volume");return i`
    <media-volume-slider class="vds-volume-slider vds-slider" aria-label=${t}>
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function S(){const{width:s}=r().$state,{thumbnails:t,translations:e}=l(),a=o(e,"Seek");return i`
    <media-time-slider class="vds-time-slider vds-slider" aria-label=${a}>
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${c(()=>s()<768)}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          src=${c(t)}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function J(){const{translations:s}=l(),{live:t}=r().$state,e=o(s,"Skip To Live"),a=o(s,"LIVE");return t()?i`
    <media-live-button class="vds-live-button" aria-label=${e}>
      <span class="vds-live-button-text">${a}</span>
    </media-live-button
  `:null}function Dt(){return i`
    <div class="vds-time-group">
      <media-time class="vds-time" type="current"></media-time>
      <div class="vds-time-divider">/</div>
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function B(){const{live:s}=r().$state;return s()?J():Dt()}function R(s,t){return i`
    <media-menu-portal .container=${s} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function z({placement:s,tooltip:t,portal:e}){const{viewType:a}=r().$state,{translations:d,smQueryList:m,thumbnails:L,menuContainer:A,noModal:T,menuGroup:$}=l(),g=p(()=>T()?k(s):m.matches?null:k(s)),P=p(()=>!m.matches&&$()==="bottom"&&a()==="video"?26:0),b=i`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${c(g)}
      offset=${c(P)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        thumbnails=${c(L)}
      >
        <template>
          <media-radio class="vds-chapter-radio vds-radio">
            <media-thumbnail class="vds-thumbnail"></media-thumbnail>
            <div class="vds-chapter-radio-content">
              <span class="vds-chapter-radio-label" data-part="label"></span>
              <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
              <span class="vds-chapter-radio-duration" data-part="duration"></span>
            </div>
          </media-radio>
        </template>
      </media-chapters-radio-group>
    </media-menu-items>
  `;return i`
    <!-- Chapters Menu -->
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${o(d,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${q(t)?c(t):t}
        >
          ${o(d,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${e?R(A,b):b}
    </media-menu>
  `}function Z({placement:s,portal:t,tooltip:e}){const{viewType:a,canSetPlaybackRate:d,canSetQuality:m,qualities:L,audioTracks:A,textTracks:T}=r().$state,{translations:$,smQueryList:g,menuContainer:P,noModal:b,menuGroup:it}=l(),ot=p(()=>b()?k(s):g.matches?null:k(s)),nt=p(()=>!g.matches&&it()==="bottom"&&a()==="video"?26:0),lt=p(()=>d()||m()&&L().length||A().length||T().filter(rt).length),O=i`
    <media-menu-items
      class="vds-settings-menu-items vds-menu-items"
      placement=${c(ot)}
      offset=${c(nt)}
    >
      ${wt()}${xt()}${St()}${Lt()}
    </media-menu-items>
  `,dt=i`
    <media-menu class="vds-settings-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${o($,"Settings")}
          >
            <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${q(e)?c(e):e}
        >
          ${o($,"Settings")}
        </media-tooltip-content>
      </media-tooltip>
      ${t?R(P,O):O}
    </media-menu>
  `;return n(()=>lt()?dt:null)}function wt(){const{translations:s}=l();return i`
    <!-- Audio Menu -->
    <media-menu class="vds-audio-menu vds-menu">
      ${D({label:()=>u(s,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${o(s,"Default")}
        >
          <template>
            <media-radio class="vds-audio-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-audio-radio-group>
      </media-menu-items>
    </media-menu>
  `}function xt(){const{translations:s}=l();return i`
    <!-- Speed Menu -->
    <media-menu class="vds-speed-menu vds-menu">
      ${D({label:()=>u(s,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${o(s,"Normal")}
        >
          <template>
            <media-radio class="vds-speed-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-speed-radio-group>
      </media-menu-items>
    </media-menu>
  `}function St(){const{translations:s}=l();return i`
    <!-- Quality Menu -->
    <media-menu class="vds-quality-menu vds-menu">
      ${D({label:()=>u(s,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${o(s,"Auto")}
        >
          <template>
            <media-radio class="vds-quality-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
              <span class="vds-radio-hint" data-part="bitrate"></span>
            </media-radio>
          </template>
        </media-quality-radio-group>
      </media-menu-items>
    </media-menu>
  `}function Lt(){const{translations:s}=l();return i`
    <!-- Captions Menu -->
    <media-menu class="vds-captions-menu vds-menu">
      ${D({label:()=>u(s,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${o(s,"Off")}
        >
          <template>
            <media-radio class="vds-caption-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-captions-radio-group>
      </media-menu-items>
    </media-menu>
  `}function tt(s){let t=document.querySelector(`body > .${s}`);return t||(t=document.createElement("div"),t.style.display="contents",t.classList.add(s),document.body.append(t)),t}function At({name:s,class:t,state:e,paths:a}){return i`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${H(s??e)}
  >
    ${ct(a)?gt(a):c(a)}
  </svg>`}class Tt{constructor(t){this.Hk={},this.Ik=!1,this.Yh=t,this.slots=new _(t,this.Jk.bind(this))}connect(){this.slots.connect(),v(this.disconnect.bind(this))}load(){this.ld().then(t=>{this.Hk=t,this.Ik=!0,this.Jk()})}disconnect(){for(const{slot:t}of this.Kk())t.textContent=""}*Kk(){for(const t of Object.keys(this.Hk)){const e=`${t}-icon`;for(const a of this.slots.elements)a.name===e&&(yield{icon:this.Hk[t],slot:a})}}Jk(){if(this.Ik)for(const{icon:t,slot:e}of this.Kk())this.slots.assign(t,e)}}class Pt extends Tt{connect(){const t=this.Ck();t&&(super.connect(),t.$state.canLoad()?this.load():ut(t,"can-load",()=>this.load(),{once:!0}))}Ck(){let t=this.Yh.parentElement;for(;t&&t.localName!=="media-player";)t=t.parentElement;return t}}class st extends Pt{async ld(){const t=(await bt(()=>import("./vidstack-7cTzfr-b-ccbreklR.js"),__vite__mapDeps([]))).icons,e={};for(const a of Object.keys(t))e[a]=At({name:a,paths:t[a]});return e}}function Mt(){return i`
    <media-captions class="vds-captions"></media-captions>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">${S()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${C({seconds:-10,tooltip:"top start"})}
        ${f({tooltip:"top"})}${C({tooltip:"top",seconds:10})}
        ${n(B)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${w({tooltip:"top"})}
        ${j()}${x({tooltip:"top"})} ${et()}
      </media-controls-group>
    </media-controls>
  `}function It(){return i`
    <media-captions class="vds-captions"></media-captions>
    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        ${n(Bt)}
        ${w({tooltip:"top start"})}${n(J)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${x({tooltip:"top"})}${et()}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${S()}</media-controls-group>

      ${n(Et)}${n(Wt)}
    </media-controls>
  `}function Bt(){const{live:s,canSeek:t}=r().$state;return s()&&!t()?f({tooltip:"top start"}):null}function Et(){const{live:s}=r().$state;return s()?null:i`
        <media-controls-group class="vds-controls-group">
          <media-time class="vds-time" type="current"></media-time>
          <div class="vds-controls-spacer"></div>
          <media-time class="vds-time" type="duration"></media-time>
        </media-controls-group>
      `}function Wt(){const{canSeek:s}=r().$state;return s()?i`
        <media-controls-group class="vds-controls-group">
          <div class="vds-controls-spacer"></div>
          ${C({seconds:-10,tooltip:"top"})}
          ${f({tooltip:"top"})}
          ${C({tooltip:"top",seconds:10})}
          <div class="vds-controls-spacer"></div>
        </media-controls-group>
      `:null}function et(){const s="top end";return i`
    ${z({tooltip:"top",placement:s,portal:!0})}
    ${Z({tooltip:"top end",placement:s,portal:!0})}
  `}const Y=class Y extends F(K,mt){onSetup(){this.forwardKeepAlive=!1,this.h=r(),this.classList.add("vds-audio-layout"),this.menuContainer=tt("vds-audio-layout"),h(()=>{this.menuContainer&&N(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),v(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){h(()=>{this.$props.customIcons()?new U(this).connect():new st(this).connect()})}Ya(){const{streamType:t}=this.h.$state;return this.isMatch&&t()!=="unknown"?this.isSmallLayout?It():Mt():null}render(){return i`${n(this.Ya.bind(this))}`}};Y.tagName="media-audio-layout";let M=Y;function Yt(){return i`
    ${at()}${E()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      ${n(Ot)}

      <div class="vds-controls-spacer"></div>

      <media-controls-group class="vds-controls-group">${S()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${f({tooltip:"top start"})}
        ${w({tooltip:"top"})}${j()}
        ${n(B)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${x({tooltip:"top"})}${n(Gt)}
        ${Ct()} ${X({tooltip:"top end"})}
      </media-controls-group>
    </media-controls>
  `}function Gt(){const{menuGroup:s}=l();return s()==="bottom"?W():null}function Ot(){const{menuGroup:s}=l(),t=s()==="top"?i`
            <div class="vds-controls-spacer"></div>
            ${W()}
          `:null;return i`
    <media-controls-group class="vds-controls-group">${t}</media-controls-group>
  `}function qt(){return i`
    ${at()}${E()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        <div class="vds-controls-spacer"></div>
        ${x({tooltip:"bottom"})}
        ${W()}${w({tooltip:"bottom end"})}
      </media-controls-group>

      <div class="vds-controls-group">${f({tooltip:"top"})}</div>

      <media-controls-group class="vds-controls-group">
        ${n(B)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        <div class="vds-controls-spacer"></div>
        ${X({tooltip:"top end"})}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${S()}</media-controls-group>
    </media-controls>

    ${n(Vt)}
  `}function Vt(){const{duration:s}=r().$state;return s()===0?null:i`
    <div class="vds-start-duration">
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function E(){return i`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function W(){const{menuGroup:s,smQueryList:t}=l(),e=()=>s()==="top"||t.matches?"bottom":"top",a=p(()=>`${e()} ${s()==="top"?"end":"center"}`),d=p(()=>`${e()} end`);return i`
    ${z({tooltip:a,placement:d,portal:!0})}
    ${Z({tooltip:a,placement:d,portal:!0})}
  `}function at(){return i`
    <div class="vds-gestures">
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:controls"></media-gesture>
      <media-gesture
        class="vds-gesture"
        event="dblpointerup"
        action="toggle:fullscreen"
      ></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
    </div>
  `}const G=class G extends F(K,pt){onSetup(){this.forwardKeepAlive=!1,this.h=r(),this.classList.add("vds-video-layout"),this.menuContainer=tt("vds-video-layout"),h(()=>{this.menuContainer&&N(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),v(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){h(()=>{this.$props.customIcons()?new U(this).connect():new st(this).connect()})}Ya(){const{streamType:t}=this.h.$state;return this.isMatch?t()==="unknown"?E():this.isSmallLayout?qt():Yt():null}render(){return i`${n(this.Ya.bind(this))}`}};G.tagName="media-video-layout";let I=G;Q(M);Q(I);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}