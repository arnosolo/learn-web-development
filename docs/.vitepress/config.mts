import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/learn-web-development/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: 'https://arnosolo.github.io/blog/' },
    ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/arnosolo' },
    ],
    logo: '/big-yellow.svg',
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Learn Web development",
      description: "Here are some articles about web development.",
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: '学习网页开发',
      description: '这里有一些关于网页开发的文章.'
    }
  },
})
