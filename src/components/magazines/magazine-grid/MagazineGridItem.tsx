import { DataMagazine } from '@/interfaces/magazine.interface';

interface Props {
  data: DataMagazine;
}
export const MagazineGridItem = ({ data }: Props) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.count}</p>
      <span>{data.url}</span>
    </div>
  );
};
