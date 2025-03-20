import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for contacting us! We will get back to you shortly.'
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Streamline Healthcare Staffing
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-teal-100">
              Optimize clinical operations, enhance workforce scheduling, and improve patient care with our comprehensive platform.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-teal-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm"
            >
              <div className="px-6 py-6">
                <h2 className="text-2xl font-bold text-teal-800 mb-4">Contact Us for Support</h2>
                <p className="text-gray-600 mb-6">
                  Reach out to our team for any questions or support. Our team is here to assist you with staffing and management solutions.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700">Support</h3>
                    <p className="text-gray-600">1-800-555-1234</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700">Inquiries</h3>
                    <p className="text-gray-600">support@careforceone.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm"
            >
              <div className="px-6 py-6">
                {formStatus.submitted ? (
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <svg className="h-12 w-12 text-teal-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Message Sent!</h3>
                    <p className="text-teal-700 mb-4">{formStatus.message}</p>
                    <button 
                      onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Enter your full name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Your Full Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Provide your email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Tell your message here
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Your message or question..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none"
                    >
                      Submit your information now
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className=" py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Our Locations</h2>
            <p className="text-teal-700 mb-8">
              We offer comprehensive healthcare staffing solutions across multiple locations, providing reliable management and support to enhance patient care and clinical operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-teal-800 p-6 rounded-lg shadow-sm border border-teal-600">
                <h3 className="text-lg font-semibold text-white mb-2">Los Angeles</h3>
                <p className="text-teal-200">Downtown, CA 90012</p>
              </div>

              <div className="bg-teal-800 p-6 rounded-lg shadow-sm border border-teal-600">
                <h3 className="text-lg font-semibold text-white mb-2">Miami</h3>
                <p className="text-teal-200">FL 33130</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;