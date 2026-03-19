import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles, Award, Heart, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const featuredItems = [
    {
      name: 'Classic Soufflé',
      description: 'Light, fluffy, and delicate',
      price: '€12.90',
      image: '/Menu (5).png',
      bg: '#fce8e8',
    },
    {
      name: 'Matcha Dreams',
      description: 'Premium matcha blend',
      price: '€6.50',
      image: '/featured2.png',
      bg: '#fdf3e0',
    },
    {
      name: 'Strawberry Cloud',
      description: 'Topped with fresh berries',
      price: '€14.50',
      image: '/featured3.png',
      bg: '#f5e6e0',
    },
  ];

  const testimonials = [
    {
      name: 'Berk Tezel',
      text: 'I had an amazing experience at this pancake place! The pancakes were incredibly fluffy, perfectly cooked, and full of flavor.',
      rating: 5,
    },
    {
      name: 'Adnan Syed',
      text: 'The staff was nice and easygoing. I liked that they are multilingual which has added a cool touch. If you’re into sweets, it’s worth a try. definitely 5 stars.',
      rating: 5,
    },
    {
      name: 'Ines Ouadi',
      text: 'Real fluffy pancakes ! So hard to find!🤩 Drinks are amazing and the services is top 😁',
      rating: 5,
    },
    {
      name: 'Ahmad Faiq Anwar',
      text: 'This spot is right next to our Airbnb, and I think the pancakes are absolutely delicious. My favorite is the Oreo pancake. Definitely a 5/5!',
      rating: 5,
    },
    {
      name: 'Jhos Sánchez',
      text: 'The Japanese pistachio pancake was delicious',
      rating: 5,
    },
    {
      name: 'Hakan Bektas',
      text: 'I ordered the Oreo pancake; it tasted good. The staff were nice and helpful. A small but nice place.',
      rating: 4,
    },
  ];

  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Premium Qualität',
      description: 'Sorgfältig ausgewählte Zutaten und ein hoher Anspruch an Geschmack',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Japanisch inspiriert',
      description: 'Leichtigkeit japanischer Dessertkultur mit modernem Café-Erlebnis',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Stilvoll genießen',
      description: 'Ein Ort für besondere Momente – elegant und unvergesslich',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Frische Zubereitung',
      description: 'Jede Bestellung wird frisch vorbereitet für beste Qualität',
    },
  ];

  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full bg-white overflow-hidden"

      >
        <div className="max-w-7xl mx-auto px-5 lg:px-12 pt-8 pb-8 lg:pt-[20px] lg:pb-16 flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-0">

          {/* ── LEFT COLUMN ── */}
          <div className="relative z-10 w-full lg:w-[480px] flex-shrink-0">

            {/* Cake 1 – top-left, above badge */}
            <div className="absolute hidden lg:block pointer-events-none"
              style={{ width: 200, top: -110, left: 0, transform: 'rotate(18.61deg)', zIndex: 3 }}>
              <img src="/e328f4a38880389bbbae30e89f741e4dac8084a0.png" alt="" style={{ width: '45%', display: 'block' }} />
            </div>

            {/* Cake 2 – top-right */}
            <div className="absolute hidden lg:block pointer-events-none"
              style={{ width: 200, top: -45, right: -55, transform: 'rotate(23.31deg)', zIndex: 3 }}>
              <img src="/58e0c08676ff122ffadad1d17cb832c76834cdb8.png" alt="" style={{ width: '45%', display: 'block' }} />
            </div>

            {/* Cake 3 – bottom-right */}
            <div className="absolute hidden lg:block pointer-events-none"
              style={{ width: 200, bottom: 80, right: -80, transform: 'rotate(-28deg)', zIndex: 3 }}>
              <img src="/68a279ee9b9b6b4c7ca2098d51b893127548c862.png" alt="" style={{ width: '45%', display: 'block' }} />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full mb-7"
              style={{ background: '#FDF2F8', color: '#E60076', fontSize: 13, fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
              <span>✨</span>
              <span>Köln Arcaden &amp; Ehrenfeld</span>
            </div>

            {/* Heading */}
            <h1 style={{ fontFamily: 'Georgia, serif', lineHeight: 1.08, marginBottom: 20 }}>
              <span className="block text-[#111]" style={{ fontSize: 'clamp(40px, 5vw, 58px)', fontWeight: 400, letterSpacing: '-0.5px' }}>
                Japanische
              </span>
              <span className="inline-block" style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(40px, 5vw, 58px)',
                fontWeight: 400,
                color: '#FDA5D5',
                letterSpacing: '-0.5px',
                lineHeight: 1.12,
                marginTop: 4,
              }}>
                Soufflé-Pancakes<br />&amp; Premium<br />Matcha in Köln
              </span>
            </h1>

            {/* Sub */}
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#555', lineHeight: 1.65, maxWidth: 380, marginBottom: 36 }}>
              Entdecke <strong style={{ color: '#111', fontWeight: 600 }}>PUFU</strong> – dein stylisches Café für luftige Soufflé-Pancakes, hochwertige Matcha-Spezialitäten und besondere Genussmomente in Köln.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5">
              <Link to="/menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-medium"
                style={{ background: '#111', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                Menü entdecken <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium"
                style={{ background: 'transparent', color: '#111', border: '1.5px solid #ddd', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                Standorte ansehen
              </Link>
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="relative w-full lg:w-auto lg:flex-1 lg:flex lg:justify-end">
            <img
              src="/Container.png"
              alt="Japanese Soufflé Pancakes display"
              className="w-full lg:w-auto lg:max-w-[640px] block"
              style={{ borderRadius: 20, objectFit: 'cover' }}
            />
            {/* Rating badge */}


          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════
          FEATURED ITEMS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Unsere Signatur
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bei PUFU trifft japanische Dessertkultur auf ein modernes, elegantes Café-Erlebnis.
              Unsere Soufflé-Pancakes werden frisch zubereitet und mit viel Liebe zum Detail serviert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col"
              >
                {/* Card image box with solid bg color */}
                <div
                  className="relative overflow-hidden rounded-2xl mb-5 flex items-center justify-center"
                  style={{ background: item.bg, aspectRatio: '1/1' }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text below card */}
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-1" style={{ fontFamily: 'Georgia, serif' }}>{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                  <p className="font-semibold text-base" style={{ color: '#E60076' }}>{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center font-semibold transition-colors"
              style={{ color: '#E60076', textDecoration: 'none', fontSize: 15 }}
            >
              Menü anschauen <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          STORY SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left – image with blue border */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="w-full overflow-hidden"

              >
                <ImageWithFallback
                  src="/Container (2).png"
                  alt="PUFU Küche – frische Soufflé-Zubereitung"
                  className="w-full "

                />
              </div>
            </motion.div>

            {/* Right – text + values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-start pt-0 lg:pt-2"
            >
              <h2
                className="font-light tracking-tight mb-6"
                style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1 }}
              >
                Die Welt von <span style={{ color: '#FDA5D5' }}>PUFU</span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: 15 }}>
                PUFU steht für ein hochwertiges Dessert-Erlebnis, inspiriert von japanischer Präzision, feinen Zutaten und moderner Ästhetik.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: 15 }}>
                In unseren Cafés in Köln servieren wir Soufflé-Pancakes und Matcha in einem Ambiente, das Genuss, Qualität und Stil miteinander verbindet.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: 15 }}>
                Jeder Besuch bei PUFU soll sich besonders anfühlen – entspannt, elegant und geschmacklich unvergesslich.
              </p>

              <h3
                className="font-light mb-6"
                style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 2.5vw, 26px)' }}
              >
                Wofür PUFU steht
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center p-5 bg-white rounded-2xl"
                    style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}
                  >
                    <div className="mb-3 flex justify-center" style={{ color: '#FDA5D5' }}>{value.icon}</div>
                    <h4 className="font-semibold mb-1.5" style={{ fontSize: 13, color: '#111', fontFamily: 'Inter, sans-serif' }}>{value.title}</h4>
                    <p style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROMO BANNER
      ═══════════════════════════════════════════ */}
      <section className="py-16" style={{ background: 'linear-gradient(to right, rgba(252,231,243,0.4), rgba(255,255,255,0.4), rgba(252,231,243,0.4))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl relative overflow-hidden"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10)', minHeight: 220 }}
          >
            {/* Decorative blur blob */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 pointer-events-none"
              style={{ background: '#fce7f3', filter: 'blur(60px)' }}
            />

            {/* Drink image — exact Figma position */}
            <div
              className="absolute hidden sm:block pointer-events-none"
              style={{
                width: 500,

                top: -80,
                left: -200,
                transform: 'rotate(0deg)',
                opacity: 1,
                zIndex: 2,
              }}
            >
              <ImageWithFallback
                src="/promobanner.png"
                alt="PUFU Drink"
                className="w-full block"
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Text content — padded left on desktop to clear the image */}
            <div
              className="relative z-10 text-center py-12 px-6"

            >
              <Sparkles
                className="mx-auto mb-4"
                style={{ width: 44, height: 44, color: '#FDA5D5' }}
              />
              <h3
                className="font-light mb-4"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(22px, 3.5vw, 36px)',
                  color: '#111',
                  lineHeight: 1.2,
                }}
              >
                Ein besonderer Genussmoment in Köln
              </h3>
              <p
                className="mb-8 mx-auto leading-relaxed"
                style={{
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 15,
                  maxWidth: 560,
                }}
              >
                Ob für einen süßen Zwischenstopp, ein Treffen mit Freunden oder deinen nächsten
                Matcha-Moment – bei PUFU erwartet dich ein Dessert-Erlebnis, das Geschmack und
                Ästhetik vereint.
              </p>
              <a
                href="https://www.google.com/maps/place/PUFU/@50.9439811,6.9137843,13z/data=!4m12!1m2!2m1!1spufu!3m8!1s0x47bf25d3d26e3dbd:0x80960f5d81be9d56!8m2!3d50.9498431!4d6.9119139!9m1!1b1!15sCgRwdWZ1WgYiBHB1ZnWSARtqYXBhbmVzZV9jb25mZWN0aW9uZXJ5X3Nob3DgAQA!16s%2Fg%2F11lnw29pw7?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full text-white font-medium transition-all hover:scale-105"
                style={{
                  background: '#111',
                  padding: '14px 32px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                Jetzt besuchen <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Was unsere Gäste begeistert
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              PUFU ist für viele mehr als ein Café – es ist ein Ort für besondere Desserts, schöne Atmosphäre und kleine Genussrituale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50/30 to-white p-8 rounded-2xl shadow-sm border border-pink-100/50"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-pink-400" : "text-gray-200"}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-4">„{testimonial.text}"</p>
                <p className="font-medium text-gray-900">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://www.google.com/maps/place/PUFU/@50.9439811,6.9137843,13z/data=!4m12!1m2!2m1!1spufu!3m8!1s0x47bf25d3d26e3dbd:0x80960f5d81be9d56!8m2!3d50.9498431!4d6.9119139!9m1!1b1!15sCgRwdWZ1WgYiBHB1ZnWSARtqYXBhbmVzZV9jb25mZWN0aW9uZXJ5X3Nob3DgAQA!16s%2Fg%2F11lnw29pw7?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-pink-200 text-[#E60076] font-medium hover:bg-pink-50 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Alle Bewertungen auf Google ansehen <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: '#E60076' }}
      >
        {/* ── Corner cake images ── */}

        {/* Top-left – chocolate cake */}
        <div className="absolute top-0 left-0 pointer-events-none hidden sm:block" style={{ width: 160, zIndex: 2 }}>
          <img
            src="/b1.png"
            alt=""
            className="w-full h-auto block"
            style={{ transform: 'rotate(-15deg)', transformOrigin: 'top left' }}
          />
        </div>

        {/* Top-right – caramel crumble + drink */}
        <div className="absolute top-0 right-0 pointer-events-none hidden sm:block" style={{ width: 200, zIndex: 2 }}>
          <img
            src="/b4.png"
            alt=""
            className="w-full h-auto block"
            style={{ transformOrigin: 'top right' }}
          />
        </div>

        {/* Bottom-left – matcha/green cake */}
        <div className="absolute bottom-[-35px] left-0 pointer-events-none hidden sm:block" style={{ width: 170, zIndex: 2 }}>
          <img
            src="/b2.png"
            alt=""
            className="w-full h-auto block"
            style={{ transform: 'rotate(12deg)', transformOrigin: 'bottom left' }}
          />
        </div>

        {/* Bottom-right – red berry */}


        {/* ── Content ── */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-light tracking-tight mb-6 text-white"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
          >
            Besuche PUFU in Köln
          </h2>
          <p
            className="mb-10 mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'Inter, sans-serif', fontSize: 16, maxWidth: 640 }}
          >
            Erlebe japanische Soufflé-Pancakes und Premium Matcha an unseren Standorten in Köln. Ideal für
            Dessert-Liebhaber, Matcha-Fans und alle, die Genuss in stilvoller Atmosphäre suchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full font-medium transition-all hover:scale-105"
              style={{
                background: '#fff',
                color: '#111',
                padding: '14px 36px',
                fontFamily: 'Inter, sans-serif',
                fontSize: 15,
                textDecoration: 'none',
                border: 'none',
              }}
            >
              Standorte ansehen
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full font-medium transition-all hover:bg-white hover:text-gray-900"
              style={{
                background: 'transparent',
                color: '#fff',
                padding: '14px 36px',
                fontFamily: 'Inter, sans-serif',
                fontSize: 15,
                textDecoration: 'none',
                border: '2px solid #fff',
              }}
            >
              Menü entdecken
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}