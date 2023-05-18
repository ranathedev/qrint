import React from "react";

import Header from "components/header";
import FileUploader from "components/fileUploader";

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
