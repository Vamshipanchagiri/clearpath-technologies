import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import WhyClearpathPage from "./WhyClearpathPage";
import OurProcessPage from "./OurProcessPage";
import ContactPage from "./ContactPage";

export default function SinglePageApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/why-clearpath" element={<WhyClearpathPage />} />
      <Route path="/our-process" element={<OurProcessPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
