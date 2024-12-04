import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useState } from 'react';

export function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative w-full max-w-2xl" onClick={() => setOpen(true)}>
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search Wikipedia..."
          className="pl-9 pr-4"
        />
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Results">
            <CommandItem>Quantum Physics</CommandItem>
            <CommandItem>Ancient Rome</CommandItem>
            <CommandItem>Renaissance Art</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Categories">
            <CommandItem>Science</CommandItem>
            <CommandItem>History</CommandItem>
            <CommandItem>Technology</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}