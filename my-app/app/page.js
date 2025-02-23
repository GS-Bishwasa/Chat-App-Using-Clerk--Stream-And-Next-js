"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ∑ Chart: Visualize Data Like Never Before
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transform raw numbers into stunning charts effortlessly. ∑ Chart makes data visualization intuitive and powerful.
        </motion.p>

        <motion.div 
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            href="/dashboard"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-xl text-white font-semibold text-lg flex items-center space-x-2"
          >
            <span>Get Started</span> <ArrowRight size={20} />
          </Link>
          <Link 
            href="/features"
            className="px-6 py-3 border border-gray-500 hover:border-white transition rounded-xl text-gray-300 hover:text-white font-semibold text-lg"
          >
            Learn More
          </Link>
        </motion.div>
      </section>
    </div>
  );
}



