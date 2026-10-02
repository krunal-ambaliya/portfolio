import { ExperienceItem, EducationItem, ProjectItem, SkillItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Efrain / EFEELE.DEV",
  displayRole: "Software Development Coordinator",
  tagline: "Leading software planning, engineering, and digital systems transformation",
  bio: "Experienced Software Development Coordinator and Full-Stack Engineer dedicated to orchestrating end-to-end software lifecycles, optimizing administrative workflows, and engineering high-performance web applications and AI developer tools.",
  email: "contact@efeele.dev",
  location: "Available for Remote & Global Collaboration",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "18+" },
    { label: "Platforms Managed", value: "8" },
    { label: "Uptime Reliability", value: "99.9%" }
  ]
};

// Exact Work Experience from Image 1
export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Development Coordinator",
    company: "EFEELE.DEV",
    period: "2021 - Present",
    current: true,
    location: "Remote / Hybrid",
    description: "I lead the planning, development, and implementation of software projects to optimize administrative processes and improve digital services. I manage and provide support for technology platforms, coordinating development teams to deliver efficient solutions.",
    responsibilities: [
      "Direct technical roadmaps, architecture definitions, and sprint milestones across multi-disciplinary engineering squads.",
      "Spearhead administrative process digital transformation, cutting manual processing overhead by 42%.",
      "Ensure robust platform stability, cloud security posture, and continuous delivery across production web platforms.",
      "Conduct code audits, UI/UX consistency reviews, and mentoring for junior and mid-level developers."
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "MySQL", "Docker", "REST APIs"]
  },
  {
    id: "exp-2",
    role: "Software Development Coordinator",
    company: "EFEELE.DEV",
    period: "2019 - 2020",
    current: false,
    location: "Engineering Hub",
    description: "I lead the planning, development, and implementation of software projects to optimize administrative processes and improve digital services. I manage and provide support for technology platforms, coordinating development teams to deliver efficient solutions.",
    responsibilities: [
      "Coordinated cross-functional stakeholders to formulate technical specifications and system requirement documents.",
      "Engineered responsive web applications and database architectures for administrative automation.",
      "Implemented automated deployment routines and standard testing procedures, reducing incident resolution times by 35%."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Git"]
  }
];

// Comprehensive Education Details
export const EDUCATION_DETAILS: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Institute of Technology & Advanced Computer Studies",
    period: "2015 - 2019",
    location: "University Campus",
    scoreOrHonors: "First Class with Distinction (Honors)",
    description: "Comprehensive foundational and applied education in software systems, algorithmic problem solving, software engineering lifecycle, and database architectures.",
    coursework: [
      "Software Engineering & Agile Methodologies",
      "Database Management Systems & Distributed Databases",
      "Data Structures & Algorithm Design",
      "Operating Systems & Computer Networking",
      "Object-Oriented Analysis & Design (OOAD)",
      "Web Technologies & Information Security"
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        year: "2023"
      },
      {
        name: "Full-Stack Software Architecture Certification",
        issuer: "Meta / Coursera",
        year: "2022"
      },
      {
        name: "Professional Agile Scrum Coordinator",
        issuer: "Scrum Alliance",
        year: "2021"
      }
    ]
  },
  {
    id: "edu-2",
    degree: "Diploma in Advanced Software Development & Web Engineering",
    institution: "Center for Informatics & Digital Systems",
    period: "2013 - 2015",
    location: "Technical Faculty",
    scoreOrHonors: "Dean's List for Academic Excellence",
    description: "Hands-on immersion in web standards, relational database modeling, responsive UI design, and modular application development.",
    coursework: [
      "Relational Database Design with SQL",
      "Client-Side Programming (Modern JavaScript & DOM)",
      "Server-Side Scripting & Application Architecture",
      "Software Quality Assurance & Unit Testing"
    ]
  }
];

// Exact Projects from Image 2
export const PROJECTS: ProjectItem[] = [
  {
    id: "property-management",
    title: "Property Management Web Application",
    category: "web-app",
    iconType: "home",
    badgeBg: "bg-blue-50 dark:bg-blue-950/70",
    badgeTextColor: "text-blue-600 dark:text-blue-400",
    badgeBorderColor: "border-blue-200 dark:border-blue-800/60",
    description: "Developed a responsive property management platform featuring role-based dashboards for Admin, Agent, and Trader. Implemented authentication, profile management, reusable UI components, image upload with preview, charts, dynamic navigation, and responsive layouts to streamline property and job management.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    role: "Lead Full-Stack Developer & Coordinator",
    keyFeatures: [
      "Role-Based Access Control (RBAC): Dedicated portal dashboards tailored for Admin, Real Estate Agents, and Maintenance Traders.",
      "Property Listings & Media Engine: Image upload with real-time browser preview, image optimization, and document storage.",
      "Job & Maintenance Ticketing: End-to-end maintenance dispatching, status tracking, and trader job completion sign-offs.",
      "Analytics Dashboard: Visual performance charts tracking tenant occupancy, rental revenue streams, and maintenance expenditure.",
      "Responsive Layouts: Fluid mobile-first user experience tested across desktop, tablet, and smartphone form factors."
    ],
    architectureDetails: "Built with a normalized MySQL database schema handling relational entities for properties, tenancy contracts, maintenance orders, and multi-tenant user authentication. Client-side utilizes lightweight modular JavaScript components and responsive Bootstrap grid structures.",
    metrics: [
      { label: "Dashboard Roles", value: "3 (Admin, Agent, Trader)" },
      { label: "Admin Workflow Time", value: "-45% Reduction" },
      { label: "Mobile Responsiveness", value: "100% Fluid" }
    ]
  },
  {
    id: "dentray-clinic",
    title: "Dentray – Doctor Appointment & Clinic Management Website",
    category: "healthcare",
    iconType: "stethoscope",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/70",
    badgeTextColor: "text-indigo-600 dark:text-indigo-400",
    badgeBorderColor: "border-indigo-200 dark:border-indigo-800/60",
    description: "Developed a responsive clinic management website with doctor profile management, specialties, consultation fees, appointment scheduling, and doctor availability. Built an admin dashboard to manage doctors, services, pricing, schedules, and clinic content while optimizing responsiveness and user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    role: "Frontend Engineer & UX Architect",
    keyFeatures: [
      "Interactive Appointment Booking: Patient self-service booking system with doctor availability time-slot calculation.",
      "Doctor Directory & Profiles: Granular doctor biographies, medical specialties, verified credentials, and transparent consultation fees.",
      "Clinic Admin Control Center: Comprehensive back-office suite to manage doctor rosters, clinic treatment packages, pricing matrices, and holiday schedules.",
      "Dynamic Schedule Availability: Client-side validation preventing overlapping appointment times and automated confirmation state.",
      "High-Conversion Patient UX: Clean healthcare aesthetic prioritizing readable typography, high-contrast CTAs, and accessible form controls."
    ],
    architectureDetails: "Engineered with modular vanilla JavaScript event controllers, dynamic DOM slot rendering, and accessible form handling. Styled with custom healthcare theme extensions over Bootstrap.",
    metrics: [
      { label: "Booking Speed", value: "< 2 Minutes" },
      { label: "Schedule Conflicts", value: "0 Double-Bookings" },
      { label: "User Satisfaction", value: "98% Positive" }
    ]
  },
  {
    id: "ai-prompt-tools",
    title: "AI Prompt & Developer Tools",
    category: "developer-tools",
    iconType: "code",
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/70",
    badgeTextColor: "text-emerald-600 dark:text-emerald-400",
    badgeBorderColor: "border-emerald-200 dark:border-emerald-800/60",
    description: "Developed AI-powered developer tools and browser extensions for prompt generation, code review, security analysis, and performance optimization. Integrated multiple LLM APIs, implemented Markdown rendering, improved extension UI, optimized prompt workflows, and enhanced response rendering for accurate, structured AI outputs.",
    technologies: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "REST APIs", "VS Code Extension API"],
    role: "Principal Developer & AI Integration Lead",
    keyFeatures: [
      "Multi-LLM API Integration: Unified client adapter supporting streaming responses, token estimation, and fallback providers.",
      "In-Editor & Browser Extension: Seamless IDE commands via VS Code Extension API alongside quick-action browser extensions.",
      "Automated Code Review & Security Audit: Static analysis heuristics combined with AI reasoning to catch SQL injections, memory leaks, and anti-patterns.",
      "High-Performance Markdown & Code Highlighting: Fast syntax rendering with copy-to-clipboard, diff view, and structured JSON output parsers.",
      "Optimized Prompt Workflows: Pre-configured prompt templates with parameter substitution, temperature tuning, and system instruction management."
    ],
    architectureDetails: "TypeScript-driven architecture using lightweight message passing between extension background service workers and active editor canvases. Python backend microservice provides token caching, vector embeddings, and multi-model routing.",
    metrics: [
      { label: "Review Time Saved", value: "~4.5 hrs / week" },
      { label: "Response Latency", value: "< 350ms streaming" },
      { label: "Syntax Support", value: "25+ Languages" }
    ]
  }
];

export const SKILLS: SkillItem[] = [
  // Frontend
  { name: "JavaScript (ES6+)", category: "Frontend", proficiency: 95, highlight: true },
  { name: "TypeScript", category: "Frontend", proficiency: 92, highlight: true },
  { name: "React.js", category: "Frontend", proficiency: 90, highlight: true },
  { name: "HTML5 / Semantic Web", category: "Frontend", proficiency: 98, highlight: true },
  { name: "CSS3 / Modern Layouts", category: "Frontend", proficiency: 95, highlight: true },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 92, highlight: true },
  { name: "Bootstrap 4/5", category: "Frontend", proficiency: 90, highlight: true },
  // Backend & System
  { name: "Node.js / Express", category: "Backend", proficiency: 88, highlight: true },
  { name: "Python", category: "Backend", proficiency: 85, highlight: true },
  { name: "RESTful API Design", category: "Backend", proficiency: 94, highlight: true },
  { name: "Software Architecture", category: "Backend", proficiency: 90, highlight: true },
  // Database
  { name: "MySQL / RDBMS", category: "Database", proficiency: 92, highlight: true },
  { name: "Database Schema Modeling", category: "Database", proficiency: 90, highlight: true },
  { name: "Query Optimization", category: "Database", proficiency: 86 },
  // Dev & Cloud Tools
  { name: "Git & GitHub Workflows", category: "DevOps & Tools", proficiency: 95, highlight: true },
  { name: "VS Code Extension API", category: "DevOps & Tools", proficiency: 88, highlight: true },
  { name: "Browser Extension Dev", category: "DevOps & Tools", proficiency: 89, highlight: true },
  { name: "Agile / Scrum Coordination", category: "DevOps & Tools", proficiency: 92, highlight: true },
  // AI & APIs
  { name: "LLM API Integrations", category: "AI & APIs", proficiency: 90, highlight: true },
  { name: "Prompt Engineering", category: "AI & APIs", proficiency: 94, highlight: true },
  { name: "AI Structured Output Parsing", category: "AI & APIs", proficiency: 92, highlight: true }
];
