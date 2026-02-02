import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePageApp from './components/SinglePageApp';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import WebApplicationPage from './pages/WebApplicationPage';
import CloudInfrastructurePage from './pages/CloudInfrastructurePage';
import ITConsultingPage from './pages/ITConsultingPage';
import MaintenanceSupportPage from './pages/MaintenanceSupportPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<SinglePageApp />} />
        <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/web-application" element={<WebApplicationPage />} />
        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
        <Route path="/it-consulting" element={<ITConsultingPage />} />
        <Route path="/maintenance-support" element={<MaintenanceSupportPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;