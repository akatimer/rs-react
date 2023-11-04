import { MangaResponseType } from './apiTypes';

export const searchManga: (
  searchTerm?: string,
  pageUrl?: string
) => Promise<MangaResponseType> = async (
  searchTerm,
  pageUrl = `https://api.jikan.moe/v4/manga?q=`
) => {
  pageUrl = pageUrl + searchTerm;
  const data = await fetch(pageUrl);
  const result = await data.json();
  return result;
};
