import { Link } from "react-router-dom";
import { BorderEffect } from "./components/BorderEffect";
import { MixBlendMode } from "./components/MixBlendMode";
import { Ripples } from "./components/Ripples";
import { ColorCube } from "./components/ColorCube";
import { SpinningTop } from "./components/SpinningTop";
import { SectionDivider } from "../../components/SectionDivider";
import "./css-page.css";

export function CssPage() {
  return (
    <div className="page">
      <h1 className="page-heading">CSS Tutorials</h1>
      <div className="page-content">
        <h1>The following tutorials only require basic knowledge of HTML & CSS.</h1>
        <section className="effects-section">
          <h1>Learn to Style Border and Text Effects with CSS</h1>
          <p>Tap/Click boxes below to enter the tutorials.</p>
          <div className="effects-container">
            <div className="border-effect-container">
              <Link to={"/css/border-effect-tut"}>
                <BorderEffect />
              </Link>
            </div>
            <Link className="wavy-text-effect-container" to={"/css/wavy-text-effect-tut"}>
              <h2>wavy text</h2>
            </Link>
          </div>
          <div className="effects-container">
            <Link to={"/css/mix-blend-mode-tut"}>
              <MixBlendMode />
            </Link>
            <Link to={"/css/mix-blend-mode-tut"}>
              <Ripples />
            </Link>
          </div>
        </section>
        <section className="effects-section">
          <h1>Learn to Style 3D Animations</h1>
          <p>Tap or click on the 3D cube or top below to toggle their animations. PLEASE NOTE: Multiple complex animations running at the same time can slow the page down and make scrolling choppy on some devices.</p>
          <div className="effects-container">
            <div className="tut-link-container">
              <ColorCube />
              <Link className="tut-link" to={"/css/cube-tut"}>
                <h1>How to Style a Rotating 3D Cube with CSS</h1>
              </Link>
            </div>
            <div className="tut-link-container">
              <SpinningTop />
              <Link className="tut-link" to={"/css/top-spin-tut"}>
                <h1>How to Style a Rotating 3D Top with CSS</h1>
              </Link>
            </div>
          </div>
        </section>
        <SectionDivider />
      </div>
    </div>
  );
}
