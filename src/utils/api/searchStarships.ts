import { getStarshipsResultsType } from './getStarships';

export const searchStarships: (
  searchValue?: string
) => Promise<getStarshipsResultsType> = async (searchValue = '') => {
  const pageUrl = `https://swapi.dev/api/starships/?search=`;
  const data = await fetch(pageUrl + searchValue);
  const result = await data.json();
  console.log(result);
  return result;
};
