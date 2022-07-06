import "./css.css";

export default function Css() {
  return (
    <div className="css-page">
      <h1 className="heading">Welcome to the CSS Section</h1>
      <div className="load-message">Wait for it...</div>
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
      <p className="heading-p-box">Here we would actually like to demonstrate what can be done solely with CSS. Then we will explain why you might need JavaScript in certain situations.</p>
    </div>
  );
}
