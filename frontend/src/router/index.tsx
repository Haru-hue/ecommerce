import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Homepage = lazy(() => import('routes/Index'))
const LoginPage = lazy(() => import('routes/Login'))
const ProductsPage = lazy(() => import('routes/Products'))
const Root = lazy(() => import('routes/Root'))
const UserProfilePage = lazy(() => import('routes/Profile'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'profiles/:userId',
        element: <UserProfilePage />,
      },
    ],
  },
])

export default router
