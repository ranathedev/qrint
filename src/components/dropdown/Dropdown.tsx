import React, { useEffect, useState } from 'react'
import Image from 'next/image'
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
  colorPicker: boolean
}

const Dropdown = ({
  title,
  list,
  handleOnClick,
  handleItemClick,
  expand,
  colorPicker,
}: Props) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [color, setColor] = useState('#000000')
  const [shape, setShape] = useState('default')

  useEffect(() => {
    handleItemClick(shape, color)
  }, [color, shape])

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
            left="-25%"
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
              shape === item.name && stl.active
            )}
            key={item.name}
            onClick={() => setShape(item.name)}
          >
            {(item.icon && item.icon) || (
              <Image
                src={item.src || ''}
                width={60}
                height={60}
                alt={item.name + '-image'}
              />
            )}
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
  handleItemClick: () => {},
}

export default Dropdown
