import React, { useRef } from "react";

export default function AllCodeContainer() {
  const allCode = `<head>
<style>
.cube-container {
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
  background: linear-gradient(white, skyblue 30% 40%, pink 40%, rgb(255, 95, 255) 54%, white);
}
/* COLOR CUBE //////////////// */
.color-cube {
  height: 100px;
  width: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: color-cube-rotateY 12s linear infinite;
}
@keyframes color-cube-rotateY {
  to {
    transform: rotateY(360deg);
  }
}
.color-cube.anim {
  animation: color-cube-anim-2 13s ease-in-out infinite;
}
.color-cube.anim .color-cube-shadow {
  display: none;
}
@keyframes color-cube-anim-2 {
  50% {
    transform: rotateX(18000deg) rotateY(180deg);
  }
}
.color-cube .side {
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgb(0, 0, 255, 0.5);
  box-shadow: 0 0 10px 5px rgba(0, 100, 255, 0.7) inset;
}
.color-cube .left {
  transform: rotateY(270deg) translateX(-50px);
  transform-origin: 0 50%;
}
.color-cube .right {
  transform: rotateY(-270deg) translateX(50px);
  transform-origin: 100% 0;
}
.color-cube .back {
  transform: translateZ(-50px) rotateY(180deg);
}
.color-cube .top {
  background-color: rgb(255, 0, 255, 0.5);
  transform: rotateX(90deg) translateZ(47px);
}
.color-cube .bottom {
  background-color: rgb(255, 0, 255, 0.5);
  transform: rotateX(90deg) translateZ(-47px);
}
.color-cube .front {
  transform: translateZ(50px);
}
.color-cube-shadow {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 130px;
  box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.05);
  background: radial-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.05));
  transform: rotateX(90deg);
}
</style>
</head>
<div class="cube-container">
  <div class="color-cube">
    <div class="side front"></div>
    <div class="side right"></div>
    <div class="side back"></div>
    <div class="side left"></div>
    <div class="side top"></div>
    <div class="side bottom"></div>
    <div class="color-cube-shadow"></div>
  </div>
</div>
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
