import React, { useRef, useEffect } from "react";
import "./js.css";
import RainCanvasDark from "../../components/RainCanvasDark";
import RainCanvasLight from "../../components/RainCanvasLight";
import { AllCodeContainer } from "../js/AllCodeContainer";

export function Js() {
  const codeEx1 = `<body>
  <header>

    <div class="nav-menu-btn" onclick="openCloseMainNav()">
      <div class="nav-menu-btn-bars"></div>
    </div>

    <div class="main-nav-menu">
      <p class="link">Page Link</p>
      <p class="link">Page Link</p>
      <p class="link">Page Link</p>
    </div> 

  </header>
</body>`;

  const codeEx2 = `code example 2`;
  const codeEx3 = `code example 3`;
  const codeEx4 = `code example 4`;
  const codeEx5 = `code example 5`;

  var allCodeContainerRef = useRef(null);
  function openCloseAllCode() {
    var allCodeContainer = allCodeContainerRef.current;
    allCodeContainer.classList.toggle("open");
  }

  const copyBtn1Ref = useRef(null);
  function copyCodeEx1() {
    const copyBtn1 = copyBtn1Ref.current;
    navigator.clipboard.writeText(codeEx1);
    copyBtn1.classList.add("clicked");
  }
  const copyBtn2Ref = useRef(null);
  function copyCodeEx2() {
    const copyBtn2 = copyBtn2Ref.current;
    navigator.clipboard.writeText(codeEx2);
    copyBtn2.classList.add("clicked");
  }
  const copyBtn3Ref = useRef(null);
  function copyCodeEx3() {
    const copyBtn3 = copyBtn3Ref.current;
    navigator.clipboard.writeText(codeEx3);
    copyBtn3.classList.add("clicked");
  }
  const copyBtn4Ref = useRef(null);
  function copyCodeEx4() {
    const copyBtn4 = copyBtn4Ref.current;
    navigator.clipboard.writeText(codeEx4);
    copyBtn4.classList.add("clicked");
  }
  const copyBtn5 = useRef(null);
  function copyCodeEx5() {
    navigator.clipboard.writeText(codeEx5);
    copyBtn5.current.classList.add("clicked");
  }

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
        <p className="card-1-p card1p1">JavaScript is used for many different things in web development. One common and beginner friendly thing it's used for is to make a web page interactive. It's able to take in user inputs and interactions(i.e. clicks, taps, swipes) and make computations and changes based on the input. According to Wikipedia, as of 2022, JavaScript is the dominant client-side language with 98% of ALL websites using it.</p>
        <p className="card-1-p card1p2">Every single button you tapped or clicked on this website used JavaScript to take in that interaction or input and make changes to the visual content displayed.</p>
        <p className="card-1-p card1p3">For example, tap or click anywhere on this white card.</p>
        <p className="card-1-p card1p4" ref={card1p4}>
          JavaScript just did that!
        </p>
        <p className="card-1-p card1p5" ref={card1p5}>
          So what is happening here? This is a simple JavaScript function that tells JavaScript to generate a random number for a color hue and then apply it to the background color and text color every time the user clicks or taps the page.<br></br>
          <br></br> Pretty cool!
        </p>
      </div>
      <div className="javascript-card-2">
        <p>
          We'd like to start off with a tutorial on how to set up a navigation menu button that when clicked causes a menu box to slide onto the screen.<br></br>
          <br></br>These are extremely important for websites viewed on mobile devices to ensure easy navigation of a site. For instance, this website uses a menu button and menu box when viewed on a mobile device or tablet. They are also helpful organizational tools for large sites with dozens or even hundreds of links.<br></br>
          <br></br> It's fairly simple to set up a button for a nav menu. You simply have to know how to position the menu off screen and then when the user clicks the button you use JavaScript to change the position of the menu box.
        </p>
      </div>
      <div className="javascript-card-3">
        <p>
          So we will start by creating our navigation button on our header. As with all our tutorials you can copy all the code for this tutorial{" "}
          <div className="open-all-code" onClick={openCloseAllCode}>
            here
          </div>
          .
        </p>
        <div className="code-example-container all-code-container" ref={allCodeContainerRef}>
          <button className="close-all-code" onClick={openCloseAllCode}>
            X
          </button>
          <AllCodeContainer />
        </div>
        <p>First, we will add all the HTML elements we need and give them each individual class names.</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx1}</pre>
          <button className="copy-code-btn" ref={copyBtn1Ref} onClick={copyCodeEx1}></button>
        </div>
        <p>Everything else is done with CSS. Step #1</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx2}</pre>
          <button className="copy-code-btn" ref={copyBtn2Ref} onClick={copyCodeEx2}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
        </div>
        <p>Step #2</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx3}</pre>
          <button className="copy-code-btn" ref={copyBtn3Ref} onClick={copyCodeEx3}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
        </div>
        <p>Step #3</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx4}</pre>
          <button className="copy-code-btn" ref={copyBtn4Ref} onClick={copyCodeEx4}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
        </div>
        <p>Step #4</p>
        <div className="code-example-container">
          <pre className="code-example">{codeEx5}</pre>
          <button className="copy-code-btn" ref={copyBtn5} onClick={copyCodeEx5}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
        </div>
        <p>There you have it. A useful example of what can be done with the power of JavaScript.</p>
      </div>
    </div>
  );
}
