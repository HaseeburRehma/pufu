import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pufu-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pufu-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('pufu-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 z-[100] max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 bg-[#FDF2F8] p-3 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-[#E60076]" />
                </div>
                
                <div className="flex-grow space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                    Datenschutzeinstellungen
                  </h3>
                  
                  <div className="text-sm text-gray-500 leading-relaxed space-y-3 font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p>
                      Wir verwenden auf unserer Website Cookies und ähnliche Technologien und verarbeiten Ihre personenbezogenen Daten (z. B. IP-Adresse), um beispielsweise Inhalte und Werbung zu personalisieren, Medien von Drittanbietern einzubinden oder den Traffic auf unserer Website zu analysieren. Die Datenverarbeitung kann auch durch das Setzen von Cookies erfolgen. Wir geben diese Daten an Dritte weiter, die wir in den Datenschutzeinstellungen benennen.
                    </p>
                    <p>
                      Die Datenverarbeitung erfolgt entweder auf Grundlage Ihrer Einwilligung oder auf Basis eines berechtigten Interesses, dem Sie in den Datenschutzeinstellungen widersprechen können. Sie haben das Recht, keine Einwilligung zu erteilen sowie Ihre Einwilligung jederzeit zu ändern oder zu widerrufen. Der Widerruf wirkt sofort, berührt jedoch nicht die bereits erfolgte Datenverarbeitung. Weitere Informationen zur Verwendung Ihrer Daten finden Sie in unserer <Link to="/datenschutz" className="text-[#A89080] hover:underline">Datenschutzerklärung</Link>.
                    </p>
                    <p className="text-[13px] italic">
                      Du bist unter 16 Jahre alt? Dann kannst du nicht in optionale Dienste einwilligen. Bitte frage deine Eltern oder Erziehungsberechtigten, ob sie diesen Diensten gemeinsam mit dir zustimmen.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-48 flex-shrink-0 pt-2">
                  <button
                    onClick={handleAccept}
                    className="w-full bg-[#111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/5"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={handleDecline}
                    className="w-full bg-white text-gray-600 border border-gray-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Ablehnen
                  </button>
                  <Link
                    to="/datenschutz"
                    className="text-center text-xs text-gray-400 hover:text-gray-600 underline py-1"
                  >
                    Einstellungen
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Close button - top right */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
