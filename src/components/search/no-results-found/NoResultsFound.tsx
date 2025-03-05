'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search } from 'lucide-react';
import Image from 'next/image';

export const NoResultsFound = () => {
  const router = useRouter();

  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-transparent text-center px-4 relative overflow-hidden'>
      {/* Contenido principal */}
      <div className='relative z-10 max-w-2xl'>
        <h1 className='text-4xl sm:text-7xl font-black text-gray-900 dark:text-white drop-shadow-lg transform -rotate-2'>
          There are no results for this search!
        </h1>
        <p className='text-lg text-gray-700 dark:text-gray-300 mt-4 italic'>
          It seems that this anime has been transported to another
          dimension...📡
        </p>

        {/* Imagen de personaje anime sorprendido */}
        <div className='mt-8 flex justify-center'>
          <Image
            src='/images/starman_750x750.png'
            alt='Personaje anime sorprendido'
            width={300}
            height={300}
            className='rounded-lg shadow-lg'
          />
        </div>

        {/* Botones de navegación */}
        <div className='mt-8 flex flex-wrap justify-center gap-4'>
          <Button
            onClick={() => router.back()}
            variant='outline'
            className='border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <ArrowLeft className='mr-2 h-4 w-4' /> Go back
          </Button>

          <Button
            variant='default'
            className='bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white'
          >
            <Search className='mr-2 h-4 w-4' /> Search another anime
          </Button>
        </div>
      </div>

      {/* Nota estilo manga */}
      <div className='mt-12 text-sm text-gray-500 dark:text-gray-400 italic'>
        * To be continued in the next episode...
      </div>
    </div>
  );
};
