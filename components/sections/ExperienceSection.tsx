'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  Award, 
  Users, 
  Target, 
  TrendingUp,
  Star,
  Calendar,
  MapPin,
  CheckCircle
} from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'ARC Program Leader',
    company: 'City of Toronto',
    location: 'Toronto, ON',
    period: 'Sep 2025 - Present',
    duration: '1 month',
    description: 'Plan, organize and lead after-school recreation care (ARC) programmes for children ages 6-12, ensuring healthy child development principles and safety standards.',
    achievements: [
      'Plan, organize and lead after-school recreation care (ARC) programmes for children ages 6-12',
      'Ensure healthy child development principles (PHCD / HIGH FIVE®) are embedded in activity design and delivery',
      'Oversee program equipment, supplies, facilities, and ensure health & safety standards (including MSDS sheets) are met',
      'Document attendance, follow safe arrival policy, and manage unaccounted absences (up to contacting authorities) in serious cases',
      'Provide on-site direction and general guidance to staff (leaders, assistants) supporting the programme',
      'Liaise with caregivers, staff, public and other divisions to respond to inquiries and coordinate the programme',
      'Assist with administrative tasks (e.g., purchase of supplies, record-keeping, reporting incidents) to support programme operations'
    ],
    skills: ['Program Leadership', 'Child Development', 'Safety Management', 'Staff Supervision', 'Administrative Support', 'Community Liaison'],
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    logo: '/images/city-of-toronto.png',
    metrics: [
      { label: 'Age Group', value: '6-12', icon: Users },
      { label: 'Safety Standards', value: '100%', icon: CheckCircle },
      { label: 'Program Coverage', value: 'Full', icon: Target },
      { label: 'Staff Support', value: 'Multi-level', icon: TrendingUp }
    ]
  },
  {
    id: 2,
    title: 'Public Service Assistant',
    company: 'Toronto Public Library',
    location: 'Toronto, ON',
    period: 'Aug 2025 - Present',
    duration: '2 months',
    description: 'Perform comprehensive library services including circulation duties, patron assistance, and program support while maintaining library policies and community access.',
    achievements: [
      'Perform circulation duties: check-in/out of materials, renewals, holds/reserves, shelve and maintain collections',
      'Assist patrons with library enquiries (in-person and often at desk), providing direction, reader/advisory support, and support with library technology',
      'Process payments, manage library accounts (fines/fees), maintain accurate records for library transactions',
      'Perform shelving, shelf-reading, collection maintenance and support general upkeep of library environment',
      'Assist with program/workshop support: set-up, take-down, event bookings, equipment set-up and user support',
      'Maintain integrity of library policies (e.g., equity, access, confidentiality), ensure access to services for diverse communities'
    ],
    skills: ['Library Services', 'Customer Service', 'Collection Management', 'Technology Support', 'Program Coordination', 'Community Access'],
    icon: Briefcase,
    color: 'from-green-500 to-emerald-500',
    logo: '/images/toronto-public-library.jpg',
    metrics: [
      { label: 'Daily Patrons', value: '100+', icon: Users },
      { label: 'Service Accuracy', value: '99%', icon: CheckCircle },
      { label: 'Collection Maintenance', value: 'Daily', icon: Target },
      { label: 'Community Access', value: 'Full', icon: TrendingUp }
    ]
  },
  {
    id: 3,
    title: 'Customer Service Representative',
    company: 'Ets. Africainde',
    location: 'Toronto, ON',
    period: 'Jun 2019 - May 2023',
    duration: '4 years',
    description: 'Provided exceptional customer support and achieved outstanding performance metrics in a fast-paced environment.',
    achievements: [
      'Managed 50+ customers daily with liquor product inquiries',
      'Achieved 90%+ customer satisfaction (CSAT) score',
      'Maintained 85% first-contact resolution rate',
      'Exceeded sales targets by 15-20% through proactive cross-selling',
      'Trained and mentored new hires, improving onboarding efficiency'
    ],
    skills: ['Customer Service', 'Sales', 'Training', 'Problem Solving', 'Communication'],
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    metrics: [
      { label: 'Daily Customers', value: '50+', icon: Users },
      { label: 'CSAT Score', value: '90%+', icon: Star },
      { label: 'Resolution Rate', value: '85%', icon: CheckCircle },
      { label: 'Sales Target', value: '+15-20%', icon: TrendingUp }
    ]
  },
  {
    id: 4,
    title: 'IT Support Assistant',
    company: 'Rajasthan Computer Academy',
    location: 'Jaipur, India',
    period: 'Jul 2016 - Dec 2018',
    duration: '2.5 years',
    description: 'Delivered comprehensive technical support and system administration services across desktop and laptop environments.',
    achievements: [
      'Delivered first-line technical support across Windows OS systems',
      'Created and deployed provisioning packages using Windows Configuration Designer',
      'Resolved hardware/software issues, login problems, and remote access errors',
      'Provided support for Microsoft Office, system updates, and performance tuning',
      'Maintained user accounts and access rights with proper documentation'
    ],
    skills: ['Windows OS', 'System Administration', 'Hardware Support', 'Microsoft Office', 'User Management'],
    icon: Briefcase,
    color: 'from-orange-500 to-red-500',
    metrics: [
      { label: 'Systems Supported', value: '100+', icon: Briefcase },
      { label: 'Issue Resolution', value: '95%', icon: CheckCircle },
      { label: 'User Satisfaction', value: '92%', icon: Star },
      { label: 'Response Time', value: '<2hrs', icon: Target }
    ]
  }
];

const education = [
  {
    id: 1,
    title: 'Cloud Computing Technologies',
    institution: 'George Brown College',
    location: 'Toronto, ON',
    period: 'May 2025 - Apr 2026',
    type: 'Post Graduate Certificate',
    description: 'Comprehensive program covering Microsoft 365, Azure, AWS, Linux, Windows Server, and Networking Fundamentals.',
    courses: [
      'Microsoft 365 Administration',
      'Microsoft Azure (Admin, Architect, Security)',
      'AWS (Practitioner, Solutions Architect, Security)',
      'Advanced Linux Administration',
      'Windows Server Management',
      'Networking Fundamentals'
    ],
    icon: Award,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Project Management',
    institution: 'Fleming College',
    location: 'Toronto, ON',
    period: 'May 2024 - Dec 2024',
    type: 'Post Graduate Certificate',
    description: 'Achieved Academic Excellence Bursary ($1,000 CAD) for outstanding performance with 93% score in Semester 1.',
    courses: [
      'Project Planning and Execution',
      'Risk Management',
      'Stakeholder Communication',
      'Agile Methodologies',
      'Project Monitoring and Control'
    ],
    icon: Award,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 3,
    title: 'Bachelor of Science',
    institution: 'University of Rajasthan',
    location: 'Jaipur, India',
    period: 'May 2015 - Jun 2019',
    type: 'Bachelor\'s Degree',
    description: 'Physics, Chemistry & Mathematics with strong analytical and problem-solving foundation.',
    courses: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Analytical Methods',
      'Scientific Computing'
    ],
    icon: Award,
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A diverse professional journey combining customer service excellence with technical expertise, 
            demonstrating strong problem-solving abilities and continuous learning mindset.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="space-y-12 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="flex items-center space-x-3">
                    {experience.logo ? (
                      <div className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-border flex items-center justify-center">
                        <img 
                          src={experience.logo} 
                          alt={`${experience.company} logo`}
                          className="h-8 w-8 object-contain max-w-full max-h-full"
                          onLoad={() => console.log(`Logo loaded successfully: ${experience.company}`)}
                          onError={(e) => {
                            console.error(`Failed to load logo for ${experience.company}:`, experience.logo);
                            e.currentTarget.style.display = 'none';
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'block';
                            }
                          }}
                        />
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${experience.color} hidden`}>
                          <experience.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    ) : (
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${experience.color}`}>
                        <experience.icon className="h-6 w-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{experience.title}</h3>
                    <div className="flex items-center space-x-4 text-foreground/70">
                      <span className="font-semibold text-primary-500">{experience.company}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/60 mb-1">{experience.period}</div>
                  <div className="text-sm font-semibold text-accent-500">{experience.duration}</div>
                </div>
              </div>

              <p className="text-foreground/70 mb-6">{experience.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {experience.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (metricIndex * 0.1) }}
                    className="text-center p-3 bg-secondary/30 rounded-lg"
                  >
                    <metric.icon className="h-5 w-5 text-primary-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-primary-600">{metric.value}</div>
                    <div className="text-xs text-foreground/60">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent-500" />
                  <span>Key Achievements</span>
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-semibold text-lg mb-3">Skills Applied</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (skillIndex * 0.05) }}
                      className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-8">
            <span className="gradient-text">Education</span> & Certifications
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${edu.color}`}>
                  <edu.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary-500">{edu.type}</span>
                </div>
              </div>

              <h4 className="text-lg font-bold mb-2">{edu.title}</h4>
              <p className="text-foreground/70 mb-3">{edu.institution}</p>
              
              <div className="flex items-center space-x-2 text-sm text-foreground/60 mb-3">
                <MapPin className="h-4 w-4" />
                <span>{edu.location}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-foreground/60 mb-4">
                <Calendar className="h-4 w-4" />
                <span>{edu.period}</span>
              </div>

              <p className="text-sm text-foreground/70 mb-4">{edu.description}</p>

              <div>
                <h5 className="font-semibold text-sm mb-2">Key Courses:</h5>
                <ul className="space-y-1">
                  {edu.courses.slice(0, 3).map((course, courseIndex) => (
                    <li key={courseIndex} className="text-xs text-foreground/60 flex items-center space-x-1">
                      <div className="w-1 h-1 bg-primary-500 rounded-full" />
                      <span>{course}</span>
                    </li>
                  ))}
                  {edu.courses.length > 3 && (
                    <li className="text-xs text-foreground/60 flex items-center space-x-1">
                      <div className="w-1 h-1 bg-primary-500 rounded-full" />
                      <span>+{edu.courses.length - 3} more courses</span>
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 