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
    title: 'Multi-Cloud Infrastructure with Terraform',
    description: 'Infrastructure as Code project deploying resources across AWS, Azure, and GCP using Terraform.',
    image: '/projects/terraform-multicloud.jpg',
    category: 'DevOps',
    technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'Docker'],
    github: 'https://github.com/himanshu-gandhi/terraform-multicloud',
    live: null,
    features: [
      'Multi-cloud resource management',
      'Infrastructure as Code',
      'Automated provisioning',
      'State management'
    ],
    icon: Zap,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Kubernetes Cluster Management',
    description: 'Deployed and managed containerized applications using Kubernetes with monitoring and logging.',
    image: '/projects/kubernetes-cluster.jpg',
    category: 'DevOps',
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana'],
    github: 'https://github.com/himanshu-gandhi/k8s-cluster',
    live: null,
    features: [
      'Container orchestration',
      'Auto-scaling capabilities',
      'Monitoring and alerting',
      'Load balancing'
    ],
    icon: Database,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Cloud Security Implementation',
    description: 'Implemented comprehensive security measures across cloud platforms including IAM, RBAC, and monitoring.',
    image: '/projects/cloud-security.jpg',
    category: 'Security',
    technologies: ['IAM', 'RBAC', 'CloudWatch', 'Azure Monitor', 'Security Groups'],
    github: 'https://github.com/himanshu-gandhi/cloud-security',
    live: null,
    features: [
      'Identity and Access Management',
      'Role-based access control',
      'Security monitoring',
      'Compliance frameworks'
    ],
    icon: Shield,
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 6,
    title: 'CI/CD Pipeline Automation',
    description: 'Built comprehensive CI/CD pipelines using Jenkins and GitHub Actions for automated testing and deployment.',
    image: '/projects/cicd-pipeline.jpg',
    category: 'DevOps',
    technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Python', 'Bash'],
    github: 'https://github.com/himanshu-gandhi/cicd-pipeline',
    live: null,
    features: [
      'Automated testing',
      'Continuous deployment',
      'Pipeline orchestration',
      'Quality gates'
    ],
    icon: Zap,
    color: 'from-indigo-500 to-purple-500'
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
    <section id="projects" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category.name
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-card text-foreground/70 hover:text-primary-500 border border-border hover:border-primary-500'
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
                className="project-card group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-t-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="bg-black/50 rounded-full p-3">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.category === 'Cloud' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : project.category === 'DevOps'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                        : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/60 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary/50 rounded-full text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-secondary/50 rounded-full text-foreground/70">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 text-foreground/70 hover:text-primary-500 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-1 text-foreground/70 hover:text-primary-500 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${selectedProject.color}`}>
                        <selectedProject.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedProject.category === 'Cloud' 
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                          : selectedProject.category === 'DevOps'
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                          : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {selectedProject.category}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                    >
                      ✕
                    </button>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                  
                  {/* Project Image in Modal */}
                  <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <p className="text-foreground/70 mb-6">{selectedProject.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full" />
                            <span className="text-foreground/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 pt-4">
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors duration-200"
                      >
                        <Github className="h-4 w-4" />
                        <span>View Code</span>
                      </motion.a>
                      
                      {selectedProject.live && (
                        <motion.a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg font-semibold transition-all duration-200"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
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