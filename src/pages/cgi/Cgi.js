import { Link } from "react-router-dom";
import horsemen2 from "../../images/horsemen2.png";
import "./cgi.css";

export default function Cgi() {
  return (
    <div className="cgi-page">
      <h1>CGI Tutorials</h1>
      <div className="sub-heading">
        <h2>Learn to add</h2>
        <h2 className="animated-text">3D</h2>
        <h2>models to your Site! -also known as CGI (Computer-generated imagery).</h2>
      </div>
      <div className="cgi-model-container">
        <h2>Four Horsemen 2/4 Pestilence and Famine</h2>
        <img className="cgi-model-image" src={horsemen2}></img>
        <Link className="cgi-model-link" to={"/cgi/cgi-models/horsemen-model-2"}>Press here to view in 3-D</Link>
      </div>
    </div>
  );
}
