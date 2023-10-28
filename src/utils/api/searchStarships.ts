import { getStarshipsResultsType } from './getStarships';

export const searchStarships: (
  pageUrl?: string,
  searchValue?: string
) => Promise<getStarshipsResultsType> = async (
  pageUrl = `https://swapi.dev/api/starships/?search=`,
  searchValue = ''
) => {
  const data = await fetch(pageUrl + searchValue);
  const result = await data.json();
  console.log(result);
  return result;
};
