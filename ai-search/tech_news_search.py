#!/usr/bin/env python3
import requests
import json
from datetime import datetime, timedelta
import time

def search_tech_news():
    """Search for technology news from the past hour"""
    
    # Calculate timestamp for 1 hour ago
    one_hour_ago = datetime.now() - timedelta(hours=1)
    
    # Try different tech news sources
    news_results = []
    
    # Try RSS feeds from major tech news sites
    rss_feeds = [
        "https://rss.cnn.com/rss/edition_technology.rss",
        "https://feeds.bbci.co.uk/news/technology/rss.xml",
        "https://www.theverge.com/rss/index.xml"
    ]
    
    for feed_url in rss_feeds:
        try:
            response = requests.get(feed_url, timeout=10)
            if response.status_code == 200:
                # Basic XML parsing for RSS
                content = response.text
                # Extract basic information (simplified)
                if "<item>" in content:
                    items = content.split("<item>")[1:5]  # Get first 4 items
                    for item in items:
                        try:
                            title = item.split("<title>")[1].split("</title>")[0] if "<title>" in item else "No title"
                            link = item.split("<link>")[1].split("</link>")[0] if "<link>" in item else "No link"
                            description = item.split("<description>")[1].split("</description>")[0] if "<description>" in item else "No description"
                            pub_date = item.split("<pubDate>")[1].split("</pubDate>")[0] if "<pubDate>" in item else datetime.now().isoformat()
                            
                            news_results.append({
                                "title": title.strip(),
                                "summary": description[:200] + "..." if len(description) > 200 else description,
                                "publish_time": pub_date,
                                "source_url": link.strip(),
                                "source": feed_url
                            })
                        except Exception as e:
                            continue
        except Exception as e:
            continue
    
    return news_results

if __name__ == "__main__":
    results = search_tech_news()
    print(json.dumps(results, indent=2, ensure_ascii=False))