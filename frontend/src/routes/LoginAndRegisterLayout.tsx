import { Outlet } from 'react-router-dom'

import Copyright from 'components/Copyright'

import styles from './LoginAndRegisterLayout.module.scss'

const LoginAndRegisterLayout = () => (
  <div className={styles.container}>
    <Outlet />
    <Copyright />
  </div>
)

export default LoginAndRegisterLayout
