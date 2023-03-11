import { faAppleAlt, faCarrot, faLemon, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { joinStringList } from 'utils'

import styles from './Loader.module.scss'

interface Props {
  fixed?: boolean
}

const Loader = ({ fixed }: Props) => {
  const containerClassName = joinStringList([styles.container, fixed ? styles.fixed : null])

  return (
    <div className={containerClassName}>
      <div className={styles.loader}>
        <FontAwesomeIcon icon={faAppleAlt} size="3x" bounce />
        <FontAwesomeIcon icon={faShoppingBasket} size="3x" bounce style={{ animationDelay: '100ms' }} />
        <FontAwesomeIcon icon={faCarrot} size="3x" bounce style={{ animationDelay: '200ms' }} />
        <FontAwesomeIcon icon={faLemon} size="3x" bounce style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}
export default Loader
