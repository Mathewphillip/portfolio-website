'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './components/button';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Canvas, useFrame } from '@react-three/fiber';
import {StarsWithColor} from './stars/stars'

// Custom Stars component with color and enhanced animation
export default function Home() {
  const projects = [
    {
      title: 'Hostel Management System',
      description: 'A full-stack app for managing hostel bookings, built with Django and PostgreSQL.',
      href: '/projects#hostel',
    },
    {
      title: 'FoodBridge',
      description: 'A platform connecting food donors with charities, built with React and Firebase.',
      href: '/projects#foodbridge',
    },
  ];

  return (
    <div className="relative min-h-screen bg-dark text-accent">
      <Navbar />
      {/* Canvas as full-page background */}
      <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1] }}
      >
        <StarsWithColor
          radius={100}
          depth={50}
          count={10000}
          factor={4}
          saturation={0}
          fade speed={2} 
          color="#66ccff"
          twinkle={true} 
        />
      </Canvas>
      </div>
      {/* Hero Section */}
      <motion.section
        className="min-h-[80vh] flex items-center justify-center py-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <motion.div
            className="flex-1 text-center md:text-left max-w-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-balgeri mb-6 text-simple leading-tight">
                <span className="text-secondary">Mathew</span> Phillip <span className="text-secondary">Matovu</span>
              </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-accent">
                Driven by a passion for creating impactful tech solutions.
            </p>
            {/* <Button text="View My Work" href="/projects" variant="primary" /> */}
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 max-w-xs sm:max-w-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/beast.jpg"
              alt="Mathew Phillip"
              width={300}
              height={300}
              className="rounded-full mx-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-16 bg-accent text-primary relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">
          About Me
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          I&apos;m a results-driven full-stack developer with hands-on experience in building fast, scalable, and user-friendly websites and web applications.I bring not just clean code, but creative problem-solving and a passion for innovation. Whether it&apos;s launching a new product or optimizing an existing system, I&apos;m ready to help you build something exceptional.
        </p>
        <Button text="More About Me" href="/about" variant="outline" className="mt-8" />
      </div>

      </motion.section>

      {/* Projects Section */}
      {/* <motion.section
        className="py-16 bg-dark text-accent relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-simple">
            Featured Projects
          </h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-simple">{project.title}</h3>
                <p className="mt-2 text-accent">{project.description}</p>
                <Button
                  text="Learn More"
                  href={project.href}
                  variant="ghost"
                  className="mt-4"
                />
              </motion.div>
            ))}
          </div>
          <Button text="View All Projects" href="/projects" variant="primary" className="mt-10" />
        </div>
      </motion.section> */}

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-primary text-accent text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-simple">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-base sm:text-lg mb-8">
            Ready to collaborate on impactful projects? Reach out to discuss ideas or opportunities.
          </p>
          <Button text="Get in Touch" href="/contact" variant="primary" />
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}