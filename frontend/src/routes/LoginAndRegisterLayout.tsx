import { Navigate, Outlet } from 'react-router-dom'

import { useAuthValues } from 'providers/AuthProvider'

import Copyright from 'components/Copyright'

import styles from './LoginAndRegisterLayout.module.scss'

const LoginAndRegisterLayout = () => {
  const { user } = useAuthValues()

  if (user) {
    return <Navigate to="/" />
  }

  return (
    <div className={styles.container}>
      <Outlet />
      <Copyright />
    </div>
  )
}

export default LoginAndRegisterLayout
