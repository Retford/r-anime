export const formatApi = (rating: string) => {
  const rate = rating.split(' ', 3).join('');

  return rate;
};
