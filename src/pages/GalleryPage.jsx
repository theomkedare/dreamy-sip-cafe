import React, { useState } from 'react';
import { Camera, Instagram, Facebook, Twitter } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    { id: 1, category: 'interior', alt: 'Cozy cafe interior' },
    { id: 2, category: 'food', alt: 'Delicious pastries' },
    { id: 3, category: 'drinks', alt: 'Artisan coffee' },
    { id: 4, category: 'interior', alt: 'Window seating area' },
    { id: 5, category: 'food', alt: 'Fresh breakfast' },
    { id: 6, category: 'drinks', alt: 'Specialty drinks' },
    { id: 7, category: 'interior', alt: 'Outdoor patio' },
    { id: 8, category: 'food', alt: 'Artisan sandwiches' },
    { id: 9, category: 'drinks', alt: 'Coffee art' }
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A visual journey through our dreamy space, delicious offerings, and memorable moments
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {['all', 'interior', 'food', 'drinks'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-purple-50'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredGallery.map((image, idx) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-purple-200 to-pink-200 hover:shadow-2xl transition-all duration-500 animate-fadeIn"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera size={64} className="text-purple-600 opacity-30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">Follow us on social media for more dreamy moments!</p>
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Instagram size={24} />
            </button>
            <button className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Facebook size={24} />
            </button>
            <button className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Twitter size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
