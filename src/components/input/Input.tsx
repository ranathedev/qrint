import React from 'react'
import clsx from 'clsx'
import { Field } from 'formik'
import { motion } from 'framer-motion'

import stl from './Input.module.scss'

interface Props {
  placeholder: string
  label: string
  id: string
  type: string
  width: string
  message?: string
  setMessage: (arg: string) => void
  customClass?: string
}

const Input = ({
  placeholder,
  label,
  id,
  type,
  width,
  message,
  setMessage,
  customClass,
}: Props) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 50 }}
      style={{ width }}
      className={clsx(
        stl.input,
        type === 'checkbox' && stl.checkbox,
        customClass
      )}
    >
      <label>{label + ' '}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      ) : (
        <Field id={id} name={id} placeholder={placeholder} type={type} />
      )}
    </motion.div>
  )
}

Input.defaultProps = {
  placeholder: 'SSID',
  label: 'Network Name',
  id: 'ssid',
  width: '300px',
  type: 'text',
  setMessage: () => {},
}

export default Input
