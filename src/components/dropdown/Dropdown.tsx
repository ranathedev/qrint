import React from "react";
import Image from "next/image";
import clsx from "clsx";

import DownIcon from "assets/arrow-down.svg";
import Tooltip from "components/tooltip";

import stl from "./Dropdown.module.scss";

interface Props {
  title: string;
  list: Array<Object>;
  handleItemClick: (arg: string) => void;
  handleOnClick: any;
  expand: Boolean;
  colorPicker: Boolean;
}

const Dropdown = ({
  title,
  list,
  handleOnClick,
  expand,
  handleItemClick,
  colorPicker,
}: Props) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div
      className={clsx(stl.dropDown, expand ? stl.expand : "")}
      onClick={handleOnClick}
    >
      <div className={stl.header}>
        {title}
        <span
          //@ts-ignore
          onMouseOver={() => setShowTooltip(expand)}
          onMouseOut={() => setShowTooltip(false)}
          className={stl.colorPicker}
        >
          {colorPicker && (
            <>
              <input className={stl.input} type="color" />
              <Tooltip
                isVisible={showTooltip}
                arrowPos="bottom"
                text="Change Color"
                top="-180%"
                left="-46%"
                customClass={stl.tooltip}
              />
            </>
          )}
          <DownIcon className={stl.icon} />
        </span>
      </div>
      <div className={stl.container}>
        {list.map((item: any, i: number) => (
          <div
            id={`${i}`}
            className={stl.imgContainer}
            key={i}
            onClick={() => handleItemClick(item.id)}
          >
            <Image src={item.src} width={75} height={80} alt={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  title: "Frame",
  list: [
    { id: "sample-image", src: "/qr-code.png" },
    { id: "sample-image", src: "/qr-code.png" },
    { id: "sample-image", src: "/qr-code.png" },
    { id: "sample-image", src: "/qr-code.png" },
    { id: "sample-image", src: "/qr-code.png" },
    { id: "sample-image", src: "/qr-code.png" },
  ],
  handleItemClick: (src: string) => console.log(src),
  expand: false,
  handleOnClick: () => console.log("Clicked on Dropdown"),
  colorPicker: true,
};

export default Dropdown;
