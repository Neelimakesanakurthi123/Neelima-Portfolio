import type { CreditLine } from "@/components/ui/ufo-hero"

export const profile = {
  name: "Neelima Kesanakurthi",
  headline: "Computer Science undergraduate · Python · AI",
  location: "Andhra Pradesh, India",
  phone: "+91-8179348653",
  email: "neelimakesanakurthi841@gmail.com",
  // TODO: replace with the exact LinkedIn profile URL (the resume only says "LinkedIn").
  linkedin: "https://www.linkedin.com/search/results/people/?keywords=Neelima%20Kesanakurthi",
  objective:
    "Computer Science undergraduate with a strong foundation in Python, SQL, Object-Oriented Programming, Data Structures and Algorithms, software testing, and Artificial Intelligence. Hands-on experience with software development projects, AI workflows, data processing, and problem solving. Seeking to contribute to Python application development, automation, data solutions, and emerging AI technologies at Accenture.",
}

export const heroCredits: CreditLine[] = [
  { role: "studying", name: "B.TECH COMPUTER SCIENCE, CLASS OF 2027" },
  { role: "writes in", name: "PYTHON · SQL · OBJECT-ORIENTED DESIGN" },
  { role: "specialising in", name: "ARTIFICIAL INTELLIGENCE & GENERATIVE AI" },
  { role: "now interning at", name: "INFOSYS SPRINGBOARD" },
  { role: "previously", name: "AI INTERN, EDUEXPOSE" },
  { role: "researching", name: "BRAIN-TO-CODE TECHNOLOGY" },
  { role: "2nd prize", name: "AVANTHI SYNERGY 2026" },
  { role: "based in", name: "ANDHRA PRADESH, INDIA" },
]

export const heroFragments = [
  "PYTHON · SQL · OOP",
  "DATA STRUCTURES & ALGORITHMS",
  "PROMPT ENGINEERING",
  "PREDICTIVE MAINTENANCE",
  "SMART ATTENDANCE SYSTEM",
  "LLM CONCEPTS",
  "SOFTWARE TESTING",
  "OPEN TO OPPORTUNITIES",
  "HOLD TO BEAM",
]

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Avanthi Institute of Engineering & Technology, Makavarapalem",
    period: "2023 – 2027",
    score: "80%",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Sri Pragathi Junior College (BIEAP)",
    period: "2021 – 2023",
    score: "90%",
  },
]

export const skills = [
  { group: "Programming", items: ["Python", "SQL", "Object-Oriented Programming"] },
  { group: "Core CS", items: ["Data Structures & Algorithms", "DBMS", "SDLC", "Software Testing", "Problem Solving"] },
  {
    group: "AI / ML",
    items: ["Artificial Intelligence", "Machine Learning Fundamentals", "Generative AI", "Prompt Engineering", "LLM Concepts"],
  },
  { group: "Data", items: ["Data Processing", "Data Analysis", "Data Validation", "MySQL"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Windows"] },
  { group: "Web", items: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"] },
]

export const experience = [
  {
    role: "Virtual Intern",
    org: "Infosys Springboard",
    period: "Ongoing",
    current: true,
    summary:
      "Selected for the Infosys Springboard Virtual Internship program and worked on technical projects involving software development practices, OOP concepts, and structured problem solving.",
  },
  {
    role: "Artificial Intelligence Intern",
    org: "EduExpose",
    period: "Jun 2025 – Jul 2025",
    current: false,
    summary:
      "Gained hands-on exposure to AI fundamentals, practical AI applications, workflow automation, and prompt engineering using Generative AI tools.",
  },
]

export const projects = [
  {
    title: "Predictive Maintenance & Process Intelligence",
    stack: ["AI", "Machine Learning"],
    summary:
      "Analyzed operational data to identify potential equipment failures and process inefficiencies, and generated data-driven insights for proactive maintenance.",
  },
  {
    title: "Smart Attendance System Web Interface",
    stack: ["HTML5", "CSS3", "JavaScript", "SQL"],
    summary:
      "Developed a web interface for attendance management with structured navigation, record handling, and SQL-based data interaction.",
  },
  {
    title: "Brain-to-Code Technology & AI Research",
    stack: ["Python", "Generative AI", "Signal Processing"],
    summary:
      "Researched an AI-driven framework for mapping cognitive signal patterns to software actions using Machine Learning, signal processing, and Generative AI concepts.",
  },
]

export const achievements = [
  {
    title: "2nd Prize — Avanthi Synergy 2026",
    detail: "Technical paper presentation on “Brain to Code Technology”.",
    award: true,
  },
  {
    title: "Introduction to Generative AI — Google Cloud",
    detail: "Training in Generative AI models and prompt concepts.",
    award: false,
  },
  {
    title: "Infosys Springboard Certification",
    detail: "Training in AI and modern software development.",
    award: false,
  },
  {
    title: "Artificial Intelligence Internship Certificate — EduExpose",
    detail: "Practical AI project execution and AI tooling.",
    award: false,
  },
]
