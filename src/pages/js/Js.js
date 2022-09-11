import React, { useRef, useEffect } from "react";
import "./js.css";
import RainCanvas from "../../components/RainCanvas";

export default function Js() {
  const heading = useRef(null);
  const textContainer1 = useRef(null);
  const textContainer2 = useRef(null);
  const textContainer3 = useRef(null);
  const textBox1 = useRef(null);
  const textBox2 = useRef(null);
  const textBox3 = useRef(null);

  useEffect(() => {
    heading.current.classList.add("load");
    textContainer1.current.classList.add("load");
    textContainer2.current.classList.add("load");
    textContainer3.current.classList.add("load");

    const phrase1 = "Hello";
    const phrase2 = "Player 1";
    const phrase3 = "ARE YOU READY PLAYER ONE?";
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
      setTimeout(typePhrase1, 100);
    }
    setTimeout(function () {
      typePhrase1();
    }, 2600);

    function typePhrase2() {
      if (j < phrase2.length) {
        text2.push(phrase2[j]);
        j++;
      }
      textBox2.current.innerHTML = text2.join("");
      setTimeout(typePhrase2, 100);
    }
    setTimeout(function () {
      typePhrase2();
    }, 3600);
    function typePhrase3() {
      if (j < phrase3.length) {
        text3.push(phrase3[k]);
        k++;
      }
      textBox3.current.innerHTML = text3.join("");
      setTimeout(typePhrase3, 100);
    }
    setTimeout(function () {
      typePhrase3();
    }, 4850);
  }, []);

  return (
    <div className="javascript-page">
      <h1 className="heading" ref={heading}>
        JavaScript Tutorials
      </h1>
      <p className="sub-heading hero-text">Let's add some functionality to our web apps with JavaScript!</p>
      <div className="typed-text-box text-box-1" ref={textContainer1}>
        <h2 className="typed-text" ref={textBox1}></h2>
      </div>
      <div className="typed-text-box text-box-2" ref={textContainer2}>
        <h2 className="typed-text" ref={textBox2}></h2>
      </div>
      <div className="typed-text-box text-box-1 text-box-3" ref={textContainer3}>
        <h2 className="typed-text" ref={textBox3}></h2>
      </div>
      <RainCanvas />
    </div>
  );
}
