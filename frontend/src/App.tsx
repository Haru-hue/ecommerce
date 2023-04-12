import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './providers/AuthProvider'
import RegistrationDataProvider from 'providers/RegistrationDataProvider'

import Loader from 'components/loader'

import './App.scss'
import router from './router'

// import 'reset-css'

const App = () => (
  <Suspense fallback={<Loader fixed />}>
    <AuthProvider>
      <RegistrationDataProvider>
        <RouterProvider router={router} />
      </RegistrationDataProvider>
    </AuthProvider>
  </Suspense>
)

export default App
