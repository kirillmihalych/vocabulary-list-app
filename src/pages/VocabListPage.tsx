import { FC } from 'react'
import { useGetVocabListQuery } from '../features/api/VocabApi'
import { VocabList } from '../components'
import { Container } from '@mui/material'

const VocabListPage: FC = () => {
  const { data: vocab = [], isLoading, isError } = useGetVocabListQuery([])

  return (
    <Container>
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading ...</>
      ) : vocab ? (
        <VocabList vocab={vocab} />
      ) : null}
    </Container>
  )
}

export default VocabListPage
