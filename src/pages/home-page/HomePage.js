import { Link } from "react-router-dom";
import { CanvasStarFractal } from "../../components/canvas-star-fractal/CanvasStarFractal";
import "./home.css";

export function HomePage() {
  return (
    <div className="home-page">
      <CanvasStarFractal />
      <div className="text-box">
        <h1>Welcome to Web Engines</h1>
        <p className="fade-phrase">What is Web Engines?<br></br>Simply, a place we share fun and useful things you can do with CSS and JavaScript.</p>
        <Link className="action-btn" to="/css">
          LET'S GO!
        </Link>
      </div>
      <div className="tap-message">tap screen</div>
      <div className="tap-message tap-message-2">tap screen</div>
      <footer className="home-footer">www.webengines.org</footer>
    </div>
  );
}
