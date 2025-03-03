import { Poppins, Rock_Salt } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const titleFont = Rock_Salt({
  subsets: ['latin'],
  weight: ['400'],
});
