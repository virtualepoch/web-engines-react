import React, { useRef } from "react";

export function AllCodeContainer() {
  const allCode = `<head>
  <style>

    body {
      margin: 0;
    }

    header {
      width: 100%;
      max-height: 70px;
      background: linear-gradient(45deg, skyblue, aqua);
      padding: 10px;
    }

    /* NAVIGATION MENU BUTTON */
    .nav-menu-btn {
      width: 50px;
      height: 50px;
      background: radial-gradient(white, lightgrey);
      border-radius: 5px;
      box-shadow: inset 1px 1px 5px 1px rgb(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .nav-menu-btn-bars,
    .nav-menu-btn-bars::before,
    .nav-menu-btn-bars::after {
      width: 29px;
      height: 2px;
      background: black;
      transition: all 500ms ease-in-out;
    }

    .nav-menu-btn-bars::before,
    .nav-menu-btn-bars::after {
      content: "";
      position: absolute;
    }

    .nav-menu-btn-bars::before {
      transform: translateY(-7px);
    }

    .nav-menu-btn-bars::after {
      transform: translateY(7px);
    }

    /* NAV MENU BUTTON CLICK ANIMATION  */
    .nav-menu-btn.open .nav-menu-btn-bars {
      transform: rotate(360deg);
      background: transparent;
      box-shadow: none;
      transition: all 1s ease-in-out;
    }

    .nav-menu-btn.open .nav-menu-btn-bars::before {
      transform: rotate(45deg);
    }

    .nav-menu-btn.open .nav-menu-btn-bars::after {
      transform: rotate(135deg);
    }

    /* MAIN NAV MENU */
    .main-nav-menu {
      background: linear-gradient(45deg, pink, turquoise);
      width: 100%;
      max-width: 300px;
      height: 100%;
      max-height: 500px;
      position: fixed;
      top: 70px;
      right: -300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: right 0.3s ease-in-out;
    }

    .main-nav-menu.open {
      right: 0;
      transition: right 0.3s ease-in-out;
    }

    .link {
      background: linear-gradient(45deg, skyblue, aqua);
      width: 90%;
      height: 50px;
      border: 1px solid;
      color: rgb(138, 35, 227);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
      
  </style>
</head>

<body>
  <header>
      <div class="nav-menu-btn" onclick="openCloseMainNav()">
          <div class="nav-menu-btn-bars"></div>
      </div>
      <div class="main-nav-menu">
          <p class="link">Page Link</p>
          <p class="link">Page Link</p>
          <p class="link">Page Link</p>
      </div>
  </header>

  <script>
      const navMenuBtn = document.querySelector(".nav-menu-btn");
      const mainNav = document.querySelector(".main-nav-menu");

      function openCloseMainNav() {
          navMenuBtn.classList.toggle("open");
          mainNav.classList.toggle("open");
      }
  </script>
</body>

`;

  const copyAllBtnRef = useRef(null);
  function copyAllCode() {
    const copyAllBtn = copyAllBtnRef.current;
    navigator.clipboard.writeText(allCode);
    copyAllBtn.classList.add("clicked");
  }

  return (
    <>
      <pre className="code-example">{allCode}</pre>
      <button className="copy-code-btn" ref={copyAllBtnRef} onClick={copyAllCode}></button>
    </>
  );
}
