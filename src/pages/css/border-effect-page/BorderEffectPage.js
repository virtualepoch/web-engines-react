import BorderEffect from "../BorderEffect";
import "./border-effect-page.css";

export default function BorderEffectPage() {
  return (
    <div className="border-effect-page">
      <h1>CSS Border Effect</h1>
      <BorderEffect />
      <p>Here we will walk you through all the code needed to create this border effect. This is done using CSS pseudo-classes. If you'd prefer just download the code then that can be done here. </p>
      <p>This border effect box is only made up of two divs. First, there's a wrapper div that is mainly used to create an outer border so that the effect is outlined better.</p>
      <pre className="html-example">{`<div class="border-effect-wrapper"></div>`}</pre>
      <p>Second, there is a div for the box itself.</p>
      <pre className="html-example">
        {`<div class="border-effect-wrapper">
    <div class="border-effect-box"</div>
</div>`}
      </pre>
      <p>Everything else is done with CSS. So, we'll start by styling the wrapper and box.</p>
      <pre className="html-example">
        {`.border-effect-wrapper {
    border: 1px solid;
    border-radius: 5px;
}
.border-effect-box {
    width: 212px;
    height: 88px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 3px 3px rgba(0, 0, 0, 0.4);
}`}
      </pre>
    </div>
  );
}
