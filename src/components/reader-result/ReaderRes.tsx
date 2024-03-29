import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Tooltip from 'components/tooltip'
import UrlPreview from 'components/url-preview'

import Icon from 'assets/goto-link.svg'
import BackIcon from 'assets/arrow-left.svg'

import stl from './ReaderRes.module.scss'

interface Props {
  data: string
  handleBackBtn?: () => void
}

const ReaderRes = ({ data, handleBackBtn }: Props) => {
  const [showURL, setShowURL] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [showBtnTooltip, setShowBtnTooltip] = useState(false)

  const isURL = (str: string) => {
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i
    return urlPattern.test(str)
  }

  const modifiedString = data?.replace(/:(?!\s)/g, ': ')

  useEffect(() => {
    if (isURL(data)) {
      window.open(data, '_blank')
      setShowURL(true)
    } else setShowURL(false)
  }, [data])

  return (
    <div className={stl.result}>
      <button
        onMouseOver={() => setShowBtnTooltip(true)}
        onMouseOut={() => setShowBtnTooltip(false)}
        className={stl.backBtn}
        onClick={handleBackBtn}
      >
        <BackIcon />
        <Tooltip
          isVisible={showBtnTooltip}
          text="Scan Another"
          top="5%"
          left="120%"
          customClass={stl.tooltip}
        />
      </button>
      <h2>Result</h2>
      <div className={stl.data}>
        {showURL ? (
          <Link
            href={data}
            className={stl.link}
            target="_blank"
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
          >
            <span className={stl.text}>
              {data}
              {<Icon />}
            </span>
            {/* <UrlPreview url={data} /> */}
            <Tooltip
              isVisible={showTooltip}
              text="Open Link"
              left="27%"
              top="-160%"
              arrowPos="bottom"
            />
          </Link>
        ) : (
          modifiedString
        )}
      </div>
    </div>
  )
}

ReaderRes.defaultProps = {
  data: 'Ut reprehenderit deserunt laboris qui. Aute consequat est irure ipsum duis nisi. Nulla dolore deserunt ipsum pariatur consequat quis ut.',
}

export default ReaderRes
