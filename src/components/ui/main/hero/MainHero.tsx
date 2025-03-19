import Image from 'next/image';

export const MainHero = () => {
  return (
    <div className='w-full overflow-hidden xl:w-[calc(100%-300px)] h-80 xl:h-[600px] flex justify-center items-center'>
      <div className='w-full h-56 xl:h-96 xl:w-3/5 aspect-video relative rounded-xl'>
        <div className='absolute bg-pink-600 w-full h-full [clip-path:polygon(0%_0%,95%_0%,80%_50%,85%_100%,0%_100%,0%_0%)] rounded-xl bg-gradient-to-r from-[#E7590A] via-80% via-[#09090B] to-[#09090B] ' />
        <Image
          src='/images/anime/pngegg.png'
          alt=''
          width={550}
          height={550}
          className='object-contain absolute -right-2/5 -top-1/4'
        />
      </div>
    </div>
  );
};
