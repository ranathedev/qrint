import React, { useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import MenuIcon from "assets/menu.svg";

import stl from "./Header.module.scss";

const Header = ({ list }: any) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [width, setWidth] = React.useState(1000);

  const router = useRouter();

  useEffect(() => {
    function measureWidth() {
      setWidth(document.body.clientWidth);
    }
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  useEffect(() => {
    width >= 640 && setIsVisible(false);
  }, [width]);

  return (
    <nav className={clsx(stl.nav, isVisible ? stl.expandNav : "")}>
      <div className={stl.container}>
        <a href="/" className={stl.logo}>
          <img src="/logo.png" className={stl.img} alt="QRzar Logo" />
          <span className={stl.logoName}>QRzar</span>
        </a>
        <div className={stl.right}>
          <button
            className={stl.contactBtn}
            onClick={() => router.push("/contact")}
          >
            Contact
          </button>
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
            {list.map((item: any, i: number) => (
              <li key={i}>
                <a
                  href={item.link}
                  className={clsx(
                    stl.link,
                    router.pathname === item.link ? stl.active : ""
                  )}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  list: [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Blog", link: "/blog" },
  ],
};

export default Header;
