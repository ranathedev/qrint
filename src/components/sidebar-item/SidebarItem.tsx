import React, { useState } from 'react'
import clsx from 'clsx'

import getIcons from 'lib/getIcons'
import Tooltip from 'components/tooltip'

import stl from './SidebarItem.module.scss'

interface Props {
  title: string
  handleOnClick: (arg: string) => void
  customClass?: string
  isCollapsed: boolean
  isActive: boolean
}

const SidebarItem = ({
  title,
  handleOnClick,
  isCollapsed,
  customClass,
  isActive,
}: Props) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      onMouseOver={() => setShowTooltip(true)}
      onMouseOut={() => setShowTooltip(false)}
      className={clsx(stl.sidebarItem, isActive && stl.active, customClass)}
      onClick={() => handleOnClick(title)}
    >
      <span className={stl.icon}>{getIcons(title)}</span>
      {!isCollapsed && <span className={stl.text}>{title}</span>}
      <Tooltip isVisible={isCollapsed && showTooltip} text={title} />
    </div>
  )
}

SidebarItem.defaultProps = {
  title: 'Text message',
  handleOnClick: () => {},
  isCollapsed: true,
}

export default SidebarItem
