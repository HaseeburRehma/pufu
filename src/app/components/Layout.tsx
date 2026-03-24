import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingElements } from './FloatingElements';
import { CookieBanner } from './CookieBanner';

function TypingEffect() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const normalText = "Designed & developed by ";
  const boldText = "TYLOTECH";
  const fullText = normalText + boldText;

  const speed = 80;
  const eraseSpeed = 40;
  const delayAfterTyping = 1500;
  const delayAfterErase = 500;

  useEffect(() => {
    let timeoutId: any;

    const typeLoop = () => {
      if (!isDeleting && index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        setIndex(prev => prev + 1);
        timeoutId = setTimeout(typeLoop, speed);
      } else if (isDeleting && index >= 0) {
        setDisplayText(fullText.substring(0, index));
        setIndex(prev => prev - 1);
        timeoutId = setTimeout(typeLoop, eraseSpeed);
      } else if (!isDeleting) {
        setIsDeleting(true);
        timeoutId = setTimeout(typeLoop, delayAfterTyping);
      } else {
        setIsDeleting(false);
        setIndex(0);
        timeoutId = setTimeout(typeLoop, delayAfterErase);
      }
    };

    timeoutId = setTimeout(typeLoop, speed);
    return () => clearTimeout(timeoutId);
  }, [index, isDeleting]);

  const renderContent = () => {
    if (displayText.startsWith(normalText)) {
      const boldPart = displayText.slice(normalText.length);
      return (
        <>
          {normalText}
          <strong className="font-bold text-gray-900">{boldPart}</strong>
        </>
      );
    }
    return displayText;
  };

  return (
    <a
      href="https://tylotech.de"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block hover:opacity-80 transition-opacity"
    >
      <span id="typing-text" className="text-[13px] whitespace-nowrap text-gray-400">
        {renderContent()}
      </span>
      <style>{`
        #typing-text::after {
          content: '|';
          margin-left: 3px;
          animation: blink 1s infinite;
          color: #A89080;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </a>
  );
}

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
    { name: 'Pufu', path: '/' },
    { name: 'Menü', path: '/menu' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Kontakt', path: '/kontakt' },
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
                <a href="https://www.tiktok.com/@pufu.cologne" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A89080] transition-colors">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62-.02 5.24-.02 7.86-.02 2.04-.51 4.14-1.8 5.75-1.41 1.77-3.81 2.58-5.98 2.36-2.22-.17-4.33-1.47-5.39-3.41-1.21-2.14-1.14-4.99.21-7.05 1.05-1.66 2.91-2.73 4.87-2.85v4.14c-1.11.12-2.19.74-2.75 1.69-.58 1-.58 2.29-.01 3.29.56.96 1.64 1.57 2.75 1.7 1.1.13 2.24-.26 3.01-1.05.81-.84.99-2.09.98-3.23V0h-.01z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-[18px] font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Unterseiten
              </h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-gray-500 hover:text-gray-900 text-[15px] transition-colors">Startseite</Link></li>
                <li><Link to="/menu" className="text-gray-500 hover:text-gray-900 text-[15px] transition-colors">Menü</Link></li>
                <li><Link to="/franchise" className="text-gray-500 hover:text-gray-900 text-[15px] transition-colors">Franchise</Link></li>
                <li><Link to="/kontakt" className="text-gray-500 hover:text-gray-900 text-[15px] transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            {/* Column 3: Visit Us */}
            <div>
              <h4 className="text-[18px] font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Standorte
              </h4>
              <div className="text-[15px] text-gray-500 space-y-4">
                <div>
                  <p className="font-medium text-gray-900 mb-1">PUFU Ehrenfeld</p>
                  <p>Vogelsanger Str. 197B, 50825 Köln</p>
                  <p className="text-[12px] text-gray-400 mt-1">Mo–Fr: 14:00–22:00 | Sa–So: 12:00–22:00</p>
                </div>
                <div className="pt-2">
                  <p className="font-medium text-gray-900 mb-1">PUFU Köln Arcaden</p>
                  <p>Kalker Hauptstraße 55, 51103 Köln</p>
                  <p className="text-[12px] text-gray-400 mt-1">Mo–Do: 10:00–20:00 | Fr–Sa: 10:00–21:00 | So: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-[13px] text-gray-400">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 text-center sm:text-left">
              <p>© 2026 PUFU. Alle Rechte vorbehalten.</p>
              <div className="flex space-x-4">
                <Link to="/impressum" className="hover:text-gray-900 transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="hover:text-gray-900 transition-colors">Datenschutz</Link>
              </div>
            </div>
            <TypingEffect />
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}