import React, { useRef, useEffect } from "react";
import "./js.css";
import RainCanvas from "../../components/RainCanvas";

export default function Js() {
  const heading = useRef(null);
  const textBox1 = useRef(null);
  const textBox2 = useRef(null);
  const actionBtnContainer = useRef(null);

  useEffect(() => {
    heading.current.classList.add("load");
    actionBtnContainer.current.classList.add("load");

    const phrase1 = "Let's add some functionality to our web apps with JavaScript!";
    const phrase2 = "You can continue with this fun and interactive tutorial or jump straight to a tut of your choice in the JavaScript drop-down menu.";
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
      setTimeout(typePhrase1, 25);
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
      setTimeout(typePhrase2, 25);
    }
    setTimeout(function () {
      typePhrase2();
    }, 4500);
  }, []);

  return (
    <div className="javascript-page">
      <h1 className="heading" ref={heading}>
        JavaScript Tutorials
      </h1>
      <h2 className="sub-heading" ref={textBox1}></h2>
      <h2 className="sub-heading" ref={textBox2}></h2>
      <div className="action-btn-container" ref={actionBtnContainer}>
        <div className="action-btn">
          ARE YOU READY!
        </div>
      </div>
      <RainCanvas />
    </div>
  );
}
