import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import stl from './Scanner.module.scss'

interface Props {
  file?: File
  src: string
}

const Scanner = ({ file, src }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    isLoading && setTimeout(() => setIsLoading(false), 500)
  }, [isLoading])

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={stl.scanner}>
      <div className={stl.container}>
        <Image
          src={(file && URL.createObjectURL(file)) || src}
          width={330}
          height={340}
          alt="image"
        />
        <div className={stl.border}></div>
      </div>
      <div className={stl.text}>Scanning the Image...</div>
    </div>
  )
}

Scanner.defaultProps = {
  src: '',
}

export default Scanner
