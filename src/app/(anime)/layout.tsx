import { Footer } from '@/components/ui/footer/Footer';
import { Header } from '@/components/ui/header/Header';

export default function AnimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
