'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Cloud, 
  Server, 
  Code, 
  Database, 
  Shield, 
  Settings,
  Zap,
  Globe,
  Lock,
  Cpu
} from 'lucide-react';

interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
  icon: string;
  description: string;
  experience: number; // Percentage of progress to next level
  projects?: string[]; // Related project links
  githubRepos?: string[]; // Related GitHub repositories
  dependencies?: string[]; // Skills that this one depends on
  unlocks?: string[]; // Skills that this unlocks
  yearStarted: number;
}

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { 
        name: 'AWS', 
        level: 'Advanced', 
        icon: '☁️', 
        description: 'EC2, S3, Lambda, IAM, CloudWatch, EKS',
        experience: 95,
        projects: ['cloud-native-app', 'serverless-api'],
        githubRepos: ['aws-terraform-templates'],
        dependencies: ['Linux', 'Networking'],
        unlocks: ['AWS Solutions Architect', 'Cloud Architecture'],
        yearStarted: 2023
      },
      { 
        name: 'Azure', 
        level: 'Advanced', 
        icon: '🔷', 
        description: 'Azure Functions, Static Web Apps, AKS, Azure OpenAI',
        experience: 90,
        projects: ['ai-powered-webapp'],
        githubRepos: ['azure-infrastructure'],
        dependencies: ['Networking', 'Docker'],
        unlocks: ['Azure Solutions Architect', 'AI Integration'],
        yearStarted: 2023
      },
      { 
        name: 'GCP', 
        level: 'Intermediate', 
        icon: '🔵', 
        description: 'GKE, Cloud Run, Cloud Functions, BigQuery',
        experience: 75,
        projects: ['data-analytics-pipeline'],
        dependencies: ['Kubernetes', 'SQL'],
        yearStarted: 2024
      },
    ]
  },
  {
    title: 'DevOps & CI/CD',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Docker', level: 'Advanced', icon: '🐳', description: 'Containerization, Docker Compose' },
      { name: 'Kubernetes', level: 'Advanced', icon: '☸️', description: 'Orchestration, Helm Charts' },
      { name: 'Jenkins', level: 'Intermediate', icon: '🤖', description: 'Pipeline Automation, Groovy' },
      { name: 'GitHub Actions', level: 'Advanced', icon: '⚡', description: 'CI/CD Workflows, YAML' },
      { name: 'Terraform', level: 'Intermediate', icon: '🏗️', description: 'Infrastructure as Code' },
      { name: 'Ansible', level: 'Intermediate', icon: '🔧', description: 'Configuration Management' },
    ]
  },
  {
    title: 'Programming & Scripting',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Python', level: 'Advanced', icon: '🐍', description: 'Automation, APIs, Data Processing' },
      { name: 'Bash', level: 'Advanced', icon: '💻', description: 'Shell Scripting, System Administration' },
      { name: 'YAML', level: 'Advanced', icon: '📄', description: 'Configuration Files, Kubernetes' },
      { name: 'JSON', level: 'Advanced', icon: '📋', description: 'API Integration, Data Exchange' },
    ]
  },
  {
    title: 'Infrastructure & Networking',
    icon: Server,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'VPC', level: 'Advanced', icon: '🌐', description: 'Network Isolation, Security Groups' },
      { name: 'Load Balancers', level: 'Intermediate', icon: '⚖️', description: 'Traffic Distribution, HA' },
      { name: 'DNS', level: 'Intermediate', icon: '🔗', description: 'Domain Management, CDN' },
      { name: 'VPN', level: 'Intermediate', icon: '🔒', description: 'Secure Connectivity' },
      { name: 'TCP/IP', level: 'Intermediate', icon: '📡', description: 'Network Protocols' },
    ]
  },
  {
    title: 'Security & Monitoring',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    skills: [
      { name: 'IAM', level: 'Advanced', icon: '👤', description: 'Identity & Access Management' },
      { name: 'RBAC', level: 'Intermediate', icon: '🔐', description: 'Role-Based Access Control' },
      { name: 'CloudWatch', level: 'Intermediate', icon: '📊', description: 'Monitoring & Logging' },
      { name: 'Azure Monitor', level: 'Intermediate', icon: '📈', description: 'Performance Monitoring' },
    ]
  },
  {
    title: 'Operating Systems',
    icon: Cpu,
    color: 'from-gray-500 to-slate-500',
    skills: [
      { name: 'Linux (Ubuntu)', level: 'Advanced', icon: '🐧', description: 'System Administration' },
      { name: 'Linux (CentOS)', level: 'Intermediate', icon: '🔴', description: 'Server Management' },
      { name: 'Windows Server', level: 'Intermediate', icon: '🪟', description: 'Active Directory' },
    ]
  }
];

const certifications = [
  {
    name: 'Google Cloud Cybersecurity Professional',
    issuer: 'Google',
    date: 'Sep 2024',
    icon: '🔒',
    color: 'bg-blue-500'
  },
  {
    name: 'Google Cloud Data Analytics Professional',
    issuer: 'Google',
    date: 'Aug 2024',
    icon: '📊',
    color: 'bg-green-500'
  },
  {
    name: 'Google Project Management Certificate',
    issuer: 'Google',
    date: 'Aug 2024',
    icon: '📋',
    color: 'bg-purple-500'
  },
  {
    name: 'Google Data Analytics Professional',
    issuer: 'Google',
    date: 'July 2024',
    icon: '📈',
    color: 'bg-orange-500'
  }
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Calculate related skills based on dependencies and unlocks
  const getRelatedSkills = (skill: Skill) => {
    const allSkills = skillCategories.flatMap(cat => cat.skills);
    const related = new Set([
      ...(skill.dependencies || []),
      ...(skill.unlocks || [])
    ]);
    return allSkills.filter(s => related.has(s.name));
  };

  // Calculate years of experience
  const getExperienceYears = (yearStarted: number) => {
    return 2025 - yearStarted;
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Comprehensive knowledge across cloud platforms, DevOps practices, and infrastructure management. 
            Continuously learning and adapting to emerging technologies in the cloud ecosystem.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="relative cursor-pointer"
                    onClick={() => {
                      setSelectedSkill(skill);
                      setIsFlipped(false);
                    }}
                  >
                    {/* Front of Card */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-200 group-hover:scale-105">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <div className="font-semibold text-foreground/90">{skill.name}</div>
                          <div className="text-sm text-foreground/60">{skill.description}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          skill.level === 'Advanced' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : skill.level === 'Intermediate'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {skill.level}
                        </span>
                        {/* Experience Bar */}
                        <div className="w-24 h-1 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.experience}%` }}
                            transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) }}
                            className={`h-full ${
                              skill.experience > 80 ? 'bg-green-500' :
                              skill.experience > 60 ? 'bg-blue-500' :
                              'bg-yellow-500'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{selectedSkill.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
                        <p className="text-foreground/60">{selectedSkill.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="text-foreground/60 hover:text-foreground"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Skill Progress */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Experience Level</h4>
                    <div className="relative h-4 bg-secondary/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedSkill.experience}%` }}
                        transition={{ duration: 1 }}
                        className={`absolute h-full ${
                          selectedSkill.experience > 80 ? 'bg-green-500' :
                          selectedSkill.experience > 60 ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                      />
                    </div>
                    <div className="mt-2 flex justify-between text-sm text-foreground/60">
                      <span>{getExperienceYears(selectedSkill.yearStarted)} years</span>
                      <span>{selectedSkill.experience}% mastery</span>
                    </div>
                  </div>

                  {/* Related Skills */}
                  {getRelatedSkills(selectedSkill).length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Related Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {getRelatedSkills(selectedSkill).map((skill) => (
                          <span
                            key={skill.name}
                            className="px-3 py-1 bg-secondary/50 rounded-full text-sm"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects */}
                  {selectedSkill.projects && selectedSkill.projects.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Related Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSkill.projects.map((project) => (
                          <span
                            key={project}
                            className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* GitHub Integration */}
                  {selectedSkill.githubRepos && selectedSkill.githubRepos.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">GitHub Repositories</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSkill.githubRepos.map((repo) => (
                          <motion.a
                            key={repo}
                            href={`https://github.com/himanshu3024/${repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-3 py-1 bg-card border border-border rounded-full text-sm hover:border-primary-500 transition-colors duration-200"
                          >
                            <Github className="h-4 w-4" />
                            <span>{repo}</span>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-8">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${cert.color}`}>
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <div className="text-sm font-semibold text-primary-500">{cert.issuer}</div>
                </div>
                <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                <p className="text-sm text-foreground/60">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Skills <span className="gradient-text">Matrix</span>
          </h3>
          
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">4</div>
                <div className="text-sm text-foreground/60">Google Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500 mb-2">3</div>
                <div className="text-sm text-foreground/60">Cloud Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">6</div>
                <div className="text-sm text-foreground/60">DevOps Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500 mb-2">4</div>
                <div className="text-sm text-foreground/60">Programming Languages</div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Download Skills Matrix
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 