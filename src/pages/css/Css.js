// import PyramidScene from "../../components/pyramid-scene/PyramidScene";
import BalloonFloat from "../../components/balloon-float/BalloonFloat";
import { Link } from "react-router-dom";
import BorderEffect from "./components/BorderEffect";
import ColorCube from "./components/ColorCube";
import SpinningTop from "./components/SpinningTop";
import Footer from "../../components/Footer";
import "./css.css";
import Kaleidoscope from "../../components/Kaleidoscope";

export default function Css() {
  return (
    <div className="css-page">
      <h1 className="heading css-heading">CSS Tutorials</h1>
      {/* <PyramidScene /> */}
      {/* <BalloonFloat /> */}
      <div className="css-heading-testing">
        <div className="css-heading-testing-bg bg-1"></div>
        <div className="css-heading-testing-bg bg-2"></div>
        <div className="css-bird-container">
          <div className="css-bird"></div>
        </div>
      </div>
      <div className="main-content">
        <h1>The following tutorials can all be completed with plain old CSS.</h1>
        <section className="effects-section">
          <h1>Learn to create border or text effects</h1>
          <p>Click either box to enter the tutorial.</p>
          <div className="effects-container">
            <div className="border-effect-container">
              <Link className="border-effect-link" to={"/css/border-effect-tut"}>
                <BorderEffect />
              </Link>
            </div>
            <div className="or-text-box">-OR-</div>
            <Link className="text-wave-effect-container" to={"/css/text-wave-effect-tut"}>
              <h2>text effects</h2>
            </Link>
          </div>
        </section>
        <section className="effects-section">
          <h1>Learn to Create 3-D animations</h1>
          <p>Tap or click on the 3-D cube or top below to toggle their animations. PLEASE NOTE: Multiple complex animations running at the same time can slow the page down and make scrolling choppy on some devices.</p>
          <div className="cube-effects-container">
            <div className="column column-1">
              <ColorCube />
              <Link to={"/css/cube-tut"}>
                <p>ENTER THE CUBE TUTORIAL</p>
              </Link>
            </div>
            <div className="column">
              <SpinningTop />
              <Link to={"/css/top-spin-tut"}>
                <p>ENTER THE SPINNING TOP TUTORIAL</p>
              </Link>
            </div>
          </div>
          <Kaleidoscope />
          <div className="image-test test-1">640</div>
          <div className="image-test test-2">1000</div>
          <div className="image-test test-3">1280</div>
          <div className="image-test test-4">1400</div>
          <div className="image-test test-5">1920</div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
