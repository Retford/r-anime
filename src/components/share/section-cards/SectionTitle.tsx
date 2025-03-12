import { titleFont } from '@/config/font';

interface Props {
  name: string;
}
export const SectionTitle = ({ name }: Props) => {
  return (
    <div className='relative mb-8'>
      <div className='absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-orange-500'></div>
      <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 pl-4'>
        <div className='flex flex-col gap-2'>
          <h2
            className={`text-3xl md:text-4xl font-bold tracking-tight mb-2 ${titleFont.className}`}
          >
            {name}
            <span className='text-red-500'>.</span>
          </h2>
          <p className='dark:text-white/60 text-sm md:text-base'>
            20 {name.toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
};
