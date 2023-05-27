import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import Button from "components/button";
import MenuIcon from "assets/menu.svg";

import stl from "./Header.module.scss";

interface Props {
  list: Array<any>;
}

const Header = ({ list }: Props) => {
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
        <Link href="/" className={stl.logo}>
          <Image
            src="/logo.png"
            width={85}
            height={32}
            alt="QRzar logo"
            className={stl.img}
          />
          <span className={stl.logoName}>QRzar</span>
        </Link>
        <div className={stl.right}>
          <Button title="Contact" />
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
                <Link
                  href={item.link}
                  className={clsx(
                    stl.link,
                    router.pathname === item.link ? stl.active : ""
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
