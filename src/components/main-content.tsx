import { Link } from 'react-router-dom';
import { FeaturedArticle } from '@/components/featured-article';
import { TrendingArticles } from '@/components/trending-articles';

export function MainContent() {
  const categories = [
    {
      title: 'Quantum Computing Explained',
      category: 'Science & Tech',
      description: 'Explore the principles behind quantum computing and its potential impact...',
      slug: 'quantum-computing'
    },
    {
      title: 'Ancient Civilizations',
      category: 'History',
      description: 'Discover the fascinating stories of ancient civilizations and their legacy...',
      slug: 'ancient-civilizations'
    },
    {
      title: 'Renaissance Art Movement',
      category: 'Arts & Culture',
      description: 'Learn about the cultural revolution that defined European art history...',
      slug: 'renaissance-art'
    }
  ];

  return (
    <main className="flex-1 overflow-auto">
      <div className="container py-6 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
              Welcome to Enhanced Wikipedia
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience knowledge sharing reimagined for the modern web.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FeaturedArticle />
            <TrendingArticles />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((item, i) => (
              <Link key={i} to={`/article/${item.slug}`}>
                <div className="group cursor-pointer space-y-3 rounded-lg border p-4 transition-colors hover:bg-accent">
                  <div className="text-sm text-muted-foreground">
                    {item.category}
                  </div>
                  <div className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}