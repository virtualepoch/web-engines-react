import "./cube-top.css";

export default function ColorCube() {
  return (
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
  );
}
