import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
