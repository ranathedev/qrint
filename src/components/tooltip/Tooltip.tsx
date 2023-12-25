import React from 'react'
import clsx from 'clsx'

import stl from './Tooltip.module.scss'

interface Props {
  arrowPos: 'left' | 'right' | 'top' | 'bottom'
  top: string
  right: string
  bottom: string
  left: string
  isVisible: boolean
  text: string
  hook: boolean
  customClass?: string
}

const Tooltip = ({
  arrowPos,
  top,
  right,
  bottom,
  left,
  isVisible,
  text,
  hook,
  customClass,
}: Props) => {
  return (
    <span
      style={{ top, right, bottom, left }}
      className={clsx(
        stl.tooltip,
        (arrowPos === 'right' && stl.right) ||
          (arrowPos === 'top' && stl.top) ||
          (arrowPos === 'bottom' && stl.bottom),
        isVisible && stl.visible,
        hook && stl.showHook,
        customClass
      )}
    >
      {text}
    </span>
  )
}

Tooltip.defaultProps = {
  top: '15%',
  right: 'unset',
  bottom: 'unset',
  left: '130%',
  text: 'Tooltip text',
  arrowPos: 'left',
  hook: true,
}

export default Tooltip
