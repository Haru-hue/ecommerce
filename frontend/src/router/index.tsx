import { getApiUrl } from 'utils'

import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import CategoryPage from 'routes/CategoryPage'

const API_URL = getApiUrl()

const Homepage = lazy(() => import('routes/Index'))
const LoginPage = lazy(() => import('routes/Login'))
const LoginAndRegisterLayout = lazy(() => import('routes/LoginAndRegisterLayout'))
const ProductsPage = lazy(() => import('routes/ProductPage'))
const ShopPage = lazy(() => import('routes/Products'))
const RegisterPage = lazy(() => import('routes/Register'))
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
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id',
        element: <ProductsPage />,
      },
      {
        path: 'category/:id',
        element: <CategoryPage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        loader: ({ params }) => {
          return fetch(`${API_URL}/user/${params.userId}`)
        },
        path: 'profiles/:userId',
        element: <UserProfilePage />,
      },
    ],
  },
  {
    path: '/',
    element: <LoginAndRegisterLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
])

export default router
