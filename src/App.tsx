import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import { useScrollRestoration } from './hooks/useScrollRestoration';
import { usePageAnalytics } from './hooks/usePageAnalytics';

function AppRoutes() {
  useScrollRestoration();
  usePageAnalytics();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const handle = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(handle);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
