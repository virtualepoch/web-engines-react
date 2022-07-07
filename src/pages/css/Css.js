import { Link } from "react-router-dom";
import BallScene from "../../components/ball-scene/BallScene";
import BorderEffect from "./BorderEffect";
import "./css.css";

export default function Css() {
  return (
    <div className="css-page">
      <h1 className="heading">Welcome to the CSS Section</h1>
      {/* <div className="load-message"></div> */}
      <BallScene />
      <p className="heading-p-box">Here we will demonstrate what can be done solely with CSS. Then we will explain why you might need JavaScript in various situations.</p>
      <div className="text-effects">
        <h1>Learn to create border or text effects</h1>
        <p>Click either box to enter the tutorial</p>
        <div className="effects-container">
          <div className="border-effect-container">
            <Link className="border-effect-link" to="/css/border-effect">
              <BorderEffect />
            </Link>
          </div>
          <p>-or-</p>
          <div className="wave-text-container">
            <h2>text effects</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
