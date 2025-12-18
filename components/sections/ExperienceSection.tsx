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

// Function to calculate duration between two dates
function calculateDuration(startDate: string, endDate?: string): string {
  const monthNames: { [key: string]: number } = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };

  const [startMonth, startYear] = startDate.split(' ');
  const start = new Date(parseInt(startYear), monthNames[startMonth], 1);

  let end: Date;
  if (!endDate || endDate === 'Present') {
    end = new Date(); // Current date
  } else {
    const [endMonth, endYear] = endDate.split(' ');
    end = new Date(parseInt(endYear), monthNames[endMonth], 1);
  }

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

  if (totalMonths < 1) return '< 1 month';
  if (totalMonths === 1) return '1 month';
  if (totalMonths < 12) return `${totalMonths} months`;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (months === 0) return years === 1 ? '1 year' : `${years} years`;
  return years === 1 ? `1 year ${months} mo` : `${years} years ${months} mo`;
}

const experiences = [
  {
    id: 1,
    title: 'ARC Program Leader',
    company: 'City of Toronto',
    location: 'Toronto, ON',
    startDate: 'Sep 2025',
    endDate: 'Present',
    get period() { return `${this.startDate} - ${this.endDate}`; },
    get duration() { return calculateDuration(this.startDate, this.endDate); },
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
    startDate: 'Aug 2025',
    endDate: 'Present',
    get period() { return `${this.startDate} - ${this.endDate}`; },
    get duration() { return calculateDuration(this.startDate, this.endDate); },
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

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              className="glass-card rounded-[2.5rem] p-8 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="flex items-center space-x-3">
                    {experience.logo ? (
                      <div className="p-2 rounded-2xl bg-white dark:bg-white/10 border border-border/50 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="h-10 w-10 object-contain rounded-xl"
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
                        <div className={`p-4 rounded-xl bg-gradient-to-tr ${experience.color} hidden shadow-lg`}>
                          <experience.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    ) : (
                      <div className={`p-4 rounded-xl bg-gradient-to-tr ${experience.color} shadow-lg`}>
                        <experience.icon className="h-6 w-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">{experience.title}</h3>
                    <div className="flex items-center space-x-4 text-foreground/70">
                      <span className="font-semibold text-primary-500">{experience.company}</span>
                      <div className="flex items-center space-x-1 text-sm bg-secondary/30 px-3 py-1 rounded-full">
                        <MapPin className="h-3 w-3" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground/80 mb-1 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">{experience.period}</div>
                  <div className="text-sm font-bold text-accent-500 mt-1">{experience.duration}</div>
                </div>
              </div>

              <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-4xl">{experience.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {experience.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (metricIndex * 0.1) }}
                    className="flex flex-col items-center justify-center p-4 bg-white/5 dark:bg-white/5 rounded-2xl border border-white/10"
                  >
                    <metric.icon className="h-5 w-5 text-primary-500 mb-2" />
                    <div className="text-xl font-bold text-foreground">{metric.value}</div>
                    <div className="text-xs text-foreground/60 font-medium uppercase tracking-wider">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-4 flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent-500" />
                  <span>Key Achievements</span>
                </h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                      className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.2)]" />
                      <span className="text-foreground/80 leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-bold text-lg mb-4">Skills Applied</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (skillIndex * 0.05) }}
                      className="px-4 py-1.5 bg-white/5 border border-white/10 text-foreground/80 rounded-full text-sm font-medium hover:bg-white/10 hover:text-foreground transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 