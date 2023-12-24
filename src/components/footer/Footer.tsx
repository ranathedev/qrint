import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import { socials, links } from 'lib/footer'

import stl from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={stl.footer}>
      <div className={stl.waves}>
        <div className={clsx(stl.wave, stl.wave1)} id="wave1"></div>
        <div className={clsx(stl.wave, stl.wave2)} id="wave2"></div>
        <div className={clsx(stl.wave, stl.wave3)} id="wave3"></div>
        <div className={clsx(stl.wave, stl.wave4)} id="wave4"></div>
      </div>
      <ul className={stl.socialIcon}>
        {socials.map(item => (
          <li key={item.link} className={stl.item}>
            <Link
              href={item.link}
              target="_blank"
              className={clsx(stl.socialButton, stl[item.name])}
              aria-label="Facebook"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={stl.menu}>
        {links.map(item => (
          <li key={item.path} className={stl.menuItem}>
            <Link className={stl.menuLink} href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>&copy;2022 QRint | All Rights Reserved</p>
    </footer>
  )
}

export default Footer
