import React, { useRef, useEffect } from "react";
import "./components.css";
export default function GameTest() {
  const styleSheet = {
    canvas: {
      width: "600px",
      height: "600px",
      border: "5px solid black",
    },
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const CANVAS_WIDTH = (canvas.width = 600);
    const CANVAS_HEIGHT = (canvas.height = 600);

    const playerImage = new Image();
    playerImage.src = "shadow_dog.png";
    let x = 0;

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.fillRect(x, 50, 100, 100);
      x++;
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <canvas style={styleSheet.canvas} ref={canvasRef}></canvas>
  );
}
