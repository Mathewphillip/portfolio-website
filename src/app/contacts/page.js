/* eslint-disable react/jsx-key */
"use client";
import { motion } from "framer-motion";
import { Navbar } from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "../components/footer";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { SiBluesky} from "react-icons/si"
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { StarsWithColor } from "../stars/stars";

export default function AboutMe() {
  return (
    <div className="relative min-h-screen bg-dark text-accent overflow-x-hidden">
      <Navbar />
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarsWithColor
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1.2}
            color="#66ccff"
            twinkleMode={true}
          />
        </Canvas>
      </div>

      {/* Hero Section */}
      <motion.section
        className="py-16 sm:py-24 relative min-h-[50vh] flex items-center justify-center flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let&apos;s Build Something Together
            </h1>
          </motion.div>
        </div>
      <section className="py-16 relative">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Social Links */}
            <div className="space-y-6">
              <Image
                src="/mathewbro.jpg"
                alt="Mathew Phillip Matovu"
                width={160}
                height={160}
                className="rounded-full mx-auto object-cover shadow-lg"
                priority
              />
              <h2 className="text-3xl font-semibold text-center md:text-left">
                Connect With Me
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/message/NZROE4YLH2ALG1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-blue-400 transition"
                  >
                    +256 76015 3839
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/qr/FXMTNMH2DGLLE1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-blue-400 transition"
                  >
                    +256 705594175
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mathewphillipmatovu@gmail.com"
                    className="text-lg hover:text-blue-400 transition"
                  >
                    mathewphillipmatovu@gmail.com
                  </a>
                </li>
              </ul>
              <div className="flex gap-6 justify-center md:justify-start">
                <a
                  href="https://wa.me/qr/FXMTNMH2DGLLE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-3xl text-white hover:text-green-400 transition" />
                </a>
                <a
                  href="https://x.com/beastphill3812"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-3xl text-white hover:text-blue-400 transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matovu-mathew-phillip-72004b363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-3xl text-white hover:text-blue-500 transition" />
                </a>
                <a
                  href="https://bsky.app/profile/mathewphillip.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="bluesky"
                  aria-label="bluesky"
                >
                  <SiBluesky className="text-3xl text-white hover:text-blue-400 transition" />
                </a>
              </div>
            </div>
            {/* Contact Form */}
            <form
              action="https://formspree.io/f/xvgaedbw"
              method="POST"
              className="space-y-6 p-8 rounded-xl backdrop-blur-sm bg-dark/80 shadow-xl"
            >
              <h2 className="text-3xl font-semibold">Let’s Get in Touch</h2>
              <p className="text-sm text-white/70">
                Have a project, a question, or just want to say hi? Fill out the form below and I’ll get back to you shortly.
              </p>
              <div className="space-y-1">
                <label htmlFor="name" className="block text-white font-medium">
                  What&apos;s your name?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Mathew Phillip"
                  required
                  className="w-full px-4 py-2 rounded bg-dark border border-accent/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-required="true"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-white font-medium">
                  What&apos;s your email?
                </label>
                <input
                  type="email"
                  id="email"
                  name="_replyto"
                  placeholder="mathewphillip@gmail.com"
                  required
                  className="w-full px-4 py-2 rounded bg-dark border border-accent/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-required="true"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="subject" className="block text-white font-medium">
                  What service are you looking for?
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Freelance project, collaboration, feedback..."
                  className="w-full px-4 py-2 rounded bg-dark border border-accent/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="block text-white font-medium">
                  Your Message...
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hello Mathew, can you..."
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded bg-dark border border-accent/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-accent text-dark font-semibold px-6 py-2 rounded hover:bg-white transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      </motion.section>
      <Footer />
    </div>
  );
}