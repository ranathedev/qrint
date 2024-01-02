import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { modules, innereyes, outereyes, logos } from 'lib/customizerData'
import Dropdown from 'components/dropdown'
import Spinner from 'components/spinner'
import Button from 'components/button'

import DownloadIcon from 'assets/download.svg'
import QRCodeIcon from 'assets/generate-qrcode.svg'
import ResetIcon from 'assets/reset.svg'

import stl from './Customizer.module.scss'

interface Props {
  sendData: (
    arg1: {
      imageURI: string
      module: { color: string; shape: string }
      innereye: { color: string; shape: string }
      outereye: { color: string; shape: string }
    },
    arg2: string
  ) => void
  isLoading: boolean
  src: string
  setSrc: (arg: string) => void
}

const Customizer = ({ sendData, isLoading, src, setSrc }: Props) => {
  const [resetVals, setResetVals] = useState(false)
  const [value, setValue] = useState('')
  const [module, setModule] = useState({
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

  const downloadImage = () => {
    const a = document.createElement('a')
    a.href = src
    a.download = 'qrcode.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  useEffect(() => {
    if (resetVals) {
      setValue('')
      setSrc('')
      setImageURI('')
      setModule({
        shape: 'default',
        color: '#ff0000',
      })
      setInnerEye({
        shape: 'default',
        color: '#ff0000',
      })
      setOuterEye({
        shape: 'default',
        color: '#ff0000',
      })
      setExpand({
        modules: true,
        innereye: false,
        outereye: false,
        logo: false,
      })
    }
  }, [resetVals])

  const handleReset = () => {
    setResetVals(true)
    setTimeout(() => setResetVals(false), 1500)
  }

  return (
    <div className={stl.customizer}>
      <div className={stl.preview}>
        {src !== '' ? (
          <Image src={src} width={250} height={250} alt="generated-qrcode" />
        ) : isLoading ? (
          <Spinner />
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
      <div className={stl.container}>
        <Dropdown
          title="Modules"
          expand={expand.modules}
          list={modules}
          reset={resetVals}
          handleItemClick={(shape, color) => setModule({ shape, color })}
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
          reset={resetVals}
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
          reset={resetVals}
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
          reset={resetVals}
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
      </div>
      <div className={stl.btnContainer}>
        <Button
          title={src === '' ? 'Generate QRCode' : 'Download'}
          icon={src === '' ? <QRCodeIcon /> : <DownloadIcon />}
          handleOnClick={() => {
            src === ''
              ? sendData({ imageURI, module, innereye, outereye }, value)
              : downloadImage()
          }}
        />
        {src !== '' && (
          <Button
            title="Reset"
            variant="danger"
            icon={<ResetIcon />}
            handleOnClick={handleReset}
          />
        )}
      </div>
    </div>
  )
}

export default Customizer
