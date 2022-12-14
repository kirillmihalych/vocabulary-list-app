import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Appbar, AppRouter } from './components'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
