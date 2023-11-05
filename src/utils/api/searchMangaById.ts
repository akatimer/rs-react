import { BASE_URL_SEARCH } from '../const/const';
import { MangaResponseType } from './apiTypes';

export const searchMangaById: (
  id: string
) => Promise<MangaResponseType> = async (id) => {
  const requestUrl = `${BASE_URL_SEARCH}${id}`;
  console.log(requestUrl, 'requestUrl');
  const data = await fetch(requestUrl);
  const result = await data.json();
  return result;
};
