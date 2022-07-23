import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import layer1 from "./canvas_game_assets/layer1.png";
import layer2 from "./canvas_game_assets/layer2.png";
import layer3 from "./canvas_game_assets/layer3.png";
import layer4 from "./canvas_game_assets/layer4.png";
import "./canvas-page.css";

export default function CanvasGame() {
  const navigate = useNavigate();
  const canvasGame = useRef(null);

  useEffect(() => {
    const canvas = canvasGame.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 1500;
    canvas.height = 500;

    class InputHandler {
      constructor(game) {
        this.game = game;
        this.fireBtn = document.getElementById("fire-btn");
        this.upBtn = document.getElementById("up-btn");
        this.downBtn = document.getElementById("down-btn");
        window.addEventListener("keydown", (e) => {
          if ((e.key === "ArrowUp" || e.key === "ArrowDown") && this.game.keys.indexOf(e.key) === -1) {
            this.game.keys.push(e.key);
          } else if (e.key === " ") {
            this.game.player.shootTop();
          }
        });
        window.addEventListener("click", (e) => {
          if ((e.key === this.upBtn || e.key === this.downBtn) && this.game.keys.indexOf(e.key) === -1) {
            this.game.keys.push(e.key);
          }
        });
        this.fireBtn.addEventListener("click", () => {
          this.game.player.shootTop();
        });
        window.addEventListener("keyup", (e) => {
          if (this.game.keys.indexOf(e.key) > -1) {
            this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
          }
        });
      }
    }

    class Projectile {
      constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 5;
        this.speed = 30;
        this.markedForDeletion = false;
      }
      update() {
        this.x += this.speed;
        if (this.x > this.game.width * 0.8) this.markedForDeletion = true;
      }
      draw(context) {
        context.fillStyle = "aqua";
        context.fillRect(this.x, this.y, this.width, this.height);
      }
    }

    class Player {
      constructor(game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.maxSpeed = 5;
        this.projectiles = [];
      }
      update() {
        if (this.game.keys.includes("ArrowUp")) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes("ArrowDown")) this.speedY = this.maxSpeed;
        else this.speedY = 0;
        this.y += this.speedY;
        // handle projectiles
        this.projectiles.forEach((projectile) => {
          projectile.update();
        });
        this.projectiles = this.projectiles.filter((projectile) => !projectile.markedForDeletion);
      }
      draw(context) {
        context.fillStyle = "blue";
        context.fillRect(this.x, this.y, this.width, this.height);
        this.projectiles.forEach((projectile) => {
          projectile.draw(context);
        });
      }
      shootTop() {
        if (this.game.ammo > 0) {
          this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 30));
          this.game.ammo--;
        }
      }
    }

    class Enemy {
      constructor() {
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 0.5;
        this.markedForDeletion = false;
        this.lives = 5;
        this.score = this.lives;
      }
      update() {
        this.x += this.speedX;
        if (this.x + this.width < 0) this.markedForDeletion = true;
      }
      draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = "black";
        context.font = "20px Helvetica";
        context.fillText(this.lives, this.x + 20, this.y + 20);
      }
    }

    class Angler1 extends Enemy {
      constructor(game) {
        super(game);
        this.width = 228 * 0.2;
        this.height = 169 * 0.3;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
      }
    }

    class Layer {
      constructor(game, image, speedModifier) {
        this.game = game;
        this.image = image;
        this.speedModifier = speedModifier;
        this.width = 1768;
        this.height = 500;
        this.x = 0;
        this.y = 0;
      }
      update() {
        if (this.x <= -this.width) this.x = 0;
        this.x -= this.game.speed * this.speedModifier;
      }
      draw(context) {
        context.drawImage(this.image, this.x, this.y);
        context.drawImage(this.image, this.x + this.width, this.y);
      }
    }

    class Background {
      constructor(game) {
        this.game = game;
        this.image1 = document.getElementById("layer1");
        this.image2 = document.getElementById("layer2");
        this.image3 = document.getElementById("layer3");
        this.image4 = document.getElementById("layer4");
        this.layer1 = new Layer(this.game, this.image1, 1);
        this.layer2 = new Layer(this.game, this.image2, 2);
        this.layer3 = new Layer(this.game, this.image3, 5);
        this.layer4 = new Layer(this.game, this.image4, 10);
        this.layers = [this.layer1, this.layer2, this.layer3, this.layer4];
      }
      update() {
        this.layers.forEach((layer) => layer.update());
      }
      draw(context) {
        this.layers.forEach((layer) => layer.draw(context));
      }
    }

    class UI {
      constructor(game) {
        this.game = game;
        this.fontSize = 25;
        this.fontFamily = "Helvetica";
        this.color = "white";
      }
      draw(context) {
        context.save();
        context.fillStyle = this.color;
        context.save();
        context.fillStyle = "black";
        context.fillRect(0, 0, 120, 50);
        context.restore();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = "black";
        context.font = this.fontSize + "px " + this.fontFamily;
        // score
        context.fillText("Score: " + this.game.score, 10, 30);
        // ammo
        for (let i = 0; i < this.game.ammo; i++) {
          context.fillRect(20 + 5 * i, 460, 3, 20);
        }
        //timer
        context.save();
        context.fillStyle = "black";
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        const formattedTime = (this.game.gameTime * 0.001).toFixed(2);
        context.fillText("Timer: " + formattedTime, 150, 30);
        context.restore();

        // game over messages
        if (this.game.gameOver) {
          context.textAlign = "center";
          let message1;
          let message2;
          if (this.game.score > this.game.winningScore) {
            message1 = "You Win!";
            message2 = "Well Done!";
          } else {
            message1 = "You Lose!";
            message2 = "Try again next time!";
          }
          context.font = "50px " + this.fontFamily;
          context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 40);

          context.font = "25px " + this.fontFamily;
          context.fillText(message2, this.game.width * 0.5, this.game.height * 0.5 + 40);
        }

        context.restore();
      }
    }

    class Game {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.background = new Background(this);
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.ui = new UI(this);
        this.keys = [];
        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.ammo = 20;
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ammoInterval = 500;
        this.gameOver = false;
        this.score = 0;
        this.winningScore = 10;
        this.gameTime = 0;
        this.timeLimit = 20000;
        this.speed = 1;
      }
      update(deltaTime) {
        if (!this.gameOver) this.gameTime += deltaTime;
        if (this.gameTime > this.timeLimit) this.gameOver = true;
        this.background.update();
        this.player.update();
        if (this.ammoTimer > this.ammoInterval) {
          if (this.ammo < this.maxAmmo) this.ammo++;
          this.ammoTimer = 0;
        } else {
          this.ammoTimer += deltaTime;
        }
        this.enemies.forEach((enemy) => {
          enemy.update();
          if (this.checkCollision(this.player, enemy)) {
            enemy.markedForDeletion = true;
          }
          this.player.projectiles.forEach((projectile) => {
            if (this.checkCollision(projectile, enemy)) {
              enemy.lives--;
              projectile.markedForDeletion = true;
              if (enemy.lives <= 0) {
                enemy.markedForDeletion = true;
                if (!this.gameOver) this.score += enemy.score;
                if (this.score > this.winningScore) this.gameOver = true;
              }
            }
          });
        });
        this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
        if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
          this.addEnemy();
          this.enemyTimer = 0;
        } else {
          this.enemyTimer += deltaTime;
        }
      }
      draw(context) {
        this.background.draw(context);
        this.player.draw(context);
        this.ui.draw(context);
        this.enemies.forEach((enemy) => {
          enemy.draw(context);
        });
      }
      addEnemy() {
        this.enemies.push(new Angler1(this));
      }
      checkCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y;
      }
    }
    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;
    // animation loop
    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.update(deltaTime);
      game.draw(ctx);
      requestAnimationFrame(animate);
    }
    animate(0);
  }, []);

  return (
    <div className="canvas-game-container">
      <canvas id="canvas-game" ref={canvasGame}></canvas>

      {/* characters */}

      {/* props */}

      {/* environment */}
      <img id="layer1" src={layer1} />
      <img id="layer2" src={layer2} />
      <img id="layer3" src={layer3} />
      <img id="layer4" src={layer4} />

      {/* buttons */}
      <button id="up-btn"></button>
      <button id="down-btn"></button>
      <button id="fire-btn"></button>

      <button className="canvas-game-back-btn" onClick={() => navigate(-1)}></button>
    </div>
  );
}