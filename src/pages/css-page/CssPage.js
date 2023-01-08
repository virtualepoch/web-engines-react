import { Link } from "react-router-dom";
import { BorderEffect } from "./components/BorderEffect";
import { ColorCube } from "./components/ColorCube";
import { SpinningTop } from "./components/SpinningTop";
import { Footer } from "../../components/Footer";
import "./css.css";
// import Kaleidoscope from "../../components/Kaleidoscope";
// import LoadingOverlay from "../../components/LoadingOverlay";
import { SectionDivider } from "../../components/SectionDivider";
import { SpriteScene } from "../../components/sprite-scene/SpriteScene";

export function CssPage() {
  return (
    <div className="page css-page">
      <h1 className="heading css-heading">CSS Tutorials</h1>
      {/* <PyramidScene /> */}
      {/* <BalloonFloat /> */}

      <div className="css-heading-testing">
        {/* <LoadingOverlay /> */}
        {/* <div className="css-heading-testing-bg bg-1"></div>
        <div className="css-heading-testing-bg bg-2"></div>
        <div className="css-heading-testing-bg bg-1 edit"></div>
        <div className="css-heading-testing-bg bg-2 edit"></div> */}
        {/* <div className="css-bird-container">
          <div className="css-bird"></div>
        </div> */}
        {/* <SpriteScene /> */}
      </div>
      <div className="main-content">
        <h1>The following tutorials only require basic knowledge of HTML & CSS.</h1>
        <section className="effects-section">
          <h1>Learn to Style Border and Text Effects with CSS</h1>
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
          <h1>Learn to Style 3D Animations</h1>
          <p>Tap or click on the 3D cube or top below to toggle their animations. PLEASE NOTE: Multiple complex animations running at the same time can slow the page down and make scrolling choppy on some devices.</p>
          <div className="cube-effects-container">
            <div className="column column-1">
              <ColorCube />
              <Link to={"/css/cube-tut"}>
                <h1>How to Style a Rotating 3D Cube with CSS</h1>
              </Link>
            </div>
            <div className="column">
              <SpinningTop />
              <Link to={"/css/top-spin-tut"}>
                <h1>How to Style a Rotating 3D Top with CSS</h1>
              </Link>
            </div>
          </div>
          {/* <Kaleidoscope /> */}
        </section>
        <SectionDivider />
        <Footer />
        <div className="credits-section">
          <p>Images used on this page are from:</p>
          <a href="">IMAGES INFO</a>
        </div>
      </div>
    </div>
  );
}
