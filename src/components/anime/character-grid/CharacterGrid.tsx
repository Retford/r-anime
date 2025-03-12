import { DataCharacters } from '@/interfaces/characters.interface';
import { CharacterGridItem } from './CharacterGridItem';
import { titleFont } from '@/config/font';

interface Props {
  characters: DataCharacters[];
}
export const CharacterGrid = ({ characters }: Props) => {
  return (
    <div className='flex flex-col md:mb-12 gap-4'>
      <div className='relative mb-8'>
        <div className='absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-orange-500'></div>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 pl-4'>
          <div className='flex flex-col gap-2'>
            <h2
              className={`text-3xl md:text-4xl font-bold tracking-tight mb-2 ${titleFont.className}`}
            >
              Characters
              <span className='text-red-500'>.</span>
            </h2>
            <p className='dark:text-white/60 text-sm md:text-base'>
              {characters.length} characters
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 p-2 xl:gap-4 2xl:gap-4 mb-10'>
        {characters.map((character) => (
          <CharacterGridItem
            key={character.character.mal_id}
            character={character}
          />
        ))}
      </div>
    </div>
  );
};
