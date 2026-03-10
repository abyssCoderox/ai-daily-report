import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Daily Report',
  description: '日常 AI 学习记录博客',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: 'Claude 报告', link: '/claude/report' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: [
            { text: '开始使用', link: '/posts/getting-started' }
          ]
        }
      ],
      '/claude/': [
        {
          text: 'Claude 报告',
          items: [
            { text: '述职报告', link: '/claude/report' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/abyssCoderox/ai-daily-report' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 AI Daily Report'
    }
  },

  vite: {
    server: {
      host: true,
      port: 3000
    }
  }
})