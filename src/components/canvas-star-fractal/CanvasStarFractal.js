import React, { useEffect, useRef } from "react";
import "./canvas-star-fractal.css";

export function CanvasStarFractal() {
  const style = {
    canvas: {
      width: "100%",
      height: "calc(100vh - 110px)",
      position: "absolute",
      top: "60px",
      left: "0",
      right: "0",
      boxShadow: "inset 0 -5px 5px 1px rgb(0,0,0,0.1)",
    },
  };

  const canvasRef = useRef(null);
  const canvasControls = useRef(null);
  const openCloseBtn = useRef(null);
  const randomizeBtnRef = useRef(null);
  const resetBtnRef = useRef(null);

  function openCloseControls() {
    canvasControls.current.classList.toggle("open");
    openCloseBtn.current.classList.toggle("open");
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 110;

    ctx.fillStyle = "blue";
    // ctx.lineCap = "round";
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 7;
    ctx.shadowBlur = 7;

    // effect settings
    let sizeAdjuster = 0.2;
    let size = canvas.width < canvas.height ? canvas.width * sizeAdjuster : canvas.height * sizeAdjuster;
    const maxLevel = 5;
    const branches = 2;

    let sides = 8;
    let scale = 1;
    let spread = -0.3;
    // let hue = 180;
    // let color = "hsl(" + hue + ", 100%, 50%)";
    let color = "darkslategray";
    // let color2 = "hsl(" + (hue + 180) + ", 100%, 50%)";
    let lineWidth = 17;
    let pointX = 0;
    let pointY = size;

    // controls
    const randomizeBtn = randomizeBtnRef.current;

    function drawBranch(level) {
      if (level > maxLevel) return;
      ctx.beginPath();
      ctx.moveTo(pointX, pointY);
      ctx.lineTo(size, 0);
      ctx.stroke();
      for (let i = 0; i < branches; i++) {
        ctx.save();
        ctx.translate(size - (size / branches) * i, 0);
        ctx.scale(scale, scale);

        ctx.save();
        ctx.rotate(spread);
        drawBranch(level + 1);
        ctx.restore();
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(0, size, size * 0.1, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawFractal() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      for (let i = 0; i < sides; i++) {
        ctx.rotate((Math.PI * 2) / sides);
        drawBranch(0);
      }
      ctx.restore();
      randomizeBtn.style.backgroundColor = color;
    }
    drawFractal();

    // Randomize text const
    // const textBox = document.querySelector(".text-box");
    // this.cancelIdleCallback;
    // textBox.style.color = color2;

    function randomizeFractal() {
      sides = Math.floor(Math.random() * 7 + 3);
      spread = Math.random() * 0.6 - 0.3;
      // let hue = Math.random() * 360;
      // color = "hsl(" + hue + ", 100%, 50%)";
      // color2 = "hsl(" + (hue + 180) + ", 100%, 50%)";
      drawFractal();
      lineWidth = Math.floor(Math.random() * 20 + 10);
      //   textBox.style.color = color2;
      console.log(sides);
      console.log(spread);
      console.log(lineWidth);
    }
    randomizeBtn.addEventListener("click", function () {
      randomizeFractal();
      // updateSliders();
      drawFractal();
    });
    canvas.addEventListener("click", function () {
      randomizeFractal();
      // updateSliders();
      drawFractal();
    });

    function resetFractal() {
      sides = 8;
      scale = 1;
      spread = 0.2;
      // color = "hsl(" + hue + ", 100%, 50%)";
      lineWidth = 25;
    }
    const resetBtn = resetBtnRef.current;
    resetBtn.addEventListener("click", function () {
      resetFractal();
      // updateSliders();
      drawFractal();
    });

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 110;
      size = canvas.width < canvas.height ? canvas.width * sizeAdjuster : canvas.height * sizeAdjuster;
      ctx.lineCap = "round";
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 7;
      ctx.shadowBlur = 7;
      drawFractal();
    });

    // const slider_spread = document.getElementById("spread");
    // const label_spread = document.getElementById("forSpread");
    // slider_spread.addEventListener("change", function (e) {});
  }, []);

  return (
    <>
      <canvas style={style.canvas} ref={canvasRef}></canvas>
      <div id="canvas-controls" ref={canvasControls}>
        <div className="controls-row1">
          <p>BACKGROUND CONTROLS</p>
          <div className="open-close-controls-btn" ref={openCloseBtn} onClick={openCloseControls}></div>
        </div>
        <button id="randomize-btn" ref={randomizeBtnRef}>
          Randomize!
        </button>
        <div className="slider-container">
          {/* <label id="forSpread" for="spread">Spread:{" "}</label> */}
          {/* <input id="spread" type="range" min="-0.1" max="3.1" step="0.02" value="1" /> */}
        </div>
        <div className="slider-container">
          {/* <label for="sides">Sides: </label> */}
          {/* <input id="sides" type="range" min="2" max="22" step="1" value="5" /> */}
        </div>
        <button id="reset-btn" ref={resetBtnRef}>
          Reset
        </button>
      </div>
    </>
  );
}
