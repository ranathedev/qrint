import React, { useEffect, useState } from 'react'

import Customizer from 'components/customizer'
import Footer from 'components/footer'
import Header from 'components/header'
// import InputContainer from 'components/input-container'
// import Sidebar from 'components/sidebar'

import stl from './index.module.scss'

interface Styles {
  imageURI: string
  module: { color: string; shape: string }
  innereye: { color: string; shape: string }
  outereye: { color: string; shape: string }
}

interface Data {
  data: string
  style: {
    module: { color: string; shape: string }
    inner_eye: { color: string; shape: string }
    outer_eye: { color: string; shape: string }
    background: { color: string }
  }
  size: { width: number; quiet_zone: number; error_correction: string }
  output: { format: string }
  image?: { uri: string; modules: boolean }
}

const Generator = () => {
  const [src, setSrc] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log(isLoading ? 'Loading started...' : 'Loading is finished...')
  }, [isLoading])

  const generateQRCode = async (styles: Styles, val: string) => {
    setIsLoading(true)

    const data: Data = {
      data: val,
      style: {
        module: { color: styles.module.color, shape: styles.module.shape },
        inner_eye: {
          color: styles.innereye.color,
          shape: styles.innereye.shape,
        },
        outer_eye: {
          color: styles.outereye.color,
          shape: styles.outereye.shape,
        },
        background: { color: 'white' },
      },
      size: { width: 1000, quiet_zone: 4, error_correction: 'M' },
      output: { format: 'png' },
    }

    if (styles.imageURI !== '') {
      data.image = {
        uri: `icon://${styles.imageURI}`,
        modules: styles.imageURI !== '',
      }
    }

    console.log(data)

    fetch('https://qrcode3.p.rapidapi.com/qrcode/text', {
      method: 'POST',
      // @ts-ignore
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.status >= 400) {
        response.text().then(text => alert('API Error:\n\n' + text))
        return
      }

      response
        .blob()
        .then(blob => {
          const reader = new FileReader()
          reader.readAsDataURL(blob)
          reader.onloadend = () => {
            const imgUrl = reader.result as string
            setSrc(imgUrl)
          }
        })
        .catch(err => console.error(err))

      setIsLoading(false)
    })
  }

  const getStyles = (styles: Styles, val: string) => generateQRCode(styles, val)

  return (
    <div className={stl.generator}>
      <Header />
      <div className={stl.container}>
        {/* <Sidebar title={title} setTitle={setTitle} /> */}
        <div className={stl.row}>
          {/* <InputContainer
            title={title}
            setValue={setValue}
            onGenerate={() => setShouldGetData(true)}
            src={src}
          /> */}
          <Customizer
            sendData={getStyles}
            src={src}
            setSrc={setSrc}
            isLoading={isLoading}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Generator
