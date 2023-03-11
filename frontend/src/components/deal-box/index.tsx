import { joinStringList } from 'utils'

import { PropsWithChildren } from 'react'

import styles from './DealBox.module.scss'

type BoxColor = 'brown' | 'dark-orange' | 'green' | 'orange' | 'pink' | 'salmon'

interface CustomProps {
  color?: BoxColor
  className?: string
}

const getBoxClassName = ({ className, color }: CustomProps) => {
  return joinStringList([styles.box, color ? styles[color] : null, className])
}

type Props = CustomProps

export const DealBox = ({ className, color = 'orange', ...props }: PropsWithChildren<Props>) => {
  const finalClassName = getBoxClassName({
    className,
    color,
  })
  return <div className={`deal-box ${finalClassName}`} {...props} />
}

export default DealBox
