import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IWord } from '../../models/types'

export const vocabApi = createApi({
  reducerPath: 'vocabApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  tagTypes: ['Word'],
  endpoints: (builder) => ({
    getVocabList: builder.query<IWord[], []>({
      query: () => '/vocab',
      providesTags: ['Word'],
    }),
    createWord: builder.mutation<IWord, IWord>({
      query: (word) => ({
        url: '/vocab',
        method: 'POST',
        body: word,
      }),
      invalidatesTags: ['Word'],
    }),
    updateWord: builder.mutation<IWord, IWord>({
      query: (word) => ({
        url: `/vocab/${word.id}`,
        method: 'UPDATE',
        body: word,
      }),
      invalidatesTags: ['Word'],
    }),
    deleteWord: builder.mutation<IWord, IWord>({
      query: (word) => ({
        url: `/vocab/${word.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Word'],
    }),
  }),
})

export const {
  useGetVocabListQuery,
  useCreateWordMutation,
  useDeleteWordMutation,
} = vocabApi
