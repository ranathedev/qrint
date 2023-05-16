import Header from "components/header";
import Sidebar from "components/sidebar";

import InputContainer from "components/input-container";
import Customizer from "components/customizer";

import stl from "./index.module.scss";

const Homepage = () => {
  return (
    <div className={stl.homepage}>
      <Header />
      <div className={stl.home}>
        <Sidebar />
        <div className={stl.row}>
          <InputContainer title="Text" />
          <Customizer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
