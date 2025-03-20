import React from 'react';
import { motion } from 'framer-motion';
import reception from '../assests/reception.jpg';
import isolation from '../assests/isolation.jpg';

const Services = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      id: 1,
      title: 'Centralized Management',
      description: 'Our platform centralizes staffing, compliance, and billing for healthcare organizations, improving efficiency and ensuring quality patient care while maintaining regulatory standards across all operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Role-Based Access',
      description: 'Implementing role-based access control enhances security and ensures that only authorized personnel can manage sensitive patient data and operational workflows, fostering a compliant and efficient healthcare environment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-teal-800 mb-4">
            Streamline Healthcare Staffing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optimize clinical operations, enhance workforce scheduling, and improve patient care with our comprehensive platform.
          </p>
        </motion.div>
      </div>

      {/* Hero Banner */}
      <div className="relative mb-24">
        <div className="absolute inset-0 bg-teal-900/30 z-10"></div>
        <div className="relative h-96 overflow-hidden">
          <img 
            src={reception} 
            alt="Hospital reception area" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-2xl p-10 relative -mt-24 z-20"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-teal-800 mb-4">
                  Healthcare Staffing
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Streamlining operations and enhancing patient care through efficient management.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                >
                  Learn More
                </motion.button>
              </div>
              <div className="w-full md:w-1/2 flex justify-end">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-teal-700 font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-teal-700 font-medium">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-teal-700 font-medium">Data Security</span>
                  </div>
                  <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-teal-700 font-medium">AI Powered</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="mb-12 last:mb-0"
              >
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-xl text-teal-600 mr-5">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-teal-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-200 rounded-full z-0"></div>
              <img 
                src={isolation} 
                alt="Healthcare isolation ward" 
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-teal-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Healthcare Staffing
            </h3>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Streamline operations and enhance patient care with our platform.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-teal-800 font-medium rounded-lg shadow-md hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Request Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg shadow-md hover:bg-teal-700/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;