import React from "react";

import FAQs from "lib/faqs.js";
import FAQ from "components/faq/FAQ";

import stl from "./FAQSection.module.scss";

const FAQSection = () => {
  const [isExpanded, setIsExpanded] = React.useState("");

  return (
    <div className={stl.faqSection}>
      <h2>FAQ&apos;s</h2>
      {FAQs.map((item, i) => (
        <FAQ
          title={item.q}
          answer={item.ans}
          isExpanded={item.q === isExpanded}
          setIsExpanded={setIsExpanded}
          key={i}
          customClass={i + 1 === FAQs.length ? stl.faq : ""}
        />
      ))}
    </div>
  );
};

export default FAQSection;