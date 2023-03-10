import 'reset-css'

import { RouterProvider } from 'react-router-dom'

import './App.scss'
import router from './router'

const App = () => <RouterProvider router={router} />

export default App
