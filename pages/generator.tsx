import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Customizer from 'components/customizer'
import Footer from 'components/footer'
import Header from 'components/header'
import InputContainer from 'components/input-container'
import Sidebar from 'components/sidebar'

import stl from './index.module.scss'

const Generator = () => {
  const [title, setTitle] = React.useState('Text')
  const [value, setValue] = React.useState('')
  const [styles, setStyles] = React.useState({
    module: { color: 'black', shape: 'default' },
    innereye: { color: '', shape: 'default' },
    outereye: { color: '', shape: 'default' },
  })

  // const [response, setResponse] = React.useState(null);

  const options = {
    method: 'POST',
    url: 'https://qrcode3.p.rapidapi.com/qrcode/text',
    headers: {
      Accept: 'image/svg+xml',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
    },
    data: {
      data: 'https://ranaintizar.com',
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
      size: { width: 300, quiet_zone: 4, error_correction: 'M' },
      output: { format: 'png' },
    },
  }

  const generateCode = async (val: string) => {
    // axios.request(options).then((response: any) => {
    //   console.log(response.data)
    //   // setResponse(response);
    //   response
    //     .blob()
    //     .then((blob: any) => {
    //       const reader = new FileReader()
    //       reader.readAsDataURL(blob)
    //       reader.onloadend = () => {
    //         console.log(reader.result)
    //       }
    //     })
    //     .catch((error: any) => {
    //       console.log(error)
    //     })
    // })
  }

  return (
    <div className={stl.generator}>
      <Header />
      <div className={stl.container}>
        <Sidebar title={title} setTitle={setTitle} />
        <div className={stl.row}>
          <InputContainer title={title} setValue={setValue} />
          <Customizer setStyles={setStyles} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Generator
