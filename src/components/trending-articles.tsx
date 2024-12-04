import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

export function TrendingArticles() {
  const trendingArticles = [
    {
      title: "SpaceX's Latest Launch",
      views: "2.1M",
      category: "Technology",
      slug: "spacex-latest-launch"
    },
    {
      title: "2024 Olympic Games",
      views: "1.8M",
      category: "Sports",
      slug: "2024-olympic-games"
    },
    {
      title: "Artificial Intelligence Breakthroughs",
      views: "1.5M",
      category: "Science",
      slug: "ai-breakthroughs"
    }
  ];

  return (
    <Card className="p-6 border border-border/50 shadow-lg bg-card/50 backdrop-blur">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Trending Articles</h2>
      </div>
      <div className="space-y-4">
        {trendingArticles.map((article, index) => (
          <Link key={index} to={`/article/${article.slug}`}>
            <div className="group cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{article.category}</p>
                </div>
                <span className="text-xs text-muted-foreground">{article.views} views</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}