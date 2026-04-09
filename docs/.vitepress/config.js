import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Daily Report',
  description: '一个使用 VitePress 搭建的 AI 学习记录博客系统',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      {
        text: '文章列表',
        items: [
          { text: '快速开始', link: '/posts/getting-started' }
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  },
  lang: 'zh-CN'
})