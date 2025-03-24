interface HeaderLinksProps {
  id: string;
  href: string;
  name: string;
}

export const headerLinks: HeaderLinksProps[] = [
  {
    id: crypto.randomUUID(),
    href: '/anime',
    name: 'Anime',
  },
  {
    id: crypto.randomUUID(),
    href: '/top?type=anime',
    name: 'Top Anime',
  },
  {
    id: crypto.randomUUID(),
    href: '/manga',
    name: 'Manga',
  },
  {
    id: crypto.randomUUID(),
    href: '/top?type=manga',
    name: 'Top Manga',
  },
  {
    id: crypto.randomUUID(),
    href: '/magazine',
    name: 'Magazine',
  },
];
