import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const choisingApi = createApi({
  reducerPath: 'choisingApi',
  tagTypes: ['choising'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://165.227.162.166/',
  }),
  endpoints: (build) => ({
    getChoising: build.query({
      query: () => 'getChoising',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'choising', id })),
              { type: 'choising', id: 'LIST' },
            ]
          : [{ type: 'choising', id: 'LIST' }],
    }),
    updateChoising: build.mutation({
      query: ({ ...body }) => ({
        url: `updateChoising/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'choising', id: 'LIST' }],
    }),
  }),
});

export const { useGetChoisingQuery, useUpdateChoisingMutation } = choisingApi;
