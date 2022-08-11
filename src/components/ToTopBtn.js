import React, { useRef } from "react";

export default function ToTopBtn() {
  const toTopBtn = useRef(null);

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      toTopBtn.current.classList.add("open");
    } else {
      toTopBtn.current.classList.remove("open");
    }
  };

  function ScrollToTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }

  return <div className="to-top-btn" ref={toTopBtn} onClick={ScrollToTop}></div>;
}
