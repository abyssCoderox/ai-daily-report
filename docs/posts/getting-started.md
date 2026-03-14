---
title: 快速开始
date: 2026-03-09
description: 了解如何使用 AI Daily Report 博客系统
---

# 快速开始

欢迎使用 AI Daily Report 博客系统！这是一个基于 VitePress 搭建的静态网站，专门用于记录和分享 AI 学习心得。

## 🛠️ 环境要求

- Node.js 18+
- npm 或 yarn

## 📦 安装

```bash
npm install
```

## 🚀 本地开发

启动开发服务器：

```bash
npm run docs:dev
```

构建生产版本：

```bash
npm run docs:build
```

预览生产版本：

```bash
npm run docs:preview
```

## 📝 创建新文章

1. 在 `docs/posts/` 目录下创建新的 Markdown 文件
2. 使用 YAML frontmatter 设置文章元数据：

```markdown
---
title: 文章标题
date: 2026-03-09
description: 文章描述
---

# 文章标题

文章内容...
```

3. 更新配置文件以在侧边栏显示新文章

## 🎨 自定义配置

编辑 `docs/.vitepress/config.js` 来自定义：

- 网站标题和描述
- 导航菜单
- 侧边栏结构
- 主题设置

## 🚀 部署

### 部署到 GitHub Pages

1. 构建项目：`npm run docs:build`
2. 将 `docs/.vitepress/dist` 目录部署到 GitHub Pages

### 部署到 Vercel

1. 连接 GitHub 仓库到 Vercel
2. 设置构建命令：`npm run docs:build`
3. 设置输出目录：`docs/.vitepress/dist`

现在你已经了解了基本使用方法，开始记录你的 AI 学习历程吧！ 🎉