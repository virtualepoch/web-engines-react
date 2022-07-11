import "./cube-top.css";

export default function SpinningTop() {
  return (
    <div className="spinning-top-container">
      <div className="spinning-top-wrapper">
        <div className="spinning-top">
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
