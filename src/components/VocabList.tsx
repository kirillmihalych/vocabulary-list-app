import { FC } from 'react'
import { Grid, Container } from '@mui/material'
import { IWord } from '../models/types'
import { VocabItem, CreateWord } from '../components/index'
import { useDeleteWordMutation } from '../features/api/VocabApi'

interface IVocabListProps {
  vocab: IWord[]
}

const VocabList: FC<IVocabListProps> = ({ vocab }) => {
  const [deleteWord] = useDeleteWordMutation()

  const handleRemove = (word: IWord) => {
    deleteWord(word)
  }

  return (
    <Container>
      <CreateWord />
      <Grid container spacing={2} sx={{ marginTop: '0.5rem' }}>
        {vocab.map((word: IWord) => (
          <VocabItem remove={handleRemove} key={word.id} word={word} />
        ))}
      </Grid>
    </Container>
  )
}

export default VocabList
