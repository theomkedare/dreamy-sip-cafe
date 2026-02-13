import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const LocationPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Visit Us
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Find your way to our dreamy sanctuary
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8 animate-fadeInLeft">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Our Location
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    123 Dreamy Lane<br />
                    Coffee District<br />
                    City Center, ST 12345
                  </p>
                </div>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
                Get Directions
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl">
                  <Clock size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Opening Hours
                  </h3>
                  <div className="space-y-3">
                    {[
                      { days: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
                      { days: 'Saturday', hours: '8:00 AM - 9:00 PM' },
                      { days: 'Sunday', hours: '8:00 AM - 7:00 PM' }
                    ].map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                        <span className="font-semibold text-gray-700">{schedule.days}</span>
                        <span className="text-purple-600 font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl h-full min-h-[500px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={80} className="text-purple-600 mx-auto mb-4 animate-float" />
                <p className="text-2xl font-semibold text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Interactive Map Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
