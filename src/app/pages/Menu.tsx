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
    { id: 'matcha', name: 'Ice Matcha Latte' },
    { id: 'mocktails', name: 'Mocktails' },
    { id: 'teas', name: 'Tees' },
  ];

  const menuItems: MenuItem[] = [
    // ─────────────────────────────────────────────
    // SOUFFLE PANCAKES  (sorted low → high price)
    // ─────────────────────────────────────────────

    // €8.50
    {
      id: 1,
      name: 'PUFU Lotus',
      description: 'mit Lotuscreme & Lotus Crumbles',
      price: '€8.50',
      image: '/Menu (7).png',
      category: 'pancakes',
      bg: '#FEF3E2',
      isPopular: true,
    },

    // €8.90
    {
      id: 2,
      name: 'PUFU Choc',
      description: 'mit Nuss-Nougatcreme',
      price: '€8.90',
      image: '/Menu (8).png',
      category: 'pancakes',
      bg: '#FEF3E2',
    },

    // €9.90
    {
      id: 3,
      name: 'PUFU Yuzu Lemon',
      description: 'mit Yuzucreme, Mandelblättern & Zitronenzeste',
      price: '€9.90',
      image: '/pancake3.PNG',
      category: 'pancakes',
      bg: '#FCE8E8',
    },

    // €10.50
    {
      id: 5,
      name: 'PUFU Vanille',
      description: 'mit Vanillesoße, Sahne & Lotus Crumbles',
      price: '€10.50',
      image: '/Menu (9).png',
      category: 'pancakes',
      bg: '#FEF9E2',
    },

    // €10.90 group
    {
      id: 4,
      name: 'PUFU Raffaello',
      description: 'mit weißer Schokolade & Kokosraspeln',
      price: '€10.90',
      image: '/Menu (12).png',
      category: 'pancakes',
      bg: '#FEF3E2',
    },
    {
      id: 6,
      name: 'PUFU Applecrumble',
      description: 'mit Apfelmus, Honig-Butterkeks Crumbles & Zimt',
      price: '€10.90',
      image: '/featured2.png',
      category: 'pancakes',
      bg: '#E8F5E2',
    },
    {
      id: 7,
      name: 'PUFU Classic',
      description: 'mit Puderzucker & Honig',
      price: '€10.90',
      image: '/pancake2.png',
      category: 'pancakes',
      bg: 'rgba(222, 163, 75, 1)',
    },
    {
      id: 8,
      name: 'PUFU Cherry',
      description: 'mit Vanillesoße & heißen Kirschen',
      price: '€10.90',
      image: '/Menu (5).png',
      category: 'pancakes',
      bg: '#FCE8E8',
    },
    {
      id: 9,
      name: 'PUFU Pitaya',
      description: 'mit Drachenfruchtcreme, Chiasamen & Honig',
      price: '€10.90',
      image: '/menu (22).png',
      category: 'pancakes',
      bg: '#FCE8E8',
    },

    // €11.90 group
    {
      id: 10,
      name: 'PUFU Pistazie',
      description: 'mit Pistaziencreme, weißen Schokoraspeln & Pistazienkernen',
      price: '€11.90',
      image: '/Menu (1).png',
      category: 'pancakes',
      bg: '#E8F5E2',
      isPopular: true,
    },
    {
      id: 11,
      name: 'PUFU Mango',
      description: 'mit Mangocreme & Kokosraspeln',
      price: '€11.90',
      image: '/mango.PNG',
      category: 'pancakes',
      bg: '#FEF9E2',
      isNew: true,
    },
    {
      id: 12,
      name: 'PUFU Bueno',
      description: 'mit Haselnusscreme, Schokolinien & Krokant',
      price: '€11.90',
      image: '/Menu (16).png',
      category: 'pancakes',
      bg: '#FCE8E8',
      isPopular: true,
    },
    {
      id: 13,
      name: 'PUFU Matcha',
      description: 'mit Matchacreme & weißen Schokolinien',
      price: '€11.90',
      image: '/Menu.png',
      category: 'pancakes',
      bg: '#E8F5E2',
    },

    // ─────────────────────────────────────────────
    // ICE MATCHA LATTE
    // ─────────────────────────────────────────────
    {
      id: 14,
      name: 'Vanilla Matcha Latte',
      description: 'Premium Matcha mit Vanille Sirup & frischer Milch',
      price: '€6.30',
      image: '/image00001.png',
      category: 'matcha',
      bg: '#E8F5E2',
    },
    {
      id: 15,
      name: 'Strawberry Matcha Latte',
      description: 'Premium Matcha mit Erdbeeren Sirup & frischer Milch',
      price: '€6.30',
      image: '/image00002.png',
      category: 'matcha',
      bg: '#FFF8F1',
      isPopular: true,
    },
    {
      id: 16,
      name: 'Raspberry Matcha Latte',
      description: 'Premium Matcha mit Himbeeren Sirup & frischer Milch',
      price: '€6.30',
      image: '/image00003.png',
      category: 'matcha',
      bg: '#FFF8F1',
    },
    {
      id: 17,
      name: 'Mango Matcha Latte',
      description: 'Premium Matcha mit Mango Sirup & frischer Milch',
      price: '€6.30',
      image: '/image00004.png',
      category: 'matcha',
      bg: '#FEF3E2',
    },
    {
      id: 18,
      name: 'Banana Matcha Latte',
      description: 'Premium Matcha mit Cherry Sirup & frischer Milch',
      price: '€6.30',
      image: '/image00005.png',
      category: 'matcha',
      bg: '#FEF3E2',
    },
    {
      id: 19,
      name: 'Cherry Matcha Latte',
      description: 'Premium Matcha mit Kirsche & frischer Milch',
      price: '€6.30',
      image: '/image00006.png',
      category: 'matcha',
      bg: '#FEF3E2',
    },
    {
      id: 20,
      name: 'Blueberry Matcha Latte',
      description: 'Premium Matcha mit Blaubeere Sirup & frischer Milch',
      price: '€6.30',
      image: '/image00007.png',
      category: 'matcha',
      bg: '#FFF8F1',
    },
    {
      id: 21,
      name: 'Coco Matcha Latte',
      description: 'Premium Matcha mit Kokosnuss Sirup & frischer Milch',
      price: '€6.30',
      image: '/image00008.png',
      category: 'matcha',
      bg: '#FEF3E2',
    },
    {
      id: 22,
      name: 'Yuzu Matcha Latte',
      description: 'Premium Matcha mit Yuzu Sirup & frischer Milch',
      price: '€6.30',
      image: '/image00009.png',
      category: 'matcha',
      bg: '#FEF3E2',
    },
    {
      id: 23,
      name: 'Pitaya Matcha Latte',
      description: 'Premium Matcha mit Pitaya Sirup & frischer Milch',
      price: '€6.30',
      image: '/image00010.png',
      category: 'matcha',
      bg: '#FFF8F1',
      isNew: true,
    },
    {
      id: 24,
      name: 'Pistachio Matcha Latte',
      description: 'Premium Matcha mit Pistazien Sirup & frischer Milch',
      price: '€6.30',
      image: '/Menu (3).png',
      category: 'matcha',
      bg: '#E8F5E2',
      isPopular: true,
    },

    // ─────────────────────────────────────────────
    // MOCKTAILS
    // ─────────────────────────────────────────────
    {
      id: 25,
      name: 'Yuzu Lime Sparkle',
      description: 'Yuzu Sirup & Holunder Sirup, Minze-Extrakt, Wildberry & Sprudelwasser',
      price: '€4.90',
      image: '/Menu (10).png',
      category: 'mocktails',
      bg: '#E8F5E2',
    },
    {
      id: 26,
      name: 'Raspberry Dream',
      description: 'Himbeerpüree & Himbeer Sirup, Minze-Extrakt, Wildberry & Sprudelwasser',
      price: '€4.90',
      image: '/2.png',
      category: 'mocktails',
      bg: '#FFF8F1',
    },
    {
      id: 27,
      name: 'Mango Glow',
      description: 'Mangopüree & Pfirsich-Maracuja Sirup, Minze-Extrakt, Wildberry & Sprudelwasser',
      price: '€4.90',
      image: '/3.png',
      category: 'mocktails',
      bg: '#FEF3E2',
      isNew: true,
    },

    // ─────────────────────────────────────────────
    // TEES
    // ─────────────────────────────────────────────
    {
      id: 28,
      name: 'Pink Iced Tea',
      description: 'Pfanner Wassermelone Ice Tea & Wildberry, garniert mit frischem Minzblatt',
      price: '€3.90',
      image: '/Menu (19).png',
      category: 'teas',
      bg: '#FFF8F1',
    },
    {
      id: 29,
      name: 'Frischer Minztee',
      description: 'Frische Minzstängel mit heißem Wasser & Honig',
      price: '€3.90',
      image: '/Menu (2).png',
      category: 'teas',
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
        style={{ background: 'linear-gradient(135deg, #FFF8F1 0%, #fff 50%, #FFF8F1 100%)', paddingTop: 72, paddingBottom: 72 }}
      >
        {/* Watermark text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <span
            className="absolute text-gray-100 font-bold uppercase"
            style={{
              fontSize: 'clamp(60px, 12vw, 140px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.4,
              zIndex: 0,
              whiteSpace: 'nowrap',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            MENU
          </span>
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f5f5f5', color: '#444', fontSize: 13, fontWeight: 500, fontFamily: 'Inter, sans-serif', padding: '7px 16px', borderRadius: 100, marginBottom: 24 }}>
            ✨ Authentisch & handgemacht
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 400, color: '#111', marginBottom: 20 }}>
            Unser <span style={{ color: '#FBC49D' }}>Menü</span>
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
                        background: '#444', color: '#fff',
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
                      fontWeight: 500, color: '#FBC49D', flexShrink: 0,
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
            Noch unentschlossen?
          </h3>
          <p style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif', fontSize: 15, maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.65 }}>
            Unser Team hilft dir gerne dabei, deine neue Lieblingskombination aus Soufflé-Pancakes, Matcha und Dessert-Specials zu entdecken.
          </p>

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