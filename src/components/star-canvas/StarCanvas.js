import React, { useEffect, useRef } from "react";

export default function StarCanvas() {
  const canvasRef = useRef(null);
  const randomizeBtnRef = useRef(null);
  const resetBtnRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "blue";
    ctx.lineCap = "round";
    ctx.shadowColor = "rgba(0,0,0,0.9)";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 7;
    ctx.shadowBlur = 9;

    // effect settings
    let sizeAdjuster = 0.15;
    let size = canvas.width < canvas.height ? canvas.width * sizeAdjuster : canvas.height * sizeAdjuster;
    const maxLevel = 5;
    const branches = 2;

    let sides = 11;
    let scale = 0.88;
    let spread = 0.2;
    let hue = 200;
    let color = "hsl(" + hue + ", 100%, 50%)";
    // let color2 = "hsl(" + (hue + 180) + ", 100%, 50%)";
    let lineWidth = 30;
    let pointX = 0;
    let pointY = size;

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

    const randomizeBtn = randomizeBtnRef.current;
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
      let hue = Math.random() * 360;
      color = "hsl(" + hue + ", 100%, 50%)";
      // color2 = "hsl(" + (hue + 180) + ", 100%, 50%)";
      drawFractal();
      lineWidth = Math.floor(Math.random() * 30 + 20);
      //   textBox.style.color = color2;
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

    // const homePage = homePageRef.current;
    // homePage.addEventListener("click", function () {
    //   randomizeFractal();
    //   // updateSliders();
    //   drawFractal();
    // });

    function resetFractal() {
      sides = 11;
      scale = 0.88;
      spread = 0.2;
      color = "hsl(" + hue + ", 100%, 50%)";
      lineWidth = 30;
    }
    const resetBtn = resetBtnRef.current;
    resetBtn.addEventListener("click", function () {
      resetFractal();
      // updateSliders();
      drawFractal();
    });

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      size = canvas.width < canvas.height ? canvas.width * 0.3 : canvas.height * 0.3;
      ctx.lineCap = "round";
      ctx.shadowColor = "rgba(0,0,0,0.9)";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 7;
      ctx.shadowBlur = 9;
      drawFractal();
    });
  }, []);
  const canvasControls = useRef(null);
  const openCloseBtn = useRef(null);

  function openCloseControls() {
    canvasControls.current.classList.toggle("open");
    openCloseBtn.current.classList.toggle("open");
  }

  return (
    <>
      <canvas id="canvas1" ref={canvasRef}></canvas>
      <div id="canvas-controls" ref={canvasControls}>
        <div className="controls-row1">
          <p>BACKGROUND CONTROLS</p>
          <button className="open-close-controls-btn" ref={openCloseBtn} onClick={openCloseControls}></button>
        </div>
        <button id="randomize-btn" ref={randomizeBtnRef}>
          Randomize!
        </button>
        <div className="slider-container">
          <label for="spread">Spread: </label>
          <input id="spread" type="range" min="-0.1" max="3.1" step="0.01" value="1" />
        </div>
        <div className="slider-container">
          <label for="sides">Sides: </label>
          <input id="sides" type="range" min="2" max="22" step="1" value="5" />
        </div>
        <button id="reset-btn" ref={resetBtnRef}>
          Reset
        </button>
      </div>
    </>
  );
}
