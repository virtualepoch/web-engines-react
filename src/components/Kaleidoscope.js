import "./components.css";
export default function Kaleidoscope() {
  return (
    <div className="kaleidoscope-container">
      <div className="kaleidoscope-box">
          <div className="kaleidoscope"></div>
          <div className="kaleidoscope-bubble"></div>
          <div className="kaleidoscope duplicate"></div>
          <div className="kaleidoscope-bubble duplicate"></div>
      </div>
    </div>
  );
}
