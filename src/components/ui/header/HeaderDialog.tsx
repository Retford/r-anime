'use client';

import Link from 'next/link';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from '../command';
import { Loader } from '../loader/Loader';
import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';
import { useSearchUIStore } from '@/store/ui/ui-search-store';
import { useEffect, useState } from 'react';
import { useSearch } from '@/hooks/useSearch';

export const HeaderDialog = () => {
  const { isSearchOpen, openSearchMenu, closeSearchMenu } = useSearchUIStore();
  const [query, setQuery] = useState('');

  const { data, isLoading } = useSearch(query);

  const results = data?.data || [];

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
          {isLoading ? (
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
  );
};
