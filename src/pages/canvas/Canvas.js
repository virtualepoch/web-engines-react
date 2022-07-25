import { Link } from "react-router-dom";
import "./canvas-page.css";

export default function Canvas() {
  return (
    <div className="canvas-page">
      <h1>html-canvas tutorials</h1>
      <p>This section is currently being updated. Thanks for your patience.</p>
      <p>In the mean time, check out this JavaScript game we are experimenting with.</p>
      <p>PLEASE NOTE: THIS GAME SHOULD BE PLAYED IN LANDSCAPE MODE IF ON A MOBILE DEVICE. OTHERWISE, THE GAME SCREEN WILL BE VERY SMALL.</p>
      <p className="mobile-landscape-alert">please change to landscape orientation prior to entering game.</p>
      <Link className="canvas-game-link" to={"/html-canvas/canvas-game"}>
        enter game
      </Link>
    </div>
  );
}
