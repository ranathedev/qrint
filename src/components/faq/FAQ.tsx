import React from 'react'
import clsx from 'clsx'

import ArrowIcon from 'assets/arrow-down.svg'

import stl from './FAQ.module.scss'

interface Props {
  customClass?: string
  title: string
  answer: string
  isExpanded: boolean
  setIsExpanded: (arg: string) => void
}

const FAQ = ({
  customClass,
  title,
  answer,
  isExpanded,
  setIsExpanded,
}: Props) => {
  return (
    <div className={clsx(stl.faq, isExpanded && stl.expand, customClass)}>
      <div
        className={clsx(stl.header, isExpanded && stl.headerExpand)}
        onClick={() => setIsExpanded(title)}
      >
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
