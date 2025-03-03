import { Footer } from '@/components/ui/footer/Footer';
import { Header } from '@/components/ui/header/Header';

export default function AnimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
