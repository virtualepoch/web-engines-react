import "./ball-scene.css";

export default function BallScene() {
  return (
    <div className="ball-scene-container">
      <div className="ball-scene">
        <div className="ball"></div>
        <div className="cube">
          <div className="front"></div>
          <div className="left"></div>
          <div className="top"></div>
          <div className="ball-shadow"></div>
        </div>
        <div className="floor"></div>
      </div>
    </div>
  );
}
