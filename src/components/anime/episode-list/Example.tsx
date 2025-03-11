// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {
//   Play,
//   Calendar,
//   Star,
//   Search,
//   ChevronDown,
//   Eye,
//   Clock,
//   ArrowUpRight,
// } from 'lucide-react';
// import { formatDate } from '@/helpers/formatDate';

// // Tipo para los episodios basado en los datos proporcionados
// type Episode = {
//   mal_id: number;
//   url: string;
//   title: string;
//   title_japanese: string;
//   title_romanji: string;
//   aired: string;
//   score: number;
//   filler: boolean;
//   recap: boolean;
//   forum_url: string;
// };

// interface EpisodeListProps {
//   animeId?: string | number;
//   initialData?: Episode[];
// }

// export default function Example({
//   animeId = '52991',
//   initialData,
// }: EpisodeListProps) {
//   const [episodes, setEpisodes] = useState<Episode[]>(initialData || []);
//   const [loading, setLoading] = useState(!initialData);
//   const [filter, setFilter] = useState('');
//   const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'rating'>(
//     'newest'
//   );
//   const [expandedView, setExpandedView] = useState(false);
//   const [visibleEpisodes, setVisibleEpisodes] = useState(10);

//   // Simular la carga de datos si no se proporcionan inicialmente

//   // Filtrar y ordenar episodios
//   const filteredEpisodes = episodes
//     .filter(
//       (ep) =>
//         ep.title.toLowerCase().includes(filter.toLowerCase()) ||
//         ep.title_japanese.includes(filter) ||
//         ep.mal_id.toString().includes(filter)
//     )
//     .sort((a, b) => {
//       if (sortBy === 'newest')
//         return new Date(b.aired).getTime() - new Date(a.aired).getTime();
//       if (sortBy === 'oldest')
//         return new Date(a.aired).getTime() - new Date(b.aired).getTime();
//       return b.score - a.score;
//     });

//   // Formatear fecha

//   // Cargar más episodios
//   const loadMore = () => {
//     setVisibleEpisodes((prev) => Math.min(prev + 10, filteredEpisodes.length));
//   };

//   return (
//     <div className='w-full bg-[#0a0a0a] text-white'>
//       {/* Header con estilo híbrido */}
//       <div className='relative mb-8'>
//         <div className='absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-orange-500'></div>
//         <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 pl-4'>
//           <div>
//             <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-2'>
//               Episodios
//               <span className='text-amber-400'>.</span>
//             </h2>
//             <p className='text-white/60 text-sm md:text-base'>
//               {episodes.length} episodios disponibles
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Loader */}
//       {loading && (
//         <div className='flex justify-center items-center py-20'>
//           <div className='relative w-12 h-12'>
//             <div className='absolute inset-0 border-t-2 border-r-2 border-amber-400 rounded-full animate-spin'></div>
//             <div className='absolute inset-0 flex items-center justify-center'>
//               <div className='w-1.5 h-1.5 bg-amber-400 rounded-full'></div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lista de episodios */}
//       {!loading && (
//         <>
//           {filteredEpisodes.length === 0 ? (
//             <div className='text-center py-12 bg-black/30 border border-white/10 rounded-lg'>
//               <p className='text-white/60'>
//                 No se encontraron episodios que coincidan con tu búsqueda.
//               </p>
//             </div>
//           ) : (
//             <div className='space-y-4'>
//               {filteredEpisodes.slice(0, visibleEpisodes).map((episode) => (
//                 <div
//                   key={episode.mal_id}
//                   className={`group relative bg-black/30 border border-white/10 rounded-lg overflow-hidden hover:border-amber-400/50 transition-colors ${
//                     episode.score > 4.7 ? 'ring-1 ring-amber-400/30' : ''
//                   }`}
//                 >
//                   {/* Indicador de episodio destacado */}
//                   {episode.score > 4.7 && (
//                     <div className='absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-orange-500 text-black text-xs font-bold px-3 py-1 z-10'>
//                       TOP RATED
//                     </div>
//                   )}

//                   {expandedView ? (
//                     <div className='flex flex-col md:flex-row'>
//                       {/* Thumbnail */}
//                       <div className='md:w-1/3 relative aspect-video md:aspect-[16/9]'>
//                         <Image
//                           src={`/placeholder.svg?height=360&width=640&text=EP${episode.mal_id}`}
//                           alt={`Episodio ${episode.mal_id}: ${episode.title}`}
//                           fill
//                           className='object-cover transition-transform group-hover:scale-105'
//                         />
//                         <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent'></div>

//                         {/* Número de episodio */}
//                         <div className='absolute top-4 left-4 flex items-center gap-2'>
//                           <div className='w-8 h-8 bg-amber-400 flex items-center justify-center'>
//                             <span className='font-bold text-black'>
//                               {episode.mal_id}
//                             </span>
//                           </div>
//                           {episode.filler && (
//                             <span className='bg-blue-500/80 text-white text-xs px-2 py-0.5 rounded'>
//                               FILLER
//                             </span>
//                           )}
//                           {episode.recap && (
//                             <span className='bg-purple-500/80 text-white text-xs px-2 py-0.5 rounded'>
//                               RECAP
//                             </span>
//                           )}
//                         </div>

//                         {/* Play button */}
//                         <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
//                           <button className='w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center'>
//                             <Play className='h-6 w-6 text-black' />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Información del episodio */}
//                       <div className='p-6 md:w-2/3 flex flex-col justify-center'>
//                         <div className='flex items-start justify-between mb-2'>
//                           <h3 className='text-xl font-bold group-hover:text-amber-400 transition-colors'>
//                             {episode.title}
//                           </h3>
//                           <div className='flex items-center gap-1 bg-black/50 px-2 py-1 rounded'>
//                             <Star className='h-4 w-4 text-amber-400 fill-amber-400' />
//                             <span className='font-medium'>
//                               {episode.score.toFixed(2)}
//                             </span>
//                           </div>
//                         </div>

//                         <p className='text-white/70 mb-4'>
//                           <span className='text-amber-400/80 font-medium'>
//                             {episode.title_japanese}
//                           </span>
//                           <span className='text-white/40 text-sm ml-2'>
//                             ({episode.title_romanji})
//                           </span>
//                         </p>

//                         <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60 mb-4'>
//                           <div className='flex items-center gap-1'>
//                             <Calendar className='h-4 w-4' />
//                             <span>{formatDate(episode.aired)}</span>
//                           </div>
//                           <div className='flex items-center gap-1'>
//                             <Clock className='h-4 w-4' />
//                             <span>24 min</span>
//                           </div>
//                         </div>

//                         <div className='flex flex-wrap gap-3 mt-auto'>
//                           <Link
//                             href={episode.url}
//                             target='_blank'
//                             className='px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded text-black text-sm font-medium flex items-center gap-1 hover:opacity-90 transition-opacity'
//                           >
//                             <Eye className='h-4 w-4' />
//                             Ver episodio
//                           </Link>
//                           <Link
//                             href={episode.forum_url}
//                             target='_blank'
//                             className='px-4 py-1.5 bg-white/10 rounded text-sm flex items-center gap-1 hover:bg-white/20 transition-colors'
//                           >
//                             Foro
//                             <ArrowUpRight className='h-3 w-3' />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className='flex items-center p-4'>
//                       {/* Número de episodio */}
//                       <div className='w-10 h-10 bg-amber-400 flex items-center justify-center flex-shrink-0 mr-4'>
//                         <span className='font-bold text-black'>
//                           {episode.mal_id}
//                         </span>
//                       </div>

//                       {/* Información básica */}
//                       <div className='flex-grow min-w-0'>
//                         <h3 className='font-bold truncate group-hover:text-amber-400 transition-colors'>
//                           {episode.title}
//                         </h3>
//                         <p className='text-white/60 text-sm truncate'>
//                           {formatDate(episode.aired)}
//                         </p>
//                       </div>

//                       {/* Puntuación */}
//                       <div className='flex items-center gap-1 bg-black/50 px-2 py-1 rounded ml-2'>
//                         <Star className='h-3 w-3 text-amber-400 fill-amber-400' />
//                         <span className='text-sm font-medium'>
//                           {episode.score.toFixed(2)}
//                         </span>
//                       </div>

//                       {/* Botón de reproducción */}
//                       <button className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ml-4 group-hover:bg-amber-400 transition-colors'>
//                         <Play className='h-4 w-4 group-hover:text-black transition-colors' />
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* Botón de cargar más */}
//               {visibleEpisodes < filteredEpisodes.length && (
//                 <div className='flex justify-center mt-8'>
//                   <button
//                     onClick={loadMore}
//                     className='px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full flex items-center gap-2 transition-colors'
//                   >
//                     <span className='font-medium'>CARGAR MÁS</span>
//                     <ChevronDown className='h-5 w-5' />
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
