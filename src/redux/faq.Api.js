import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const faqApi = createApi({
  reducerPath: 'faqApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7183/',
  }),
  endpoints: (build) => ({
    getFaq: build.query({
      query: () => 'getFaq',
    }),
  }),
});

export const { useGetFaqQuery } = faqApi;
