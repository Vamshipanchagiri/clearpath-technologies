import React from 'react';

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Clearpath' },
    { id: 'process', label: 'Our Process' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">Clearpath</span>
              <span className="text-xl font-light text-slate-400 ml-1">Technologies</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Delivering reliable technology solutions with structured processes and clear communication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-white mb-4">Quick Links</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-semibold text-white mb-4">Contact</p>
            <p className="text-sm text-slate-400">
              6th Floor Tower 2, Knowledge City<br />
              Raidurg, Hyderabad 500032<br />
              Telangana, India
            </p>
            <p className="text-sm text-slate-400 mt-2">
              Email: info@clearpathtechnologies.in
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © 2020 Clearpath Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;