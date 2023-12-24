import React, { useState } from 'react'

import Customizer from 'components/customizer'
import Footer from 'components/footer'
import Header from 'components/header'
import InputContainer from 'components/input-container'
import Sidebar from 'components/sidebar'

import stl from './index.module.scss'

const Generator = () => {
  const [title, setTitle] = useState('Text')
  const [value, setValue] = useState('')
  const [src, setSrc] = useState<any>('')
  const [styles, setStyles] = useState({
    module: { color: 'black', shape: 'default' },
    innereye: { color: '', shape: 'default' },
    outereye: { color: '', shape: 'default' },
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

  const generateCode = async (val: string) => {
    // fetch('https://qrcode3.p.rapidapi.com/qrcode/text', {
    //   method: 'POST',
    //   // @ts-ignore
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
  }

  return (
    <div className={stl.generator}>
      <Header />
      <div className={stl.container}>
        <Sidebar title={title} setTitle={setTitle} />
        <div className={stl.row}>
          <InputContainer
            //@ts-ignore
            generate={generateCode}
            title={title}
            setValue={setValue}
            src={src}
          />
          <Customizer setStyles={setStyles} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Generator
