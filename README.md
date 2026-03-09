# AI Daily Report

一个使用 VitePress 搭建的 AI 学习记录博客系统。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览生产版本
npm run docs:preview
```

## 📖 功能特性

- ✅ 基于 VitePress，构建速度快
- ✅ 支持 Markdown 语法
- ✅ 响应式设计，支持移动端
- ✅ 代码高亮和数学公式支持
- ✅ 全文搜索功能
- ✅ 主题自定义

## 📁 项目结构

```
docs/
├── .vitepress/
│   └── config.js          # VitePress 配置文件
├── posts/                 # 文章目录
│   ├── index.md          # 文章列表
│   └── getting-started.md # 示例文章
├── index.md              # 首页
└── about.md              # 关于页面
```

## 📝 写作指南

### 创建新文章

1. 在 `docs/posts/` 目录下创建新的 Markdown 文件
2. 使用标准的 Markdown 语法编写内容
3. 可以通过 YAML frontmatter 设置文章元数据

### 示例文章结构

```markdown
---
title: 文章标题
date: 2026-03-09
---

# 文章标题

文章内容...
```

## 🚀 部署

### 部署到 GitHub Pages

1. 构建项目：
   ```bash
   npm run docs:build
   ```

2. 将 `docs/.vitepress/dist` 目录部署到 GitHub Pages

### 部署到 Vercel

1. 连接 GitHub 仓库到 Vercel
2. 设置构建命令：`npm run docs:build`
3. 设置输出目录：`docs/.vitepress/dist`

## 🎨 自定义配置

编辑 `docs/.vitepress/config.js` 来自定义：

- 网站标题和描述
- 导航菜单
- 侧边栏结构
- 主题设置
- 插件配置

## 📚 技术栈

- [VitePress](https://vitepress.dev/) - 静态网站生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Markdown](https://commonmark.org/) - 标记语言

## 📄 许可证

MIT License

## 🙏 致谢

感谢 VitePress 团队提供如此优秀的静态网站生成器！
