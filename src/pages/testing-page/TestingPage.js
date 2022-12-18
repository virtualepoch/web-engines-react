// import GameTest from "../../components/GameTest";
import { Link } from "react-router-dom";
import { ImageEffectCanvas } from "../../components/ImageEffectCanvas";
import "./testing.css";

export function TestingPage() {
  const style = {
    page: {
      minHeight: "calc(100vh - 50px)",
      padding: "50px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: "white",
      pointerEvents: "all",
    },
    testing: {
      width: "100%",
      aspectRatio: "1/1",
      border: "solid",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      maxWidth: "500px",
      padding: "10px 0",
      font: "600 clamp(1.3rem, 5vw, 1.7rem) Blackpast",
    },
    pTag: {
      maxWidth: "500px",
      padding: "30px 0",
      font: "18px sans-serif",
    },
    testHeading: {
      padding: "10px 0",
      font: "600 clamp(1.3rem, 5vw, 1.7rem) Blackpast",
    },
    landingPageContainer: {
      width: "100%",
      minWidth: "300px",
      maxWidth: "400px",
      height: "300px",
      border: "solid red",
    },
    testContainer: {
      width: "100%",
      aspectRatio: "16/9",
      font: "600 clamp(1.3rem, 5vw, 1.7rem) Blackpast",
      color: "blue",
      padding: "20px",
    },
  };

  return (
    <div style={style.page}>
      <h1 style={style.text}>THE TEST PAGE</h1>
      <p style={style.pTag}>This section is where I will be testing and storing various little projects I'm working on.</p>
      <h2 style={style.text}>Image Effect Canvas Test</h2>
      <ImageEffectCanvas />
      <p style={style.testHeading}>Landing pages</p>
      <div style={style.landingPagesContainer}>
        <Link to={"/landing-pages/angled-highlights"}>
          <div style={style.landingPageContainer}>
            <h2 style={style.landingPageDescription}>Angled Highlights</h2>
            <div style={style.landingPageImage}></div>
          </div>
        </Link>
      </div>
      <p style={style.testHeading}>GameTest</p>
      <div style={style.testing}>{/* <GameTest /> */}</div>
      <p style={style.testContainer} className="sunrise-css">
        SUNRISE CSS
      </p>
      <p style={style.testContainer} className="sunset-ocean">
        SUNSET OCEAN
      </p>
    </div>
  );
}
