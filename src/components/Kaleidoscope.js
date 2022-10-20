import "./components.css";
export default function Kaleidoscope() {
  return (
    <div className="kaleidoscope-container">
      <div className="kaleidoscope-container-bg"></div>
      <div className="kaleidoscope-box">
        <div className="kaleidoscope"></div>
        <div className="kaleidoscope-bubble"></div>
        <div className="kaleidoscope duplicate"></div>
        <div className="kaleidoscope-bubble duplicate"></div>
        <div className="kaleidoscope duplicate-2"></div>
        <div className="kaleidoscope-bubble duplicate-2"></div>
      </div>
    </div>
  );
}
