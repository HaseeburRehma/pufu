import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  bg: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'pancakes', name: 'Souffle Pancakes' },
    { id: 'drinks', name: 'Getränke' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'PUFU Classic',
      description: 'mit Puderzucker & Honig',
      price: '€12.90',
      image: '/Menu (7).png',
      category: 'pancakes',
      bg: '#FEF3E2',
    },
    {
      id: 2,
      name: 'PUFU Cherry',
      description: 'mit heißen Kirschen & Vanillesoße',
      price: '€14.50',
      image: '/Menu (8).png',
      category: 'pancakes',
      bg: '#FEF3E2',
    },
    {
      id: 3,
      name: 'PUFU Pistazie',
      description: 'mit Pistaziencreme, weißen Schokoraspeln & Pistazien',
      price: '€15.90',
      image: '/Menu (13).png',
      category: 'pancakes',
      bg: '#FCE8E8',
      isPopular: true,
    },
    {
      id: 4,
      name: 'PUFU Bueno',
      description: 'mit Haselnusscreme, Schoko & Krokant',
      price: '€16.50',
      image: '/Menu (5).png',
      category: 'pancakes',
      bg: '#FCE8E8',
      isPopular: true,
    },
    {
      id: 5,
      name: 'PUFU Choc',
      description: 'mit Nuss-Nougatcreme & Schokoperls',
      price: '€15.50',
      image: '/Menu (9).png',
      category: 'pancakes',
      bg: '#FEF3E2',
    },
    {
      id: 6,
      name: 'PUFU Lotus',
      description: 'mit Lotuscreme & Lotus Crumbles',
      price: '€14.90',
      image: '/Menu (10).png',
      category: 'pancakes',
      bg: '#FEF9E2',
    },
    {
      id: 7,
      name: 'PUFU Raffaello',
      description: 'mit weißer Schoko & Kokosraspeln',
      price: '€14.50',
      image: '/Menu (12).png',
      category: 'pancakes',
      bg: '#E8F5E2',
    },
    {
      id: 8,
      name: 'PUFU Vanille',
      description: 'mit Vanillesoße, Sahne & Lotuscrumbles',
      price: '€12.90',
      image: '/Menu (1).png',
      category: 'pancakes',
      bg: '#FCE8E8',
    },
    {
      id: 9,
      name: 'PUFU Yuzu Lemon',
      description: 'mit Yuzucreme, Mandelblätter & Zitronenzeste',
      price: '€15.90',
      image: '/Menu (6).png',
      category: 'pancakes',
      bg: '#FCE8E8',
    },
    {
      id: 10,
      name: 'PUFU Applecrumble',
      description: 'mit Apfelmus, Butterkekscrumble & Zimt',
      price: '€14.90',
      image: '/Menu.png',
      category: 'pancakes',
      bg: '#E8F5E2',
    },
    {
      id: 11,
      name: 'PUFU Pitaya',
      description: 'mit Drachenfruchtcreme, Chiasamen & Honig',
      price: '€14.50',
      image: '/Menu (3).png',
      category: 'pancakes',
      bg: '#FEF3E2',
    },
    {
      id: 12,
      name: 'PUFU Mango',
      description: 'mit Mangocreme, Minze & Kokosraspeln',
      price: '€14.90',
      image: '/Menu (11).png',
      category: 'pancakes',
      bg: '#FEF3E2',
    },
    {
      id: 13,
      name: 'Premium Matcha Latte',
      description: 'Authentic ceremonial grade matcha with oat milk',
      price: '€6.50',
      image: '/Menu (4).png',
      category: 'drinks',
      bg: '#E8F5E2',
    },
    {
      id: 14,
      name: 'Mizu Mocktails',
      description: 'Yuzu Lime Sparkle, Raspberry Dream or Mango Glow',
      price: '€6.20',
      image: '/Menu (11).png',
      category: 'drinks',
      bg: '#FCE8E8',
    },
    {
      id: 15,
      name: 'Vanilla Bean Shake',
      description: 'Creamy vanilla shake with real vanilla bean',
      price: '€7.50',
      image: '/Menu (1).png',
      category: 'drinks',
      bg: '#FEF3E2',
    },
    {
      id: 16,
      name: 'Signature Mochi',
      description: 'Handmade mochi with premium fillings (3 pieces)',
      price: '€8.90',
      image: '/Menu (12).png',
      category: 'desserts',
      bg: '#FEF3E2',
    },
    {
      id: 17,
      name: 'Matcha Tiramisu',
      description: 'Italian classic with a Japanese twist',
      price: '€9.50',
      image: '/Menu (13).png',
      category: 'desserts',
      bg: '#E8F5E2',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fce4ef 0%, #fdf0f7 50%, #fce4ef 100%)', paddingTop: 72, paddingBottom: 72 }}
      >
        {/* Watermark text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          {['pufu', 'pufu', 'pufu', 'pufu', 'pufu', 'pufu'].map((t, i) => (
            <span
              key={i}
              className="absolute text-pink-200 font-bold uppercase"
              style={{
                fontSize: 'clamp(60px, 10vw, 120px)',
                opacity: 0.18,
                whiteSpace: 'nowrap',
                top: `${[8, 28, 48, 68][i % 4]}%`,
                left: `${[-10, 20, 50, 80][i % 4]}%`,
                transform: 'rotate(-15deg)',
                fontFamily: 'Georgia, serif',
                letterSpacing: 16,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Floating cake – top-left */}
        <div className="absolute top-4 left-70 hidden sm:block pointer-events-none" style={{ width: 100, zIndex: 2 }}>
          <img src="/58e0c08676ff122ffadad1d17cb832c76834cdb8.png" alt="" className="w-full h-auto drop-shadow-md" style={{ transform: 'rotate(20deg)' }} />
        </div>

        {/* Floating cake – top-right */}
        <div className="absolute top-4 right-70 hidden sm:block pointer-events-none" style={{ width: 100, zIndex: 2 }}>
          <img src="/68a279ee9b9b6b4c7ca2098d51b893127548c862.png" alt="" className="w-full h-auto drop-shadow-md" style={{ transform: 'rotate(-20deg)' }} />
        </div>

        {/* Floating cake – bottom-left */}
        <div className="absolute bottom-4 left-70 hidden sm:block pointer-events-none" style={{ width: 100, zIndex: 2 }}>
          <img src="/e328f4a38880389bbbae30e89f741e4dac8084a0.png" alt="" className="w-full h-auto drop-shadow-md" style={{ transform: 'rotate(20deg)' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(230,0,118,0.10)', color: '#E60076', fontSize: 13, fontWeight: 500, fontFamily: 'Inter, sans-serif' }}
          >
            ✨ Unser Menü
          </div>

          <h1
            className="font-light tracking-tight mb-4"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(38px, 6vw, 64px)', lineHeight: 1.1, color: '#111' }}
          >
            Unser <span style={{ color: '#FDA5D5' }}>Menü</span>
          </h1>

          <p style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px' }}>
            Entdecke die Welt von PUFU – japanische Soufflé-Pancakes, Premium Matcha und feine Dessert-Kreationen in stilvoller Atmosphäre.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATEGORY FILTER
      ═══════════════════════════════════════ */}
      <div
        className="sticky z-40 border-b"
        style={{ top: 64, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', borderColor: '#f0f0f0', padding: '16px 0' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 100,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.2s',
                  background: activeCategory === cat.id ? '#111' : '#fff',
                  color: activeCategory === cat.id ? '#fff' : '#555',
                  boxShadow: activeCategory === cat.id ? '0 4px 14px rgba(0,0,0,0.15)' : '0 0 0 1.5px #e5e7eb',
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MENU GRID
      ═══════════════════════════════════════ */}
      <section style={{ padding: '48px 0 64px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group"
                style={{ borderRadius: 16, overflow: 'hidden', background: '#fff', cursor: 'pointer' }}
              >
                {/* Image box */}
                <div
                  className="relative overflow-hidden"
                  style={{ background: item.bg, aspectRatio: '1/1', borderRadius: 14 }}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.isPopular && (
                      <span style={{
                        background: '#111', color: '#fff',
                        fontSize: 11, fontWeight: 600, padding: '4px 10px',
                        borderRadius: 100, fontFamily: 'Inter, sans-serif',
                      }}>
                        Popular
                      </span>
                    )}
                    {item.isNew && (
                      <span style={{
                        background: '#E60076', color: '#fff',
                        fontSize: 11, fontWeight: 600, padding: '4px 10px',
                        borderRadius: 100, fontFamily: 'Inter, sans-serif',
                      }}>
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Text */}
                <div style={{ padding: '14px 4px 8px' }}>
                  <div className="flex items-baseline justify-between gap-2" style={{ marginBottom: 6 }}>
                    <h3 style={{
                      fontFamily: 'Georgia, serif', fontSize: 17,
                      fontWeight: 400, color: '#111', lineHeight: 1.3,
                    }}>
                      {item.name}
                    </h3>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 15,
                      fontWeight: 500, color: '#E60076', flexShrink: 0,
                    }}>
                      {item.price}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#9CA3AF', lineHeight: 1.55 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════

          BOTTOM CTA
      ═══════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(90deg, rgba(253, 242, 248, 0.03) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0) 100%);', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3
            className="font-light mb-4"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', color: '#111' }}
          >
            Noch unentschlossen?          </h3>
          <p style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif', fontSize: 15, maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.65 }}>
            Unser Team hilft dir gerne dabei, deine neue Lieblingskombination aus Soufflé-Pancakes, Matcha und Dessert-Specials zu entdecken.          </p>

          <div style={{ marginTop: 20 }}>
            <Link
              to="/kontakt"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#111', color: '#fff',
                padding: '14px 32px', borderRadius: 100,
                fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Besuche uns in Köln
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}