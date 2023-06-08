import React, { useCallback, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { motion } from "framer-motion";

import Button from "components/button";
import Tooltip from "components/tooltip";

import stl from "./CaptureImg.module.scss";

interface Props {
  isCameraOn: Boolean;
  handleCancel: () => void;
  handleClick: (arg: string) => void;
}

const CaptureImg = ({ isCameraOn, handleClick, handleCancel }: Props) => {
  const [img, setImg] = React.useState(null);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const webcamRef = useRef(null);

  console.log(img);

  useEffect(() => {
    showTooltip && setTimeout(() => setShowTooltip(false), 1500);
  }, [showTooltip]);

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    //@ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    setShowTooltip(true);
  }, [webcamRef]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={
        isCameraOn
          ? { scale: 1, y: "-50%", x: "-50%" }
          : { scale: 0, y: "-50%", x: "-50%" }
      }
      transition={{ type: "spring" }}
      style={{
        transformOrigin: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
      className={stl.container}
    >
      {isCameraOn && img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={false}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
          />
          <div className={stl.btnContainer}>
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
          {/* @ts-ignore */}
          <img src={img} alt="screenshot" />
          <div className={stl.btnContainer}>
            <Button
              // @ts-ignore
              handleOnClick={() => handleClick(img)}
              title="Select Photo"
            />
            <Button
              handleOnClick={() => setImg(null)}
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
  );
};

CaptureImg.defaultProps = {
  isCameraOn: false,
};

export default CaptureImg;
