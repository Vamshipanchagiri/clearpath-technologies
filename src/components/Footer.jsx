import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-bold text-[#1e3a5f]">Clearpath Technologies</span>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Delivering structured, reliable, and scalable technology solutions that drive enterprise growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#1e3a5f] mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/services/software-development" className="hover:text-[#4a7ba7] transition-colors">Software Development</Link></li>
              <li><Link to="/services/web-application-development" className="hover:text-[#4a7ba7] transition-colors">Web Application Development</Link></li>
              <li><Link to="/services/cloud-infrastructure-support" className="hover:text-[#4a7ba7] transition-colors">Cloud & Infrastructure</Link></li>
              <li><Link to="/services/it-consulting" className="hover:text-[#4a7ba7] transition-colors">IT Consulting</Link></li>
              <li><Link to="/services/maintenance-support" className="hover:text-[#4a7ba7] transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>

          <div className="md:text-right">
             <h4 className="font-semibold text-[#1e3a5f] mb-4">Contact</h4>
             <p className="text-sm text-gray-500 mb-2">info@clearpathtechnologies.in</p>
             <p className="text-sm text-gray-500">
               6th Floor, Tower 2, Knowledge City<br />
               Raidurg, Hyderabad – 500032
             </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center md:text-right">
          <p className="text-sm text-gray-400">
            © 2020 Clearpath Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;