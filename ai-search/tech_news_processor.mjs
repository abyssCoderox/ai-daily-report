import { execSync } from 'child_process';
import fs from 'fs';

// 运行搜索命令
const searchResults = execSync(
  'cd /root/.openclaw/extensions/openclaw-tavily/skills/tavily-search && node scripts/search.mjs "科技新闻" --topic news --time-range day -n 10',
  { encoding: 'utf8' }
);

// 解析搜索结果
const lines = searchResults.split('\n');
const sources = [];
let currentSource = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // 检测新的source条目
  if (line.startsWith('- **') && line.includes('** (relevance:')) {
    if (currentSource) {
      sources.push(currentSource);
    }
    
    // 提取标题和链接
    const titleMatch = line.match(/\*\*(.*?)\*\*/);
    const linkMatch = line.match(/https?:\/\/[^\s\)]+/);
    const relevanceMatch = line.match(/relevance: (\d+)%/);
    
    currentSource = {
      title: titleMatch ? titleMatch[1] : '',
      url: linkMatch ? linkMatch[0] : '',
      relevance: relevanceMatch ? parseInt(relevanceMatch[1]) : 0,
      summary: ''
    };
  } else if (currentSource && line && !line.startsWith('---') && !line.startsWith('##') && !line.startsWith('*') && !line.match(/^https?:\/\//)) {
    // 收集摘要信息
    currentSource.summary += line + ' ';
  }
}

// 添加最后一个source
if (currentSource) {
  sources.push(currentSource);
}

// 清理摘要
sources.forEach(source => {
  source.summary = source.summary.trim().replace(/\s+/g, ' ');
});

// 创建JSON数据结构
const result = {
  search_time: new Date().toISOString(),
  search_query: "科技新闻",
  time_range: "过去24小时",
  total_results: sources.length,
  news: sources.map(source => ({
    title: source.title,
    summary: source.summary,
    url: source.url,
    relevance_score: source.relevance,
    publish_time: new Date().toISOString() // 由于API限制，使用当前时间作为发布时间
  }))
};

// 生成带时间戳的文件名
const now = new Date();
const dateStr = now.toISOString().split('T')[0];
const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
const filename = `tech_news_${dateStr}_${timeStr}.json`;
const filepath = `/root/daily/ai-daily-report/ai-search/${filename}`;

// 写入JSON文件
fs.writeFileSync(filepath, JSON.stringify(result, null, 2), 'utf8');

console.log(`科技新闻搜索结果已保存到: ${filepath}`);
console.log(`共检索到 ${sources.length} 条新闻`);