import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function FeaturedArticle() {
  const slug = 'james-webb-space-telescope';

  return (
    <Card className="relative overflow-hidden border border-border/50 shadow-lg bg-card/50 backdrop-blur">
      <div className="absolute top-4 right-4">
        <Star className="h-5 w-5 text-primary" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">The James Webb Space Telescope</h2>
        <p className="text-muted-foreground mb-4">
          Discover how this revolutionary space observatory is changing our understanding of the cosmos with its unprecedented infrared capabilities and remarkable discoveries.
        </p>
        <img
          src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800"
          alt="James Webb Space Telescope"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center gap-4">
          <Button variant="default" asChild>
            <Link to={`/article/${slug}`}>Read More</Link>
          </Button>
          <Button variant="outline">Save for Later</Button>
        </div>
      </div>
    </Card>
  );
}