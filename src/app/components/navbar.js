'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; 


export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    // { name: 'Work', url: '/projects' },
    { name: 'Contact', url: '/contacts' },
  ];

  const linkVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-dark shadow-custom"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <Link href="/" className="text-xl font-bold font-balgeri text-secondary hover:text-simple">
            MATHEW
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className={`text-accent hover:text-secondary transition-colors ${
                  pathname === link.url ? 'text-secondary font-bold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden focus:outline-none text-accent hover:text-secondary"
  aria-label={isOpen ? 'Close menu' : 'Open menu'}
  aria-expanded={isOpen}
  aria-controls="primary-navigation"
>
  {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          id="primary-navigation"
          className="md:hidden bg-primary px-6 py-4 rounded-b-lg"
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, index) => (
            <motion.div key={link.name} custom={index} variants={linkVariants}>
              <Link
                href={link.url}
                className={`block py-2 text-accent hover:text-secondary transition-colors ${
                  pathname === link.url ? 'text-secondary font-bold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}