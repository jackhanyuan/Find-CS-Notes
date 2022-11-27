import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://findn.cn/",

  author: {
    name: "三水",
    url: "https://sanshui.findn.cn/",
  },

  iconAssets: "//at.alicdn.com/t/c/font_3794007_jjecp27j67.css",

  logo: "/findnotes.svg",

  repo: "jackhanyuan/Find-CS-Notes",

  docsRepo: "jackhanyuan/Find-CS-Notes",

  docsDir: "docs",
  
  docsBranch: 'main',

  lastUpdated: true,

  contributors: false,

  editLink: true,

  pageInfo: ["Original", "Date", "ReadingTime", "PageView"],

  pure: false,
  
  darkmode: "toggle",

  themeColor: {
    blue: "#0088cc",
    green: "#3eaf7c",
    orange: "#ed9240",
    red: "#f26d6d",
  },

  fullscreen: true,

  toc: true,
  
  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      navbarLayout: {
        left: ["Brand"],
        center: ["Links"],
        right: ["Search", "Language", "Repo", "Outlook"],
      },

      // sidebar
      sidebar: zhSidebar,

      footer: 'Copyright © 2022 三水 | <a target="_blank" rel="noopener" href="http://beian.miit.gov.cn/">陕ICP备2020013777号-1</a>',

      displayFooter: true,

      copyright: false,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  sidebarIcon: true,

  sidebarSorter: ["readme", "order", "filename", "title"],

  breadcrumb: true,

  titleIcon: false,

  encrypt: {
    config: {

    },
  },

  plugins: {
    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    blog: false,
  
    components: ["Badge", "BiliBili", "YouTube"],

    photoSwipe: true,

    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://comment.findn.cn/",
      login: 'enable', 
      emoji: [
        '//unpkg.com/@waline/emojis@1.1.0/weibo',
        '//unpkg.com/@waline/emojis@1.1.0/bilibili',
      ],
      requiredMeta:[],
      pageview: true,
      pageSize: 10,
      // reaction: true,
      walineLocales: {
        '/': {
          admin: '管理员',
          level0: '秀才',
          level1: '举人',
          level2: '进士',
          level3: '探花',
          level4: '榜眼',
          level5: '状元',
        },
      },
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      tasklist: true,
      tabs: true,
      codetabs: true,
      container: true,
      footnote: true,
      katex: true,
      mark: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      gfm: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      demo: false,
      chart: false,
      echarts: false,
      flowchart: false,
      include: false,
      mermaid: false,
      sub: false,
      sup: false,
      vPre: false,
      vuePlayground: false,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      update: "available",
      apple: {
        icon: "/assets/icon/findnotes-apple-icon-152.png",
        statusBarColor: 'white',
      },
      msTile: {
        image: "/assets/icon/findnotes-ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: 'Find Notes',
        short_name: '三水的笔记',
        description: '三水的笔记 - 找到CS的乐趣',
        theme_color: "#23a2a8",
        icons: [
          {
            src: "/assets/icon/findnotes-chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/findnotes-chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/findnotes-chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/findnotes-chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
});
