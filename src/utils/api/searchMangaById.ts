import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL_SEARCH } from '../const/const';

const searchMangaById = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL_SEARCH}`,
  }),
  endpoints: (builder) => ({
    searchManga: builder.query({
      query: ({ id }) => {
        return id;
      },
    }),
  }),
});

export default searchMangaById;
