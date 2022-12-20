// import GameTest from "../../components/GameTest";
import { Link } from "react-router-dom";
import { CanvasImageEffect } from "../../components/CanvasImageEffect";
import { TransformTriangle } from "../../components/transform-triangle/TransformTriangle";
import "./testing.css";
import "./picture-flip.css";
import "./image-flip.css";

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
      <div className="image-flip-main-row">
        <div className="content-column">
          <h1>Welcome to My Portfolio Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus doloremque non iusto, voluptate officia? Quas sint necessitatibus totam esse? Quas, eligendi dolorem sunt quos provident unde tempore dolore adipisci laboriosam quod autem nesciunt non quam et incidunt quasi ducimus ab esse illum. Quis, libero ratione! Facilis doloribus minus asperiores.</p>
          </div>
        <div className="image-flip-section">
          <div className="image-flip-row">
            <div className="image-flip-container">
              <div className="image-flip">
                <div className="side front">#1 FRONT</div>
                <div className="side back">#1 BACK</div>
                <div className="side left"></div>
                <div className="side right"></div>
                <div className="side top"></div>
                <div className="side bottom"></div>
              </div>
            </div>
            <div className="image-flip-container">
              <div className="image-flip">
                <div className="side front">#2 FRONT</div>
                <div className="side back">#2 BACK</div>
                <div className="side left"></div>
                <div className="side right"></div>
                <div className="side top"></div>
                <div className="side bottom"></div>
              </div>
            </div>
          </div>
          <div className="image-flip-row">
            <div className="image-flip-container">
              <div className="image-flip">
                <div className="side front">#3 FRONT</div>
                <div className="side back">#3 BACK</div>
                <div className="side left"></div>
                <div className="side right"></div>
                <div className="side top"></div>
                <div className="side bottom"></div>
              </div>
            </div>
            <div className="image-flip-container">
              <div className="image-flip">
                <div className="side front">#4 FRONT</div>
                <div className="side back">#4 BACK</div>
                <div className="side left"></div>
                <div className="side right"></div>
                <div className="side top"></div>
                <div className="side bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="picture-flip-section">
        <div className="picture-flip-container">
          <div className="picture-flip-pos-z-container">
            <div className="picture-flip">
              <div className="side front">FRONT</div>
              <div className="side back">BACK</div>
              <div className="side left"></div>
              <div className="side right"></div>
              <div className="side top"></div>
              <div className="side bottom"></div>
            </div>
          </div>
        </div>
      </div>
      <TransformTriangle />
      <h2 style={style.text}>Image Effect Canvas Test</h2>
      <CanvasImageEffect />
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
