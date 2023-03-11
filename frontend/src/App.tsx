import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import Loader from 'components/loader'

import './App.scss'
import router from './router'

import 'reset-css'

const App = () => (
  <Suspense fallback={<Loader fixed />}>
    <RouterProvider router={router} />
  </Suspense>
)

export default App
