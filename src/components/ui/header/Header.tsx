'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { Data } from '@/interfaces/comic.interface';
import { Button } from '../button';

// import { FetchSearchQuery } from '@/fetch/FetchSearchQuery';
import { ChevronsRight, SearchIcon } from 'lucide-react';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandShortcut,
} from '../command';
import { HeaderMobile } from './HeaderMobile';
import { ToggleTheme } from './ToggleTheme';
import { useSearchUIStore } from '@/store/ui/ui-search-store';
import { Loader } from '../loader/Loader';
import { getSearch } from '@/services/search';

export const Header = () => {
  const { isSearchOpen, openSearchMenu, closeSearchMenu } = useSearchUIStore();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Data[]>([]);

  useEffect(() => {
    if (!query.trim()) return setResults([]);

    const fetchData = async () => {
      setLoading(true);
      const { data } = await getSearch(query);
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
                className='text-center py-2 flex justify-center items-center gap-1 sm:hidden border-b-border border-b'
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
            {loading ? (
              <Loader />
            ) : results.length > 0 ? (
              results.map((item, index) => (
                <Link
                  key={`${item.mal_id}-${index}`}
                  href={`/anime/${item.mal_id}`}
                  className='cursor-pointer'
                >
                  <div
                    className='relative flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:text-white hover:bg-red-500 duration-500 transition-colors'
                    onClick={() => {
                      closeSearchMenu();
                      setQuery('');
                    }}
                  >
                    <Image
                      src={item.images.webp.image_url}
                      alt={item.title}
                      width={50}
                      height={50}
                      className='object-cover aspect-square'
                    />
                    <span className='text-pretty w-full line-clamp-2'>
                      {item.title}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
          </CommandList>
          {results.length > 0 && (
            <Link href={`/search?q=${query}`}>
              <div
                className='text-center py-2 hidden sm:flex sm:justify-center sm:items-center sm:gap-1 border-t-border border-t dark:hover:bg-white dark:hover:text-black hover:transition-colors hover:duration-500 transition-colors duration-500 hover:bg-black hover:text-white'
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
              priority
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
