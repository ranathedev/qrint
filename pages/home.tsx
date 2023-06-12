import React from "react";

import Header from "components/header";
import Intro from "components/intro";

import stl from "./index.module.scss";

const Homepage = () => {
  return (
    <div className={stl.wrapper}>
      <Header />
      <Intro />
    </div>
  );
};

export default Homepage;
