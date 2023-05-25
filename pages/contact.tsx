import React from "react";

import Contact from "components/contact-form";
import Header from "components/header";

import stl from "./index.module.scss";

const ContactPage = () => {
  return (
    <div className={stl.contactPage}>
      <Header />
      <Contact />
    </div>
  );
};

export default ContactPage;
