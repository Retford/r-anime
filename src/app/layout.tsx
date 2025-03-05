import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/store/theme/theme-provider';
import { poppins } from '@/config/font';
import { Header } from '@/components/ui/header/Header';
import { Footer } from '@/components/ui/footer/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | R-Anime',
    default: 'Home | R-Anime',
  },
  description:
    'Discover the best anime content in one place. News, recommendations and the latest releases in a site designed for true anime fans.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
