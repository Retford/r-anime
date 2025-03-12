import { Skeleton } from '@/components/ui/skeleton';

export const CharacterSkeleton = () => {
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

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 p-2 xl:gap-4 2xl:gap-4 mb-10'>
        {Array.from({ length: 18 }, (_, index) => (
          <Skeleton
            key={index}
            className='relative overflow-hidden group bg-cover bg-center aspect-[11/16] sm:h-72 md:h-64 lg:h-[22rem]'
          />
        ))}
      </div>

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
