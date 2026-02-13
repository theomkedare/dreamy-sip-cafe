import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call (replace with your actual backend endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demonstration, we'll log the data and show success
      console.log('Reservation Data:', formData);
      
      // You can integrate with EmailJS, your backend API, or other services here
      // Example with EmailJS (you'll need to install emailjs-com):
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Error submitting reservation:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Have questions or want to make a reservation? We'd love to hear from you!
          </p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus && (
          <div className={`max-w-2xl mx-auto mb-8 p-4 rounded-2xl flex items-center gap-3 animate-fadeIn ${
            submitStatus === 'success' 
              ? 'bg-green-50 border-2 border-green-500' 
              : 'bg-red-50 border-2 border-red-500'
          }`}>
            {submitStatus === 'success' ? (
              <>
                <CheckCircle className="text-green-600" size={24} />
                <div>
                  <p className="font-semibold text-green-800">Reservation Confirmed!</p>
                  <p className="text-sm text-green-700">We'll send you a confirmation email shortly.</p>
                </div>
              </>
            ) : (
              <>
                <AlertCircle className="text-red-600" size={24} />
                <div>
                  <p className="font-semibold text-red-800">Oops! Something went wrong.</p>
                  <p className="text-sm text-red-700">Please try again or call us directly.</p>
                </div>
              </>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fadeInLeft">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Information
              </h2>
              <div className="space-y-6">
                {[
                  { icon: <Phone size={24} />, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
                  { icon: <Mail size={24} />, label: 'Email', value: 'hello@dreamysip.com', link: 'mailto:hello@dreamysip.com' }
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.link}
                    className="flex items-center gap-4 hover:scale-105 transition-transform"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{contact.label}</p>
                      <p className="text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                Follow Our Journey
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={24} />, label: 'Instagram', link: '#' },
                  { icon: <Facebook size={24} />, label: 'Facebook', link: '#' },
                  { icon: <Twitter size={24} />, label: 'Twitter', link: '#' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {social.icon}
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                Make a Reservation
              </h2>
              <form onSubmit={handleReservation} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Time *</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Guests *</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                    placeholder="Any dietary restrictions or special requests?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Reservation'}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We'll confirm your reservation via email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
