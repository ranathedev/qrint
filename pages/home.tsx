import React from "react";

import FAQSection from "components/faq-section";
import Footer from "components/footer";
import Header from "components/header";
import HeroSection from "components/hero-section";
import Intro from "components/intro";

import stl from "./index.module.scss";

const Homepage = () => {
  return (
    <div className={stl.home}>
      <Header />
      <Intro />
      <HeroSection imgPosition="right" />
      <HeroSection
        heading="Generate Your Own Codes"
        desc="Create personalized QR codes to share information and engage your audience. Generate codes for websites, text, contact information, and more. Tailor the content and design of your codes to suit your needs. Empower yourself to effortlessly generate codes and enhance communication."
        imgSrc="/generate.png"
      />
      <HeroSection
        imgPosition="right"
        heading="Customize Code Styles"
        desc="Make your QR codes stand out and reflect your unique style. Customize the appearance of your codes with various styles, colors, and patterns. Add logos, brand colors, and custom designs to make your codes visually appealing and aligned with your brand identity. Create eye-catching codes that leave a lasting impression."
        imgSrc="/styles.png"
      />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Homepage;
