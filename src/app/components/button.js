'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Button({ text, href, variant = 'primary', className = '' }) {
  const baseStyles = 'inline-block px-6 py-3 rounded-lg font-semibold transition-colors';
  const variants = {
    primary: 'bg-secondary text-simple hover:bg-green-700',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-primary',
    ghost: 'text-secondary hover:bg-primary/50',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link href={href} className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}>
        {text}
      </Link>
    </motion.div>
  );
}
