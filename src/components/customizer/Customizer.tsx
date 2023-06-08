import React, { useEffect } from "react";
import Image from "next/image";

import { modules, innereyes, outereyes, logos } from "lib/data";
import Dropdown from "components/dropdown";

import stl from "./Customizer.module.scss";

interface Props {
  setStyles: (arg: any) => void;
}

const Customizer = ({ setStyles }: Props) => {
  const [format, setFormat] = React.useState("jpg");
  const [module, setModules] = React.useState({
    shape: "default",
    color: "#000000",
  });
  const [innereye, setInnerEye] = React.useState({
    shape: "default",
    color: "#000000",
  });
  const [outereye, setOuterEye] = React.useState({
    shape: "default",
    color: "#000000",
  });
  const [expand, setExpand] = React.useState({
    modules: true,
    innereye: false,
    outereye: false,
    logo: false,
  });

  useEffect(() => {
    setStyles({ module, innereye, outereye });
  }, [module, innereye, outereye]);

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
          handleItemClick={(shape, color) => setModules({ shape, color })}
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
          handleItemClick={(shape, color) => setInnerEye({ shape, color })}
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
          handleItemClick={(shape, color) => setOuterEye({ shape, color })}
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
        <div className={stl.radioInputs}>
          <label className={stl.radio} onClick={() => setFormat("jpg")}>
            <input
              type="radio"
              name="format"
              checked={format === "jpg"}
              onChange={(e) => console.log(e.target.value)}
            />
            <span className={stl.label}>JPG</span>
          </label>
          <label className={stl.radio} onClick={() => setFormat("png")}>
            <input
              type="radio"
              name="format"
              checked={format === "png"}
              onChange={(e) => console.log(e.target.value)}
            />
            <span className={stl.label}>PNG</span>
          </label>

          <label className={stl.radio} onClick={() => setFormat("svg")}>
            <input
              type="radio"
              name="format"
              checked={format === "svg"}
              onChange={(e) => console.log(e.target.value)}
            />
            <span className={stl.label}>SVG</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Customizer;
