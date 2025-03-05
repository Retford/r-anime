'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import './styles.css';

export const PageNotFound = () => {
  const router = useRouter();
  const [hoverEffect, setHoverEffect] = useState(false);

  return (
    <div className='min-h-screen bg-transparent overflow-hidden relative'>
      {/* Fondo con patrón de velocidad (efecto manga) */}
      {/* <div className='absolute inset-0 opacity-10 pointer-events-none'>
        <div className='absolute inset-0 bg-speed-lines'></div>
      </div> */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(90deg,#00000000,#00000045_1px,transparent_1px,transparent_20px)] dark:before:bg-[repeating-linear-gradient(90deg,#ffffff00,#ffffff57_1px,transparent_1px,transparent_20px)] before:[animation:speed-lines_0.5s_infinite_linear]'></div>

      {/* Contenido principal */}
      <div className='container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen relative z-10'>
        <div className='w-full max-w-5xl'>
          {/* Título estilo anime */}
          <div className='text-center mb-8'>
            <h1 className='text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 drop-shadow-[0_5px_0px_rgba(0,0,0,0.3)] transform -rotate-2'>
              ERROR 404
            </h1>
            <div className='text-sm sm:text-base font-bold dark:text-white transform rotate-1 mt-2'>
              ページが見つかりません!
            </div>
          </div>

          {/* Paneles de manga */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            {/* Panel 1: Personaje sorprendido */}
            <div className='relative bg-gray-100 border-4 border-black dark:border-gray-500 p-4 aspect-[4/3] transform rotate-1 shadow-xl'>
              <div className='absolute top-0 right-0 bottom-0 left-0 dark:bg-black m-2 z-0'></div>
              <div className='relative z-10 h-full flex flex-col'>
                <div className='flex-1 flex items-center justify-center'>
                  <div className='relative w-full h-full'>
                    <Image
                      src='/images/starman_750x750.png'
                      alt='Personaje anime sorprendido'
                      width={400}
                      height={300}
                      className='object-contain w-full h-full'
                    />

                    {/* Efectos de sorpresa */}
                    <div className='absolute top-1/4 right-1/4 w-12 h-12 text-yellow-500'>
                      <Star className='w-full h-full animate-ping' />
                    </div>
                    <div className='absolute bottom-1/3 left-1/4 w-10 h-10 text-yellow-500'>
                      <Star
                        className='w-full h-full animate-ping'
                        style={{ animationDelay: '0.5s' }}
                      />
                    </div>
                  </div>
                </div>
                <div className='text-center font-bold italic text-sm mt-2 absolute'>
                  &quot;What, the page is gone!&quot;
                </div>
              </div>

              {/* Onomatopeya manga */}
              <div className='absolute -top-6 -right-6 transform rotate-12 z-20'>
                <div className='font-manga text-5xl text-red-600 drop-shadow-[0_2px_0px_rgba(0,0,0,1)]'>
                  ガーン!
                </div>
              </div>
            </div>

            {/* Panel 2: Escena dramática */}
            <div className='relative bg-gray-100 border-4 border-black dark:border-gray-500 p-4 aspect-[4/3] transform -rotate-1 shadow-xl'>
              <div className='absolute top-0 right-0 bottom-0 left-0 dark:bg-black m-2 z-0'></div>
              <div className='relative z-10 h-full flex flex-col'>
                <div className='flex-1 flex items-center justify-center'>
                  <div className='relative w-full h-full'>
                    <div className='absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'></div>

                    {/* Silueta de personaje */}
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-64'>
                      <div className='w-full h-full bg-black opacity-80'></div>
                    </div>

                    {/* Efecto de portal/vórtice */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='w-48 h-48 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-pulse'></div>
                      <div className='absolute w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-ping opacity-50'></div>
                      <div className='absolute w-32 h-32 rounded-full bg-white'></div>
                      <div className='absolute font-bold text-5xl text-black'>
                        404
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-center font-bold italic text-sm mt-2'>
                  &quot;The portal to the page has been closed...&quot;
                </div>
              </div>

              {/* Líneas de énfasis */}
              <div className='absolute inset-0 pointer-events-none'>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className='absolute bg-black h-[1px] opacity-20'
                    style={{
                      top: '50%',
                      left: '50%',
                      width: '200%',
                      transform: `rotate(${i * 45}deg) translateX(-50%)`,
                      transformOrigin: 'left center',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel grande: Escena final */}
          <div className='relative bg-gray-100 border-4 border-black dark:border-gray-500 p-4 mb-12 transform rotate-0.5 shadow-xl'>
            <div className='absolute top-0 right-0 bottom-0 left-0 dark:bg-black m-2 z-0'></div>
            <div className='relative z-10 flex flex-col md:flex-row items-center p-4 gap-6'>
              {/* Personaje determinado */}
              <div className='w-full md:w-1/3 flex justify-center'>
                <div className='relative w-48 h-64'>
                  <Image
                    src='/images/starman_750x750.png'
                    alt='Personaje anime determinado'
                    width={192}
                    height={256}
                    className='object-contain w-full h-full'
                  />

                  {/* Efecto de aura */}
                  <div className='absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-30 animate-pulse'></div>
                </div>
              </div>

              {/* Diálogo */}
              <div className='w-full md:w-2/3'>
                <div className='dark:bg-black border-2 border-black dark:border-white p-4 relative'>
                  <div className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 dark:border-gray-500 border-black -translate-x-1 -translate-y-1'></div>
                  <div className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 dark:border-gray-500 border-black translate-x-1 -translate-y-1'></div>
                  <div className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 dark:border-gray-500 border-black -translate-x-1 translate-y-1'></div>
                  <div className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 dark:border-gray-500 border-black translate-x-1 translate-y-1'></div>

                  <h2 className='text-2xl font-bold mb-4 text-center'>
                    Don&apos;t give up on your quest!
                  </h2>
                  <p className='mb-4'>
                    The page you are looking for has been transported to another
                    dimension. But don&apos;t worry, there are other paths you
                    can take on your adventure!
                  </p>

                  <div className='flex flex-wrap justify-center gap-4'>
                    <Button
                      onClick={() => router.back()}
                      variant='outline'
                      className='border-2 cursor-pointer border-black hover:bg-gray-100 text-black dark:text-white dark:bg-gray-500 dark:hover:bg-gray-700 dark:border-white'
                    >
                      <ArrowLeft className='mr-2 h-4 w-4' />
                      Go back
                    </Button>

                    <Link href='/' passHref>
                      <Button
                        className='bg-gradient-to-r cursor-pointer from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white border-none'
                        onMouseEnter={() => setHoverEffect(true)}
                        onMouseLeave={() => setHoverEffect(false)}
                      >
                        <Home className='mr-2 h-4 w-4' />
                        Go to home
                        {hoverEffect && (
                          <span className='absolute -top-2 -right-2 text-xs bg-yellow-400 text-black px-1 rounded transform rotate-12 animate-bounce'>
                            ¡Click!
                          </span>
                        )}
                      </Button>
                    </Link>

                    <Link href='/anime' passHref>
                      <Button
                        variant='outline'
                        className='border-2 cursor-pointer border-black hover:bg-gray-100 text-black dark:text-white dark:bg-gray-500 dark:hover:bg-gray-700 dark:border-white'
                      >
                        <Search className='mr-2 h-4 w-4' />
                        Explore anime
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Onomatopeya de determinación */}
            <div className='absolute -bottom-8 -left-6 transform -rotate-12 z-20'>
              <div className='font-manga text-5xl text-red-600 drop-shadow-[0_2px_0px_rgba(0,0,0,1)]'>
                ドン!
              </div>
            </div>
          </div>

          {/* Nota de manga */}
          <div className='text-center text-sm text-gray-600 dark:text-white italic'>
            Continuará en tu próxima navegación...
          </div>
        </div>
      </div>

      {/* Estilos adicionales */}
    </div>
  );
};
