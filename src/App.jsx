import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePageApp from './pages/SinglePageApp';
import SoftwareDevelopmentService from './pages/SoftwareDevelopmentService';
import WebApplicationService from './pages/WebApplicationService';
import CloudInfrastructureService from './pages/CloudInfrastructureService';
import ITConsultingService from './pages/ITConsultingService';
import MaintenanceSupportService from './pages/MaintenanceSupportService';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import ScrollToTop from './components/ScrollToTop';

// Layout wrapper for service pages to include Header/Footer/ScrollToTop
const ServiceLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SinglePageApp />} />
        
        <Route path="/services/software-development" element={
          <ServiceLayout><SoftwareDevelopmentService /></ServiceLayout>
        } />
        
        <Route path="/services/web-application-development" element={
          <ServiceLayout><WebApplicationService /></ServiceLayout>
        } />
        
        <Route path="/services/cloud-infrastructure-support" element={
          <ServiceLayout><CloudInfrastructureService /></ServiceLayout>
        } />
        
        <Route path="/services/it-consulting" element={
          <ServiceLayout><ITConsultingService /></ServiceLayout>
        } />
        
        <Route path="/services/maintenance-support" element={
          <ServiceLayout><MaintenanceSupportService /></ServiceLayout>
        } />

      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;