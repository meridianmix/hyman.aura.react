import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. Base — variables, reset, body, shared utilities, keyframes
import './styles/base.css'

// 2. Components
import './styles/components/announcement-bar.css'
import './styles/components/nav.css'
import './styles/components/hero.css'
import './styles/components/form.css'
import './styles/components/proof-strip.css'
import './styles/components/stats.css'
import './styles/components/benefits.css'
import './styles/components/episode-recap.css'
import './styles/components/testimonials.css'
import './styles/components/doctors.css'
import './styles/components/mid-cta.css'
import './styles/components/consult-section.css'
import './styles/components/footer.css'
import './styles/components/thank-you.css'

// 3. Responsive — must come last so breakpoints override component defaults
import './styles/responsive.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
