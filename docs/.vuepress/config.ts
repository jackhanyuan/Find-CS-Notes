import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Find Notes",
      description: "三水的笔记 - 找到CS笔记的乐趣",
    }
  },

  theme,

  pagePatterns: ["**/*.md", "!*.snippet.md", "!.vuepress", "!node_modules"],

  shouldPrefetch: false,

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "三水 Sanshui" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "算法刷题、Leetcode、代码随想录、剑指Offer、面经、前端、html、css、JavaScript、Vue、Linux、计算机基础知识、操作系统、计算机网络、设计模式",
      },
    ],

    // 添加百度统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?fe2fd152ff81bda5ab3d716e24cfaa64";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],

});
