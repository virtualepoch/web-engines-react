import { Link } from "react-router-dom";
import "./canvas-page.css";

export default function Canvas() {
  return (
    <div className="canvas-page">
      <h1 className="heading">HTML-Canvas Tutorials</h1>
      <p>This section is currently being updated. Thanks for your patience.</p>
      <p>In the mean time, check out this JavaScript game we are experimenting with.</p>
      <p className="attribution">The attribution for this game goes to a very talented developer from the UK whose YouTube channel is called Frank's laboratory. He wrote all the code and designed and created all of the assets. He has several very fun and interesting tutorials that are great resources if you want to learn how to use the HTML Canvas properly. You can find a link to his channel here:</p>
      <a className="franks-link" href="https://www.youtube.com/Frankslaboratory" rel="noreferrer" target="_blank">
        <i></i>Franks laboratory
      </a>
      <p>Game objective:</p>
      <p className="bold-text">80 points within 20 seconds</p>
      <p> Each enemy has a number above its head indicating HP (health/hit points). If any enemy (except the gold one) crashes into your character then that enemy's point value is subtracted from your accumulated points.</p>
      <p>Colliding with the gold enemy is a good thing. It actually acts as a power up allowing your character to fire from not only its head but also its tail.</p>
      <p>PLEASE NOTE: THIS GAME SHOULD BE PLAYED IN LANDSCAPE MODE IF ON A MOBILE DEVICE. OTHERWISE, THE GAME SCREEN WILL BE VERY SMALL.</p>
      <p>Controls:</p>
      <p className="bold-text">'ArrowUp' or 'W' = move up</p>
      <p className="bold-text">'ArrowDown' or 'S'= move down</p>
      <p className="bold-text">'ArrowLeft' or 'A' = move left</p>
      <p className="bold-text">'ArrowRight' or 'D'= move right</p>
      <p className="bold-text">The x-pad on the screen also allows directional movement.</p>
      <p className="bold-text">X button or 'spacebar' = fire</p>
      <p className="bold-text">Start button or 'enter' = restart game</p>
      <p className="bold-text">'O' = enable developer overlay</p>
      <p className="mobile-landscape-alert">please change to landscape orientation prior to entering the game</p>
      <Link className="canvas-game-link" to={"/html-canvas/canvas-game"}>
        enter game
      </Link>
    </div>
  );
}
