import React, { useEffect } from "react";
import axios from "axios";

import Button from "components/button";
import CaptureImg from "components/captureImage";
import Dropbox from "components/dropbox";
import ReaderRes from "components/reader-result";
import Scanner from "components/scanner";

import UploadIcon from "assets/upload.svg";

import stl from "./FileUploader.module.scss";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [src, setSrc] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [showCamera, setShowCamera] = React.useState(false);

  const formData = new FormData();

  useEffect(() => {
    if (selectedFile) {
      scanWithFile();
    }
  }, [selectedFile]);

  useEffect(() => {
    if (src) {
      scanWithURL();
    }
  }, [src]);

  const dataURLtoFile = (dataurl: string) => {
    var arr = dataurl.split(","),
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], "image", { type: "image/png" });
    //@ts-ignore
    setSelectedFile(file);
  };

  const scanWithFile = async () => {
    //@ts-ignore
    formData.append("file", selectedFile);

    await axios
      .post(`http://api.qrserver.com/v1/read-qr-code/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const data = response.data[0].symbol[0].data;
        if (data === null) {
          console.log("No QR-Code Found in the Image.");
          //@ts-ignore
          setData("No QR-Code Found in the Image.");
        } else {
          setData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setSelectedFile(null);
  };

  const scanWithURL = async () => {
    //@ts-ignore
    const encodedURL = encodeURI(src);
    await axios
      .post(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${encodedURL}`)
      .then((response) => {
        const data = response.data[0].symbol[0].data;
        if (data === null) {
          console.log("No QR-Code Found in the Image.");
          //@ts-ignore
          setData("No QR-Code Found in the Image.");
        } else {
          setData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setSrc(null);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter")
      isImageUrl(e.target.value)
        .then((isImage) => {
          isImage ? setSrc(e.target.value) : setSrc(null);
        })
        .catch(() => {
          console.log("Not an Image");
        });
  };

  const handleUploadBtn = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput?.click();
  };

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (file.size < 1048576) {
      setSelectedFile(file);
    } else {
      console.log("Not an Image");
    }
  };

  const isImageUrl = (url: string) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      xhr.onerror = function () {
        reject(new Error("Request failed"));
      };
      xhr.onload = function () {
        if (this.status === 200) {
          const blob = this.response;
          const reader = new FileReader();
          reader.onloadend = function () {
            const dataUrl = reader.result;
            //@ts-ignore
            const mimeType = dataUrl.split(",")[0].split(":")[1];
            resolve(mimeType.startsWith("image/"));
          };
          reader.readAsDataURL(blob);
        } else {
          reject(new Error(`Request failed with status ${this.status}`));
        }
      };
      xhr.send();
    });
  };

  return (
    (data !== null && (
      //@ts-ignore
      <ReaderRes handleBackBtn={() => setData(null)} data={data} />
    )) ||
    (selectedFile !== null && <Scanner file={selectedFile} />) ||
    (src !== null && <Scanner src={src} />) || (
      <div className={stl.fileUploader}>
        <div className={stl.other}>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
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
          handleClick={(src) => {
            setShowCamera(false);
            dataURLtoFile(src);
          }}
          handleCancel={() => setShowCamera(false)}
        />
        <div className={stl.captureBtn}>
          <span className={stl.or}>or</span>
          <Button
            title="Capture Photo"
            handleOnClick={() => setShowCamera(true)}
          />
        </div>
      </div>
    )
  );
};

export default FileUploader;
