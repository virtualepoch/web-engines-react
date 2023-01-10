import React, { useRef } from "react";
import { BtnBack } from "../../../../components/BtnBack";
import { AllCodeContainer } from "./AllCodeContainer";
import "./text-wave-effect-tut.css";

export function TextWaveEffectTut() {
  const codeEx1 = `<div class="text-wave-effect-container">
  <h1>text effects</h1>
</div>`;

  const codeEx2 = `.text-wave-effect-container {
  width: fit-content;
  height: fit-content;
  margin: 12px 4px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid rgb(0, 0, 255, 0.3);
  border-radius: 8px;
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  background: linear-gradient(45deg, purple, magenta);
}

.text-wave-effect-container h2 {
  position: relative;
  font: 3rem Poppins, sans-serif;
  color: blue;
}`;
  const codeEx3 = `.text-wave-effect-container h2::after {
  content: "text effects";
  position: absolute;
  left: 0;
  color: aqua;
  animation: wave-text-anim 3s ease-in-out infinite;
}`;
  const codeEx4 = `@keyframes wave-text-anim {
  0%,
  100% {
    clip-path: polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%,
    70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }

  50% {
    clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%,
    67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
  }
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

  return (
    <div className="tut-page-container">
      <BtnBack />
      <h1>Text Wave Effect</h1>
      <div className="text-wave-effect-container">
        <h2>text effects</h2>
      </div>
      <div className="article-info">
        <p className="info author">Written by — Craig Kaufman</p>
        <p className="info update">Updated — Dec. 17 2022</p>
        <p className="info">Read time — approx. 3 mins</p>
      </div>
      <p>
        In this tutorial we provide, and walk you through, all the code needed to create this cool text effect. This is done using a single CSS pseudo-classe. If you'd prefer to just copy all the code you can do that{" "}
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
          Step #1: This text effect is made up of only two elements. The first one is the container &lt;div&gt;. It's simply used here to give our text effect box a border and background. We will assign it a class name of 'text-wave-effect-container'. It contains the second element which will be an &lt;h1&gt;.<br></br>
          <br></br>The &lt;h1&gt; is the actual text of our text effect.
        </p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx1}</pre>
          <button className="copy-code-btn" ref={copyBtn1Ref} onClick={copyCodeEx1}></button>
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #2: Everything else is done with CSS. So, we'll start by styling the container and text.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx2}</pre>
          <button className="copy-code-btn" ref={copyBtn2Ref} onClick={copyCodeEx2}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
          <div className="text-wave-effect-container example-1">
            <h2>text effects</h2>
          </div>
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #3: Then we have to style the pseudo-class.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx3}</pre>
          <button className="copy-code-btn" ref={copyBtn3Ref} onClick={copyCodeEx3}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
          <div className="text-wave-effect-container example-2">
            <h2>text effects</h2>
          </div>
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #4: All that's left is to add the '@keyframes' animation.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx4}</pre>
          <button className="copy-code-btn" ref={copyBtn4Ref} onClick={copyCodeEx4}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
          <div className="text-wave-effect-container">
            <h2>text effects</h2>
          </div>
        </div>
      </div>
      <p>There you have it. Another example of what can be done with just a few lines of CSS.</p>
      <BtnBack />
    </div>
  );
}
