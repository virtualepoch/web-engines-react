export function SectionDivider() {
  const sectionDivider = {
    width: "100%",
    height: "20px",
    margin: "50px 10px",
    clipPath: "polygon(5px 0, 10px 40%, calc(100% - 10px) 40%, calc(100% - 5px) 0, 100% 50%, calc(100% - 5px) 100%, calc(100% - 10px) 60%, 10px 60%, 5px 100%, 0 50%)",
    background: "linear-gradient(90deg, aqua, darkslategray, aqua)",
  };

  return <hr style={sectionDivider}></hr>;
}
