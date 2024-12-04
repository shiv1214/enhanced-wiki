import { Moon, Sun, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/theme-context';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Palette className="absolute h-5 w-5 rotate-90 scale-0 transition-all sepia:rotate-0 sepia:scale-100 slate:rotate-0 slate:scale-100 black:rotate-0 black:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')} className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')} className="flex items-center gap-2">
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('sepia')} className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <span>Sepia</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('slate')} className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <span>Slate</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('black')} className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <span>Black</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}