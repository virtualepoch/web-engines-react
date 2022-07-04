import React, { useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Header() {
  const mainNav = useRef(null);
  const navBtn = useRef(null);

  function openCloseMainNav() {
    mainNav.current.classList.toggle("open");
    navBtn.current.classList.toggle("open");
  }

  function closeMainNav() {
    if (mainNav.current.classList.contains("open")) {
      mainNav.current.classList.remove("open");
      navBtn.current.classList.remove("open");
    } else {
      return;
    }
  }

  return (
    <header className="header">
      <div className="top-header">
        <div className="left-side-header">
          <div className="main-logo"></div>
          <Link to="/">
            <h1 className="site-title">JavaScriptive</h1>
          </Link>
        </div>
        <div className="right-side-header">
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
          <div className="search-btn"></div>
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
