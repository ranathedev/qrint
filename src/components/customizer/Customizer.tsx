import React from "react";
import Image from "next/image";

import Button from "components/button";
import DownloadIcon from "assets/download.svg";
import Dropdown from "components/dropdown";

import stl from "./Customizer.module.scss";

const Customizer = () => {
  const [expand, setExpand] = React.useState({
    modules: true,
    innereye: false,
    outereye: false,
    logo: false,
  });

  return (
    <div className={stl.customizer}>
      <div className={stl.preview}>
        <Image
          src="/qr-code.png"
          width={200}
          height={250}
          alt="preview-image"
        />
      </div>
      <div className={stl.container}>
        <Dropdown
          title="Modules"
          expand={expand.modules}
          list={[
            { id: "arrow", src: "/modules/arrow.png" },
            { id: "circle", src: "/modules/circle.png" },
            { id: "classic", src: "/modules/classic.png" },
            { id: "default", src: "/modules/default.png" },
            { id: "heart", src: "/modules/heart.png" },
            { id: "heavyround", src: "/modules/heavyround.png" },
            { id: "horizontal_lines", src: "/modules/horizontal_lines.png" },
            { id: "lightround", src: "/modules/lightround.png" },
            { id: "sharp", src: "/modules/sharp.png" },
            { id: "sieve", src: "/modules/sieve.png" },
            { id: "vertical_lines", src: "/modules/vertical_lines.png" },
          ]}
          handleOnClick={() =>
            setExpand({
              modules: true,
              innereye: false,
              outereye: false,
              logo: false,
            })
          }
        />
        <Dropdown
          title="Inner Eye"
          expand={expand.innereye}
          list={[
            { id: "circle", src: "/inner-eye/circle.png" },
            { id: "cushion", src: "/inner-eye/cushion.png" },
            { id: "default", src: "/inner-eye/default.png" },
            { id: "diamond", src: "/inner-eye/diamond.png" },
            { id: "dots", src: "/inner-eye/dots.png" },
            { id: "heavyround", src: "/inner-eye/heavyround.png" },
            { id: "horizontal_lines", src: "/inner-eye/horizontal_lines.png" },
            { id: "leaf", src: "/inner-eye/leaf.png" },
            { id: "left_eye", src: "/inner-eye/left_eye.png" },
            { id: "lightround", src: "/inner-eye/lightround.png" },
            { id: "right_eye", src: "/inner-eye/right_eye.png" },
            { id: "shield", src: "/inner-eye/shield.png" },
            { id: "sieve", src: "/inner-eye/sieve.png" },
            { id: "star", src: "/inner-eye/star.png" },
            { id: "vertical_lines", src: "/inner-eye/vertical_lines.png" },
          ]}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: true,
              outereye: false,
              logo: false,
            })
          }
        />
        <Dropdown
          title="Outer Eye"
          expand={expand.outereye}
          list={[
            { id: "circle", src: "/outer-eye/circle.png" },
            { id: "cushion", src: "/outer-eye/cushion.png" },
            { id: "default", src: "/outer-eye/default.png" },
            { id: "diamond", src: "/outer-eye/diamond.png" },
            { id: "dots", src: "/outer-eye/dots.png" },
            { id: "heavyround", src: "/outer-eye/heavyround.png" },
            { id: "horizontal_lines", src: "/outer-eye/horizontal_lines.png" },
            { id: "leaf", src: "/outer-eye/leaf.png" },
            { id: "left_eye", src: "/outer-eye/left_eye.png" },
            { id: "lightround", src: "/outer-eye/lightround.png" },
            { id: "right_eye", src: "/outer-eye/right_eye.png" },
            { id: "shield", src: "/outer-eye/shield.png" },
            { id: "sieve", src: "/outer-eye/sieve.png" },
            { id: "star", src: "/outer-eye/star.png" },
            { id: "vertical_lines", src: "/outer-eye/vertical_lines.png" },
          ]}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: false,
              outereye: true,
              logo: false,
            })
          }
        />
        <Dropdown
          colorPicker={false}
          title="Logo"
          expand={expand.logo}
          list={[
            { id: "facebook", src: "/logos/Facebook-Logo.png" },
            { id: "github", src: "/logos/Github-Logo.png" },
            { id: "instagram", src: "/logos/Instagram-Logo.png" },
            { id: "linkedin", src: "/logos/LinkedIn-Logo.png" },
            { id: "phone", src: "/logos/Phone-Logo.png" },
            { id: "playstore", src: "/logos/Playstore-Logo.png" },
            { id: "tiktok", src: "/logos/TikTok-Logo.png" },
            { id: "twitter", src: "/logos/Twitter-Logo.png" },
            { id: "whatsapp", src: "/logos/Whatsapp-Logo.png" },
            { id: "youtube", src: "/logos/Youtube-Logo.png" },
            { id: "upload", src: "/logos/Upload-Logo.png" },
          ]}
          handleOnClick={() =>
            setExpand({
              modules: false,
              innereye: false,
              outereye: false,
              logo: true,
            })
          }
        />
      </div>
      <div className={stl.btnContainer}>
        <Button icon={<DownloadIcon />} width="120px" />
        <Button title="SVG/EPS" icon={<DownloadIcon />} />
      </div>
    </div>
  );
};

export default Customizer;
