import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  const navigate = useNavigate();

  var style = {
    backBtn: {
      width: "40px",
      height: "40px",
      position: "relative",
      borderRadius: "50%",
      boxShadow: "0 1px 5px 2px rgb(0, 0, 0, 0.3)",
      background: "rgb(0, 180, 255, 0.5)",
      cursor: "pointer",
    },
    arrowLine: {
      width: "16px",
      height: "2px",
      position: "absolute",
      top: "14px",
      left: "10px",
      background: "white",
      transform: "rotate(-45deg)",
    },
    arrowLine2: {
      top: null,
      bottom: "14px",
      transform: "rotate(45deg)",
    },
  };

  return (
    <div style={style.backBtn} onClick={() => navigate(-1)}>
      <div style={style.arrowLine}></div>
      <div style={{ ...style.arrowLine, ...style.arrowLine2 }}></div>
    </div>
  );
}
