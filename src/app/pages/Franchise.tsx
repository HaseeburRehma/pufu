import { motion } from 'motion/react';
import { useState } from 'react';
import {
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Headphones,
  Target,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Franchise() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    investment: '',
    message: '',
  });
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
          _subject: `Neue Franchise-Anfrage von ${formData.fullName}`,
          _template: 'table'
        }),
      });
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        experience: '',
        investment: '',
        message: '',
      });
    } catch (_) {
      // In a real app, we'd show an error message here
    }
    setSubmitting(false);
  };

  const stats = [
    { value: '4.9', label: 'Durchschnittsbewertung' },
    { value: '2', label: 'Standorte' },
    { value: '4K+', label: 'Zufriedene Kunden' },
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Klare Premium-Positionierung',
      description: 'Ein differenziertes Konzept im Bereich Dessert und Café mit hoher visueller Wiedererkennbarkeit.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Wachsende Nachfrage',
      description: 'Hohe Relevanz bei Dessert-Liebhabern, jungen urbanen Zielgruppen und Social-Media-affinen Gästen.',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Markenstarkes Produkterlebnis',
      description: 'Soufflé-Pancakes und Matcha schaffen ein Angebot mit starkem Erlebnischarakter und hoher Attraktivität am Markt.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Operatives Unterstützungspotenzial',
      description: 'Franchise-Partner profitieren von einem strukturierten Konzeptaufbau, Markenführung und betrieblicher Orientierung.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Standortrelevantes Format',
      description: 'Geeignet für urbane Lagen mit hoher Frequenz und klarer Zielgruppenansprache.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Langfristige Markenentwicklung',
      description: 'PUFU ist auf nachhaltige Markenpräsenz, Wiedererkennbarkeit und kontrolliertes Wachstum ausgelegt.',
    },
  ];

  const process = [
    { step: '01', title: 'Erstkontakt', description: 'Sie übermitteln Ihre Anfrage und erhalten erste Informationen zum Konzept und zu den Anforderungen.' },
    { step: '02', title: 'Kennenlerngespräch', description: 'In einem ersten Gespräch besprechen wir Ihre Ziele, Ihren Hintergrund und das Potenzial einer Zusammenarbeit.' },
    { step: '03', title: 'Standort- und Konzeptprüfung', description: 'Gemeinsam prüfen wir Standortoptionen, Marktpotenzial und die Eignung des geplanten Betriebsmodells.' },
    { step: '04', title: 'Wirtschaftliche Bewertung', description: 'Sie erhalten Einblick in die wesentlichen betriebswirtschaftlichen Rahmenbedingungen und die Struktur des Franchise-Modells.' },
    { step: '05', title: 'Vorbereitung & Umsetzung', description: 'Nach finaler Abstimmung begleiten wir die nächsten Schritte bis zur operativen Umsetzung des Standorts.' },
    { step: '06', title: 'Eröffnung', description: 'Der neue Standort startet mit klarer Markenpräsenz und abgestimmter operativer Einführung.' },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    border: '1.5px solid #e5e7eb',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    color: '#111',
    outline: 'none',
    background: '#fff',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Inter, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    color: '#374151',
    marginBottom: 8,
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* ═══════════════════════════════════
          HERO – soft pink, stats row
      ═══════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg,#fce4ef 0%,#fdf0f7 60%,#fce4ef 100%)', padding: '80px 24px 72px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(230,0,118,0.08)', color: '#E60076', fontSize: 13, fontWeight: 500, fontFamily: 'Inter,sans-serif', padding: '7px 16px', borderRadius: 100, marginBottom: 28 }}>
          ✨ Treten Sie unserer Familie bei
        </div>

        <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(38px,7vw,80px)', fontWeight: 400, lineHeight: 1.05, color: '#111', marginBottom: 24, letterSpacing: '-1px' }}>
          Franchise{' '}
          <span style={{ color: '#FDA5D5' }}>Möglichkeit</span>
        </h1>

        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 'clamp(15px,2vw,18px)', color: '#6B7280', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 56px' }}>
          Werden Sie Teil einer revolutionären Marke, die authentische japanische Soufflé-Pancakes nach Europa bringt.
          Treten Sie PUFU Köln bei und teilen Sie die Magie erstklassiger Desserts mit Ihrer Community.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 64px', maxWidth: 800, margin: '0 auto' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(36px,5vw,56px)', fontWeight: 400, color: '#E60076', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#9CA3AF', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
          INTRO
      ═══════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 400, color: '#111', marginBottom: 20 }}>
              Eine Marke mit klarem{' '}
              <span style={{ color: '#FDA5D5' }}>Konzept</span>
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 16, color: '#6B7280', lineHeight: 1.75, marginBottom: 16 }}>
              PUFU steht für ein hochwertiges Café- und Dessertkonzept mit Fokus auf japanische Soufflé-Pancakes, Premium Matcha und ein visuell starkes Markenerlebnis.
            </p>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 16, color: '#6B7280', lineHeight: 1.75 }}>
              Die Positionierung verbindet Produktqualität, moderne Ästhetik und hohe Attraktivität für eine urbane, sozial aktive Zielgruppe. Damit bietet PUFU eine starke Grundlage für einen skalierbaren Markenauftritt in attraktiven Lagen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          WHY PUFU – 3-col grid
      ═══════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(to bottom,#fff,rgba(252,228,240,0.15))' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 400, color: '#111' }}>
              Warum <span style={{ color: '#FDA5D5' }}>PUFU</span>
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: 'linear-gradient(135deg,rgba(252,228,240,0.2),#fff)', border: '1px solid rgba(253,165,213,0.2)', borderRadius: 20, padding: 32 }}>
                <div style={{ color: '#FDA5D5', marginBottom: 16 }}>{b.icon}</div>
                <h3 style={{ fontFamily: 'Inter,sans-serif', fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#6B7280', lineHeight: 1.65 }}>{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          INVESTMENT OVERVIEW
      ═══════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 400, color: '#111', marginBottom: 20 }}>
              Investitions<span style={{ color: '#FDA5D5' }}>übersicht</span>
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#6B7280', lineHeight: 1.75, marginBottom: 32 }}>
              Die genauen wirtschaftlichen Rahmendaten werden im Rahmen des Franchise-Prozesses transparent vorgestellt und individuell nach Standort, Flächengröße und Ausbaukonzept bewertet.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
              {['Anfangsinvestition', 'Franchise-Gebühr', 'Laufende Lizenzgebühr', 'Marketingbeitrag', 'Wirtschaftlicher Zielhorizont'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle style={{ width: 20, height: 20, color: '#FDA5D5', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 2 }}>{item}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#9CA3AF' }}>[Details werden im Gespräch mitgeteilt]</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#FDF2F8', borderRadius: 16, padding: '16px 20px' }}>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#374151' }}>
                <strong>Hinweis:</strong> Alle Angaben erfolgen standortabhängig und auf Basis der finalen Betriebsstruktur.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                alt="Franchise Möglichkeit"
                className="w-full"
                style={{ height: 480, objectFit: 'cover', display: 'block' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PROCESS – 6 steps
      ═══════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(to bottom,#fff,rgba(252,228,240,0.15))' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 400, color: '#111' }}>
              Der Weg zur <span style={{ color: '#FDA5D5' }}>Partnerschaft</span>
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {process.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: '#fff', border: '1px solid rgba(253,165,213,0.25)', borderRadius: 20, padding: 32 }}>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: 48, fontWeight: 400, color: '#FDA5D5', lineHeight: 1, marginBottom: 16, opacity: 0.7 }}>{s.step}</div>
                <h3 style={{ fontFamily: 'Inter,sans-serif', fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#6B7280', lineHeight: 1.65 }}>{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          IDEAL PARTNER
      ═══════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 400, color: '#111', marginBottom: 24 }}>
              Wen wir <span style={{ color: '#FDA5D5' }}>suchen</span>
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 17, color: '#6B7280', lineHeight: 1.8 }}>
              Wir suchen Partnerinnen und Partner mit unternehmerischem Denken, Qualitätsbewusstsein und dem Anspruch, ein Premium-Konzept professionell umzusetzen. Erfahrung in Gastronomie, Retail oder Standortentwicklung ist von Vorteil, aber nicht in jedem Fall Voraussetzung. Entscheidend sind Markenverständnis, Verlässlichkeit und langfristiges Engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FORM SECTION – pink bg, corner imgs
      ═══════════════════════════════════ */}
      <section
        id="franchise-form"
        style={{ background: '#E60076', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}
      >
        {/* Top-right cake image */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 'clamp(80px,12vw,160px)', zIndex: 2, pointerEvents: 'none' }}>
          <img src="/formtop.png" alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>

        {/* Bottom-left cake image */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 'clamp(80px,12vw,160px)', zIndex: 2, pointerEvents: 'none' }}>
          <img src="/formdown.png" alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>

        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,5vw,60px)', fontWeight: 400, color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
              Starten Sie Ihre{' '}
              <span style={{ color: '#FDA5D5' }}>Reise</span>
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.80)', lineHeight: 1.6 }}>
              Füllen Sie das Formular aus und unser Franchise-Team meldet sich innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>

          {/* White card form */}
          <div style={{ background: '#fff', borderRadius: 24, padding: 'clamp(28px,5vw,48px)', boxShadow: '0 24px 80px rgba(0,0,0,0.18)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 28, color: '#111', marginBottom: 12 }}>Vielen Dank!</h3>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#6B7280' }}>
                  Ihr Franchise-Anfrage wurde erfolgreich übermittelt. Unser Team meldet sich zeitnah bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle}>Vollständiger Name *</label>
                    <input
                      type="text" required placeholder="Max Mustermann"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>E-Mail-Adresse *</label>
                    <input
                      type="email" required placeholder="max@beispiel.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle}>Telefonnummer *</label>
                    <input
                      type="tel" required placeholder="+49 123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Bevorzugter Standort *</label>
                    <input
                      type="text" required placeholder="Berlin, München, etc."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle}>Beruflicher Hintergrund</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      style={{ ...inputStyle, color: formData.experience ? '#111' : '#9CA3AF' }}
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="gastronomie">Gastronomie</option>
                      <option value="retail">Retail / Einzelhandel</option>
                      <option value="andere">Andere Branche</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Investitionsrahmen</label>
                    <select
                      value={formData.investment}
                      onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                      style={{ ...inputStyle, color: formData.investment ? '#111' : '#9CA3AF' }}
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="bis-200k">Bis €200.000</option>
                      <option value="200-300k">€200.000 – €300.000</option>
                      <option value="300k-plus">Über €300.000</option>
                    </select>
                  </div>
                </div>

                {/* Textarea */}
                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Zusätzliche Informationen</label>
                  <textarea
                    rows={4}
                    placeholder="Erzählen Sie uns von Ihrem Interesse an einer PUFU-Franchise..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: '100%',
                    background: '#111',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 100,
                    padding: '16px 32px',
                    fontFamily: 'Inter,sans-serif',
                    fontSize: 16,
                    fontWeight: 500,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    opacity: submitting ? 0.7 : 1,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {submitting ? 'Wird gesendet…' : 'Anfrage absenden'}
                  {!submitting && <ArrowRight style={{ width: 18, height: 18 }} />}
                </button>

                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 16 }}>
                  Mit dem Absenden dieser Anfrage erklären Sie sich damit einverstanden, von unserem Franchise-Team kontaktiert zu werden.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}