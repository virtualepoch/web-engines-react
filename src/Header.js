import React, { useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Header() {
  const mainNav = useRef(null);
  const navBtn = useRef(null);

  function openMainNav() {
    mainNav.current.classList.toggle("open");
    navBtn.current.classList.toggle("open");
  }

  return (
    <>
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
                <CustomLink to={"/"}>Home</CustomLink>
                <CustomLink to={"/css"}>CSS</CustomLink>
                <CustomLink to={"/javascript"}>JavaScript</CustomLink>
                <CustomLink to={"/html-canvas"}>HTML-Canvas</CustomLink>
                <CustomLink to={"/cgi"}>CGI</CustomLink>
              </ul>
            </nav>
            <div className="search-btn"></div>
            <div className="nav-btn" ref={navBtn} onClick={openMainNav}>
              <div className="nav-btn-bars close-anim"></div>
            </div>
          </div>
        </div>
      </header>
    </>
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
