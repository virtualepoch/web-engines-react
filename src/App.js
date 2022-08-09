import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header/Header";
import ToTopBtn from "./components/ToTopBtn";
import StarCanvas from "./components/star-canvas/StarCanvas";
import TodoPage from "./components/todo/TodoPage";
import Home from "./pages/home/Home";
import Css from "./pages/css/Css";
import BorderEffectTut from "./pages/css/border-effect-tut/BorderEffectTut";
import TextWaveEffectTut from "./pages/css/text-wave-effect-tut/TextWaveEffectTut";
import CubeTut from "./pages/css/cube-tut/CubeTut";
import Js from "./pages/js/Js";
import Canvas from "./pages/canvas/Canvas";
import CanvasGame from "./pages/canvas/CanvasGame";
import Cgi from "./pages/cgi/Cgi";
import HorsemenModel2 from "./pages/cgi/cgi-models/HorsemenModel2";
import AyanamiModel from "./pages/cgi/cgi-models/AyanamiModel";
import "./pages/common.css";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  useScrollToTop();
  return (
    <>
      <Header />
      <ToTopBtn />
      <StarCanvas />
      <TodoPage />
      <section className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/css" element={<Css />} />
          <Route path="/css/border-effect-tut" element={<BorderEffectTut />} />
          <Route path="/css/text-wave-effect-tut" element={<TextWaveEffectTut />} />
          <Route path="/css/cube-tut" element={<CubeTut />} />
          <Route path="/javascript" element={<Js />} />
          <Route path="/html-canvas" element={<Canvas />} />
          <Route path="/html-canvas/canvas-game" element={<CanvasGame />} />
          <Route path="/cgi" element={<Cgi />} />
          <Route path="/cgi/cgi-models/horsemen-model-2" element={<HorsemenModel2 />} />
          <Route path="/cgi/cgi-models/ayanami-model" element={<AyanamiModel />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
