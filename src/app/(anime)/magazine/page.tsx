import { Metadata } from 'next';
import { MagazineContent } from './ui/MagazineContent';

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export const metadata: Metadata = {
  title: 'Magazines',
  description:
    'Discover a collection of anime magazines with detailed information, featured issues and exclusive content about your favorite series.',
};

export default async function MagazinePage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;

  return <MagazineContent page={page} />;
}
