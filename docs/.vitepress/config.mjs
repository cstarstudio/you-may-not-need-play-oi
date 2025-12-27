import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "You may not need play oi",
  base: "/you-may-not-need-play-oi/",
  description: "Advice for some programming enthusiasts/students and parents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Why? (为什么)', link: '/why' },
          { text: 'Preface (前言)', link: '/preface' },
          
        ]
      },
      {
        text: "Other",
        items: [
          { text: 'CSP vs OI (CSP与OI的区别)', link: '/csp/' }
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
