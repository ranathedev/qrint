import React from "react";
import Image from "next/image";

import Dropdown from "components/dropdown";
import Button from "components/button";
import DownloadIcon from "assets/download.svg";

import stl from "./Customizer.module.scss";

const Customizer = () => {
  const [expand, setExpand] = React.useState({
    frame: true,
    shape: false,
    logo: false,
  });

  return (
    <div className={stl.customizer}>
      <div className={stl.preview}>
        <Image
          src="/qr-code.png"
          width={200}
          height={250}
          alt="preview-image"
        />
      </div>
      <div className={stl.container}>
        <Dropdown
          expand={expand.frame}
          handleOnClick={() =>
            setExpand({ frame: true, shape: false, logo: false })
          }
        />
        <Dropdown
          title="Shape"
          expand={expand.shape}
          handleOnClick={() =>
            setExpand({ frame: false, shape: true, logo: false })
          }
        />
        <Dropdown
          title="Logo"
          expand={expand.logo}
          handleOnClick={() =>
            setExpand({ frame: false, shape: false, logo: true })
          }
        />
      </div>
      <div className={stl.btnContainer}>
        <Button icon={<DownloadIcon />} width="120px" />
        <Button title="SVG/EPS" icon={<DownloadIcon />} />
      </div>
    </div>
  );
};

export default Customizer;
