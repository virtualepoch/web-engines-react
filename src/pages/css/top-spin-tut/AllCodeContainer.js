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
  background: linear-gradient(white, skyblue 30% 40%, pink 40%,
  rgb(255, 95, 255) 54%, white);
}
.spinning-top {
  height: 100px;
  width: 50px;
  border: solid;
  position: relative;
  top: 50px;
  transform-style: preserve-3d;
  animation: spinning-top-rotateY 2s linear infinite;
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
