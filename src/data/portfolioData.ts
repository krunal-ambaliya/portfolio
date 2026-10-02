import {
  ExperienceItem,
  EducationItem,
  ProjectItem,
  SkillItem,
  TechnicalStrength,
  SpokenLanguage
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Krunal Ambaliya",
  titleBadge: "Web Developer | Python Developer | AI & Cyber Security Enthusiast",
  summary:
    "Motivated Web Developer with hands-on experience in building responsive, user-centric web applications and AI-powered developer tools. Proficient in front-end development, Python, REST API integration, and modern JavaScript frameworks. Passionate about creating scalable web solutions while continuously expanding knowledge in Artificial Intelligence and Cyber Security.",
  location: "Gujarat, India",
  phone: "+91 6356334116",
  phoneRaw: "+916356334116",
  email: "krunalambaliya123@gmail.com",
  githubUsername: "krunal-ambaliya",
  githubUrl: "https://github.com/krunal-ambaliya",
  discordUsername: "krues7",
  discordUrl: "https://discord.com/users/krues7",
  whatsappUrl: "https://wa.me/916356334116",
  focusAreas: [
    { label: "Full Stack Web Development", icon: "code" },
    { label: "Artificial Intelligence", icon: "brain" },
    { label: "Cyber Security", icon: "shield" },
    { label: "Prompt Engineering", icon: "terminal" }
  ],
  stats: [
    { label: "Projects Completed", value: "4+ Production" },
    { label: "Academic CGPA", value: "8.5 / 10" },
    { label: "Primary Languages", value: "Python & JS" },
    { label: "Current Focus", value: "AI & Full Stack" }
  ]
};

// Exact Experience from Resume
export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-intern",
    role: "Web Development Intern",
    company: "Client & Software Projects",
    period: "Internship Experience",
    current: true,
    location: "Gujarat, India",
    description:
      "Hands-on web development experience building modern, responsive dashboards, reusable UI components, and contributing to real-world client platforms.",
    bulletPoints: [
      "Developed responsive websites and dashboards using modern web technologies.",
      "Built reusable UI components and optimized user experience.",
      "Collaborated on real-world client projects involving web development and dashboard management."
    ],
    technologies: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "MySQL",
      "Git & GitHub"
    ]
  }
];

// Exact Education from Resume
export const EDUCATION_DETAILS: EducationItem[] = [
  {
    id: "edu-btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "Atmiya University, Rajkot",
    period: "2026 - Present",
    location: "Rajkot, Gujarat, India",
    scoreOrHonors: "Pursuing B.Tech Degree",
    description:
      "Advanced undergraduate curriculum in Information Technology focusing on modern software engineering, advanced computing architectures, AI fundamentals, and network security systems.",
    coursework: [
      "Advanced Software Engineering",
      "Distributed Computing & Cloud",
      "Data Structures & Algorithms",
      "Computer Networks & Security",
      "Machine Learning & AI Foundations"
    ]
  },
  {
    id: "edu-diploma",
    degree: "Diploma in Information Technology",
    field: "Information Technology",
    institution: "Government Polytechnic, Rajkot",
    period: "2022 - 2026",
    location: "Rajkot, Gujarat, India",
    scoreOrHonors: "CGPA: 8.5 / 10",
    description:
      "Rigorous technical foundation in web programming, relational database management, Linux environments, object-oriented programming, and responsive web design.",
    coursework: [
      "Web Development (HTML5, CSS3, JavaScript)",
      "Database Management Systems (MySQL, SQL)",
      "Python Programming",
      "Operating Systems & Linux Administration",
      "Software Testing & Quality Assurance"
    ]
  }
];

// Exact Projects from Resume & Live Deployments
export const PROJECTS: ProjectItem[] = [
  {
    id: "timect-ecommerce",
    title: "Timect — Modern E-Commerce Storefront & Admin Portal",
    category: "web-app",
    iconType: "shopping-bag",
    badgeBg: "bg-amber-50 dark:bg-amber-950/70",
    badgeTextColor: "text-amber-600 dark:text-amber-400",
    badgeBorderColor: "border-amber-200 dark:border-amber-800/60",
    image: "/src/assets/images/timect_storefront_1790950530653.jpg",
    description:
      "Production-ready luxury storefront and comprehensive back-office admin suite powered by Next.js 16 (App Router) and Neon PostgreSQL. Features full product variant catalogs, corporate gifting, Cloudinary media management, and JWT-secured admin controls with modern glassmorphism aesthetics.",
    technologies: ["Next.js 16", "React", "TypeScript", "PostgreSQL", "Tailwind CSS", "Cloudinary"],
    role: "Full-Stack Architect & Lead Developer",
    liveUrl: "https://timect-new.vercel.app/",
    githubUrl: "https://github.com/krunal-ambaliya",
    keyFeatures: [
      "Modern E-Commerce Storefront: High-converting luxury shopping experience with instant catalog browsing, product variants, and corporate gifting workflows.",
      "Comprehensive Back-Office Admin (/admin): Intuitive business management suite covering inventory, hero banners, content, media, and customer inboxes.",
      "Production-Grade Performance: Built with Next.js 16 (App Router) & serverless Neon PostgreSQL for sub-second page loads and fluid navigation.",
      "Secure Architecture: Protected admin routes with JWT session validation, role access control, and edge proxy security."
    ],
    architectureDetails:
      "Engineered with Next.js 16 App Router, TypeScript, and serverless Neon PostgreSQL. Styled with custom Fuse design tokens (16px radii, frosted glass surfaces, micro-animations) and integrated Cloudinary CDN for optimized media delivery.",
    metrics: [
      { label: "Tech Stack", value: "Next.js 16 + Neon SQL" },
      { label: "Live Deployment", value: "Vercel Production" },
      { label: "Admin Suite", value: "Complete Business Control" }
    ]
  },
  {
    id: "property-management",
    title: "Property Management Web Application",
    category: "web-app",
    iconType: "home",
    badgeBg: "bg-blue-50 dark:bg-blue-950/70",
    badgeTextColor: "text-blue-600 dark:text-blue-400",
    badgeBorderColor: "border-blue-200 dark:border-blue-800/60",
    image: "/src/assets/images/property_dashboard_1790950546758.jpg",
    description:
      "Developed a responsive property management platform featuring role-based dashboards for Admin, Agent, and Trader. Implemented authentication, profile management, reusable UI components, image upload with preview, charts, dynamic navigation, and responsive layouts to streamline property and job management.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    role: "Full-Stack Web Developer",
    githubUrl: "https://github.com/krunal-ambaliya",
    keyFeatures: [
      "Role-Based Dashboards: Dedicated portal workflows for Admin, Real Estate Agent, and Maintenance Trader.",
      "Profile & Authentication Management: Secure credential handling, profile state updates, and session routing.",
      "Property Listings & Media Uploads: Image upload with instant browser preview and validation.",
      "Dynamic Navigation & Analytics: Interactive data charts tracking occupancy, job management tickets, and property listings.",
      "Responsive Layout: Mobile-first responsive UI crafted with Bootstrap grid standards."
    ],
    architectureDetails:
      "Designed with relational MySQL data schemas linking property units, tenants, user roles, and maintenance requests. Frontend utilizes modular JavaScript event architectures and responsive Bootstrap layouts.",
    metrics: [
      { label: "Role Portals", value: "3 (Admin, Agent, Trader)" },
      { label: "Database Engine", value: "MySQL" },
      { label: "Layout Standard", value: "100% Responsive" }
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
    image: "/src/assets/images/clinic_booking_1790950566078.jpg",
    description:
      "Developed a responsive clinic management website with doctor profile management, specialties, consultation fees, appointment scheduling, and doctor availability. Built an admin dashboard to manage doctors, services, pricing, schedules, and clinic content while optimizing responsiveness and user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    role: "Front-End Developer & UI Designer",
    githubUrl: "https://github.com/krunal-ambaliya",
    keyFeatures: [
      "Doctor Profile Management: Profiles detailing medical specialties, qualifications, and consultation fee matrices.",
      "Appointment Scheduling Engine: Patient self-booking interface calculating doctor real-time availability slots.",
      "Admin Clinic Control Center: Centralized management dashboard for doctor rosters, treatment services, pricing, and clinic schedules.",
      "Optimized UX & Accessibility: Responsive healthcare layout ensuring effortless booking on mobile and desktop devices.",
      "Form Validations: Dynamic schedule verification to prevent scheduling conflicts."
    ],
    architectureDetails:
      "Engineered with clean vanilla JavaScript logic, modular DOM manipulation, and customized Bootstrap UI components for healthcare ergonomics.",
    metrics: [
      { label: "Booking Workflow", value: "Seamless & Instant" },
      { label: "Admin Console", value: "Full Clinic Control" },
      { label: "Device Support", value: "Mobile & Desktop" }
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
    image: "/src/assets/images/ai_prompt_studio_1790950585780.jpg",
    description:
      "Developed AI-powered developer tools and browser extensions for prompt generation, code review, security analysis, and performance optimization. Integrated multiple LLM APIs, implemented Markdown rendering, improved extension UI, optimized prompt workflows, and enhanced response rendering for accurate, structured AI outputs.",
    technologies: [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "REST APIs",
      "VS Code Extension API"
    ],
    role: "AI Tool Developer & Extension Architect",
    githubUrl: "https://github.com/krunal-ambaliya",
    keyFeatures: [
      "Multi-LLM API Integration: Seamless connections with modern AI model APIs for streaming structured responses.",
      "VS Code & Browser Extension Ecosystem: In-editor developer actions using VS Code Extension API alongside quick-access browser extensions.",
      "Automated Code Review & Security Analysis: AI heuristics to spot security vulnerabilities, code smells, and performance bottlenecks.",
      "Rich Markdown Rendering: Custom code block syntax highlighting, copy shortcuts, and structured formatting.",
      "Optimized Prompt Engineering Workflows: Context-aware prompt generation templates for rapid coding assistance."
    ],
    architectureDetails:
      "Built with Python back-end scripts for prompt orchestration and RESTful endpoints, with TypeScript and JavaScript powering the VS Code extension and browser frontend interfaces.",
    metrics: [
      { label: "Integrated APIs", value: "Multiple LLMs" },
      { label: "Code Analysis", value: "Security & Performance" },
      { label: "Platform Coverage", value: "Browser + VS Code" }
    ]
  }
];

// Exact Technical Skills from Resume
export const SKILLS: SkillItem[] = [
  // Languages
  { name: "Python", category: "Languages", proficiency: 90 },
  { name: "JavaScript", category: "Languages", proficiency: 92 },
  { name: "HTML5", category: "Languages", proficiency: 98 },
  { name: "CSS3", category: "Languages", proficiency: 95 },
  { name: "SQL", category: "Languages", proficiency: 86 },

  // Frameworks & Libraries
  { name: "React", category: "Frameworks & Libraries", proficiency: 88 },
  { name: "Tailwind CSS", category: "Frameworks & Libraries", proficiency: 92 },
  { name: "Bootstrap", category: "Frameworks & Libraries", proficiency: 94 },

  // Web Technologies
  { name: "Responsive Web Design", category: "Web Technologies", proficiency: 96 },
  { name: "REST APIs", category: "Web Technologies", proficiency: 90 },
  { name: "WordPress", category: "Web Technologies", proficiency: 85 },

  // Database
  { name: "MySQL", category: "Database", proficiency: 88 },

  // Tools
  { name: "Git", category: "Tools", proficiency: 92 },
  { name: "GitHub", category: "Tools", proficiency: 94 },
  { name: "VS Code", category: "Tools", proficiency: 96 },
  { name: "Linux", category: "Tools", proficiency: 85 }
];

// Exact Technical Strengths from Resume
export const TECHNICAL_STRENGTHS: TechnicalStrength[] = [
  {
    name: "Front-End Web Development",
    description: "Building responsive, modern, user-centric interfaces using React, JavaScript, HTML5, and CSS3."
  },
  {
    name: "Responsive Web Design",
    description: "Crafting fluid multi-device layouts utilizing Tailwind CSS, Bootstrap, and custom CSS grid architectures."
  },
  {
    name: "REST API Integration",
    description: "Connecting web front-ends with RESTful back-end endpoints and third-party web services."
  },
  {
    name: "AI Tool Development",
    description: "Engineering developer tools, browser extensions, and prompt workflows leveraging modern LLM APIs."
  },
  {
    name: "Problem Solving",
    description: "Algorithmic thinking, debugging complex application states, and optimizing software performance."
  },
  {
    name: "Git & Version Control",
    description: "Branching strategies, collaborative pull requests, merge conflict resolution, and code organization."
  },
  {
    name: "Team Collaboration",
    description: "Working effectively in multidisciplinary project settings, communicating technical requirements clearly."
  }
];

// Languages from Resume
export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  { name: "Hindi", proficiency: "Native Proficiency", rating: 5 },
  { name: "Gujarati", proficiency: "Native Proficiency", rating: 5 },
  { name: "English", proficiency: "Professional Working Proficiency", rating: 4 }
];
