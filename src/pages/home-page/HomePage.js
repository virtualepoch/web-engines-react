import { Link } from "react-router-dom";
import "./home.css";

export function HomePage() {
  return (
    <div className="home-page">
      <div className="text-box">
        <h1>Welcome to Web Engines</h1>
        <p className="fade-phrase">What is Web Engines?<br></br>Simply, a place we share fun and useful things you can do with CSS and JavaScript.</p>
        <Link className="action-btn" to="/css">
          LET'S GO!
        </Link>
      </div>
      <footer className="home-footer">www.webengines.org</footer>
    </div>
  );
}
