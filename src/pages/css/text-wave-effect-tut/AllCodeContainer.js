import React, { useRef } from "react";

export default function AllCodeContainer() {
  const allCode = `<head>
<style>
  .text-wave-effect-container {
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
  }
  .text-wave-effect-container h2::after {
    content: "text effects";
    position: absolute;
    left: 0;
    color: aqua;
    animation: wave-text-anim 3s ease-in-out infinite;
  }
  @keyframes wave-text-anim {
    0%,
    100% {
      clip-path: polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%,
      70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }

    50% {
      clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%,
      67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
  }
</style>
</head>
<div class="text-wave-effect-container">
  <h1>text effects</h1>
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
