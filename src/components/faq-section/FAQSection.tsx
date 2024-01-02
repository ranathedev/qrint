import React from 'react'

import FAQs from 'lib/faqs.js'
import FAQ from 'components/faq/FAQ'

import stl from './FAQSection.module.scss'

const FAQSection = () => {
  return (
    <div className={stl.faqSection}>
      <h2>FAQs</h2>
      {FAQs.map(item => (
        <FAQ key={item.q} title={item.q} answer={item.ans} />
      ))}
      <div className={stl.divider} />
    </div>
  )
}

export default FAQSection
