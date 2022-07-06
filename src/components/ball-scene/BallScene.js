import "./ball-scene.css";

export default function BallScene() {
  return (
    <div className="scene-container">
      <div className="scene">
        <div className="ball"></div>
        <div className="cube">
          <div className="front"></div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top"></div>
          <div className="ball-shadow"></div>
          <div className="bottom"></div>
        </div>
        <div className="scene-ball-2"></div>
        <div className="scene-cube-2">
          <div className="front"></div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top"></div>
          <div className="ball-shadow"></div>
          <div className="bottom"></div>
        </div>
        <div className="floor"></div>
      </div>
    </div>
  );
}
