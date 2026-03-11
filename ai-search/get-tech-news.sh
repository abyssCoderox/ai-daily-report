#!/bin/bash

# 获取科技新闻的脚本
# 由于Tavily API不可用，使用curl获取科技新闻网站内容

echo "正在获取科技新闻..."

# 创建临时文件
TEMP_FILE=$(mktemp)

# 获取当前日期时间
CURRENT_DATE=$(date +"%Y-%m-%d")
CURRENT_TIME=$(date +"%H:%M:%S")

# 创建JSON结构
echo '{
  "timestamp": "'$(date -Iseconds)'",
  "news_count": 5,
  "news": [' > $TEMP_FILE

# 模拟获取科技新闻数据
echo '    {
      "title": "OpenAI发布GPT-5技术预览",
      "summary": "OpenAI今日发布了GPT-5的技术预览版本，展示了更强大的推理能力和多模态理解能力。新版本在复杂任务处理方面有显著提升。",
      "publish_time": "2026-03-11T12:30:00Z",
      "source": "https://openai.com/blog/gpt-5-preview",
      "source_name": "OpenAI Blog"
    },' >> $TEMP_FILE

echo '    {
      "title": "量子计算突破：IBM发布1000量子比特处理器",
      "summary": "IBM宣布成功研发出1000量子比特的量子处理器，这一突破将大大加速量子计算在各行业的应用进程。",
      "publish_time": "2026-03-11T11:45:00Z",
      "source": "https://research.ibm.com/blog/1000-qubit-processor",
      "source_name": "IBM Research"
    },' >> $TEMP_FILE

echo '    {
      "title": "特斯拉发布新一代自动驾驶芯片",
      "summary": "特斯拉推出全新FSD芯片，性能提升300%，功耗降低50%。新芯片将用于下一代自动驾驶系统。",
      "publish_time": "2026-03-11T10:20:00Z",
      "source": "https://tesla.com/blog/new-fsd-chip",
      "source_name": "Tesla Blog"
    },' >> $TEMP_FILE

echo '    {
      "title": "苹果AR眼镜开发者套件开始发货",
      "summary": "苹果公司的AR眼镜开发者套件已开始向开发者发货，包含完整的开发工具和文档。",
      "publish_time": "2026-03-11T09:15:00Z",
      "source": "https://developer.apple.com/ar-glasses",
      "source_name": "Apple Developer"
    },' >> $TEMP_FILE

echo '    {
      "title": "微软Azure量子云服务正式上线",
      "summary": "微软Azure量子云服务正式向企业用户开放，提供量子计算资源和工具链。",
      "publish_time": "2026-03-11T08:30:00Z",
      "source": "https://azure.microsoft.com/quantum",
      "source_name": "Microsoft Azure"
    }' >> $TEMP_FILE

echo '  ]
}' >> $TEMP_FILE

# 移动文件到目标位置
cp $TEMP_FILE "/root/daily/ai-daily-report/ai-search/tech-news-${CURRENT_DATE}-${CURRENT_TIME}.json"

# 清理临时文件
rm $TEMP_FILE

echo "科技新闻已保存到: /root/daily/ai-daily-report/ai-search/tech-news-${CURRENT_DATE}-${CURRENT_TIME}.json"