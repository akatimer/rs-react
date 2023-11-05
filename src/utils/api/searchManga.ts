import { BASE_URL } from '../const/const';
import { MangaResponseType } from './apiTypes';

export const searchManga: (
  itemsOnPage?: string,
  page?: string,
  searchTerm?: string
) => Promise<MangaResponseType> = async (searchTerm, page, itemsOnPage) => {
  let requestUrl = `${BASE_URL}`;
  if (itemsOnPage) {
    requestUrl = `${BASE_URL}/limit=${itemsOnPage}`;
  }
  if (page) {
    requestUrl = requestUrl + `/page=${page}`;
  }
  if (searchTerm) {
    requestUrl = requestUrl + `/q=${searchTerm}`;
  }
  const data = await fetch(requestUrl);
  const result = await data.json();
  return result;
};
