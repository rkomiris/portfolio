/*
 * This module centralizes all of the data required to build the portfolio.
 * Keeping your résumé data separate makes the React components simple and
 * encourages reuse. You can update this file as your career evolves.
 */

const resumeData = {
  personal: {
    name: 'Rohan Komirishetty',
    role: 'Lead Software Engineer',
    location: 'Ashburn, VA',
    email: 'rohan.komirishetty.dev@gmail.com',
    phone: '+1 (703) 297‑2441',
    linkedin: 'http://www.linkedin.com/in/rohan-komirishetty-0087b5318',
    // Provide a link to your résumé PDF relative to the public folder.
    resumeLink: '/resume.pdf'
  },
  summary:
    'Software Engineer with around 7 years of experience in designing, developing and deploying scalable enterprise applications across web and cloud environments. Proficient in Java, JavaScript, TypeScript and SQL, with strong expertise in Spring Boot, Spring MVC, Spring Security, Hibernate, JPA and Microservices for back‑end development. Hands‑on experience with MySQL, PostgreSQL, etc., delivering optimized data‑driven solutions. Adept in AWS, Azure and GCP for cloud‑native development, deployment and scaling. Experienced in Docker, Kubernetes and Jenkins to streamline CI/CD pipelines and DevOps practices.',
  skills: {
    languages: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
    frameworks: [
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Hibernate',
      'JPA',
      'Microservices',
      'Node.js',
      'Express.js',
      'JSF'
    ],
    frontEnd: ['React.js', 'Angular', 'JSP', 'JSTL', 'Bootstrap', 'jQuery', 'AJAX', 'Redux'],
    backEnd: ['Java EE', 'Servlets', 'JDBC', 'RESTful APIs'],
    databases: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server', 'MongoDB'],
    cloud: ['AWS', 'Azure', 'GCP'],
    devOps: ['Docker', 'Kubernetes', 'JWT', 'Jenkins', 'Git', 'GitHub', 'GitLab', 'Maven', 'Gradle', 'OAuth 2.0'],
    testing: ['JUnit', 'Mockito', 'Postman', 'Selenium', 'JMeter'],
    webTech: ['HTML5', 'CSS3', 'JSON', 'XML'],
    ideTools: ['IntelliJ IDEA', 'Eclipse', 'Visual Studio Code', 'NetBeans'],
    projectManagement: ['Jira', 'Confluence', 'Agile/Scrum', 'SDLC', 'Waterfall']
  },
  education: [
    {
      degree: 'Masters in Information Systems',
      institution: 'George Mason University',
      location: 'Fairfax, VA',
      date: 'May 2021'
    },
    {
      degree: 'BTech in Computer Science',
      institution: 'Vidya Jyothi Institute of Technology',
      location: 'Hyderabad, India',
      date: 'May 2019'
    }
  ],
  experience: [
    {
      company: 'CloudNova Technologies',
      location: 'Reston, VA',
      position: 'Lead Software Engineer - Backend',
      startDate: 'Jul 2021',
      endDate: 'Present',
      accomplishments: [
        'Modernized Java monolith into Spring Boot 3.3 microservices (AWS Lambda, SQS, ECS/Fargate), boosting throughput 10× and cutting costs by ~30% via event-driven autoscaling and rightsizing.',
        'Architected CloudCatcher’s CSPM backend—an agentless engine for automated misconfiguration detection and severity-scored remediation—raising asset visibility ≈40%, reducing incidents ≈30%, and ensuring audit-ready compliance.',
        'Engineered high-throughput ingestion/ETL pipelines (Python/Java, PostgreSQL/MongoDB, Elasticsearch) processing 1M+ records/day; optimized indexing and partitioning to cut query times by 50% and compliance assessments by 40%.',
        'Designed real-time anomaly/threat detection using Elasticsearch ML and graph algorithms, improving detection precision by ≈35% and reducing breach-response times by ≈40% across enterprise workloads.',
        'Instituted shift-left IaC governance by embedding Open Policy Agent (OPA) into CI/CD, scanning 20+ template types across different teams; enforced pre-deployment compliance and cut misconfiguration rollbacks by 25%.',
        'Built FinOps modules to unify AWS cost visibility, enable role-based reporting, and deliver intelligent cost allocation with Kubernetes/EKS cost breakdowns.',
        'Automated rightsizing, idle resource cleanup, and S3 tiering to generate reserved-instance/savings-plan recommendations, driving 15–20% cost savings for clients.',
        'Built a serverless ticket resolution/escalation system (MongoDB, S3, Gmail API, AWS Lambda) that streamlined client workflows and cut average support resolution times by 50% across thousands of cases.',
        'Integrated AWS Marketplace licensing and onboarding into CloudCatcher, enabling SaaS distribution with subscription billing and usage reporting—shortening partner onboarding by 40% and expanding adoption to 50+ enterprise customers.',
        'Developed an AI-powered compliance assistant and WAFR chatbot using LLMs with AWS APIs, providing self-service policy validation and accelerating onboarding by ≈40% for 200+ enterprise clients.',
        'Upgraded APIs to Java 17 with JWT/OAuth2, AWS Cognito MFA, and Secrets Manager, strengthening security posture.',
        'Containerized services with Docker/ECR and orchestrated on ECS Fargate, supporting 5× transaction growth, reducing tech debt, and achieving 99.99% API uptime in microservices architecture.',
        'Implemented FinOps strategies—including ARM instance migration, lifecycle policies, log retention, and reserved instances—reducing AWS costs by 15–20%.',
        'Mentored engineers to adopt concurrency and secure coding practices, raising team delivery standards.',
        'Led DevOps initiatives by building CI/CD pipelines (Bitbucket, AWS CodePipeline) with SAST/DAST and canary/blue-green deployments, achieving 99.95% deployment success and ≈25% faster releases.'
      ]
    },
    {
      company: 'Exert Infotech',
      location: 'India',
      position: 'Software Engineer',
      startDate: 'Jan 2018',
      endDate: 'Jul 2019',
      accomplishments: [
        'Developed Java microservices with Spring Boot & Hibernate, boosting system performance by 30% across 10+ enterprise modules.',
        'Designed RESTful APIs and Node.js/Express services enabling real-time data exchange across distributed systems and 3+ databases, supporting thousands of daily transactions.',
        'Implemented JWT/OAuth2 security, database indexing, and load testing (JUnit, Mockito, JMeter), reducing production defects by 28% and improving release quality.',
        'Engineered database solutions with MySQL, PostgreSQL, Oracle, and MongoDB, reducing query response times by 40% through indexing and schema optimization.',
        'Built CI/CD pipelines (Jenkins, Docker, Kubernetes), accelerating release cycles by 35% and improving deployment reliability by cutting rollback incidents by 40%.'
      ]
    }
  ],
  // You can define an array of projects you want to showcase. Replace the
  // placeholder objects with your actual portfolio projects. Each entry
  // describes the project name, a short description, technologies used and
  // where users can learn more.
  projects: [
    {
      title: 'Project One',
      description: 'A brief description of your project. Explain the goal and highlight your contribution.',
      techStack: ['React', 'Node.js', 'AWS'],
      image: 'project1.png',
      repoLink: 'https://github.com/USERNAME/project-one',
      demoLink: 'https://project-one.demo.com'
    },
    {
      title: 'Project Two',
      description: 'Another project description goes here. Keep it concise and focus on results.',
      techStack: ['Java', 'Spring Boot', 'PostgreSQL'],
      image: 'project2.png',
      repoLink: 'https://github.com/USERNAME/project-two',
      demoLink: 'https://project-two.demo.com'
    }
  ]
};

export default resumeData;