import React, { useRef } from "react";
import "./cube-top.css";

export default function ColorCube() {
  const colorCubeRef = useRef(null);
function startAnim(){
  const colorCube = colorCubeRef.current;
  colorCube.classList.toggle("anim")
}
  return (
    <div className="cube-container">
      <div className="color-cube-wrapper">
        <div className="color-cube" ref={colorCubeRef} onClick={startAnim}>
          <div className="front"></div>
          <div className="right"></div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="bottom shadow"></div>
        </div>
      </div>
    </div>
  );
}
