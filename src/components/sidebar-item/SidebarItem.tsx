import React, { ReactNode } from "react";

import TextIcon from "assets/text.svg";

import stl from "./SidebarItem.module.scss";

interface Props {
  icon: ReactNode;
  title: string;
  handleOnClick: (arg: string) => void;
}

const SidebarItem = ({ icon, title, handleOnClick }: Props) => {
  return (
    <div className={stl.sidebarItem} onClick={() => handleOnClick(title)}>
      {icon}
      {title}
    </div>
  );
};

SidebarItem.defaultProps = {
  icon: <TextIcon />,
  title: "Text message",
  handleOnClick: (title: string) => console.log(title),
};

export default SidebarItem;
