import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "creative",
      text: "算法",
      prefix: "algorithm/",
      link: "algorithm/",
      children: "structure",
    },
  ],
});
