'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ExternalLink,
  Github,
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Globe,
  Code,
  Eye,
  Search
} from 'lucide-react';

const projects = [
  {
    id: 9,
    title: 'Securing and Monitoring Resources with AWS',
    description: 'A comprehensive cloud security project documenting a defense-in-depth implementation for a financial organization. Covers S3 hardening, VPC network defense with AWS Network Firewall, data-at-rest encryption with KMS, and automated compliance monitoring.',
    image: '/images/Securing and Monitoring/Completion Architecture.png',
    category: 'Security',
    technologies: ['AWS', 'KMS', 'VPC', 'Network Firewall', 'S3', 'CloudTrail', 'CloudWatch', 'AWS Config', 'Secrets Manager', 'Athena'],
    github: 'https://github.com/himanshu3024/Securing-and-Monitoring-Resources-with-AWS',
    live: 'https://github.com/himanshu3024/Securing-and-Monitoring-Resources-with-AWS',
    features: [
      'Multi-layer S3 Security (Bucket Policies, Logging, Inventory)',
      'Harden VPC with NACLs, SGs, and Network Firewall',
      'Customer Managed Keys (CMK) for encryption at rest',
      'Automated remediation of non-compliant resources',
      'SSH attack detection and alerting via CloudWatch',
      'Log analysis and auditing with Athena & CloudTrail'
    ],
    icon: Shield,
    color: 'from-red-600 to-rose-600'
  },
  {
    id: 8,
    title: 'AWS Cloud Architecting Capstone Project',
    description: 'A professional-grade cloud architecture project documented from start to finish. Re-architected a legacy monolithic application into a highly available, scalable, and secure distributed system using AWS best practices.',
    image: '/images/AWS Capstone Project/Initial Architecture.png',
    category: 'Cloud',
    technologies: ['AWS', 'VPC', 'EC2', 'RDS', 'ALB', 'ASG', 'Secrets Manager', 'PHP', 'MySQL', 'Linux'],
    github: 'https://github.com/himanshu3024/AWS-Cloud-Architecting-Capstone-Project',
    live: 'https://github.com/himanshu3024/AWS-Cloud-Architecting-Capstone-Project',
    features: [
      'Multi-tier VPC Network (Public & Private)',
      'High Availability across Availability Zones',
      'Auto Scaling for dynamic demand',
      'Database decoupling with Amazon RDS',
      'Secure credential management (Secrets Manager)',
      'Automated server blueprints (Launch Templates)'
    ],
    icon: Cloud,
    color: 'from-orange-600 to-amber-600'
  },
  {
    id: 7,
    title: 'Café Cloud: The Evolving Architecture',
    description: 'A comprehensive cloud engineering project demonstrating the end-to-end migration and evolution of a business application on AWS. From a static S3 site to a highly available, serverless architecture using EC2, RDS, VPC, ASG, and Lambda.',
    image: '/images/20-lab-mod-14-challenge-final-architecture.png',
    category: 'Cloud',
    technologies: ['AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation', 'Python', 'PHP', 'MariaDB', 'VPC', 'ELB', 'ASG', 'SNS', 'EventBridge'],
    github: 'https://github.com/himanshu3024/Cloud-Caf-Architecture-Project/',
    live: 'https://github.com/himanshu3024/Cloud-Caf-Architecture-Project/',
    features: [
      'Multi-phase migration (S3 to Lambda)',
      'High Availability with ALB & ASG',
      'Database decoupling with Amazon RDS',
      'Network hardening & VPC isolation',
      'Infrastructure as Code (CloudFormation)',
      'Serverless reporting with Lambda & SNS'
    ],
    icon: Cloud,
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 1,
    title: 'Azure Terraform VM',
    description: 'A DevOps project that provisions a complete Azure cloud infrastructure using Terraform and configures an Ubuntu 20.04 LTS virtual machine with an NGINX web server using Ansible. Features automated CI/CD with GitHub Actions, secure SSH key authentication, network security groups, and cost optimization strategies.',
    image: "/images/terraform-vm.jpg",
    category: 'DevOps',
    technologies: ['Terraform', 'Ansible', 'Azure', 'NGINX', 'Ubuntu 20.04 LTS', 'GitHub Actions'],
    github: 'https://github.com/himanshu3024/azure-terraform-vm',
    live: null,
    features: [
      'Infrastructure as Code (IaC)',
      'CI/CD automation',
      'Cloud infrastructure management',
      'Network security',
      'Automated deployments'
    ],
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Cloud-Native Multi-Service App',
    description: 'A 3-tier cloud-native application featuring a React frontend, Python Flask backend, and PostgreSQL database, all containerized with Docker and orchestrated with Kubernetes. Deployed to Azure Kubernetes Service (AKS) with automated CI/CD via GitHub Actions.',
    image: '/images/cloud-native.jpg',
    category: 'DevOps',
    technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'Docker', 'Kubernetes', 'Azure Kubernetes Service', 'GitHub Actions'],
    github: 'https://github.com/himanshu3024/cloud-native-multi-service-app',
    live: null,
    features: [
      'Cloud-native development',
      'Containerization',
      'Kubernetes orchestration',
      'CI/CD pipelines',
      'Microservices architecture'
    ],
    icon: Database,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Modern Portfolio & Personal Brand Platform',
    description: 'This portfolio is a cloud-friendly, performance-optimized Next.js app with theme-aware UI, animated interactions, and modular sections that showcase projects, skills, and experience with recruiter-focused structure.',
    image: '/images/portfolio.jpg',
    category: 'DevOps',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'SEO/JSON-LD'],
    github: 'https://github.com/himanshu3024/Cloud_Portfolio',
    live: null,
    features: [
      'Dark/Light theme with adaptive tokens',
      'Interactive skills & deep-dive project modals',
      'Accessible animations with aria-live typing hero',
      'Performance tweaks: lazy images, preloads, static export'
    ],
    icon: Zap,
    color: 'from-orange-500 to-red-500'
  }
];

const categories = [
  { name: 'All', icon: Globe },
  { name: 'Cloud', icon: Cloud },
  { name: 'DevOps', icon: Zap },
  { name: 'Security', icon: Shield },
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('All');

  // Get unique technologies
  const technologies = ['All', ...Array.from(new Set(
    projects.flatMap(project => project.technologies)
  )).sort()];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTechnology = selectedTechnology === 'All' || project.technologies.includes(selectedTechnology);
    const matchesSearch = searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesTechnology && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A collection of cloud and DevOps projects showcasing infrastructure automation,
            serverless applications, and multi-cloud deployments.
          </p>
        </motion.div>

        {/* Search and Technology Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8 px-4"
        >
          {/* Search Bar */}
          <div className="flex-1">
            <label htmlFor="project-search" className="sr-only">Search projects</label>
            <div className="relative">
              <input
                type="text"
                id="project-search"
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-card rounded-lg border border-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                aria-label="Search projects"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-foreground/60" aria-hidden="true" />
            </div>
          </div>

          {/* Technology Filter */}
          <div className="min-w-[200px]">
            <label htmlFor="technology-filter" className="sr-only">Filter by technology</label>
            <select
              id="technology-filter"
              value={selectedTechnology}
              onChange={(e) => setSelectedTechnology(e.target.value)}
              className="w-full px-4 py-3 bg-card rounded-lg border border-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
              aria-label="Filter projects by technology"
            >
              {technologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-[2rem] font-medium transition-all duration-300 ${selectedCategory === category.name
                ? 'bg-white/20 dark:bg-white/10 text-foreground shadow-[0_0_15px_rgba(255,255,255,0.3)] backdrop-blur-xl border border-white/20'
                : 'bg-white/5 dark:bg-white/5 text-foreground/70 hover:text-foreground border border-white/10 hover:bg-white/10 backdrop-blur-md'
                }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-foreground/60">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-[2rem] overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-4">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-3 py-1.5 rounded-full font-bold backdrop-blur-md shadow-sm border ${project.category === 'Cloud'
                      ? 'bg-blue-500/30 dark:bg-blue-500/40 text-blue-700 dark:text-blue-300 border-blue-500/50'
                      : project.category === 'DevOps'
                        ? 'bg-purple-500/30 dark:bg-purple-500/40 text-purple-700 dark:text-purple-300 border-purple-500/50'
                        : 'bg-red-500/30 dark:bg-red-500/40 text-red-700 dark:text-red-300 border-red-500/50'
                      }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Problem → Approach → Outcome → Stack */}
                  <div className="text-sm text-foreground/70 space-y-1 mb-4">
                    <div><span className="font-semibold text-foreground/90">Problem:</span> {project.description.substring(0, 60)}...</div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-3 py-1 bg-white/40 dark:bg-white/10 border border-white/20 dark:border-white/10 rounded-full text-foreground/80 dark:text-foreground/90 font-medium backdrop-blur-sm shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 text-foreground/70 hover:text-white transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal with deep dive */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80] flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white/80 dark:bg-black/60 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-r ${selectedProject.color}`}>
                        <selectedProject.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className={`text-xs px-3 py-1.5 rounded-full border shadow-sm backdrop-blur-md ${selectedProject.category === 'Cloud'
                        ? 'bg-blue-500/30 dark:bg-blue-500/40 text-blue-700 dark:text-blue-300 border-blue-500/30'
                        : selectedProject.category === 'DevOps'
                          ? 'bg-purple-500/30 dark:bg-purple-500/40 text-purple-700 dark:text-purple-300 border-purple-500/30'
                          : 'bg-red-500/30 dark:bg-red-500/40 text-red-700 dark:text-red-300 border-red-500/30'
                        }`}>
                        {selectedProject.category}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground/60 hover:text-foreground transition-colors duration-200"
                    >
                      ✕
                    </button>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-foreground">{selectedProject.title}</h3>

                  {/* Project Image in Modal */}
                  <div className="relative h-64 mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">{selectedProject.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">
                      <h5 className="font-semibold mb-2 text-primary-500 dark:text-primary-400">Architecture</h5>
                      <p className="text-sm text-foreground/70">Layered: client → API → infra. Separation of concerns with IaC for repeatability.</p>
                    </div>
                    <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">
                      <h5 className="font-semibold mb-2 text-primary-500 dark:text-primary-400">Cost Notes</h5>
                      <p className="text-sm text-foreground/70">Right-size instances; use spot/preemptible; storage lifecycle rules; env-based scaling.</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Key Features</h4>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm text-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-3 px-8 py-4 bg-primary-500/90 hover:bg-primary-500 text-white rounded-full font-bold shadow-[0_8px_40px_0_rgba(14,165,233,0.3)] backdrop-blur-md border border-white/20 transition-all duration-300"
                      >
                        <Github className="h-5 w-5" />
                        <span>View Source</span>
                      </motion.a>

                      {selectedProject.live && (
                        <motion.a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-3 px-8 py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 text-foreground rounded-full font-bold transition-all duration-300 shadow-sm"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span>Launch Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 