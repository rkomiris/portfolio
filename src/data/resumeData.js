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
    email: 'Rohan.komirishetty.dev@gmail.com',
    phone: '+1 (703) 297‑2441',
    linkedin: 'https://www.linkedin.com/in/placeholder',
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
      degree: 'BE in Computer Science',
      institution: 'Vidya Jyothi Institute of Technology',
      location: 'Hyderabad, India',
      date: 'May 2019'
    }
  ],
  experience: [
    {
      company: 'CloudNova Technologies',
      location: 'Reston, VA',
      position: 'Lead Software Engineer',
      startDate: 'Jul 2021',
      endDate: 'Present',
      accomplishments: [
        'Spearheaded migration of a high‑throughput Java monolith to AWS Lambda and SQS, optimizing concurrency and cold‑start latency; achieved a 10× throughput increase and 30% cost savings via event‑driven autoscaling.',
        'Planned and deployed a cloud security posture management platform across multi‑region AWS accounts, enhancing compliance visibility and reducing security misconfigurations by 40% through real‑time alerting with Elasticsearch and automated triggers.',
        'Designed and implemented a compliance automation framework in Python and Go, introducing asynchronous workflows and persistent caching to cut assessment cycle times by 40%.',
        'Led development of a proactive risk evaluation service integrating containerized Open Policy Agent (OPA) with CI/CD pipelines, enabling policy validation of cloud templates before deployment and lowering release rollbacks by 25%.',
        'Architected a real‑time anomaly detection platform with Elasticsearch ML, graph queries and event‑driven pipelines, boosting threat detection precision by 35% while reducing false positives.',
        'Built a self‑service data governance portal using PostgreSQL, MongoDB TTL and AWS S3, automating retention rules and trimming unnecessary data growth by 30%.',
        'Directed a cross‑functional team to optimize AWS storage and compute usage, achieving an estimated 20% cost reduction across staging and production environments.',
        'Mentored junior engineers on best practices in Python concurrency, distributed systems and secure coding, improving code quality and reducing defect density in production releases.',
        'Introduced test automation frameworks (JUnit, Cucumber, Selenium) into CI/CD pipelines, cutting post‑deployment bugs by 30% and accelerating regression testing cycles.',
        'Transitioned legacy monolithic systems to ECS (Fargate) with Docker, implementing ECS service autoscaling to support a 5× increase in daily API traffic.',
        'Architected an AI‑driven compliance assistant by integrating large language models with AWS APIs, Elasticsearch and custom licensing workflows, enabling self‑service policy validation and accelerating customer onboarding by 40%.',
        'Authored API documentation and architecture diagrams, accelerating developer onboarding by 20% and reducing incident resolution times.'
      ]
    },
    {
      company: 'Exert Infotech',
      location: 'India',
      position: 'Software Engineer',
      startDate: 'Jan 2018',
      endDate: 'Jul 2019',
      accomplishments: [
        'Developed and deployed scalable enterprise applications using Java, Spring Boot, Microservices and Hibernate, improving system performance by 30%.',
        'Designed and optimized RESTful APIs along with Node.js and Express.js services, supporting real‑time data exchange across distributed systems.',
        'Engineered database solutions with MySQL, PostgreSQL, Oracle and MongoDB, reducing query response times by 40% through indexing and schema optimization.',
        'Implemented CI/CD pipelines with Jenkins, Docker, Kubernetes, Git and Maven, accelerating release cycles by 35% and improving deployment reliability.',
        'Collaborated in Agile/Scrum teams, contributing to sprint planning, backlog grooming and delivering high‑quality code within tight deadlines.',
        'Integrated back‑end systems with third‑party APIs and internal services via RESTful endpoints, SOAP web services and JSON/XML payloads, ensuring secure and reliable data exchange.',
        'Implemented security best practices in Java applications, including JWT authentication, OAuth 2.0 and role‑based access control, ensuring compliance with internal policies.',
        'Conducted unit, integration and load testing with JUnit, Mockito, Selenium, Postman and JMeter, reducing post‑release defects by 28%.'
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