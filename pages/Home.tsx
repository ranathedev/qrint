import React from "react";

import Header from "components/header";
import Sidebar from "components/sidebar";

import InputContainer from "components/input-container";
import Customizer from "components/customizer";

import stl from "./index.module.scss";

const Homepage = () => {
  const [title, setTitle] = React.useState("Text");

  return (
    <div className={stl.homepage}>
      <Header />
      <div className={stl.home}>
        <Sidebar setTitle={setTitle} />
        <div className={stl.row}>
          <InputContainer title={title} />
          <Customizer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
