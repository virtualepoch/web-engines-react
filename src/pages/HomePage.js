import { Link } from "react-router-dom";

export function HomePage() {
  const style = {
    homePage: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      font: "400 clamp(0.8em, 0.1em + 5vw, 1.5em) sans-serif",
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
      fontSize: "clamp(1em, 0.1em + 5vw, 2em)",
      letterSpacing: "3px",
      filter: "drop-shadow(0 0 5px aqua)",
    },

    p: {
      width: "100%",
      maxWidth: " 280px",
      padding: "20px",
      fontFamily: "Courier New, Courier, monospace",
      fontWeight: "900",
    },

    actionBtn: {
      width: "fit-content",
      minWidth: "200px",
      maxWidth: "200px",
      minHeight: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "400 20px sans-serif",
      color: "white",
      borderRadius: "50px",
      boxShadow: "inset -2px 2px 5px 1px rgb(255, 255, 255, 0.4), inset 2px -2px 5px 1px rgb(0, 0, 0, 0.5)",
      background: "purple",
      filter: "drop-shadow(0 0 2px aqua)",
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
    <div style={style.homePage}>
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
      <div style={style.featured}>Featured Tutorials</div>
    </div>
  );
}
