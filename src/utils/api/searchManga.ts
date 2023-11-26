import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL_SEARCH } from '../const/const';

const searchManga = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL_SEARCH}`,
  }),
  endpoints: (builder) => ({
    searchManga: builder.query({
      query: ({ limit = 18, page = 1, term = '' }) => {
        let requestUrl = `?sfw=true&limit=${limit}&page=${page}`;
        if (term) {
          requestUrl += `&q=${term}`;
        }
        return requestUrl;
      },
    }),
  }),
});

export default searchManga;
