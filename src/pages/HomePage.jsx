import React from 'react';
import { Coffee, ChevronRight, Star, Utensils } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const testimonials = [
    { name: 'Sarah M.', rating: 5, text: 'The most magical cafe experience! The atmosphere is absolutely dreamy and the coffee is perfection.' },
    { name: 'James L.', rating: 5, text: 'A hidden gem! Perfect spot for working or meeting friends. The pastries are incredible.' },
    { name: 'Emma R.', rating: 5, text: 'I come here every weekend. The staff is wonderful and the ambiance is unmatched.' }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50 opacity-90"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)',
          filter: 'blur(60px)'
        }}></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl animate-fadeInUp">
          <div className="mb-6 inline-block">
            <Coffee size={64} className="text-purple-600 animate-float" />
          </div>
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 bg-clip-text text-transparent leading-tight" 
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Where Dreams<br />Meet Coffee
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed" 
             style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Step into a world where every sip is an experience, every moment is magical, 
            and every visit feels like coming home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('menu')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Menu <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-600"
            >
              Make Reservation
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Dreamy Sip?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Coffee size={40} />, title: 'Artisan Coffee', desc: 'Expertly crafted beverages using premium, ethically-sourced beans' },
              { icon: <Utensils size={40} />, title: 'Fresh Pastries', desc: 'Baked daily with love using the finest local ingredients' },
              { icon: <Star size={40} />, title: 'Dreamy Atmosphere', desc: 'A cozy sanctuary designed for comfort, creativity, and connection' }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-purple-600">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join Our Dreamy Community
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Subscribe to get exclusive offers, event updates, and coffee inspiration delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
