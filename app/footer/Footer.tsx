"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-matcha-700 via-matcha-500 to-strawberry-300 dark:from-dark-bg dark:via-matcha-700 dark:to-dark-card text-white pt-10 pb-6 transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6 text-center">
        {/* Name / Logo */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >
          Veronica Irene Tanumihadja
        </motion.h3>

        {/* Personal Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-white/80 max-w-md"
        >
          Made with 🩷
        </motion.p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/haemuucia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-[#f5f5f5] transition-all"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/veronicairene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-[#f5f5f5] transition-all"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://instagram.com/verrrene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-[#f5f5f5] transition-all"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=veronicairene315@gmail.com"
            className="text-xl hover:text-[#f5f5f5] transition-all"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-xs bg-white/30 my-4" />

        {/* Copyright */}
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Veronica Irene. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
