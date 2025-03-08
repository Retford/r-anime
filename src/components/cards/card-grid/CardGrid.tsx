import type { Data } from '@/interfaces/comic.interface';
import type { ComicType } from '@/interfaces/api-types';
import { CardGridItem } from './CardGridItem';

interface Props {
  data: Data[];
  tag: ComicType;
}

export const CardGrid = ({ data, tag }: Props) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 p-2 xl:gap-4 2xl:gap-4 mb-10'>
      {data.map((comic) => (
        <CardGridItem key={comic.mal_id} comic={comic} tag={tag} />
      ))}
    </div>
  );
};
