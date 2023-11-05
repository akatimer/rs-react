import { BASE_URL } from '../const/const';
import { MangaResponseType } from './apiTypes';

export const searchManga: (
  itemsOnPage?: string,
  page?: string,
  searchTerm?: string
) => Promise<MangaResponseType> = async (
  itemsOnPage = '15',
  page = '1',
  searchTerm
) => {
  let requestUrl = `${BASE_URL}`;
  if (itemsOnPage) {
    requestUrl = `${BASE_URL}&limit=${itemsOnPage}`;
  }
  if (page) {
    requestUrl = requestUrl + `&page=${page}`;
  }
  if (searchTerm) {
    requestUrl = requestUrl + `&q=${searchTerm}`;
  }
  console.log(requestUrl, 'requestUrl');
  const data = await fetch(requestUrl);
  const result = await data.json();
  return result;
};
