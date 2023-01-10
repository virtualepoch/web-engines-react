import React, { useEffect, useRef } from "react";

export function CanvasStarFractal() {
  const style = {
    canvasContainer: {
      width: "100%",
      height: "100vh",
      position: "fixed",
      top: "60px",
    },
    canvas: {
      width: "100%",
      height: "calc(100% - 110px)",
      boxShadow: "inset 0 -5px 5px 1px rgb(0,0,0,0.1)",
    },
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 60;

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
    let color = "darkslategray";
    let lineWidth = 15;
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
    }
    drawFractal();

    function randomizeFractal() {
      sides = Math.floor(Math.random() * 7 + 3);
      spread = Math.random() * 0.6 - 0.3;
      drawFractal();
      lineWidth = Math.floor(Math.random() * 20 + 10);
      console.log(sides);
      console.log(spread);
      console.log(lineWidth);
    }

    canvas.addEventListener("click", function () {
      randomizeFractal();
      drawFractal();
    });

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight - 110;
      size = canvas.width < canvas.height ? canvas.width * sizeAdjuster : canvas.height * sizeAdjuster;
      // ctx.lineCap = "round";
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 7;
      ctx.shadowBlur = 7;
      drawFractal();
    });
  }, []);

  return (
    <div style={style.canvasContainer}>
      <canvas style={style.canvas} ref={canvasRef}></canvas>
    </div>
  );
}
