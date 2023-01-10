import { Link } from "react-router-dom";
import "../app.css";

export function HomePage() {
  const style = {
    homePage: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "white",
    },

    landing: {
      width: "100%",
      minHeight: "calc(100vh - 70px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      textAlign: "center",
    },

    h1: {
      padding: "20px",
      font: "400 clamp(1.5rem, 4vw, 2rem) PixeloidSans",
      letterSpacing: "3px",
      filter: "drop-shadow(0 0 5px aqua)",
    },

    p: {
      width: "100%",
      maxWidth: " 280px",
      padding: "20px",
      font: "400 clamp(1rem, 3vw, 1.5rem)/clamp(2rem, 5vw, 2.5rem) PixeloidSans",
    },

    actionBtn: {
      width: "fit-content",
      minWidth: "200px",
      maxWidth: "200px",
      minHeight: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "400 20px PixeloidSans",
      borderRadius: "50px",
      background: "rgb(50, 0, 100)",
      pointerEvents: "all",
    },

    featured: {
      width: "100%",
      minHeight: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-3-op5)",
    },
  };

  return (
    <div style={style.homePage} className="home-page">
      <div style={style.landing}>
        <h1 style={style.h1}>Welcome to Web Engines</h1>
        <p style={style.p}>
          What is Web Engines?<br></br>Simply, a place we share fun and useful things you can do with CSS and JavaScript.
        </p>
        {/* STYLE FOR 'ACTION-BTN' BELOW IS IN 'APP.CSS'. */}
        <Link style={style.actionBtn} className="action-btn" to="/css">
          LET'S GO!
        </Link>
      </div>
      {/* <div style={style.featured}>Featured Tutorials</div> */}
    </div>
  );
}
