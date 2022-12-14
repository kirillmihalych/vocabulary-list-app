import { FC } from 'react'
import { Grid, Paper } from '@mui/material'
import { IWord } from '../models/types'

interface IVocabListProps {
  vocab: IWord[]
}

const VocabList: FC<IVocabListProps> = ({ vocab }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: '4rem' }}>
      {vocab.map((word: IWord) => (
        <Grid item key={word.id} xs={12}>
          <Paper
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black',
              height: '45px',
              padding: '0px 15px',
              textTransform: 'capitalize',
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            <span style={{ flexGrow: '1' }}>{word.word}</span>
            <span>{word.translate}</span>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default VocabList
