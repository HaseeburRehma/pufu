import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingElements } from './FloatingElements';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-[30px] font-normal leading-[36px] tracking-[1.5px]" style={{ fontFamily: 'Georgia, serif', color: '#A89080' }}>
                pufu
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gray-400 mt-1 uppercase font-medium">
                COLOGNE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors relative group font-medium ${location.pathname === link.path
                    ? 'text-[#A89080]'
                    : 'text-gray-500 hover:text-[#FCCEE8]'
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FCCEE8]/30"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 text-base ${location.pathname === link.path
                      ? 'text-[#A89080] font-medium'
                      : 'text-gray-600'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {/* Column 1: Brand */}
            <div className="flex flex-col">
              <Link to="/" className="mb-6">
                <span className="text-[32px] font-normal leading-[1.2] tracking-[1.5px]" style={{ fontFamily: 'Georgia, serif', color: '#A89080' }}>
                  pufu cologne
                </span>
              </Link>
              <p className="text-gray-500 text-[14px] leading-relaxed max-w-sm mb-8">
                PUFU – Japanische Soufflé-Pancakes & Premium Matcha in Köln.
                Ein elegantes Dessert-Café für feine Soufflé-Pancakes,
                hochwertige Matcha-Getränke und moderne Genussmomente.
              </p>
              <div className="flex items-center space-x-5">
                <a href="https://instagram.com/pufu.cologne" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A89080] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A89080] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A89080] transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-[18px] font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-gray-500 hover:text-gray-900 text-[15px] transition-colors">Startseite</Link></li>
                <li><Link to="/menu" className="text-gray-500 hover:text-gray-900 text-[15px] transition-colors">Menü</Link></li>
                <li><Link to="/franchise" className="text-gray-500 hover:text-gray-900 text-[15px] transition-colors">Franchise</Link></li>
                <li><Link to="/contact" className="text-gray-500 hover:text-gray-900 text-[15px] transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            {/* Column 3: Visit Us */}
            <div>
              <h4 className="text-[18px] font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Visit Us
              </h4>
              <div className="text-[15px] text-gray-500 space-y-4">
                <div>
                  <p>Vogelsanger Str. 197B</p>
                  <p>50825 Cologne, Germany</p>
                </div>
                <div className="pt-2">
                  <p>Mon - Sun: 10:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-[13px] text-gray-400">
            <p>© 2026 PUFU. Alle Rechte vorbehalten.</p>
            <p className="mt-2 sm:mt-0">Mit Liebe in Köln gestaltet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}