import { TopContent } from './ui/TopContent';

interface Props {
  searchParams: Promise<{ type: 'anime' | 'manga'; page?: string }>;
}
export default async function TopAnimePage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;
  const { type } = await searchParams;

  return (
    <div className='container m-auto pt-2 pb-12'>
      <TopContent page={page} type={type} />
    </div>
  );
}
