import React from "react";
import axios from "axios";

import Customizer from "components/customizer";
import Header from "components/header";
import InputContainer from "components/input-container";
import Sidebar from "components/sidebar";

import stl from "./index.module.scss";

const Homepage = () => {
  const [title, setTitle] = React.useState("Text");
  const [value, setValue] = React.useState("");
  const [styles, setStyles] = React.useState({
    module: { color: "black", shape: "default" },
    inner_eye: { color: "", shape: "default" },
    outer_eye: { color: "", shape: "default" },
  });

  const options = {
    method: "POST",
    url: "https://qrcode3.p.rapidapi.com/qrcode/text",
    headers: {
      Accept: "image/svg+xml",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
    },
    data: {
      data: value,
      image: {
        uri: "icon://appstore",
        modules: true,
      },
      style: styles,
      size: { width: 200, quiet_zone: 4, error_correction: "M" },
      output: { filename: "qrcode", format: "svg" },
    },
  };

  const generateCode = () => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={stl.homepage}>
      <Header />
      <div className={stl.home}>
        <Sidebar title={title} setTitle={setTitle} />
        <div className={stl.row}>
          <InputContainer title={title} setValue={setValue} />
          <Customizer setStyles={setStyles} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
