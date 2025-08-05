'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  glowColor?: string;
}

export default function GlowingButton({
  children,
  onClick,
  className = '',
  glowColor = 'var(--primary)'
}: GlowingButtonProps) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 20px ${glowColor}40, 0 0 40px ${glowColor}20`
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative group overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />
      {children}
    </motion.button>
  );
}
