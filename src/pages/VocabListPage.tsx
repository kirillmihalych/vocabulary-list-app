import { FC } from 'react'
import { useGetVocabListQuery } from '../features/api/VocabApi'
import { VocabList } from '../components'

const VocabListPage: FC = () => {
  const { data: vocab = [], isLoading, isError } = useGetVocabListQuery([])

  return (
    <div className=''>
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading ...</>
      ) : vocab ? (
        <VocabList vocab={vocab} />
      ) : null}
    </div>
  )
}

export default VocabListPage
