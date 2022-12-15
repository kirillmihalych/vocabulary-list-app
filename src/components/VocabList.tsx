import { FC } from 'react'
import { Grid } from '@mui/material'
import { IWord } from '../models/types'
import { VocabItem } from '../components/index'

interface IVocabListProps {
  vocab: IWord[]
}

const VocabList: FC<IVocabListProps> = ({ vocab }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: '4rem' }}>
      {vocab.map((word: IWord) => (
        <VocabItem key={word.id} word={word} />
      ))}
    </Grid>
  )
}

export default VocabList
