import React from "react";

import FileUploader from "components/fileUploader";
import Header from "components/header";

import stl from "./index.module.scss";

const Reader = () => {
  return (
    <div className={stl.reader}>
      <Header />
      <FileUploader />
    </div>
  );
};

export default Reader;