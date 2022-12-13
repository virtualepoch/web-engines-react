import { useEffect, useRef } from "react";

export function ImageEffectCanvas() {
  const canvasRef = useRef(null);
  const myImage = new Image();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    myImage.src =
      "data:image/png;base64,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";
      
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 500;

    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
      let row = [];
      for (let x = 0; x < canvas.width; x++) {
        const red = pixels.data[y * 4 * pixels.width + x * 4];
        const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
        const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
        const brightness = calculateRelativeBrightness(red, green, blue);
        const cell = [brightness];
        row.push(cell);
      }
      mappedImage.push(row);
    }

    function calculateRelativeBrightness(red, green, blue) {
      return Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) / 100;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.5;
        this.size = Math.random() * 1.5 + 1;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
      }

      update() {
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.speed = mappedImage[this.position1][this.position2][0];
        let movement = 2.5 - this.speed + this.velocity;

        this.y += movement;
        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    init();
    function animate() {
      ctx.globalAlpha = 0.02;
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.5;

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].speed * 0.8;
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return <canvas ref={canvasRef} style={{ width: "90%", maxWidth: "500px", border: "1px solid black", borderRadius: "10px", boxShadow: "2px 7px 10px 2px rgba(0,0,0,0.5)", margin: "10px 0 50px 0" }}></canvas>;
}
