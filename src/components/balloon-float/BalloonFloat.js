import "./balloon-float.css";
import "../../components/pyramid-scene/pyramid-birds.css";
import LoadingOverlay from "../LoadingOverlay";

export default function BalloonFloat() {
  return (
    <div className="balloon-float-container">
      {/* <LoadingOverlay /> */}
      <div className="balloon">
        <div className="balloon-reflection"></div>
      </div>

      <div class="bird-container one">
        <div class="bird one"></div>
        <div className="bird one reflection"></div>
      </div>

      <div class="bird-container two">
        <div class="bird two"></div>
        <div className="bird two reflection"></div>
      </div>

      <div class="bird-container three">
        <div class="bird three"></div>
        <div className="bird three reflection"></div>
      </div>

      <div class="bird-container four">
        <div class="bird four"></div>
        <div className="bird four reflection"></div>
      </div>

      {/* <div class="bird-container comic">
        <div class="bird comic"></div>
      </div> */}
    </div>
  );
}
