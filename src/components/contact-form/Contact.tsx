import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import moreContact from 'lib/contact'

import sendDiscordMessage from 'lib/discord'

import stl from './Contact.module.scss'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const inputInit = { y: 100, opacity: 0 }
  const inputAnimation = { y: 0, opacity: 1 }
  const inputTrans = { type: 'spring', stiffness: 40, duration: 0.1 }
  const btnInit = { y: -1000 }
  const btnAnimation = { y: 0 }
  const btnTrans = { type: 'spring', stiffness: 40 }

  const sendMessage = async () => {
    const response = await sendDiscordMessage(name, email, msg)
    if (response) {
      alert('Message sent!')
      setName('')
      setEmail('')
      setMsg('')
    } else alert('Message not sent!')
  }

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
            required
            className={stl.input}
            type="text"
            name="name"
            placeholder="What should we call you?"
            onChange={e => setName(e.target.value)}
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
            required
            type="email"
            name="email"
            placeholder="What's your email?"
            onChange={e => setEmail(e.target.value)}
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
            required
            className={stl.input}
            name="message"
            placeholder="Tell us how we can assist you."
            onChange={e => setMsg(e.target.value)}
          />
          <span className={stl.focusInput}></span>
        </motion.div>
        <div className={stl.btnContainer}>
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </motion.div>
      <div className={stl.contactMore}>
        {moreContact.map((item, i) => {
          const value = 0.6 + i * 0.3
          return (
            <motion.div
              title={item.name}
              initial={btnInit}
              animate={btnAnimation}
              transition={{
                ...btnTrans,
                delay: value,
              }}
              key={i}
              className={stl.item}
            >
              <Link
                className={clsx(stl.icon, stl[item.name])}
                href={item.url}
                target="_blank"
              >
                {item.icon}
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact
