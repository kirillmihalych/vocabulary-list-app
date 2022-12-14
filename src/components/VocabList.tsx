import { FC } from 'react'
import { IWord } from '../models/types'

interface IVocabListProps {
  vocab: IWord[]
}

const VocabList: FC<IVocabListProps> = ({ vocab }) => {
  return (
    <div>
      {vocab.map((word: IWord) => (
        <article key={word.id}>
          <span>{word.word}</span>
          &nbsp;
          <span>{word.translate}</span>
        </article>
      ))}
    </div>
  )
}

export default VocabList
