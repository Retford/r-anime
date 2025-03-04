import { Metadata } from 'next';
import { SearchContent } from './ui/SearchContent';
import { Separator } from '@/components/ui/separator';

interface Props {
  searchParams: Promise<{ q: string; page?: string }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { q } = await searchParams;

  return {
    title: `Search: ${q}`,
    description:
      'Easily find your favorite anime, manga or magazine with our advanced search engine. Browse titles, genres and discover new stories instantly.',
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;
  const { q } = await searchParams;

  return (
    <div className='container m-auto pt-2 pb-12'>
      <h2 className='text-base md:text-lg lg:text-xl xl:text-3xl py-4 pl-4'>
        Search results for &quot;{q.toUpperCase()}&quot;
      </h2>
      <Separator className='mb-8' />
      <SearchContent page={page} q={q} />
    </div>
  );
}
