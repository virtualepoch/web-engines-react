import React, { useRef } from "react";
import { BtnBack } from "../../../components/BtnBack";
import "../tutorials/tuts-common.css";

export function TutLayout(props) {
  var allCodeContainerRef = useRef(null);
  function openCloseAllCode() {
    var allCodeContainer = allCodeContainerRef.current;
    allCodeContainer.classList.toggle("open");
  }

  const copyBtn1Ref = useRef(null);
  function copyCodeEx1() {
    const copyBtn1 = copyBtn1Ref.current;
    navigator.clipboard.writeText(props.info.codeExs[0]);
    copyBtn1.classList.add("clicked");
  }
  const copyBtn2Ref = useRef(null);
  function copyCodeEx2() {
    const copyBtn2 = copyBtn2Ref.current;
    navigator.clipboard.writeText(props.info.codeExs[1]);
    copyBtn2.classList.add("clicked");
  }
  const copyBtn3Ref = useRef(null);
  function copyCodeEx3() {
    const copyBtn3 = copyBtn3Ref.current;
    navigator.clipboard.writeText(props.info.codeExs[2]);
    copyBtn3.classList.add("clicked");
  }
  const copyBtn4Ref = useRef(null);
  function copyCodeEx4() {
    const copyBtn4 = copyBtn4Ref.current;
    navigator.clipboard.writeText(props.info.codeExs[3]);
    copyBtn4.classList.add("clicked");
  }
  const copyBtn5Ref = useRef(null);
  function copyCodeEx5() {
    const copyBtn5 = copyBtn5Ref.current;
    navigator.clipboard.writeText(props.info.codeExs[4]);
    copyBtn5.classList.add("clicked");
  }
  return (
    <div className="page tut-page">
      <BtnBack />
      <header>
        <h1>{props.info.title}</h1>
        <br></br>
        <h2>{props.info.subtitle}</h2>
      </header>
      {props.info.effectEx}
      <div className="article-info">
        <p>Written by — Craig Kaufman</p>
        <hr></hr>
        <p>Updated — {props.info.dateUpdated}</p>
        <hr></hr>
        <p>Read time — approx. {props.info.minsReadTime} mins</p>
      </div>
      <p className="tut-intro">
        In this tutorial we provide, and walk you through, all the code needed to create this cool {props.info.effectName} effect. {props.info.effectIntroInfo}. If you'd prefer to just copy all the code you can do that{" "}
        <span className="open-all-code" onClick={openCloseAllCode}>
          here
        </span>
        .
      </p>
      <div className="code-example-container all-code-container" ref={allCodeContainerRef}>
        <button className="close-all-code" onClick={openCloseAllCode}>
          X
        </button>
        {props.info.allCodeContainer}
      </div>
      <div className="tutorial-step-container">
        <p>Step #1: {props.info.step1}.</p>
        <div className="code-example-container">
          <pre className="code-example">{props.info.codeExs[0]}</pre>
          <button className="copy-code-btn" ref={copyBtn1Ref} onClick={copyCodeEx1}></button>
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #2: {props.info.step2}</p>
        <div className="code-example-container">
          <pre className="code-example">{props.info.codeExs[1]}</pre>
          <button className="copy-code-btn" ref={copyBtn2Ref} onClick={copyCodeEx2}></button>
        </div>
        <div className="border-ex-1">
          <p>Output:</p>
          {props.info.effectEx}
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #3: {props.info.step1}</p>
        <div className="code-example-container">
          <pre className="code-example">{props.info.codeExs[2]}</pre>
          <button className="copy-code-btn" ref={copyBtn3Ref} onClick={copyCodeEx3}></button>
        </div>
        <div className="border-ex-2">
          <p>Output:</p>
          {props.info.effectEx}
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #4: {props.info.step1}</p>
        <div className="code-example-container">
          <pre className="code-example">{props.info.codeExs[3]}</pre>
          <button className="copy-code-btn" ref={copyBtn4Ref} onClick={copyCodeEx4}></button>
        </div>
        <div className="border-ex-3">
          <p>Output:</p>
          {props.info.effectEx}
        </div>
      </div>
      <div className="tutorial-step-container">
        <p>Step #5: {props.info.step1}</p>
        <div className="code-example-container">
          <pre className="code-example">{props.info.codeExs[4]}</pre>
          <button className="copy-code-btn" ref={copyBtn5Ref} onClick={copyCodeEx5}></button>
        </div>
        <div className="border-ex-complete">
          <p>Output:</p>
          {props.info.effectEx}
        </div>
      </div>
      <p className="tut-outro">There you have it. This is just one example of the many things you can accomplish with just a few lines of CSS.</p>
      <BtnBack />
    </div>
  );
}
