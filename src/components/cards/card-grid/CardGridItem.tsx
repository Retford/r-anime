'use client';

import { Data } from '@/interfaces/comic.interface';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  comic: Data;
  tag: string;
}
export const CardGridItem = ({ comic, tag }: Props) => {
  return (
    <div className='rounded-md overflow-hidden fade-in'>
      <div key={comic.mal_id}>
        <h2>{comic.title}</h2>
        <span>{comic.rank}</span>
        <Link href={`/${tag}/${comic.mal_id}`}>
          <Image
            src={comic.images.jpg.image_url}
            alt={comic.title}
            width={200}
            height={200}
          />
        </Link>
      </div>
    </div>
  );
};
