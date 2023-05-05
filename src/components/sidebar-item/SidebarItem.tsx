import React, { ReactNode } from "react";
import clsx from "clsx";

import TextIcon from "assets/text.svg";

import stl from "./SidebarItem.module.scss";

interface Props {
  icon: ReactNode;
  title: string;
  handleOnClick: (arg: string) => void;
  customClass?: string;
}

const SidebarItem = ({ icon, title, handleOnClick, customClass }: Props) => {
  return (
    <div
      className={clsx(stl.sidebarItem, customClass)}
      onClick={() => handleOnClick(title)}
    >
      <span className={stl.icon}>{icon}</span>
      <span className={stl.text}>{title}</span>
    </div>
  );
};

SidebarItem.defaultProps = {
  icon: <TextIcon />,
  title: "Text message",
  handleOnClick: (title: string) => console.log(title),
};

export default SidebarItem;
