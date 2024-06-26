import React from 'react'

import Button from 'components/button'

import stl from './Intro.module.scss'

const Intro = () => {
  return (
    <div
      className={stl.intro}
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className={stl.overlay}></div>
      <div className={stl.content}>
        <h1>Scan QR Codes with Ease</h1>
        <p>
          Scan QR codes effortlessly and unlock a world of information and
          experiences. Explore hidden content, access exclusive offers, and
          discover endless possibilities with a simple scan.
        </p>
        {/* <Button
          title="Sign Up"
          handleOnClick={() => (location.href = "/auth")}
        /> */}
      </div>
    </div>
  )
}

export default Intro
