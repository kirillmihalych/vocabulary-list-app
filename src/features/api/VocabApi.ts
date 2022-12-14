import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const vocabApi = createApi({
  reducerPath: 'vocabApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  endpoints: (builder) => ({
    getVocabList: builder.query({
      query: () => '/vocab',
    }),
  }),
})

export const { useGetVocabListQuery } = vocabApi
