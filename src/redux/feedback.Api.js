import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  tagTypes: ['feedback'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://46.101.153.165/',
  }),
  endpoints: (build) => ({
    getFeedback: build.query({
      query: () => 'feedbackGet',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'feedback', id })),
              { type: 'feedback', id: 'LIST' },
            ]
          : [{ type: 'feedback', id: 'LIST' }],
    }),
  }),
});

export const { useGetFeedbackQuery } = feedbackApi;
