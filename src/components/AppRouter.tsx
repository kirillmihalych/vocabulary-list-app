import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from '../router'
import { RouteNames } from '../router/index'

const AppRouter: FC = () => {
  return (
    <div>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path='*' element={<Navigate to={RouteNames.VOCAB} replace />} />
      </Routes>
    </div>
  )
}

export default AppRouter
