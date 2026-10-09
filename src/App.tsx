import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import CloudPage from './pages/services/Cloud';
import WebDevPage from './pages/services/WebDev';
import AISystemsPage from './pages/services/AISystems';
import ShopifyPage from './pages/services/Shopify';
import GraphicDesignPage from './pages/services/GraphicDesign';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/cloud" element={<CloudPage />} />
              <Route path="/services/web-dev" element={<WebDevPage />} />
              <Route path="/services/ai-systems" element={<AISystemsPage />} />
              <Route path="/services/shopify" element={<ShopifyPage />} />
              <Route path="/services/design" element={<GraphicDesignPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Fallback routes for navigation items */}
              <Route path="/infrastructure" element={<CloudPage />} />
              <Route path="/engineering" element={<WebDevPage />} />
              <Route path="/ai-systems" element={<AISystemsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <CookieBanner />
      </Router>
    </HelmetProvider>
  );
}
