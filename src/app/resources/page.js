"use client";
import { Navbar } from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaReact } from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiSqlite, SiPostgresql, SiTailwindcss } from "react-icons/si";
import Link from "next/link";

export default function Resources() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.1,
      },
    }),
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };
  const resources = [
    {
      icon: <FaHtml5 size={40} />,
      description:
        "HTML is the foundation of every website I’ve built. It’s where I learned to structure content with semantic tags like headings, sections, and forms. It felt like laying the groundwork for a house simple but critical. Mastering HTML gave me a new lens to see how the web is built.Learn HTML first if you’re starting web development it’s the entry point to everything else.",
      classes: ''
    },
    {
      icon: <FaCss3Alt size={40} />,
      description:
        "CSS brought my web pages to life with colors, layouts, and animations. I struggled with positioning at first, but discovering Flexbox and Grid was a game-changer  suddenly, I could design responsive layouts with ease. CSS taught me that design is as much about creativity as precision. You can easily learn CSS together with HTML to make your websites visually appealing and responsive.",
      classes: ''
    },
    {
      icon: <FaJs size={40} />,
      description:
        "JavaScript made my projects interactive and dynamic. From handling button clicks to fetching data via APIs, it felt like adding a brain to my HTML/CSS skeleton. The DOM was tricky at first, but once I grasped event listeners and async functions, I was hooked. Learn JavaScript after HTML amd CSS if you want to build websites that do more than just look pretty and interactive enough.",
      classes: 'wide'
    },
    {
      icon: <FaPython size={40} />,
      description:
        "Python’s readability won me over instantly. I used it for everything from automating tasks to building backend APIs with  Django framework. Its simplicity hides its power — I learned to write clean, efficient code that scales.Learn Python early if you’re interested in backend development or any other field where you need to automate tasks since its simple to understand and learn.",
      classes: 'wide'
    },
    {
      icon: <FaPhp size={60} />,
      description:
        "PHP was my first taste of server-side programming. I built dynamic websites by connecting PHP to MySQL, and seeing data-driven pages load in the browser was thrilling. It’s not perfect, but its simplicity helped me understand how backends work. If you’re a beginner curious about full-stack development and it will be great to learn PHP when you have understood some of the Basics in HTML and CSS.",
      classes: 'wide'
    },
    {
      icon: <FaReact size={40} />,
      description:
        "React revolutionized how I approached frontend development. Moving from plain JavaScript to components, state, and hooks made my code modular and reusable. It was daunting at first, but once I got the hang of props and useEffect, I could build complex UIs with ease. Go for  React after JavaScript if you want to build modern, scalable web interfaces.",
      classes: ' BALLERINA tall'
    },
    {
      icon: <SiDjango size={40} />,
      description:
        "Django transformed how I built web apps with Python. Its ORM was a revelation — I could interact with databases like PostgreSQL using Python models instead of raw SQL, making data management intuitive and fast. Connecting Django to PostgreSQL taught me how to leverage powerful features like migrations and complex queries for scalable apps. The Model-Template-View structure kept my code organized, while built-in tools like authentication and a customizable admin panel saved me hours. Django’s focus on security, like CSRF protection, gave me confidence in my apps. You can go for it if you want to build secure, data-driven web apps with minimal setup.",
      classes: 'wide'
    },
    {
      icon: <SiNextdotjs size={40} />,
      description:
        "Next.js took React to the next level for me. Its file-based routing and server-side rendering made building fast, SEO-friendly apps a breeze. I learned how to think about performance and full-stack architecture.  Learn Next.js after React if you want to create production ready web apps or streamline your development workflow.",
      classes: 'tall'
    },
    {
      icon: <SiSqlite size={40} />,
      description:
        "SQLite was my gateway to databases. Its lightweight, serverless nature made it perfect for learning SQL and testing small projects. I used it to store and query data for my early apps, and it was so easy to set up.Learn SQLite early in backend development if you want to understand databases without complex server configurations.",
      classes: 'wide'
    },
    {
      icon: <SiPostgresql size={40} />,
      description:
        "PostgreSQL opened my eyes to the power of relational databases. Unlike SQLite, it handles large-scale apps with complex queries and robust features like JSON support. I learned to optimize queries and manage data integrity. Learn PostgreSQL after SQLite if you’re building production grade apps or need a scalable database solution.",
      classes: 'wide'
    },
    {
      icon: <SiTailwindcss size={40} />,
      description:
        "Tailwind CSS has transformed how I style websites. After mastering vanilla CSS, I picked up Tailwind for its utility first approach, which let me design faster without leaving HTML. It felt like a superpower for rapid prototyping and consistent designs. Learn Tailwind after CSS so as to speed up your styling workflow or build modern, responsive UIs efficiently.",
      classes: 'wide'
    },
  ];
  return (
    <div className="pt-16">
      <Navbar />
      <motion.section
        className="bg-dark text-white py-12 sm:py-12 min-h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center h-full text-center">
          <motion.h1 className="py-8 text-2xl sm:text-3xl lg:text-4xl">
            What I can say about different languages I know and the resources.
          </motion.h1>
          <div className="grid grid-cols-1 w-full sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 auto-rows-min grid-flow-dense max-w-5xl mx-auto">
            <AnimatePresence>
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-secondary overflow-hidden rounded-2xl p-4 text-white text-wrap text-[.895rem] flex flex-col items-center justify-center shadow-lg card hover-expand ${resource.classes}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index}
                  whileHover={{
                    scale: 1.1,
                    y: -15,
                    zIndex: 20,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{
                    scale: 1.1,
                    y: -15,
                    zIndex: 20,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <div className="icon-wrapper">{resource.icon}</div>
                  <p className="text-left mt-3 overflow-hidden">{resource.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <motion.h2
            className="text-lg sm:text-xl font-semibold text-secondary mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/journey">My Journey...</Link>
          </motion.h2>
        </div>
      </motion.section>
    </div>
  );
}
