import React, { useRef } from "react";

export function AllCodeContainer() {
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
.color-cube .side {
  height: 100%;
  width: 100%;
  position: absolute;
  border: 2px solid rgba(255, 0, 255, 0.5);
  background: rgb(0, 0, 255, 0.5);
}
.color-cube .front,
.color-cube .back {
  background: url('link to your logo') 50%/80% no-repeat, rgb(0, 0, 255, 0.5);
}
.color-cube .front {
  transform: translateZ(50px);
}
.color-cube .back {
  transform: translateZ(-50px) rotateY(180deg);
}
.color-cube .left {
  transform: translateX(-50px) rotateY(90deg);
}
.color-cube .right {
  transform: translateX(50px) rotateY(90deg);
}
.color-cube .top,
.color-cube .bottom {
  background: rgb(255, 0, 255, 0.5);
}
.color-cube .top {
  transform: translateY(-50px) rotateX(90deg);
}
.color-cube .bottom {
  transform: translateY(50px) rotateX(90deg);
}
.color-cube .shadow {
  border: none;
  border-radius: 5px;
  background: radial-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.05));
  transform: translateY(120px) rotateX(90deg);
}
</style>
</head>

<body>
<div class="cube-container">
  <div class="color-cube">
    <div class="side front"></div>
    <div class="side back"></div>
    <div class="side left"></div>
    <div class="side right"></div>
    <div class="side top"></div>
    <div class="side bottom"></div>
    <div class="side shadow"></div>
  </div>
</div>
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
