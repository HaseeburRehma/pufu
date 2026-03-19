import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/info@tylotech.de', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `Neue Kontaktanfrage: ${formData.subject}`,
          _template: 'table'
        }),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (_) {
      // In a real app, we'd show an error message here
    }
    setSubmitting(false);
  };

  const locations = [
    {
      name: 'PUFU Köln Arcaden',
      address: 'Kalker Hauptstraße 55',
      city: '51103 Köln',
      phone: '+49 221 123 4567',
      hours: ['Mo–So: 10:00–22:00 Uhr'],
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.5!2d6.9950!3d50.9280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25a5a3968a85%3A0x4fdbb1a5a2ce12c!2sK%C3%B6ln%20Arcaden!5e0!3m2!1sde!2sde!4v1700000000001',
      mapsUrl: 'https://maps.google.com/?q=Köln+Arcaden,+Kalker+Hauptstraße+55,+51103+Köln',
    },
    {
      name: 'PUFU Ehrenfeld',
      address: 'Vogelsanger Str. 197B',
      city: '50825 Köln',
      phone: '+49 221 765 4321',
      hours: ['Mo–Fr: 14:00–22:00 Uhr', 'Sa–So: 12:00–22:00 Uhr'],
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.2!2d6.9200!3d50.9530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf24f5ab2478b9%3A0x8f57cb3b3dd90961!2sVogelsanger+Stra%C3%9Fe+197b!5e0!3m2!1sde!2sde!4v1700000000002',
      mapsUrl: 'https://maps.google.com/?q=Vogelsanger+Straße+197B,+50825+Köln',
    },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Telefon',
      info: '+49 221 123 4567',
      action: 'Anrufen',
      href: 'tel:+492211234567',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'E-Mail',
      info: 'info@tylotech.de',
      action: 'E-Mail senden',
      href: 'mailto:info@tylotech.de',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Öffnungszeiten',
      info: 'Mo–So: 10:00–22:00 Uhr',
      action: 'Siehe Standorte',
      href: '#standorte',
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', url: 'https://instagram.com/pufu.cologne' },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62-.02 5.24-.02 7.86-.02 2.04-.51 4.14-1.8 5.75-1.41 1.77-3.81 2.58-5.98 2.36-2.22-.17-4.33-1.47-5.39-3.41-1.21-2.14-1.14-4.99.21-7.05 1.05-1.66 2.91-2.73 4.87-2.85v4.14c-1.11.12-2.19.74-2.75 1.69-.58 1-.58 2.29-.01 3.29.56.96 1.64 1.57 2.75 1.7 1.1.13 2.24-.26 3.01-1.05.81-.84.99-2.09.98-3.23V0h-.01z" />
        </svg>
      ),
      name: 'TikTok',
      url: 'https://www.tiktok.com/@pufu.cologne',
    },
  ];

  const faqs = [
    {
      question: 'Kann ich bei PUFU reservieren?',
      answer: 'Bitte kontaktiere uns direkt für aktuelle Informationen zu Reservierungen und Gruppenanfragen.',
    },
    {
      question: 'Bietet PUFU Catering oder besondere Anfragen für Events an?',
      answer: 'Für Kooperationen, Events oder besondere Anfragen freuen wir uns über eine direkte Nachricht per Kontaktformular oder E-Mail.',
    },
    {
      question: 'Wie lange dauert die Zubereitung?',
      answer: 'Da unsere Soufflé-Pancakes frisch zubereitet werden, beträgt die Zubereitungszeit in der Regel etwa 20 Minuten.',
    },
  ];

  const inp: React.CSSProperties = {
    width: '100%', padding: '12px 14px', borderRadius: 10,
    border: '1.5px solid #e5e7eb', fontFamily: 'Inter,sans-serif',
    fontSize: 14, color: '#111', outline: 'none', background: '#fff',
    boxSizing: 'border-box',
  };
  const lbl: React.CSSProperties = {
    display: 'block', fontFamily: 'Inter,sans-serif',
    fontSize: 13, fontWeight: 500, color: '#374151', marginBottom: 6,
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg,#fce4ef 0%,#fdf0f7 60%,#fce4ef 100%)', padding: '80px 24px 72px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(230,0,118,0.08)', color: '#E60076', fontSize: 13, fontWeight: 500, fontFamily: 'Inter,sans-serif', padding: '7px 16px', borderRadius: 100, marginBottom: 28 }}>
            ✨ Kontakt
          </div>
          <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(44px,7vw,80px)', fontWeight: 400, lineHeight: 1.05, color: '#111', marginBottom: 20, letterSpacing: '-1px' }}>
            Lass uns{' '}<span style={{ color: '#FDA5D5' }}>verbinden</span>
          </h1>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 'clamp(15px,2vw,18px)', color: '#6B7280', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            Wir freuen uns auf deine Nachricht. Ob Frage, Feedback oder Anfrage –
            das Team von PUFU ist gerne für dich da.
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          3 KONTAKTKARTEN
      ══════════════════════════════════════ */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
          {contactMethods.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ background: '#FAFAFA', border: '1px solid #f3f4f6', borderRadius: 20, padding: '40px 28px', textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#FCE8F3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#E60076' }}>
                {c.icon}
              </div>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 20, fontWeight: 400, color: '#111', marginBottom: 8 }}>{c.title}</h3>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#6B7280', marginBottom: 16, lineHeight: 1.5 }}>{c.info}</p>
              <a href={c.href} style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 500, color: '#E60076', textDecoration: 'none' }}>
                {c.action} →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          FORMULAR  +  SOCIAL / FAQ
      ══════════════════════════════════════ */}
      <section style={{ padding: '0 24px 80px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 56 }}>

          {/* LEFT – Kontaktformular */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 400, color: '#111', marginBottom: 12 }}>
              Schreib uns eine <span style={{ color: '#FDA5D5' }}>Nachricht</span>
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#6B7280', lineHeight: 1.65, marginBottom: 32 }}>
              Du hast eine Frage zu unseren Produkten, Standorten oder deinem Besuch bei PUFU?
              Dann sende uns einfach eine Nachricht – wir melden uns schnellstmöglich bei dir.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#111', marginBottom: 10 }}>Nachricht gesendet!</h3>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#6B7280' }}>Vielen Dank! Wir melden uns bald bei dir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={lbl}>Name *</label>
                  <input type="text" required placeholder="Dein Name" value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })} style={inp} />
                </div>
                <div>
                  <label style={lbl}>E-Mail-Adresse *</label>
                  <input type="email" required placeholder="deine@email.de" value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })} style={inp} />
                </div>
                <div>
                  <label style={lbl}>Betreff *</label>
                  <input type="text" required placeholder="Wie können wir helfen?" value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })} style={inp} />
                </div>
                <div>
                  <label style={lbl}>Nachricht *</label>
                  <textarea required rows={6} placeholder="Erzähle uns, wie wir dir weiterhelfen können."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inp, resize: 'none', lineHeight: 1.6 }} />
                </div>
                <button type="submit" disabled={submitting}
                  style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 100, padding: '15px 32px', fontFamily: 'Inter,sans-serif', fontSize: 15, fontWeight: 500, cursor: submitting ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? 'Wird gesendet…' : 'Nachricht senden'}
                  <Send style={{ width: 16, height: 16 }} />
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT – Social + FAQ */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 400, color: '#111', marginBottom: 12 }}>
              Folgt <span style={{ color: '#FDA5D5' }}>uns</span>
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#6B7280', lineHeight: 1.65, marginBottom: 28 }}>
              Folge uns auf Social Media für Updates, besondere Angebote und Einblicke hinter die Kulissen.
              Werde Teil unserer Community!
            </p>

            <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
              {socialLinks.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{ width: 48, height: 48, borderRadius: '50%', background: '#FCE8F3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E60076', textDecoration: 'none' }}>
                  {s.icon}
                </a>
              ))}
            </div>

            <div style={{ background: '#FAFAFA', border: '1px solid #f3f4f6', borderRadius: 20, padding: 28 }}>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 22, fontWeight: 400, color: '#111', marginBottom: 20 }}>
                Häufige Fragen
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {faqs.map((f, i) => (
                  <div key={i}>
                    <h4 style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 6 }}>{f.question}</h4>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#6B7280', lineHeight: 1.65 }}>{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STANDORTE MIT KARTEN
      ══════════════════════════════════════ */}
      <section id="standorte" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 400, color: '#111', marginBottom: 12 }}>
              Besuche <span style={{ color: '#FDA5D5' }}>unsere Standorte</span>
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#6B7280' }}>
              Besuche PUFU an unseren zwei Standorten in Köln und entdecke japanische Soufflé-Pancakes und Premium Matcha in stilvoller Café-Atmosphäre.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {locations.map((loc, i) => (
              <motion.div key={loc.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#fff', border: '1px solid #f3f4f6', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <div style={{ position: 'relative', height: 200 }}>
                  <iframe src={loc.mapEmbed} width="100%" height="100%"
                    style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title={`Karte von ${loc.name}`} />
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                    style={{ position: 'absolute', top: 10, left: 10, background: '#fff', borderRadius: 8, padding: '4px 10px', fontSize: 12, fontFamily: 'Inter,sans-serif', fontWeight: 500, color: '#111', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    In Karte öffnen ↗
                  </a>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 22, fontWeight: 400, color: '#111', marginBottom: 16 }}>{loc.name}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <MapPin style={{ width: 16, height: 16, color: '#E60076', flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#4B5563', lineHeight: 1.5 }}>{loc.address}<br />{loc.city}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Phone style={{ width: 16, height: 16, color: '#E60076', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#4B5563' }}>{loc.phone}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <Clock style={{ width: 16, height: 16, color: '#E60076', flexShrink: 0, marginTop: 2 }} />
                      <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#4B5563', lineHeight: 1.6 }}>
                        {loc.hours.map((h, idx) => <div key={idx}>{h}</div>)}
                      </div>
                    </div>
                  </div>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', marginTop: 20, textAlign: 'center', padding: '11px 0', borderRadius: 100, border: '1.5px solid #e5e7eb', fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 500, color: '#111', textDecoration: 'none', background: '#fff' }}>
                    Route planen
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PINK CTA MIT KUCHEN-ECKEN
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20" style={{ background: '#E60076' }}>

        <div className="absolute top-0 left-0 pointer-events-none hidden sm:block" style={{ width: 160, zIndex: 2 }}>
          <img src="/b1.png" alt="" className="w-full h-auto block"
            style={{ transform: 'rotate(-15deg)', transformOrigin: 'top left' }} />
        </div>

        <div className="absolute top-0 right-0 pointer-events-none hidden sm:block" style={{ width: 200, zIndex: 2 }}>
          <img src="/b4.png" alt="" className="w-full h-auto block"
            style={{ transformOrigin: 'top right' }} />
        </div>

        <div className="absolute bottom-[-35px] left-0 pointer-events-none hidden sm:block" style={{ width: 170, zIndex: 2 }}>
          <img src="/b2.png" alt="" className="w-full h-auto block"
            style={{ transform: 'rotate(12deg)', transformOrigin: 'bottom left' }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-light tracking-tight mb-6 text-white"
            style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1.1 }}>
            Bereit für deinen PUFU-Moment?
          </h2>
          <p className="mb-8 mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'Inter,sans-serif', fontSize: 16, maxWidth: 560 }}>
            Erlebe japanische Soufflé-Pancakes und Premium Matcha an unseren Standorten in Köln.
            Ideal für Dessert-Liebhaber, Matcha-Fans und alle, die Genuss in stilvoller Atmosphäre suchen.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center rounded-full font-medium transition-all hover:scale-105"
              style={{ background: '#fff', color: '#111', padding: '14px 36px', fontFamily: 'Inter,sans-serif', fontSize: 15, textDecoration: 'none' }}>
              Standorte ansehen
            </Link>
            <Link to="/menu"
              className="inline-flex items-center justify-center rounded-full font-medium transition-all hover:bg-white hover:text-gray-900"
              style={{ background: 'transparent', color: '#fff', padding: '14px 36px', fontFamily: 'Inter,sans-serif', fontSize: 15, textDecoration: 'none', border: '2px solid #fff' }}>
              Menü entdecken
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}