export function AngledHighlights() {
  const style = {
    container: {
      position: "fixed",
      left: "0",
      width: "100vw",
      minHeight: "100vh",
      border: "solid red",
      display:"flex",
      justifyContent:"center",
    },
  };
  return (
    <div style={style.container}>
      <h1 style={style.mainHeading}>Angled Highlights Landing Page</h1>
    </div>
  );
}
