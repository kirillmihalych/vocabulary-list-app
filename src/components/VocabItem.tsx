import { FC, useState } from 'react'
import { IWord } from '../models/types'
import { Grid, Paper, Button } from '@mui/material'

interface IVocabItemProps {
  word: IWord
}

const VocabItem: FC<IVocabItemProps> = ({ word }) => {
  const [learned, setLearned] = useState<boolean>(false)
  const [familiar, setFamiliar] = useState<boolean>(false)
  const [unknown, setUnknown] = useState<boolean>(false)

  const activeHandler = (s: string | null) => {
    if (s?.toLowerCase() === 'learned') {
      setLearned(true)
      setUnknown(false)
      setFamiliar(false)
    }
    if (s?.toLowerCase() === 'familiar') {
      setFamiliar(true)
      setUnknown(false)
      setLearned(false)
    }
    if (s?.toLowerCase() === 'unknown') {
      setUnknown(true)
      setFamiliar(false)
      setLearned(false)
    }
  }

  return (
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
          bgcolor: learned
            ? 'lightgreen'
            : familiar
            ? 'orange'
            : unknown
            ? '#D3D3D3'
            : 'white',
        }}
      >
        <span style={{ flexGrow: '1' }}>{word.word}</span>
        <span style={{ marginRight: '1rem' }}>{word.translate}</span>
        <Button
          variant='outlined'
          sx={{
            marginRight: '5px',
          }}
          onClick={(e) => activeHandler((e.target as HTMLElement).textContent)}
        >
          Unknown
        </Button>
        <Button
          variant='outlined'
          sx={{
            marginRight: '5px',
          }}
          onClick={(e) => activeHandler((e.target as HTMLElement).textContent)}
        >
          Familiar
        </Button>
        <Button
          variant='outlined'
          sx={{
            marginRight: '5px',
          }}
          onClick={(e) => activeHandler((e.target as HTMLElement).textContent)}
        >
          Learned
        </Button>
      </Paper>
    </Grid>
  )
}

export default VocabItem
