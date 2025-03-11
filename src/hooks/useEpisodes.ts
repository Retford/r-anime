// import { getEpisodesInfinite } from '@/services/anime';
// import { useInfiniteQuery } from '@tanstack/react-query';

// interface Props {
//   animeId: number;
// }

// export const useEpisodes = ({ animeId }: Props) => {
//   const episodesInfiniteQuery = useInfiniteQuery({
//     queryKey: ['anime', 'infinity', { animeId }, 'episodes'],
//     queryFn: ({ pageParam, queryKey }) => {
//       console.log(queryKey);
//       console.log({ pageParam });
//       const [, , args] = queryKey;
//       const { animeId } = args as Props;

//       return getEpisodesInfinite(animeId, pageParam);
//     },
//     staleTime: 1000 * 60 * 60,
//     initialPageParam: 1,
//     getNextPageParam: (lastPage, pages) => {
//       console.log({ lastPage, pages });
//       return lastPage.pagination.has_next_page ? pages.length + 1 : undefined;
//     },
//   });

//   return {
//     episodesInfiniteQuery,
//   };
// };
