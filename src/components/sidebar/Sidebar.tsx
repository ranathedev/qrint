import React, { useEffect } from "react";
import clsx from "clsx";

import SidebarItem from "components/sidebar-item";
import CollapseIcon from "assets/collapse.svg";
import ExpandIcon from "assets/expand.svg";

import stl from "./Sidebar.module.scss";

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
    <div className={clsx(stl.sidebar, collapse ? stl.collapse : "")}>
      <div id="header" className={stl.header}>
        {collapse ? "" : <span className={stl.title}>Types</span>}
        <span className={stl.icon} onClick={() => setCollapse(!collapse)}>
          {collapse ? <ExpandIcon /> : <CollapseIcon />}
        </span>
      </div>
      <div className={stl.container}>
        <SidebarItem customClass={stl.item} />
        <SidebarItem customClass={stl.item} title="URL" />
        <SidebarItem customClass={stl.item} title="GeoLoc" />
        <SidebarItem customClass={stl.item} title="SMS" />
        <SidebarItem customClass={stl.item} title="WiFi" />
        <SidebarItem customClass={stl.item} title="VCARD" />
        <SidebarItem customClass={stl.item} title="Email" />
        <SidebarItem customClass={stl.item} title="Calendar" />
        <SidebarItem customClass={stl.item} title="Call" />
      </div>
    </div>
  );
};

export default Sidebar;
