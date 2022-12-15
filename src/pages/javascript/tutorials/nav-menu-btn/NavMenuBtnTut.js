import React, { useRef } from "react";
import { BackBtn } from "../../../../components/BackBtn";
import { AllCodeContainer } from "./AllCodeContainer";
import { Footer } from "../../../../components/Footer";

export function NavMenuBtnTut() {
  const codeEx1 = `<body>
  <header>

    <div class="nav-menu-btn" onclick="openCloseMainNav()">
      <div class="nav-menu-btn-bars"></div>
    </div>

    <div class="main-nav-menu">
      <a class="link">Page Link</a>
      <a class="link">Page Link</a>
      <a class="link">Page Link</a>
    </div> 

  </header>
</body>`;

  const codeEx2 = `code example 2`;
  const codeEx3 = `code example 3`;
  const codeEx4 = `code example 4`;
  const codeEx5 = `code example 5`;

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
      <p>STEP 1</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx2}</pre>
        <button className="copy-code-btn" ref={copyBtn2Ref} onClick={copyCodeEx2}></button>
      </div>
      <div className="border-ex-1">
        <p>Output:</p>
      </div>
      <p>STEP 2</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx3}</pre>
        <button className="copy-code-btn" ref={copyBtn3Ref} onClick={copyCodeEx3}></button>
      </div>
      <p>STEP 3</p>
      <div className="border-ex-2">
        <p>Output:</p>
      </div>
      <p>STEP 4</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx4}</pre>
        <button className="copy-code-btn" ref={copyBtn4Ref} onClick={copyCodeEx4}></button>
      </div>
      <div className="border-ex-3">
        <p>Output:</p>
      </div>
      <p>STEP 5</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx5}</pre>
        <button className="copy-code-btn" ref={copyBtn5Ref} onClick={copyCodeEx5}></button>
      </div>
      <div className="border-ex-complete">
        <p>Output:</p>
      </div>
      <p>There you have it. This is just one example of the many things you can accomplish with the power of JavaScript.</p>
      <BackBtn />
      <Footer />
    </div>
  );
}
