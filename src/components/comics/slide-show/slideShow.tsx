'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Heart, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { titleFont } from '@/config/font';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Datos de ejemplo para los animes
const animeData = [
  {
    id: 21,
    title: 'One Piece',
    originalTitle: '(ONE PIECE)',
    description:
      'Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.\n\nThe late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.\n\nAs he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, together embracing perils and wonders on their once-in-a-lifetime adventure.',
    image: '/images/anime/luffy.png',
    rating: 9.03,
    ratingCount: '2,848,905',
    favorites: '237,519',
  },
  {
    id: 1535,
    title: 'Demon Slayer',
    originalTitle: '(鬼滅の刃)',
    description:
      "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.\n\nWhen he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.",
    image: '/images/anime/demon-slayer.png',
    rating: 8.52,
    ratingCount: '1,456,789',
    favorites: '156,432',
  },
  {
    id: 5114,
    title: 'Attack on Titan',
    originalTitle: '(進撃の巨人)',
    description:
      'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.',
    image: '/images/anime/mikasa.png',
    rating: 8.54,
    ratingCount: '2,145,678',
    favorites: '198,765',
  },
];

export default function SlideShow() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      effect='fade'
      fadeEffect={{ crossFade: true }}
      speed={800}
      grabCursor
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      className='w-full h-96 lg:h-[600px]'
    >
      {animeData.map((anime) => (
        <SwiperSlide key={anime.id}>
          <div className='w-screen flex h-96 lg:h-[600px] lg:w-full justify-center items-center'>
            <div className='relative h-full grid grid-cols-1 sm:gap-1 md:gap-0 sm:grid-cols-2 w-3/4 sm:w-full md:w-[85%] sm:p-2 2xl:w-2/3 lg:w-full'>
              <Image
                src={anime.image || '/placeholder.svg'}
                alt={anime.title}
                className='top-1/2 right-0 -translate-y-1/2 absolute object-scale-down sm:w-80 sm:h-auto lg:w-[600px] xl:w-[640px] xl:h-[512px] hidden sm:flex'
                width={1200}
                height={500}
                priority
              />
              <div className='flex flex-col justify-center items-start gap-2 lg:gap-8 h-full w-full py-2 lg:p-16 dark:text-white'>
                <div className='flex flex-col gap-2'>
                  <h2
                    className={`text-sm lg:text-5xl ${titleFont.className} antialiased`}
                  >
                    {anime.title}
                  </h2>
                  <span className='text-sm lg:text-xl'>
                    {anime.originalTitle}
                  </span>
                </div>
                <div>
                  <p className='text-sm lg:text-base line-clamp-4 text-pretty'>
                    {anime.description}
                  </p>
                  <Button asChild variant='link' className='text-red-500 p-0'>
                    <Link href={`anime/${anime.id}`}>Read More</Link>
                  </Button>
                </div>
                <div className='flex flex-wrap gap-0.5 lg:gap-4'>
                  <Badge variant='outline' className='p-2 select-none'>
                    <Star /> {anime.rating}
                  </Badge>
                  <Badge variant='outline' className='p-2 select-none'>
                    {anime.ratingCount} ratings
                  </Badge>
                  <Badge variant='outline' className='p-2 select-none'>
                    <Heart /> {anime.favorites}
                  </Badge>
                </div>
                <Button asChild variant='anime'>
                  <Link href={`anime/${anime.id}`}>Show Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
