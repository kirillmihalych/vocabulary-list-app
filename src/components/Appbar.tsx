import { FC } from 'react'
import { Link } from 'react-router-dom'

const Appbar: FC = () => {
  return (
    <div>
      <Link to='/vocab'> Vocab List</Link>
      <Link to='/'> Home link</Link>
    </div>
  )
}

export default Appbar
