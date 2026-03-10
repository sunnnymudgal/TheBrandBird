import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import CustomCursor from "./components/CustomCursor";
import Card from "./components/Card";
import WorkPage from "./components/WorkPage";
import AboutPage from "./components/AboutPage";
import Loader from "./components/Loder";

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
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  // Loader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Lenis Smooth Scroll
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

  if (loading) {
    return <Loader />;
  }

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