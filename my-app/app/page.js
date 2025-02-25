"use client";
import Link from "next/link";
import { ArrowRight, Users, ShieldCheck, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 pb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ∑ Chat: Connect With Friends & More
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Chat with like-minded people worldwide. ∑ Chat is secure, reliable, and fun.
        </motion.p>

        <motion.div
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/forums"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-xl text-white font-semibold text-lg flex items-center space-x-2"
          >
            <span>Get Started</span> <ArrowRight size={20} />
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-gray-500 hover:border-white transition rounded-xl text-gray-300 hover:text-white font-semibold text-lg"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
  className="container mx-auto px-6 py-16"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  }}
>
  <h2 className="text-4xl font-bold text-center text-blue-400">Why Choose ∑ Chat?</h2>
  <div className="grid md:grid-cols-3 gap-8 mt-12">
    {[
      { icon: <Users size={40} className="text-blue-400" />, title: "Global Community", desc: "Join discussions with users worldwide." },
      { icon: <ShieldCheck size={40} className="text-purple-400" />, title: "Secure & Private", desc: "Your data and chats are fully protected." },
      { icon: <MessageSquare size={40} className="text-pink-400" />, title: "Real-Time Chat", desc: "Instant messaging and topic-based discussions." },
    ].map((feature, index) => (
      <motion.div
        key={index}
        className="bg-gray-800 p-6 rounded-xl shadow-lg text-center flex flex-col items-center"
        whileHover={{ scale: 1.05 }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 + index * 0.1 } },
        }}
      >
        {feature.icon}
        <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
        <p className="text-gray-400 mt-2">{feature.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* Community Section */}
<motion.section
  className="bg-gray-900 py-16"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  }}
>
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-purple-400">Join Thousands of Happy Users!</h2>
    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Connect, chat, and engage with our growing global community.
    </p>
    <motion.div
      className="mt-8 inline-flex"
      whileHover={{ scale: 1.05 }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
      }}
    >
      <Link
        href="/register"
        className="px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-xl text-white font-semibold text-lg"
      >
        Join Now
      </Link>
    </motion.div>
  </div>
</motion.section>


    </div>
  );
}