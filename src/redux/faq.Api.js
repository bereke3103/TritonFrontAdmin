import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const faqApi = createApi({
  reducerPath: 'faqApi',
  tagTypes: ['faqs'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://46.101.153.165/',
  }),
  endpoints: (build) => ({
    getFaq: build.query({
      query: () => 'getFaq',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'faqs', id })),
              { type: 'faqs', id: 'LIST' },
            ]
          : [{ type: 'faqs', id: 'LIST' }],
    }),
    addFaq: build.mutation({
      query: (body) => ({
        url: 'createFaq',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'faqs', id: 'LIST' }],
    }),
    updateFaq: build.mutation({
      query: ({ ...body }) => ({
        url: `updateFaq/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'faqs', id: 'LIST' }],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `deleteFaq/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'faqs', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetFaqQuery,
  useAddFaqMutation,
  useDeleteProductMutation,
  useUpdateFaqMutation,
} = faqApi;
