import { redirect } from 'next/navigation';
import { HomeContent } from './ui/HomeContent';

export default function Home() {
  redirect('/anime');
  return (
    <div>
      <h1>Anime</h1>
      <HomeContent />
    </div>
  );
}
