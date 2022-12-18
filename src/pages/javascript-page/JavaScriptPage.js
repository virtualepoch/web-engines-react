import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./javascript.css";
import { RainCanvasLight } from "../../components/RainCanvasLight";
import { RainCanvasDark } from "../../components/RainCanvasDark";
import { PictureCubeEffect } from "../javascript-page/components/PictureCubeEffect";
import { Footer } from "../../components/Footer";
import { PictureCubeEffect2 } from "./components/PictureCubeEffect2";
import { SectionDivider } from "../../components/SectionDivider";

export function JavaScriptPage() {
  const heading = useRef(null);
  const themeBtnNote = useRef(null);

  useEffect(() => {
    heading.current.classList.add("load");

    function hideThemeBtnNote() {
      themeBtnNote.current.style.opacity = 0;
    }
    setTimeout(function () {
      hideThemeBtnNote();
    }, 4000);
  }, []);

  const javascriptPage = useRef(null);
  const rainCanvasContainerDark = useRef(null);
  const rainCanvasContainerLight = useRef(null);

  function changeTheme() {
    javascriptPage.current.classList.toggle("theme-dark");
    rainCanvasContainerLight.current.classList.toggle("remove");
    rainCanvasContainerDark.current.classList.toggle("add");
  }

  const jsColorCard = useRef(null);
  const card1p4 = useRef(null);
  const card1p5 = useRef(null);
  let hue1 = 0;
  let hue2 = 180;
  let jsColorCardBgColor;
  let jsColorCardFontColor;
  let randomNum = Math.random() * 360;

  function changeColor() {
    jsColorCardBgColor = "hsl(" + (hue1 += randomNum) + ", 100%, 50%)";
    jsColorCardFontColor = "hsl(" + (hue2 += randomNum) + ", 100%, 50%)";
    jsColorCard.current.style.backgroundColor = jsColorCardBgColor;
    jsColorCard.current.style.color = jsColorCardFontColor;
    jsColorCard.current.classList.add("color-change");
    card1p4.current.style.opacity = 1;
    card1p5.current.style.opacity = 1;
  }

  return (
    <div className="javascript-page" ref={javascriptPage}>
      <div className="rain-canvas-container-light" ref={rainCanvasContainerLight}>
        <RainCanvasLight />
      </div>
      <div className="rain-canvas-container-dark" ref={rainCanvasContainerDark}>
        <RainCanvasDark />
      </div>
      <div className="dark-light-theme-btn" onClick={changeTheme}>
        <div className="theme-btn-note" ref={themeBtnNote}>
          CHANGE COLOR THEME
        </div>
      </div>

      <div className="page-content">
        <div className="landing-content">
          <h1 className="heading" ref={heading}>
            JavaScript Tutorials
          </h1>
          <h2 className="sub-heading">Let's add some functionality to our web apps with JavaScript!</h2>
          <h2 className="sub-heading">Below you will find an introduction to JavaScript as well as tutorials covering some of its most common uses.</h2>
          <h2 className="sub-heading">Let's dive right in.</h2>
        </div>
        <p className="content-text">JavaScript is used for many different things in web development. One common and beginner friendly thing it's used for is to make a web page interactive. It's able to take in user inputs and interactions(i.e. clicks, taps, swipes) and make computations and changes based on the input. According to Wikipedia, as of 2022, JavaScript is the dominant client-side language with 98% of ALL websites using it.</p>
        <p className="content-text">Every single button you tapped or clicked on this website used JavaScript to take in that interaction or input and make changes to the visual content displayed.</p>
        <p className="content-text">For example, tap or click anywhere on the white card below.</p>
        <div className="javascript-color-card" onClick={changeColor} ref={jsColorCard}>
          <p className="content-text color-card-p-1" ref={card1p4}>
            JavaScript just did that!
          </p>
          <p className="content-text color-card-p-2" ref={card1p5}>
            So what is happening here? This is a simple JavaScript function that tells JavaScript to generate a random number for a color hue and then apply it to the background color and text color every time the user clicks or taps the page.<br></br>
            <br></br> Pretty cool!
          </p>
        </div>

        <h2 className="tutorial-heading">Below you will find some Useful JavaScript Tutorials</h2>
        <p className="content-text">
          We'd like to start off with a tutorial on how to set up a navigation menu button that when clicked causes a menu box to slide onto the screen.<br></br>
          <br></br>These are extremely important for websites viewed on mobile devices to ensure easy navigation of a site. For instance, this website uses a menu button and menu box when viewed on a mobile device or tablet. They are also helpful organizational tools for large sites with dozens or even hundreds of links.<br></br>
          <br></br> It's fairly simple to set up a button for a nav menu. You simply have to know how to position the menu off screen and then when the user clicks the button you use JavaScript to change the position of the menu box.
        </p>
        <div className="cube-effects-container">
          <div className="column column-1">
            <div className="tutorial-heading-image"></div>
            <Link to={"/javascript/nav-menu-btn-tut"}>
              <h1>How to Style and Code a Navigation Menu & Button with CSS & JavaScript</h1>{" "}
            </Link>
          </div>
          <div className="column column-1">
            <PictureCubeEffect />
            <Link to={"/javascript/picture-cube-effect-tut"}>
              <h1>How to Style and Code a Picture Cube Effect with CSS & JavaScript</h1>{" "}
            </Link>
          </div>
          <PictureCubeEffect2 />
        </div>
        <SectionDivider />
        <Footer />
        <div className="credits-section">
          <p>photos used on this page were created by:</p>
          <a href="https://www.pexels.com/photo/electronic-system-with-electric-circuits-6432110/">Nic Wood: https://www.pexels.com/photo/electronic-system-with-electric-circuits-6432110/</a>
          <a href="https://www.pexels.com/photo/photo-of-deep-sky-object-816608/">Alex Andrews: https://www.pexels.com/photo/photo-of-deep-sky-object-816608/</a>
        </div>
      </div>
    </div>
  );
}
