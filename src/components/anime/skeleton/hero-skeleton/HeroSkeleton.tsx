import { Skeleton } from '@/components/ui/skeleton';

export const HeroSkeleton = () => {
  return (
    <section className='p-6 flex flex-col justify-center items-center lg:justify-start lg:grid lg:grid-cols-3 2xl:grid-cols-12 2xl:grid-rows-5 2xl:gap-12 w-full lg:gap-10'>
      <div className='m-3 flex items-center justify-center 2xl:col-span-3 2xl:row-span-5 2xl:col-start-2 2xl:row-start-1 relative w-full'>
        <Skeleton className='absolute -rotate-45 z-20 top-5 -left-10 px-5 w-36 h-8' />

        <Skeleton className='2xl:w-[1500px] 2xl:h-[560px] w-full h-96 sm:h-[680px] lg:h-[420px] xl:h-[550px] rounded-lg' />
      </div>
      <div className='lg:col-span-2 lg:justify-start 2xl:col-span-7 2xl:row-span-5 2xl:col-start-5 2xl:row-start-1 flex flex-col gap-3 2xl:gap-8 justify-center my-4 lg:my-0 w-full'>
        <Skeleton className='lg:justify-start justify-center flex items-center h-7 sm:h-12 2xl:h-16 w-full' />

        <div className='flex gap-2 flex-wrap justify-center items-center mt-4 lg:mt-2 lg:justify-start'>
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} className='w-20 h-8' />
          ))}
        </div>
        <Skeleton className='flex items-center justify-center lg:my-2 2xl:my-0 2xl:h-60 h-[540px] xl:h-64 w-full' />

        <div className='flex gap-2 flex-wrap justify-center items-center lg:justify-start'>
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className='w-24 h-9' />
          ))}
        </div>
        <div className='flex justify-center lg:justify-start'>
          <Skeleton className='h-9 2xl:w-24 w-full mt-4 md:w-1/2 lg:w-1/3 xl:w-auto 2xl:mt-0' />
        </div>
      </div>
    </section>
  );
};
