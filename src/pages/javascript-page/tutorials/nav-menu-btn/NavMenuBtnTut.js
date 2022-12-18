import React, { useRef } from "react";
import { BackBtn } from "../../../../components/BackBtn";
import { AllCodeContainer } from "./AllCodeContainer";
import { Footer } from "../../../../components/Footer";
import "../nav-menu-btn/nav-menu-btn-tut.css";

export function NavMenuBtnTut() {
  const codeEx1 = `<body>
  <header>

    <div class="nav-menu-btn" onclick="openCloseMainNav()">
      <div class="nav-menu-btn-bars"></div>
    </div>

    <div class="main-nav-menu">
      <a class="link" href="/">Page Link</a>
      <a class="link" href="/">Page Link</a>
      <a class="link" href="/">Page Link</a>
    </div> 

  </header>
</body>`;

  const codeEx2 = `header {
  width: 100%;
  max-height: 70px;
  background: linear-gradient(45deg, skyblue, aqua);
  padding: 10px;
}

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
}`;
  const codeEx3 = `.nav-menu-btn-bars,
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
}`;
  const codeEx4 = `.main-nav-menu {
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
}`;
  const codeEx5 = `...
  </header>

  <script>
    const navMenuBtn = document.querySelector(".nav-menu-btn");
    const mainNav = document.querySelector(".main-nav-menu");

    function openCloseMainNav() {
      navMenuBtn.classList.toggle("open");
      mainNav.classList.toggle("open");
    }
  </script>
</body>`;

  var allCodeContainerRef = useRef(null);
  function openCloseAllCode() {
    var allCodeContainer = allCodeContainerRef.current;
    allCodeContainer.classList.toggle("open");
  }

  const copyBtn1Ref = useRef(null);
  function copyCodeEx1() {
    const copyBtn1 = copyBtn1Ref.current;
    navigator.clipboard.writeText(codeEx1);
    copyBtn1.classList.add("clicked");
  }
  const copyBtn2Ref = useRef(null);
  function copyCodeEx2() {
    const copyBtn2 = copyBtn2Ref.current;
    navigator.clipboard.writeText(codeEx2);
    copyBtn2.classList.add("clicked");
  }
  const copyBtn3Ref = useRef(null);
  function copyCodeEx3() {
    const copyBtn3 = copyBtn3Ref.current;
    navigator.clipboard.writeText(codeEx3);
    copyBtn3.classList.add("clicked");
  }
  const copyBtn4Ref = useRef(null);
  function copyCodeEx4() {
    const copyBtn4 = copyBtn4Ref.current;
    navigator.clipboard.writeText(codeEx4);
    copyBtn4.classList.add("clicked");
  }
  const copyBtn5Ref = useRef(null);
  function copyCodeEx5() {
    const copyBtn5 = copyBtn5Ref.current;
    navigator.clipboard.writeText(codeEx5);
    copyBtn5.classList.add("clicked");
  }

  return (
    <div className="tut-page-container">
      <BackBtn />
      <h1>JavaScript Navigation Menu Button Tutorial</h1>
      <div className="tutorial-heading-image"></div>
      <p>
        In this tutorial we provide, and walk you through, all the code needed to create a button that will open a navigation menu. If you'd prefer to just copy all the code you can do that{" "}
        <div className="open-all-code" onClick={openCloseAllCode}>
          here
        </div>
        .
      </p>
      <div className="code-example-container all-code-container" ref={allCodeContainerRef}>
        <button className="close-all-code" onClick={openCloseAllCode}>
          X
        </button>
        <AllCodeContainer />
      </div>

      {/* TUTORIAL STEP #1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <p>
        We will be placing our navigation menu button inside a &lt;header&gt; element. We will actually be adding two &lt;div&gt; elements. One will be for the 'menu button' and the other will be for our 'navigation menu'. <br />
        <br />
        For our 'menu button' we will give it a class name of 'nav-menu-btn'. It will also contain another &lt;div&gt; for the 'button bars' which we will give a class name of 'nav-menu-btn-bars'. We want to give our 'menu button' a cool open/close animation to make it more interesting. <br />
        <br />
        For our 'navigation menu' we will give it a class name of 'main-nav-menu'. We will be giving it a 'fixed' position so that it is not visually contained inside the header. We will also add some link elements inside our 'navigation menu'.
      </p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx1}</pre>
        <button className="copy-code-btn" ref={copyBtn1Ref} onClick={copyCodeEx1}></button>
      </div>

      {/* TUTORIAL STEP #2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <p>The next thing to do is style our elements with CSS. </p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx2}</pre>
        <button className="copy-code-btn" ref={copyBtn2Ref} onClick={copyCodeEx2}></button>
      </div>
      <p>Output:</p>
      <div className="nav-menu-btn-tut-ex">
        <div className="nav-menu-btn"></div>
      </div>

      {/* TUTORIAL STEP #3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <p>Now we will style our button bars. The easiest way to do this is with CSS pseudo-classes</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx3}</pre>
        <button className="copy-code-btn" ref={copyBtn3Ref} onClick={copyCodeEx3}></button>
      </div>
      <p>Output:</p>
      <div className="nav-menu-btn-tut-ex">
        <div className="nav-menu-btn">
          <div className="nav-menu-btn-bars"></div>
        </div>
      </div>

      {/* TUTORIAL STEP #4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <p>Next style the main navigation menu.</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx4}</pre>
        <button className="copy-code-btn" ref={copyBtn4Ref} onClick={copyCodeEx4}></button>
      </div>
      <div className="border-ex-3">
        <p>Output:</p>
      </div>

      {/* TUTORIAL STEP #5 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <p>Last but definitely not least...? the JavaScript!!!</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx5}</pre>
        <button className="copy-code-btn" ref={copyBtn5Ref} onClick={copyCodeEx5}></button>
      </div>

      <p>Output:</p>
      <div className="tutorial-heading-image"></div>

      <p>There you have it. This is just one example of the many things you can accomplish with the power of JavaScript.</p>
      <BackBtn />
      <Footer />
    </div>
  );
}
