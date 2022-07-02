import Header from "./Header";
import Home from "./pages/Home";
import Css from "./pages/Css";
import Javascript from "./pages/Js";
import Canvas from "./pages/Canvas";
import Cgi from "./pages/Cgi";

function App() {
  let page;
  switch (window.location.pathname) {
    case "/":
      page = <Home />;
      break;
    case "/css":
      page = <Css />;
      break;

    case "/javascript":
      page = <Javascript />;
      break;

    case "/html-canvas":
      page = <Canvas />;
      break;

    case "/cgi":
      page = <Cgi />;
      break;
  }
  return (
    <>
      <Header />
      <section className="page-container">{page}</section>
    </>
  );
}

export default App;
