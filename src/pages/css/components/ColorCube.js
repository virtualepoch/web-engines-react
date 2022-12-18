import React, { useRef } from "react";
import "./color-cube.css";

export function ColorCube() {
  const colorCube = useRef(null);

  function startAnim() {
    colorCube.current.classList.toggle("anim");
  }

  return (
    <div className="cube-container">
      <div className="color-cube" ref={colorCube} onClick={startAnim}>
        <div className="side front"></div>
        <div className="side back"></div>
        <div className="side left"></div>
        <div className="side right"></div>
        <div className="side top"></div>
        <div className="side bottom"></div>
        <div className="side shadow"></div>
      </div>
    </div>
  );
}
