import { Link } from "react-router-dom";
import horsemen2 from "../../images/horsemen2.png";
import ayanami from "../../images/ayanami.png";
import "./cgi.css";

export default function Cgi() {
  return (
    <div className="cgi-page">
      <h1>CGI Tutorials</h1>
      <div className="sub-heading">
        <h2>Learn to add</h2>
        <h2 className="animated-text">3D</h2>
        <h2>models to your Site!</h2>
      </div>
      <div className="cgi-model-container">
        <h2>Four Horsemen 2/4 Pestilence and Famine</h2>
        <img className="cgi-model-image" src={horsemen2}></img>
        <Link className="cgi-model-link" to={"/cgi/cgi-models/horsemen-model-2"}>
          Press here to view in 3-D
        </Link>
        <p>This dark yet beautiful model was created by Spinnee.</p>
        <p>"Four Horsemen (2/4): Pestilence and Famine" (https://skfb.ly/o9VYO) by Spinnee is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
        <p>Below you will find a direct link to Sketchfab where you can view and download this model for FREE.</p>
        <a className="sketchfab-link" href="https://sketchfab.com" target="_blank">
          www.Sketchfab.com
        </a>
      </div>
      <div className="cgi-model-container">
        <h2>Rei Ayanami</h2>
        <img className="cgi-model-image" src={ayanami}></img>
        <Link className="cgi-model-link" to={"/cgi/cgi-models/ayanami-model"}>
          Press here to view in 3-D
        </Link>
        <p>This model from the Neon Genesis Evangelion series was created by YU</p>
        <p>"Ayanami" (https://skfb.ly/o6TpP) by YU is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
        <p>Below you will find a direct link to Sketchfab where you can view and download this model for FREE.</p>
        <a className="sketchfab-link" href="https://sketchfab.com" target="_blank">
          www.Sketchfab.com
        </a>
      </div>
      <div className="cgi-model-container">
        <h2>Rei Ayanami</h2>
        <img className="cgi-model-image" src={horsemen2}></img>
        <Link className="cgi-model-link" to={"/cgi/cgi-models/test-model"}>
          Press here to view in 3-D
        </Link>
        <p>Creator info</p>
        <p>license info</p>
        <p>Below you will find a direct link to Sketchfab where you can view and download this model for FREE.</p>
        <a className="sketchfab-link" href="https://sketchfab.com" target="_blank">
          www.Sketchfab.com
        </a>
      </div>
    </div>
  );
}
