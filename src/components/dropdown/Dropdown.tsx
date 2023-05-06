import React from "react";
import Image from "next/image";
import clsx from "clsx";

import DownIcon from "assets/arrow-down.svg";

import stl from "./Dropdown.module.scss";

interface Props {
  title: string;
  list: Array<string>;
  handleItemClick: (arg: string) => void;
  handleOnClick: any;
  expand: Boolean;
}

const Dropdown = ({
  title,
  list,
  handleOnClick,
  expand,
  handleItemClick,
}: Props) => {
  return (
    <div
      className={clsx(stl.dropDown, expand ? stl.expand : "")}
      onClick={handleOnClick}
    >
      <div className={stl.header}>
        {title} <DownIcon className={stl.icon} />
      </div>
      <div className={stl.container}>
        {list.map((src: string, i: number) => (
          <div
            className={stl.imgContainer}
            key={i}
            onClick={() => handleItemClick(src)}
          >
            <Image src={src} width={75} height={80} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  title: "Frame",
  list: [
    "/qr-code.png",
    "/qr-code.png",
    "/qr-code.png",
    "/qr-code.png",
    "/qr-code.png",
  ],
  handleItemClick: (src: string) => console.log(src),
  expand: false,
  handleOnClick: () => console.log("Clicked on Dropdown"),
};

export default Dropdown;
