import { inter } from '@/config/font';
import type { Metadata } from 'next';
import './globals.css';

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
    <html lang='es'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
