import React, { useRef } from "react";
import "../components/border-effect.css";

export function BorderEffect() {
  const animatedBorder = useRef(null);

  if (window.innerWidth < 700) {
    window.addEventListener("scroll", function () {
      animatedBorder.current.style.animation = "none";
      setTimeout(function () {
        animatedBorder.current.style.animation = "rotate 4s infinite linear";
      }, 300);
    });
  }

  return (
    <div className="border-effect-wrapper">
      <div className="border-effect-box">
        <div className="animated-border" ref={animatedBorder}></div>
      </div>
    </div>
  );
}
