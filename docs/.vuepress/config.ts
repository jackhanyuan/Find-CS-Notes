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
