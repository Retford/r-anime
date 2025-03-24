'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../button';

import { SearchIcon } from 'lucide-react';

import { useSearchUIStore } from '@/store/ui/ui-search-store';
import { CommandShortcut } from '../command';
import { HeaderDialog } from './HeaderDialog';
import { HeaderMobile } from './HeaderMobile';
import { ToggleTheme } from './ToggleTheme';
import { headerLinks } from './headerLinks';

export const Header = () => {
  const { isSearchOpen, openSearchMenu, closeSearchMenu } = useSearchUIStore();

  return (
    <>
      <HeaderDialog />
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
            {headerLinks.map((headerLink) => (
              <li key={headerLink.id}>
                <Link href={headerLink.href}>{headerLink.name}</Link>
              </li>
            ))}
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
