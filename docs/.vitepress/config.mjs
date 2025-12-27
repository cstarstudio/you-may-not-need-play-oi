import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "You may not need play oi",
  description: "Advice for some programming enthusiasts/students and parents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Preface', link: '/preface' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cstarstudio/you-may-not-need-play-oi' }
    ]
  },
  locales: {
    root: {
      label: 'English (US)',
      lang: 'en'
    },
    zh_cn: {
      label: '简体中文',
      lang: 'zh-cn'
    }
  }
})
