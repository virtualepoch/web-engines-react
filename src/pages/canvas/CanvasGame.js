import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import layer1 from "./canvas_game_assets/layer1.png";
import layer2 from "./canvas_game_assets/layer2.png";
import layer3 from "./canvas_game_assets/layer3.png";
import layer4 from "./canvas_game_assets/layer4.png";
import player from "./canvas_game_assets/player.png";
import angler1 from "./canvas_game_assets/angler1.png";
import angler2 from "./canvas_game_assets/angler2.png";
import lucky from "./canvas_game_assets/lucky.png";
import projectile from "./canvas_game_assets/projectile.png";
import "./canvas-page.css";

export default function CanvasGame() {
  const navigate = useNavigate();
  const canvasGame = useRef(null);

  useEffect(() => {
    const canvas = canvasGame.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 1000;
    canvas.height = 500;

    class InputHandler {
      constructor(game) {
        this.game = game;
        // BUTTONS FOR MOBILE //////////////////////////////
        this.fireBtn = document.getElementById("fire-btn");
        this.upBtn = document.getElementById("up-btn");
        this.downBtn = document.getElementById("down-btn");
        ////////////////////////////////////////////////////
        window.addEventListener("keydown", (e) => {
          if ((e.key === "ArrowUp" || e.key === "ArrowDown") && this.game.keys.indexOf(e.key) === -1) {
            this.game.keys.push(e.key);
          } else if (e.key === " ") {
            this.game.player.shootTop();
          } else if (e.key === "d") {
            this.game.debug = !this.game.debug;
          }
        });
        window.addEventListener("click", (e) => {
          if ((e.key === this.upBtn || e.key === this.downBtn) && this.game.keys.indexOf(e.key) === -1) {
            this.game.keys.push(e.key);
          }
        });
        // EVENT LISTENER FOR MOBILE BUTTONS //////////////
        this.fireBtn.addEventListener("click", () => {
          this.game.player.shootTop();
        });
        ///////////////////////////////////////////////////
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
        this.width = 10;
        this.height = 3;
        this.speed = 30;
        this.markedForDeletion = false;
        this.image = document.getElementById("projectile");
      }
      update() {
        this.x += this.speed;
        if (this.x > this.game.width * 0.8) this.markedForDeletion = true;
      }
      draw(context) {
        context.drawImage(this.image, this.x, this.y);
      }
    }

    class Player {
      constructor(game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 40;
        this.y = 200;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;
        this.speedY = 0;
        this.maxSpeed = 5;
        this.projectiles = [];
        this.image = document.getElementById("player");
        this.powerUp = false;
        this.powerUpTimer = 0;
        this.powerUpLimit = 10000;
      }
      update(deltaTime) {
        if (this.game.keys.includes("ArrowUp")) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes("ArrowDown")) this.speedY = this.maxSpeed;
        else this.speedY = 0;
        this.y += this.speedY;
        // handle projectiles
        this.projectiles.forEach((projectile) => {
          projectile.update();
        });
        this.projectiles = this.projectiles.filter((projectile) => !projectile.markedForDeletion);
        // sprite animation
        if (this.frameX < this.maxFrame) {
          this.frameX++;
        } else {
          this.frameX = 0;
        }
        // power up
        if (this.powerUp) {
          if (this.powerUpTimer > this.powerUpLimit) {
            this.powerUpTimer = 0;
            this.powerUp = false;
            this.frameY = 0;
          } else {
            this.powerUpTimer += deltaTime;
            this.frameY = 1;
            this.game.ammo += 0.1;
          }
        }
      }
      draw(context) {
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        this.projectiles.forEach((projectile) => {
          projectile.draw(context);
        });
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
      }
      shootTop() {
        if (this.game.ammo > 0) {
          this.projectiles.push(new Projectile(this.game, this.x + 60, this.y + 30));
          this.game.ammo--;
        }
        if (this.powerUp) this.shootBottom();
      }
      shootBottom() {
        if (this.game.ammo > 0) {
          this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 175));
        }
      }
      enterPowerUp() {
        this.powerUpTimer = 0;
        this.powerUp = true;
        this.game.ammo = this.game.maxAmmo;
      }
    }

    class Enemy {
      constructor() {
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 0.5;
        this.markedForDeletion = false;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;
      }
      update() {
        this.x += this.speedX - this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
        // sprite animation
        if (this.frameX < this.maxFrame) {
          this.frameX++;
        } else this.frameX = 0;
      }
      draw(context) {
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        context.font = "20px Helvetica";
        context.fillText(this.lives, this.x + 20, this.y + 20);
      }
    }

    class Angler1 extends Enemy {
      constructor(game) {
        super(game);
        this.width = 228;
        this.height = 169;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.image = document.getElementById("angler1");
        this.frameY = Math.floor(Math.random() * 3);
        this.lives = 2;
        this.score = this.lives;
      }
    }

    class Angler2 extends Enemy {
      constructor(game) {
        super(game);
        this.width = 213;
        this.height = 165;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.image = document.getElementById("angler2");
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 3;
        this.score = this.lives;
      }
    }

    class LuckyFish extends Enemy {
      constructor(game) {
        super(game);
        this.width = 99;
        this.height = 95;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.image = document.getElementById("lucky");
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 3;
        this.score = 15;
        this.type = lucky;
      }
    }

    class Layer {
      constructor(game, image, speedModifier) {
        this.game = game;
        this.image = image;
        this.speedModifier = speedModifier;
        this.width = 1768;
        this.height = 600;
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
        this.layers = [this.layer1, this.layer2, this.layer3];
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
        this.fontSize = 20;
        this.fontFamily = "Sega";
        this.color = "white";
      }
      draw(context) {
        context.save();
        context.fillStyle = this.color;
        context.save();
        context.fillStyle = "rgba(0, 0, 0, 0.4)";
        context.fillRect(0, 0, 700, 50);
        context.strokeStyle = "white";
        context.beginPath();
        context.moveTo(130, 0);
        context.lineTo(130, 50);
        context.stroke();
        context.beginPath();
        context.moveTo(320, 0);
        context.lineTo(320, 50);
        context.stroke();
        context.restore();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = "black";
        context.font = this.fontSize + "px " + this.fontFamily;
        // score
        context.fillText("Score: " + this.game.score, 10, 30);
        //timer
        context.save();
        const formattedTime = (this.game.gameTime * 0.001).toFixed(2);
        context.fillText("Timer: " + formattedTime, 140, 30);
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
        // ammo
        if (this.game.player.powerUp) context.fillStyle = "aqua";
        context.fillText("AMMO: ", 330, 30);
        for (let i = 0; i < this.game.ammo; i++) {
          context.fillRect(430 + 5 * i, 12, 3, 20);
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
        this.timeLimit = 60000;
        this.speed = 1;
        this.debug = false;
      }
      update(deltaTime) {
        if (!this.gameOver) this.gameTime += deltaTime;
        if (this.gameTime > this.timeLimit) this.gameOver = true;
        this.background.update();
        this.background.layer4.update();
        this.player.update(deltaTime);
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
            if ((enemy.type = "lucky")) this.player.enterPowerUp();
            else this.score--;
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
        this.enemies.forEach((enemy) => {
          enemy.draw(context);
        });
        this.background.layer4.draw(context);
        this.ui.draw(context);
      }
      addEnemy() {
        const randomize = Math.random();
        if (randomize < 0.3) this.enemies.push(new Angler1(this));
        else if (randomize < 0.6) this.enemies.push(new Angler2(this));
        else this.enemies.push(new LuckyFish(this));
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
      <img id="player" src={player} />
      <img id="angler1" src={angler1} />
      <img id="angler2" src={angler2} />
      <img id="lucky" src={lucky} />

      {/* props */}
      <img id="projectile" src={projectile} />

      {/* environment */}
      <img id="layer1" src={layer1} />
      <img id="layer2" src={layer2} />
      <img id="layer3" src={layer3} />
      <img id="layer4" src={layer4} />

      {/* buttons */}
      <button id="up-btn"></button>
      <button id="down-btn"></button>
      <button id="fire-btn"></button>

      <button className="canvas-game-back-btn" onClick={() => navigate(-1)}>
        EXIT GAME
      </button>
    </div>
  );
}
