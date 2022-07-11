import React, { useRef } from "react";
import "./cube-top.css";

export default function SpinningTop() {
  const spinningTopRef = useRef(null);
  function startAnim() {
    const spinningTop = spinningTopRef.current;
    spinningTop.classList.toggle("anim");
  }
  return (
    <div className="spinning-top-container">
      <div className="spinning-top-wrapper">
        <div className="spinning-top" ref={spinningTopRef} onClick={startAnim}>
          <div className="front side"></div>
          <div className="right side"></div>
          <div className="back side"></div>
          <div className="left side"></div>
          <div className="top side"></div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
}
