if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let i={};const r=e=>a(e,d),b={module:{uri:d},exports:i,require:r};s[d]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-9c3294e9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Docs Demo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.836d703f.js",revision:"445548493f367025a9ed1944093e7cfc"},{url:"assets/404.html.ccecffde.js",revision:"3a7f5f7364aa9f94fc92d5955bb6d0ee"},{url:"assets/app.b0db2ff6.js",revision:"6cc3475f10b69797adbf26a1d766f13a"},{url:"assets/auto.ca719c30.js",revision:"f44355d40299023db3660428e196d12e"},{url:"assets/baz.html.461a0962.js",revision:"4057a17e6553ceb50f22c2cb119769fb"},{url:"assets/baz.html.504d918b.js",revision:"b3e1517f3215800dbe1afa1398dbb6c4"},{url:"assets/baz.html.54d78d90.js",revision:"f7b69476950d211d0742597b83e4f4e5"},{url:"assets/baz.html.8d503e60.js",revision:"9f203b8a4c5f93753a199a95b5fb47f3"},{url:"assets/diagram-definition.071fd575.9fbe125e.js",revision:"a33c5f3b021bf9d353f2ca310456c1ee"},{url:"assets/disable.html.2b5d6aac.js",revision:"b719d0f54c22ac90bec7ca1bc8443683"},{url:"assets/disable.html.365ff258.js",revision:"e071fb8b193b1ece0a0bc32a49fb8558"},{url:"assets/disable.html.95ed637e.js",revision:"1abec0769d6363fc9dccefcb85a14289"},{url:"assets/disable.html.d5bee194.js",revision:"95609e68f4c0a5432bb22ee898d29d23"},{url:"assets/encrypt.html.2fccb39a.js",revision:"9df19fe0ff5e8746c43252250ef772c5"},{url:"assets/encrypt.html.8b75fc5f.js",revision:"e96e1079d0e8c066eb91dd6ca8aed02b"},{url:"assets/encrypt.html.c0f55bbb.js",revision:"9b10fcb156b9aa39bd05f1ed36023ce8"},{url:"assets/encrypt.html.f060f946.js",revision:"7d1dfebf9c7e258a764e527c561c5535"},{url:"assets/flowchart.parse.8bc2fcba.js",revision:"a3bf05ec1dc83c91d060510bd82032b8"},{url:"assets/highlight.esm.8c0810ff.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/index.26c8431c.js",revision:"1fef675066bb95ec3b3edbc16cbab87e"},{url:"assets/index.html.037ff440.js",revision:"60330e5cc31e03a76995b612bc1007ea"},{url:"assets/index.html.0c78d76a.js",revision:"d11dd84659f0719ad5d1128a4d8628f1"},{url:"assets/index.html.225cfbb1.js",revision:"3d9320c971be0caecc3b873ac71271bb"},{url:"assets/index.html.4c27fe66.js",revision:"b98aed25f515f226a089964d6f10986c"},{url:"assets/index.html.59d668bd.js",revision:"6fc36d24dc1ab7756957e9cba8b25f5b"},{url:"assets/index.html.67b3548e.js",revision:"c855db5429c535bca8247c30d298aab0"},{url:"assets/index.html.7298968f.js",revision:"4157fb150e7a756eecf7fdf6e95c5385"},{url:"assets/index.html.7c0b756f.js",revision:"845b75e090e6d43bfb2960cb35fbdb37"},{url:"assets/index.html.82e13095.js",revision:"faec66e0ce1c3ac0ab087eee5c6d5ac5"},{url:"assets/index.html.947eee70.js",revision:"6de35febdca7a4ec99e3a017a481695f"},{url:"assets/index.html.a5ad5604.js",revision:"c42c54c9d1a5508d17a9cf4d1f526596"},{url:"assets/index.html.d4bb62c8.js",revision:"b738281bdc3b64c6f6eb55a12ee57875"},{url:"assets/index.html.d845c31f.js",revision:"fb5a6068b714ba0bf32001c5182a0984"},{url:"assets/index.html.d84d9a60.js",revision:"9db5d982d8e1494f5db72d4be5ba59aa"},{url:"assets/index.html.de133fb4.js",revision:"b7c08c70a2d23ccbf0b4c118a213dd75"},{url:"assets/index.html.ec0f9295.js",revision:"29a040632f14c0436ff83c7a4c3ca36d"},{url:"assets/index.html.ed4f9e2b.js",revision:"285bea6cf6853e67c15c9a8ab2be7894"},{url:"assets/index.html.edac62d1.js",revision:"2e3f90e4a9955bee5d2fa02fe8445a16"},{url:"assets/index.html.eebc9225.js",revision:"ed2341b6586735739170d9c176f7ae7a"},{url:"assets/index.html.f8747fb1.js",revision:"f7ea4dcbe0da00e30d8ec106d5fdfc5f"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.6b040232.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markdown.html.038224e8.js",revision:"f5d18e1e300b8cf1502ebf7ae9ebf75f"},{url:"assets/markdown.html.451dbead.js",revision:"03345a774a4de8c9c4de1e958fca243c"},{url:"assets/markdown.html.b52660e4.js",revision:"298c80a84d6d47051b206f84810aa789"},{url:"assets/markdown.html.cca685a9.js",revision:"d6fb207215e89a8f122fc42a2b83d759"},{url:"assets/math.esm.a1d69f4d.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid-mindmap.esm.min.7a2d28a3.js",revision:"8f404260a0e5760ad05031a507710c5c"},{url:"assets/mermaid.esm.min.ed366d2f.js",revision:"485935ae9bff8fc42ded6dea331a0555"},{url:"assets/notes.esm.f1c5dda5.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/page.html.3ce2a2c7.js",revision:"30a1d725a4724cd6a71d852e1003417a"},{url:"assets/page.html.4ac40ce1.js",revision:"17e441a5f80187e312feccfc5e3dbe9e"},{url:"assets/page.html.8d650bdf.js",revision:"20ed4332bfc703d2c7dc726da8fe5826"},{url:"assets/page.html.d35c9962.js",revision:"9bfe2192d2dbdc3fbee48dcab318b5fd"},{url:"assets/photoswipe.esm.3e2e3f22.js",revision:"a161e9f0f413b7279a37a1b80c9d0cf2"},{url:"assets/ray.html.4c3303a3.js",revision:"9ab8c453601ef4e419add5be5098d832"},{url:"assets/ray.html.7f1a4fd0.js",revision:"867717a86aab087d0eb035cbb579dc64"},{url:"assets/ray.html.9eff53ef.js",revision:"ceecb4ca942c4488b28a49a11b442f94"},{url:"assets/ray.html.c0757ec7.js",revision:"268053e54ff5aeaf4990fb930468e289"},{url:"assets/reveal.esm.c48207e7.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/search.esm.0d31037c.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/slides.html.332d659c.js",revision:"c6d67dc428218aedd361cf2f3f911b90"},{url:"assets/slides.html.50ea3041.js",revision:"e1a0b1db3d35fdeede431f322c10064f"},{url:"assets/slides.html.5350e21d.js",revision:"9e47b9a4760c24adbfd307c7987af178"},{url:"assets/slides.html.fe6b5009.js",revision:"0c084ddadcdc6abad303a22c03a21fd4"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.84f7857c.css",revision:"77791d07c6b7fe8683b20d4d97f7647e"},{url:"assets/vue-repl.4e40c918.js",revision:"f225c80897e2c8cd23908a23afc1a83b"},{url:"assets/VuePlayground.4faa7f4d.js",revision:"31ad650133a5ca688628cfe9246fbcbb"},{url:"assets/waline-meta.e39d7f63.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"assets/zoom.esm.28df971e.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"a8cdf06ec7e5dc0315805c33b80e9ff2"},{url:"demo/disable.html",revision:"c04b5e57600168630bcb3bbbe6d55ab7"},{url:"demo/encrypt.html",revision:"624a13407442d3dc5972a454f37b2084"},{url:"demo/index.html",revision:"4ecdd606b98b3bd21277052899871ef7"},{url:"demo/markdown.html",revision:"d34f5fc1761d255b79af2357adc68c9e"},{url:"demo/page.html",revision:"38307a2c11e150cbcf1b7df0e884ed75"},{url:"guide/bar/baz.html",revision:"3af7c201de0e853adcaf9278cedf1a3a"},{url:"guide/bar/index.html",revision:"d49866130a9dd399903fd5cd676f7fe2"},{url:"guide/foo/index.html",revision:"9973c51555443279f5617c36d0527c41"},{url:"guide/foo/ray.html",revision:"15e91ee40c5509b2ab67d48440e01d0f"},{url:"guide/index.html",revision:"0df715df29f7e12bbd4c017c42002ae8"},{url:"index.html",revision:"c4a0c791b1da092eb913292e54ca196b"},{url:"slides.html",revision:"eeba83609ed67a5f63ea233a4daaa934"},{url:"zh/demo/disable.html",revision:"ce40b4b87f1af50236107e1caa32e7d4"},{url:"zh/demo/encrypt.html",revision:"03bea1f3c7f3f94e0aef97d7c9477d7a"},{url:"zh/demo/index.html",revision:"bc4424a305da953c28eff574e78155e4"},{url:"zh/demo/markdown.html",revision:"912b5daa99647dac63525afa215c0939"},{url:"zh/demo/page.html",revision:"e62a1cfe8aa2c8801a80269ad4e2690a"},{url:"zh/guide/bar/baz.html",revision:"cf2effaded9929d51a75cff71eece812"},{url:"zh/guide/bar/index.html",revision:"89e1ada3a5eff087cb7ddd4f66cfec4c"},{url:"zh/guide/foo/index.html",revision:"c97916f5d51d6c71309043aac2e11b88"},{url:"zh/guide/foo/ray.html",revision:"41e85403b55c2c1166f726751272d157"},{url:"zh/guide/index.html",revision:"2d609372b35473128f9b5c1cbfbe74d7"},{url:"zh/index.html",revision:"877da1ffaba38a69d461034bb5bd1cfb"},{url:"zh/slides.html",revision:"7fb6349b16a8ee243a810ba1d2c3ba42"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
