'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, Mail, Linkedin, Twitter, Instagram, Briefcase, Server, Zap, Compass, MapPin, CheckCircle2, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Mouse move tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transforms (Precision values)
  const cardTranslateX = useTransform(smoothMouseX, [-500, 500], [-12, 12]);
  const cardTranslateY = useTransform(smoothMouseY, [-500, 500], [-12, 12]);
  const ctaTranslateX = useTransform(smoothMouseX, [-500, 500], [-6, 6]);
  const ctaTranslateY = useTransform(smoothMouseY, [-500, 500], [-6, 6]);
  const textTranslateX = useTransform(smoothMouseX, [-500, 500], [-4, 4]);
  const textTranslateY = useTransform(smoothMouseY, [-500, 500], [-4, 4]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setBreakpoint('mobile');
      else if (width < 1200) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion || breakpoint === 'mobile') return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, prefersReducedMotion, breakpoint]);

  const isDesktop = breakpoint === 'desktop';
  const isTablet = breakpoint === 'tablet';
  const isMobile = breakpoint === 'mobile';

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen bg-transparent overflow-visible flex flex-col items-start justify-start ${isDesktop ? 'p-[6%_8%]' : isMobile ? 'px-6 py-20' : 'p-12'}`}
    >
      <a href="#content" className="skip-link">Skip to main content</a>

      {/* Cinematic Cue: Soft Radial Glow behind "Cloud" (Shifted to Match New Center) */}
      {isDesktop && (
        <div
          className="absolute z-10 pointer-events-none opacity-20"
          style={{
            left: '63%',
            top: '8%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0,166,214,0.15) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(40px)',
            willChange: 'transform'
          }}
        />
      )}

      {/* Main Narrative Block (Headline + Value + Badges + CTAs) - Shifted Toward Center */}
      <motion.div
        style={{
          x: prefersReducedMotion ? 0 : textTranslateX,
          y: prefersReducedMotion ? 0 : textTranslateY,
          position: isDesktop ? 'absolute' : 'relative',
          left: isDesktop ? '40%' : 'unset',
          top: isDesktop ? '12%' : 'unset',
          willChange: 'transform'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.05 : 0.42, ease: [0.2, 0.9, 0.3, 1] }}
        className="z-20 max-w-[90vw] lg:max-w-4xl text-left"
      >
        <h1 className="text-6xl md:text-[8rem] lg:text-[120px] font-black tracking-[-0.04em] leading-[0.85] text-[#0B2B3B] dark:text-foreground">
          Building <br />
          the <span className="accent-word relative">
            Cloud
          </span> <br />
          Future.
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-xl lg:text-2xl text-[#0B2B3B]/90 dark:text-muted-foreground/90 max-w-[560px] leading-tight font-medium"
        >
          Designing secure, scalable cloud systems that reduce deployment time and operational cost.
        </motion.p>

        {/* Microproof Row */}
        <div className="flex flex-wrap gap-4 mt-8">
          {[
            { icon: Briefcase, label: "3+ Cloud Projects" },
            { icon: Server, label: "AWS GCP Azure" },
            { icon: Zap, label: "CI/CD 80% Faster" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/20 text-sm font-semibold text-[#0B2B3B] dark:text-foreground/80 shadow-sm"
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4 text-[#00A6D6]" />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Integrated CTA Layer - Below Text */}
        <div className={`flex flex-wrap gap-4 mt-12 ${isMobile ? 'justify-center w-full' : ''}`}>
          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Download Resume"
            className="px-8 py-4 rounded-full glass-btn font-bold text-lg tracking-tight group"
            onClick={() => {
              const link = document.createElement('a');
              link.href = encodeURI('/Himanshu Gandhi Resume.pdf');
              link.download = 'Himanshu_Gandhi_Resume.pdf';
              document.head.appendChild(link);
              link.click();
              document.head.removeChild(link);
            }}
          >
            <div className="p-1.5 rounded-full bg-[#00A6D6]/10 text-[#00A6D6] group-hover:bg-[#00A6D6] group-hover:text-white transition-all duration-300">
              <Download className="w-4 h-4" />
            </div>
            <span>Resume</span>
          </motion.button>

          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="View Projects"
            onClick={() => router.push('/projects')}
            className="px-8 py-4 rounded-full glass-btn font-bold text-lg tracking-tight"
          >
            <Compass className="w-5 h-5 opacity-40" />
            <span>Projects</span>
          </motion.button>

          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Contact Me"
            onClick={() => router.push('/contact')}
            className="px-8 py-4 rounded-full glass-btn font-bold text-lg tracking-tight"
          >
            <Mail className="w-5 h-5 opacity-40" />
            <span>Contact</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Premium Profile Card (Left Column) */}
      {isDesktop && (
        <motion.div
          style={{
            x: prefersReducedMotion ? 0 : cardTranslateX,
            y: prefersReducedMotion ? 0 : cardTranslateY,
            position: 'absolute',
            left: '8%',
            top: '10%',
            bottom: '10%',
            width: '400px',
            willChange: 'transform'
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.9, 0.3, 1] }}
          className="z-30 p-10 rounded-[3rem] glass-card border-white/20 flex flex-col items-center text-center justify-between"
        >
          {/* Top Status & Location */}
          <div className="w-full flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00A6D6]/10 border border-[#00A6D6]/20">
              <span className="w-2 h-2 rounded-full bg-[#00A6D6] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00A6D6]">Available</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#0B2B3B]/60 dark:text-foreground/60">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">Toronto, CA</span>
            </div>
          </div>

          {/* Large Hero Photo */}
          <div className="relative w-56 h-56 mb-8 group">
            {/* Premium rim treatment */}
            <div className="absolute inset-0 rounded-full border-[1px] border-white/30 z-20 pointer-events-none" />
            <div className="absolute inset-[3px] rounded-full ring-[4px] ring-white/10 z-20 pointer-events-none" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#00A6D6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md pointer-events-none" />

            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-md z-10">
              <Image
                src="/photo/Photo.png"
                alt="Himanshu Gandhi"
                fill
                className="object-cover scale-[1.05] transition-transform duration-1000 group-hover:scale-[1.1]"
                priority
              />
            </div>
          </div>

          {/* Identity & Mission */}
          <div className="space-y-4 mb-8">
            <div className="space-y-1">
              <h2 className="text-3xl font-black tracking-tight text-[#0B2B3B] dark:text-foreground">
                Himanshu Gandhi
              </h2>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#00A6D6]">
                Cloud Architect
              </p>
            </div>

            <div className="relative p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Compass className="w-12 h-12 rotate-12" />
              </div>
              <p className="text-sm italic leading-relaxed text-[#0B2B3B]/80 dark:text-foreground/70 font-medium relative z-10">
                &ldquo;Designing high-availability systems that thrive under pressure. Bridging the gap between code and infrastructure.&rdquo;
              </p>
            </div>
          </div>

          {/* Social Links & Matrix */}
          <div className="w-full flex flex-col gap-6">
            <div className="flex justify-center gap-3">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/himanshu-gandhi-891204160/', color: 'hover:text-[#0077B5]' },
                { Icon: Github, href: 'https://github.com/himanshu3024', color: 'hover:text-black dark:hover:text-white' },
                { Icon: Twitter, href: 'https://x.com/varunrockx', color: 'hover:text-[#1DA1F2]' },
                { Icon: Instagram, href: 'https://www.instagram.com/himanshu___gandhi/', color: 'hover:text-[#E4405F]' }
              ].map(({ Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl glass-card border-white/10 text-[#0B2B3B]/60 dark:text-foreground/60 ${color} transition-all duration-300 shadow-sm`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 pt-6 border-t border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[10px] uppercase tracking-widest font-black text-[#0B2B3B]/40 dark:text-foreground/40">
                Operational Efficiency Optimized
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Profile Card (Tablet/Mobile Only Version) */}
      {!isDesktop && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`z-30 p-8 rounded-[2.5rem] glass-card border-white/15 shadow-[0_28px_56px_rgba(11,43,59,0.08)] backdrop-blur-[14px] saturate-[110%] group mt-16 ${isMobile ? 'mx-auto w-[88vw]' : 'mx-12 w-[320px]'}`}
        >
          {/* Simplified version for mobile/tablet */}
          <div className="relative mx-auto w-32 h-32 mb-6">
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 z-10">
              <Image src="/photo/Photo.png" alt="Himanshu Gandhi" fill className="object-cover" />
            </div>
          </div>
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-[#0B2B3B] dark:text-foreground">Himanshu Gandhi</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00A6D6]">Cloud Architect</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
