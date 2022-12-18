import React, { useRef } from "react";
import { BackBtn } from "../../../../components/BackBtn";
import { BorderEffect } from "../../components/BorderEffect";
import { AllCodeContainer } from "./AllCodeContainer";
import { Footer } from "../../../../components/Footer";
import "../tuts-common.css";
import "./border-effect-tut.css";

export function BorderEffectTut() {
  const codeEx1 = `<div class="border-effect-wrapper">
  <div class="border-effect-box"></div>
</div>`;
  const codeEx2 = `.border-effect-wrapper {
  width: fit-content;
  border: 1px solid;
  border-radius: 6px;
}

.border-effect-box {
  width: 212px;
  height: 88px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 2px 3px 3px rgba(0, 0, 0, 0.4);
}`;
  const codeEx3 = `.border-effect-box::before {
  content: "";
  width: 200%;
  height: 400%;
  position: absolute;
  left: -50%;
  top: -150%;
  background: conic-gradient( blue, aqua);
  animation: rotate 4s infinite linear;       
}`;
  const codeEx4 = `@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}`;
  const codeEx5 = `.border-effect-box::after {
  content: "Learn to Style Border Effects";
  width: 208px;
  height: 84px;
  position: relative;
  top: 2px;
  left: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font: 20px sans-serif;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  background: radial-gradient(blue, black);       
}`;

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
      <h1>CSS Border Effect</h1>
      <BorderEffect />
      <div className="article-info">
        <p className="info author">Written by — Craig Kaufman</p>
        <p className="info update">Updated — Dec. 17 2022</p>
        <p className="info">Read time — approx. 5 mins</p>
      </div>
      <p>
        In this tutorial we provide, and walk you through, all the code needed to create this cool border effect. This is done using CSS pseudo-classes. If you'd prefer to just copy all the code you can do that{" "}
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
      <div className="tutorial-step-container">
        <p>
          Step #1: This border effect box is made up of only two &lt;div&gt; elements. The first one is the wrapper &lt;div&gt;. It's used to outline everything and make the border effect stand out. We will assign it a class name of 'border-effect-wrapper'. It also contains the second &lt;div&gt;.<br></br>
          <br></br>The second &lt;div&gt; is for the inner box and we will assign it a class name of 'border-effect-box'.
        </p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx1}</pre>
          <button className="copy-code-btn" ref={copyBtn1Ref} onClick={copyCodeEx1}></button>
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #2: Everything else is done with CSS. So, we'll start by styling the wrapper and box.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx2}</pre>
          <button className="copy-code-btn" ref={copyBtn2Ref} onClick={copyCodeEx2}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
          <BorderEffect />
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #3: Now the fun part —using CSS pseudo-classes. Just a reminder —a pseudo-class duplicates your element. This allows you to make changes to that duplicates' individual styling. It's very useful if you need to layer elements on your page.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx3}</pre>
          <button className="copy-code-btn" ref={copyBtn3Ref} onClick={copyCodeEx3}></button>
        </div>
        <p>The styling above is for the element that will be spinning behind everything. The element containing this spinning element, the 'border-effect-box', is given a style of 'overflow: hidden'. Therefore, we will only see the spinning element inside the borders of the 'border-effect-box'.</p>
        <div className="border-ex-2">
          <p>Output:</p>
          <BorderEffect />
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #4: We then have a simple animation we add using the CSS at-rule statement '@keyframes'.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx4}</pre>
          <button className="copy-code-btn" ref={copyBtn4Ref} onClick={copyCodeEx4}></button>
        </div>
        <div className="border-ex-3">
          <p>Output:</p>
          <BorderEffect />
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #5: All that's left is to add the other pseudo-class for the box that will be on top of everything.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx5}</pre>
          <button className="copy-code-btn" ref={copyBtn5Ref} onClick={copyCodeEx5}></button>
        </div>
        <div className="border-ex-complete">
          <p>Output:</p>
          <BorderEffect />
        </div>
      </div>
      <p>There you have it. This is just one example of the many things you can accomplish with just a few lines of CSS.</p>
      <BackBtn />
      <Footer />
    </div>
  );
}
