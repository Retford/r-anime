import { DataEpisodes } from '@/interfaces/episodes';
import { Episode } from './Episode';
import { titleFont } from '@/config/font';

interface Props {
  episodes: DataEpisodes[];
}

export const EpisodeList = ({ episodes }: Props) => {
  return (
    <section className='container m-auto pt-2 pb-12 p-6'>
      <div className='flex flex-col mb-12 gap-4'>
        <div className='relative mb-8'>
          <div className='absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-orange-500'></div>
          <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 pl-4'>
            <div className='flex flex-col gap-2'>
              <h2
                className={`text-3xl md:text-4xl font-bold tracking-tight mb-2 ${titleFont.className}`}
              >
                Episodes
                <span className='text-red-500'>.</span>
              </h2>
              <p className='dark:text-white/60 text-sm md:text-base'>
                {episodes.length} episodes available
              </p>
            </div>
          </div>
        </div>

        {episodes.length === 0 ? (
          <div className='text-center py-12 bg-black/30 border border-white/10 rounded-lg'>
            <p className='text-white/60'>
              There are no episodes for this anime yet.
            </p>
          </div>
        ) : (
          episodes.map((episode) => (
            <Episode key={episode.mal_id} episode={episode} />
          ))
        )}
      </div>
    </section>
  );
};
