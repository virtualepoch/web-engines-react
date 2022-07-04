import Header from "./components/header/Header";
import StarCanvas from "./components/star-canvas/StarCanvas";
import Home from "./pages/Home";
import Css from "./pages/Css";
import Js from "./pages/Js";
import Canvas from "./pages/Canvas";
import Cgi from "./pages/Cgi";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <StarCanvas />
      <section className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/css" element={<Css />} />
          <Route path="/javascript" element={<Js />} />
          <Route path="/html-canvas" element={<Canvas />} />
          <Route path="/cgi" element={<Cgi />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
