'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  Clock,
  Globe,
  CheckCircle
} from 'lucide-react';
import { sendEmail } from '@/lib/actions/sendEmail';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'Gandhi111000@hotmail.com',
    link: 'mailto:Gandhi111000@hotmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '(437) 267-3965',
    link: 'tel:+14372673965',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Toronto, Ontario, Canada',
    link: 'https://maps.google.com/?q=Toronto,Ontario,Canada',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Languages',
    value: 'English, French, Hindi',
    link: null,
    color: 'from-orange-500 to-red-500'
  }
];

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
  }
];

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const result = await sendEmail(data);

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about cloud computing and DevOps.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground/90">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary-500 hover:text-primary-600 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-foreground/70">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-[2rem] p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-primary-500" />
                <h4 className="text-lg font-semibold">Availability</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 drop-shadow-lg" />
                  <span className="text-sm text-foreground/80 font-medium">Available for new opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 drop-shadow-lg" />
                  <span className="text-sm text-foreground/80 font-medium">Open to remote work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 drop-shadow-lg" />
                  <span className="text-sm text-foreground/80 font-medium">Willing to relocate</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full glass-btn ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-8 relative z-10">Send a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2 ml-1">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 rounded-2xl border border-white/20 bg-white/5 dark:bg-black/20 backdrop-blur-xl text-foreground placeholder-foreground/40 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500/50 transition-all duration-300 shadow-sm"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400 ml-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2 ml-1">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 rounded-2xl border border-white/20 bg-white/5 dark:bg-black/20 backdrop-blur-xl text-foreground placeholder-foreground/40 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500/50 transition-all duration-300 shadow-sm"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400 ml-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2 ml-1">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-5 py-4 rounded-2xl border border-white/20 bg-white/5 dark:bg-black/20 backdrop-blur-xl text-foreground placeholder-foreground/40 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500/50 transition-all duration-300 shadow-sm"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-400 ml-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2 ml-1">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full px-5 py-4 rounded-3xl border border-white/20 bg-white/5 dark:bg-black/20 backdrop-blur-xl text-foreground placeholder-foreground/40 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500/50 transition-all duration-300 shadow-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400 ml-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-8 py-5 bg-primary-500/90 hover:bg-primary-500 disabled:bg-primary-500/50 text-white rounded-full font-bold tracking-wide shadow-[0_12px_48px_0_rgba(14,165,233,0.3)] backdrop-blur-md border border-white/20 transition-all duration-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-dots">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-card rounded-[2rem] p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-500/5 pointer-events-none" />
            <MapPin className="h-12 w-12 text-primary-500 mx-auto mb-4 drop-shadow-md relative z-10" />
            <h3 className="text-xl font-bold mb-2 relative z-10">Based in Toronto, Ontario</h3>
            <p className="text-foreground/70 mb-6 relative z-10">
              Available for opportunities in the Greater Toronto Area and remote positions worldwide.
            </p>
            <motion.a
              href="https://maps.google.com/?q=Toronto,Ontario,Canada"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 inline-flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-foreground font-semibold rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <Globe className="h-4 w-4" />
              <span>View on Map</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 