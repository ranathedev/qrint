import React from "react";
import Image from "next/image";

import { sections, techs } from "lib/about";
import Footer from "components/footer";
import Header from "components/header";
import HeroSection from "components/hero-section";

import stl from "./index.module.scss";

const About = () => {
  return (
    <div className={stl.aboutPage}>
      <Header />
      <div className={stl.aboutContainer}>
        {sections.map((item, i) => (
          <HeroSection
            key={i}
            heading={item.heading}
            desc={item.desc}
            imgSrc={item.src}
            imgAlt={item.alt}
            imgPosition={item.position}
          />
        ))}
        <div className={stl.techContainer}>
          <div className={stl.para}>
            <h2>Modern Technologies Powering the Website</h2>
            <span className={stl.body}>
              The website is built using a powerful stack of modern
              technologies. Next.js, a popular React framework, is utilized for
              its performance and scalability. Framer Motion library enables
              smooth animations and transitions. Typescript ensures type safety
              and enhances code reliability. Formik is employed for efficient
              form handling. The QR code scanning feature is made possible with
              react-webcam. External APIs from RapidApi are integrated to
              enhance functionality and access external data. Finally, the
              website is supported by the reliable and secure infrastructure of
              Firebase. This technology stack delivers a seamless and
              user-friendly experience for visitors.
            </span>
          </div>
          <div className={stl.techList}>
            {techs.map((item, i) => (
              <div
                key={i}
                className={stl.techItem}
                onClick={() => window.open(item.url, "_blank")}
              >
                <div className={stl.imgContainer}>
                  <Image
                    src={item.src}
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                </div>
                <span className={stl.techTitle}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
