import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import CustomCursor from "./components/CustomCursor";
import Card from "./components/Card";
import WorkPage from "./components/WorkPage";
import AboutPage from "./components/AboutPage";

function ScrollHandler({ lenisRef }) {
  const location = useLocation();

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return null;
}

function App() {

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <BrowserRouter>

        <ScrollHandler lenisRef={lenisRef} />

        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

      </BrowserRouter>

      <CustomCursor />
    </>
  );
}

export default App;