import React, { useRef } from "react";
import { BtnBack } from "../../../../components/BtnBack";
import { SpinningTop } from "../../components/SpinningTop";
import { AllCodeContainer } from "./AllCodeContainer";
import "./top-spin-tut.css";

export function TopSpinTut() {
  const codeEx1 = `<div class="spinning-top-container">
  <div class="spinning-top">
    <div class="side front"></div>
    <div class="side back"></div>
    <div class="side left"></div>
    <div class="side right"></div>
    <div class="side top"></div>
  </div>
  <div class="shadow"></div>
</div>`;
  const codeEx2 = `.spinning-top-container {
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
  perspective-origin: 50% 10%;
  overflow: hidden;
  background: linear-gradient(white, skyblue 30% 40%,
  pink 40%, rgb(255, 95, 255) 54%, white);
}`;
  const codeEx3 = `.spinning-top {
  width: 50px;
  height: 100px;
  border: solid;
  position: relative;
  top: 50px;
  transform-style: preserve-3d;
  animation: spinning-top-rotateY 2s linear infinite;
}`;
  const codeEx4 = `.spinning-top .side {
  height: 100%;
  width: 100%;
  position: absolute;
  transform-origin: 50% 100%;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
}

.spinning-top .back {
  background: yellow;
  transform: rotateX(7deg);
}

.spinning-top .left {
  background: red;
  transform: rotateY(90deg) rotateX(7deg);
}

.spinning-top .right {
  background: blue;
  transform: rotateY(90deg) rotateX(-7deg);
}`;
  const codeEx5 = `.spinning-top .front,
.spinning-top .back {
  background: rgb(255, 0, 255, 0.6);
}

.spinning-top .front {
  transform: rotateX(-7deg);
}

.spinning-top .top {
  width: 60px;
  height: 60px;
  clip-path: none;
  border-radius: 50%;
  top: -30px;
  right: -5px;
  transform-origin: initial;
  transform: rotateX(90deg) rotateZ(180deg);
  background: url(../link to your logo) 50% / 70% no-repeat,
  rgb(255, 0, 255, 0.5);
}

.spinning-top-container .shadow {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 10px;
  transform: rotateX(90deg);
  border-radius: 50%;
  background: radial-gradient(rgb(0, 0, 0, 0.1),
  rgb(0, 0, 0, 0.05));
}

@keyframes spinning-top-rotateY {
  to {
    transform: rotateY(-360deg);
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
    <div className="page tut-page">
      <BtnBack />
      <h1>
        How to Style a Rotating 3D Top<br></br>with CSS in 5 Steps
      </h1>
      <SpinningTop />
      <div className="article-info">
        <p className="info author">Written by — Craig Kaufman</p>
        <p className="info update">Updated — Dec. 17 2022</p>
        <p className="info read-time">Read time — approx. 10 mins</p>
      </div>
      <p className="tut-intro">
        In this tutorial we provide, and walk you through, all the code needed to create this spinning top. The 'clip-path' CSS style property will turn the sides of our spinning top into triangles. The 'transform-style: preserve-3d' CSS style property will give it depth. The 'transform-origin' CSS style property will allow all sides to be rotated from the same point. We will use an '@keyframes' animation to make the top spin. If you wish to copy all the code for this project, you can do that{" "}
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
        <p>Step #1: We will add all the HTML elements we need and give them each individual class names. We will also give the children of the 'spinning-top' a universal class name of 'side'.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx1}</pre>
          <button className="copy-code-btn" ref={copyBtn1Ref} onClick={copyCodeEx1}></button>
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #2: Everything else is done with CSS. So, we'll start by styling the 'spinning-top-container'. Notice we have the 'perspective' and 'perspective-origin' style properties. These are used to adjust the perspective depth and viewing position of the 3d effect.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx2}</pre>
          <button className="copy-code-btn" ref={copyBtn2Ref} onClick={copyCodeEx2}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
          <div className="cube-container"></div>
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #3: Next, we have to style the 'spinning-top'. Here is where the most important style is, the 'transform-style: preserve-3d'. This will give depth to the sides of our top. We'll add the 'animation' reference but will not create the animation itself until the end. We'll also add a border so we can see the element.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx3}</pre>
          <button className="copy-code-btn" ref={copyBtn3Ref} onClick={copyCodeEx3}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
          <div className="cube-container">
            <div className="spinning-top-example-1"></div>
          </div>
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #4: Now that we have the parent element styled we will start styling the children, or 'sides'. We won't style the front yet so that we can see what's going on with the other sides. We'll also rotate the 'spinning-top' 50 degrees and scale it up to get a better view of what's going on.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx4}</pre>
          <button className="copy-code-btn" ref={copyBtn4Ref} onClick={copyCodeEx4}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
          <div className="spinning-top-container">
            <div className="spinning-top spinning-top-example-2">
              <div className="side left top-left-example"></div>
              <div className="side right top-right-example"></div>
              <div className="side back top-back-example"></div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #5: Finally, all we have to do is add the front side, shadow, top, and animation. Don't forget to also remove the border. We'll also change the background colors to look better (we threw our logo in there too).</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx5}</pre>
          <button className="copy-code-btn" ref={copyBtn5} onClick={copyCodeEx5}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
          <SpinningTop />
        </div>
      </div>
      <p className="tut-outro">There you have it. Another example of what can be done with the power of CSS.</p>
      <BtnBack />
    </div>
  );
}
