import React from 'react';
import { motion } from 'framer-motion';
import support from '../assests/support.jpg';

const Complaints = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Full-width image display */}
      <div className="w-full h-[400px] relative">
        <img 
          src={support} 
          alt="Healthcare support" 
          className="w-full h-full object-cover"
        />
        
        {/* Text overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/85 to-teal-800/85 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center"
            >
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                Compliance Assurance
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-teal-100">
                We are committed to upholding the highest standards of safety, ethics, and patient care.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-teal-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Our Commitment Section */}
            <motion.div 
              variants={itemVariant}
              className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-teal-600"
            >
              <h2 className="text-2xl font-bold text-teal-800 mb-6">
                Our Commitment to Compliance
              </h2>
              <motion.ul variants={staggerChildren} className="space-y-4">
                <motion.li variants={itemVariant} className="flex items-start">
                  <span className="text-teal-600 text-xl mr-2">✔</span>
                  <div>
                    <span className="font-semibold">Patient Safety & Privacy</span> – We strictly adhere to 
                    <span className="font-semibold"> HIPAA</span> and other healthcare privacy regulations to protect patient data.
                  </div>
                </motion.li>
                <motion.li variants={itemVariant} className="flex items-start">
                  <span className="text-teal-600 text-xl mr-2">✔</span>
                  <div>
                    <span className="font-semibold">Regulatory Standards</span> – Our hospital complies with 
                    <span className="font-semibold"> national and international healthcare guidelines</span>, ensuring safe medical practices.
                  </div>
                </motion.li>
                <motion.li variants={itemVariant} className="flex items-start">
                  <span className="text-teal-600 text-xl mr-2">✔</span>
                  <div>
                    <span className="font-semibold">Ethical Medical Practices</span> – We follow 
                    <span className="font-semibold"> evidence-based treatments</span>, ensuring fairness, integrity, and the best possible patient outcomes.
                  </div>
                </motion.li>
                <motion.li variants={itemVariant} className="flex items-start">
                  <span className="text-teal-600 text-xl mr-2">✔</span>
                  <div>
                    <span className="font-semibold">Quality Control & Audits</span> – Regular audits and quality checks ensure that our hospital meets 
                    <span className="font-semibold"> industry benchmarks</span> for patient care.
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Our Compliance Measures Section */}
            <motion.div 
              variants={itemVariant}
              className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-teal-600"
            >
              <h2 className="text-2xl font-bold text-teal-800 mb-6">
                Our Compliance Measures
              </h2>
              <motion.ul variants={staggerChildren} className="space-y-4">
                <motion.li variants={itemVariant} className="flex items-start">
                  <span className="text-teal-600 text-xl mr-2">🔹</span>
                  <div>
                    <span className="font-semibold">Patient Rights & Confidentiality</span> – Secure data handling & ethical treatment policies.
                  </div>
                </motion.li>
                <motion.li variants={itemVariant} className="flex items-start">
                  <span className="text-teal-600 text-xl mr-2">🔹</span>
                  <div>
                    <span className="font-semibold">Staff Training & Certifications</span> – Continuous education for our medical professionals.
                  </div>
                </motion.li>
                <motion.li variants={itemVariant} className="flex items-start">
                  <span className="text-teal-600 text-xl mr-2">🔹</span>
                  <div>
                    <span className="font-semibold">Accreditation & Licensing</span> – We hold all relevant certifications, proving our commitment to excellence.
                  </div>
                </motion.li>
                <motion.li variants={itemVariant} className="flex items-start">
                  <span className="text-teal-600 text-xl mr-2">🔹</span>
                  <div>
                    <span className="font-semibold">Transparent Billing & Insurance Policies</span> – No hidden charges, ensuring trust and clarity.
                  </div>
                </motion.li>
              </motion.ul>
              <motion.div 
                variants={itemVariant}
                className="mt-6 pt-6 border-t border-teal-100"
              >
                <p className="text-center text-teal-800 font-semibold italic">
                  We take compliance seriously because your health, trust, and safety matter the most.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-900 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Our Locations</h2>
            <p className="text-teal-100 mb-8">
              Careforceone offers comprehensive healthcare staffing solutions across multiple locations, providing reliable management and support to enhance patient care and clinical operations.
            </p>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div 
                variants={itemVariant}
                className="bg-teal-800 bg-opacity-50 p-6 rounded-lg shadow-sm border border-teal-600"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Locations</h3>
                <p className="text-teal-200">Hicksville, NY 11801</p>
              </motion.div>

              <motion.div 
                variants={itemVariant}
                className="bg-teal-800 bg-opacity-50 p-6 rounded-lg shadow-sm border border-teal-600"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Hours</h3>
                <p className="text-teal-200">9 AM - 5 PM</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-teal-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                Have Concerns or Need to Submit a Complaint?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We take all concerns seriously and are committed to resolving any issues promptly and effectively. Your feedback helps us improve our services.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  Contact Support
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;