import { Skeleton } from '@/components/ui/skeleton';

export const CardSkeleton = () => {
  return (
    <div className='container m-auto pt-2 pb-12'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 p-2 xl:gap-4 2xl:gap-4 mb-10'>
        {Array.from({ length: 24 }, (_, index) => (
          <Skeleton
            key={index}
            className='relative overflow-hidden group bg-primary/10 bg-center aspect-[11/16] sm:h-72 md:h-64 lg:h-[22rem] animate-pulse transition-opacity duration-1750'
          />
        ))}
      </div>
    </div>
  );
};
