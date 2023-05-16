import React, { useEffect } from "react";
import clsx from "clsx";

import SidebarItem from "components/sidebar-item";
import CollapseIcon from "assets/collapse.svg";
import ExpandIcon from "assets/expand.svg";

import stl from "./Sidebar.module.scss";

interface Props {
  setTitle: (arg: any) => void;
}

const Sidebar = ({ setTitle }: Props) => {
  const [collapse, setCollapse] = React.useState(false);

  useEffect(() => {
    const ele = document.getElementById("header");
    if (collapse) {
      setTimeout(() => ele?.classList.add(stl.isCollapsed), 200);
    } else {
      ele?.classList.remove(stl.isCollapsed);
    }
  }, [collapse]);

  const types = [
    "Text",
    "URL",
    "GeoLoc",
    "SMS",
    "WiFi",
    "VCARD",
    "Email",
    "Calendar",
    "Call",
  ];

  return (
    <div className={clsx(stl.sidebar, collapse ? stl.collapse : "")}>
      <div id="header" className={stl.header}>
        {collapse ? "" : <span className={stl.title}>Types</span>}
        <span className={stl.icon} onClick={() => setCollapse(!collapse)}>
          {collapse ? <ExpandIcon /> : <CollapseIcon />}
        </span>
      </div>
      <div className={stl.container}>
        {types.map((type: string, i: number) => (
          <SidebarItem
            key={i}
            customClass={stl.item}
            title={type}
            handleOnClick={(item) => setTitle(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
