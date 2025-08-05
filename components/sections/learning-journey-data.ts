import { LucideIcon, Cloud, Code, Server, Database, Lock, Zap, BarChart, GitBranch, Settings, Network, Shield, Terminal, Box, RefreshCw, Workflow, Coffee, Cpu, Key, Monitor } from 'lucide-react';

export interface Day {
  day: number;
  title: string;
  icon: LucideIcon;
  description?: string;
  learnings?: string[];
  implementation?: string;
  resources?: { title: string; url: string; }[];
}

export interface Week {
  title: string;
  days: Day[];
}

export interface Track {
  id: string;
  title: string;
  icon: LucideIcon;
  subtitle: string;
  color: string;
  weeks: Week[];
}

export const tracks: Track[] = [
  {
    id: 'cloud',
    title: 'Cloud Journey',
    icon: Cloud,
    subtitle: 'From Zero to Cloud Hero',
    color: 'from-blue-500 to-cyan-500',
    weeks: [
      {
        title: 'Week 1: Cloud Fundamentals',
        days: [
          { 
            day: 1, 
            title: 'AWS EC2 Mastery', 
            icon: Server,
            description: 'Deep dive into launching and configuring AWS EC2 instances, understanding instance types, and implementing security best practices.',
            learnings: [
              'EC2 instance types and use cases',
              'Security group configuration',
              'SSH key management',
              'Instance metadata and user data',
              'Amazon Machine Images (AMIs)'
            ],
            implementation: 'aws ec2 run-instances --image-id ami-0c55b159cbfafe1f0 --instance-type t2.micro --key-name MyKeyPair --security-group-ids sg-903004f8',
            resources: [
              { title: 'AWS EC2 Documentation', url: 'https://docs.aws.amazon.com/ec2/' },
              { title: 'EC2 Best Practices', url: 'https://aws.amazon.com/ec2/best-practices/' }
            ]
          },
          { 
            day: 2, 
            title: 'Azure VM Deployment', 
            icon: Cloud,
            description: 'Creating and managing Azure Virtual Machines using both Azure Portal and Azure CLI.',
            learnings: [
              'Azure VM sizes and series',
              'Azure Resource Manager templates',
              'VM networking and security',
              'Azure CLI fundamentals',
              'Cost optimization strategies'
            ],
            implementation: 'az vm create --resource-group myResourceGroup --name myVM --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys'
          },
          { 
            day: 3, 
            title: 'GCP Compute Engine', 
            icon: Server,
            description: 'Exploring Google Cloud Platform Compute Engine and its unique features.',
            learnings: [
              'GCP project structure',
              'Compute Engine instance types',
              'GCP networking basics',
              'gcloud CLI essentials',
              'Preemptible instances'
            ]
          },
          { 
            day: 4, 
            title: 'Cloud Storage Solutions', 
            icon: Database,
            description: 'Implementing storage solutions across AWS (S3), Azure (Blob Storage), and GCP (Cloud Storage).',
            learnings: [
              'Object storage fundamentals',
              'Storage tiers and lifecycle policies',
              'Access control and security',
              'CDN integration',
              'Cross-region replication'
            ]
          },
          { 
            day: 5, 
            title: 'Virtual Networks', 
            icon: Network,
            description: 'Designing and implementing virtual networks in major cloud providers.',
            learnings: [
              'VPC/VNET architecture',
              'Subnet design patterns',
              'Network security groups',
              'VPN and direct connections',
              'Load balancer setup'
            ]
          },
          { 
            day: 6, 
            title: 'Identity & Access Management', 
            icon: Shield,
            description: 'Implementing secure access control using cloud IAM services.',
            learnings: [
              'IAM best practices',
              'Role-based access control',
              'Service principals',
              'Managed identities',
              'Security policies'
            ]
          },
          { 
            day: 7, 
            title: 'Cloud Cost Management', 
            icon: BarChart,
            description: 'Understanding cloud pricing models and implementing cost controls.',
            learnings: [
              'Resource tagging strategies',
              'Budget alerts and quotas',
              'Reserved instances',
              'Spot instance usage',
              'Cost analysis tools'
            ]
          }
        ]
      },
      {
        title: 'Week 2: Application Services',
        days: [
          {
            day: 8,
            title: 'Container Services Deep Dive',
            icon: Box,
            description: 'Exploring container orchestration services across cloud providers.',
            learnings: [
              'ECS vs AKS vs GKE',
              'Container networking',
              'Service discovery',
              'Auto-scaling strategies',
              'Monitoring solutions'
            ]
          },
          {
            day: 9,
            title: 'Serverless Architecture',
            icon: Zap,
            description: 'Building serverless applications using cloud functions.',
            learnings: [
              'AWS Lambda essentials',
              'Azure Functions',
              'Cloud Functions',
              'Event-driven design',
              'Cold start optimization'
            ]
          },
          {
            day: 10,
            title: 'Database Services',
            icon: Database,
            description: 'Implementing managed database services.',
            learnings: [
              'RDS configuration',
              'Cosmos DB setup',
              'Cloud SQL management',
              'Backup strategies',
              'High availability patterns'
            ]
          },
          {
            day: 11,
            title: 'Message Queues',
            icon: RefreshCw,
            description: 'Implementing asynchronous communication patterns.',
            learnings: [
              'SQS and SNS',
              'Service Bus',
              'Pub/Sub',
              'Message patterns',
              'Dead letter queues'
            ]
          },
          {
            day: 12,
            title: 'API Management',
            icon: Workflow,
            description: 'Setting up API gateways and management services.',
            learnings: [
              'API Gateway setup',
              'Rate limiting',
              'API versioning',
              'Authentication',
              'API documentation'
            ]
          },
          {
            day: 13,
            title: 'Caching Strategies',
            icon: Coffee,
            description: 'Implementing caching solutions for performance.',
            learnings: [
              'Redis Cache',
              'CDN configuration',
              'Cache invalidation',
              'Distributed caching',
              'Performance metrics'
            ]
          },
          {
            day: 14,
            title: 'Monitoring & Logging',
            icon: Monitor,
            description: 'Setting up comprehensive monitoring solutions.',
            learnings: [
              'CloudWatch setup',
              'Application Insights',
              'Stack Driver',
              'Log analytics',
              'Alerting rules'
            ]
          }
        ]
      }
      // Additional weeks will be added here
    ]
  },
  {
    id: 'devops',
    title: 'DevOps Journey',
    icon: GitBranch,
    subtitle: 'Automation & Integration Master',
    color: 'from-purple-500 to-pink-500',
    weeks: [
      {
        title: 'Week 1: CI/CD Foundation',
        days: [
          {
            day: 1,
            title: 'GitHub Actions Setup',
            icon: GitBranch,
            description: 'Setting up and configuring GitHub Actions for CI/CD.',
            learnings: [
              'Workflow file structure',
              'Action marketplace usage',
              'Environment secrets',
              'Build triggers',
              'Matrix builds'
            ],
            implementation: `name: CI
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm test`
          },
          {
            day: 2,
            title: 'Pipeline Creation',
            icon: Workflow,
            description: 'Building comprehensive CI/CD pipelines.',
            learnings: [
              'Pipeline stages',
              'Environment configuration',
              'Artifact management',
              'Dependency caching',
              'Test automation'
            ]
          },
          {
            day: 3,
            title: 'Code Quality Tools',
            icon: Code,
            description: 'Implementing code quality checks in pipelines.',
            learnings: [
              'Linting setup',
              'Code formatting',
              'Static analysis',
              'Security scanning',
              'Coverage reporting'
            ]
          },
          {
            day: 4,
            title: 'Container Integration',
            icon: Box,
            description: 'Integrating containers in CI/CD pipelines.',
            learnings: [
              'Dockerfile optimization',
              'Multi-stage builds',
              'Registry integration',
              'Container scanning',
              'Layer caching'
            ]
          },
          {
            day: 5,
            title: 'Infrastructure as Code',
            icon: Terminal,
            description: 'Implementing IaC in deployment pipelines.',
            learnings: [
              'Terraform basics',
              'ARM templates',
              'Pulumi introduction',
              'State management',
              'Resource provisioning'
            ]
          },
          {
            day: 6,
            title: 'Secrets Management',
            icon: Key,
            description: 'Implementing secure secrets handling.',
            learnings: [
              'Key vault integration',
              'Environment variables',
              'Secret rotation',
              'Access policies',
              'Encryption practices'
            ]
          },
          {
            day: 7,
            title: 'Deployment Strategies',
            icon: Settings,
            description: 'Implementing various deployment patterns.',
            learnings: [
              'Blue-green deployment',
              'Canary releases',
              'Feature flags',
              'Rollback procedures',
              'Traffic management'
            ]
          }
        ]
      }
      // Additional weeks will be added here
    ]
  }
];
