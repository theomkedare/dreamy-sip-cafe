import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import './styles/animations.css';

const AppContent = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'location', label: 'Location & Hours' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="font-sans antialiased">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={navigateToPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrolled={scrolled}
        pages={pages}
      />
      
      <Cart />
      
      {currentPage === 'home' && <HomePage setCurrentPage={navigateToPage} />}
      {currentPage === 'menu' && <MenuPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'gallery' && <GalleryPage />}
      {currentPage === 'location' && <LocationPage />}
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer pages={pages} setCurrentPage={navigateToPage} />
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <AppContent />
      <Analytics />
    </CartProvider>
  );
};

export default App;
