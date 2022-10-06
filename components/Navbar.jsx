import Link from "next/link"
import styles from '../styles/Home.module.css';
import Head from "next/head";
import React, {useState} from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  {
      text: "Animes",
      href: "/animes"
  },{
      text: "Películas",
      href: "/peliculas"
  },{
      text: "Occidentales",
      href: "/occidentales"
  },
]

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">animation TV</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
