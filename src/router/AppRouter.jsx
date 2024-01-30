import { Routes, Route } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path='/heroes-spa/login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path='/heroes-spa/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}
