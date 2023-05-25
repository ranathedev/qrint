import React from "react";
import Image from "next/image";

import stl from "./HeroSection.module.scss";

interface Props {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  desc: string;
  imgPosition: string;
}

const UpperSection = ({
  imgSrc,
  imgAlt,
  heading,
  desc,
  imgPosition,
}: Props) => {
  const Content = () => (
    <div className={stl.text}>
      <h1 className={stl.heading}>{heading}</h1>
      <p className={stl.desc}>{desc}</p>
    </div>
  );

  const ImageContainer = () => (
    <div className={stl.imgContainer}>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt={imgAlt}
        className={stl.img}
      />
    </div>
  );

  return (
    <div className={stl.section}>
      {imgPosition === "left" ? (
        <>
          <ImageContainer />
          <Content />
        </>
      ) : (
        <>
          <Content />
          <ImageContainer />
        </>
      )}
    </div>
  );
};

UpperSection.defaultProps = {
  imgSrc: "/scan.png",
  imgAlt: "img",
  imgPosition: "left",
  heading: "Effortless Scanning",
  desc: "Scan QR codes effortlessly and unlock a world of information and experiences. Explore websites, videos, product details, event invitations, and more by simply pointing your camera at the code. Discover the convenience and speed of scanning and access a wealth of content with ease.",
};

export default UpperSection;
