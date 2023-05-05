import React, { useEffect } from "react";
import clsx from "clsx";

import CollapseIcon from "assets/collapse.svg";
import ExpandIcon from "assets/expand.svg";

import stl from "./Sidebar.module.scss";
import SidebarItem from "components/sidebar-item";

const Sidebar = () => {
  const [collapse, setCollapse] = React.useState(false);

  useEffect(() => {
    const ele = document.getElementById("header");
    if (collapse) {
      setTimeout(() => ele?.classList.add(stl.isCollapsed), 200);
    } else {
      ele?.classList.remove(stl.isCollapsed);
    }
  }, [collapse]);

  return (
    <div className={clsx(stl.sidebar, collapse ? stl.collapse : undefined)}>
      <div id="header" className={stl.header}>
        <span className={stl.icon} onClick={() => setCollapse(!collapse)}>
          {collapse ? <ExpandIcon /> : <CollapseIcon />}
        </span>
      </div>
      <div className={stl.container}>
        <SidebarItem customClass={stl.item} />
        <SidebarItem customClass={stl.item} />
        <SidebarItem customClass={stl.item} />
        <SidebarItem customClass={stl.item} />
        <SidebarItem customClass={stl.item} />
        <SidebarItem customClass={stl.item} />
      </div>
    </div>
  );
};

export default Sidebar;
