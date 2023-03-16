import styles from './Copyright.module.scss'
import { CopyrightIcon } from './icons'

export const Copyright = () => (
  <div className={styles.copyright}>
    <CopyrightIcon /> 2023 <b className="text-dark">FarmHub.</b> by Uko Joshua. All Rights Reserved
  </div>
)

export default Copyright
