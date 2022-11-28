import { searchProPlugin } from "vuepress-plugin-search-pro";
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
          "算法刷题、Leetcode、代码随想录、剑指Offer、面经、前端、html、css、JavaScript、Linux、计算机基础知识、操作系统、计算机网络、设计模式",
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

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      locales: {
        "/": {
          // 覆盖 placeholder
          placeholder: "开始搜索",
        },
      },
      // 为分类和标签添加索引
      customFields: [
        {
          name: "category",
          getter: (page) => page.frontmatter.category,
          formatter: {
            "/": "分类：$content",
          },
        },
        {
          name: "tag",
          getter: (page) => page.frontmatter.tag,
          formatter: {
            "/": "标签：$content",
          },
        },
      ],
    }),
  ],

});
