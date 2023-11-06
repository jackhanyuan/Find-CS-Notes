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

  contributors: true,

  editLink: true,

  pageInfo: ["Original", "Date", "Category", "ReadingTime", "PageView",],

  pure: false,
  
  darkmode: "toggle",

  fullscreen: false,

  toc: true,

  hotReload: false,
  
  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Search", "Language", "Repo", "Outlook"],
      },

      // sidebar
      sidebar: zhSidebar,

      footer: function(){var d = new Date(); return 'Copyright © 2022-' + String(d.getFullYear()) + ' 三水 | <a target="_blank" rel="noopener" href="http://beian.miit.gov.cn/">陕ICP备2020013777号-1</a>'}(),

      displayFooter: true,

      copyright: false,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
        toc: '目录',
      },

      routeLocales: {
    
        // 404 pages
        notFoundMsg: ['404 Not Found', '你似乎来到了没有知识存在的荒原', '师傅，页面被妖怪抓走了...'],
        home: '返回主页',
        back: '返回上一页',
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

  blog: {
    name: "Find Notes",
    description: "三水的笔记 - 找到CS的乐趣",
    intro: "/",
    roundAvatar: false,
    sidebarDisplay: "none",
    timeline: "...",
    medias: {
      Email: "mailto:jackhanyuan@foxmail.com",
      Github: "https://github.com/jackhanyuan",
      Rss: "/rss.xml",
    },
  },

  plugins: {
    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    
    // 启用博客 并设置博客插件选项
    blog: true,

    feed: {
      rss: true,
    },

    photoSwipe: true,

    components: {
      components: [
        "Badge",
        "AudioPlayer",
        "BiliBili",
        "VideoPlayer",
        "YouTube",
        "FontIcon",
      ],  
      rootComponents: {
        backToTop: {
          threshold: 100,
          progress: true,
        },
      }, 

    }, 

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
      locales: {
        '/': {
          admin: '管理员',
          level0: '秀才',
          level1: '举人',
          level2: '进士',
          level3: '探花',
          level4: '榜眼',
          level5: '状元',
          placeholder: '客官留个言吧(◕ˇ∀ˇ◕)',
        },
      },
    },

    copyright: true,

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
      mermaid: true,
      sub: true,
      sup: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      gfm: true,
      revealJs: {
        plugins:["highlight", "math", "search", "notes", "zoom"]
      },
      imgMark: false,
      demo: false,
      chart: false,
      echarts: false,
      flowchart: false,
      include: false,
      vPre: false,
      vuePlayground: false,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      themeColor: "#23a2a8",
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
        shortcuts: [
          {
            name: "算法",
            short_name: "algorithm",
            url: "/algorithm/",
            icons: [
              {
                src: "/assets/icon/algorithm-maskable.png",
                sizes: "200x200",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/algorithm-monochrome.png",
                sizes: "200x200",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
