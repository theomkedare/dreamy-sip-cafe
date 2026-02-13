import React from 'react';

const Footer = ({ pages, setCurrentPage }) => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dreamy Sip
            </h3>
            <p className="text-purple-200 leading-relaxed">
              Where every sip is a dream come true.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              {pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className="block text-purple-200 hover:text-white transition-colors"
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Hours</h4>
            <div className="text-purple-200 space-y-1">
              <p>Mon-Fri: 7AM - 8PM</p>
              <p>Saturday: 8AM - 9PM</p>
              <p>Sunday: 8AM - 7PM</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <div className="text-purple-200 space-y-2">
              <p>123 Dreamy Lane</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@dreamysip.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-700 pt-8 text-center text-purple-200">
          <p>&copy; 2026 Dreamy Sip. All rights reserved. Made with love and coffee by <a href="https://www.instagram.com/opxeditzz/">Om</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
