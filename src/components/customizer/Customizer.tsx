import React from "react";
import Image from "next/image";

import { modules, innereyes, outereyes, logos } from "lib/data";
import Button from "components/button";
import DownloadIcon from "assets/download.svg";
import Dropdown from "components/dropdown";

import stl from "./Customizer.module.scss";

const Customizer = () => {
  const [expand, setExpand] = React.useState({
    modules: true,
    innereye: false,
    outereye: false,
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
          title="Modules"
          expand={expand.modules}
          list={modules}
          handleOnClick={() =>
            setExpand({
              modules: true,
              innereye: false,
              outereye: false,
              logo: false,
            })
          }
        />
        <Dropdown
          title="Inner Eye"
          expand={expand.innereye}
          list={innereyes}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: true,
              outereye: false,
              logo: false,
            })
          }
        />
        <Dropdown
          title="Outer Eye"
          expand={expand.outereye}
          list={outereyes}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: false,
              outereye: true,
              logo: false,
            })
          }
        />
        <Dropdown
          colorPicker={false}
          title="Logo"
          expand={expand.logo}
          list={logos}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: false,
              outereye: false,
              logo: true,
            })
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
