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
    resumeLink: process.env.PUBLIC_URL + '/resume.pdf'
  },
  summary:
    'Senior Backend Engineer with 7 years of experience designing and scaling cloud-native SaaS platforms. Expert in Java/Python\n' +
      'microservices and AWS serverless architectures (Lambda, ECS, SQS). Proven success in modernizing monoliths, delivering\n' +
      'FinOps innovations in cost visibility and optimization and enhancing CSPM/threat-detection engines. Recognized for driving 10×\n' +
      'throughput, 15–30% cost savings, 99.99% uptime, and 40% faster compliance while mentoring teams and advancing DevSecOps\n' +
      'practices',
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
        'Modernized Java monolith into Spring Boot 3.3 microservices on AWS Lambda, SQS, and ECS/Fargate. Implemented event-driven autoscaling and rightsizing, boosting throughput 10× and cutting costs 30%.',
        'Architected CloudCatcher’s CSPM backend, an agentless misconfiguration detection engine with severity-based remediation. Delivered 40% greater asset visibility, 30% fewer incidents, and ensured audit-ready compliance.',
        'Engineered ingestion/ETL pipelines in Python/Java with PostgreSQL/MongoDB and Elasticsearch, processing 1M+ records/day. Applied memory-efficient data structures (hash maps, concurrent queues) and partitioned indexes, cutting query times by 50% and compliance assessments by 40%.',
        'Designed and deployed real-time anomaly/threat detection using Elasticsearch ML and graph algorithms, increasing detection precision 35% and cutting breach-response time 40% across enterprise workloads.',
        'Instituted shift-left IaC governance by embedding Open Policy Agent (OPA) into CI/CD pipelines, scanning 20+ template types. Enforced pre-deployment compliance and reduced misconfiguration rollbacks by 25%.',
        'Implemented FinOps modules unifying AWS cost visibility, role-based reporting, workload tagging, budget tracking with alerts/forecasting, and MSP margin management; cut overage incidents by 30%, improved forecast accuracy by 25%, and delivered 15–20% cost savings across enterprise clients.',
        'Automated rightsizing, idle-resource cleanup, and S3 tiering using greedy algorithms and min-heap priority queues. Generated RI/savings-plan recommendations, delivering 15–20% AWS cost savings for clients.',
        'Integrated AWS Marketplace licensing and onboarding into CloudCatcher, enabling SaaS distribution with subscription billing and reporting. Shortened partner onboarding by 40% and expanded adoption to 50+ enterprise customers.',
        'Developed an AI-powered compliance assistant and WAFR (well-architected-framework-review) chatbot using LLMs + AWS APIs, providing self-service policy validation and accelerating onboarding by 40% for 200+ enterprise clients.',
        'Optimized UI-facing AWS Lambda APIs through indexing, LRU caching, async queues, and SnapStart optimization; reduced DB query times by 50–80%, cut cold starts by 10×, and lowered p95 latency to < 500ms.',
        'Containerized services with Docker/ECR and orchestrated on ECS Fargate, enabling 5× transaction growth and 99.99% API uptime, while reducing technical debt in a modernized microservices architecture.',
        'Spearheaded FinOps strategies (ARM migration, lifecycle policies, log retention, reserved instances) that reduced AWS costs 15–20% and improved long-term cost governance.',
        'Mentored 15+ engineers in concurrency and secure coding practices, boosting team productivity by 20% and improving security compliance across all development teams.',
        'Led DevOps initiatives, building CI/CD pipelines (Bitbucket, AWS CodePipeline) with SAST/DAST and canary/blue-green deployments. Achieved 99.95% deployment success and released software 25% faster.'
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