'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { 
  Home,
  Briefcase,
  User,
  FileText,
  MessageSquare,
  Sun, 
  Moon,
  Code,
  Database,
  Server,
  Award
} from 'lucide-react';

// Desktop navigation items
const desktopNavItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Skills', href: '/skills', icon: Code },
  { name: 'Projects', href: '/projects', icon: Database },
  { name: 'Experience', href: '/experience', icon: Server },
  { name: 'Certifications', href: '/certifications', icon: Award },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

// Mobile navigation items (5 key items)
const mobileNavItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Work', href: '/experience', icon: Briefcase },
  { name: 'About', href: '/about', icon: User },
  { name: 'Resume', href: '/certifications', icon: FileText },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export default function ModernNavigation() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    // Check if device is mobile
    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth < 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Navigation - Floating Left Center */}
      {!isMobile && (
        <motion.nav
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed z-50"
        style={{
          left: '24px',
          top: '16%',
          transform: 'translateY(-50%)',
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div className="flex flex-col space-y-4 p-4 bg-white/30 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/30 rounded-2xl shadow-2xl">
          {desktopNavItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 group cursor-pointer
                    ${isActive 
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' 
                      : 'bg-white/20 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/20'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110 mb-1" />
                  <span className="text-xs font-medium leading-tight text-center">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
          
          {/* Theme Toggle */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: desktopNavItems.length * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-white/20 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 group cursor-pointer"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <Sun className="w-5 h-5 transition-transform duration-200 group-hover:scale-110 mb-1" />
                  <span className="text-xs font-medium leading-tight text-center">Theme</span>
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <Moon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110 mb-1" />
                  <span className="text-xs font-medium leading-tight text-center">Theme</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        </motion.nav>
      )}

      {/* Mobile Navigation - Floating Bottom Center */}
      {isMobile && (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto max-w-xs w-full mx-4 flex items-center space-x-3 px-6 py-4 bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-2xl shadow-2xl">
            {mobileNavItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      relative flex flex-col items-center justify-center min-w-[60px] h-14 rounded-xl transition-all duration-300 group cursor-pointer overflow-hidden
                      ${isActive 
                        ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10'
                      }
                    `}
                  >
                    <item.icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'mb-1' : ''}`} />
                    
                    {/* Label that appears on active state */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs font-medium"
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.nav>
      )}
    </>
  );
}
