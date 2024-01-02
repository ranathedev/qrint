import React, { useEffect, useState } from 'react'
import axios from 'axios'
import clsx from 'clsx'

import Button from 'components/button'
import CaptureImg from 'components/captureImage'
import Dropbox from 'components/dropbox'
import ReaderRes from 'components/reader-result'
import Scanner from 'components/scanner'

import UploadIcon from 'assets/upload.svg'

import stl from './FileUploader.module.scss'

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [src, setSrc] = useState('')
  const [data, setData] = useState('')
  const [showCamera, setShowCamera] = useState(false)

  useEffect(() => {
    selectedFile && scanWithFile(selectedFile)
    // eslint-disable-next-line
  }, [selectedFile])

  const formData = new FormData()

  const dataURLtoFile = async (dataurl: string) => {
    try {
      const response = await fetch(dataurl)
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`)

      const blob = await response.blob()
      const u8arr = new Uint8Array(await new Response(blob).arrayBuffer())
      const file = new File([u8arr], 'image.png', { type: 'image/png' })
      scanWithFile(file)
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  const scanWithFile = async (file: Blob | string) => {
    formData.append('file', file)

    await axios
      .post(`https://api.qrserver.com/v1/read-qr-code/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        const data = response.data[0].symbol[0].data
        if (!data) setData('No QR-Code Found in the Image.')
        else setData(data)
      })
      .catch(error => console.error(error))

    setSelectedFile(null)
  }

  const scanWithURL = async (src: string) => {
    const encodedURL = encodeURI(src)
    await axios
      .post(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${encodedURL}`)
      .then(response => {
        const data = response.data[0].symbol[0].data
        if (!data) setData('No QR-Code Found in the Image.')
        else setData(data)
      })
      .catch(error => {
        console.error(error)
      })
    setSrc('')
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      isImageUrl(e.target.value)
        .then(isImage => {
          if (isImage) {
            scanWithURL(e.target.value)
            setSrc(e.target.value)
          }
        })
        .catch(() => {
          alert('Entered URL is not of Image')
        })
    }
  }

  const handleUploadBtn = () => {
    const fileInput = document.getElementById('fileInput')
    fileInput?.click()
  }

  const handleFile = (e: any) => {
    const file = e.target.files[0]
    if (file.size < 1048576) setSelectedFile(file)
    else alert('File size should be less than 1 MiB')
  }

  const isImageUrl = (url: string) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.responseType = 'blob'
      xhr.onerror = function () {
        reject(new Error('Request failed'))
      }
      xhr.onload = function () {
        if (this.status === 200) {
          const blob = this.response
          const reader = new FileReader()
          reader.onloadend = function () {
            const dataUrl = reader.result as string
            const mimeType = dataUrl?.split(',')[0].split(':')[1]
            resolve(mimeType.startsWith('image/'))
          }
          reader.readAsDataURL(blob)
        } else reject(new Error(`Request failed with status ${this.status}`))
      }
      xhr.send()
    })
  }

  const handleCaptureImg = (src: string) => {
    setShowCamera(false)
    dataURLtoFile(src)
  }

  return (
    (data !== '' && (
      <ReaderRes handleBackBtn={() => setData('')} data={data} />
    )) ||
    (selectedFile !== null && <Scanner file={selectedFile} />) ||
    (src !== '' && <Scanner src={src} />) || (
      <div className={stl.fileUploader}>
        <div className={stl.other}>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            accept="image/png, image/jpeg, image/gif"
            onChange={handleFile}
          />
          <Button
            title="Upload File"
            icon={<UploadIcon />}
            handleOnClick={handleUploadBtn}
          />
          <span className={stl.or}>or</span>
          <input
            placeholder="Enter image URL"
            className={stl.input}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Dropbox setSelectedFile={setSelectedFile} />
        <CaptureImg
          isCameraOn={showCamera}
          handleClick={handleCaptureImg}
          handleCancel={() => setShowCamera(false)}
        />
        <div className={stl.captureBtn}>
          <span className={stl.or}>or</span>
          <Button
            title="Capture Photo"
            handleOnClick={() => setShowCamera(true)}
          />
        </div>
        <div className={clsx(stl.wrapper, showCamera && stl.showWrapper)} />
      </div>
    )
  )
}

export default FileUploader
