import Link from 'next/link';
import { Button } from '../button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../sheet';
import { Menu } from 'lucide-react';

export const HeaderMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className='sm:hidden'>
        <Button variant='secondary'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <nav>
              <ul>
                <li>
                  <SheetClose asChild>
                    <Link href='/anime'>Anime</Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href='/top?type=anime'>Top Anime</Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href='manga'>Manga</Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href='manga'>Top Manga</Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href='magazine'>Magazine</Link>
                  </SheetClose>
                </li>
              </ul>
            </nav>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
