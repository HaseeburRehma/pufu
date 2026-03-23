import { motion } from 'motion/react';

export function Datenschutz() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-light mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">1. Verantwortlicher</h2>
              <p className="mb-1">Demir&Demir GmbH</p>
              <p className="mb-1">Vogelsanger Straße 197b, 50825 Köln</p>
              <p className="mb-1">E-Mail: demirdemirgmbh@gmail.com</p>
              <p>Tel.: +49 152 06128073</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p className="mb-4">Beim Besuch unserer Website werden automatisch folgende Daten durch den Webserver erfasst:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>IP-Adresse des anfragenden Geräts</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p>
                Diese Daten werden nur zur Sicherstellung des technischen Betriebs gespeichert und
                nach spätestens 7 Tagen gelöscht. Eine Weitergabe an Dritte findet nicht statt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">3. Kontaktaufnahme</h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse,
                Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage gespeichert. Die Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. b oder f DSGVO. Diese Daten werden nicht ohne Ihre Einwilligung an
                Dritte weitergegeben.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">4. Cookies</h2>
              <p>
                Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Seite
                erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten. Marketing-
                oder Tracking-Cookies werden nur nach Ihrer ausdrücklichen Einwilligung gesetzt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">5. Hosting</h2>
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet. Personenbezogene
                Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters
                gespeichert. Der Hoster wird auf Basis eines Auftragsverarbeitungsvertrags (AVV)
                gemäß Art. 28 DSGVO eingesetzt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">6. Ihre Rechte</h2>
              <p className="mb-4">Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:demirdemirgmbh@gmail.com" className="text-[#A89080] hover:underline">demirdemirgmbh@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">7. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
                Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit
                Nordrhein-Westfalen (LDI NRW), <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-[#A89080] hover:underline">www.ldi.nrw.de</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">8. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle
                Version ist stets auf dieser Seite abrufbar.
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
