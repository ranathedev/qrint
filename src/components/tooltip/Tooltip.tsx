import React from "react";
import clsx from "clsx";

import stl from "./Tooltip.module.scss";

const Tooltip = ({ top, right, bottom, left, isVisible, text }: any) => {
  return (
    <span
      style={{ top, right, bottom, left }}
      className={clsx(stl.tooltip, isVisible ? stl.visible : "")}
    >
      {text}
    </span>
  );
};

Tooltip.defaultProps = {
  top: "15%",
  right: "",
  bottom: "",
  left: "130%",
  text: "Tooltip text",
};

export default Tooltip;
