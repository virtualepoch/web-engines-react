import React, { useRef } from "react";
import { BtnBack } from "../../../components/BtnBack";
import "../tutorials/tuts-common.css";

export function TutLayout(props) {
  return (
    <div className="page tut-page">
      <BtnBack />
      <h1>{props.info.title}</h1>
      {props.info.effectEx}
      <div className="article-info">
        <p>Written by — Craig Kaufman</p>
        <hr></hr>
        <p>Updated — {props.info.dateUpdated}</p>
        <hr></hr>
        <p>Read time — approx. {props.info.minsReadTime} mins</p>
      </div>
    </div>
  );
}
