import React, { ReactNode } from 'react'
import clsx from 'clsx'

import stl from './Button.module.scss'

interface Props {
  title: string
  icon?: ReactNode
  width?: string
  type?: 'submit' | 'reset'
  handleOnClick?: (arg: any) => void
  variant: 'primary' | 'secondary' | 'danger' | 'signup'
}

const Button = ({
  title,
  icon,
  type,
  handleOnClick,
  width,
  variant,
}: Props) => {
  return (
    <button
      style={{ width }}
      type={type}
      onClick={handleOnClick}
      className={clsx(stl.btn, stl[variant])}
    >
      {title} {icon}
    </button>
  )
}

Button.defaultProps = {
  title: 'JPG',
  variant: 'primary',
}

export default Button
