'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Quote } from 'lucide-react';
import { DataAnimeReviews } from '@/interfaces/animeReviews.interface';
import { SectionTitle } from '../section-cards/SectionTitle';

interface Props {
  reviews: DataAnimeReviews[];
}

export const SectionReviews = ({ reviews }: Props) => {
  return (
    <div className='md:mb-12 flex flex-col gap-4'>
      <SectionTitle name='Reviews' quantity={reviews.length} />

      <div className='w-full max-w-7xl mx-auto overflow-hidden'>
        <Swiper
          effect='coverflow'
          grabCursor
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={1}
          loop
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },

            575: {
              slidesPerView: 2,
            },

            0: {
              centeredSlides: true,
              slidesPerView: 1,
              coverflowEffect: {
                rotate: 0,
                depth: 100,
                modifier: 1,
              },
            },
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className='w-full py-12'
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.mal_id}
              className='bg-transparent transition-all duration-300'
            >
              <div className='relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 h-96 md:h-[450px] group transform-gpu'>
                <div className='absolute inset-0 dark:bg-gradient-to-t dark:from-black dark:via-red-100/20 dark:to-transparent flex flex-col justify-center p-6 text-white bg-gradient-to-t from-gray-500 via-red-100/20 to-transparent'>
                  <figure className='max-w-screen-md text-center'>
                    <Quote
                      color='gray'
                      fill='gray'
                      className='w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600'
                    />
                    <blockquote>
                      <p className='text-sm sm:text-base md:text-lg italic font-medium text-gray-900 dark:text-white line-clamp-12 sm:line-clamp-10 lg:line-clamp-9'>
                        &quot;{review.review}&quot;
                      </p>
                    </blockquote>
                    <figcaption className='flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse'>
                      <Image
                        className='w-6 h-6 rounded-full hidden sm:flex'
                        src={review.user.images.webp.image_url}
                        width={50}
                        height={50}
                        alt='profile picture'
                      />
                      <div className='flex md:flex-col lg:flex-row items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700'>
                        <cite className='pe-3 text-sm md:text-base font-medium text-gray-200 dark:text-white'>
                          {review.user.username}
                        </cite>
                        <cite className='ps-3 text-sm text-white dark:text-gray-400'>
                          {review.tags}
                        </cite>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
