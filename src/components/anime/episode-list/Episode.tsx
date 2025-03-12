import { formatDate } from '@/helpers/formatDate';
import { DataEpisodes } from '@/interfaces/episodes';
import { Play, Star } from 'lucide-react';

interface Props {
  episode: DataEpisodes;
}

export const Episode = ({ episode }: Props) => {
  return (
    <div
      className={`group relative dark:bg-black/30 border dark:border-white/10 rounded-lg overflow-hidden hover:border-red-500 dark:hover:border-red-500/50 transition-colors ${
        episode.score > 4.7 ? 'ring-1 ring-red-500/30' : ''
      }`}
    >
      {episode.score > 4.7 && (
        <div className='absolute top-0 right-0 bg-gradient-to-l from-red-500 to-orange-500 text-black dark:text-white text-xs font-bold px-3 py-1 z-10'>
          TOP RATED
        </div>
      )}

      <div className='flex items-center p-4 justify-between'>
        <div className='flex w-4/5 gap-4'>
          <div className='w-10 h-10 bg-red-500 flex items-center justify-center flex-shrink-0 rounded-lg'>
            <span className='font-bold text-white'>{episode.mal_id}</span>
          </div>

          <div className='flex-grow min-w-0'>
            <h3 className='font-bold truncate group-hover:text-red-500 transition-colors'>
              {episode.title}
            </h3>
            <p className='dark:text-white/60 text-sm truncate'>
              {formatDate(episode.aired)}
            </p>
          </div>
        </div>

        <div className='flex'>
          <div className='sm:flex items-center gap-1 dark:bg-black/50 group-hover:border-red-500 border dark:border-none px-2 py-1 rounded hidden'>
            <Star className='h-3 w-3 text-amber-500 fill-amber-500' />
            <span className='text-sm font-medium'>
              {episode.score ? episode.score.toFixed(2) : '0.00'}
            </span>
          </div>

          <a
            href={episode.url}
            target='_blank'
            className='w-10 h-10 rounded-full dark:bg-white/10 bg-gray-200 flex items-center justify-center ml-4 group-hover:bg-red-500 dark:group-hover:bg-red-500 transition-colors'
          >
            <Play className='h-4 w-4 group-hover:text-white dark:group:text-black/50 dark:group-hover:text-white transition-colors' />
          </a>
        </div>
      </div>
    </div>
  );
};
