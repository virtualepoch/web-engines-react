import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BorderEffect from "../BorderEffect";
import "./border-effect-page.css";

export default function BorderEffectPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const textArea = useRef(null);

  //   function copyToClipboard() {
  //     const el = textArea.current;
  //     el.select();
  //     document.execCommand("copy");
  //   }
  // }, []);
  // ref={textArea} onClick={copyToClipboard()}
  
  return (
    <div className="border-effect-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &lt;BACK
      </button>
      <h1>CSS Border Effect</h1>
      <BorderEffect />
      <p>In this tutorial we provide, and walk you through, all the code needed to create this cool border effect. This is done using CSS pseudo-classes. If you'd prefer to just download the code you can do that here.</p>
      <p>
        This border effect box is made up of only two &lt;div&gt; elements. The first one is the wrapper &lt;div&gt;. It's used to outline everything and make the border effect stand out. We will assign it a class name of 'border-effect-wrapper'. It also contains the second &lt;div&gt;.<br></br>
        <br></br>The second &lt;div&gt; is for the inner box and we will assign it a class name of 'border-effect-box'.
      </p>
      <div className="html-example-container">
        <pre className="html-example">
          {`<div class="border-effect-wrapper">
    <div class="border-effect-box"</div>
</div>`}
        </pre>
        <button className="copy-code-btn" onClick={() => navigator.clipboard.writeText("Hello Universe")}>
          Copy
        </button>
      </div>
      <p>Everything else is done with CSS. So, we'll start by styling the wrapper and box.</p>
      <pre className="html-example">
        {`.border-effect-wrapper {
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
}`}
      </pre>
      <div className="border-ex-1">
        <p>Output:</p>
        <BorderEffect />
      </div>
      <p>Now the fun part —using CSS pseudo-classes. Just a reminder —a pseudo-class duplicates your element. This allows you to make changes to that duplicates' individual styling. It's very useful if you need to layer elements on your page.</p>
      <pre className="html-example">
        {`.border-effect-box::before {
    content: "";
    width: 200%;
    height: 400%;
    position: absolute;
    left: -50%;
    top: -150%;
    background: conic-gradient( blue, aqua);
    animation: rotate 4s infinite linear;       
}`}
      </pre>
      <p>The styling above is for the element that will be spinning behind everything. The element containing this spinning element, the 'border-effect-box', is given a style of 'overflow: hidden'. Therefore, we will only see the spinning element inside the borders of the 'border-effect-box'.</p>
      <div className="border-ex-2">
        <p>Output:</p>
        <BorderEffect />
      </div>
      <p>We then have a simple animation we add using the CSS at-rule statement '@keyframes'.</p>
      <pre className="html-example">
        {`@keyframes rotate {
    to {
      transform: rotate(360deg);
    }
}`}
      </pre>
      <div className="border-ex-3">
        <p>Output:</p>
        <BorderEffect />
      </div>
      <p>All that's left is to add the other pseudo-class for the box that will be on top of everything.</p>
      <pre className="html-example">
        {`.border-effect-box::after {
    content: "Learn how to add border effects";
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
}`}
      </pre>
      <div className="border-ex-complete">
        <p>Output:</p>
        <BorderEffect />
      </div>
      <p>There you have it. This is just one example of the many things you can accomplish with just a few lines of CSS.</p>
    </div>
  );
}
