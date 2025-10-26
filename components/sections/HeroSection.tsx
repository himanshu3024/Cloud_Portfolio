'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-screen">
        {/* LEFT COLUMN (40% width) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#E8DFD6] dark:bg-[rgba(119,124,124,0.15)] flex items-center justify-center p-8 lg:p-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-xl shadow-lg border border-border p-8 max-w-md w-full text-center"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <div className="relative w-[200px] h-[200px] mx-auto">
                <Image
                  src="/photo/Photo.png"
                  alt="Himanshu Gandhi"
                  fill
                  className="rounded-full object-cover border-4 border-primary/20"
                  priority
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl font-bold text-foreground mb-4"
            >
              Himanshu Gandhi
            </motion.h1>

            {/* Blue Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-10 h-0.5 bg-primary mx-auto mb-4"
            />

            {/* Job Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-sm font-medium text-foreground/70 uppercase tracking-tight mb-8"
            >
              Cloud Computing Professional
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex justify-center space-x-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
                transition={{ duration: 0.2 }}
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
                transition={{ duration: 0.2 }}
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
                transition={{ duration: 0.2 }}
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
                transition={{ duration: 0.2 }}
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN (60% width) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card flex items-center p-8 lg:p-16"
        >
          <div className="max-w-2xl">
            {/* Hello Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Hello
            </motion.h2>

            {/* Subheading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl font-normal text-foreground mb-8"
            >
              Here's who I am & what I do
            </motion.h3>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = encodeURI('/Himanshu Gandhi Resume.pdf');
                  link.download = 'Himanshu_Gandhi_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-200 hover:bg-primary/90 shadow-md hover:shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-border text-foreground rounded-lg font-semibold transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Text Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="space-y-4 text-base text-foreground/70 leading-relaxed"
            >
              <p>
                I'm a passionate cloud computing professional with expertise in Microsoft Azure, Google Cloud Platform, 
                and AWS. My journey combines hands-on experience in customer service, IT support, and program leadership 
                with advanced technical skills in cloud infrastructure, cybersecurity, and data analytics.
              </p>
              <p>
                Currently pursuing Cloud Computing Technologies at George Brown College, I bring a unique blend of 
                technical knowledge and practical experience. I'm dedicated to designing scalable, secure, and efficient 
                cloud solutions that drive business success and innovation.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
