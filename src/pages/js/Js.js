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

  const rainCanvasContainer = useRef(null);
  const javascriptPage = useRef(null);
  const jsSection1 = useRef(null);
  const jsSection2 = useRef(null);

  function changeAnim() {
    rainCanvasContainer.current.classList.add("load");
    javascriptPage.current.classList.add("load");
  }
  function changeAnimBack() {
    rainCanvasContainer.current.classList.remove("load");
    javascriptPage.current.classList.remove("load");
    jsSection2.current.classList.remove("open");
    javascriptPage.current.classList.remove("act-btn-3");
  }
  function moveForward() {
    jsSection1.current.classList.add("clear");
    jsSection2.current.classList.add("open");
    javascriptPage.current.classList.add("act-btn-3");
  }

  return (
    <div className="javascript-page" ref={javascriptPage}>
      <h1 className="heading" ref={heading}>
        JavaScript Tutorials
      </h1>
      <h2 className="sub-heading sub-heading-1">Let's add some functionality to our web apps with JavaScript!</h2>
      <h2 className="sub-heading sub-heading-2">You can continue with this fun and interactive tutorial or jump straight to a tut of your choice in the JavaScript drop-down menu.</h2>
      <div className="action-btn-container" ref={actionBtnContainer}>
        <div className="action-btn action-btn-1" onClick={changeAnim}>
          <p ref={textBox1}></p>
          <p ref={textBox2}></p>
          <p ref={textBox3}></p>
        </div>
        <div className="action-btn action-btn-2">
          <p className="action-btn-2-back" onClick={changeAnimBack}>
            Prev/
          </p>
          <p className="action-btn-2-forward" onClick={moveForward}>
            /Next
          </p>
        </div>
        <div className="action-btn action-btn-3" onClick={changeAnimBack}>
          BACK
        </div>
      </div>
      <div className="rain-canvas-container" ref={rainCanvasContainer}>
        <RainCanvas />
      </div>
      <div className="javascript-section-1" ref={jsSection1}>
        <p>JavaScript is used to make a web page interactive. It takes in user inputs and interactions and makes computations and changes based on the input.</p>
      </div>
      <div className="javascript-section-2" ref={jsSection2}>
        <p>One of the most common things JavaScript is used for is to make things on a webpage change when a user taps or clicks objects on the screen.</p>
      </div>
    </div>
  );
}
