import React from "react";
import mainLogo from "../assets/logos/webengines-100.png";

export function Footer() {
  var style = {
    footer: {
      width: "100%",
      minHeight: "calc(100vh - 10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    textContainer: {
      width: "222px",
      height: "222px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      position: "relative",
      color: "white",
      letterSpacing: "1px",
      font: "100 clamp(1rem, 5vw, 1.2rem) sans-serif",
      background: "url(" + mainLogo + ") 50% 40%/40% no-repeat, radial-gradient(rgb(47, 79, 79, 0.7), transparent)",
      clipPath: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
    },

    text: {
      position: "absolute",
      bottom: "50px",
    },
  };

  return (
    <footer style={style.footer}>
      <div style={style.textContainer}>
        <p style={style.text}>www.webengines.org</p>
      </div>
    </footer>
  );
}
