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
import hivewhale from "./canvas_game_assets/hivewhale.png";
import drone from "./canvas_game_assets/drone.png";
import projectile from "./canvas_game_assets/projectile.png";
import gears from "./canvas_game_assets/gears.png";
import smokeExplosion from "./canvas_game_assets/smokeExplosion.png";
import fireExplosion from "./canvas_game_assets/fireExplosion.png";
import "./canvas-page.css";

export function CanvasGame() {
  const navigate = useNavigate();
  const canvasGame = useRef(null);

  useEffect(() => {
    const canvas = canvasGame.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 1050;
    canvas.height = 450;

    class InputHandler {
      constructor(game) {
        this.game = game;
        window.addEventListener("keydown", (e) => {
          if ((e.key === "ArrowUp" || e.key === "w" || e.key === "ArrowDown" || e.key === "s" || e.key === "ArrowLeft" || e.key === "a" || e.key === "ArrowRight" || e.key === "d") && this.game.keys.indexOf(e.key) === -1) {
            this.game.keys.push(e.key);
          } else if (e.key === " ") {
            this.game.player.shootTop();
          } else if (e.key === "o") {
            this.game.debug = !this.game.debug;
          } else if (e.key === "Enter") {
            this.game.player.restart();
            this.game.restart();
          }
        });
        window.addEventListener("keyup", (e) => {
          if (this.game.keys.indexOf(e.key) > -1) {
            this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
          }
        });
        // EVENT LISTENER FOR MOBILE FIRE BUTTON //////////////
        this.fireBtn = document.getElementById("fire-btn");
        this.fireBtn.addEventListener("touchstart", () => {
          this.game.player.shootTop();
          this.fireBtn.classList.add("pressing");
        });
        this.fireBtn.addEventListener("touchend", () => {
          this.fireBtn.classList.remove("pressing");
        });
        // EVENT LISTENER FOR MOBILE START BUTTON //////////////
        this.startBtn = document.getElementById("start-btn");
        this.startBtn.addEventListener("click", () => {
          this.game.player.restart();
          this.game.restart();
        });
        // EVENT LISTENER FOR MOBILE X-PAD BUTTONS ////////////
        this.xPadUp = document.getElementById("x-pad-up");
        this.xPadUp.addEventListener("touchstart", () => {
          this.game.keys.push("xPadUp");
          this.xPadUp.classList.add("pressing");
        });
        this.xPadUp.addEventListener("touchend", () => {
          if (this.game.keys.indexOf("xPadUp") > -1) {
            this.game.keys.splice(this.game.keys.indexOf("xPadUp"), 1);
          }
          this.xPadUp.classList.remove("pressing");
        });
        this.xPadDown = document.getElementById("x-pad-down");
        this.xPadDown.addEventListener("touchstart", () => {
          this.game.keys.push("xPadDown");
          this.xPadDown.classList.add("pressing");
        });
        this.xPadDown.addEventListener("touchend", () => {
          if (this.game.keys.indexOf("xPadDown") > -1) {
            this.game.keys.splice(this.game.keys.indexOf("xPadDown"), 1);
          }
          this.xPadDown.classList.remove("pressing");
        });
        this.xPadLeft = document.getElementById("x-pad-left");
        this.xPadLeft.addEventListener("touchstart", () => {
          this.game.keys.push("xPadLeft");
          this.xPadLeft.classList.add("pressing");
        });
        this.xPadLeft.addEventListener("touchend", () => {
          if (this.game.keys.indexOf("xPadLeft") > -1) {
            this.game.keys.splice(this.game.keys.indexOf("xPadLeft"), 1);
          }
          this.xPadLeft.classList.remove("pressing");
        });
        this.xPadRight = document.getElementById("x-pad-right");
        this.xPadRight.addEventListener("touchstart", () => {
          this.game.keys.push("xPadRight");
          this.xPadRight.classList.add("pressing");
        });
        this.xPadRight.addEventListener("touchend", () => {
          if (this.game.keys.indexOf("xPadRight") > -1) {
            this.game.keys.splice(this.game.keys.indexOf("xPadRight"), 1);
          }
          this.xPadRight.classList.remove("pressing");
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

    class Particle {
      constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.image = document.getElementById("gears");
        this.frameX = Math.floor(Math.random() * 3);
        this.frameY = Math.floor(Math.random() * 3);
        this.spriteSize = 50;
        this.sizeModifier = (Math.random() * 0.5 + 0.5).toFixed(1);
        this.size = this.spriteSize * this.sizeModifier;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * -15;
        this.gravity = 0.5;
        this.markedForDeletion = false;
        this.angle = 0;
        // velocity angle
        this.va = Math.random() * 0.2 - 0.1;
        this.bounced = 0;
        this.bottomBounceBoundary = Math.random() * 100 + 60;
      }
      update() {
        this.angle += this.va;
        this.speedY += this.gravity;
        this.x -= this.speedX + this.game.speed + 3;
        this.y += this.speedY;
        if (this.y > this.game.height + this.size || this.x < 0 - this.size) this.markedForDeletion = true;
        if (this.y > this.game.height - this.bottomBounceBoundary && this.bounced < 2) {
          this.bounced++;
          this.speedY *= -0.7;
        }
      }
      draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(this.image, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, this.size * -0.5, this.size * -0.5, this.size, this.size);
        context.restore();
      }
    }

    class Player {
      constructor(game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 100;
        this.y = 200;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;
        this.speedY = 0;
        this.speedX = 0;
        this.maxSpeed = 5;
        this.projectiles = [];
        this.image = document.getElementById("player");
        this.powerUp = false;
        this.powerUpTimer = 0;
        this.powerUpLimit = 5000;
      }
      restart() {
        this.x = 100;
        this.y = 200;
      }
      update(deltaTime) {
        if (this.game.keys.includes("ArrowUp") || this.game.keys.includes("w") || this.game.keys.includes("xPadUp")) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes("ArrowDown") || this.game.keys.includes("s") || this.game.keys.includes("xPadDown")) this.speedY = this.maxSpeed;
        else this.speedY = 0;
        this.y += this.speedY;
        if (this.game.keys.includes("ArrowLeft") || this.game.keys.includes("a") || this.game.keys.includes("xPadLeft")) this.speedX = -this.maxSpeed;
        else if (this.game.keys.includes("ArrowRight") || this.game.keys.includes("d") || this.game.keys.includes("xPadRight")) this.speedX = this.maxSpeed;
        else this.speedX = 0;
        this.x += this.speedX;
        // mobile xpad
        if (this.game.xPadUpArray[this.upBtn]) this.speedY = -this.maxSpeed;
        else this.speedY = 0;
        this.y += this.speedY;
        // vertical boundaries
        if (this.y > this.game.height - this.height * 0.5) this.y = this.game.height - this.height * 0.5;
        else if (this.y < -this.height * 0.5) this.y = -this.height * 0.5;
        // horizontal boundaries
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        else if (this.x < 0) this.x = 0;
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
        if (this.game.ammo < this.game.maxAmmo) this.game.ammo = this.game.maxAmmo;
      }
    }

    class Enemy {
      constructor(game) {
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
        context.fillStyle = "white";
        context.fillText(this.lives, this.x + 20, this.y + 20);
      }
    }

    class Angler1 extends Enemy {
      constructor(game) {
        super(game);
        this.width = 228;
        this.height = 169;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById("angler1");
        this.frameY = Math.floor(Math.random() * 3);
        this.lives = 5;
        this.score = this.lives;
      }
    }

    class Angler2 extends Enemy {
      constructor(game) {
        super(game);
        this.width = 213;
        this.height = 165;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById("angler2");
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 6;
        this.score = this.lives;
      }
    }

    class LuckyFish extends Enemy {
      constructor(game) {
        super(game);
        this.width = 99;
        this.height = 95;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById("lucky");
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 5;
        this.score = 15;
        this.type = "lucky";
      }
    }

    class HiveWhale extends Enemy {
      constructor(game) {
        super(game);
        this.width = 400;
        this.height = 227;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById("hivewhale");
        this.frameY = 0;
        this.lives = 20;
        this.score = this.lives;
        this.type = "hive";
        this.speedX = Math.random() * -1.2 - 0.2;
      }
    }

    class Drone extends Enemy {
      constructor(game, x, y) {
        super(game);
        this.width = 115;
        this.height = 95;
        this.x = x;
        this.y = y;
        this.image = document.getElementById("drone");
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 3;
        this.score = this.lives;
        this.type = "drone";
        this.speedX = Math.random() * -4.2 - 0.5;
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

    class Explosion {
      constructor(game, x, y) {
        this.game = game;
        this.frameX = 0;
        this.spriteHeight = 200;
        this.spriteWidth = 200;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this.fps = 10;
        this.timer = 0;
        this.interval = 1000 / 15;
        this.markedForDeletion = false;
        this.maxFrame = 8;
      }
      update(deltaTime) {
        this.x -= this.game.speed + 3;
        if (this.timer > this.interval) {
          this.frameX++;
          this.timer = 0;
        } else {
          this.timer += deltaTime;
        }
        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
      }
      draw(context) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
      }
    }

    class SmokeExplosion extends Explosion {
      constructor(game, x, y) {
        super(game, x, y);
        this.image = document.getElementById("smokeExplosion");
      }
    }
    class FireExplosion extends Explosion {
      constructor(game, x, y) {
        super(game, x, y);
        this.image = document.getElementById("fireExplosion");
      }
    }

    class UI {
      constructor(game) {
        this.game = game;
        this.fontSize = 20;
        this.fontFamily = "Blackpast";
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
        context.moveTo(140, 0);
        context.lineTo(140, 50);
        context.stroke();
        context.beginPath();
        context.moveTo(320, 0);
        context.lineTo(320, 50);
        context.stroke();
        context.restore();
        context.font = this.fontSize + "px " + this.fontFamily;
        // score
        context.fillText("Score: " + this.game.score, 10, 30);
        //timer
        const formattedTime = (this.game.gameTime * 0.001).toFixed(2);
        context.fillText("Timer: " + formattedTime, 150, 30);
        // game over messages
        if (this.game.gameOver) {
          context.save();
          context.textAlign = "center";
          let message1;
          let message2;
          if (this.game.score > this.game.winningScore) {
            message1 = "You Win!";
            message2 = "Well Done!";
          } else {
            message1 = "You Lose";
            message2 = "Press start to try again";
          }
          context.font = "50px " + this.fontFamily;
          context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 40);
          context.font = "25px " + this.fontFamily;
          context.fillText(message2, this.game.width * 0.5, this.game.height * 0.5 + 40);
          context.restore();
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
        this.xPadUpArray = [];
        this.enemies = [];
        this.particles = [];
        this.explosions = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.ammo = 20;
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ammoInterval = 500;
        this.gameOver = false;
        this.score = 0;
        this.winningScore = 80;
        this.gameTime = 0;
        this.timeLimit = 20000;
        this.speed = 0.4;
        this.debug = false;
      }

      restart() {
        this.enemies = [];
        this.gameOver = false;
        this.score = 0;
        this.gameTime = 0;
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
        this.particles.forEach((particle) => particle.update());
        this.particles = this.particles.filter((particle) => !particle.markedForDeletion);
        this.explosions.forEach((explosion) => explosion.update(deltaTime));
        this.explosions = this.explosions.filter((explosion) => !explosion.markedForDeletion);
        this.enemies.forEach((enemy) => {
          enemy.update();
          if (this.checkCollision(this.player, enemy)) {
            enemy.markedForDeletion = true;
            this.addExplosion(enemy);
            for (let i = 0; i < enemy.score; i++) {
              this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
            }
            // ERROR HERE-- collision with all enemy types triggers 'enterPowerUp()' ////////////
            if (enemy.type === "lucky") this.player.enterPowerUp();
            else if (!this.gameOver) this.score--;
          }
          this.player.projectiles.forEach((projectile) => {
            if (this.checkCollision(projectile, enemy)) {
              enemy.lives--;
              projectile.markedForDeletion = true;
              this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
              if (enemy.lives <= 0) {
                for (let i = 0; i < enemy.score; i++) {
                  this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                }
                enemy.markedForDeletion = true;
                this.addExplosion(enemy);
                if (enemy.type === "hive") {
                  for (let i = 0; i < 5; i++) {
                    this.enemies.push(new Drone(this, enemy.x + Math.random() * enemy.width, enemy.y + Math.random() + enemy.height * 0.5));
                  }
                }
                if (!this.gameOver) this.score += enemy.score;
                // if (this.score > this.winningScore) this.gameOver = true;
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
        this.particles.forEach((particle) => particle.draw(context));
        this.enemies.forEach((enemy) => {
          enemy.draw(context);
        });
        this.explosions.forEach((explosion) => {
          explosion.draw(context);
        });
        this.background.layer4.draw(context);
        this.ui.draw(context);
      }
      addEnemy() {
        const randomize = Math.random();
        if (randomize < 0.3) this.enemies.push(new Angler1(this));
        else if (randomize < 0.6) this.enemies.push(new Angler2(this));
        else if (randomize < 0.7) this.enemies.push(new HiveWhale(this));
        else this.enemies.push(new LuckyFish(this));
      }
      addExplosion(enemy) {
        const randomize = Math.random();
        if (randomize < 0.5) {
          this.explosions.push(new SmokeExplosion(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
        } else {
          this.explosions.push(new FireExplosion(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
        }
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
      game.draw(ctx);
      game.update(deltaTime);
      // here you can add an if statement to stop animating (i.e. if(!gameOver))
      // however, having issue where game stops animating before win/lose message.
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
      <img id="hivewhale" src={hivewhale} />
      <img id="drone" src={drone} />

      {/* props */}
      <img id="projectile" src={projectile} />
      <img id="gears" src={gears} />
      <img id="smokeExplosion" src={smokeExplosion} />
      <img id="fireExplosion" src={fireExplosion} />

      {/* environment */}
      <img id="layer1" src={layer1} />
      <img id="layer2" src={layer2} />
      <img id="layer3" src={layer3} />
      <img id="layer4" src={layer4} />

      {/* buttons */}
      <div id="x-pad">
        <div id="x-pad-up"></div>
        <div id="x-pad-down"></div>
        <div id="x-pad-left"></div>
        <div id="x-pad-right"></div>
      </div>
      <button id="fire-btn">FIRE</button>
      <button id="start-btn">START</button>

      <button className="canvas-game-back-btn" onClick={() => navigate(-1)}>
        EXIT GAME
      </button>
    </div>
  );
}
