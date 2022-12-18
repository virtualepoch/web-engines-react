import React, { useRef } from "react";
import { BackBtn } from "../../../../components/BackBtn";
import { ColorCube } from "../../components/ColorCube";
import { AllCodeContainer } from "./AllCodeContainer";
import { Footer } from "../../../../components/Footer";
import "./cube-tut.css";

export function CubeTut() {
  const codeEx1 = `<div class="cube-container">
  <div class="color-cube">
    <div class="side front"></div>
    <div class="side back"></div>
    <div class="side left"></div>
    <div class="side right"></div>
    <div class="side top"></div>
    <div class="side bottom"></div>
    <div class="side shadow"></div>
  </div>
</div>`;

  const codeEx2 = `.cube-container {
  width: 300px;
  height: 300px;
  border-top: 4px solid gray;
  border-left: 4px solid rgb(192, 192, 192);
  border-bottom: 4px solid rgb(222, 222, 222);
  border-right: 4px solid rgb(154, 154, 154);
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 600px;
  perspective-origin: 50%;
  overflow: hidden;
  background: linear-gradient(white, skyblue 30% 40%, pink 40%,
  rgb(255, 95, 255) 54%, white);
}`;
  const codeEx3 = `.color-cube {
  height: 100px;
  width: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: color-cube-rotateY 12s linear infinite;
  border: solid black;
}`;
  const codeEx4 = `.color-cube .side {
  height: 100%;
  width: 100%;
  position: absolute;
  border: 2px solid rgba(255, 0, 255, 0.5);
  background: rgb(0, 0, 255, 0.5);
}

.color-cube .back {
  transform: translateZ(-50px) rotateY(180deg);
  background: limegreen;
}

.color-cube .left {
  transform: translateX(-50px) rotateY(90deg);
  background: red;
}

.color-cube .right {
  transform: translateX(50px) rotateY(90deg);
  background: blue;
}

.color-cube .top {
  transform: translateY(-50px) rotateX(90deg) ;
  background: yellow;
}

.color-cube .bottom {
  transform: translateY(50px) rotateX(90deg);
  background: aqua;
}`;
  const codeEx5 = `.color-cube .front {
  transform: translateZ(50px);
}
.color-cube .shadow {
  border: none;
  border-radius: 5px;
  background: radial-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.05));
  transform: translateY(120px) rotateX(90deg);
}

@keyframes color-cube-rotateY {
  to {
    transform: rotateY(360deg);
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
  const copyBtn5 = useRef(null);
  function copyCodeEx5() {
    navigator.clipboard.writeText(codeEx5);
    copyBtn5.current.classList.add("clicked");
  }

  return (
    <div className="tut-page-container">
      <BackBtn />
      <h1>How to Style a Rotating 3-D Cube with CSS</h1>
      <ColorCube />
      <p>
        In this tutorial we provide, and walk you through, all the code needed to create this rotating cube. To give the cube depth we use the 'transform-style: preserve-3d' CSS style property. It gives perspective to any child elements that have been rotated along the X, Y, or Z axes. We then use an '@keyframes' animation to make the cube rotate. If you wish to copy all the code for this project, you can do that{" "}
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
      <p>First, we will add all the HTML elements we need and give them each individual class names.</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx1}</pre>
        <button className="copy-code-btn" ref={copyBtn1Ref} onClick={copyCodeEx1}></button>
      </div>
      <p>Everything else is done with CSS. So, we'll start by styling the 'cube-container'. Notice we have the 'perspective' and 'perspective-origin' style properties. These are used to change the perspective depth and viewing position of the 3d effect.</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx2}</pre>
        <button className="copy-code-btn" ref={copyBtn2Ref} onClick={copyCodeEx2}></button>
      </div>
      <div className="border-ex-1">
        <p>Output:</p>
        <div className="cube-container"></div>
      </div>
      <p>Next, we have to style the 'color-cube'. Here is where the most important style is, the 'transform-style: preserve-3d'. This will give depth to the sides of our cube. We'll also add the 'animation' reference but will not create the animation itself until the end. Lastly, we'll add a border so we can see the element.</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx3}</pre>
        <button className="copy-code-btn" ref={copyBtn3Ref} onClick={copyCodeEx3}></button>
      </div>
      <div className="border-ex-1">
        <p>Output:</p>
        <div className="cube-container">
          <div className="color-cube-ex border"></div>
        </div>
      </div>
      <p>Now that we have the parent element styled we will start styling the children, or 'sides'. We can give all sides a universal styling using the class name 'side'. Here we will also style the back, left, right, top, and bottom sides —each with a different color. We won't style the front yet so that we can see what's going on with the other sides. We'll also remove the border of our 'color-cube'.</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx4}</pre>
        <button className="copy-code-btn" ref={copyBtn4Ref} onClick={copyCodeEx4}></button>
      </div>
      <div className="border-ex-1">
        <p>Output:</p>
        <div className="cube-container">
          <div className="color-cube-ex">
            <div className="side back"></div>
            <div className="side left"></div>
            <div className="side right"></div>
            <div className="side top"></div>
            <div className="side bottom"></div>
          </div>
        </div>
      </div>
      <p>Finally, all we have to do is add the front side, shadow, and the animation. We'll also remove the individual side background colors so they revert back to the transparent color we applied at the beginning (we threw our logo in there too).</p>
      <div className="code-example-container">
        <pre className="code-example">{codeEx5}</pre>
        <button className="copy-code-btn" ref={copyBtn5} onClick={copyCodeEx5}></button>
      </div>
      <div className="border-ex-1">
        <p>Output:</p>
        <ColorCube />
      </div>
      <p>There you have it. Another example of what can be done with the power of CSS.</p>
      <BackBtn />
      <Footer />
    </div>
  );
}
