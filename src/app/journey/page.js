"use client";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import { Navbar } from "../components/navbar";
import { Button } from "../components/button";
import Image from 'next/image';
import { Footer } from "../components/footer";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaReact,  } from "react-icons/fa";
import { SiDjango, SiNextdotjs , SiSqlite,SiPostgresql , SiTailwindcss} from "react-icons/si";
import { useEffect, useState, useRef } from "react";
export default function Journey(){
return(
    <div className="relative h-screen bg-dark text-accent">
          <Navbar/>
          <motion.section
        className="bg-dark text-white pt-16 sm:py-12 h-100vh relative flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
            <motion.h1
            className="text-2xl sm:text-3xl font-bold text-secondary py-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            How I Got There
          </motion.h1>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 bg-white rounded-2xl shadow-xl space-y-6 "
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 p-4 rounded-xl shadow"
            >
              <p className="text-base sm:text-1g leading-relaxed text-gray-800">
                🧒 My journey into programming started in an unexpected way. I was introduced to it in my early years of high school (2018) by a friend who often talked about it. Being someone who loved anything related to software, I became instantly curious 🧐. Even though I lacked resources and a mentor, I was driven by passion  and the urge to learn . It was a tough start — I had to figure things out by myself, doing intense research 🔍 just to grasp basic concepts. The first language I learned was HTML , using the pre-installed Notepad on my computer . I still remember the joy of creating my first webpage 🎉, and how that excitement grew when I successfully made page-to-page navigation 🔗. At that point, I was still a child, but I loved to learn and never gave up 💪. One day, a friend asked me why I wasn&apos;t designing my pages, and that&apos;s when I discovered CSS 🎨. I didn&apos;t even know how webpages were styled! So, I began researching CSS on my own. It wasn&apos;t easy — the syntax was different, the file extensions were unfamiliar, and some concepts were hard to grasp. It took me around two years to become comfortable, especially since I didn&apos;t have a personal computer 🧠 and was still using Notepad .
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-50 p-4 rounded-xl shadow"
            >
              <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                🙏 Thankfully, during the early days of the COVID-19 pandemic 😷, I was gifted a laptop by my Godfather after my mother told him how hard I was trying to learn coding 💻. I believe that was God&rsquo;s way of showing me the right path ✨. With a proper computer, I could now explore more 🌍, and one of my first practice projects was a hotel website �. Later on, during my final years in high school, I discovered JavaScript ✨ — the third language I learned. It didn&apos;t feel too difficult at the beginning since I had already developed strong research habits 🧠 and understood how to approach learning a new language . I practiced a lot, especially focusing on DOM manipulation  and JavaScript&apos;s core concepts 🔧. By then, I had become quite comfortable with the frontend , but I started to grow curious about how the backend worked . That curiosity pushed me to research more, and I discovered Python 🐍, which is widely used in backend development. I was encouraged to learn it, but I quickly realized backend development was more complex than I expected 😅. Since I was already familiar with JavaScript, I shifted my focus to PHP , which a friend recommended as easier to get started with.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gray-50 p-4 rounded-xl shadow"
            >
              <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                😃 I was thrilled when I successfully built full-stack projects using PHP 🧱, and along the way, I also learned about MySQL for database management. These experiences really broadened my understanding of programming  and helped me expand my tech stack . Later, during my vacation after high school , I decided to return to Python for backend work and chose Django as my framework of choice because of its simplicity and power ⚡. After learning it, I built a simple blog using Django  to put my knowledge into practice. Fueled by curiosity and a hunger to keep improving 🔥, I went on to learn React.js ⚛️ and other frontend tools like Tailwind CSS . Eventually, I transitioned to Next.js , which has significantly improved my development workflow ⚙️ and deepened my understanding of how real-world projects are structured. That&apos;s where I am now — constantly building , learning , and growing 🌱 as a self-taught developer.
              </p>
            </motion.div>
          </motion.div>
          </motion.section>
          <Footer/>
    </div>
)
}