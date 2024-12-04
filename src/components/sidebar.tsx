import { Book, History, Languages, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden border-r border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <ScrollArea className="h-[calc(100vh-3.5rem)] px-4">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold text-foreground">Navigation</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors">
                <Book className="mr-2 h-4 w-4" />
                Contents
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors">
                <History className="mr-2 h-4 w-4" />
                History
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors">
                <Languages className="mr-2 h-4 w-4" />
                Languages
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors">
                <FileText className="mr-2 h-4 w-4" />
                Trending
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}