export interface IVocabState {
  vocab: IWord[]
}

export interface IWord {
  id?: number
  word: string
  translate: string
}
