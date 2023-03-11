import { joinStringList } from 'utils'

import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

type ButtonColor = 'primary' | 'secondary' | 'tertiary'

type ButtonVariant = 'solid' | 'outlined'

type ButtonSize = 'sm' | 'md' | 'lg'

interface CustomProps {
  additionalClasses?: string
  color?: ButtonColor
  size?: ButtonSize
  variant?: ButtonVariant
}

const getBtnClassName = ({ additionalClasses, color, size, variant }: CustomProps) => {
  return joinStringList([
    styles.btn,
    color ? styles[color] : null,
    size ? styles[size] : null,
    variant ? styles[variant] : null,
    additionalClasses,
  ])
}

type Props = CustomProps & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = ({
  className,
  color = 'primary',
  size = 'md',
  variant = 'solid',
  ...props
}: PropsWithChildren<Props>) => {
  const finalClassName = getBtnClassName({
    additionalClasses: className,
    color,
    size,
    variant,
  })

  return <button className={finalClassName} {...props} />
}

export default Button
