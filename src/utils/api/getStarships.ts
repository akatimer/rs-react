export const getStarships: (
  pageUrl?: string
) => Promise<getStarshipsResultsType> = async (
  pageUrl = 'https://swapi.dev/api/starships/'
) => {
  const data = await fetch(pageUrl);
  const result = await data.json();
  console.log(result);
  return result;
};

export type getStarshipsResultsType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: starshipsType[];
};

export type starshipsType = {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
};
