import React, { useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { SearchBar } from "../search-bar/SearchBar";
import "./header.css";

export function Header() {
  const style = {
    header: {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "88888",
      background: "var(--color-2)",
      boxShadow: "0 2px 5px 1px rgb(100, 100, 100, 0.3)",
    },

    topHeader: {
      maxWidth: "1200px",
      height: "fit-content",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },

    headerSide: {
      display: "flex",
      alignItems: "center",
    },

    siteTitle: {
      padding: "0 3px",
      font: "400 clamp(2rem, 5vw, 3rem) sans-serif",
      color: "white",
      filter: "drop-shadow(0 0 4px aqua)",
    },

    enginesText: {
      fontFamily: "RelicIsland1OTF",
      letterSpacing: "1px",
    },
  };

  const canvasText = "<canvas>";

  // OPEN/CLOSE NAVIGATION MENU FUNCTIONS /////////////////////////////
  const navMenu = useRef(null);
  const buttonNavMenu = useRef(null);
  const closeNavOverlay = useRef(null);

  function openCloseNavMenu() {
    navMenu.current.classList.toggle("open");
    buttonNavMenu.current.classList.toggle("open");
    closeNavOverlay.current.classList.toggle("open");
  }

  function closeNavMenu() {
    if (navMenu.current.classList.contains("open")) {
      navMenu.current.classList.remove("open");
      buttonNavMenu.current.classList.remove("open");
      closeNavOverlay.current.classList.remove("open");
    } else {
      return;
    }
  }

  // SWIPE TO CLOSE NAVIGATION MENU FUNCTION //
  window.addEventListener(
    "load",
    function () {
      var touchSurface = navMenu.current,
        startX,
        startY,
        dist,
        threshold = 50, //required min distance traveled to be considered swipe
        allowedTime = 250, // maximum time allowed to travel that distance
        elapsedTime,
        startTime;

      function handleSwipe(isRightSwipe) {
        if (isRightSwipe) {
          touchSurface.classList.remove("open");
          buttonNavMenu.current.classList.remove("open");
          closeNavOverlay.current.classList.remove("open");
        }
      }

      touchSurface.addEventListener(
        "touchstart",
        function (e) {
          var touchObject = e.changedTouches[0];
          dist = 0;
          startX = touchObject.pageX;
          startY = touchObject.pageY;
          startTime = new Date().getTime(); // record time when finger first makes contact with surface
          // e.preventDefault();
        },
        false
      );

      // touchSurface.addEventListener(
      //   "touchmove",
      //   function (e) {
      //     // prevent scrolling when inside DIV
      //     // e.preventDefault();
      //   },
      //   false
      // );

      touchSurface.addEventListener(
        "touchend",
        function (e) {
          var touchObject = e.changedTouches[0];
          dist = touchObject.pageX - startX; // get total dist traveled by finger while in contact with surface
          elapsedTime = new Date().getTime() - startTime; // get time elapsed
          // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
          var swipeRightBol = elapsedTime <= allowedTime && dist >= threshold && Math.abs(startY - touchObject.pageY) <= 50 && Math.abs(touchObject.pageY - startY) <= 50;
          handleSwipe(swipeRightBol);
          // e.preventDefault();
        },
        false
      );
    },
    false
  ); // end window.onload

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <Link to={to} {...props} className={isActive ? "active link" : "link"}>
        {children}
      </Link>
    );
  }

  return (
    <header style={style.header}>
      <div style={style.topHeader}>
        <div style={style.headerSide}>
          <Logo />
          <Link to={"/"} onClick={closeNavMenu}>
            <h1 style={style.siteTitle}>
              Web
              <span style={style.enginesText}>Engines</span>
            </h1>
          </Link>
        </div>
        <div style={style.headerSide} className="header-right-side">
          <SearchBar />
          <button type="button" className="button-nav-menu" ref={buttonNavMenu} onClick={openCloseNavMenu}>
            <div className="open-close-bars"></div>
          </button>
          <div className="close-nav-overlay" ref={closeNavOverlay} onClick={closeNavMenu}></div>
          <nav className="nav-menu" ref={navMenu}>
            <CustomLink onClick={closeNavMenu} to={"/"}>
              <p className="link-text">
                Home
                <div className="link-underline"></div>
              </p>
            </CustomLink>

            <CustomLink onClick={closeNavMenu} to={"/css"}>
              <p className="link-text">
                CSS
                <div className="link-underline"></div>
              </p>
            </CustomLink>

            <CustomLink onClick={closeNavMenu} to={"/javascript"}>
              <p className="link-text">
                JavaScript
                <div className="link-underline"></div>
              </p>
            </CustomLink>

            <CustomLink onClick={closeNavMenu} to={"/html-canvas"}>
              <p className="link-text">
                {canvasText}
                <div className="link-underline"></div>
              </p>
            </CustomLink>

            {/* <CustomLink onClick={closeNavMenu} to={"/cgi"}>
                CGI
              </CustomLink> */}
            {/* <CustomLink onClick={closeNavMenu} to={"/testing"}>
                T
              </CustomLink> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
