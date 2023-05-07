import React from "react";

import Button from "components/button";
import UploadIcon from "assets/upload.svg";
import Scanner from "components/scanner";

import stl from "./Dropbox.module.scss";

const Dropbox = () => {
  const [selectedFile, setSelectedFile] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    const ele = e.target;
    ele.classList.add(stl.draggedOver);
  };

  const handleDragOut = (e: any) => {
    e.preventDefault();
    const ele = e.target;
    ele.classList.remove(stl.draggedOver);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const ele = e.target;
    ele.classList.remove(stl.draggedOver);
    const files = e.dataTransfer.files;
    files.length > 1 && alert("Please drop only one file at a time.");
    console.log(files);
  };

  const handleKeyDown = (e: any) => {
    const ele = e.target;
    if (e.key === "Enter") window.open("https://" + ele.value, "_blank");
  };

  const handleUploadBtn = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput?.click();
  };

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setIsLoading(true);
  };

  return isLoading ? (
    <Scanner file={selectedFile} />
  ) : (
    <div
      id="dropbox"
      className={stl.dropbox}
      onDragOver={handleDragOver}
      onDragLeave={handleDragOut}
      onDrop={handleDrop}
    >
      <span>or</span>
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
      <div className={stl.inputContainer}>
        <span className={stl.label}>https://</span>
        <input
          placeholder="Enter image URL"
          className={stl.input}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Dropbox;
