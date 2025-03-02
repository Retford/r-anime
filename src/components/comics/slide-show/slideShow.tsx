'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import type { DataRecommendation } from '@/interfaces/recommendations.interface';

interface Props {
  recommendations: DataRecommendation[];
}

export default function SlideShow({ recommendations }: Props) {
  return (
    <Swiper
      effect='fade'
      navigation
      pagination={{ clickable: true }}
      modules={[EffectFade, Navigation, Pagination]}
      className='h-screen w-full'
    >
      {recommendations.map((recommendation) => (
        <SwiperSlide key={recommendation.mal_id} className='relative'>
          <Image
            src={recommendation.entry[0].images.jpg.image_url}
            alt={recommendation.user.username}
            width={1000}
            height={1000}
            className='absolute inset-0 w-full h-full object-cover'
          />
          <div className='absolute inset-0 flex flex-col justify-center items-center text-white bg-black/50'>
            <h1 className='text-4xl font-bold'>
              {recommendation.user.username}
            </h1>
            <p className='text-lg mt-2'>{recommendation.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
