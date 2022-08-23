import React, { useRef } from "react";
import "./cube-top.css";

export default function SpinningTop() {
  const spinningTop = useRef(null);
  const shadow = useRef(null);
  function startAnim() {
    spinningTop.current.classList.toggle("anim");
    shadow.current.classList.toggle("anim");
  }
  return (
    <div className="spinning-top-container">
      <div className="spinning-top" ref={spinningTop} onClick={startAnim}>
        <div className="side front"></div>
        <div className="side back"></div>
        <div className="side left"></div>
        <div className="side right"></div>
        <div className="side top"></div>
      </div>
      <div className="shadow" ref={shadow}></div>
    </div>
  );
}
