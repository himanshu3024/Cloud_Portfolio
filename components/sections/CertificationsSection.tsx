'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  Shield, 
  Database, 
  FileText, 
  TrendingUp,
  Calendar,
  ExternalLink,
  Star,
  CheckCircle,
  Download,
  Search,
  Filter
} from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'Microsoft 365 Certified: Administrator Expert (MS-102)',
    issuer: 'Microsoft',
    date: 'October 2025',
    expiry: 'October 2026',
    icon: Shield,
    color: 'from-indigo-600 to-purple-600',
    description: 'Expert-level certification demonstrating advanced skills in deploying and managing Microsoft 365 tenants, implementing identity and access management, and administering cloud and hybrid environments.',
    skills: [
      'Microsoft 365 Tenant Management',
      'Microsoft Entra Identity & Access',
      'Security & Threat Management',
      'Microsoft 365 Defender',
      'Compliance Management',
      'Microsoft Purview'
    ],
    badge: '/certifications/ms-102.png',
    verification: 'https://learn.microsoft.com/api/credentials/share/en-us/HimanshuGandhi-7989/1E0236DD3F7F36A8?sharingId=1324DBCFB552537A',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Microsoft Certified: Identity and Access Administrator Associate (SC-300)',
    issuer: 'Microsoft',
    date: 'October 2025',
    expiry: 'October 2026',
    icon: Shield,
    color: 'from-cyan-500 to-blue-600',
    description: 'Professional certification for designing, implementing, and operating identity and access management systems using Microsoft Entra ID, focusing on Zero Trust security principles.',
    skills: [
      'Microsoft Entra ID Management',
      'Authentication & Authorization',
      'Conditional Access Policies',
      'Identity Governance',
      'Hybrid Identity Solutions',
      'Zero Trust Implementation'
    ],
    badge: '/certifications/sc-300.png',
    verification: 'https://learn.microsoft.com/api/credentials/share/en-us/HimanshuGandhi-7989/1D7394EC01189647?sharingId=1324DBCFB552537A',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Microsoft Azure Administrator Associate (AZ-104)',
    issuer: 'Microsoft',
    date: 'October 2025',
    expiry: 'October 2026',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    description: 'Microsoft Azure Administrator Associate certification demonstrating expertise in managing Azure resources, virtual machines, storage, and networking.',
    skills: [
      'Azure Resource Management',
      'Virtual Machine Administration',
      'Azure Storage Solutions',
      'Virtual Networking',
      'Identity & Access Management',
      'Azure Monitoring & Security'
    ],
    badge: '/certifications/az-104.png',
    verification: 'https://learn.microsoft.com/api/credentials/share/en-us/HimanshuGandhi-7989/506493B6ECBC4DE8?sharingId=1324DBCFB552537A',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Google Cloud Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: 'September 2024',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    description: 'Comprehensive cybersecurity training covering cloud security best practices, threat detection, and incident response.',
    skills: [
      'Cloud Security Architecture',
      'Identity & Access Management',
      'Threat Detection & Response',
      'Compliance & Governance',
      'Security Monitoring'
    ],
    badge: '/certifications/google-cybersecurity.png',
    verification: 'https://www.credly.com/badges/example-1',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Google Cloud Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'August 2024',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced data analytics training focusing on big data processing, machine learning, and data visualization.',
    skills: [
      'BigQuery & Data Processing',
      'Machine Learning Models',
      'Data Visualization',
      'ETL Pipelines',
      'Statistical Analysis'
    ],
    badge: '/certifications/google-data-analytics.png',
    verification: 'https://www.credly.com/badges/example-2',
    status: 'Active'
  },
  {
    id: 6,
    name: 'Google Project Management Certificate',
    issuer: 'Google',
    date: 'August 2024',
    icon: FileText,
    color: 'from-orange-500 to-red-500',
    description: 'Professional project management certification covering agile methodologies, stakeholder management, and project execution.',
    skills: [
      'Agile Methodologies',
      'Project Planning',
      'Risk Management',
      'Stakeholder Communication',
      'Resource Management'
    ],
    badge: '/certifications/google-project-management.png',
    verification: 'https://www.credly.com/badges/example-3',
    status: 'Active'
  },
  {
    id: 7,
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'July 2024',
    icon: TrendingUp,
    color: 'from-indigo-500 to-purple-500',
    description: 'Foundational data analytics certification covering data collection, analysis, and visualization techniques.',
    skills: [
      'Data Collection & Cleaning',
      'Statistical Analysis',
      'Data Visualization',
      'SQL & Spreadsheets',
      'Business Intelligence'
    ],
    badge: '/certifications/google-data-analytics-basic.png',
    verification: 'https://www.credly.com/badges/example-4',
    status: 'Active'
  }
];

const achievements = [
  {
    title: 'Academic Excellence Bursary',
    institution: 'Fleming College',
    amount: '$1,000 CAD',
    description: 'Awarded for achieving 93% score in Semester 1 of Project Management Post-Graduate Program.',
    date: '2024',
    icon: Star,
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIssuer, setSelectedIssuer] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  // Get unique values for filters
  const issuers = ['all', ...Array.from(new Set(certifications.map(cert => cert.issuer)))];
  const statuses = ['all', ...Array.from(new Set(certifications.map(cert => cert.status)))];
  const years = ['all', ...Array.from(new Set(certifications.map(cert => cert.date.split(' ')[1])))];

  // Filter certifications based on search and filters
  const filteredCertifications = certifications.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIssuer = selectedIssuer === 'all' || cert.issuer === selectedIssuer;
    const matchesStatus = selectedStatus === 'all' || cert.status === selectedStatus;
    const matchesYear = selectedYear === 'all' || cert.date.includes(selectedYear);
    
    return matchesSearch && matchesIssuer && matchesStatus && matchesYear;
  });

  return (
    <section id="certifications" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Industry-recognized certifications from Microsoft and Google demonstrating expertise in cloud computing, 
            cybersecurity, data analytics, and project management.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <label htmlFor="certification-search" className="sr-only">Search certifications</label>
                <input
                  type="text"
                  id="certification-search"
                  placeholder="Search certifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-card rounded-lg border border-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                  aria-label="Search certifications"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-foreground/60" aria-hidden="true" />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Issuer Filter */}
              <div className="min-w-[150px]">
                <label htmlFor="issuer-filter" className="sr-only">Filter by issuer</label>
                <select
                  id="issuer-filter"
                  value={selectedIssuer}
                  onChange={(e) => setSelectedIssuer(e.target.value)}
                  className="w-full px-4 py-3 bg-card rounded-lg border border-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                  aria-label="Filter certifications by issuer"
                >
                  <option value="all">All Issuers</option>
                  {issuers.filter(i => i !== 'all').map(issuer => (
                    <option key={issuer} value={issuer}>{issuer}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div className="min-w-[150px]">
                <label htmlFor="status-filter" className="sr-only">Filter by status</label>
                <select
                  id="status-filter"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-card rounded-lg border border-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                  aria-label="Filter certifications by status"
                >
                  <option value="all">All Statuses</option>
                  {statuses.filter(s => s !== 'all').map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="min-w-[150px]">
                <label htmlFor="year-filter" className="sr-only">Filter by year</label>
                <select
                  id="year-filter"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-card rounded-lg border border-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                  aria-label="Filter certifications by year"
                >
                  <option value="all">All Years</option>
                  {years.filter(y => y !== 'all').sort((a, b) => b.localeCompare(a)).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-foreground/60">
            Showing {filteredCertifications.length} of {certifications.length} certifications
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color}`}>
                  <cert.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-primary-500">{cert.issuer}</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-foreground/60">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                    {cert.expiry && (
                      <>
                        <span>•</span>
                        <span>Expires: {cert.expiry}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-foreground/70 mb-4">{cert.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="text-xs px-2 py-1 bg-secondary/50 rounded-full text-foreground/70"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <motion.a
                  href={cert.verification}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-sm text-primary-500 hover:text-primary-600 transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Verify Certificate</span>
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-sm text-foreground/60 hover:text-primary-500 transition-colors duration-200"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Badge</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-8">
            Academic <span className="gradient-text">Achievements</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border text-center"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${achievement.color} mb-4`}>
                <achievement.icon className="h-8 w-8 text-white" />
              </div>
              
              <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
              <p className="text-foreground/70 mb-3">{achievement.institution}</p>
              
              <div className="text-2xl font-bold text-primary-500 mb-3">
                {achievement.amount}
              </div>
              
              <p className="text-sm text-foreground/60 mb-3">{achievement.description}</p>
              
              <div className="flex items-center justify-center space-x-1 text-sm text-foreground/60">
                <Calendar className="h-4 w-4" />
                <span>{achievement.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-card rounded-xl p-8 shadow-lg border border-border"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Certification <span className="gradient-text">Overview</span>
            </h3>
            <p className="text-foreground/70">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">5</div>
              <div className="text-sm text-foreground/60">Total Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">100%</div>
              <div className="text-sm text-foreground/60">Active Status</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">$1K</div>
              <div className="text-sm text-foreground/60">Academic Award</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">93%</div>
              <div className="text-sm text-foreground/60">Academic Score</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Download All Certificates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 