'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Cloud } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import FloatingParticles from '../ui/FloatingParticles';
import GlowingButton from '../ui/GlowingButton';
// Minimal, premium hero

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Preserve dark glossy black theme via layered gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 via-black to-black" />
      </div>
      {/* Ambient particles: ultra subtle */}
      <FloatingParticles count={12} />

      <div className="relative z-20 container mx-auto px-4 text-center">
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
            <h1 className="text-5xl md:text-7xl font-extrabold mb-3 tracking-tight relative">
              <span className="block pb-2 [text-shadow:_0_1px_15px_rgba(0,0,0,0.1)] dark:[text-shadow:_0_1px_15px_rgba(255,255,255,0.05)]">
                HIMANSHU <span className="gradient-text">GANDHI</span>
              </span>
              <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent [mask-image:linear-gradient(90deg,transparent,black,transparent)]" />
            </h1>
            <div role="status" aria-live="polite" className="text-xl md:text-2xl font-medium tracking-wide text-foreground/80">
              <TypeAnimation
                sequence={[
                  'Designing Cloud Solutions That Inspire Confidence.', 1800,
                  '', 200,
                  'Automating Infrastructure with Precision and Care.', 1800,
                  '', 200,
                  'Delivering Scalable, Secure, Cloud-Native Systems.', 1800,
                  '', 200,
                ]}
                speed={46}
                deletionSpeed={50}
                repeat={Infinity}
                cursor={true}
                className="inline-block"
              />
            </div>
          </motion.div>

          <div className="max-w-2xl mx-auto mb-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto w-fit glassmorphism p-3 rounded-2xl border border-white/10"
          >
            <GlowingButton
              onClick={() => {
                const link = document.createElement('a');
                link.href = encodeURI('/Himanshu Gandhi Resume B (2).pdf');
                link.download = 'Himanshu_Gandhi_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                link.remove();
              }}
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
