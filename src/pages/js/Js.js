import React, { useRef, useEffect } from "react";
import "./js.css";
import RainCanvas from "../../components/RainCanvas";

export default function Js() {
  const heading = useRef(null);
  const textBox1 = useRef(null);
  const textBox2 = useRef(null);
  const textBox3 = useRef(null);
  const actionBtnContainer = useRef(null);

  useEffect(() => {
    heading.current.classList.add("load");
    actionBtnContainer.current.classList.add("load");

    const phrase1 = "ARE— ";
    const phrase2 = "YOU— ";
    const phrase3 = "READY!";
    let i = 0;
    let j = 0;
    let k = 0;
    let text1 = [];
    let text2 = [];
    let text3 = [];

    function typePhrase1() {
      if (i < phrase1.length) {
        text1.push(phrase1[i]);
        i++;
      }
      textBox1.current.innerHTML = text1.join("");
      setTimeout(typePhrase1, 30);
    }
    setTimeout(function () {
      typePhrase1();
    }, 2000);

    function typePhrase2() {
      if (j < phrase2.length) {
        text2.push(phrase2[j]);
        j++;
      }
      textBox2.current.innerHTML = text2.join("");
      setTimeout(typePhrase2, 30);
    }
    setTimeout(function () {
      typePhrase2();
    }, 2500);

    function typePhrase3() {
      if (k < phrase3.length) {
        text3.push(phrase3[k]);
        k++;
      }
      textBox3.current.innerHTML = text3.join("");
      setTimeout(typePhrase3, 30);
    }
    setTimeout(function () {
      typePhrase3();
    }, 3000);
  }, []);

  return (
    <div className="javascript-page">
      <h1 className="heading" ref={heading}>
        JavaScript Tutorials
      </h1>
      <div className="border-effect-box-js"></div>
      <h2 className="sub-heading">Let's add some functionality to our web apps with JavaScript!</h2>
      <h2 className="sub-heading">You can continue with this fun and interactive tutorial or jump straight to a tut of your choice in the JavaScript drop-down menu.</h2>
      <div className="action-btn-container" ref={actionBtnContainer}>
        <div className="action-btn">
          <p ref={textBox1}></p>
          <p ref={textBox2}></p>
          <p ref={textBox3}></p>
        </div>
      </div>
      <RainCanvas />
    </div>
  );
}
