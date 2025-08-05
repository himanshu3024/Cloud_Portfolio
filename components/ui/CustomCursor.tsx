'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-primary-500 rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          x: position.x - 8,
          y: position.y - 8,
        }}
        transition={{
          type: 'spring',
          stiffness: 750,
          damping: 50,
        }}
      />
      <motion.div
        className="fixed w-8 h-8 border-2 border-primary-500 rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{
          scale: isClicking ? 1.2 : isHovering ? 1.8 : 1,
          x: position.x - 16,
          y: position.y - 16,
        }}
        transition={{
          type: 'spring',
          stiffness: 550,
          damping: 40,
        }}
      />
    </>
  );
}
