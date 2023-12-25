import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import qrcode from 'qrcode-generator'

import { modules, innereyes, outereyes, logos } from 'lib/customizerData'
import Dropdown from 'components/dropdown'
import Button from 'components/button'
// import RadioInput from 'components/radio-inputs'

import DownloadIcon from 'assets/download.svg'
import QRCodeIcon from 'assets/generate-qrcode.svg'
import ResetIcon from 'assets/reset.svg'

import stl from './Customizer.module.scss'

interface Props {
  setStyles: (arg: {
    imageURI: string
    module: { color: string; shape: string }
    innereye: { color: string; shape: string }
    outereye: { color: string; shape: string }
    format: string
  }) => void
  shouldGetData: boolean
  btnLabel: string
}

const Customizer = ({ setStyles, shouldGetData, btnLabel }: Props) => {
  const [src, setSrc] = useState('')
  const [value, setValue] = useState('')
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
  const [imageURI, setImageURI] = useState('')
  const [expand, setExpand] = useState({
    modules: true,
    innereye: false,
    outereye: false,
    logo: false,
  })

  useEffect(() => {
    shouldGetData && setStyles({ imageURI, module, innereye, outereye, format })
  }, [shouldGetData])

  const generate = (val: string) => {
    if (val !== '') {
      var qr = qrcode(0, 'H')
      qr.addData(val)
      qr.make()
      const url = qr.createDataURL(20, 20)
      setSrc(url)
      setValue('')
    } else alert("Value shouldn't be empty")
  }

  const downloadImage = () => {
    const a = document.createElement('a')
    a.href = src
    a.download = 'qrcode.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className={stl.customizer}>
      <div className={stl.preview}>
        {src !== '' ? (
          <Image src={src} width={250} height={250} alt="generated-qrcode" />
        ) : (
          <div className={stl.placeholder}>
            <span>Your QRCode will appear here.</span>
          </div>
        )}
      </div>
      <input
        placeholder="Enter text or URL"
        id="textInput"
        type="text"
        className={stl.input}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {/* <div className={stl.container}>
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
          isLogo={true}
          imageURI={imageURI}
          setImageURI={setImageURI}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: false,
              outereye: false,
              logo: true,
            })
          }
        />
      </div> */}
      {/* <RadioInput format={format} setFormat={setFormat} /> */}
      <div className={stl.btnContainer}>
        <Button
          title={src === '' ? btnLabel : 'Download'}
          icon={src === '' ? <QRCodeIcon /> : <DownloadIcon />}
          handleOnClick={() => {
            src === '' ? generate(value) : downloadImage()
          }}
        />
        {src !== '' && (
          <Button
            title="Reset"
            variant="danger"
            icon={<ResetIcon />}
            handleOnClick={() => {
              setValue('')
              setSrc('')
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Customizer
