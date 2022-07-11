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
          <div className="side front"></div>
          <div className="side right"></div>
          <div className="side back"></div>
          <div className="side left"></div>
          <div className="side top"></div>
          <div className="side shadow"></div>
        </div>
      </div>
    </div>
  );
}
