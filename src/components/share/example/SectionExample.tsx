'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { ItemByIDResponse } from '@/interfaces/comicById.interface';
import Image from 'next/image';
import { titleFont } from '@/config/font';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
  animes: ItemByIDResponse[];
}

export const SectionExample = ({ animes }: Props) => {
  console.log(animes);
  return (
    <Swiper
      slidesPerView={4}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        575: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      }}
      className='mySwiper h-[600px] sm:h-[675px] lg:h-full 2xl:h-[calc(100vh-130px)] lg:!pb-9 xl:mt-5'
    >
      {animes.map(({ data }) => (
        <SwiperSlide
          key={data.mal_id}
          className='!flex flex-col items-center p-4 gap-4 mb-4 2xl:p-0 2xl:gap-6'
        >
          <h2
            className={`${titleFont.className} line-clamp-1 text-base lg:text-base 2xl:text-xl`}
          >
            {data.title}
          </h2>
          <Image
            src={data.images.webp.large_image_url}
            alt={data.title}
            width={600}
            height={600}
            className='object-cover w-96 h-96 xl:h-[550px] 2xl:h-[500px] 2xl:w-full'
          />
          <p className='line-clamp-2 text-center text-sm sm:line-clamp-5 lg:line-clamp-9 xl:px-8 xl:text-xl xl:line-clamp-4 2xl:text-base 2xl:line-clamp-6'>
            {data.synopsis}
          </p>
          <Link href={`/anime/${data.mal_id}`}>
            <Button variant='anime'>Show Details</Button>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
