import React, { useRef, useEffect } from "react";
import "./js.css";
import RainCanvasDark from "../../components/RainCanvasDark";
import RainCanvasLight from "../../components/RainCanvasLight";

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

  const rainCanvasContainerDark = useRef(null);
  const rainCanvasContainerLight = useRef(null);
  const javascriptPage = useRef(null);

  function startJSTut() {
    rainCanvasContainerDark.current.classList.add("load");
    rainCanvasContainerLight.current.classList.add("load");
    javascriptPage.current.classList.add("sub-heading-part");
    javascriptPage.current.classList.add("display-card-1-initial");
  }
  function backToLanding() {
    rainCanvasContainerDark.current.classList.remove("load");
    rainCanvasContainerLight.current.classList.remove("load");
    javascriptPage.current.classList.remove("display-card-1");
    javascriptPage.current.classList.remove("display-card-1-initial");
    javascriptPage.current.classList.remove("sub-heading-part");
  }
  function displayCard1() {
    javascriptPage.current.classList.add("display-card-1");
    javascriptPage.current.classList.remove("display-card-2");
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
  function changeTheme() {
    javascriptPage.current.classList.toggle("theme-light");
    rainCanvasContainerDark.current.classList.toggle("remove");
    rainCanvasContainerLight.current.classList.toggle("add");
  }

  const jsCard1 = useRef(null);
  const card1p4 = useRef(null);
  const card1p5 = useRef(null);
  let hue1 = 0;
  let hue2 = 180;
  let card1BgColor;
  let card1FontColor;
  let randomNum = Math.random() * 360;

  function changeColor() {
    card1BgColor = "hsl(" + (hue1 += randomNum) + ", 100%, 50%)";
    card1FontColor = "hsl(" + (hue2 += randomNum) + ", 100%, 50%)";
    jsCard1.current.style.backgroundColor = card1BgColor;
    jsCard1.current.style.color = card1FontColor;
    jsCard1.current.classList.add("color-change");
    card1p4.current.style.opacity = 1;
    card1p5.current.style.opacity = 1;
  }

  return (
    <div className="javascript-page" ref={javascriptPage}>
      <h1 className="heading" ref={heading}>
        JavaScript Tutorials
      </h1>
      <h2 className="sub-heading sub-heading-1">Let's add some functionality to our web apps with JavaScript!</h2>
      <h2 className="sub-heading sub-heading-2">You can continue with this fun and interactive tutorial or jump straight to a tut of your choice from the JavaScript drop-down menu.</h2>
      <div className="action-btn-container" ref={actionBtnContainer}>
        <div className="action-btn action-btn-1" onClick={startJSTut}>
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
      <div className="dark-light-theme-btn" onClick={changeTheme}></div>
      <div className="rain-canvas-container-dark" ref={rainCanvasContainerDark}>
        <RainCanvasDark />
      </div>
      <div className="rain-canvas-container-light" ref={rainCanvasContainerLight}>
        <RainCanvasLight />
      </div>
      <div className="javascript-card-1" onClick={changeColor} ref={jsCard1}>
        <p className="card-1-p card1p1">CARD 1 - JavaScript is used to make a web page interactive. It takes in user inputs and interactions and makes computations and changes based on the input. According to Wikipedia, as of 2022, JavaScript is the dominant client-side language with 98% of ALL websites using it.</p>
        <p className="card-1-p card1p2">Every single button you tapped or clicked on this website used JavaScript to take in that interaction or input and make changes to the visual content displayed.</p>
        <p className="card-1-p card1p3">For example, tap or click anywhere on this white card.</p>
        <p className="card-1-p card1p4" ref={card1p4}>
          JavaScript just did that!
        </p>
        <p className="card-1-p card1p5" ref={card1p5}>So what is happening here? This is a simple JavaScript function that tells JavaScript to generate a random number for a color hue and then apply it to the background color and text color every time the user clicks or taps the page.<br></br><br></br> Pretty cool!</p>
      </div>
      <div className="javascript-card-2">
        <p>CARD 2 - We'd like to start off with a tutorial on how to set up a navigation menu button that when clicked causes a menu box to slide onto the screen.<br></br><br></br>These are extremely important for websites viewed on mobile devices to ensure easy navigation of a site. For instance, this website uses a menu button and menu box when viewed on a mobile device or tablet. They are also helpful organizational tools for large sites with dozens or even hundreds of links.<br></br><br></br> It's fairly simple to set up a button for a nav menu. You simply have to know how to position the menu off screen and then when the user clicks the button you use JavaScript to change the position of the menu box.</p>
      </div>
      <div className="javascript-card-3">
        <p>CARD 3 -Tap pr Click the color box below and we'll demonstrate how JavaScript works.</p>
      </div>
    </div>
  );
}
