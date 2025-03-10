import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Props {
  title: string;
}

export const TrailerModal = ({ title }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='anime' className='cursor-pointer'>
          Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>Video</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
