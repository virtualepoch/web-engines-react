import "../../components/pyramid-scene/pyramid-scene.css";
export default function PyramicScene() {
  return (
    <div className="pyramid-container">
      <div className="pyramid">
        <div className="front"></div>
        <div className="right"></div>
        <div className="back"></div>
        <div className="left"></div>
      </div>
      <div className="floor"></div>
    </div>
  );
}
