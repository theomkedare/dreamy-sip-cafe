import React from 'react';
import { Coffee, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Story
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Where Dreams Began
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dreamy Sip was born from a simple vision: to create a sanctuary where coffee lovers 
              could escape the ordinary and embrace the extraordinary. Founded in 2020, our cafe 
              has become a beloved gathering place for dreamers, creators, and coffee enthusiasts.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every cup we serve, every pastry we bake, and every smile we share is infused with 
              passion and purpose. We believe that coffee is more than a beverage—it's an experience, 
              a moment of joy, and a connection between people.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to quality, sustainability, and community drives everything we do. 
              From sourcing the finest ethically-grown beans to supporting local artisans, we're 
              dedicated to making a positive impact one cup at a time.
            </p>
          </div>
          <div className="animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl p-12 flex items-center justify-center h-96">
                <Coffee size={120} className="text-purple-600 animate-float" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Quality First', desc: 'We never compromise on the quality of our ingredients or the care we put into every creation.' },
              { title: 'Sustainability', desc: 'From bean to cup, we prioritize environmentally responsible practices and ethical sourcing.' },
              { title: 'Community', desc: 'We\'re more than a cafe—we\'re a gathering place where connections are made and memories are created.' }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
