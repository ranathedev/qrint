import React, { useState } from 'react'
import clsx from 'clsx'

import ArrowIcon from 'assets/arrow-down.svg'

import stl from './FAQ.module.scss'

interface Props {
  customClass?: string
  title: string
  answer: string
}

const FAQ = ({ customClass, title, answer }: Props) => {
  const [expand, setExpand] = useState(false)

  return (
    <div className={clsx(stl.faq, expand && stl.expand, customClass)}>
      <div className={stl.header} onClick={() => setExpand(!expand)}>
        <h3>{title}</h3>
        <span>
          <ArrowIcon />
        </span>
      </div>
      <div className={stl.body}>
        <p>{answer}</p>
      </div>
    </div>
  )
}
FAQ.defaultProps = {
  title: 'Question 1',
  answer: 'This is the answer to Question 1...',
}

export default FAQ
