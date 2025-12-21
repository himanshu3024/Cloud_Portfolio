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
  Award,
  GraduationCap
} from 'lucide-react';

// Desktop navigation items
const desktopNavItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Skills', href: '/skills', icon: Code },
  { name: 'Projects', href: '/projects', icon: Database },
  { name: 'Experience', href: '/experience', icon: Server },
  { name: 'Education', href: '/education', icon: GraduationCap },
  { name: 'Certifications', href: '/certifications', icon: Award },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

// Mobile navigation items (all items, matching desktop)
const mobileNavItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Skills', href: '/skills', icon: Code },
  { name: 'Projects', href: '/projects', icon: Database },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Education', href: '/education', icon: GraduationCap },
  { name: 'Certs', href: '/certifications', icon: Award },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export default function ModernNavigation() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    // Check if device is mobile or small/medium laptop
    const checkIsMobile = () => {
      // Switch to bottom bar if screen is narrow (< 1340px) to prevent overlap with centered content
      const isMobileDevice = window.innerWidth < 1340 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Navigation - Floating Left Center (iOS 26 Liquid Glass) */}
      {!isMobile && (
        <motion.nav
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }} // smooth iOS easing
          className="fixed z-50 left-4 lg:left-6 inset-y-0 flex items-center"
        >
          {/* Liquid Glass Rail */}
          <div className="
            flex flex-col items-center gap-4 p-2
            rounded-full
            bg-white/10 dark:bg-black/20
            backdrop-blur-3xl saturate-[180%]
            border border-white/20 dark:border-white/10
            shadow-[0_12px_48px_0_rgba(0,0,0,0.15)]
            bg-gradient-to-b from-white/10 to-transparent
          ">
            {desktopNavItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} className="relative group">
                  {/* Tooltip Label */}
                  <div className="absolute left-full ml-5 top-1/2 -translate-y-1/2 px-4 py-2 
                    bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-2xl 
                    text-[11px] font-bold text-foreground opacity-0 group-hover:opacity-100 
                    transition-all duration-300 pointer-events-none whitespace-nowrap
                    shadow-2xl scale-90 group-hover:scale-100 origin-left border border-white/20"
                  >
                    {item.name.toUpperCase()}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    className={`
                      relative flex items-center justify-center w-11 h-11 rounded-full 
                      transition-all duration-500
                      ${isActive
                        ? 'bg-white/25 dark:bg-white/10 text-foreground shadow-[0_0_20px_rgba(14,165,233,0.3)] ring-1 ring-white/30'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                      }
                    `}
                  >
                    <item.icon strokeWidth={1.5} className="w-5 h-5" />
                  </motion.div>
                </Link>
              );
            })}

            {/* Divider - subtle line */}
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-1" />

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="
                flex items-center justify-center w-12 h-12 rounded-full
                text-muted-foreground hover:text-foreground
                transition-all duration-300
              "
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun strokeWidth={1.5} className="w-6 h-6" /> : <Moon strokeWidth={1.5} className="w-6 h-6" />}
                </motion.div>
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
          <div className="pointer-events-auto max-w-lg w-full mx-4 flex items-center justify-around px-2 py-3 bg-white/10 dark:bg-black/40 backdrop-blur-3xl saturate-[180%] border border-white/20 dark:border-white/10 rounded-full shadow-[0_12px_48px_0_rgba(0,0,0,0.2)]">
            {mobileNavItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      relative flex flex-col items-center justify-center w-11 h-11 rounded-full transition-all duration-500 group cursor-pointer
                      ${isActive
                        ? 'bg-white/20 dark:bg-white/10 text-foreground shadow-[0_0_15px_rgba(14,165,233,0.3)] ring-1 ring-white/30'
                        : 'text-muted-foreground hover:bg-white/10 hover:text-foreground'
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5" />
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
