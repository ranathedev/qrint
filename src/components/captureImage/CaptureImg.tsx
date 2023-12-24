import React, { useCallback, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Button from 'components/button'
import Tooltip from 'components/tooltip'

import RotateCamIcon from 'assets/camera-rotate.svg'

import stl from './CaptureImg.module.scss'

interface Props {
  isCameraOn: Boolean
  handleCancel: () => void
  handleClick: (arg: string) => void
}

const CaptureImg = ({ isCameraOn, handleClick, handleCancel }: Props) => {
  const [img, setImg] = useState('https://picsum.photos/400')
  const [showTooltip, setShowTooltip] = useState(false)
  const [cameraFacingMode, setCameraFacingMode] = useState('user')
  const webcamRef = useRef(null)

  useEffect(() => {
    showTooltip && setTimeout(() => setShowTooltip(false), 1500)
  }, [showTooltip])

  useEffect(() => {
    if (!isCameraOn) setImg('https://picsum.photos/400')
  }, [isCameraOn])

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: cameraFacingMode,
  }

  const handleCamRotate = () => {
    if (cameraFacingMode === 'user') setCameraFacingMode('environment')
    else setCameraFacingMode('user')
  }

  const capture = useCallback(() => {
    //@ts-ignore
    const imageSrc = webcamRef.current.getScreenshot()
    setImg(imageSrc)
    setShowTooltip(true)
  }, [webcamRef])

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={
        isCameraOn
          ? { scale: 1, y: '-50%', x: '-50%' }
          : { scale: 0, y: '-50%', x: '-50%' }
      }
      transition={{ type: 'spring' }}
      style={{
        transformOrigin: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
      }}
      className={stl.container}
    >
      {isCameraOn && img === 'https://picsum.photos/400' ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            ref={webcamRef}
            width="100%"
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
          />
          <div className={stl.btnContainer}>
            <Button
              handleOnClick={handleCamRotate}
              title="Rotate"
              icon={<RotateCamIcon />}
            />
            <Button handleOnClick={capture} title="Take Photo" />
            <Button
              handleOnClick={handleCancel}
              title="Cancel"
              variant="danger"
            />
          </div>
        </>
      ) : (
        <>
          <Image
            src={img}
            width={400}
            height={400}
            alt="captured"
            className={stl.capturedImg}
          />
          <div className={stl.btnContainer}>
            <Button
              // @ts-ignore
              handleOnClick={() => handleClick(img)}
              title="Select Photo"
            />
            <Button
              handleOnClick={() => setImg('https://picsum.photos/400')}
              title="Retake Photo"
              variant="secondary"
            />
            <Button
              handleOnClick={handleCancel}
              title="Cancel"
              variant="danger"
            />
          </div>
        </>
      )}
      <Tooltip
        isVisible={showTooltip}
        text="Photo Captured!"
        arrowPos="bottom"
        top="42%"
        left="32%"
        hook={false}
        customClass={stl.tooltip}
      />
    </motion.div>
  )
}

CaptureImg.defaultProps = {
  isCameraOn: false,
}

export default CaptureImg
