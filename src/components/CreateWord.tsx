import { FC, useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useCreateWordMutation } from '../features/api/VocabApi'
import { IWord } from '../models/types'

const CreateWord: FC = () => {
  const [word, setWord] = useState<string>('')
  const [translation, setTranslation] = useState<string>('')
  const [createWord] = useCreateWordMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createWord({ word, translate: translation } as IWord)
    setWord('')
    setTranslation('')
  }

  const changeWordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  const changeTranslationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTranslation(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        value={word}
        onChange={changeWordHandler}
        label='Добавить слово'
        sx={{ marginTop: '5rem' }}
      ></TextField>
      <TextField
        fullWidth
        value={translation}
        onChange={changeTranslationHandler}
        label='Добавить перевод'
        sx={{ marginTop: '1rem' }}
      ></TextField>
      <Button
        type='submit'
        variant='outlined'
        sx={{ marginTop: '0.5rem' }}
        fullWidth
      >
        Добавить
      </Button>
    </form>
  )
}

export default CreateWord
