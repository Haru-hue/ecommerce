import { createBrowserRouter } from 'react-router-dom'

import Homepage from 'routes/Index'
import LoginPage from 'routes/Login'
import ProductsPage from 'routes/Products'
import UserProfilePage from 'routes/Profile'
import Root from 'routes/Root'

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
