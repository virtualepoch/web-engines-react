import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import StarCanvas from "./components/star-canvas/StarCanvas";
import TodoPage from "./components/todo/TodoPage";
import Home from "./pages/home/Home";
import Css from "./pages/css/Css";
import BorderEffectTut from "./pages/css/border-effect-tut/BorderEffectTut";
import TextWaveEffectTut from "./pages/css/text-wave-effect-tut/TextWaveEffectTut";
import Js from "./pages/js/Js";
import Canvas from "./pages/canvas/Canvas";
import Cgi from "./pages/cgi/Cgi";
import "./pages/common.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
      <Footer />
      <StarCanvas />
      <TodoPage />
      <section className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/css" element={<Css />} />
          <Route path="/css/border-effect-tut" element={<BorderEffectTut />} />
          <Route path="/css/text-wave-effect-tut" element={<TextWaveEffectTut />} />
          <Route path="/javascript" element={<Js />} />
          <Route path="/html-canvas" element={<Canvas />} />
          <Route path="/cgi" element={<Cgi />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
