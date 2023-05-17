import React, { useEffect } from "react";
import clsx from "clsx";

import SidebarItem from "components/sidebar-item";
import CollapseIcon from "assets/collapse.svg";
import ExpandIcon from "assets/expand.svg";
import Tooltip from "components/tooltip";

import stl from "./Sidebar.module.scss";

interface Props {
  setTitle: (arg: any) => void;
}

const Sidebar = ({ setTitle }: Props) => {
  const [collapse, setCollapse] = React.useState(true);
  const [showTooltip, setShowTooltip] = React.useState(false);

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
        <span
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
          className={stl.icon}
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? <ExpandIcon /> : <CollapseIcon />}
        </span>
        <Tooltip
          isVisible={showTooltip}
          text={collapse ? "Expand" : "Collapse"}
          top="5%"
          left={collapse ? "110%" : "103%"}
        />
      </div>
      <div className={stl.container}>
        {types.map((type: string, i: number) => (
          <SidebarItem
            key={i}
            customClass={stl.item}
            title={type}
            handleOnClick={(item) => setTitle(item)}
            isCollapsed={collapse}
          />
        ))}
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  setTitle: (item: string) => console.log(item),
};

export default Sidebar;
