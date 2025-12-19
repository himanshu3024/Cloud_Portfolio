'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Cloud } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/himanshu3024',
    icon: Github,
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/himanshu-gandhi-891204160/',
    icon: Linkedin,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Email',
    url: 'mailto:Gandhi111000@hotmail.com',
    icon: Mail,
    color: 'hover:text-red-500'
  }
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden text-foreground border-t border-white/10 dark:border-white/5 bg-white/5 dark:bg-black/20 backdrop-blur-2xl saturate-150">
      {/* Dark glossy black background to match hero/site-wide */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-glass-surface/10 dark:bg-glass-surface-dark/10 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-cloud-pattern opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-2 mb-4"
            >
              <Cloud className="h-8 w-8 text-primary-500 drop-shadow-lg" />
              <span className="text-xl font-bold text-foreground tracking-tight">Himanshu Gandhi</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-muted-foreground mb-6 max-w-md"
            >
              Cloud & DevOps professional passionate about building scalable, secure,
              and efficient infrastructure solutions. Always learning and adapting to
              emerging technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full glass-btn ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary-500 transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Toronto, Ontario, Canada</p>
              <a
                href="mailto:Gandhi111000@hotmail.com"
                className="block hover:text-primary-500 transition-colors duration-200"
              >
                Gandhi111000@hotmail.com
              </a>
              <a
                href="tel:+14372673965"
                className="block hover:text-primary-500 transition-colors duration-200"
              >
                (437) 267-3965
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Himanshu Gandhi. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a
              href="/privacy"
              className="hover:text-primary-500 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-primary-500 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg transition-all duration-200 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
} 