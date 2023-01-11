import React from "react";
import mainLogo from "../assets/logos/webengines-100.png";

export function Footer() {
  var style = {
    footer: {
      width: "100%",
      minHeight: "calc(100vh - 12px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    textContainer: {
      width: "100px",
      height: "100px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      position: "relative",
      background: "url(" + mainLogo + ") 50% / 100% no-repeat",
    },

    text: {
      position: "absolute",
      bottom: "-33px",
      font: "100 clamp(1rem, 5vw, 1.2rem) sans-serif",
      color: "white",
      letterSpacing: "1px",
    },

    textTwo: {
      maxWidth: "300px",
      position: "absolute",
      bottom: "50px",
      font: "100 clamp(1rem, 5vw, 1.2rem) sans-serif",
      textTransform: "uppercase",
      textAlign: "center",
      color: "white",
      letterSpacing: "1px",
    },
  };

  return (
    <footer style={style.footer}>
      <div style={style.textContainer}>
        <p style={style.text}>www.webengines.org</p>
      </div>
      <p style={style.textTwo}>tap/click background to randomize fractal!</p>
    </footer>
  );
}
