import React, { useRef } from "react";
import "./cube-top.css";

export default function ColorCube() {
  const colorCubeRef = useRef(null);
  function startAnim() {
    const colorCube = colorCubeRef.current;
    colorCube.classList.toggle("anim");
  }
  return (
    <div className="cube-container">
      <div className="color-cube-wrapper">
        <div className="color-cube" ref={colorCubeRef} onClick={startAnim}>
          <div className="side front"></div>
          <div className="side right"></div>
          <div className="side back"></div>
          <div className="side left"></div>
          <div className="side top"></div>
          <div className="side bottom"></div>
          <div className="color-cube-shadow"></div>
        </div>
      </div>
    </div>
  );
}
