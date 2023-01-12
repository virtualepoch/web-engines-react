import React, { useRef } from "react";
import "../components/border-effect.css";

export function BorderEffect() {
  const animatedBorder = useRef(null);

  return (
    <div className="border-effect-wrapper">
      <div className="border-effect-box">
        <div className="animated-border" ref={animatedBorder}></div>
      </div>
    </div>
  );
}
