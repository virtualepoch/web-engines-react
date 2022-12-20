import React, { useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar";
import "./header.css";

export function Header() {
  const style = {
    header: {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "88888",
    },
    topHeader: {
      maxWidth: "1200px",
      height: "fit-content",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      boxShadow: "0 2px 3px 1px rgb(0, 0, 0, 0.2)",
      background: "linear-gradient(blue, rgb(255, 255, 255, 0.3))",
    },
    headerSide: {
      display: "flex",
      alignItems: "center",
    },
    mainLogo: {
      width: "50px",
      height: "50px",
      margin: "0 7px",
      // TODO = FIX IMAGE IMPORT BELOW FOR SITE LOGO CURRENTLY IMPORTED WITH THE STYLESHEET
      // backgroundImage: "url(/src/logos/jsive-logo-at-100.png)",
    },
    siteTitle: {
      padding: "0 3px",
      backgroundImage: "linear-gradient(115deg, rgb(140, 255, 251) 0% 76%, magenta 79% 100%)",
      // #38a8f3
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      font: "400 clamp(1.65rem, 5vw, 2rem) Lorea",
      color: "#38a8f3",
      letterSpacing: "1px",
    },
  };

  const navMenuBtn = useRef(null);
  const navMenu = useRef(null);
  const closeNavBox = useRef(null);
  const titleEnding = "ive";

  function openCloseNavMenu() {
    navMenuBtn.current.classList.toggle("open");
    navMenu.current.classList.toggle("open");
    closeNavBox.current.classList.toggle("open");
  }

  function closeNavMenu() {
    if (navMenu.current.classList.contains("open")) {
      navMenuBtn.current.classList.remove("open");
      navMenu.current.classList.remove("open");
      closeNavBox.current.classList.remove("open");
    } else {
      return;
    }
  }

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props} className="link">
          {children}
        </Link>
      </li>
    );
  }

  return (
    <header style={style.header}>
      <div style={style.topHeader}>
        <div style={style.headerSide}>
          <div style={style.mainLogo} className="main-logo"></div>
          <Link to={"/"}>
            <h1 style={style.siteTitle} className="site-title">
              JavaScript{titleEnding}
            </h1>
          </Link>
        </div>
        <div style={style.headerSide}>
          <div className="close-nav-box" ref={closeNavBox} onClick={closeNavMenu}></div>
          <nav className="nav-menu" ref={navMenu}>
            <ul>
              <CustomLink onClick={closeNavMenu} to={"/"}>
                Home
              </CustomLink>
              <CustomLink onClick={closeNavMenu} to={"/css"}>
                CSS
              </CustomLink>
              <CustomLink onClick={closeNavMenu} to={"/javascript"}>
                JavaScript
              </CustomLink>
              <CustomLink onClick={closeNavMenu} to={"/html-canvas"}>
                HTML-Canvas
              </CustomLink>
              <CustomLink onClick={closeNavMenu} to={"/cgi"}>
                CGI
              </CustomLink>
              {/* <CustomLink onClick={closeNavMenu} to={"/testing"}>
                T
              </CustomLink> */}
            </ul>
          </nav>
          <SearchBar />
          <div className="nav-menu-btn" ref={navMenuBtn} onClick={openCloseNavMenu}>
            <div className="nav-menu-btn-bars"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
