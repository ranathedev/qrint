import React, { useState } from 'react'

import Customizer from 'components/customizer'
import Footer from 'components/footer'
import Header from 'components/header'
import InputContainer from 'components/input-container'
import Sidebar from 'components/sidebar'

import stl from './index.module.scss'

interface Styles {
  module: { color: string; shape: string }
  innereye: { color: string; shape: string }
  outereye: { color: string; shape: string }
  format: string
}

const Generator = () => {
  const [title, setTitle] = useState('Text')
  const [value, setValue] = useState('')
  const [shouldGetData, setShouldGetData] = useState(false)
  const [src, setSrc] = useState('')
  const [styles, setStyles] = useState({
    module: { color: 'black', shape: 'default' },
    innereye: { color: 'black', shape: 'default' },
    outereye: { color: 'black', shape: 'default' },
    format: 'png',
  })

  const data = {
    data: value,
    image: {
      uri: 'icon://appstore',
      modules: true,
    },
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
    size: { width: 400, quiet_zone: 4, error_correction: 'M' },
    output: { format: styles.format },
  }

  const generateCode = async (styles: Styles) => {
    // console.log(styles)
    // console.log(value)

    // fetch('https://qrcode3.p.rapidapi.com/qrcode/text', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //     'x-rapidapi-key': process.env.X_RapidAPI_Key,
    //   },
    //   body: JSON.stringify(data),
    // }).then(response => {
    //   if (response.status >= 400) {
    //     response.text().then(text => alert('API Error:\n\n' + text))
    //     return
    //   }

    //   response.blob().then(blob => {
    //     const reader = new FileReader()
    //     reader.readAsDataURL(blob)
    //     reader.onloadend = () => {
    //       const imgUrl = reader.result
    //       setSrc(imgUrl)
    //       console.log('Reader Result:', reader.result)
    //     }
    //   })
    // })

    alert('Coming Soon')
    setShouldGetData(false)
  }

  const getValue = (val: string) => {
    setValue(val)
    setShouldGetData(true)
  }

  const getStyles = (styles: Styles) => generateCode(styles)

  return (
    <div className={stl.generator}>
      <Header />
      <div className={stl.container}>
        <Sidebar title={title} setTitle={setTitle} />
        <div className={stl.row}>
          <InputContainer
            title={title}
            setValue={setValue}
            onGenerate={getValue}
            // src={src}
          />
          <Customizer setStyles={getStyles} shouldGetData={shouldGetData} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Generator
