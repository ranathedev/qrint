import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { modules, innereyes, outereyes, logos } from 'lib/customizerData'
import Dropdown from 'components/dropdown'
import RadioInput from 'components/radio-inputs'

import stl from './Customizer.module.scss'

interface Props {
  setStyles: (arg: {
    module: { color: string; shape: string }
    innereye: { color: string; shape: string }
    outereye: { color: string; shape: string }
    format: string
  }) => void
  shouldGetData: boolean
}

const Customizer = ({ setStyles, shouldGetData }: Props) => {
  const [format, setFormat] = useState('png')
  const [module, setModules] = useState({
    shape: 'default',
    color: '#ff0000',
  })
  const [innereye, setInnerEye] = useState({
    shape: 'default',
    color: '#00ff00',
  })
  const [outereye, setOuterEye] = useState({
    shape: 'default',
    color: '#0000ff',
  })
  const [expand, setExpand] = useState({
    modules: true,
    innereye: false,
    outereye: false,
    logo: false,
  })

  useEffect(() => {
    shouldGetData && setStyles({ module, innereye, outereye, format })
  }, [shouldGetData])

  return (
    <div className={stl.customizer}>
      <div className={stl.preview}>
        <Image
          src="/qr-code.png"
          width={200}
          height={250}
          alt="preview-image"
        />
      </div>
      <div className={stl.container}>
        <Dropdown
          title="Modules"
          expand={expand.modules}
          list={modules}
          handleItemClick={(shape, color) => setModules({ shape, color })}
          handleOnClick={() =>
            setExpand({
              modules: true,
              innereye: false,
              outereye: false,
              logo: false,
            })
          }
        />
        <Dropdown
          title="Inner Eye"
          expand={expand.innereye}
          list={innereyes}
          handleItemClick={(shape, color) => setInnerEye({ shape, color })}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: true,
              outereye: false,
              logo: false,
            })
          }
        />
        <Dropdown
          title="Outer Eye"
          expand={expand.outereye}
          list={outereyes}
          handleItemClick={(shape, color) => setOuterEye({ shape, color })}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: false,
              outereye: true,
              logo: false,
            })
          }
        />
        <Dropdown
          colorPicker={false}
          title="Logo"
          expand={expand.logo}
          list={logos}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: false,
              outereye: false,
              logo: true,
            })
          }
        />
        <RadioInput format={format} setFormat={setFormat} />
      </div>
    </div>
  )
}

export default Customizer
