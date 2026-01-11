export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#achievements", label: "Achievements" },
];

export const PROFILE = {
  name: "Melike Buyruk",
  role: "Quality Assurance Engineer / Front-end Engineer",
  location: "İstanbul, Turkey",
  tagline:
    "I’m a Computer Engineering graduate working at the intersection of software quality, test automation, and front-end development. I enjoy building reliable systems, improving user experience, and ensuring software works as expected at scale.",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Email", href: "mailto:melikebuyruk@outlook.com" },
  ],
  resumeUrl: "/MelikeBuyrukResume.pdf",
};

export const ABOUT = `
I graduated from Izmir University of Economics with a full scholarship and a strong academic background in Computer Engineering.
Throughout my career, I have focused on building high-quality software through a combination of test automation,
front-end development, and close collaboration with cross-functional teams.

I currently work as a Quality Assurance Engineer at Amadeus IT Group, where I contribute to large-scale,
international projects within a Scaled Agile (SAFe®) environment. My experience spans UI automation, API testing,
test case design, and performance-focused front-end development using modern web technologies.

I am particularly interested in test automation, scalable systems, and front-end engineering,
where reliability and user experience meet.
`;

export const EXPERIENCE = [
  {
    company: "Amadeus IT Group",
    role: "Quality Assurance Engineer",
    period: "Oct 2025 – Present",
    location: "Istanbul, Turkey",
    current: true,
    logo: "/logos/amadeus.jpg",
    image: "/companies/amadeus.jpg",
    tech: ["Playwright", "Jira", "SAFe", "Agile", "Test Automation"],
    details: [
      {
        text: "Maintain and enhance the existing test automation framework using Playwright, ensuring scalable and reliable test coverage.",
        highlight: true,
      },
      {
        text: "Collaborate with international teams across France, Germany, India, and Turkey within the Lufthansa Competency Center.",
        highlight: true,
      },
      {
        text: "Analyze requirements, design test cases, execute tests, and track defects using Jira.",
      },
    ],
  },

  {
    company: "Nesine.com",
    role: "Front-end Engineer Intern",
    period: "Jul 2024 – Dec 2024",
    location: "Remote",
    logo: "/logos/nesine.png",
    image: "/companies/nesine.png",
    tech: ["React", "JavaScript", "Jest", "Scrum", "Performance"],
    details: [
      "Developed and executed unit tests using Jest and JavaScript testing libraries to validate complex application logic.",
      "Optimized performance of data-heavy web pages, improving responsiveness and user experience for high-traffic scenarios.",
      "Built dynamic and responsive user interfaces using React and JavaScript.",
      "Worked in a Scrum-based Agile environment, contributing to sprint planning and feature delivery.",
    ],
  },
  {
    company: "P.I. Works",
    role: "Junior Software Test Engineer (Part-time)",
    period: "Aug 2023 – Jul 2024",
    logo: "/logos/piworks.png",
    image: "/companies/piworks.png",
    location: "Remote",
    tech: ["Postman", "Selenium", "PostgreSQL", "Linux", "API Testing"],
    details: [
      "Performed functional and regression testing for telecom software used by major operators such as Turk Telekom and Turkcell.",
      "Conducted comprehensive API testing using Postman to ensure service reliability and data integrity.",
      "Developed automated test scripts using Selenium, significantly improving testing efficiency.",
      "Worked with Linux-based systems and performed database testing using PostgreSQL.",
    ],
  },
  {
    company: "ASELSAN",
    role: "Software Developer Intern",
    logo: "/logos/aselsan.jpg",
    image: "/companies/aselsan.jpg",
    period: "Jul 2023 – Aug 2023",
    location: "Ankara, Turkey",
    tech: ["React", "Spring Boot", "REST", "Docker"],
    details: [
      "Developed a web-based admin control panel using React for the front-end and Spring Boot for the back-end.",
      "Designed and implemented RESTful APIs for real-time data synchronization.",
      "Dockerized the application to support efficient deployment and scalability.",
    ],
  },
  {
    company: "Izmir University of Economics",
    role: "Student Assistant",
    period: "Sep 2022 – Feb 2023",
    logo: "/logos/ieu.png",
    image: "/companies/ieu.png",
    location: "Izmir, Turkey",
    tech: ["DSA", "OOP", "Teaching"],
    details: [
      "Supported students in courses such as Data Structures, Algorithms, and Object-Oriented Programming.",
      "Provided one-to-one and small group academic assistance.",
    ],
  },
];

export const SKILLS = {
  frontend: ["React.js", "JavaScript", "HTML", "CSS"],
  backend: ["Spring Boot", "Node.js"],
  testing: [
    "Playwright",
    "Selenium",
    "Jest",
    "Unit Testing",
    "API Testing",
    "UI Automation",
    "Test Case Design",
  ],
  tools: ["Git", "GitHub", "Docker", "Postman", "Jira", "VS Code", "Linux"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  methodologies: ["Agile", "Scrum", "SAFe®"],
  languages: ["Java", "Python", "JavaScript", "C"],
};

export const PROJECTS = [
  {
    title: "Divine – AI-Powered Music Interaction Platform",
    desc: "An AI-driven platform that analyzes audience preferences in real time.",
    tags: ["React", "Firebase", "Flutter"],
    focus: "Frontend / AI",
  },
  {
    title: "Admin Control Panel",
    desc: "A secure admin panel for managing real-time communication data.",
    tags: ["React", "Spring Boot", "Docker"],
    focus: "Full-stack",
  },
  {
    title: "Test Automation Framework",
    desc: "Automation work focused on reliability and scalable test coverage.",
    tags: ["Playwright", "Selenium", "Testing"],
    focus: "QA / Automation",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Engineering",
  school: "Izmir University of Economics",
  period: "2020 – 2024",
  gpa: "3.64 / 4.00 (Full Scholarship)",
  highlights: [
    "Graduated with a 3.64 GPA on a full scholarship, ranked 2nd in the Computer Engineering department.",
    "Co-founder of the Cyber Security Club, actively contributing to student initiatives and technical events.",
    "Volunteered as a mentor, providing academic and technical guidance to fellow students.",
    "Completed the program on a merit-based full scholarship and received an additional scholarship for ranking within the top three students of the department.",
  ],
};

export const ACHIEVEMENTS = [
  {
    title: "Department Second Place",
    year: "2024",
    desc: "Graduated as 2nd in the Computer Engineering department with a GPA of 3.64.",
  },
  {
    title: "Outstanding Achievement Certificate",
    year: "2024",
    desc: "Awarded for academic excellence and overall performance.",
  },
  {
    title: "Genç Beyinler Yeni Fikirler",
    year: "2024",
    desc: "Second Place – Graduation Project Competition.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "ISTQB® Certified Tester – Foundation Level",
    issuer: "ISTQB",
    year: "2025",
    note: "Internationally recognized software testing certification.",
  },
];
