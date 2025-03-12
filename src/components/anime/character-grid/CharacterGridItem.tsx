import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { DataCharacters, Role } from '@/interfaces/characters.interface';
import clsx from 'clsx';

interface Props {
  character: DataCharacters;
}

export const CharacterGridItem = ({ character }: Props) => {
  return (
    <Card
      className='relative overflow-hidden group bg-cover bg-center aspect-[11/16] sm:h-72 md:h-64 lg:h-[22rem] hover:transition-all hover:duration-500 hover:shadow-[0px_0px_15px_5px_rgba(251,_44,_54,_0.48)]'
      style={{
        backgroundImage: `url(${character.character.images.jpg.image_url})`,
      }}
    >
      {character.role && (
        <Badge
          className={clsx(
            '!absolute rounded-sm top-3 left-3 z-10 select-none',
            {
              main__characters: character.role === Role.Main,
              supporting__characters: character.role === Role.Supporting,
            }
          )}
        >
          {character.role}
        </Badge>
      )}

      <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/95 to-transparent' />
      <div className='absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/95 to-transparent' />
      <div className='absolute inset-x-0 bottom-0 p-4'>
        <h3 className='text-sm sm:text-base xl:text-lg font-semibold text-white text-center line-clamp-2 lg:line-clamp-none'>
          {character.character.name}
        </h3>
      </div>
    </Card>
  );
};
