import React from "react";
import clsx from "clsx";

import getIcons from "lib/getIcons";

import stl from "./SidebarItem.module.scss";

interface Props {
  title: string;
  handleOnClick: (arg: string) => void;
  customClass?: string;
}

const SidebarItem = ({ title, handleOnClick, customClass }: Props) => {
  return (
    <div
      className={clsx(stl.sidebarItem, customClass)}
      onClick={() => handleOnClick(title)}
    >
      <span className={stl.icon}>{getIcons(title)}</span>
      <span className={stl.text}>{title}</span>
    </div>
  );
};

SidebarItem.defaultProps = {
  title: "Text message",
  handleOnClick: (title: string) => console.log(title),
};

export default SidebarItem;
