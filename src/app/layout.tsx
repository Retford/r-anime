import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/store/theme/theme-provider';
import { poppins } from '@/config/font';

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
