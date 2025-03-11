import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { titleFont } from '@/config/font';

import type { Trailer } from '@/interfaces/common.interface';

interface Props {
  title: string;
  trailer: Trailer;
}

export const TrailerModal = ({ title, trailer }: Props) => {
  if (!trailer.youtube_id) {
    return (
      <Button
        variant='secondary'
        disabled
        className='w-full mt-4 md:w-1/2 lg:w-1/3 xl:w-auto 2xl:mt-0'
      >
        There is no trailer
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='watch'
          className='w-full mt-4 md:w-1/2 lg:w-1/3 xl:w-auto 2xl:mt-0'
        >
          Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-80 sm:max-w-[580px] md:max-w-[700px] lg:max-w-[900px]'>
        <DialogHeader>
          <DialogTitle className={`${titleFont.className} text-center`}>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <LiteYouTubeEmbed id={trailer.youtube_id} title={title} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
