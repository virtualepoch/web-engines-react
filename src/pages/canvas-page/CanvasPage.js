import { Link } from "react-router-dom";
import "./canvas-page.css";

export function CanvasPage() {
  return (
    <div className="page">
      <h1 className="page-heading">HTML-Canvas Tutorials</h1>

      <div className="page-content">
        <p>This section is currently being updated. Thanks for your patience.</p>
        <p>In the mean time, check out this JavaScript game we are experimenting with.</p>
        <p className="attribution">The attribution for this game goes to a very talented developer from the UK whose YouTube channel is called Frank's laboratory. He wrote all the code and designed and created all of the assets. He has several very fun and interesting tutorials that are great resources if you want to learn how to use the HTML Canvas properly. You can find a link to his channel here:</p>
        <a className="franks-link" href="https://www.youtube.com/Frankslaboratory" rel="noreferrer" target="_blank">
          <i></i>Franks laboratory
        </a>
        <p style={{ margin: "auto", textAlign: "center" }}>
          - Game objective -<br></br>
          <br></br>
          80 points within 20 seconds
        </p>
        <p> Each enemy has a number above its head indicating HP (health/hit points). If any enemy (except the gold one) crashes into your character then that enemy's point value is subtracted from your accumulated points.</p>
        <p>Colliding with the gold enemy is a good thing. It actually acts as a power up allowing your character to fire from not only its head but also its tail.</p>
        <p>PLEASE NOTE: THIS GAME SHOULD BE PLAYED IN LANDSCAPE MODE IF ON A MOBILE DEVICE. OTHERWISE, THE GAME SCREEN WILL BE VERY SMALL.</p>

        <p className="bold-text" style={{ lineHeight: "33px", margin: "50px auto", textAlign: "center" }}>
          Controls:<br></br>
          'ArrowUp' or 'W' = move up<br></br>
          'ArrowDown' or 'S'= move down<br></br>
          'ArrowLeft' or 'A' = move left<br></br>
          'ArrowRight' or 'D'= move right<br></br>
          The x-pad on the screen also allows directional movement.<br></br>X button or 'spacebar' = fire<br></br>
          Start button or 'enter' = restart game<br></br>
          'O' = enable developer overlay
        </p>
        <div className="mobile-landscape-alert">
          <p>If on mobile please change to landscape orientation prior to entering the game</p>
        </div>
        <Link className="canvas-game-link" to={"/html-canvas/canvas-game"}>
          enter game
        </Link>
      </div>
    </div>
  );
}
