import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MessageCircle, Send, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact - DevBlog</title>
        <meta name="description" content="Get in touch with DevBlog. We'd love to hear from you about article suggestions, collaborations, or any questions you might have." />
        <meta name="keywords" content="contact devblog, get in touch, developer community, feedback, collaboration" />
        <meta property="og:title" content="Contact - DevBlog" />
        <meta property="og:description" content="Get in touch with DevBlog. We'd love to hear from you about article suggestions, collaborations, or any questions you might have." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devblog.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Send us a Message</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Whether you have a question, feedback, or want to collaborate, we're here to help.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                      placeholder="Article suggestion, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">hello@devblog.com</p>
                        <p className="text-gray-600 dark:text-gray-300">support@devblog.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Monday - Friday, 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          123 Developer Street<br />
                          Tech City, TC 12345<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Response Time</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We typically respond within 24 hours during business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How can I contribute an article?</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        We welcome guest contributions! Send us your article idea and we'll get back to you with our guidelines.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Do you accept sponsored content?</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        We carefully review sponsored content proposals to ensure they align with our quality standards and provide value to our readers.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Can I request a specific topic?</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Absolutely! We love hearing from our community about what topics you'd like to see covered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;