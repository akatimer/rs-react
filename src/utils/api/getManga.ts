import { MangaResponseType } from './apiTypes';

export const getAllManga: (
  pageUrl?: string
) => Promise<MangaResponseType> = async (
  pageUrl = 'https://api.jikan.moe/v4/manga'
) => {
  const data = await fetch(pageUrl);
  const result = await data.json();
  return result;
};
