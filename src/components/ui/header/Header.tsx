'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '../command';
import { SearchIcon } from 'lucide-react';
import { Button } from '../button';
import { HeaderMobile } from './HeaderMobile';
import { ToggleTheme } from './ToggleTheme';
import { FetchSearchQuery } from '@/fetch/FetchSearchQuery';
import { DataResults } from '@/interfaces/resultsSearch';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DataResults[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return setResults([]);

    const fetchData = async () => {
      setLoading(true);
      const { data } = await FetchSearchQuery(query);
      setResults(data);
      setLoading(false);
    };

    const debounce = setTimeout(fetchData, 500);
    return () => clearTimeout(debounce);
  }, [query]);

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

  console.log(query);

  return (
    <>
      <CommandDialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) setQuery('');
        }}
      >
        <Command>
          <CommandInput
            placeholder='Type a command or search...'
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {loading ? (
              <CommandItem disabled>Loading...</CommandItem>
            ) : results.length > 0 ? (
              results.map((item) => (
                <CommandItem
                  key={item.mal_id}
                  onSelect={() => {
                    setOpen(false);
                    setQuery('');
                  }}
                  value={item.title}
                  className='cursor-pointer'
                >
                  <Link href={`/anime/${item.mal_id}`}>
                    <Image
                      src={item.images.webp.image_url}
                      alt={item.title}
                      width={50}
                      height={50}
                      className='object-cover aspect-square'
                    />
                  </Link>
                  <Link href={`/anime/${item.mal_id}`}>{item.title}</Link>
                </CommandItem>
              ))
            ) : (
              ''
            )}
          </CommandList>
          {results.length > 0 && (
            <Link href={`/search?q=${query}`}>
              <div className='text-center py-2'>View All Results</div>
            </Link>
          )}
        </Command>
      </CommandDialog>
      <header>
        <nav className='mb-2 border-dotted border-b-2 grid grid-cols-4 items-center p-4 gap-4 md:flex md:justify-evenly'>
          <Link href='/'>
            <Image
              src='/images/logo/R-Anime.webp'
              alt='Logo'
              width={150}
              height={150}
              className='w-12 h-12 md:w-24 md:h-18 object-cover'
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
              <Link href='/magazine'>Magazine</Link>
            </li>
          </ul>
          <div className='col-span-2 sm:col-span-1 flex gap-4'>
            <Button
              variant='outline'
              className='cursor-pointer w-full'
              onClick={() => setOpen(!open)}
            >
              <SearchIcon className='size-4 shrink-0 opacity-50' />
              <span className=''>Search</span>
              <p className='text-sm text-muted-foreground hidden lg:block'>
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
