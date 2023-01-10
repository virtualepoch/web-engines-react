import React from "react";
import mainLogo from "../assets/logos/webengines-100.png";

export function Footer() {
  var style = {
    footer: {
      width: "100%",
      minHeight: "calc(100vh - 20px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: "-1",
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
      borderRadius: "50%",
      boxShadow: "0 5px 5px 2px rgb(0, 0, 0, 0.2), inset 0 -7px 10px 4px var(--color-2)",
      background: "url(" + mainLogo + ") 50% 40%/40% no-repeat, radial-gradient(circle at 60% 30%, rgb(255, 255, 255) 5%, var(--color-3), var(--color-2), black 98%)",
    },
    text: {
      position: "absolute",
      bottom: "50px",
    },
  };

  return (
    <footer style={style.footer}>
      <div style={style.textContainer}>
        <p style={style.text}>webengines.org</p>
      </div>
    </footer>
  );
}
