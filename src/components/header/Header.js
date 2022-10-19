import React, { useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar";
import "./header.css";

export default function Header() {
  
  const navBtn = useRef(null);
  const mainNav = useRef(null);
  const closeNavBox = useRef(null);

  function openCloseMainNav() {
    navBtn.current.classList.toggle("open");
    mainNav.current.classList.toggle("open");
    closeNavBox.current.classList.toggle("open");
  }

  function closeMainNav() {
    if (mainNav.current.classList.contains("open")) {
      mainNav.current.classList.remove("open");
      navBtn.current.classList.remove("open");
      closeNavBox.current.classList.remove("open");
    } else {
      return;
    }
  }

  const titleEnding = "ive";

  return (
    <header className="header">
      <div className="top-header">
        <div className="left-side-header">
          <div className="main-logo"></div>
          <Link to={"/"}>
            <h1 className="site-title">JavaScript{titleEnding}</h1>
          </Link>
        </div>
        <div className="right-side-header">
          <div className="close-nav-box" ref={closeNavBox} onClick={closeMainNav}></div>
          <nav className="main-nav" ref={mainNav}>
            <ul>
              <CustomLink onClick={closeMainNav} to={"/"}>
                Home
              </CustomLink>
              <CustomLink onClick={closeMainNav} to={"/css"}>
                CSS
              </CustomLink>
              <CustomLink onClick={closeMainNav} to={"/javascript"}>
                JavaScript
              </CustomLink>
              <CustomLink onClick={closeMainNav} to={"/html-canvas"}>
                HTML-Canvas
              </CustomLink>
              <CustomLink onClick={closeMainNav} to={"/cgi"}>
                CGI
              </CustomLink>
            </ul>
          </nav>
          <SearchBar />
          <div className="nav-btn" ref={navBtn} onClick={openCloseMainNav}>
            <div className="nav-btn-bars close-anim"></div>
          </div>
        </div>
      </div>
    </header>
  );
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
