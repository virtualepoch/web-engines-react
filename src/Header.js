import React, { useRef } from "react";
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
            <a href="/">
              <h1 className="site-title">JavaScriptive</h1>
            </a>
          </div>
          <div className="right-side-header">
            <div className="search-btn"></div>
            <div className="nav-btn" ref={navBtn} onClick={openMainNav}>
              <div className="nav-btn-bars close-anim"></div>
            </div>
          </div>
        </div>
      </header>
      <nav className="main-nav" ref={mainNav}>
        <ul>
          <li>
            <a href="/home" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="/tutorials" className="link">
              Tutorials
            </a>
          </li>
          <li>
            <a href="/cgi" className="link">
              CGI
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
