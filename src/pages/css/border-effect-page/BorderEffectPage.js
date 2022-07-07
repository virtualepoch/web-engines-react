import { useNavigate } from "react-router-dom";
import BorderEffect from "../BorderEffect";
import "./border-effect-page.css";

export default function BorderEffectPage() {
  const navigate = useNavigate();
  return (
    <div className="border-effect-page">
      <button className="back-btn" onClick={() => navigate(-1)}>&lt;BACK</button>
      <h1>CSS Border Effect</h1>
      <BorderEffect />
      <p>Here we will walk you through all the code needed to create this border effect. This is done using CSS pseudo-classes. If you'd prefer to just download the code you can do that here.</p>
      <p>This border effect box is only made up of two &lt;div&gt; elements. First is the wrapper &lt;div&gt; that is mainly used to create an outer border so that the effect is outlined better.</p>
      <pre className="html-example">{`<div class="border-effect-wrapper"></div>`}</pre>
      <p>Second, there is a &lt;div&gt; for the box itself.</p>
      <pre className="html-example">
        {`<div class="border-effect-wrapper">
    <div class="border-effect-box"</div>
</div>`}
      </pre>
      <p>Everything else is done with CSS. So, we'll start by styling the wrapper and box.</p>
      <pre className="html-example">
        {`.border-effect-wrapper {
    width: fit-content;
    border: 1px solid;
    border-radius: 6px;
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
      <p>Now comes the fun part— using CSS pseudo-classes. Just a reminder— a pseudo-class basically duplicates your element where you can then make any changes to that duplicates individual styling. It's very useful if you need to layer things on your page.</p>
      <pre className="html-example">
        {`.border-effect-box::before {
    content: "";
    width: 200%;
    height: 400%;
    position: absolute;
    left: -50%;
    top: -150%;
    background: conic-gradient( blue, aqua);
    animation: rotate 4s infinite linear;       
}`}
      </pre>
      <p>The styling above is for the box that will be behind everything. The coolest part about this whole thing is that this element is inside the 'border-effect-box' and we've given that element a style of 'overflow: hidden', we will then only see it inside the 'border-effect-box'.</p>
      <p>We then have a simple animation we add using the CSS at-rule statement '@keyframes'.</p>
      <pre className="html-example">
        {`@keyframes rotate {
    to {
      transform: rotate(360deg);
    }
}`}
      </pre>
      <p>All that's left is to add the other pseudo-class for the box that will be on top of everything.</p>
      <pre className="html-example">
        {`.border-effect-box::after {
    content: "Learn how to add border effects";
    width: 208px;
    height: 84px;
    position: relative;
    top: 2px;
    left: 2px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font: 20px sans-serif;
    color: white;
    letter-spacing: 2px;
    text-align: center;
    background: radial-gradient(blue, black);       
}`}
      </pre>
      <p>There you have it. This is just one example of the interesting things you can accomplish with just a few lines of CSS.</p>
    </div>
  );
}
