'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  Filter,
  Sparkles,
  Lock,
  Eye,
  ArrowRight,
  Cloud
} from 'lucide-react';

const certifications: Certification[] = [
  {
    id: 10,
    name: 'AWS Academy Graduate - Cloud Architecting',
    issuer: 'AWS Academy',
    date: 'December 2025',
    icon: Cloud,
    color: 'from-orange-500 to-amber-500',
    glowColor: 'rgba(249, 115, 22, 0.5)',
    description: 'Advanced cloud architecting certification covering the design of cost- and performance-optimized solutions on AWS. Expertise includes the AWS Well-Architected Framework and building distributed infrastructures through a hands-on approach.',
    skills: [
      'AWS Well-Architected Framework',
      'Scalable & Highly Available Architecture',
      'Database Decoupling (RDS)',
      'Load Balancing & Auto Scaling',
      'Cost Optimization',
      'Performance Monitoring'
    ],
    badge: '/certificates/AWS/aws-academy-graduate-cloud-architecting-training-ba.png',
    verification: 'https://www.credly.com/earner/earned/badge/f5ceadbd-77f1-473f-9d8b-4f79c4150582',
    certificateUrl: '/certificates/AWS/AWS_Academy_Graduate___Cloud_Architecting___Training_Badge_Badge20251207-33-tet9sx.pdf',
    badgeDownloadUrl: '/certificates/AWS/aws-academy-graduate-cloud-architecting-training-ba.png',
    status: 'Active',
    level: 'Associate',
    credentialId: 'AWS-AC-ARCH-2025'
  },
  {
    id: 9,
    name: 'AWS Academy Graduate - Cloud Security Foundations',
    issuer: 'AWS Academy',
    date: 'December 2025',
    icon: Shield,
    color: 'from-red-600 to-rose-600',
    glowColor: 'rgba(225, 29, 72, 0.5)',
    description: 'Specialized certification in cloud cybersecurity principles. Demonstrates foundational knowledge of securing AWS services, identity management, and implementing security best practices in cloud environments.',
    skills: [
      'Cloud Cybersecurity Principles',
      'IAM Security Best Practices',
      'Network Defense & VPC Security',
      'Data Encryption at Rest & Transit',
      'Compliance & Governance',
      'Security Monitoring'
    ],
    badge: '/certificates/AWS/aws-academy-graduate-cloud-security-foundations-tra.png',
    verification: 'https://www.credly.com/earner/earned/badge/a301ac2c-416e-48a9-a598-eabe4724a70c',
    certificateUrl: '/certificates/AWS/AWS_Academy_Graduate___Cloud_Security_Foundations___Training_Badge_Badge20251219-32-s6fmwf.pdf',
    badgeDownloadUrl: '/certificates/AWS/aws-academy-graduate-cloud-security-foundations-tra.png',
    status: 'Active',
    level: 'Foundational',
    credentialId: 'AWS-AC-SEC-2025'
  },
  {
    id: 8,
    name: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'December 2025',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.5)',
    description: 'Foundational certification providing a comprehensive overview of cloud computing concepts, AWS core services, security, architecture, pricing, and support.',
    skills: [
      'Cloud Computing Fundamentals',
      'AWS Core Services (EC2, S3, RDS)',
      'Shared Responsibility Model',
      'AWS Pricing & Support',
      'Identity & Access Management',
      'Cloud Architecture Basics'
    ],
    badge: '/certificates/AWS/aws-academy-graduate-cloud-foundations-training-bad.png',
    verification: 'https://www.credly.com/earner/earned/badge/a2c1eaed-acb7-448b-a782-001be9f561dc',
    certificateUrl: '/certificates/AWS/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251207-31-9cczeu.pdf',
    badgeDownloadUrl: '/certificates/AWS/aws-academy-graduate-cloud-foundations-training-bad.png',
    status: 'Active',
    level: 'Foundational',
    credentialId: 'AWS-AC-FOUND-2025'
  },

  {
    id: 1,
    name: 'Microsoft 365 Certified: Administrator Expert (MS-102)',
    issuer: 'Microsoft',
    date: 'November 2025',
    expiry: 'November 2026',
    icon: Shield,
    color: 'from-indigo-600 to-purple-600',
    glowColor: 'rgba(99, 102, 241, 0.5)',
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
    verification: 'https://learn.microsoft.com/en-us/users/himanshugandhi-7989/credentials/1e0236dd3f7f36a8',
    certificateUrl: '/certificates/Azure/MS-102.pdf',
    status: 'Active',
    level: 'Expert',
    credentialId: 'MS102-2025-001'
  },
  {
    id: 2,
    name: 'Microsoft Certified: Identity and Access Administrator Associate (SC-300)',
    issuer: 'Microsoft',
    date: 'November 2025',
    expiry: 'November 2026',
    icon: Lock,
    color: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(6, 182, 212, 0.5)',
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
    certificateUrl: '/certificates/Azure/SC-300.pdf',
    status: 'Active',
    level: 'Associate',
    credentialId: 'SC300-2025-001'
  },
  {
    id: 3,
    name: 'Microsoft Azure Administrator Associate (AZ-104)',
    issuer: 'Microsoft',
    date: 'October 2025',
    expiry: 'October 2026',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.5)',
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
    certificateUrl: '/certificates/Azure/AZ-104.pdf',
    status: 'Active',
    level: 'Associate',
    credentialId: 'AZ104-2025-001'
  },
  {
    id: 4,
    name: 'Google Cloud Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: 'September 2024',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.5)',
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
    certificateUrl: '/certificates/Google/Google Cloud Cybersecurity Professional Certificate.pdf',
    status: 'Active',
    level: 'Professional',
    credentialId: 'GCP-CYB-2024-001'
  },
  {
    id: 5,
    name: 'Google Cloud Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'August 2024',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.5)',
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
    certificateUrl: '/certificates/Google/Google Cloud Data Analytics Professional Certificate.pdf',
    status: 'Active',
    level: 'Professional',
    credentialId: 'GCP-DA-2024-001'
  },
  {
    id: 6,
    name: 'Google Project Management Certificate',
    issuer: 'Google',
    date: 'August 2024',
    icon: FileText,
    color: 'from-orange-500 to-red-500',
    glowColor: 'rgba(249, 115, 22, 0.5)',
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
    certificateUrl: '/certificates/Google/Google Project Management.pdf',
    status: 'Active',
    level: 'Professional',
    credentialId: 'GCP-PM-2024-001'
  },
  {
    id: 7,
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'July 2024',
    icon: TrendingUp,
    color: 'from-indigo-500 to-purple-500',
    glowColor: 'rgba(99, 102, 241, 0.5)',
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
    certificateUrl: '/certificates/Google/Google Data Analytics.pdf',
    status: 'Active',
    level: 'Professional',
    credentialId: 'GCP-DA-BASIC-2024-001'
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

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
  icon: any;
  color: string;
  glowColor: string;
  description: string;
  skills: string[];
  level: string;
  credentialId: string;
  verification?: string;
  badge?: string;
  status: string;
  certificateUrl?: string;
  badgeDownloadUrl?: string;
}

interface CertificationCardProps {
  cert: Certification;
  index: number;
  inView: boolean;
}

function CertificationCard({ cert, index, inView }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 200,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 200,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${cert.glowColor}, transparent 40%)`
        }}
      />

      {/* Main Card */}
      <div className="relative glass-card rounded-2xl overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
          }}
        />

        {/* Top Badge Section */}
        <div className="relative p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              {/* Animated Icon */}
              <motion.div
                className={`relative p-3 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <cert.icon className="h-6 w-6 text-white relative z-10" />
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: isHovered
                      ? `0 0 20px ${cert.glowColor}, 0 0 40px ${cert.glowColor}`
                      : '0 0 0px rgba(0,0,0,0)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div>
                <motion.div
                  className="flex items-center space-x-2 mb-1"
                  initial={{ x: -10, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-primary-500/50" />
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-400 border border-emerald-500/30">
                    {cert.level}
                  </span>
                </motion.div>
                <motion.span
                  className="text-[10px] text-foreground/50 font-mono"
                  initial={{ x: -10, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  ID: {cert.credentialId}
                </motion.span>
              </div>
            </div>

            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
              className="relative"
            >
              <div className="px-3 py-1.5 rounded-full bg-emerald-500/30 dark:bg-emerald-500/40 border border-emerald-500/50 flex items-center space-x-1.5 backdrop-blur-md shadow-sm">
                <motion.div
                  className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  {cert.status}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Title */}
          <motion.h3
            className="text-lg font-bold mb-2 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            initial={{ y: 10, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {cert.name}
          </motion.h3>

          {/* Date Info */}
          <motion.div
            className="flex items-center space-x-4 text-xs text-foreground/60"
            initial={{ y: 10, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <div className="flex items-center space-x-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span className="font-medium">Issued: {cert.date}</span>
            </div>
            {cert.expiry && (
              <>
                <div className="h-1 w-1 rounded-full bg-foreground/30" />
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span className="font-medium">Expires: {cert.expiry}</span>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mx-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Content Section */}
        <div className="relative p-6 pt-4">
          {/* Description */}
          <motion.p
            className="text-sm text-foreground/70 mb-5 leading-relaxed"
            initial={{ y: 10, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {cert.description}
          </motion.p>

          {/* Skills Section */}
          <div className="mb-5">
            <motion.div
              className="flex items-center space-x-2 mb-3"
              initial={{ x: -10, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <Sparkles className="h-4 w-4 text-primary-500" />
              <h4 className="font-bold text-sm text-foreground/90">Core Competencies</h4>
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    delay: index * 0.1 + 0.7 + skillIndex * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group/skill relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur-sm opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                  <span className="relative text-xs px-3 py-1.5 bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-lg text-foreground/80 dark:text-foreground/90 font-bold border border-white/20 dark:border-white/10 block transition-colors group-hover/skill:border-primary-500/50 shadow-sm">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col space-y-2 pt-4 border-t border-border/50"
            initial={{ y: 10, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.8 }}
          >
            <div className="grid grid-cols-2 gap-2">
              {cert.certificateUrl && (
                <motion.a
                  href={cert.certificateUrl}
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 hover:from-primary-500/20 hover:to-primary-600/20 border border-primary-500/30 rounded-lg font-bold text-[11px] transition-all text-primary-700 dark:text-primary-300"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Certificate</span>
                </motion.a>
              )}

              {cert.badgeDownloadUrl ? (
                <motion.a
                  href={cert.badgeDownloadUrl}
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 px-3 py-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 backdrop-blur-md border border-border/50 rounded-lg font-bold text-[11px] transition-all"
                >
                  <Award className="h-3.5 w-3.5" />
                  <span>Download Badge</span>
                </motion.a>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 px-3 py-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 backdrop-blur-md border border-border/50 rounded-lg font-bold text-[11px] transition-all"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Badge</span>
                </motion.button>
              )}
            </div>

            {cert.verification && (
              <motion.a
                href={cert.verification}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-bold text-sm shadow-lg shadow-primary-500/25 transition-all group/btn"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Verify Badge</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-bl-full`} />
        </div>
      </div>
    </motion.div>
  );
}

export default function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIssuer, setSelectedIssuer] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const issuers = ['all', ...Array.from(new Set(certifications.map(cert => cert.issuer)))];
  const statuses = ['all', ...Array.from(new Set(certifications.map(cert => cert.status)))];
  const years = ['all', ...Array.from(new Set(certifications.map(cert => cert.date.split(' ')[1])))];

  const filteredCertifications = certifications.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIssuer = selectedIssuer === 'all' || cert.issuer === selectedIssuer;
    const matchesStatus = selectedStatus === 'all' || cert.status === selectedStatus;
    const matchesYear = selectedYear === 'all' || cert.date.includes(selectedYear);

    return matchesSearch && matchesIssuer && matchesStatus && matchesYear;
  });

  return (
    <section id="certifications" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/20 dark:bg-primary-500/30 border border-primary-500/50 mb-6 backdrop-blur-md shadow-sm"
          >
            <Award className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-bold text-primary-700 dark:text-primary-300">Professional Credentials</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certified <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Industry-recognized certifications from AWS, Microsoft, and Google demonstrating expertise in cloud computing,
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
            <div className="flex-1">
              <div className="relative group">
                <label htmlFor="certification-search" className="sr-only">Search certifications</label>
                <input
                  type="text"
                  id="certification-search"
                  placeholder="Search certifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-4 pl-12 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 text-foreground placeholder:text-foreground/40 shadow-sm"
                  aria-label="Search certifications"
                />
                <Search className="absolute left-4 top-4.5 h-5 w-5 text-foreground/40 group-focus-within:text-primary-500 transition-colors" aria-hidden="true" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="min-w-[150px]">
                <label htmlFor="issuer-filter" className="sr-only">Filter by issuer</label>
                <select
                  id="issuer-filter"
                  value={selectedIssuer}
                  onChange={(e) => setSelectedIssuer(e.target.value)}
                  className="w-full px-4 py-4 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 text-foreground appearance-none shadow-sm"
                  aria-label="Filter certifications by issuer"
                >
                  <option value="all">All Issuers</option>
                  {issuers.filter(i => i !== 'all').map(issuer => (
                    <option key={issuer} value={issuer}>{issuer}</option>
                  ))}
                </select>
              </div>

              <div className="min-w-[150px]">
                <label htmlFor="status-filter" className="sr-only">Filter by status</label>
                <select
                  id="status-filter"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                  aria-label="Filter certifications by status"
                >
                  <option value="all">All Statuses</option>
                  {statuses.filter(s => s !== 'all').map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div className="min-w-[150px]">
                <label htmlFor="year-filter" className="sr-only">Filter by year</label>
                <select
                  id="year-filter"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
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

          <motion.div
            className="mt-4 text-sm text-foreground/60 flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Filter className="h-4 w-4" />
            <span>Showing {filteredCertifications.length} of {certifications.length} certifications</span>
          </motion.div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredCertifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-8">
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
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/50 to-orange-500/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative glass-card rounded-xl p-6 h-full">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.color} mb-4 shadow-lg`}>
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>

                <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                <p className="text-foreground/70 mb-3 text-sm">{achievement.institution}</p>

                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-3">
                  {achievement.amount}
                </div>

                <p className="text-sm text-foreground/60 mb-4 leading-relaxed">{achievement.description}</p>

                <div className="flex items-center justify-center space-x-1.5 text-sm text-foreground/60">
                  <Calendar className="h-4 w-4" />
                  <span>{achievement.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative glass-card rounded-2xl p-8">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, type: "spring", delay: 1.1 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4"
              >
                <TrendingUp className="h-5 w-5 text-primary-500" />
                <span className="text-sm font-semibold text-primary-500">Performance Metrics</span>
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">
                Certification <span className="gradient-text">Overview</span>
              </h3>
              <p className="text-foreground/70">
                Continuous learning and professional development through industry-recognized certifications
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '10', label: 'Total Certifications', icon: Award, color: 'from-primary-500 to-primary-600', delay: 1.2 },
                { value: '100%', label: 'Active Status', icon: CheckCircle, color: 'from-emerald-500 to-green-600', delay: 1.3 },
                { value: '$1K', label: 'Academic Award', icon: Star, color: 'from-yellow-500 to-orange-600', delay: 1.4 },
                { value: '93%', label: 'Academic Score', icon: TrendingUp, color: 'from-purple-500 to-pink-600', delay: 1.5 }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  className="text-center group/stat"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  <motion.div
                    className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: stat.delay + 0.2, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>

                  <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--primary-rgb), 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-bold text-lg shadow-2xl shadow-primary-500/25 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download All Certificates</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}