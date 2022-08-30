import React, { useRef, useEffect } from "react";
import "./js.css";

export default function Js() {
  const textBox1 = useRef(null);
  const textBox2 = useRef(null);

  useEffect(() => {
    const phrase1 = "Hello";
    const phrase2 = "Universe";
    let i = 0;
    let j = 0;
    let text1 = [];
    let text2 = [];

    function typePhrase1() {
      if (i < phrase1.length) {
        text1.push(phrase1[i]);
        i++;
      }
      textBox1.current.innerHTML = text1.join("");
      setTimeout(typePhrase1, 250);
    }
    typePhrase1();

    function typePhrase2() {
      if (j < phrase2.length) {
        text2.push(phrase2[j]);
        j++;
      }
      textBox2.current.innerHTML = text2.join("");
      setTimeout(typePhrase2, 250);
    }
    setTimeout(function () {
      typePhrase2();
    }, 1250);
  }, []);

  return (
    <div className="javascript-page">
      <h1 className="heading">JavaScript Tutorials</h1>
      <p>This section is currently being updated. Thanks for your patience.</p>
      <div className="typed-text-box">
        TEXT BOX 1<h2 className="typed-text" ref={textBox1}></h2>
      </div>
      <div className="typed-text-box">
        TEXT BOX 2<h2 className="typed-text" ref={textBox2}></h2>
      </div>
      <div className="transform-origin-box">
        <div className="transform-triangle">
          <div className="front"></div>
          <div className="front-small small"></div>
          <div className="back"></div>
          <div className="back-small small"></div>
          <div className="left"></div>
          <div className="left-small small"></div>
          <div className="right"></div>
          <div className="right-small small"></div>
        </div>
      </div>
    </div>
  );
}
