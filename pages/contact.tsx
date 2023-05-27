import React from "react";

import Contact from "components/contact-form";
import Footer from "components/footer";
import Header from "components/header";

import stl from "./index.module.scss";

const ContactPage = () => {
  return (
    <div className={stl.contactPage}>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
