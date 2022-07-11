import "./cube.css";

export default function Cube() {
  return (
    <>
      <div className="cube-container">
        <div className="color-cube-wrapper">
          <div className="color-cube">
            <div className="front"></div>
            <div className="right"></div>
            <div className="back"></div>
            <div className="left"></div>
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="bottom shadow"></div>
          </div>
        </div>
      </div>
      <div className="cube-container">
        <div className="cube-3-wrapper">
          <div className="cube-3" onclick="spinTheTop()">
            <div className="cube-3-front">tap/click here</div>
            <div className="cube-3-right"></div>
            <div className="cube-3-back"></div>
            <div className="cube-3-left"></div>
            <div className="cube-3-top"></div>
            <div className="cube-3-bottom"></div>
            <div className="cube-3-shadow"></div>
            <div className="spinning-top">
              <div className="right"></div>
              <div className="front"></div>
              <div className="back"></div>
              <div className="left"></div>
              <div className="top"></div>
              <div className="bottom"></div>
            </div>
          </div>
          <div className="cube-3-floor"></div>
        </div>
      </div>
    </>
  );
}
