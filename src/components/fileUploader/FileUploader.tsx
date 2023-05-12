import React from "react";

import Dropbox from "components/dropbox";
import Button from "components/button";
import Scanner from "components/scanner";
import UploadIcon from "assets/upload.svg";

import stl from "./FileUploader.module.scss";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [src, setSrc] = React.useState(null);

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
    if (file.type.includes("image")) {
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
    (selectedFile !== null && <Scanner file={selectedFile} />) ||
    (src !== null && <Scanner src={src} />) || (
      <div className={stl.fileUploader}>
        <div className={stl.other}>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFile}
          />
          <Button
            title="Upload File"
            icon={<UploadIcon />}
            handleOnClick={handleUploadBtn}
          />
          <span>or</span>
          <input
            placeholder="Enter image URL"
            className={stl.input}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Dropbox setSelectedFile={setSelectedFile} />
      </div>
    )
  );
};

export default FileUploader;
