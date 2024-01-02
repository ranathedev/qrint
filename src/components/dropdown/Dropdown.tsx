import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import Tooltip from 'components/tooltip'

import DownIcon from 'assets/arrow-down.svg'

import stl from './Dropdown.module.scss'

interface Props {
  title: string
  list: Array<{ name: string; icon?: React.ReactNode; src?: string }>
  handleItemClick: (arg1: string, arg2: string) => void
  handleOnClick: () => void
  expand: boolean
  isLogo: boolean
  colorPicker: boolean
  reset: boolean
  imageURI?: string
  setImageURI: (arg: string) => void
}

const Dropdown = ({
  title,
  list,
  handleOnClick,
  handleItemClick,
  expand,
  isLogo,
  reset,
  colorPicker,
  imageURI,
  setImageURI,
}: Props) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [color, setColor] = useState('#000000')
  const [shape, setShape] = useState('default')

  useEffect(() => {
    reset ? setColor('#000000') : setShape('default')
  }, [reset])

  useEffect(() => {
    handleItemClick(shape, color)
  }, [color, shape])

  const onItemClick = (name: string) => {
    if (isLogo) {
      if (imageURI === name) setImageURI('')
      else setImageURI(name)
    } else setShape(name)
  }

  return (
    <div
      className={clsx(
        stl.dropDown,
        expand && stl.expand,
        !colorPicker && stl.noColorPicker
      )}
      onClick={handleOnClick}
    >
      <div className={stl.header}>
        {title}
        <span className={stl.colorPicker}>
          {colorPicker && (
            <input
              onMouseOver={() => setShowTooltip(expand)}
              onMouseOut={() => setShowTooltip(false)}
              className={stl.input}
              type="color"
              value={color}
              onChange={e => setColor(e.target.value)}
            />
          )}
          <Tooltip
            isVisible={showTooltip}
            arrowPos="bottom"
            text="Change Color"
            top="-180%"
            left="0"
            customClass={stl.tooltip}
          />
          <DownIcon className={stl.icon} />
        </span>
      </div>
      <div className={stl.container}>
        {list.map(item => (
          <div
            style={{ color }}
            id={item.name}
            className={clsx(
              stl.imgContainer,
              shape === item.name || imageURI === item.name ? stl.active : ''
            )}
            key={item.name}
            onClick={() => onItemClick(item.name)}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  title: 'Frame',
  list: [
    { id: 'sample-image', src: '/qr-code.png' },
    { id: 'sample-image', src: '/qr-code.png' },
    { id: 'sample-image', src: '/qr-code.png' },
    { id: 'sample-image', src: '/qr-code.png' },
    { id: 'sample-image', src: '/qr-code.png' },
    { id: 'sample-image', src: '/qr-code.png' },
  ],
  expand: false,
  colorPicker: true,
  isLogo: false,
  handleItemClick: () => {},
  setImageURI: () => {},
}

export default Dropdown
