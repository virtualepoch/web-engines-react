import "./cube.css";

export default function Cube() {
  return (
    <>
      <div className="cube-container">
        <div className="cube-2-wrapper">
          <div className="cube-2" onClick="spinCube()">
            <div className="cube-2-front">tap/click here</div>
            <div className="cube-2-right"></div>
            <div className="cube-2-back"></div>
            <div className="cube-2-left"></div>
            <div className="cube-2-top"></div>
            <div className="cube-2-bottom"></div>
            <div className="cube-2-shadow"></div>
            <div className="small-cube">
              <div className="small-front"></div>
              <div className="small-right"></div>
              <div className="small-back"></div>
              <div className="small-left"></div>
              <div className="small-top"></div>
              <div className="small-bottom"></div>
            </div>
          </div>
          <div className="cube-2-floor"></div>
        </div>
      </div>
      <div class="cube-container">
        <div class="cube-3-wrapper">
          <div class="cube-3" onclick="spinTheTop()">
            <div class="cube-3-front">tap/click here</div>
            <div class="cube-3-right"></div>
            <div class="cube-3-back"></div>
            <div class="cube-3-left"></div>
            <div class="cube-3-top"></div>
            <div class="cube-3-bottom"></div>
            <div class="cube-3-shadow"></div>
            <div class="spinning-top">
              <div class="right"></div>
              <div class="front"></div>
              <div class="back"></div>
              <div class="left"></div>
              <div class="top"></div>
              <div class="bottom"></div>
            </div>
          </div>
          <div class="cube-3-floor"></div>
        </div>
      </div>
    </>
  );
}
