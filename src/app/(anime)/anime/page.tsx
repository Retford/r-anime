import type { Animes } from '@/interfaces/animes.interface';
import Image from 'next/image';

export default async function AnimePage() {
  //   try {
  const resp = await fetch('https://api.jikan.moe/v4/anime');

  const { data } = (await resp.json()) as Animes;
  // console.log(data);
  // return data;
  //   } catch (error) {
  // console.log(error);
  // return {
  //   ok: false,
  //   message: 'No se pudo cargar los animes',
  // };
  //   }

  return (
    <div className='grid grid-cols-6'>
      {data.map((anime) => (
        <div key={anime.mal_id}>
          <h2>{anime.title}</h2>
          <span>{anime.rank}</span>
          <Image
            src={anime.images.jpg.image_url}
            alt={anime.title}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}
