import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // only use sidebar in routes you set
  "/": false,

  "/algorithm/": [
    {
      text: "代码随想录",
      icon: "code",
      prefix: "carl/",
      link: "carl/",
      children: "structure",
    },
    {
      text: "LeetCode",
      icon: "leetcode",
      prefix: "leetcode/",
      link: "leetcode/",
      collapsible: true,
      children: "structure",
    },
  ],

  // "/web/": "structure",

  "/cs/": "structure",

});
