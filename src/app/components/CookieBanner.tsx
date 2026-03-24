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
            <div className="p-6 sm:p-10 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="bg-[#FDF2F8] p-4 rounded-2xl">
                  <ShieldCheck className="w-8 h-8 text-[#E60076]" />
                </div>
                
                <div className="space-y-6 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                    Datenschutzeinstellungen
                  </h3>
                  
                  <div className="text-[15px] text-gray-500 leading-relaxed space-y-4 font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p>
                      Wir verwenden auf unserer Website Cookies und ähnliche Technologien und verarbeiten Ihre personenbezogenen Daten (z. B. IP-Adresse), um beispielsweise Inhalte und Werbung zu personalisieren, Medien von Drittanbietern einzubinden oder den Traffic auf unserer Website zu analysieren. Die Datenverarbeitung kann auch durch das Setzen von Cookies erfolgen. Wir geben diese Daten an Dritte weiter, die wir in den Datenschutzeinstellungen benennen.
                    </p>
                    <p>
                      Die Datenverarbeitung erfolgt entweder auf Grundlage Ihrer Einwilligung oder auf Basis eines berechtigten Interesses, dem Sie in den Datenschutzeinstellungen widersprechen können. Sie haben das Recht, keine Einwilligung zu erteilen sowie Ihre Einwilligung jederzeit zu ändern oder zu widerrufen. Der Widerruf wirkt sofort, berührt jedoch nicht die bereits erfolgte Datenverarbeitung. Weitere Informationen zur Verwendung Ihrer Daten finden Sie in unserer <Link to="/datenschutz" className="text-[#A89080] hover:underline">Datenschutzerklärung</Link>.
                    </p>
                    <p className="text-[13px] italic opacity-80">
                      Du bist unter 16 Jahre alt? Dann kannst du nicht in optionale Dienste einwilligen. Bitte frage deine Eltern oder Erziehungsberechtigten, ob sie diesen Diensten gemeinsam mit dir zustimmen.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto min-w-[320px] pt-4">
                  <button
                    onClick={handleAccept}
                    className="flex-1 sm:min-w-[200px] bg-[#111] text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-gray-800 transition-all active:scale-[0.98] shadow-lg shadow-black/10"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 sm:min-w-[200px] bg-white text-gray-600 border border-gray-200 px-8 py-4 rounded-full text-[15px] font-medium hover:bg-gray-50 transition-all active:scale-[0.98]"
                  >
                    Ablehnen
                  </button>
                </div>
                
                <Link
                  to="/datenschutz"
                  className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
                >
                  Einstellungen
                </Link>
              </div>
            </div>
            
            {/* Close button - top right */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
