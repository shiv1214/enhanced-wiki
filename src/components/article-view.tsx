import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark, Share2, Edit, Clock } from 'lucide-react';

export function ArticleView() {
  const { slug } = useParams();

  // In a real app, fetch article data based on slug
  const article = {
    title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    content: `This is a sample article content. In a real Wikipedia implementation, this would contain the full article text, images, references, and other related content.`,
    lastModified: new Date().toLocaleDateString(),
    author: 'Wikipedia Contributors',
  };

  return (
    <main className="flex-1 overflow-auto">
      <div className="container py-6 px-4">
        <Card className="max-w-4xl mx-auto p-6">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold">{article.title}</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Clock className="h-4 w-4" />
            <span>Last modified: {article.lastModified}</span>
          </div>

          <div className="prose dark:prose-invert">
            {article.content}
          </div>
        </Card>
      </div>
    </main>
  );
}