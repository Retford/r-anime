'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Navigation,
  Pagination,
  EffectFade,
  EffectFlip,
  EffectCube,
  EffectCards,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-cards';

const slides = [
  {
    id: 1,
    effect: 'fade',
    images: [
      '/images/anime/naruto.webp',
      '/images/anime/naruto-2.webp',
      '/images/anime/naruto-3.webp',
    ],
  },
  {
    id: 2,
    effect: 'flip',
    images: [
      '/images/anime/naruto.webp',
      '/images/anime/naruto-2.webp',
      '/images/anime/naruto-3.webp',
    ],
  },
  {
    id: 3,
    effect: 'cube',
    images: [
      '/images/anime/naruto.webp',
      '/images/anime/naruto-2.webp',
      '/images/anime/naruto-3.webp',
    ],
  },
  {
    id: 4,
    effect: 'cards',
    images: [
      '/images/anime/naruto.webp',
      '/images/anime/naruto-2.webp',
      '/images/anime/naruto-3.webp',
    ],
  },
];

export default function MultiSlides() {
  useEffect(() => {
    // Este efecto vacío es necesario para asegurar que Swiper se inicialice correctamente en el cliente
  }, []);

  // export const Hero = ({ recommendations }: Props) => {
  //   return <SlideShow recommendations={recommendations} />;
  // };

  return (
    <div className='w-full h-[50vh] bg-gray-100 flex flex-col justify-center'>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className='w-full h-[calc(50vh-20px)]'
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className='flex items-center justify-center'
          >
            <div className='w-full h-full max-w-[calc((100vh-40px)*9/16)] aspect-[9/16] bg-white shadow-lg rounded-lg overflow-hidden'>
              <Swiper
                modules={[
                  EffectFade,
                  EffectFlip,
                  EffectCube,
                  EffectCards,
                  Pagination,
                ]}
                effect={slide.effect as 'fade' | 'flip' | 'cube' | 'cards'}
                pagination={{ clickable: true }}
                loop={true}
                className='w-full h-full'
              >
                {slide.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Slide ${slide.id} Image ${index + 1}`}
                      className='w-full h-full object-cover'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
