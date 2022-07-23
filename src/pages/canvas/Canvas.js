import { Link } from "react-router-dom";
import "./canvas-page.css";

export default function Canvas() {
  return (
    <div className="canvas-page">
      <h1>HTML-Canvas Tutorials</h1>
      <p>This section is currently being updated. Thanks for your patience.</p>
      <Link className="canvas-game-link" to={"/html-canvas/canvas-game"}>
        Canvas Game
      </Link>
    </div>
  );
}
