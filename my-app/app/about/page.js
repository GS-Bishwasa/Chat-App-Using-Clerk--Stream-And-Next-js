"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white py-16">
      <div className="container mx-auto px-6">

        {/* Hero Section */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-center leading-[1.2]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="pb-2">About ∑ Chart</p>
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-300 text-center mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          ∑ Chart is a powerful tool designed to help you visualize and analyze data with ease.
          Whether you're a student, professional, or researcher, our intuitive interface and 
          real-time collaboration features make data analysis seamless and insightful.
        </motion.p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Real-time Charts", desc: "Update charts dynamically with live data.", delay: 0.2 },
            { title: "Secure & Reliable", desc: "Your data is safe with our advanced security features.", delay: 0.4 },
            { title: "Customizable UI", desc: "Fully customizable themes and chart styles.", delay: 0.6 },
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-center border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <h2 className="text-2xl font-bold text-blue-400">{feature.title}</h2>
              <p className="text-gray-300 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { number: "10K+", label: "Users", delay: 0.2 },
            { number: "500+", label: "Charts Created Daily", delay: 0.4 },
            { number: "99.9%", label: "Uptime", delay: 0.6 },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: stat.delay }}
            >
              <h3 className="text-4xl font-bold text-purple-400">{stat.number}</h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a href="/forums" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-lg transition-all duration-300">
            Get Started Now
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;
