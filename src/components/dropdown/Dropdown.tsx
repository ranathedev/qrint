import React, { useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

import DownIcon from "assets/arrow-down.svg";
import Tooltip from "components/tooltip";

import stl from "./Dropdown.module.scss";

interface Props {
  title: string;
  list: Array<Object>;
  handleItemClick: (arg1: string, arg2: string) => void;
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
  const [color, setColor] = React.useState("#000000");
  const [shape, setShape] = React.useState("default");

  // useEffect(() => {
  //   handleItemClick(shape, color);
  // }, [color, shape]);

  return (
    <div
      className={clsx(stl.dropDown, expand ? stl.expand : "")}
      onClick={handleOnClick}
    >
      <div className={stl.header}>
        {title}
        <span className={stl.colorPicker}>
          {colorPicker && (
            <input
              //@ts-ignore
              onMouseOver={() => setShowTooltip(expand)}
              onMouseOut={() => setShowTooltip(false)}
              className={stl.input}
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          )}
          <Tooltip
            isVisible={showTooltip}
            arrowPos="bottom"
            text="Change Color"
            top="-180%"
            left="-25%"
            customClass={stl.tooltip}
          />
          <DownIcon className={stl.icon} />
        </span>
      </div>
      <div className={stl.container}>
        {list.map((item: any, i: number) => (
          <div
            style={{ color }}
            id={`${i}`}
            className={stl.imgContainer}
            key={i}
            onClick={() => setShape(item.name)}
          >
            {(item.icon && item.icon) || (
              <Image
                src={item.src}
                width={60}
                height={60}
                alt={item.name + "-image"}
              />
            )}
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
  handleItemClick: (name: string, color: string) =>
    console.log({ name, color }),
  expand: false,
  handleOnClick: () => console.log("Clicked on Dropdown"),
  colorPicker: true,
};

export default Dropdown;
