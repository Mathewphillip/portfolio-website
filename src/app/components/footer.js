
'use client';
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { SiBluesky, SiX } from 'react-icons/si';
import { motion } from 'framer-motion';

export function Footer() {
  const socialLinks = [
    {
      href: 'https://github.com/Mathewphillip',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/matovu-mathew-phillip-72004b363/',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://codepen.io/Matovu-Mathew-Phillip',
      icon: <FaCodepen />,
      label: 'CodePen',
    },
    {
      href: 'https://bsky.app/profile/mathewphillip.bsky.social',
      icon: <SiBluesky />,
      label: 'Bluesky',
    },
    {
      href: 'https://x.com/beastphill3812', 
      icon: <SiX />,
      label: 'X',
    },
  ];

  return (
    <footer className="bg-dark text-accent py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-simple"
        >
          Want to know more about me? Find me here:
        </motion.h2>
        <div className="flex justify-center space-x-6 text-2xl">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              className="text-accent hover:text-secondary transition-colors"
              aria-label={link.label}
              whileHover={{ scale: 1.2 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-accent text-sm"
        >
          © {new Date().getFullYear()} Matovu Mathew Phillip. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}