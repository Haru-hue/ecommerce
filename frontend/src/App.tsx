import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './providers/AuthProvider'

import Loader from 'components/loader'
import './App.scss'
import router from './router'

// import 'reset-css'

const App = () => (
  <Suspense fallback={<Loader fixed />}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </Suspense>
)

export default App