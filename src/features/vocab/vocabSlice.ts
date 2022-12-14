import { createSlice } from '@reduxjs/toolkit'
import { IVocabState } from '../api/types'

const initialState: IVocabState = {
  vocab: [],
}

const vocabSlice = createSlice({
  name: 'vocab',
  initialState,
  reducers: {},
})

export default vocabSlice.reducer
