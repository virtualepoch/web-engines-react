import "./logo.css";
export function Logo() {
  const style = {
    mainLogo: {
      width: "60px",
      height: "60px",
      margin: "0 7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "drop-shadow(0 0 5px aqua)",
    },
  };

  return (
    <div style={style.mainLogo}>
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
