'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { Data } from '@/interfaces/comic.interface';
import { Button } from '../button';

import { FetchSearchQuery } from '@/fetch/FetchSearchQuery';
import { ChevronsRight, SearchIcon } from 'lucide-react';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '../command';
import { HeaderMobile } from './HeaderMobile';
import { ToggleTheme } from './ToggleTheme';
import { useSearchUIStore } from '@/store/ui/ui-search-store';

export const Header = () => {
  const { isSearchOpen, openSearchMenu, closeSearchMenu } = useSearchUIStore();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Data[]>([]);

  useEffect(() => {
    if (!query.trim()) return setResults([]);

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
        if (isSearchOpen) {
          closeSearchMenu();
        } else {
          openSearchMenu();
        }
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [isSearchOpen, openSearchMenu, closeSearchMenu]);

  return (
    <>
      <CommandDialog
        open={isSearchOpen}
        onOpenChange={(isOpen) => {
          if (isOpen) {
            openSearchMenu();
          } else {
            closeSearchMenu();
          }
          if (!isOpen) setQuery('');
        }}
      >
        <Command>
          <CommandInput
            placeholder='Type a command or search...'
            value={query}
            onValueChange={setQuery}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && query.trim()) {
                window.location.href = `/search?q=${query}`;
                closeSearchMenu();
                setQuery('');
              }
            }}
          />
          {results.length > 0 && (
            <Link href={`/search?q=${query}`}>
              <div
                className='text-center py-2 flex justify-center items-center gap-1 sm:hidden'
                onClick={() => {
                  closeSearchMenu();
                  setQuery('');
                }}
              >
                View All Results
                <ChevronsRight />
              </div>
            </Link>
          )}
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {loading ? (
              <CommandItem disabled>Loading...</CommandItem>
            ) : results.length > 0 ? (
              results.map((item) => (
                <CommandItem
                  key={item.mal_id}
                  onSelect={() => {
                    closeSearchMenu();
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
                  <Link
                    href={`/anime/${item.mal_id}`}
                    className='text-pretty w-full line-clamp-2'
                  >
                    {item.title}
                  </Link>
                </CommandItem>
              ))
            ) : (
              ''
            )}
          </CommandList>
          {results.length > 0 && (
            <Link href={`/search?q=${query}`}>
              <div
                className='text-center py-2 hidden sm:flex sm:justify-center sm:items-center sm:gap-1'
                onClick={() => {
                  closeSearchMenu();
                  setQuery('');
                }}
              >
                View All Results
                <ChevronsRight />
              </div>
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
              <Link href='/top?type=anime'>Top Anime</Link>
            </li>
            <li>
              <Link href='/manga'>Manga</Link>
            </li>
            <li>
              <Link href='/top?type=manga'>Top Manga</Link>
            </li>
            <li>
              <Link href='/magazine'>Magazine</Link>
            </li>
          </ul>
          <div className='col-span-2 sm:col-span-1 flex gap-4'>
            <Button
              variant='outline'
              className='cursor-pointer w-full'
              onClick={isSearchOpen ? closeSearchMenu : openSearchMenu}
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
