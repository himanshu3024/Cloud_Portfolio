'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  MapPin, 
  Download,
  Play,
  Globe,
  Users,
  Heart,
  Zap,
  Shield,
  UserCheck,
  Star
} from 'lucide-react';

const timelineData = [
  {
    year: '2025 - Present',
    title: 'Cloud Computing Technologies',
    subtitle: 'George Brown College, Toronto',
    description: 'Post Graduate Certificate focusing on Microsoft 365, Azure, AWS, Linux, Windows Server, and Networking Fundamentals.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2024 - 2024',
    title: 'Project Management',
    subtitle: 'Fleming College, Toronto',
    description: 'Post Graduate Certificate with Academic Excellence Bursary ($1,000 CAD) for 93% score in Semester 1.',
    icon: Award,
    type: 'education'
  },
  {
    year: '2019 - 2023',
    title: 'Customer Service Representative',
    subtitle: 'Ets. Africainde',
    description: 'Managed 50+ customers daily, achieved 90%+ CSAT score, 85% first-contact resolution, exceeded sales targets by 15-20%.',
    icon: Briefcase,
    type: 'experience'
  },
  {
    year: '2016 - 2018',
    title: 'IT Support Assistant',
    subtitle: 'Rajasthan Computer Academy',
    description: 'Provided technical support, deployed provisioning packages, resolved hardware/software issues, maintained user accounts.',
    icon: Briefcase,
    type: 'experience'
  },
  {
    year: '2015 - 2019',
    title: 'Bachelor of Science',
    subtitle: 'University of Rajasthan, India',
    description: 'Physics, Chemistry & Mathematics with strong analytical and problem-solving foundation.',
    icon: GraduationCap,
    type: 'education'
  }
];

const skills = [
  { name: 'AWS', level: 85, color: '#ff9900' },
  { name: 'Azure', level: 80, color: '#0078d4' },
  { name: 'GCP', level: 75, color: '#4285f4' },
  { name: 'Kubernetes', level: 80, color: '#326ce5' },
  { name: 'Docker', level: 85, color: '#2496ed' },
  { name: 'Terraform', level: 75, color: '#7b42bc' },
  { name: 'Python', level: 80, color: '#3776ab' },
  { name: 'Bash', level: 85, color: '#4eaa25' },
  { name: 'Jenkins', level: 70, color: '#d33833' },
  { name: 'Git', level: 90, color: '#f05032' },
];

const lifeLessons = [
  "Every problem is an opportunity to learn something new",
  "The best code is the one that makes someone else's life easier",
  "Success is not about being the smartest, but about being the most persistent"
];



export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            From Physics equations to cloud infrastructure - here's the story of how I became passionate about 
            building scalable solutions that make a difference.
          </p>
        </motion.div>

        {/* 1. My Origin Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">My Origin Story</h3>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                My journey began in the world of Physics, where I learned to see patterns in chaos and solve complex equations. 
                But I realized that while Physics explained the universe, technology was shaping it. That's when I made the leap 
                into IT, starting with basic support and gradually climbing the ladder of complexity.
              </p>
              <p>
                When I moved to Canada, I didn't just change countries - I reinvented myself. From customer service roles where 
                I learned the human side of technology, to pursuing advanced cloud computing education, every step has been about 
                resilience and adaptation. The transition from Physics → IT → Cloud & DevOps wasn't just a career change; it was 
                a testament to my belief that learning never stops.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. What Drives Me Every Day */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mr-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">What Drives Me Every Day</h3>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I wake up every morning driven by an insatiable curiosity to understand how things work and how I can make them 
                work better. Whether it's optimizing a cloud deployment or debugging a complex system, I find joy in the puzzle-solving 
                process and the satisfaction of creating solutions that actually work.
              </p>
              <p>
                My core values are simple but powerful: <strong>curiosity</strong> to explore new technologies, 
                <strong> adaptability</strong> to embrace change, and <strong>teamwork</strong> to achieve more together than we ever could alone. 
                I believe that the best engineers aren't just technically skilled - they're also great collaborators who lift others up.
              </p>
              <p className="text-primary-500 font-semibold italic">
                "Every line of code I write is a promise to make someone's life easier tomorrow."
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. A Defining Challenge I Overcame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">A Defining Challenge I Overcame</h3>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                When I first moved to Canada, I faced the classic immigrant challenge: my education and experience weren't immediately 
                recognized. Instead of getting discouraged, I turned this into an opportunity to prove myself through action.
              </p>
              <p>
                I started from the ground up in customer service, where I learned that technical skills are only half the battle. 
                The real challenge was understanding people's needs and translating technical solutions into business value. 
                Within months, I was exceeding targets and mentoring new team members. This experience taught me that resilience 
                isn't about avoiding obstacles - it's about using them as stepping stones to become stronger.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4. How I Work with People */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">How I Work with People</h3>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I believe the best solutions come from collaboration, not competition. My approach is simple: listen first, 
                understand the problem, then work together to find the best solution. Whether I'm mentoring a junior developer 
                or collaborating with senior architects, I focus on creating an environment where everyone feels heard and valued.
              </p>
              <p>
                During my time at Ets. Africainde, I didn't just handle customer issues - I became the go-to person for training 
                new team members. I developed a simple but effective mentoring system that helped reduce onboarding time by 40% 
                and improved team performance across the board. This experience showed me that the best way to grow is to help others grow.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5. If You Hire Me... (Promise Section) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-8 shadow-lg text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">If You Hire Me...</h3>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                You're not just getting a cloud engineer - you're getting someone who will bring relentless energy, 
                creative problem-solving, and genuine care for your team's success. I promise to approach every challenge 
                with the same determination that brought me from Physics student to cloud computing professional.
              </p>
              <p>
                I'll be the person who stays late to debug that critical issue, who mentors junior developers, 
                and who constantly looks for ways to make your systems more efficient and reliable. 
                Because when I commit to something, I commit with my whole heart.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Life Lessons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Life Lessons That Guide Me</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {lifeLessons.map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="text-center p-4 bg-secondary-50 dark:bg-secondary-900 rounded-lg"
                >
                  <p className="text-foreground/80 italic">"{lesson}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        

        {/* Timeline and Skills Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">My Journey & Experience</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-500/30" />
              
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  className="relative flex items-start space-x-4 mb-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.type === 'education' 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-accent-500 text-white'
                    }`}>
                      {item.icon ? <item.icon className="h-6 w-6" /> : <Briefcase className="h-6 w-6" />}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-lg p-6 shadow-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary-500">
                        {item.year}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.type === 'education' 
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                          : 'bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300'
                      }`}>
                        {item.type === 'education' ? 'Education' : 'Experience'}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-foreground/70 mb-2">{item.subtitle}</p>
                    <p className="text-sm text-foreground/60">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="space-y-8"
          >
            {/* Personal Info */}
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-500" />
                  <span className="text-foreground/80">Toronto, Ontario, Canada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary-500" />
                  <span className="text-foreground/80">English (Fluent), French (Fluent), Hindi (Native)</span>
                </div>
                                 <div className="flex items-center space-x-3">
                   <Briefcase className="h-5 w-5 text-primary-500" />
                   <span className="text-foreground/80">Cloud Intern, DevOps Engineer, Cloud Architect</span>
                 </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary-500" />
                  <span className="text-foreground/80">Team Collaboration, Problem Solving, Continuous Learning</span>
                </div>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, width: 0 }}
                    animate={inView ? { opacity: 1, width: '100%' } : {}}
                    transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground/80">{skill.name}</span>
                      <span className="text-sm text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 dark:bg-secondary-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 2.1 + index * 0.1 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg font-semibold transition-all duration-200"
              >
                <Play className="h-5 w-5" />
                <span>Watch Introduction</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 