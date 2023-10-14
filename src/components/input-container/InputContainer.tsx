import React, { useState } from 'react'
import qrcode from 'qrcode-generator'

import CustomForm from 'components/form'
import getInitVals from 'lib/initialVals'
import Button from 'components/button'

import DownloadIcon from 'assets/download.svg'

import stl from './InputContainer.module.scss'
import Image from 'next/image'

interface Props {
  title: string
  setValue: (arg: string) => void
}

const InputContainer = ({ title, setValue }: Props) => {
  const [src, setSrc] = useState('')

  const generate = (val: string) => {
    if (val !== '') {
      var qr = qrcode(0, 'H')
      qr.addData(val)
      qr.make()
      const url = qr.createDataURL(20, 20)
      setSrc(url)
    } else {
      alert("Value shouldn't be empty")
    }
  }

  const downloadImage = () => {
    const fileName = window.prompt('Enter a filename:')
    if (fileName) {
      const a = document.createElement('a')
      a.href = src
      a.download = fileName + '.png'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else {
      console.log('Download canceled: No filename provided.')
    }
  }

  return (
    <div className={stl.inputContainer}>
      <CustomForm
        generate={generate}
        title={title}
        initialVals={getInitVals(title)}
        setValue={setValue}
      />
      {src !== '' && (
        <>
          <div className={stl.imgContainer}>
            <div className={stl.divider} />
            <Image src={src} width={250} height={250} alt="qrcode-image" />
          </div>
          <div className={stl.btnContainer}>
            <Button
              title="Download"
              icon={<DownloadIcon />}
              handleOnClick={downloadImage}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default InputContainer
