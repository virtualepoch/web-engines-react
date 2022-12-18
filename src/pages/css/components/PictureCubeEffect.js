import React, { useRef, useState } from "react";
import "./picture-cube-effect.css";

export function PictureCubeEffect() {
  const pictureCubePosZContainer = useRef(null);
  const pictureCube = useRef(null);

  const [clickNum, setClickNum] = useState(1);

  function rotatePictureCube() {
    setTimeout(function () {
      setClickNum(clickNum + 1);
    }, 2000);

    if (clickNum == 1) {
      pictureCube.current.style.transition = "all 2s ease-in-out";
      pictureCube.current.style.transform = "rotateY(-90deg)";
    } else if (clickNum == 2) {
      pictureCube.current.style.transform = "rotateY(-180deg)";
    } else if (clickNum == 3) {
      pictureCube.current.style.transform = "rotateY(-270deg)";
    } else if (clickNum == 4) {
      pictureCube.current.style.transform = "rotateY(-360deg)";
      setTimeout(function () {
        setClickNum(1);
        pictureCube.current.style.transition = "none";
        pictureCube.current.style.transform = "rotateY(0)";
      }, 2000);
    }

    pictureCubePosZContainer.current.classList.add("anim");
    setTimeout(function () {
      pictureCubePosZContainer.current.classList.remove("anim");

    }, 2000);
  }

  return (
    <div className="picture-cube-container" onClick={rotatePictureCube}>
      {/* <div className="picture-cube-rotate-deg">{clickNum}</div> */}
      <div className="picture-cube-pos-z-container" ref={pictureCubePosZContainer}>
        <div className="picture-cube" ref={pictureCube}>
          <div className="side front"></div>
          <div className="side back"></div>
          <div className="side left"></div>
          <div className="side right"></div>
        </div>
      </div>
    </div>
  );
}
