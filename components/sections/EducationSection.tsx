'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Award,
    GraduationCap,
    MapPin,
    Calendar,
    BookOpen,
    Download,
    ExternalLink,
    CheckCircle,
    Trophy,
    Star
} from 'lucide-react';

const education = [
    {
        id: 1,
        title: 'Cloud Computing Technologies',
        institution: 'George Brown College',
        location: 'Toronto, ON',
        period: 'May 2025 - Apr 2026',
        duration: '1 year',
        type: 'Post Graduate Certificate',
        status: 'In Progress',
        description: 'Comprehensive program covering Microsoft 365, Azure, AWS, Linux, Windows Server, and Networking Fundamentals. Building expertise in enterprise cloud infrastructure and administration.',
        courses: [
            'Microsoft 365 Administration',
            'Microsoft Azure (Admin, Architect, Security)',
            'AWS (Practitioner, Solutions Architect, Security)',
            'Advanced Linux Administration',
            'Windows Server Management',
            'Networking Fundamentals'
        ],
        achievements: [
            'Currently maintaining strong academic performance',
            'Hands-on labs with real-world cloud scenarios',
            'Building multi-cloud expertise across AWS, Azure, and M365'
        ],
        icon: GraduationCap,
        color: 'from-purple-500 to-pink-500',
        transcript: '/education/George Brown Unofficial Transcript.pdf',
        metrics: [
            { label: 'Courses', value: '6+', icon: BookOpen },
            { label: 'Cloud Platforms', value: '3', icon: Award },
            { label: 'Status', value: 'Active', icon: Star },
            { label: 'Duration', value: '1 Year', icon: Calendar }
        ]
    },
    {
        id: 2,
        title: 'Project Management',
        institution: 'Fleming College',
        location: 'Toronto, ON',
        period: 'May 2024 - Dec 2024',
        duration: '8 months',
        type: 'Post Graduate Certificate',
        status: 'Completed',
        description: 'Intensive project management program covering agile methodologies, risk management, and stakeholder communication. Achieved Academic Excellence Bursary for outstanding performance.',
        courses: [
            'Project Planning and Execution',
            'Risk Management',
            'Stakeholder Communication',
            'Agile Methodologies',
            'Project Monitoring and Control',
            'Quality Assurance'
        ],
        achievements: [
            'Academic Excellence Bursary ($1,000 CAD) for 93% score in Semester 1',
            'Completed comprehensive capstone project',
            'Mastered agile and waterfall methodologies'
        ],
        icon: Trophy,
        color: 'from-orange-500 to-red-500',
        transcript: '/education/Project Management Transcript Final.pdf',
        metrics: [
            { label: 'GPA', value: '93%', icon: Star },
            { label: 'Bursary', value: '$1K', icon: Award },
            { label: 'Status', value: 'Done', icon: CheckCircle },
            { label: 'Duration', value: '8 Mo', icon: Calendar }
        ]
    },
    {
        id: 3,
        title: 'Bachelor of Science',
        institution: 'University of Rajasthan',
        location: 'Jaipur, India',
        period: 'May 2015 - Jun 2019',
        duration: '4 years',
        type: "Bachelor's Degree",
        status: 'Completed',
        description: 'Comprehensive science degree in Physics, Chemistry & Mathematics, building a strong foundation in analytical thinking, problem-solving, and scientific methodology.',
        courses: [
            'Physics',
            'Chemistry',
            'Mathematics',
            'Analytical Methods',
            'Scientific Computing',
            'Laboratory Techniques'
        ],
        achievements: [
            'Strong foundation in analytical and quantitative reasoning',
            'Developed problem-solving skills applicable to technical challenges',
            'Completed extensive laboratory and practical work'
        ],
        icon: GraduationCap,
        color: 'from-indigo-500 to-purple-500',
        metrics: [
            { label: 'Major', value: 'PCM', icon: BookOpen },
            { label: 'Type', value: 'B.Sc', icon: Award },
            { label: 'Status', value: 'Done', icon: CheckCircle },
            { label: 'Duration', value: '4 Yrs', icon: Calendar }
        ]
    }
];

export default function EducationSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="education" className="py-20 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="gradient-text">Education</span> & Qualifications
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                        A strong academic foundation combining science, project management, and cloud computing expertise,
                        demonstrating commitment to continuous learning and professional development.
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="glass-card rounded-[2.5rem] p-8 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-500"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                                    <div className={`p-4 rounded-xl bg-gradient-to-tr ${edu.color} shadow-lg`}>
                                        <edu.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1 tracking-tight">{edu.title}</h3>
                                        <div className="flex items-center space-x-4 text-foreground/70">
                                            <span className="font-semibold text-primary-500">{edu.institution}</span>
                                            <div className="flex items-center space-x-1 text-sm bg-secondary/30 px-3 py-1 rounded-full">
                                                <MapPin className="h-3 w-3" />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium text-foreground/80 mb-1 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">{edu.period}</div>
                                    <div className="flex items-center justify-end space-x-2 mt-2">
                                        <span className={`text-xs px-3 py-1.5 rounded-full font-bold backdrop-blur-md shadow-sm border ${edu.status === 'In Progress'
                                            ? 'bg-blue-500/30 dark:bg-blue-500/40 text-blue-700 dark:text-blue-300 border-blue-500/50'
                                            : 'bg-green-500/30 dark:bg-green-500/40 text-green-700 dark:text-green-300 border-green-500/50'
                                            }`}>
                                            {edu.status}
                                        </span>
                                        <span className="text-xs px-3 py-1.5 rounded-full bg-primary-500/30 dark:bg-primary-500/40 text-primary-700 dark:text-primary-300 border border-primary-500/50 font-bold backdrop-blur-md shadow-sm">
                                            {edu.type}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-4xl">{edu.description}</p>

                            {/* Metrics */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {edu.metrics.map((metric, metricIndex) => (
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

                            {/* Key Achievements */}
                            <div className="mb-8">
                                <h4 className="font-bold text-lg mb-4 flex items-center space-x-2">
                                    <Trophy className="h-5 w-5 text-accent-500" />
                                    <span>Highlights & Achievements</span>
                                </h4>
                                <div className="grid md:grid-cols-1 gap-3">
                                    {edu.achievements.map((achievement, achievementIndex) => (
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

                            {/* Courses */}
                            <div className="mb-8">
                                <h4 className="font-bold text-lg mb-4">Key Courses</h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.courses.map((course, courseIndex) => (
                                        <motion.span
                                            key={course}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: (index * 0.2) + (courseIndex * 0.05) }}
                                            className="px-4 py-1.5 bg-white/5 border border-white/10 text-foreground/80 rounded-full text-sm font-medium hover:bg-white/10 hover:text-foreground transition-colors duration-200"
                                        >
                                            {course}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                                {edu.transcript && (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            const link = document.createElement('a');
                                            link.href = encodeURI(edu.transcript);
                                            link.download = `${edu.institution}_Transcript.pdf`;
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}
                                        className="flex items-center space-x-2 px-8 py-4 bg-primary-500/90 hover:bg-primary-500 text-white rounded-full font-bold shadow-[0_8px_32px_0_rgba(14,165,233,0.3)] backdrop-blur-md border border-white/20 transition-all duration-300"
                                    >
                                        <Download className="h-4 w-4" />
                                        <span>Download Transcript</span>
                                    </motion.button>
                                )}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center space-x-2 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-foreground rounded-full font-bold transition-all duration-300 shadow-sm"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    <span>View Institution</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
