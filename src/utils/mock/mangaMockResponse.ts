import { MangaResponseData } from '../api/apiTypes';

export const mockResponseData: MangaResponseData = {
  mal_id: 1,
  url: 'https://myanimelist.net/manga/128594/One_Piece__Episode_A',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/manga/1/152416.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/manga/1/152416l.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/manga/1/152416t.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/manga/1/152416.webp',
      small_image_url:
        'https://cdn.myanimelist.net/images/manga/1/152416l.webp',
      large_image_url:
        'https://cdn.myanimelist.net/images/manga/1/152416t.webp',
    },
  },
  approved: true,
  titles: [
    {
      type: 'One',
      title: 'Default',
    },
  ],
  title: 'One',
  title_english: 'One',
  title_japanese: 'ONE',
  type: 'Manhwa',
  chapters: 12,
  volumes: 11,
  status: 'Finished',
  publishing: false,
  published: {
    from: '2020-09-16T00:00:00+00:00',
    to: '2021-12-02T00:00:00+00:00',
    prop: {
      from: {
        day: 16,
        month: 9,
        year: 2020,
      },
      to: {
        day: 2,
        month: 12,
        year: 2021,
      },
      string: 'Sep 16, 2020 to Dec 2, 2021',
    },
  },
  score: 8.13,
  scored_by: 4657,
  rank: 518,
  popularity: 2029,
  members: 9286,
  favorites: 62,
  synopsis:
    "High schooler Jenny You is living a dream. In the public eye, she is a delicate princess, a successful pop star, but in real life, she's a rebellious beauty ostracized by her female schoolmates. She and her classmate, umpa Won (One), seem to have nothing in common on the surface. Eumpa is a quiet boy, ignorant of the pop culture that has enchanted most of his peers. Having spent his childhood as a depressed prodigy in the United States, he has now resolved to lead a normal life as a regular boy. He likes a cute-but-average-looking girl, Young-ju Chae. Young-ju takes him to a pop concert, and Eumpa is exposed to Jenny's music for the first time. Meanwhile, umpa's resolution to live a normal life is challenged when his music teacher steals the young man's music and attempts to pass it off as his own... So begins the story of One... (Source: Tokyopop)",
  background:
    'One was published in English by Tokyopop from April 6, 2004 to December 1, 2007.',
  authors: [
    {
      mal_id: 2252,
      type: 'people',
      name: 'Lee, Vin',
      url: 'https://myanimelist.net/people/2252/Vin_Lee',
    },
  ],
  serializations: [
    {
      mal_id: 322,
      type: 'manga',
      name: 'Issue',
      url: 'https://myanimelist.net/manga/magazine/322/Issue',
    },
  ],
  genres: [
    {
      mal_id: 8,
      type: 'manga',
      name: 'Drama',
      url: 'https://myanimelist.net/manga/genre/8/Drama',
    },
  ],
  explicit_genres: [
    {
      mal_id: 5,
      type: 'string',
      name: 'string',
      url: 'string',
    },
  ],
  themes: [
    {
      mal_id: 19,
      type: 'manga',
      name: 'Music',
      url: 'https://myanimelist.net/manga/genre/19/Music',
    },
  ],
  demographics: [
    {
      mal_id: 9,
      type: 'string',
      name: 'string',
      url: 'string',
    },
  ],
};

export const mockMangaResponse = {
  data: mockResponseData,
  pagination: {
    curent_page: 1,
    last_visible_page: 21,
    has_next_page: true,
    items: {
      count: 25,
      total: 25,
      per_page: 521,
    },
  },
};
