import React, { useState } from 'react'

import FAQs from 'lib/faqs.js'
import FAQ from 'components/faq/FAQ'

import stl from './FAQSection.module.scss'

const FAQSection = () => {
  const [isExpanded, setIsExpanded] = useState('')

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
        />
      ))}
      <div className={stl.divider} />
    </div>
  )
}

export default FAQSection
