import { Link } from "react-router-dom";
import StarCanvas from "../../components/star-canvas/StarCanvas";
import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      <StarCanvas />
      <div className="text-box">
        <h1>Welcome to JavaScriptive</h1>
        <p>
          ...a place to learn, <br /> and find inspiration. Check out our JavaScript and CSS tutorials or go straight to animation and game development. We hope you find something useful.
        </p>
        <Link className="action-btn" to="/css">
          LET'S GO!
        </Link>
      </div>
      <div className="tap-message">tap screen</div>
      <div className="tap-message tap-message-2">tap screen</div>
      <footer className="home-footer">www.JavaScriptive.com</footer>
    </div>
  );
}
