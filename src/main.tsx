import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { CursorGlow } from './components/CursorGlow.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <CursorGlow />
          <a
            href="#main-content"
            className="sr-only z-[100] rounded-md bg-[var(--text)] px-4 py-2 text-sm font-medium text-[var(--bg)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">
            <App />
          </main>
          <Footer />
          <ScrollToTop />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
