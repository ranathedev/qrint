import React from "react";

import FileUploader from "components/fileUploader";
import Footer from "components/footer";
import Header from "components/header";

import stl from "./index.module.scss";

const Reader = () => {
  return (
    <div className={stl.reader}>
      <Header />
      <div className={stl.content}>
        <FileUploader />
      </div>
      <Footer />
    </div>
  );
};

export default Reader;
