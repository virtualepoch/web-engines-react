import { useEffect, useRef, useState } from "react";

export function ImageEffectCanvas25() {
  const style = {
    canvas: {
      width: "100%",
      maxWidth: "400px",
      borderRadius: "50%",
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
