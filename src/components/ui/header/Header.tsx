'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../command';
import { Calendar, Smile, Calculator, SearchIcon } from 'lucide-react';
import { Button } from '../button';
import { HeaderMobile } from './HeaderMobile';
import { ToggleTheme } from './ToggleTheme';

export const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
      <header>
        <nav className='mb-2 border-dotted border-b-2 grid grid-cols-4 items-center p-4 gap-4 md:flex md:justify-evenly'>
          <Link href='/'>
            <Image
              src='/images/logo/R-Anime.webp'
              alt='Logo'
              width={150}
              height={150}
              className='w-12 h-12 md:w-24 md:h-18 object-cover mask-fade'
            />
          </Link>
          <ul className='sm:flex gap-6 items-center hidden sm:col-span-2'>
            <li>
              <Link href='/anime'>Anime</Link>
            </li>
            <li>
              <Link href='/manga'>Manga</Link>
            </li>
            <li>
              <Link href='/magazine'>Revistas</Link>
            </li>
          </ul>
          <div className='col-span-2 sm:col-span-1 flex gap-4'>
            <Button
              variant='outline'
              className='cursor-pointer w-full'
              onClick={() => setOpen(!open)}
            >
              <SearchIcon className='size-4 shrink-0 opacity-50' />
              <span className=''>Buscar</span>
              <p className='text-sm text-muted-foreground hidden'>
                <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
                  <CommandShortcut>Ctrl + J</CommandShortcut>
                </kbd>
              </p>
            </Button>

            {/* Change theme dark - light */}
            <ToggleTheme />
          </div>
          {/* Menu Mobile */}
          <HeaderMobile />
        </nav>
      </header>
    </>
  );
};
