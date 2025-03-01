import { Data } from '@/interfaces/comic.interface';
import { CardGridItem } from './CardGridItem';

interface Props {
  data: Data[];
  tag: string;
}

export const CardGrid = ({ data, tag }: Props) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-6 gap-10 mb-10'>
      {data.map((comic) => (
        <CardGridItem key={comic.mal_id} comic={comic} tag={tag} />
      ))}
    </div>
  );
};
