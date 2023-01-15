import { useEffect, useRef, useState } from "react";

export function ImageEffectCanvas() {
  const style = {
    canvas: {
      width: "100%",
      maxWidth: "400px",
      boxShadow: "2px 7px 10px 2px rgba(0,0,0,0.5)",
    },
  };

  // const base64 = convertBase64(image);

  // const convertBase64 = (image) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(image);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const canvasRef = useRef(null);
  const myImage = new Image();
  const [myImageSrc, setMyImageSrc] = useState(
    "data:image/png;base64,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"
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    myImage.src = myImageSrc;

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

  return <canvas ref={canvasRef} style={style.canvas}></canvas>;
}
