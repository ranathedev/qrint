import React from "react";

import stl from "./Dropbox.module.scss";

const Dropbox = ({ setSelectedFile }: any) => {
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
    files.length > 1 && console.log("Please drop only one file at a time.");
    const file = files[0];
    if (file.type.includes("image")) {
      setSelectedFile(file);
    } else {
      console.log("Not an Image");
    }
  };

  return (
    <div
      id="dropbox"
      className={stl.dropbox}
      onDragOver={handleDragOver}
      onDragLeave={handleDragOut}
      onDrop={handleDrop}
    />
  );
};

export default Dropbox;
