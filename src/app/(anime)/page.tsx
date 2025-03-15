import { HomeContent } from './ui/HomeContent';

export default function Home() {
  return (
    <div
      className='object-contain'
      style={{
        backgroundImage:
          'url(https://assets-prd.ignimgs.com/2022/08/17/17-kakashi-1660778366362.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
      }}
    >
      <HomeContent />
    </div>
  );
}
