#!/bin/bash

# VitePress 博客部署脚本

echo "🚀 开始部署 AI Daily Report 博客..."

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run docs:build

echo "✅ 构建完成！"
echo "📁 构建输出目录: docs/.vitepress/dist"
echo "🌐 可以将此目录部署到 GitHub Pages、Vercel 或其他静态网站托管服务"

echo ""
echo "📋 部署指南:"
echo "1. GitHub Pages: 将 dist 目录推送到 gh-pages 分支"
echo "2. Vercel: 连接此仓库，设置构建命令为 'npm run docs:build'"
echo "3. Netlify: 设置发布目录为 'docs/.vitepress/dist'"

echo ""
echo "🎉 部署脚本执行完成！"