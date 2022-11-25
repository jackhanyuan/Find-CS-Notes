import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
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
});
