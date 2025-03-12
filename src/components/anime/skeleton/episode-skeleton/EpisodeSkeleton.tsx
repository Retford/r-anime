import { Skeleton } from '@/components/ui/skeleton';

export const EpisodeSkeleton = () => {
  return (
    <div className='flex flex-col mb-12 gap-4 relative'>
      <div className='relative mb-8'>
        <Skeleton className='absolute left-0 top-0 h-full w-1' />
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 pl-4'>
          <div className='flex flex-col gap-2 w-3/5 sm:w-1/5'>
            <Skeleton className='h-10' />
            <Skeleton className='h-6' />
          </div>
        </div>
      </div>

      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className='group relative dark:bg-black/30 border dark:border-white/10 rounded-lg overflow-hidden'
        >
          <div className='flex items-center p-4 justify-between'>
            <div className='flex w-4/5 gap-4'>
              <Skeleton className='w-10 h-10' />
              <div className='flex flex-col gap-1 w-full'>
                <Skeleton className='h-3/5 w-full' />
                <Skeleton className='h-2/5 w-1/5' />
              </div>
            </div>

            <div className='flex'>
              <div className='sm:flex items-center gap-1 dark:bg-black/50 border dark:border-none px-2 py-1 rounded hidden'>
                <Skeleton className='w-12 h-8' />
              </div>

              <div className='w-10 h-10 rounded-full dark:bg-white/10 bg-gray-200 flex items-center justify-center ml-4'>
                <Skeleton className='h-4 w-4 dark:group:text-black/50' />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='flex justify-center items-center gap-8 relative sm:absolute top-0 right-0'>
        <div className='flex gap-1'>
          <Skeleton className='w-10 h-9' />
          <Skeleton className='w-10 h-9' />
        </div>
        <Skeleton className='w-36 h-9' />
      </div>
    </div>
  );
};
