'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Cloud } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/himanshu-gandhi',
    icon: Github,
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/himanshu-gandhi',
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
    <footer className="bg-secondary-900 dark:bg-secondary-950 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cloud-pattern opacity-5" />
      
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
              <Cloud className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Himanshu Gandhi</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-secondary-300 mb-6 max-w-md"
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
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-lg bg-secondary-800 hover:bg-secondary-700 transition-all duration-200 text-secondary-300 ${social.color}`}
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-secondary-300">
              <p>Toronto, Ontario, Canada</p>
              <a 
                href="mailto:Gandhi111000@hotmail.com"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Gandhi111000@hotmail.com
              </a>
              <a 
                href="tel:+14372673965"
                className="hover:text-primary-400 transition-colors duration-200"
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
          className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-secondary-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Himanshu Gandhi. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-secondary-400">
            <a 
              href="/privacy"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms"
              className="hover:text-primary-400 transition-colors duration-200"
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
        className="fixed bottom-8 right-8 p-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg transition-all duration-200 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
} 