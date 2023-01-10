import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/header/Header";
import { BtnToTop } from "./components/BtnToTop";
import { CanvasStarFractal } from "./components/CanvasStarFractal";
import { HomePage } from "./pages/HomePage";
import { CssPage } from "./pages/css-page/CssPage";
import { BorderEffectTut } from "./pages/css-page/tutorials/border-effect-tut/BorderEffectTut";
import { TextWaveEffectTut } from "./pages/css-page/tutorials/text-wave-effect-tut/TextWaveEffectTut";
import { CubeTut } from "./pages/css-page/tutorials/cube-tut/CubeTut";
import { TopSpinTut } from "./pages/css-page/tutorials/top-spin-tut/TopSpinTut";
import { PictureCubeEffectTut } from "./pages/javascript-page/tutorials/picture-cube-effect-tut/PictureCubeEffectTut";
import { JavaScriptPage } from "./pages/javascript-page/JavaScriptPage";
import { NavMenuBtnTut } from "./pages/javascript-page/tutorials/nav-menu-btn/NavMenuBtnTut";
import { CanvasPage } from "./pages/canvas-page/CanvasPage";
import { CanvasGame } from "./pages/canvas-page/CanvasGame";
import { Footer } from "./components/Footer";
import "./app.css";
import "./pages/pages.css";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  const style = {
    pageContainer: {
      width: "100%",
      maxWidth: "1200px",
      minHeight: "100vh",
      margin: "60px auto 0 auto",
      position: "relative",
      overflowX: "hidden",
      pointerEvents: "none",
    },
    footerBar: {
      width: "100%",
      height: "50px",
      position: "fixed",
      bottom: 0,
      background: "var(--color-2)",
    },
  };

  useScrollToTop();
  return (
    <>
      <Header />
      <BtnToTop />
      <CanvasStarFractal />
      <div style={style.footerBar}></div>
      <section style={style.pageContainer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/css" element={<CssPage />} />
          <Route path="/css/border-effect-tut" element={<BorderEffectTut />} />
          <Route path="/css/text-wave-effect-tut" element={<TextWaveEffectTut />} />
          <Route path="/css/cube-tut" element={<CubeTut />} />
          <Route path="/css/top-spin-tut" element={<TopSpinTut />} />
          <Route path="/javascript" element={<JavaScriptPage />} />
          <Route path="/javascript/nav-menu-btn-tut" element={<NavMenuBtnTut />} />
          <Route path="/javascript/picture-cube-effect-tut" element={<PictureCubeEffectTut />} />
          <Route path="/html-canvas" element={<CanvasPage />} />
          <Route path="/html-canvas/canvas-game" element={<CanvasGame />} />
        </Routes>
        <Footer />
      </section>
    </>
  );
}

export default App;
