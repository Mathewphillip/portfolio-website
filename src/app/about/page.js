/* eslint-disable react/jsx-key */
"use client";
import { motion, useMotionValue } from "framer-motion";
import { Navbar } from "../components/navbar";
import { Button } from "../components/button";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "../components/footer";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaReact  } from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiSqlite, SiPostgresql, SiTailwindcss , SiElectron, SiFramer} from "react-icons/si";
import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { StarsWithColor } from "../stars/stars";

export default function AboutMe() {
  const icons = [
    { icon: <FaHtml5 title="HTML5" />, color: "hover:text-orange-500" },
    { icon: <FaCss3Alt title="CSS3" />, color: "hover:text-blue-500" },
    { icon: <FaJs title="JavaScript" />, color: "hover:text-yellow-400" },
    { icon: <FaPython title="Python" />, color: "hover:text-green-500" },
    { icon: <FaPhp title="PHP" />, color: "hover:text-indigo-500" },
    { icon: <SiDjango title="Django" />, color: "hover:text-green-700" },
    { icon: <FaReact title="React" />, color: "hover:text-cyan-400" },
    { icon: <SiNextdotjs title="Next.js" />, color: "hover:text-simple" },
    { icon: <SiSqlite title="SQLite" />, color: "hover:text-simple" },
    { icon: <SiPostgresql title="PostgreSQL" />, color: "hover:text-blue-600" },
    { icon: <SiTailwindcss title="Tailwind CSS" />, color: "hover:text-cyan-500" },
    { icon: <SiElectron title="electron js" />, color: "hover:text-cyan-300" },
    { icon: <SiFramer title="framer " />, color: "hover:text-purple-600" },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const animationRef = useRef(null);
  const progressRef = useRef(0);
  const lastTimeRef = useRef(null);
  const duration = 15; // Slower for smoother effect
  const sliderItems = [...icons, ...icons];

  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      const deltaTime = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        progressRef.current += deltaTime / duration;
        if (progressRef.current >= 1) progressRef.current -= 1;
        x.set(-progressRef.current * 100);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, x]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

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
      <motion.section
        className="py-12 sm:py-16 relative min-h-screen flex items-center justify-center"
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
            <Image
              src="/mathewbro.jpg"
              alt="Mathew Phillip Matovu"
              width={160}
              height={160}
              className="rounded-full mx-auto object-cover"
              priority
            />
          </motion.div>
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 mb-4 text-simple"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.p
  className="text-sm sm:text-base max-w-[90vw] sm:max-w-2xl mx-auto mb-6 leading-relaxed"
  initial={{ x: -50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  👋 I’m a dedicated full-stack developer passionate about crafting high-quality, scalable applications. With strong expertise in both front-end and back-end technologies, I focus on delivering impactful solutions that drive real results. Always eager to learn and innovate, I bring creativity and precision to every project.
</motion.p>

          <motion.h1
              className="text-lg sm:text-3xl font-semibold text-secondary mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            I can help you with...
          </motion.h1>

<motion.div className="grid gap-6">
  {/* Frontend Development */}
  <motion.div 
    className="card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2>Frontend Development</h2>
    <hr />
    <p>
      I build scalable, responsive, and visually appealing websites from scratch.
      I specialize in crafting clean UIs with smooth transitions, micro-interactions, and animations.
      I focus on delivering intuitive user experiences across all devices.
    </p>
  </motion.div>

  <motion.div 
    className="card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <h2>Backend Development</h2>
    <hr />
    <p>
      I develop secure and robust server-side applications using modern frameworks like Django and Node.js.
      My work includes designing APIs, managing databases (PostgreSQL, MongoDB), and ensuring scalable performance for real-world applications.
    </p>
  </motion.div>

  {/* Fullstack Development */}
  <motion.div 
    className="card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <h2>Fullstack Development</h2>
    <hr />
    <p>
      I bring together the best of both worlds—frontend and backend—to build complete web solutions.
      Whether it’s a real-time chat app or an eCommerce platform, I ensure seamless integration from user interface to database, with a strong focus on performance, security, and user experience.
    </p>
  </motion.div>
</motion.div>
          <motion.h2
            className="text-lg sm:text-xl font-bold mt-6 mb-4 text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What I can build with...
          </motion.h2>
          <motion.div
  className="flex flex-col py-2 w-full items-center justify-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div
    className="relative w-full flex justify-center overflow-hidden py-2 px-2"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <motion.div
      className="flex gap-6 sm:gap-8 text-2xl sm:text-3xl text-secondary"
      style={{ x }}
    >
      {sliderItems.map((item, index) => (
        <motion.div
          key={index}
          className={`icon-wrapper ${item.color}`}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          {item.icon}
        </motion.div>
      ))}
    </motion.div>
  </div>
  <div className="flex justify-center items-center py-6 w-full">
    <Button text="Read More" variant="primary" href="/resources" />
  </div>
</motion.div>
          {/* <motion.div
            className="flex flex-col py-2 w-full  justify-center  align-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative  flex  justify-center max-w-[90vw] sm:max-w-md overflow-hidden mask-fade py-2 px-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="flex gap-6 sm:gap-8 text-2xl sm:text-3xl text-secondary"
                style={{ x }}
              >
                {sliderItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`icon-wrapper ${item.color}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center items-center py-6 w-full">
              <Button text="Read More" variant="primary" href="/resources" />
            </div>
          </motion.div> */}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}