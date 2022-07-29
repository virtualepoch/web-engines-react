import { Link } from "react-router-dom";
import "./canvas-page.css";

export default function Canvas() {
  return (
    <div className="canvas-page">
      <h1>html-canvas tutorials</h1>
      <p>This section is currently being updated. Thanks for your patience.</p>
      <p>In the mean time, check out this JavaScript game we are experimenting with.</p>
      <p>Game objective:</p>
      <p className="bold-text">80 points within 20 seconds</p>
      <p> Each enemy has a number above their head indicating the point value for elimination. If any enemy (except the gold one) crashes into the player's character then that enemy's point value is subtracted from the accumulated points.</p>
      <p>Colliding with the gold enemy is a good thing. It actually acts as a power up allowing your character to fire from not only its head but also its tail.</p>
      <p>PLEASE NOTE: THIS GAME SHOULD BE PLAYED IN LANDSCAPE MODE IF ON A MOBILE DEVICE. OTHERWISE, THE GAME SCREEN WILL BE VERY SMALL.</p>
      <p>Controls:</p>
      <p className="bold-text">up arrow = move character up</p>
      <p className="bold-text">down arrow = move character down</p>
      <p className="bold-text">left arrow = move character left</p>
      <p className="bold-text">right arrow = move character right</p>
      <p className="bold-text">x button or spacebar = fire</p>
      <p className="bold-text">start button or 'enter' = restart game</p>
      <p className="mobile-landscape-alert">please change to landscape orientation prior to entering game.</p>
      <Link className="canvas-game-link" to={"/html-canvas/canvas-game"}>
        enter game
      </Link>
    </div>
  );
}
