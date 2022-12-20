import "./components.css";
export default function Kaleidoscope() {
  return (
    <div className="kaleidoscope-container">
      <div className="kaleidoscope-container-bg"></div>
      <div className="kaleidoscope-box">
        <div className="kaleidoscope"><div className="kaleidoscope-child"></div></div>
        <div className="kaleidoscope-bubble"></div>
        <div className="kaleidoscope duplicate"><div className="kaleidoscope-child child-2"></div></div>
        <div className="kaleidoscope-bubble duplicate"></div>
        <div className="kaleidoscope duplicate-2"><div className="kaleidoscope-child child-3"></div></div>
        <div className="kaleidoscope-bubble duplicate-2"></div>
      </div>
    </div>
  );
}
