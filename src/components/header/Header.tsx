import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

import Button from 'components/button'

import MenuIcon from 'assets/menu.svg'

import stl from './Header.module.scss'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [width, setWidth] = useState(1000)
  const [showNav, setShowNav] = useState(true)

  const router = useRouter()

  let lastScrollPos = window.scrollY

  useEffect(() => {
    function measureWidth() {
      setWidth(document.body.clientWidth)
    }

    function handleScroll() {
      const currentScrollPos = window.scrollY

      if (currentScrollPos > lastScrollPos) setShowNav(false)
      else if (currentScrollPos < lastScrollPos) setShowNav(true)

      lastScrollPos = currentScrollPos
    }

    measureWidth()

    window.addEventListener('resize', measureWidth)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', measureWidth)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    width >= 640 && setIsVisible(false)
  }, [width])

  const list = [
    { title: 'Home', link: '/' },
    { title: 'Scanner', link: '/scanner' },
    { title: 'Generator', link: '/generator' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
  ]

  return (
    <nav
      className={clsx(
        stl.nav,
        isVisible && stl.expandNav,
        showNav ? stl.showNav : stl.hideNav
      )}
      aria-hidden={!showNav}
    >
      <div className={stl.container}>
        <Link href="/" className={stl.logo}>
          <span className={stl.logoName}>QRint</span>
        </Link>
        <div className={stl.right}>
          {/* <Button
            title="Sign Up"
            handleOnClick={() => (location.href = '/auth')}
          /> */}
          <button
            className={stl.expandBtn}
            onClick={() => setIsVisible(!isVisible)}
          >
            <span className={stl.srOnly}>Open main menu</span>
            <MenuIcon className={stl.icon} />
          </button>
        </div>
        <div className={stl.navList}>
          <ul>
            {list.map(item => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className={clsx(
                    stl.link,
                    router.pathname === item.link && stl.active
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
