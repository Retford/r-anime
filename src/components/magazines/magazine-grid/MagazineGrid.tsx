import { DataMagazine } from '@/interfaces/magazine.interface';
import { MagazineGridItem } from './MagazineGridItem';

interface Props {
  data: DataMagazine[];
}

export const MagazineGrid = ({ data }: Props) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10'>
      {data.map((anime) => (
        <MagazineGridItem key={anime.mal_id} data={anime} />
      ))}
    </div>
  );
};
