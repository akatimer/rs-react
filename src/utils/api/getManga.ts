import { BASE_URL } from '../const/const';
import { MangaResponseType } from './apiTypes';

export const getAllManga: (
  pageUrl?: string
) => Promise<MangaResponseType> = async (pageUrl = BASE_URL) => {
  const data = await fetch(pageUrl);
  const result = data.json();
  return result;
};
