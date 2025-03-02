import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/store/theme/theme-provider';
import { poppins } from '@/config/font';

export const metadata: Metadata = {
  title: 'R-Anime',
  description: 'Sitio para ver anime',
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
