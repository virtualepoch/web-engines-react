import "./logo.css";
import logoImage from "../../assets/logos/webengines-512.png";
export function Logo() {
  const style = {
    mainLogo: {
    //   width: "50px",
    //   height: "50px",
    //   margin: "0 7px",
      // TODO = FIX IMAGE IMPORT BELOW FOR SITE LOGO CURRENTLY IMPORTED WITH THE STYLESHEET
      background: logoImage,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <div style={style.mainLogo} className="main-logo">
      <div className="gear-container">
        <div className="teeth teeth-1"></div>
        <div className="teeth teeth-2"></div>
        <div className="teeth teeth-3"></div>
        <div className="teeth teeth-4"></div>
        <div className="gear-circle"></div>
      </div>
      <div className="circle"></div>
      <div className="circle ellipse ellipse-1"></div>
      <div className="circle ellipse ellipse-2"></div>
    </div>
  );
}
