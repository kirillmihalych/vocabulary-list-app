import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IWord } from '../../models/types'

export const vocabApi = createApi({
  reducerPath: 'vocabApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  endpoints: (builder) => ({
    getVocabList: builder.query<IWord[], []>({
      query: () => '/vocab',
    }),
  }),
})

export const { useGetVocabListQuery } = vocabApi
