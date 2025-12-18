'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden flex items-center">
      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">

          {/* LEFT COLUMN: Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              className="glass-card rounded-2xl p-8 max-w-sm w-full text-center relative overflow-hidden group"
            >
              {/* Subtle Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6 relative mx-auto w-48 h-48"
              >
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl opacity-30" />
                <Image
                  src="/photo/Photo.png"
                  alt="Himanshu Gandhi"
                  fill
                  className="rounded-full object-cover border border-white/20 relative z-10 shadow-lg"
                  priority
                />
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-2xl font-semibold mb-2 text-foreground tracking-tight"
              >
                Himanshu Gandhi
              </motion.h1>

              {/* Job Title */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 border border-white/5 mb-6">
                <span className="text-sm font-medium text-muted-foreground tracking-wide">
                  Cloud & DevOps Engineer
                </span>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4">
                {[
                  { Icon: Linkedin, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Mail, href: 'mailto:gandhi111000@hotmail.com' }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-full bg-secondary/30 hover:bg-secondary/60 text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6"
            >
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">
                Cloud Future.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Specialized in scalable infrastructure, CI/CD automation, and secure cloud-native solutions across AWS, Azure, and GCP.
            </motion.p>

            {/* Action Buttons (iOS 26 Liquid Glass - Icon above Text) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-row gap-6 justify-center lg:justify-start items-center"
            >
              {/* Primary Button - "Command" Style */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  group relative w-32 h-32 rounded-3xl
                  bg-white/10 dark:bg-white/5
                  backdrop-blur-3xl saturate-[180%]
                  border border-white/20 dark:border-white/10
                  shadow-[0_12px_48px_0_rgba(0,0,0,0.15)]
                  hover:shadow-[0_20px_60px_0_rgba(14,165,233,0.25)]
                  flex flex-col items-center justify-center gap-2
                  transition-all duration-500
                "
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = encodeURI('/Himanshu Gandhi Resume.pdf');
                  link.download = 'Himanshu_Gandhi_Resume.pdf';
                  document.head.appendChild(link);
                  link.click();
                  document.head.removeChild(link);
                }}
              >
                <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 ring-1 ring-primary-500/20 group-hover:ring-primary-500/50 shadow-sm">
                  <Download className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Resume</span>
              </motion.button>

              {/* Secondary Button - "Inbox" Style */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="
                  group relative w-32 h-32 rounded-3xl
                  bg-white/10 dark:bg-white/5
                  backdrop-blur-3xl saturate-[180%]
                  border border-white/20 dark:border-white/10
                  shadow-[0_12px_48px_0_rgba(0,0,0,0.1)]
                  hover:shadow-[0_15px_60px_0_rgba(14,165,233,0.15)]
                  flex flex-col items-center justify-center gap-2
                  transition-all duration-500
                "
              >
                <div className="p-3 rounded-2xl bg-white/5 text-foreground/70 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 ring-1 ring-white/10 group-hover:ring-primary-500/50 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground/50 group-hover:text-foreground/90">Contact</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
