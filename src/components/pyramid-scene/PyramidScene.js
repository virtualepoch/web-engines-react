import "../../components/pyramid-scene/pyramid-scene.css";
import "../../components/pyramid-scene/pyramid-birds.css";

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

      <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
      </div>

      <div class="bird-container bird-container--two">
        <div class="bird bird--two"></div>
      </div>

      <div class="bird-container bird-container--three">
        <div class="bird bird--three"></div>
      </div>

      <div class="bird-container bird-container--four">
        <div class="bird bird--four"></div>
      </div>

    </div>
  );
}
