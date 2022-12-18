import React, { useRef } from "react";

export function AllCodeContainer() {
  const allCode = `<head>
  <style>

    .border-effect-wrapper {
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
    }

    .border-effect-box::before {
      content: "";
      width: 200%;
      height: 400%;
      position: absolute;
      left: -50%;
      top: -150%;
      background-image: conic-gradient(blue, aqua);
      animation: rotate 4s infinite linear;
    }

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }

    .border-effect-box::after {
      content: "Learn to create border effects";
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
    }

  </style>  
</head> 
    
<body>
  <div class="border-effect-wrapper">
    <div class="border-effect-box"></div>
  </div>
</body>`;

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
