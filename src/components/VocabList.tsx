import { FC } from 'react'
import { Grid, Container } from '@mui/material'
import { IWord } from '../models/types'
import { VocabItem, CreateWord } from '../components/index'

interface IVocabListProps {
  vocab: IWord[]
}

const VocabList: FC<IVocabListProps> = ({ vocab }) => {
  return (
    <Container>
      <CreateWord />
      <Grid container spacing={2} sx={{ marginTop: '0.5rem' }}>
        {vocab.map((word: IWord) => (
          <VocabItem key={word.id} word={word} />
        ))}
      </Grid>
    </Container>
  )
}

export default VocabList
