import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import moreContact from "lib/contact";

import stl from "./Contact.module.scss";

const Contact = () => {
  const inputInit = { y: 100, opacity: 0 };
  const inputAnimation = { y: 0, opacity: 1 };
  const inputTrans = { type: "spring", stiffness: 40, duration: 0.1 };
  const btnInit = { y: -1000 };
  const btnAnimation = { y: 0 };
  const btnTrans = { type: "spring", stiffness: 40 };

  return (
    <div className={stl.contact}>
      <motion.div className={stl.form}>
        <span className={stl.title}>Get in Touch</span>
        <motion.div
          initial={inputInit}
          animate={inputAnimation}
          transition={inputTrans}
          className={stl.inputContainer}
        >
          <input
            className={stl.input}
            type="text"
            name="name"
            placeholder="What should we call you?"
          />
          <span className={stl.focusInput}></span>
        </motion.div>
        <motion.div
          initial={inputInit}
          animate={inputAnimation}
          transition={{
            ...inputTrans,
            delay: 0.15,
          }}
          className={stl.inputContainer}
        >
          <input
            className={stl.input}
            type="text"
            name="email"
            placeholder="What's your email?"
          />
          <span className={stl.focusInput}></span>
        </motion.div>
        <motion.div
          initial={inputInit}
          animate={inputAnimation}
          transition={{ ...inputTrans, delay: 0.3 }}
          className={stl.inputContainer}
        >
          <textarea
            className={stl.input}
            name="message"
            placeholder="Tell us how we can assist you."
          />
          <span className={stl.focusInput}></span>
        </motion.div>
        <div className={stl.btnContainer}>
          <button onClick={() => console.log("Message sent!")}>
            Send Message
          </button>
        </div>
      </motion.div>
      <div className={stl.contactMore}>
        {moreContact.map((item, i) => {
          const value = 0.6 + i * 0.3;
          return (
            <motion.div
              initial={btnInit}
              animate={btnAnimation}
              transition={{
                ...btnTrans,
                delay: value,
              }}
              key={i}
              className={stl.item}
            >
              <span
                className={clsx(stl.icon, stl[item.name])}
                onClick={() => window.open(item.url, "_blank")}
              >
                {item.icon}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
