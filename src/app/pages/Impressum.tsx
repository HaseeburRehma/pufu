import { motion } from 'motion/react';

export function Impressum() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-light mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Impressum
          </h1>

          <div className="space-y-10 text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">Angaben gemäß § 5 TMG</h2>
              <p className="mb-1">Demir&Demir GmbH</p>
              <p className="mb-1">Vogelsanger Straße 197b</p>
              <p>50825 Köln</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">Vertreten durch</h2>
              <p>Geschäftsführer: Onur Demir</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">Handelsregistereintrag</h2>
              <p className="mb-1">Eingetragen im Handelsregister B</p>
              <p className="mb-1">Registernummer: HRB 118525</p>
              <p>Registergericht: Amtsgericht Köln</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">Kontakt</h2>
              <p className="mb-1">Telefon: +49 152 06128073</p>
              <p className="mb-1">E-Mail: demirdemirgmbh@gmail.com</p>
              <p>Website: www.pufu-souffle.de</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p className="mb-1">Onur Demir</p>
              <p className="mb-1">Vogelsanger Straße 197b</p>
              <p>50825 Köln</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">Online-Streitbeilegung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#A89080] hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <div className="pt-10 border-t border-gray-100 text-sm text-gray-400">
              <p>Stand: März 2026 · Demir&Demir GmbH · pufu-souffle.de</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
