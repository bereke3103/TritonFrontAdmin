import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const clientApi = createApi({
  reducerPath: 'clientApi',
  tagTypes: ['clients'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://165.227.162.166/',
  }),
  endpoints: (build) => ({
    getClient: build.query({
      query: () => 'getClient',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'clients', id })),
              { type: 'clients', id: 'LIST' },
            ]
          : [{ type: 'clients', id: 'LIST' }],
    }),
    addClient: build.mutation({
      query: (body) => ({
        url: 'createClient',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'clients', id: 'LIST' }],
    }),
    deleteClient: build.mutation({
      query: (id) => ({
        url: `deleteClient/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'clients', id: 'LIST' }],
    }),
    updateClient: build.mutation({
      query: ({ ...body }, id) => ({
        url: `updateClient/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'clients', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetClientQuery,
  useAddClientMutation,
  useDeleteClientMutation,
  useUpdateClientMutation,
} = clientApi;
