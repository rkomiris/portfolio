/*
 * Centralized content for the portfolio.
 * This data powers the narrative-first layout (less resume-like, more story).
 */

const resumeData = {
  personal: {
    name: 'Rohan Komirishetty',
    role: 'Senior Software Engineer',
    location: 'Ashburn, VA',
    email: 'rohan.k.engineering@gmail.com',
    phone: '+1 (703) 297-2441',
    linkedin: 'https://www.linkedin.com/in/rohan-komirishetty-0087b5318',
    github: 'https://github.com/rkomiris',
    portfolio: 'https://rkomiris.github.io/portfolio',
    resumeLink: process.env.PUBLIC_URL + '/resume.pdf'
  },
  profile: {
    positioning:
      'I build agentic AI and cloud-native platforms that turn messy security, cost, and infrastructure data into decisive, auditable action.',
    focus: [
      'Agentic AI systems with durable workflows',
      'Cloud security and compliance automation',
      'FinOps optimization and cost governance'
    ],
    summary:
      'Senior backend engineer with deep experience in AWS, Java, and Python. I specialize in high-scale systems that are operable in production: strong observability, strict automation boundaries, and measurable outcomes.'
  },
  principles: [
    {
      title: 'Evidence before automation',
      detail: 'Ground every action in traceable evidence and make escalation paths explicit.'
    },
    {
      title: 'Design for operability',
      detail: 'Systems should be observable, debuggable, and resilient under load.'
    },
    {
      title: 'Trust through constraints',
      detail: 'Use strict schemas, validation, and least-privilege actions to keep AI safe.'
    },
    {
      title: 'Lead by unblocking',
      detail: 'Clarify decisions, remove friction, and mentor to raise the team bar.'
    }
  ],
  workStyle: [
    'Translate ambiguous problem statements into explicit decision records and measurable success criteria.',
    'Build end-to-end workflows with checkpoints, approvals, and observability to keep automation safe.',
    'Favor boring reliability patterns (queues, retries, circuit breakers) when stakes are high.',
    'Mentor through architecture and code reviews, with a strong bias toward clarity and ownership.'
  ],
  impactHighlights: [
    {
      metric: '10x throughput',
      label: 'Monolith modernization into Spring Boot microservices on AWS.'
    },
    {
      metric: '15-30% cost savings',
      label: 'Rightsizing, lifecycle automation, and FinOps optimization at scale.'
    },
    {
      metric: '99.99% uptime',
      label: 'Resilient systems and incident recovery for high-traffic services.'
    },
    {
      metric: '578 checks',
      label: 'CSPM rules library powering evidence-based security findings.'
    },
    {
      metric: '500K+ results per scan',
      label: 'Distributed policy evaluation across accounts, regions, and services.'
    },
    {
      metric: '40% faster onboarding',
      label: 'AI copilots grounded in control libraries and enterprise context.'
    }
  ],
  caseStudies: [
    {
      title: 'CloudCatcher CSPM Engine',
      timeframe: 'Jul 2023 - Present',
      context: 'Event-driven policy evaluation for multi-cloud security posture management.',
      problem:
        'Enterprises needed scalable, evidence-ready security findings with consistent prioritization across accounts and regions.',
      decisions: [
        'Built a serverless rule evaluation engine with Lambda, EventBridge, and Step Functions for distributed scans.',
        'Normalized 578 checks into a unified finding model and severity scoring based on asset criticality and exposure.',
        'Packaged outputs into compliance-ready artifacts to drive remediation workflows.'
      ],
      outcomes: [
        'Generated 500K+ check results per scan run for evidence-driven guidance.',
        'Improved compliance assessment turnaround by 40% and reduced incidents by 30%.',
        'Enabled automated remediation steps through Copilot integrations.'
      ],
      stack: ['AWS Lambda', 'EventBridge', 'Step Functions', 'PostgreSQL', 'Elasticsearch']
    },
    {
      title: 'CloudCatcher Copilot',
      timeframe: 'Jul 2023 - Present',
      context: 'Agentic investigation and workflow automation for security, compliance, and cost questions.',
      problem:
        'Teams needed a reliable AI assistant that could retrieve evidence, select tools, and safely execute approved workflows.',
      decisions: [
        'Implemented RAG with metadata filtering, relevance thresholds, and control libraries for grounded answers.',
        'Designed strict tool schemas with validation, dry-run, and approval gates for write actions.',
        'Operationalized quality with evaluation harnesses and trace-level observability.'
      ],
      outcomes: [
        'Accelerated onboarding by 40% across 200+ enterprise clients.',
        'Improved groundedness and reduced unsupported responses using structured retrieval.',
        'Enabled replay-driven debugging for prompt and tool regressions.'
      ],
      stack: ['LLMs', 'Vector Search', 'RAG', 'AWS', 'Tooling APIs']
    },
    {
      title: 'FinOps Optimization Platform',
      timeframe: 'Jul 2022 - Aug 2023',
      context: 'Cost visibility, anomaly detection, and optimization for multi-tenant AWS estates.',
      problem:
        'Enterprise teams lacked consistent cost visibility and actionable optimization plans across 500+ accounts.',
      decisions: [
        'Ingested Cost and Usage Reports on ECS Fargate with S3 event triggers at 10GB+ per day.',
        'Built deterministic rightsizing and idle cleanup recommendations and automated tagging.',
        'Introduced ARIMA-based forecasting to predict cost overages.'
      ],
      outcomes: [
        'Delivered average savings of 18% when recommendations were applied.',
        'Reduced overage incidents by 30% with improved forecasting.',
        'Sustained 99.99% API uptime under growing transaction load.'
      ],
      stack: ['ECS Fargate', 'AWS CUR', 'PostgreSQL', 'Python', 'Docker']
    }
  ],
  capabilities: [
    {
      title: 'Agentic AI systems',
      items: [
        'Tool calling with strict schemas and validation',
        'RAG pipelines with metadata-constrained retrieval',
        'Evaluation harnesses and regression gating'
      ]
    },
    {
      title: 'Cloud security and compliance',
      items: [
        'CSPM engines and policy evaluation at scale',
        'Infrastructure-as-code governance with OPA/Rego',
        'Evidence-ready reporting and remediation guidance'
      ]
    },
    {
      title: 'Cost optimization and FinOps',
      items: [
        'CUR ingestion, cost allocation, and forecasting',
        'Rightsizing heuristics and lifecycle automation',
        'Tagging automation and MSP reporting'
      ]
    },
    {
      title: 'Scalable backend systems',
      items: [
        'Event-driven architecture with queues and async workers',
        'Performance tuning with indexing and caching',
        'High-availability incident recovery'
      ]
    }
  ]
};

export default resumeData;
