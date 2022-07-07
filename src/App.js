import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import StarCanvas from "./components/star-canvas/StarCanvas";
import CodoPage from "./components/todo/TodoPage";
import Home from "./pages/home/Home";
import Css from "./pages/css/Css";
import BorderEffectPage from "./pages/css/border-effect-page/BorderEffectPage";
import Js from "./pages/js/Js";
import Canvas from "./pages/canvas/Canvas";
import Cgi from "./pages/cgi/Cgi";
import { Route, Routes } from "react-router-dom";
import "./pages/common.css";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <StarCanvas />
      <CodoPage />
      <section className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/css" element={<Css />} />
          <Route path="/css/border-effect" element={<BorderEffectPage />} />
          <Route path="/javascript" element={<Js />} />
          <Route path="/html-canvas" element={<Canvas />} />
          <Route path="/cgi" element={<Cgi />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
