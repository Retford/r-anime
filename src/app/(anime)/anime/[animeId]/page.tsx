// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';

// import { Anime } from '@/interfaces/animes.interface';
// import Image from 'next/image';

// interface Props {
//   params: Promise<{ animeId: string }>;
// }

// export default async function AnimePerId({ params }: Props) {
//   const { animeId } = await params;

//   const url = `https://myanimelist.p.rapidapi.com/anime/${animeId}`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': process.env.X_RAPIDAPI_KEY ?? '',
//       'x-rapidapi-host': 'myanimelist.p.rapidapi.com',
//     },
//   };

//   const response = await fetch(url, options);
//   const result = (await response.json()) as Anime;

//   return (
//     <Card className='w-[350px]'>
//       <CardHeader>
//         <CardTitle>{result.title_ov}</CardTitle>
//         <CardDescription className='line-clamp-5'>
//           {result.synopsis}
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Image
//           src={result.picture_url}
//           width={250}
//           height={250}
//           alt={result.title_en}
//         />
//       </CardContent>
//       <CardFooter className='flex justify-between'>
//         <span>{result.information.episodes}</span>
//         <span>{result.information.status}</span>
//         {result.information.type.map((type) => (
//           <span key={type.name}>{type.name}</span>
//         ))}
//       </CardFooter>
//     </Card>
//   );
// }
