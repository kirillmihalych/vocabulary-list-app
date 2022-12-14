import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import vocabReducer from '../features/vocab/vocabSlice'
import { vocabApi } from '../features/api/VocabApi'

export const store = configureStore({
  reducer: {
    vocab: vocabReducer,
    [vocabApi.reducerPath]: vocabApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vocabApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
