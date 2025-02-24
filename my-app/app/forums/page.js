"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import Link from "next/link";

const topics = [
    {
        text: "Python",
        img: "/python.png",
        desc: "Let’s discuss everything related to Python, from basics to advanced concepts.",
        slug:"Python-Discussion"
    },
    {
        text: "JavaScript",
        img: "/js.png",
        desc: "Talk about JavaScript, frameworks, and libraries like React, Vue, and Angular.",
        slug:"Javascript-Discussion"
    },
    {
        text: "C++",
        img: "/cpp.png",
        desc: "A place to discuss C++ programming, algorithms, and competitive coding.",
        slug:"CPP-Discussion"
    },
    {
        text: "Java",
        img: "/java.png",
        desc: "Explore Java programming, Spring Boot, and Android development.",
        slug:"Java-Discussion"
    },
    {
        text: "Django",
        img: "/django.png",
        desc: "Everything about Django, from models to REST APIs and authentication.",
        slug:"Django-Discussion"
    },
    {
        text: "React",
        img: "/react.png",
        desc: "A discussion hub for React, Next.js, and component-based UI development.",
        slug:"React-Discussion"
    },
];

const Page = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white py-16">
            <div className="container mx-auto px-6">
                {/* Animated Heading */}
                <motion.h1
                    className="my-10 text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Discuss Forums
                </motion.h1>

                {/* Topic Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {topics.map((topic, index) => (
                        <motion.div
                            key={topic.img}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            {/* Separate Hover Effect */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center transform hover:shadow-xl border border-gray-700"
                            >
                                <motion.img
                                    src={topic.img}
                                    alt={topic.text}
                                    className="w-20 h-20 mb-4"
                                    initial={{ scale: 0.8, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <h2 className="text-2xl font-semibold text-blue-400">{topic.text}</h2>
                                <p className="text-gray-300 text-center mt-2">{topic.desc}</p>

                                {/* Discuss Now Button */}
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href={`/forum/${topic.slug}`}>
                                    <Button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300">
                                        Discuss Now
                                    </Button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;