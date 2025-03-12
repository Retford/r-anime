import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

import type { DataCharacters } from '@/interfaces/characters';

interface Props {
  visible: number;
  allCharacters: DataCharacters[];

  handleLoadLess: () => void;
  handleLoadMore: () => void;
  handleLoadReset: () => void;
}

export const CharacterNavigation = ({
  allCharacters,
  handleLoadLess,
  handleLoadMore,
  handleLoadReset,
  visible,
}: Props) => {
  return (
    <div className='flex justify-center items-center gap-8 mb-16'>
      <div className='flex gap-1'>
        {visible > 17 && allCharacters.length > 17 && (
          <Button
            variant='orange'
            disabled={visible < 19}
            onClick={handleLoadLess}
          >
            <ChevronLeft />
          </Button>
        )}
        {allCharacters.length > 18 && (
          <Button
            variant='orange'
            onClick={handleLoadMore}
            disabled={visible >= allCharacters.length}
          >
            <ChevronRight />
          </Button>
        )}
      </div>

      {visible > 17 && allCharacters.length > 17 && (
        <Button
          variant='orange'
          onClick={handleLoadReset}
          disabled={visible < 19}
        >
          <Home />
        </Button>
      )}
    </div>
  );
};
