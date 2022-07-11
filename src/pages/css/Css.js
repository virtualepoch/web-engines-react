import BallScene from "../../components/ball-scene/BallScene";
import { Link } from "react-router-dom";
import BorderEffect from "./components/BorderEffect";
import Cube from "./components/Cube";
import "./css.css";

export default function Css() {
  return (
    <div className="css-page">
      <h1 className="heading">Welcome to the CSS Section</h1>
      <BallScene />
      <div className="main-content">
        <h1>The following tutorials can all be completed with plain old CSS.</h1>
        <section className="effects-section">
          <h1>Learn to create border or text effects</h1>
          <p>Click either box to enter the tutorial</p>
          <div className="effects-container">
            <div className="border-effect-container">
              <Link className="border-effect-link" to={"/css/border-effect-tut"}>
                <BorderEffect />
              </Link>
            </div>
            <div className="or-text-box">-or-</div>
            <Link className="text-wave-effect-container" to={"/css/text-wave-effect-tut"}>
              <h2>text effects</h2>
            </Link>
          </div>
        </section>
        <section className="effects-section">
          <h1>Learn to Create 3-D animations</h1>
          <p>Tap or click on the cubes below to start their animation.</p>
          <Cube />
        </section>
      </div>
    </div>
  );
}
