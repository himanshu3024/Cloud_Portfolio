'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, Cloud } from 'lucide-react';
import FloatingParticles from '../ui/FloatingParticles';
import GlowingButton from '../ui/GlowingButton';

const cloudPhrases = [
  'Building the Future in the Cloud...',
  3000,
  'Turning Data into Dreams...',
  3000,
  'Securing Tomorrow, One Cloud at a Time...',
  3000,
  'Transforming Ideas into Scalable Realities...',
  3000,
  'From Cloud Learner to Cloud Creator...',
  3000,
  'Where Code Meets the Sky...',
  3000,
];

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dark Glossy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950"></div>
      
      {/* Subtle Shine Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Minimal Ambient Light */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 via-black to-black"></div>
      
      {/* Floating Particles with reduced opacity */}
      <FloatingParticles count={20} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-6"
          >
            {/* Subtle Glow Effect */}
            <motion.div
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-radial from-zinc-800/20 to-transparent blur-xl -z-10"
            />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight relative">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 pb-2 [text-shadow:_0_1px_15px_rgb(255_255_255_/_20%)]">
                HIMANSHU GANDHI
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-400 font-medium tracking-wide">
              Cloud Computing Student & Future Architect of the Digital Sky
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <TypeAnimation
              sequence={cloudPhrases}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              className="text-lg md:text-xl text-blue-400 font-medium tracking-wide"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GlowingButton
              onClick={() => window.open('https://1drv.ms/b/c/5596fcdf5250aa05/EW0vn0bsGO9OiPqpT1JL200B1ETM1iyVtwh0wN9mRjjTEA?e=XyQREx', '_blank')}
              className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold transition-all duration-300 bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-800 hover:from-zinc-700 hover:to-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            >
              <Cloud className="w-5 h-5 text-blue-400" />
              Download Resume
            </GlowingButton>
            
            <GlowingButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold transition-all duration-300 bg-gradient-to-b from-blue-950 to-blue-900 border border-blue-800/30 hover:from-blue-900 hover:to-blue-800 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              Get In Touch
            </GlowingButton>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
} 
