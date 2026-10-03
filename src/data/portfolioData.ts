import {
  ExperienceItem,
  EducationItem,
  ProjectItem,
  ProjectCategory,
  SkillGroupItem,
  TechnicalStrength,
  SpokenLanguage
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Krunal Ambaliya",
  firstName: "Krunal",
  role: "Web Developer · Python Developer",
  titleBadge: "Web Developer | Python Developer | AI & Cyber Security Enthusiast",
  headline: "I build clean, useful digital experiences.",
  intro:
    "Developer focused on modern web applications, Python development and practical software solutions.",
  summary:
    "Motivated Web Developer with hands-on experience in building responsive, user-centric web applications and AI-powered developer tools. Proficient in front-end development, Python, REST API integration, and modern JavaScript frameworks. Passionate about creating scalable web solutions while continuously expanding knowledge in Artificial Intelligence and Cyber Security.",
  // Condensed version of the summary used in the About section
  aboutLead:
    "I build responsive, user-centric web applications and AI-powered developer tools.",
  aboutBody:
    "My work spans front-end development, Python, REST API integration and modern JavaScript frameworks. I care about scalable web solutions — and keep expanding my knowledge in Artificial Intelligence and Cyber Security.",
  location: "Gujarat, India",
  email: "krunalambaliya123@gmail.com",
  emailInquiryUrl: "mailto:krunalambaliya123@gmail.com?subject=Project%20Inquiry%20or%20Opportunity",
  githubUsername: "krunal-ambaliya",
  githubUrl: "https://github.com/krunal-ambaliya",
  discordUsername: "krues7",
  discordUrl: "https://discord.com/users/krues7",
  // Add your LinkedIn profile URL here to show it in the contact section and footer
  linkedinUrl: "",
  facts: [
    { label: "Based in", value: "Gujarat, India" },
    { label: "Focus", value: "Web Development · Python" },
    { label: "Education", value: "Diploma in IT · B.Tech IT" },
    { label: "Interests", value: "AI · Cyber Security · Prompt Engineering · Software Development" }
  ],
  focusAreas: [
    { label: "Full Stack Web Development", icon: "code" },
    { label: "Artificial Intelligence", icon: "brain" },
    { label: "Cyber Security", icon: "shield" },
    { label: "Prompt Engineering", icon: "terminal" }
  ],
  stats: [
    { label: "Production projects", value: "5+" },
    { label: "Academic CGPA", value: "8.5/10" },
    { label: "Primary languages", value: "Python & JS" },
    { label: "Current focus", value: "AI & Full Stack" }
  ]
};

export const PROJECT_CATEGORIES: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web-app', label: 'Web & E-Commerce' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'developer-tools', label: 'AI & Developer Tools' }
];

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
    name: "Timect",
    title: "Timect — Modern E-Commerce Storefront & Admin Portal",
    category: "web-app",
    summary: "Luxury e-commerce storefront with a complete back-office admin suite.",
    highlights: ["Product variants & gifting", "Admin dashboard", "JWT-secured routes"],
    image: "https://res.cloudinary.com/dphscxzb4/image/upload/v1790964008/Screenshot_2026-10-02_232857_treo5w.png",
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
      { label: "Live Deployment", value: "timect-new.vercel.app", url: "https://timect-new.vercel.app/" },
      { label: "Admin Suite", value: "Complete Business Control", url: "https://timect-new.vercel.app/admin" }
    ]
  },
  {
    id: "paras-jewells",
    name: "Paras Jewells",
    title: "Paras Jewells — Luxury Jewellery & Diamond Store",
    category: "web-app",
    summary: "Digital showroom for a gold and diamond jewellery store.",
    highlights: ["Purity & cut filters", "Curated collections", "Email inquiries"],
    image: "https://res.cloudinary.com/dphscxzb4/image/upload/v1790964007/Screenshot_2026-10-02_232943_sxkzr9.png",
    description:
      "Engineered an e-commerce digital showroom for Paras Jewells showcasing gold and diamond collections, purity specification filters (14K/18K/22K), diamond cut clarity matrices, and direct email inquiry ordering.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "Lucide Icons"],
    role: "Lead Frontend & E-Commerce Developer",
    liveUrl: "https://paras-jewells.vercel.app/",
    githubUrl: "https://github.com/krunal-ambaliya/paras_jewells",
    keyFeatures: [
      "High-End Digital Showroom: Curated collections of gold, diamond rings, necklaces, and bridal sets with high-resolution imagery.",
      "Purity & Cut Filtering: Granular filters for gold purity (14K/18K/22K), carat weights, diamond clarity, and budget ranges.",
      "Email Inquiry Integration: Direct customer order inquiries and bespoke bridal consultation via email.",
      "Performance-Tuned UI: Smooth framer-motion animations, mobile-optimized catalog navigation, and sub-second page loads."
    ],
    architectureDetails:
      "Developed with React, TypeScript, and Tailwind CSS using modern component composition, responsive layout grids, and lightweight state management for instantaneous catalog browsing.",
    metrics: [
      { label: "Live Storefront", value: "paras-jewells.vercel.app", url: "https://paras-jewells.vercel.app/" },
      { label: "Inquiry Engine", value: "Email Inquiry", url: "mailto:krunalambaliya123@gmail.com?subject=Paras%20Jewells%20Inquiry" },
      { label: "Catalog Filter", value: "Gold & Diamond Purity", url: "https://paras-jewells.vercel.app/" }
    ]
  },
  {
    id: "clinic-doctor",
    name: "CarePulse / Dentray",
    title: "CarePulse / Dentray — Clinic & Doctor Appointment Booking",
    category: "healthcare",
    summary: "Clinic portal with a doctor directory and real-time appointment booking.",
    highlights: ["Slot booking", "Doctor profiles", "Clinic admin"],
    image: "https://res.cloudinary.com/dphscxzb4/image/upload/v1790964008/Screenshot_2026-10-02_232811_acewsn.png",
    description:
      "Developed a comprehensive healthcare clinic portal and patient appointment scheduling system. Features specialist doctor directories, consultation fee matrices, real-time availability slot booking, and administrative clinic controls.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Bootstrap"],
    role: "Full-Stack Web Developer",
    liveUrl: "https://clinic-doctor001.vercel.app/",
    githubUrl: "https://github.com/krunal-ambaliya/clinic-app",
    keyFeatures: [
      "Doctor Specialty Directory: Detailed practitioner profiles highlighting certifications, consultation fees, and patient ratings.",
      "Interactive Appointment Booking: Real-time time slot selector preventing double bookings with instant confirmation.",
      "Clinic Administration Console: Centralized portal to configure working hours, holiday schedules, and service pricing.",
      "Mobile-Optimized Patient Experience: Clean, accessible interface tailored for fast booking across mobile and desktop devices."
    ],
    architectureDetails:
      "Built with React, TypeScript, and modular REST services for appointment management. Styled with responsive Tailwind CSS components for healthcare usability.",
    metrics: [
      { label: "Live Deployment", value: "clinic-doctor001.vercel.app", url: "https://clinic-doctor001.vercel.app/" },
      { label: "GitHub Repo", value: "clinic-app", url: "https://github.com/krunal-ambaliya/clinic-app" },
      { label: "Booking Engine", value: "Real-Time Slots", url: "https://clinic-doctor001.vercel.app/" }
    ]
  },
  {
    id: "propdoc-property-management",
    name: "PropDoc",
    title: "PropDoc — Property & Tenancy Management System",
    category: "web-app",
    summary: "Multi-role property and tenancy management platform.",
    highlights: ["Role-based portals", "Lease records", "Maintenance tickets"],
    image: "https://res.cloudinary.com/dphscxzb4/image/upload/v1790963834/Screenshot_2026-10-02_232626_e1uvc1.png",
    description:
      "Engineered PropDoc, a multi-role property and asset documentation platform. Features tailored workflows for Admins, Real Estate Agents, and Maintenance Traders with lease tracking, unit listings, and repair dispatch ticketing.",
    technologies: ["Python", "JavaScript", "MySQL", "Bootstrap", "REST APIs", "HTML5/CSS3"],
    role: "Full-Stack Software Engineer",
    liveUrl: "https://propdoc-site.vercel.app/",
    githubUrl: "https://github.com/krunal-ambaliya/propdoc",
    keyFeatures: [
      "Multi-Role Portals: Distinct permission tiers and dashboards for Property Owners/Admins, Agents, and Traders.",
      "Tenancy & Lease Documentation: Centralized record-keeping for tenant agreements, rent rolls, and unit occupancy status.",
      "Maintenance Ticket Dispatch: Streamlined service request workflow with contractor assignments and status notifications.",
      "Analytics & Reporting: Real-time charts for rental collection, occupancy rates, and pending maintenance tasks."
    ],
    architectureDetails:
      "Engineered with Python backend logic, structured MySQL relational schemas, and responsive Bootstrap frontend interfaces for high data density and cross-device accessibility.",
    metrics: [
      { label: "Live Deployment", value: "propdoc-site.vercel.app", url: "https://propdoc-site.vercel.app/" },
      { label: "GitHub Repository", value: "propdoc", url: "https://github.com/krunal-ambaliya/propdoc" },
      { label: "User Roles", value: "3 Portals (Admin/Agent/Trader)" },
      { label: "Database Engine", value: "MySQL Schemas" }
    ]
  },
  {
    id: "ai-prompt-tools",
    name: "AI Prompt & Developer Tools",
    title: "AI Prompt & Developer Tools",
    category: "developer-tools",
    summary: "AI-powered browser and VS Code extensions for prompt generation and code review.",
    highlights: ["Multi-LLM integration", "Code & security review", "Markdown rendering"],
    image: "https://res.cloudinary.com/dphscxzb4/image/upload/v1790964918/ai_prompt_studio_1790950585780_wqcoht.jpg",
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
      { label: "Platform Coverage", value: "Browser + VS Code", url: "https://github.com/krunal-ambaliya" }
    ]
  }
];

// Technical skills from resume, grouped (TypeScript, Next.js, PostgreSQL & Neon come from the projects)
export const SKILL_GROUPS: SkillGroupItem[] = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"] },
  { title: "Frameworks & Web", skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "WordPress", "Responsive Web Design"] },
  { title: "Backend & DB", skills: ["REST APIs", "MySQL", "PostgreSQL", "Neon"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Linux"] }
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
