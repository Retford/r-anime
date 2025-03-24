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
import { headerLinks } from './headerLinks';

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
                {headerLinks.map((headerMobileLink) => (
                  <li key={headerMobileLink.id}>
                    <SheetClose asChild>
                      <Link href={headerMobileLink.href}>
                        {headerMobileLink.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
