import React, { useRef } from "react";

export default function AllCodeContainer() {
  const allCode = `<head>
<style>
.spinning-top-container {
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
}
.spinning-top {
  height: 100px;
  width: 50px;
  position: relative;
  top: 50px;
  transform-style: preserve-3d;
  animation: spinning-top-rotateY 2s linear infinite;
}
@keyframes spinning-top-rotateY {
  to {
    transform: rotateY(-360deg);
  }
}
.spinning-top .side {
  height: 100%;
  width: 100%;
  position: absolute;
  transform-origin: 50% 100%;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
}
.spinning-top .front,
.spinning-top .back {
  background: rgb(255, 0, 255, 0.6);
}
.spinning-top .front {
  transform: rotateX(-7deg);
}
.spinning-top .back {
  transform: rotateX(7deg);
}
.spinning-top .left,
.spinning-top .right {
  background: rgb(0, 155, 255, 0.5);
}
.spinning-top .left {
  transform: rotateY(90deg) rotateX(7deg);
}
.spinning-top .right {
  transform: rotateY(90deg) rotateX(-7deg);
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
</style>
</head>

<body>
<div class="spinning-top-container">
  <div class="spinning-top">
    <div class="side front"></div>
    <div class="side back"></div>
    <div class="side left"></div>
    <div class="side right"></div>
    <div class="side top"></div>
  </div>
  <div class="shadow"></div>
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
