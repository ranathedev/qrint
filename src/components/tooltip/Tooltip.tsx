import React from "react";
import clsx from "clsx";

import stl from "./Tooltip.module.scss";

interface Props {
  arrowPos: "left" | "right" | "top" | "bottom";
  top: string;
  right: string;
  bottom: string;
  left: string;
  isVisible: Boolean;
  text: string;
}

const Tooltip = ({
  arrowPos,
  top,
  right,
  bottom,
  left,
  isVisible,
  text,
}: Props) => {
  return (
    <span
      style={{ top, right, bottom, left }}
      className={clsx(
        stl.tooltip,
        (arrowPos === "right" && stl.right) ||
          (arrowPos === "top" && stl.top) ||
          (arrowPos === "bottom" && stl.bottom),
        isVisible ? stl.visible : ""
      )}
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
  arrowPos: "left",
};

export default Tooltip;
