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

  function displayCard1() {
    rainCanvasContainer.current.classList.add("load");
    javascriptPage.current.classList.add("sub-heading-part");
    javascriptPage.current.classList.add("display-card-1");
    javascriptPage.current.classList.remove("display-card-2");
  }
  function backToLanding() {
    rainCanvasContainer.current.classList.remove("load");
    javascriptPage.current.classList.remove("display-card-1");
    javascriptPage.current.classList.remove("sub-heading-part");

  }
  function displayCard2() {
    javascriptPage.current.classList.remove("display-card-1");
    javascriptPage.current.classList.remove("display-card-3");
    javascriptPage.current.classList.add("display-card-2");
  }
  function displayCard3() {
    javascriptPage.current.classList.remove("display-card-2");
    javascriptPage.current.classList.add("display-card-3");
  }

  return (
    <div className="javascript-page" ref={javascriptPage}>
      <h1 className="heading" ref={heading}>
        JavaScript Tutorials
      </h1>
      <h2 className="sub-heading sub-heading-1">Let's add some functionality to our web apps with JavaScript!</h2>
      <h2 className="sub-heading sub-heading-2">You can continue with this fun and interactive tutorial or jump straight to a tut of your choice from the JavaScript drop-down menu.</h2>
      <div className="action-btn-container" ref={actionBtnContainer}>
        <div className="action-btn action-btn-1" onClick={displayCard1}>
          <p ref={textBox1}></p>
          <p ref={textBox2}></p>
          <p ref={textBox3}></p>
        </div>
        <div className="action-btn action-btn-2">
          <p className="action-btn-2-back" onClick={backToLanding}>
            Prev/
          </p>
          <p className="action-btn-2-forward" onClick={displayCard2}>
            /Next
          </p>
        </div>
        <div className="action-btn action-btn-3">
          <p className="action-btn-3-back" onClick={displayCard1}>
            Prev/
          </p>
          <p className="action-btn-3-forward" onClick={displayCard3}>
            /Next
          </p>
        </div>
        <div className="action-btn action-btn-4" onClick={displayCard2}>
          BACK
        </div>
      </div>
      <div className="rain-canvas-container" ref={rainCanvasContainer}>
        <RainCanvas />
      </div>
      <div className="javascript-card-1">
        <p>CARD 1 -JavaScript is used to make a web page interactive. It takes in user inputs and interactions and makes computations and changes based on the input.</p>
      </div>
      <div className="javascript-card-2">
        <p>CARD 2 -One of the most common things JavaScript is used for is to make things on a webpage change when a user taps or clicks objects on the screen.</p>
      </div>
      <div className="javascript-card-3">
        <p>CARD 3 -Tap pr Click the color box below and we'll demonstrate how JavaScript works.</p>
      </div>
    </div>
  );
}
