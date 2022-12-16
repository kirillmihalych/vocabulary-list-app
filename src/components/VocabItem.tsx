import { FC, useState } from 'react'
import { IWord } from '../models/types'
import { Grid, Paper, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface IVocabItemProps {
  word: IWord
  remove: (word: IWord) => void
  // update: (word: IWord) => void
}

const VocabItem: FC<IVocabItemProps> = ({ word, remove }) => {
  const [learned, setLearned] = useState<boolean>(false)
  const [familiar, setFamiliar] = useState<boolean>(false)
  const [unknown, setUnknown] = useState<boolean>(false)

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    remove(word)
  }

  const handleUpdate = (e: React.MouseEvent) => {}

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
        <IconButton onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </Paper>
    </Grid>
  )
}

export default VocabItem
