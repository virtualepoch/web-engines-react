import React, { useRef } from "react";
import { TutLayout } from "../../components/TutLayout";
import "./mix-blend-mode-tut.css";

export function MixBlendModeTut() {
  const codeEx1 = `<div class="wavy-text-effect-container">
  <h1>text effects</h1>
</div>`;

  const codeEx2 = `.wavy-text-effect-container {
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

.wavy-text-effect-container h2 {
  position: relative;
  font: 3rem Poppins, sans-serif;
  color: blue;
}`;
  const codeEx3 = `.wavy-text-effect-container h2::after {
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

  const tutInfo = [
    {
      title: "mix blend mode tut",
      dateUpdated: "5/5/2023",
    },
  ];

  return (
    <>
      (
      {tutInfo.map((index, item) => (
        <TutLayout key={index} info={item} />
      ))}
      )
    </>
  );
}
