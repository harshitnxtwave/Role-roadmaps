// APP DATA & MOCK METADATA (Differentiating outcome variables)
const ROLES_METADATA = {
  sde: {
    id: 'sde',
    title: 'Software Development Engineer (SDE)',
    category: 'engineering',
    difficulty: 'Advanced',
    focusSkill: 'DSA, System Design, Advanced Databases',
    keyOutcome: 'Build core software systems and secure offers in top-tier product MNCs.',
    shortDesc: '15K-35K openings in the last 90 days. The most sought-after role in product engineering teams.',
    description: 'Build, deploy, and scale high-volume web systems. Learn DSA, system design, databases, and software engineering principles aligned with top tier hiring processes.',
    coursesCount: 37,
    durationDays: 180,
    indicativeCtc: '₹8-30 LPA',
    icon: 'terminal',
    companies: [
      { name: 'Goldman Sachs', logo: 'GS' },
      { name: 'PayPal', logo: 'PP' },
      { name: 'Uber', logo: 'UB' },
      { name: 'Directi', logo: 'DI' }
    ],
    learnTopics: [
      'Data Structures & Algorithms (Basic to Advanced)',
      'Database Management Systems & SQL Querying',
      'System Design (High-Level and Low-Level Architecture)',
      'Web Development Foundations (HTML, CSS, JS)',
      'Backend Frameworks (Node.js/Express or Python/Django)',
      'Object-Oriented Programming (OOP) in Java/C++',
      'CI/CD Pipelines, Docker, and AWS Cloud Basics'
    ],
    courses: [
      { id: 'sde_c1', title: 'CCBP 4.0 Introduction', desc: 'Fundamentals of coding, variables, loops, and logic development.', estHrs: 20 },
      { id: 'sde_c2', title: 'Python Programming Basics', desc: 'Writing clean pythonic scripts, functions, and understanding syntax.', estHrs: 30 },
      { id: 'sde_c3', title: 'Data Structures and Algorithms - Part I', desc: 'Time complexity, arrays, string manipulation, and sorting.', estHrs: 45 },
      { id: 'sde_c4', title: 'Relational Databases & SQL', desc: 'Creating schemas, indexing, joins, and aggregating data.', estHrs: 35 },
      { id: 'sde_c5', title: 'Data Structures and Algorithms - Part II', desc: 'Linked Lists, Stacks, Queues, Binary Trees, and Recursion.', estHrs: 50 },
      { id: 'sde_c6', title: 'System Design Foundations', desc: 'Caching, load balancers, rate limiting, and database partitioning.', estHrs: 40 }
    ],
    internshipAssessments: [
      { id: 'sde_ia1', title: 'SDE Coding Foundations Test', desc: 'Solve 3 algorithmic problems (arrays, hash maps, complexity) in 90 mins.', duration: '90 mins', questions: '3 Questions' }
    ],
    jobAssessments: [
      { id: 'sde_ja1', title: 'SDE Full Stack & System Design Assessment', desc: 'Advanced DSA, SQL Optimization, and System Design architecture.', duration: '180 mins', questions: '4 Parts' }
    ]
  },
  ase: {
    id: 'ase',
    title: 'Associate Software Engineer',
    category: 'engineering',
    difficulty: 'Beginner Friendly',
    focusSkill: 'Java, Basic SQL, Git Version Control',
    keyOutcome: 'Secure entry-level jobs in massive IT services and consultancy MNCs.',
    shortDesc: '20K+ openings in the last 90 days. The largest fresher hiring pipeline across IT services and consultancy.',
    description: 'Master core software fundamentals, coding syntax, version control, and relational databases. Prepares you for major service-oriented and IT solutions enterprises.',
    coursesCount: 26,
    durationDays: 120,
    indicativeCtc: '₹3.5-8 LPA',
    icon: 'code-2',
    companies: [
      { name: 'Oracle', logo: 'OR' },
      { name: 'Wipro', logo: 'WP' },
      { name: 'Infosys', logo: 'IN' },
      { name: 'TCS', logo: 'TC' }
    ],
    learnTopics: [
      'Problem Solving with Java or Python',
      'Database Fundamentals and CRUD SQL Queries',
      'Git Version Control & Github Workflows',
      'Operating Systems & Networking Concepts',
      'Agile Methodologies & Software Development Lifecycle (SDLC)',
      'Basic Web Technologies (HTML, CSS, JS)'
    ],
    courses: [
      { id: 'ase_c1', title: 'CCBP 4.0 Introduction', desc: 'Fundamentals of coding, variables, loops, and logic development.', estHrs: 20 },
      { id: 'ase_c2', title: 'Programming Foundations in Java', desc: 'Basic data types, arrays, methods, and classes in Java.', estHrs: 35 },
      { id: 'ase_c3', title: 'Introduction to SQL Databases', desc: 'Basic SELECT statements, filtering, and simple table joins.', estHrs: 25 },
      { id: 'ase_c4', title: 'Web Development Basics', desc: 'Building responsive pages using CSS Flexbox and semantic HTML.', estHrs: 25 }
    ],
    internshipAssessments: [
      { id: 'ase_ia1', title: 'ASE Fundamentals Test', desc: 'A mix of programming concepts, output tracking, and basic SQL commands.', duration: '60 mins', questions: '30 MCQs' }
    ],
    jobAssessments: [
      { id: 'ase_ja1', title: 'ASE Readiness Exam', desc: 'Validate coding speed in Java/Python, database operations, and system debugging.', duration: '120 mins', questions: '40 Questions' }
    ]
  },
  frontend: {
    id: 'frontend',
    title: 'Frontend Developer',
    category: 'web',
    difficulty: 'Intermediate',
    focusSkill: 'React JS, Next.js, Web Vitals, HTML5/CSS3',
    keyOutcome: 'Build interactive user-facing web apps for hyper-growth startups.',
    shortDesc: '8K-18K openings in the last 90 days. React remains the most in-demand frontend framework across startups.',
    description: 'Create beautiful, highly interactive web layouts. Master CSS layouts, Javascript engine principles, React frameworks, state managers, and deployment.',
    coursesCount: 31,
    durationDays: 130,
    indicativeCtc: '₹4-8 LPA',
    icon: 'layout',
    companies: [
      { name: 'Razorpay', logo: 'RP' },
      { name: 'Swiggy', logo: 'SW' },
      { name: 'Freshworks', logo: 'FW' }
    ],
    learnTopics: [
      'HTML5 Semantic Markup & CSS3 Layouts (Flexbox/Grid)',
      'Modern JavaScript (ES6+, Promises, Async/Await)',
      'React JS (Components, State, Context API, Hooks)',
      'Responsive Web Design & Tailwind CSS',
      'State Management (Redux Toolkit or Zustand)',
      'Vite & Next.js frameworks',
      'Web Performance Optimization (LCP, FID, CLS)'
    ],
    courses: [
      { id: 'front_c1', title: 'CCBP 4.0 Introduction', desc: 'Fundamentals of coding, variables, loops, and logic development.', estHrs: 20 },
      { id: 'front_c2', title: 'HTML5 & CSS3 Essentials', desc: 'Semantic layouts, CSS selectors, variables, and responsive styling.', estHrs: 25 },
      { id: 'front_c3', title: 'JavaScript Essentials', desc: 'DOM manipulation, scope, arrays, functions, and events.', estHrs: 30 },
      { id: 'front_c4', title: 'Dynamic Web Applications', desc: 'Working with Fetch API, JSON, Promises, and asynchronous scripts.', estHrs: 30 },
      { id: 'front_c5', title: 'React JS Foundations', desc: 'Creating components, managing state, hooks, lists, and forms.', estHrs: 40 },
      { id: 'front_c6', title: 'State Management and Routing', desc: 'React Router, context API, and global state management tools.', estHrs: 30 }
    ],
    internshipAssessments: [
      { id: 'front_ia1', title: 'Responsive & Dynamic Web Assessment', desc: 'Build a dynamic dashboard consuming a public API, matching a specific mockup.', duration: '120 mins', questions: 'Coding Project' }
    ],
    jobAssessments: [
      { id: 'front_ja1', title: 'React Developer Job Readiness Exam', desc: 'Complete test on React rendering cycles, custom hooks, performance optimization, and styling.', duration: '150 mins', questions: '35 Questions' }
    ]
  },
  backend_node: {
    id: 'backend_node',
    title: 'Backend Developer (Node.js)',
    category: 'web',
    difficulty: 'Intermediate',
    focusSkill: 'Node.js, Express, REST APIs, MongoDB',
    keyOutcome: 'Construct secure, high-throughput APIs for SaaS and chat platforms.',
    shortDesc: 'Powers real-time apps and high-throughput APIs at companies like Netflix, LinkedIn, and PayPal.',
    description: 'Design robust APIs, build microservices, manage databases, and write efficient asynchronous backend scripts in Node.js and Express.',
    coursesCount: 33,
    durationDays: 140,
    indicativeCtc: '₹6-16 LPA',
    icon: 'database',
    companies: [
      { name: 'Netflix', logo: 'NF' },
      { name: 'LinkedIn', logo: 'LI' },
      { name: 'PayPal', logo: 'PP' }
    ],
    learnTopics: [
      'Node.js Runtime & Asynchronous Event-Driven Loop',
      'RESTful API design with Express.js',
      'Relational (SQL) and Non-Relational (MongoDB) databases',
      'User Authentication (JWT, OAuth) and Security best practices',
      'WebSockets for real-time bidirectional communication',
      'API Testing with Jest and Postman'
    ],
    courses: [
      { id: 'node_c1', title: 'CCBP 4.0 Introduction', desc: 'Fundamentals of coding, variables, loops, and logic development.', estHrs: 20 },
      { id: 'node_c2', title: 'JavaScript Advanced concepts', desc: 'Closure, prototype, event loop, and asynchronous JavaScript.', estHrs: 25 },
      { id: 'node_c3', title: 'Introduction to Node.js & Express', desc: 'Setting up servers, handling requests, and basic routing.', estHrs: 30 },
      { id: 'node_c4', title: 'Database Integration (SQL/NoSQL)', desc: 'Connecting databases, running queries, indexing, and ORMs.', estHrs: 35 },
      { id: 'node_c5', title: 'API Authentication & Testing', desc: 'Implementing JWT cookies, encryption, middleware, and unit tests.', estHrs: 30 }
    ],
    internshipAssessments: [
      { id: 'node_ia1', title: 'REST API Design Challenge', desc: 'Implement a secure CRUD API with query filtering, validation, and test cases.', duration: '120 mins', questions: 'Coding Task' }
    ],
    jobAssessments: [
      { id: 'node_ja1', title: 'Node.js Backend Readiness Test', desc: 'Covers concurrency, token validation, indexing performance, and database locking.', duration: '150 mins', questions: '40 MCQs + Coding' }
    ]
  },
  backend_python: {
    id: 'backend_python',
    title: 'Backend Developer (Python)',
    category: 'web',
    difficulty: 'Intermediate',
    focusSkill: 'Python, FastAPI, Django, Redis Caching',
    keyOutcome: 'Develop rapid backend logic for AI-first products and FinTech startups.',
    shortDesc: 'The go-to backend stack for AI-first products, fintech, and data-heavy platforms. Django and FastAPI.',
    description: 'Learn to build scalable server backends using Python. Master Django, FastAPI, database query optimization, background jobs, and caching.',
    coursesCount: 27,
    durationDays: 140,
    indicativeCtc: '₹6-18 LPA',
    icon: 'server',
    companies: [
      { name: 'Instagram', logo: 'IG' },
      { name: 'Robinhood', logo: 'RH' },
      { name: 'Pinterest', logo: 'PI' }
    ],
    learnTopics: [
      'Advanced Object-Oriented Python',
      'Web Frameworks: Django and FastAPI',
      'ORM Concepts & SQL optimization',
      'Asynchronous task queues using Celery & Redis',
      'API Versioning and Documentation (Swagger/OpenAPI)',
      'Caching structures with Redis'
    ],
    courses: [
      { id: 'py_c1', title: 'CCBP 4.0 Introduction', desc: 'Fundamentals of coding, variables, loops, and logic development.', estHrs: 20 },
      { id: 'py_c2', title: 'Python Intermediate & OOP', desc: 'Classes, decorators, generators, and exception handling.', estHrs: 30 },
      { id: 'py_c3', title: 'FastAPI Fundamentals', desc: 'Building lightweight, rapid asynchronous APIs with type safety.', estHrs: 30 },
      { id: 'py_c4', title: 'Django Web Framework', desc: 'Models, views, templates, Django ORM, admin panel, and routing.', estHrs: 40 },
      { id: 'py_c5', title: 'Caching & Celery Queues', desc: 'Offloading tasks, setting up Celery workers, and caching queries.', estHrs: 30 }
    ],
    internshipAssessments: [
      { id: 'py_ia1', title: 'FastAPI CRUD Assessment', desc: 'Build an API service managing user profiles with SQLModel and migration files.', duration: '90 mins', questions: 'Coding Task' }
    ],
    jobAssessments: [
      { id: 'py_ja1', title: 'Python Backend Readiness Assessment', desc: 'Advanced assessment on ORM optimizations, async loops, security, and caching.', duration: '180 mins', questions: '3 Coding Challenges' }
    ]
  },
  backend_java: {
    id: 'backend_java',
    title: 'Backend Developer (Java)',
    category: 'web',
    difficulty: 'Advanced',
    focusSkill: 'Spring Boot, Microservices, JPA Hibernate',
    keyOutcome: 'Architect high-scale microservices for banking, e-commerce, and enterprise giants.',
    shortDesc: 'The enterprise standard for banking, e-commerce, and large-scale systems. Spring Boot remains the king.',
    description: 'Gain expert command over enterprise backend development. Master OOP Java, Spring Boot, Spring Security, microservices, and hibernate JPA.',
    coursesCount: 25,
    durationDays: 150,
    indicativeCtc: '₹5-15 LPA',
    icon: 'coffee',
    companies: [
      { name: 'Amazon', logo: 'AM' },
      { name: 'JPMorgan', logo: 'JP' },
      { name: 'Capgemini', logo: 'CG' }
    ],
    learnTopics: [
      'Java Programming & JVM Memory Architecture',
      'Spring Framework & Spring Boot microservices',
      'Hibernate ORM & JPA Repositories',
      'Spring Security & OAuth2 token validations',
      'Kafka / RabbitMQ Message Brokers',
      'Distributed Systems and Service Discovery'
    ],
    courses: [
      { id: 'java_c1', title: 'CCBP 4.0 Introduction', desc: 'Fundamentals of coding, variables, loops, and logic development.', estHrs: 20 },
      { id: 'java_c2', title: 'Object-Oriented Programming in Java', desc: 'Inheritance, interfaces, polymorphism, abstraction, collections.', estHrs: 35 },
      { id: 'java_c3', title: 'Spring Boot Basics', desc: 'Auto-configuration, REST controllers, Dependency Injection.', estHrs: 35 },
      { id: 'java_c4', title: 'JPA Repositories & Data JPA', desc: 'Hibernate entities, database mapping, relationships, transactions.', estHrs: 30 },
      { id: 'java_c5', title: 'Spring Security & JWT', desc: 'Authentication filters, role authorizations, CORS, and tokens.', estHrs: 30 }
    ],
    internshipAssessments: [
      { id: 'java_ia1', title: 'Spring Boot REST Challenge', desc: 'Create a microservice endpoint managing resource inventory with H2 Database.', duration: '120 mins', questions: 'Coding Task' }
    ],
    jobAssessments: [
      { id: 'java_ja1', title: 'Java Enterprise Developer Exam', desc: 'Evaluates microservice integration, thread concurrency, JDBC optimizations, and security.', duration: '180 mins', questions: '45 Questions' }
    ]
  },
  data_analyst: {
    id: 'data_analyst',
    title: 'Data Analyst',
    category: 'data',
    difficulty: 'Beginner Friendly',
    focusSkill: 'SQL, Advanced Excel, Pandas, Power BI',
    keyOutcome: 'Extract business insights and translate data into board-ready reports.',
    shortDesc: 'One of the fastest-growing tech roles, with ~45% YoY job growth. SQL, Excel, and Power BI/Tableau form the core.',
    description: 'Transform raw data into meaningful business insights. Learn SQL querying, data cleaning with Python, Excel formulas, and visualization in Power BI.',
    coursesCount: 18,
    durationDays: 90,
    indicativeCtc: '₹4-10 LPA',
    icon: 'bar-chart',
    companies: [
      { name: 'Mu Sigma', logo: 'MS' },
      { name: 'Fractal Analytics', logo: 'FA' },
      { name: 'Deloitte', logo: 'DE' }
    ],
    learnTopics: [
      'Advanced Excel (VLOOKUP, Pivot Tables, Macros)',
      'SQL Querying (Subqueries, Window Functions, Joins)',
      'Python Data Libraries (NumPy, Pandas, Matplotlib)',
      'Data Visualization (Power BI / Tableau)',
      'Statistical Analysis & Descriptive Mathematics',
      'Reporting & Presentation Skills'
    ],
    courses: [
      { id: 'da_c1', title: 'CCBP 4.0 Introduction', desc: 'Fundamentals of coding, variables, loops, and logic development.', estHrs: 20 },
      { id: 'da_c2', title: 'Advanced SQL Querying', desc: 'Window functions, CTEs, self-joins, query profiling.', estHrs: 30 },
      { id: 'da_c3', title: 'Excel for Analytics', desc: 'Data cleaning, logical functions, charts, and pivot dashboards.', estHrs: 25 },
      { id: 'da_c4', title: 'Data Analysis with Python', desc: 'Using Pandas for cleaning data, merging datasets, and aggregates.', estHrs: 35 },
      { id: 'da_c5', title: 'Data Visualization & Power BI', desc: 'Designing dashboard panels, relationships, DAX formulas.', estHrs: 30 }
    ],
    internshipAssessments: [
      { id: 'da_ia1', title: 'SQL & Excel analytics assessment', desc: 'Clean a dirty sales database and generate summary insights in 90 mins.', duration: '90 mins', questions: 'Data Project' }
    ],
    jobAssessments: [
      { id: 'da_ja1', title: 'Data Analytics Readiness Exam', desc: 'Solve complex business case studies using SQL scripts, python notebook syntax, and visualizations.', duration: '120 mins', questions: '3 Case Studies' }
    ]
  }
};

const MOCK_JOBS = {
  internship: [
    { title: 'Frontend Developer Intern', company: 'Swiggy', logo: 'SW', location: 'Bengaluru (On-site)', stipend: '₹25,000 /mo', tags: ['React', 'JavaScript', 'HTML/CSS'] },
    { title: 'Software Engineer Intern', company: 'Goldman Sachs', logo: 'GS', location: 'Hyderabad (Hybrid)', stipend: '₹45,000 /mo', tags: ['Java', 'Algorithms', 'SQL'] },
    { title: 'Backend Developer Intern', company: 'Freshworks', logo: 'FW', location: 'Chennai (On-site)', stipend: '₹20,000 /mo', tags: ['Node.js', 'Express', 'API'] },
    { title: 'Python Backend Intern', company: 'Instagram', logo: 'IG', location: 'Bengaluru (On-site)', stipend: '₹35,000 /mo', tags: ['Python', 'FastAPI', 'Redis'] },
    { title: 'Data Analytics Intern', company: 'Fractal Analytics', logo: 'FA', location: 'Mumbai (Hybrid)', stipend: '₹22,000 /mo', tags: ['Excel', 'SQL', 'Pandas'] }
  ],
  jobs: [
    { title: 'Associate Software Engineer', company: 'Oracle', logo: 'OR', location: 'Bengaluru (On-site)', salary: '₹9 - 14 LPA', tags: ['Java', 'Spring Boot', 'SQL'] },
    { title: 'Frontend Engineer (React)', company: 'Razorpay', logo: 'RP', location: 'Bengaluru (Hybrid)', salary: '₹12 - 18 LPA', tags: ['React', 'Tailwind', 'Redux'] },
    { title: 'Software Engineer - Backend', company: 'Uber', logo: 'UB', location: 'Hyderabad (On-site)', salary: '₹16 - 28 LPA', tags: ['System Design', 'Algorithms', 'Node.js'] },
    { title: 'Backend Developer', company: 'Pinterest', logo: 'PI', location: 'Bengaluru (Remote)', salary: '₹14 - 22 LPA', tags: ['Python', 'Django', 'PostgreSQL'] },
    { title: 'Financial Systems Engineer', company: 'PayPal', logo: 'PP', location: 'Chennai (Hybrid)', salary: '₹15 - 24 LPA', tags: ['C++', 'Java', 'APIs'] },
    { title: 'Data Analyst', company: 'Deloitte', logo: 'DE', location: 'Delhi NCR (On-site)', salary: '₹7 - 11 LPA', tags: ['Power BI', 'SQL', 'Excel'] }
  ]
};

// INITIAL PORTAL STATE
const DEFAULT_STATE = {
  activeRoleId: null,
  currentSubTab: 'all',
  onboardingDismissed: false,
  alwaysShowOnboarding: false,
  quizState: {
    step: 0,
    answers: { interest: null, experience: null, goal: null },
    recommendedRoleId: null
  },
  rolesProgress: {
    frontend: {
      enrolledAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      timeSpentHours: 14.5,
      courseProgress: {
        front_c1: 100,
        front_c2: 100,
        front_c3: 40,
        front_c4: 0,
        front_c5: 0,
        front_c6: 0
      },
      internshipStatus: 'available',
      jobReadinessStatus: 'locked',
      certificateEarned: false,
      boardsUnlocked: {
        internship: false,
        jobs: false
      }
    },
    sde: {
      enrolledAt: null,
      timeSpentHours: 0,
      courseProgress: {
        sde_c1: 0,
        sde_c2: 0,
        sde_c3: 0,
        sde_c4: 0,
        sde_c5: 0,
        sde_c6: 0
      },
      internshipStatus: 'locked',
      jobReadinessStatus: 'locked',
      certificateEarned: false,
      boardsUnlocked: {
        internship: false,
        jobs: false
      }
    },
    ase: {
      enrolledAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      timeSpentHours: 3.5,
      courseProgress: {
        ase_c1: 100,
        ase_c2: 20,
        ase_c3: 0,
        ase_c4: 0
      },
      internshipStatus: 'locked',
      jobReadinessStatus: 'locked',
      certificateEarned: false,
      boardsUnlocked: {
        internship: false,
        jobs: false
      }
    }
  }
};

function getEnrichedRoleCourses(roleId) {
  const role = ROLES_METADATA[roleId];
  if (!role) return [];
  if (role._enrichedCourses) return role._enrichedCourses;

  const baseCourses = role.courses || [];
  const enriched = [];

  const defaultSkillsMap = {
    sde: ['Algorithms', 'Data Structures', 'SQL', 'System Design', 'Caching', 'CI/CD Pipelines', 'Docker', 'AWS Cloud', 'High Availability', 'Load Balancing', 'Microservices', 'Production Scale'],
    ase: ['Programming basics', 'Java syntax', 'SQL querying', 'Git Version Control', 'Software development lifecycle', 'Agile principles', 'Network architectures', 'Operating systems', 'Testing & Debugging', 'Command line interface', 'Code deployment', 'IT consultation'],
    frontend: ['HTML5 Semantics', 'CSS3 Layouts', 'Responsive design', 'Tailwind CSS', 'ES6 JavaScript', 'Asynchronous APIs', 'React components', 'State Management', 'Zustand & Context', 'Next.js frameworks', 'Core Web Vitals', 'Testing components'],
    backend_node: ['Node.js core', 'Express.js patterns', 'Asynchronous callbacks', 'MongoDB database', 'SQL database', 'REST APIs', 'JWT Authentication', 'API Security', 'Unit testing Jest', 'Docker environments', 'Redis caching', 'WebSocket protocols'],
    backend_python: ['Python syntax', 'Object-Oriented Python', 'FastAPI framework', 'RESTful routing', 'SQL databases', 'Django ORM', 'Relational joins', 'Redis integration', 'Celery tasks', 'Dockerization', 'Unit testing Pytest', 'API deployment'],
    backend_java: ['Java basics', 'Java OOP inheritance', 'JVM memory structure', 'SQL & JDBC', 'Hibernate ORM', 'Spring Boot', 'Spring MVC API', 'Spring Security JWT', 'JUnit test suites', 'Docker container', 'Microservices architectural style', 'Kubernetes'],
    data_analyst: ['Excel charts & formulas', 'SQL CRUD operations', 'SQL database aggregation', 'Data cleaning', 'Pandas dataframes', 'NumPy operations', 'Matplotlib graphs', 'Tableau dashboards', 'Power BI reports', 'A/B testing basics', 'Statistical metrics', 'Data presentation']
  };

  const roleSkills = defaultSkillsMap[roleId] || ['Software Engineering', 'Technical Skills'];
  const maxCourses = roleId === 'sde' ? 21 : 12;

  for (let i = 0; i < maxCourses; i++) {
    if (i < baseCourses.length) {
      const bc = baseCourses[i];
      let skills = bc.skills || [
        roleSkills[i % roleSkills.length],
        roleSkills[(i + 1) % roleSkills.length],
        roleSkills[(i + 2) % roleSkills.length]
      ];
      
      // Customize base course skills for SDE
      if (roleId === 'sde') {
        const sdeBaseSkills = {
          0: ['Coding Logic', 'Variables', 'Loops', 'Programming Foundations'],
          1: ['Python Syntax', 'Writing Scripts', 'Python Functions', 'Basic Scripting'],
          2: ['Arrays', 'String Manipulation', 'Sorting Algorithms', 'Complexity Bounds'],
          3: ['SQL Queries', 'Database Schemas', 'Indexes', 'Table Joins'],
          4: ['Linked Lists', 'Stacks & Queues', 'Binary Trees', 'Recursion'],
          5: ['System Caching', 'Load Balancing', 'Rate Limiting', 'Database Sharding']
        };
        if (sdeBaseSkills[i]) {
          skills = sdeBaseSkills[i];
        }
      }

      const topicsList = bc.topicsList || [
        {
          title: 'Foundations of ' + bc.title,
          units: ['Syntactic Overview', 'Variable Mappings', 'Control Flows']
        },
        {
          title: bc.title + ' in Practice',
          units: ['API Implementations', 'State Tracking', 'Asynchronous Operations']
        },
        {
          title: 'Debugging & Testing',
          units: ['Writing Unit Tests', 'Error Identification', 'Profile Analytics']
        }
      ];

      enriched.push({
        ...bc,
        skills,
        topicsList
      });
    } else {
      const courseNum = i + 1;
      let cTitle = '';
      let cDesc = '';
      
      if (roleId === 'sde') {
        const sdeTitles = [
          'Advanced Algorithms & Dynamic Programming', // sde_c7
          'HTML5 Semantics & Responsive Layouts',      // sde_c8
          'Modern Javascript (ES6+)',                  // sde_c9
          'React JS Component Architecture',            // sde_c10
          'Next.js Framework & Server Side Rendering', // sde_c11
          'NoSQL Databases & High Availability',       // sde_c12
          'CI/CD Pipelines & DevOps Fundamentals',     // sde_c13
          'Docker & Containerization',                 // sde_c14
          'Cloud Deployments & Infrastructure',        // sde_c15
          'Quantitative Aptitude & Logic',             // sde_c16
          'Verbal & Written Corporate Communication',   // sde_c17
          'Resume Building & Mock Interviews',         // sde_c18
          'Prompt Engineering & LLM APIs',             // sde_c19
          'Retrieval-Augmented Generation (RAG)',      // sde_c20
          'AI Agent Design & Multi-Agent Frameworks'   // sde_c21
        ];
        cTitle = sdeTitles[i - baseCourses.length] || `Advanced SDE Topic ${courseNum}`;
        cDesc = `Deep dive into advanced architectures, performance characteristics, and industry standards for ${cTitle.toLowerCase()}.`;
      } else if (roleId === 'ase') {
        const aseTitles = [
          'Introduction to Git & GitHub',
          'Operating Systems Basics',
          'Computer Networks Essentials',
          'Software Development Lifecycle (SDLC)',
          'Agile & Scrum Methodologies',
          'Basic Web Debugging',
          'Testing Principles',
          'IT Systems Capstone'
        ];
        cTitle = aseTitles[i - baseCourses.length] || `Associate Developer Topic ${courseNum}`;
        cDesc = `Comprehensive overview of practical tools and conceptual understanding of ${cTitle.toLowerCase()}.`;
      } else if (roleId === 'frontend') {
        const frontTitles = [
          'CSS Flexbox & Responsive Layouts',
          'React JS Hooks & Context API',
          'Zustand & Redux State Managers',
          'Next.js & Server Side Rendering',
          'Web Performance & Core Web Vitals',
          'Testing React Components (Jest)',
          'Frontend Deployment Workflows',
          'Advanced Frontend Capstone'
        ];
        cTitle = frontTitles[i - baseCourses.length] || `Frontend Advanced Topic ${courseNum}`;
        cDesc = `Learn production-ready paradigms, component architecture, and runtime optimization for ${cTitle.toLowerCase()}.`;
      } else if (roleId === 'backend_node') {
        const nodeTitles = [
          'Asynchronous Callbacks & Event Loop',
          'RESTful routing & Express templates',
          'MongoDB aggregation & pipelines',
          'JWT Authentication & Session management',
          'API Testing & Jest frameworks',
          'Docker container environment',
          'Redis integrations & caching',
          'WebSockets & live sync capstone'
        ];
        cTitle = nodeTitles[i - baseCourses.length] || `Backend Node Topic ${courseNum}`;
        cDesc = `Detailed structures, security practices, and deployment architectures for ${cTitle.toLowerCase()}.`;
      } else if (roleId === 'backend_python') {
        const pyTitles = [
          'Object-Oriented programming in Python',
          'FastAPI endpoints & dependency injection',
          'Django ORM & SQL generation',
          'Redis integrations & task queuing',
          'Dockerizing Python backends',
          'Testing with Pytest',
          'Relational database designs',
          'Backend Python Capstone'
        ];
        cTitle = pyTitles[i - baseCourses.length] || `Backend Python Topic ${courseNum}`;
        cDesc = `Detailed performance structures, security protocols, and cloud scaling strategies for ${cTitle.toLowerCase()}.`;
      } else if (roleId === 'backend_java') {
        const javaTitles = [
          'Java OOP, interfaces & classes',
          'JVM memory allocations',
          'JDBC databases & table relations',
          'Spring Boot API development',
          'Spring Security & JWT protocols',
          'Testing Spring Boot with JUnit',
          'Microservices communication patterns',
          'Kubernetes SRE Capstone'
        ];
        cTitle = javaTitles[i - baseCourses.length] || `Backend Java Topic ${courseNum}`;
        cDesc = `Enterprise API structures, design patterns, testing suites, and SRE operations for ${cTitle.toLowerCase()}.`;
      } else if (roleId === 'data_analyst') {
        const daTitles = [
          'SQL querying & data aggregation',
          'Advanced database designs',
          'Tableau visualization & analytics',
          'Power BI templates & metrics',
          'Python data science libraries',
          'Pandas dataframes & cleaning',
          'NumPy arrays & numerical maths',
          'Data Analyst Capstone'
        ];
        cTitle = daTitles[i - baseCourses.length] || `Data Analyst Topic ${courseNum}`;
        cDesc = `Business metrics reporting, chart representations, pipeline automations, and presentation models for ${cTitle.toLowerCase()}.`;
      } else {
        cTitle = `Advanced Skill Course ${courseNum}`;
        cDesc = `Advanced elective covering the modern standards, API tools, and scalable algorithms for this professional path.`;
      }

      let skills = [
        roleSkills[i % roleSkills.length],
        roleSkills[(i + 1) % roleSkills.length],
        roleSkills[(i + 2) % roleSkills.length]
      ];

      // Custom skills mapping for SDE generated courses
      if (roleId === 'sde') {
        const sdeSkillsMap = {
          6: ['Greedy Algorithms', 'Backtracking', 'Dynamic Programming', 'Complexity Bounds'],
          7: ['HTML5 Semantics', 'CSS Grid & Flexbox', 'Media Queries', 'Responsive Styling'],
          8: ['ES6 Syntax', 'Asynchronous JS', 'Fetch API', 'DOM Manipulation'],
          9: ['React Hooks', 'State Management', 'Virtual DOM', 'Reconciliation'],
          10: ['Next.js', 'Server-Side Rendering', 'Static Site Generation', 'Web Vitals'],
          11: ['MongoDB', 'Cassandra', 'Replication', 'Database Sharding'],
          12: ['Git', 'CI/CD Pipelines', 'DevOps Principles', 'Automated Testing'],
          13: ['Docker', 'Containers', 'Container Orchestration', 'Image Optimization'],
          14: ['AWS Cloud', 'Cloud Architecture', 'Scalable Deployments', 'Serverless'],
          15: ['Numerical Logic', 'Aptitude Solving', 'Pattern Analysis', 'Critical Thinking'],
          16: ['Corporate Skills', 'Interview Prep', 'Technical Writing', 'Public Speaking'],
          17: ['Resume Optimization', 'Self Marketing', 'Soft Skills', 'Whiteboard Coding'],
          18: ['Prompt Tuning', 'OpenAI API', 'Gemini API', 'Structured Output'],
          19: ['Vector Databases', 'Embedding Models', 'RAG Architectures', 'Information Retrieval'],
          20: ['AI Agents', 'Tool Use', 'LangChain', 'Agent Autonomy']
        };
        if (sdeSkillsMap[i]) {
          skills = sdeSkillsMap[i];
        }
      }

      const topicsList = [
        {
          title: `Introduction to ${cTitle}`,
          units: ['Conceptual Basics', 'Setting up Environment', 'Initial Sandbox']
        },
        {
          title: `Core Mechanics of ${cTitle}`,
          units: ['In-depth Syntaxes', 'State Synchronization', 'Best Practices']
        },
        {
          title: `Testing & Deployment`,
          units: ['Validating Code Coverage', 'Production Configurations', 'Release Management']
        }
      ];

      enriched.push({
        id: `${roleId}_c${courseNum}`,
        title: cTitle,
        desc: cDesc,
        estHrs: 25 + (i * 3) % 15,
        skills: skills,
        topicsList: topicsList
      });
    }
  }

  role._enrichedCourses = enriched;
  return enriched;
}

class AppState {
  constructor() {
    this.storageKey = 'nw_portal_journey_state_v3';
    this.state = this.loadState();
  }

  loadState() {
    // Enrich all roles first
    Object.keys(ROLES_METADATA).forEach(roleId => {
      ROLES_METADATA[roleId].courses = getEnrichedRoleCourses(roleId);
    });

    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.rolesProgress) parsed.rolesProgress = {};
        if (parsed.activeRoleId && !ROLES_METADATA[parsed.activeRoleId]) {
          parsed.activeRoleId = null;
        }
        Object.keys(ROLES_METADATA).forEach(roleId => {
          if (!parsed.rolesProgress[roleId]) {
            parsed.rolesProgress[roleId] = this.initRoleProgress(roleId);
          } else {
            const progress = parsed.rolesProgress[roleId];
            const role = ROLES_METADATA[roleId];
            
            if (progress.timeSpentHours === undefined) progress.timeSpentHours = 0;
            if (progress.internshipStatus === undefined) progress.internshipStatus = 'locked';
            if (progress.jobReadinessStatus === undefined) progress.jobReadinessStatus = 'locked';
            if (progress.certificateEarned === undefined) progress.certificateEarned = false;
            
            if (!progress.boardsUnlocked) {
              progress.boardsUnlocked = { internship: false, jobs: false };
            } else {
              if (progress.boardsUnlocked.internship === undefined) progress.boardsUnlocked.internship = false;
              if (progress.boardsUnlocked.jobs === undefined) progress.boardsUnlocked.jobs = false;
            }

            if (!progress.courseProgress) {
              progress.courseProgress = {};
            }
            role.courses.forEach(c => {
              if (progress.courseProgress[c.id] === undefined) {
                progress.courseProgress[c.id] = 0;
              }
            });
          }
        });
        if (!parsed.currentSubTab) parsed.currentSubTab = 'all';
        if (parsed.onboardingDismissed === undefined) parsed.onboardingDismissed = false;
        if (parsed.alwaysShowOnboarding === undefined) parsed.alwaysShowOnboarding = false;
        if (!parsed.quizState) {
          parsed.quizState = { step: 0, answers: { interest: null, experience: null, goal: null }, recommendedRoleId: null };
        }
        return parsed;
      }
    } catch (e) {
      console.warn("Could not read localstorage state", e);
    }
    
    const initial = JSON.parse(JSON.stringify(DEFAULT_STATE));
    Object.keys(ROLES_METADATA).forEach(roleId => {
      if (!initial.rolesProgress[roleId]) {
        initial.rolesProgress[roleId] = this.initRoleProgress(roleId);
      } else {
        // Guarantee default loaded roles have full progress maps
        const role = ROLES_METADATA[roleId];
        role.courses.forEach(c => {
          if (initial.rolesProgress[roleId].courseProgress[c.id] === undefined) {
            initial.rolesProgress[roleId].courseProgress[c.id] = 0;
          }
        });
      }
    });
    return initial;
  }

  initRoleProgress(roleId) {
    const role = ROLES_METADATA[roleId];
    const courseProgress = {};
    role.courses.forEach(c => {
      courseProgress[c.id] = 0;
    });
    return {
      enrolledAt: null,
      timeSpentHours: 0,
      courseProgress: courseProgress,
      internshipStatus: 'available',
      jobReadinessStatus: 'available',
      certificateEarned: false,
      boardsUnlocked: {
        internship: false,
        jobs: false
      }
    };
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.error("Could not write to localstorage", e);
    }
  }

  enrollInRole(roleId) {
    const progress = this.state.rolesProgress[roleId];
    if (!progress.enrolledAt) {
      progress.enrolledAt = new Date().toISOString();
    }
    this.state.activeRoleId = roleId;
    
    // Assessments are open from the start
    if (progress.internshipStatus === 'locked') progress.internshipStatus = 'available';
    if (progress.jobReadinessStatus === 'locked') progress.jobReadinessStatus = 'available';

    this.saveState();
  }

  updateCourseProgress(roleId, courseId, val) {
    const progress = this.state.rolesProgress[roleId];
    progress.courseProgress[courseId] = val;
    if (val > 0) {
      progress.timeSpentHours += 1.5;
    }
    this.saveState();
  }

  increaseStudyTime(roleId, hrs) {
    const progress = this.state.rolesProgress[roleId];
    progress.timeSpentHours += hrs;
    this.saveState();
  }

  setAssessmentResult(roleId, isInternship, didPass) {
    const progress = this.state.rolesProgress[roleId];
    if (isInternship) {
      if (didPass) {
        progress.internshipStatus = 'passed';
        progress.boardsUnlocked.internship = true;
      } else {
        progress.internshipStatus = 'failed';
      }
    } else {
      if (didPass) {
        progress.jobReadinessStatus = 'passed';
        progress.boardsUnlocked.jobs = true;
        progress.certificateEarned = true;
      } else {
        progress.jobReadinessStatus = 'failed';
      }
    }
    this.saveState();
  }

  resetAll() {
    localStorage.removeItem(this.storageKey);
    this.state = this.loadState();
    this.state.activeRoleId = null;
    this.state.currentSubTab = 'all';
    this.state.quizState = { step: 0, answers: { interest: null, experience: null, goal: null }, recommendedRoleId: null };
    this.saveState();
  }
}

const GROWTH_CYCLES_DATA = [
  {
    id: 1,
    title: "Projects Champ Growth Cycle",
    duration: "78 days",
    progress: 23,
    courses: [
      {
        number: 1,
        title: "Welcome to Academy",
        desc: "Welcome to Academy",
        topics: "12 Topics",
        progress: 92,
        icon: "ccbp",
        tags: []
      },
      {
        number: 2,
        title: "Build Your Own Static Website",
        desc: "Build a static website that appears beautifully on desktop, mobile, and tablets.",
        topics: "12 Topics",
        progress: 23,
        icon: "globe",
        tags: ["HTML"]
      },
      {
        number: 3,
        title: "Build Your Own Responsive Website",
        desc: "Build a responsive website that appears beautifully on screens of all sizes.",
        topics: "11 Topics",
        progress: 13,
        icon: "responsive",
        tags: ["HTML"]
      }
    ]
  },
  {
    id: 2,
    title: "Programming Master Growth Cycle",
    duration: "( Jun 29 - Feb 14 ) · 198 days",
    progress: 62,
    courses: [
      {
        number: 1,
        title: "Introduction to Databases",
        desc: "Learn about the incredibly prevalent databases today and query them using SQL.",
        topics: "13 Topics",
        progress: 78,
        icon: "database",
        tags: []
      },
      {
        number: 2,
        title: "Programming Foundations",
        desc: "Learning to code is useful no matter what your ultimate career goals are.",
        topics: "22 Topics",
        progress: 43,
        icon: "gear-code",
        tags: ["PYTHON"]
      }
    ]
  },
  {
    id: 3,
    title: "Dynamic Websites Creator Growth Cycle",
    duration: "174 days",
    progress: 13,
    courses: [
      {
        number: 1,
        title: "Programming Foundations",
        desc: "Learning to code is useful no matter what your ultimate career goals are.",
        topics: "22 Topics",
        progress: 43,
        icon: "gear-code",
        tags: ["PYTHON"]
      },
      {
        number: 2,
        title: "Build Your Own Dynamic Web Application",
        desc: "In this course, you will understand the basics of writing scripts in Javascript.",
        topics: "13 Topics",
        progress: 17,
        icon: "monitor",
        tags: ["HTML", "CSS", "JAVASCRIPT"]
      }
    ]
  },
  {
    id: 4,
    title: "Full Stack Foundations Growth cycle",
    duration: "90 days",
    progress: 8,
    courses: [
      {
        number: 1,
        title: "JavaScript Essentials",
        desc: "In this course, you will learn the concepts like variables, loops, objects, and arrays.",
        topics: "7 Topics",
        progress: 2,
        icon: "javascript",
        tags: ["JAVASCRIPT"]
      },
      {
        number: 2,
        title: "Responsive Web Design using Flexbox",
        desc: "This course will help you to develop responsive pages using Flexbox layout model.",
        topics: "9 Topics",
        progress: 13,
        icon: "responsive",
        tags: ["FLEXBOX"]
      }
    ]
  },
  {
    id: 5,
    title: "Full Stack Advanced Growth cycle",
    duration: "192 days",
    progress: 39,
    courses: [
      {
        number: 1,
        title: "Developer Foundations",
        desc: "You will learn the essentials of Operating systems, terminals, git commands, and workflows.",
        topics: "4 Topics",
        progress: 73,
        icon: "monitor",
        tags: ["GIT"]
      },
      {
        number: 2,
        title: "Node JS",
        desc: "In this course, you'll learn how to build backend servers and APIs using Node.js.",
        topics: "9 Topics",
        progress: 13,
        icon: "nodejs",
        tags: ["NODE JS"]
      },
      {
        number: 3,
        title: "React JS - Getting started",
        desc: "In this course, you will learn how to build interactive user interfaces using React Components.",
        topics: "18 Topics",
        progress: 32,
        icon: "react",
        tags: ["REACT JS"]
      }
    ]
  },
  {
    id: 6,
    title: "Elementary CP Growth cycle",
    duration: "320 days",
    progress: 15,
    courses: [
      {
        number: 1,
        title: "Phase 1 : Data Structures and Algorithms",
        desc: "Build strong foundations in data structures and algorithm analysis techniques.",
        topics: "19 Topics",
        progress: 30,
        icon: "cubes",
        tags: ["LINKED LISTS"]
      },
      {
        number: 2,
        title: "Phase 2 : Advanced DSA",
        desc: "Enhance your skills in organizing and processing data structure configurations.",
        topics: "14 Topics",
        progress: 0,
        icon: "cubes",
        tags: ["DYNAMIC PROGRAMMING (DP)"]
      }
    ]
  },
  {
    id: 7,
    title: "DS/ML Growth Cycle",
    duration: "119 days",
    progress: 15,
    courses: [
      {
        number: 1,
        title: "Descriptive Statistics & EDA",
        desc: "Learn basics of Descriptive Statistics and dive deep into Exploratory Data Analysis.",
        topics: "4 Topics",
        progress: 68,
        icon: "cubes",
        tags: []
      },
      {
        number: 2,
        title: "Introduction to Probability and Distributions",
        desc: "This course covers the basics of probability theory and structural distributions.",
        topics: "3 Topics",
        progress: 10,
        icon: "probability",
        tags: []
      },
      {
        number: 3,
        title: "Inferential Statistics",
        desc: "Dive into the world of inferential statistics with tests, hypotheses, and confidence.",
        topics: "3 Topics",
        progress: 2,
        icon: "chart",
        tags: []
      },
      {
        number: 4,
        title: "Mathematics Fundamentals",
        desc: "This course provides a comprehensive review of coordinate algebra, lines, and calculus basics.",
        topics: "2 Topics",
        progress: 16,
        icon: "writing",
        tags: []
      },
      {
        number: 5,
        title: "Math For ML Revision",
        desc: "This course covers the all the important topics of Linear Algebra and Vector Spaces.",
        topics: "1 Topic",
        progress: 0,
        icon: "chip",
        tags: []
      },
      {
        number: 6,
        title: "Introduction to ML and Classification...",
        desc: "Build a solid foundation in machine learning by exploring regression, loss functions, and classification...",
        topics: "9 Topics",
        progress: 6,
        icon: "gear-code",
        tags: []
      },
      {
        number: 7,
        title: "Supervised Learning: Classification",
        desc: "Learn to build and fine-tune machine learning classification systems.",
        topics: "8 Topics",
        progress: 0,
        icon: "chart",
        tags: []
      },
      {
        number: 8,
        title: "Supervised Learning: Regression",
        desc: "Develop regression models that estimate continuous target outputs using modern models.",
        topics: "12 Topics",
        progress: 0,
        icon: "chart",
        tags: []
      }
    ]
  }
];

// UI RENDERING CONTROLLER
const AppUI = {
  appState: new AppState(),
  useNewStructure: false,

  getCourseIcon(title) {
    const t = title.toLowerCase();
    if (t.includes('ccbp') || t.includes('intro') || t.includes('basic') || t.includes('programming')) return 'code';
    if (t.includes('data structures') || t.includes('dsa') || t.includes('algorithm')) return 'binary';
    if (t.includes('node') || t.includes('express') || t.includes('server') || t.includes('backend') || t.includes('spring') || t.includes('java')) return 'server';
    if (t.includes('sql') || t.includes('database') || t.includes('integration')) return 'database';
    if (t.includes('html') || t.includes('css') || t.includes('tail') || t.includes('design') || t.includes('responsive') || t.includes('js') || t.includes('react') || t.includes('frontend')) return 'layout';
    if (t.includes('git') || t.includes('version') || t.includes('github') || t.includes('branch')) return 'git-branch';
    if (t.includes('system design') || t.includes('distributed') || t.includes('pattern')) return 'git-commit';
    if (t.includes('docker') || t.includes('kubernetes') || t.includes('cloud') || t.includes('devops') || t.includes('aws') || t.includes('pipeline')) return 'cloud';
    if (t.includes('prompt') || t.includes('ai') || t.includes('llm') || t.includes('rag') || t.includes('sparkles') || t.includes('vector')) return 'sparkles';
    if (t.includes('excel') || t.includes('numpy') || t.includes('pandas') || t.includes('data science') || t.includes('machine learning')) return 'bar-chart-2';
    if (t.includes('aptitude') || t.includes('reasoning') || t.includes('resume') || t.includes('pitch') || t.includes('presentation')) return 'user-check';
    return 'book-open';
  },

  getSkillAreaDescription(title) {
    const cleanTitle = title.replace(/^\d+\s*[–-]\s*/, '').trim();
    const descMap = {
      "Programming with Problem Solving (DSA)": "Master core algorithms, data structures, and problem-solving strategies to optimize code performance.",
      "Frontend Development": "Build responsive, highly interactive user interfaces using modern HTML, CSS, and Javascript.",
      "Software Engineering Fundamentals": "Learn industry best practices including version control, clean code patterns, and testing.",
      "Backend Development": "Develop database-driven APIs, server logic, web services, and user authentication systems.",
      "System Design": "Architect scalable, distributed systems capable of handling millions of concurrent users.",
      "System Design & Cloud": "Architect scalable distributed systems, cloud infrastructure, container hosting, and networking.",
      "Cloud and DevOps": "Configure cloud infrastructure, CI/CD pipelines, containerized deployments, and serverless hosting.",
      "Aptitude & Professional Skills": "Enhance critical reasoning, analytical thinking, numerical calculations, and communication.",
      "Generative AI Engineering": "Leverage Large Language Models, prompt engineering, and smart AI workflow logic.",
      "Data Science & Machine Learning": "Extract key insights, build predictive ML models, and manage large datasets.",
      "Cloud & DevOps": "Configure cloud infrastructure, CI/CD pipelines, containerized deployments, and serverless hosting."
    };
    return descMap[cleanTitle] || descMap[title] || "Develop industry-ready software engineering skills.";
  },

  getSkillAreaInsight(title) {
    const cleanTitle = title.replace(/^\d+\s*[–-]\s*/, '').trim();
    const insights = {
      "Programming with Problem Solving (DSA)": "92% of technical interview questions assess DSA problem-solving speed. Average package: 14 LPA.",
      "Frontend Development": "Frontend engineering is the highest-volume hiring area. 89% of full-stack internships require verified React/JS skills.",
      "Software Engineering Fundamentals": "Microsoft, Amazon & 85% of tech companies require these software fundamentals to pass initial resume screenings.",
      "Backend Development": "Backend-ready developers transition fastest. 3,500+ candidates verified in this area locked full-time offers this month.",
      "System Design": "Top product companies hire developers who build scalable systems. Candidates verifying Advanced/Expert level get a 2.4x interview conversion rate.",
      "System Design & Cloud": "Top product companies hire developers who build scalable systems. Candidates verifying Advanced/Expert level get a 2.4x interview conversion rate.",
      "Cloud and DevOps": "Cloud skills are highly prized by dev leads. Average salary verified at Advanced DevOps: 16 LPA.",
      "Aptitude & Professional Skills": "Pass initial communication and problem-solving filters. Verified candidates see 3x faster screening pass rates.",
      "Generative AI Engineering": "Verified AI engineering skills earn a premium. Openings for gen-AI developers grew by 180% this quarter.",
      "Data Science & Machine Learning": "Unlocks high-paying quantitative analyst pipelines. 90% of ML projects require verified python modeling skills."
    };
    return insights[cleanTitle] || insights[title] || "85% of companies require this skill area to pass initial screening.";
  },

  renderCourseCardHTML(course, idx, primaryAssId) {
    const progressPct = course.progress;
    const numTopicsText = course.topics || '3 topics';
    const numTopics = parseInt(numTopicsText) || 3;
    const courseIcon = this.getCourseIcon(course.title);
    
    // SVG circular progress stroke calculation
    const radius = 14;
    const circumference = 2 * Math.PI * radius; // ~88
    const strokeDashoffset = circumference - (circumference * progressPct) / 100;

    let ctaButtonHtml = '';
    if (progressPct === 100) {
      ctaButtonHtml = `
        <div style="display: inline-flex; align-items: center; gap: 4px; color: #16803D; font-size: 11.5px; font-weight: 700; border-radius: 4px; padding: 2px 0;">
          <i data-lucide="check-circle-2" style="width: 14px; height: 14px; color: #16803D; fill: #DCFCE7;"></i> Completed
        </div>
      `;
    } else if (progressPct > 0) {
      ctaButtonHtml = `
        <button onclick="AppUI.openAssessmentModal('${primaryAssId}', true); event.stopPropagation();" style="display: inline-flex; align-items: center; gap: 4px; padding: 5px 12px; font-size: 11px; background: var(--primary); border: none; color: #FFFFFF; font-weight: 700; border-radius: 6px; cursor: pointer; transition: opacity 0.2s;">
          Continue <span style="font-size: 13px; line-height: 1;">&rsaquo;</span>
        </button>
      `;
    } else {
      ctaButtonHtml = `
        <button onclick="AppUI.openAssessmentModal('${primaryAssId}', true); event.stopPropagation();" style="display: inline-flex; align-items: center; gap: 4px; padding: 5px 12px; font-size: 11px; background: #FFFFFF; border: 1px solid var(--primary); color: var(--primary); font-weight: 700; border-radius: 6px; cursor: pointer; transition: all 0.2s;">
          Start <span style="font-size: 13px; line-height: 1;">&rsaquo;</span>
        </button>
      `;
    }

    return `
      <div class="course-card-premium" style="background: #FFFFFF; border: 1px solid var(--slate-200); border-radius: 12px; padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 12px; box-sizing: border-box; box-shadow: var(--shadow-sm); text-align: left; min-height: 160px; transition: transform 0.2s, box-shadow 0.2s;">
        <!-- Top header row: Icon and circular progress -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
          <!-- Icon container with subtle gradient & shadow -->
          <div style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, var(--brand-100), #E0E6FF); border: 0.5px solid var(--brand-300); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(12, 60, 255, 0.08);">
            <i data-lucide="${courseIcon}" style="color: var(--primary); width: 18px; height: 18px;"></i>
          </div>
          
          <!-- Circular Progress SVG Ring -->
          <div style="position: relative; width: 34px; height: 34px; display: inline-flex; align-items: center; justify-content: center;">
            <svg width="34" height="34" viewBox="0 0 34 34" style="transform: rotate(-90deg); width: 34px; height: 34px;">
              <circle cx="17" cy="17" r="14" stroke="#F1F5F9" stroke-width="2.5" fill="transparent"></circle>
              <circle cx="17" cy="17" r="14" stroke="var(--primary)" stroke-width="2.5" fill="transparent"
                stroke-dasharray="88" stroke-dashoffset="${88 - (88 * progressPct) / 100}"
                stroke-linecap="round"></circle>
            </svg>
            <span style="position: absolute; font-size: 9px; font-weight: 750; color: #0F172A;">${progressPct}%</span>
          </div>
        </div>

        <!-- Middle row: Course title -->
        <div style="min-width: 0; flex: 1;">
          <h4 style="margin: 0; font-size: 13px; font-weight: 800; color: #0F172A; line-height: 1.45; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
            ${course.title}
          </h4>
        </div>

        <!-- Skill tags row -->
        <div style="display: flex; flex-wrap: wrap; gap: 4px;">
          ${course.tags.slice(0, 3).map(t => `<span style="font-size: 10px; font-weight: 600; padding: 2px 6px; background: #F8FAFC; border: 1px solid var(--slate-200); color: #475569; border-radius: 4px; white-space: nowrap;">${t}</span>`).join('')}
        </div>

        <!-- Bottom row: Topics count and CTA button -->
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 0.5px solid #F1F5F9; padding-top: 10px; margin-top: 2px;">
          <span style="font-size: 11px; font-weight: 600; color: #64748B; display: inline-flex; align-items: center; gap: 4px;">
            <i data-lucide="book-open" style="width: 13px; height: 13px; color: #94A3B8;"></i>
            ${numTopics} Topics
          </span>
          ${ctaButtonHtml}
        </div>
      </div>
    `;
  },

  closeAllModals() {
    const dialogs = ['role-overview-dialog', 'role-switch-dialog', 'assessment-dialog', 'job-board-dialog', 'onboarding-dialog', 'certificate-dialog', 'matrix-dialog', 'product-tour-dialog'];
    dialogs.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.open) {
        el.close();
      }
    });
  },

  tourSlideIndex: 1,

  openProductTourModal() {
    this.closeAllModals();
    this.tourSlideIndex = 1;
    this.updateTourSlide();
    const dialog = document.getElementById('product-tour-dialog');
    if (dialog) {
      dialog.showModal();
      lucide.createIcons();
    }
  },

  nextTourSlide() {
    if (this.tourSlideIndex >= 4) {
      const dialog = document.getElementById('product-tour-dialog');
      if (dialog) dialog.close();
    } else {
      this.tourSlideIndex++;
      this.updateTourSlide();
    }
  },

  prevTourSlide() {
    if (this.tourSlideIndex > 1) {
      this.tourSlideIndex--;
      this.updateTourSlide();
    }
  },

  updateTourSlide() {
    // Hide all slides
    for (let i = 1; i <= 4; i++) {
      const slide = document.getElementById(`tour-slide-${i}`);
      const dot = document.getElementById(`tour-dot-${i}`);
      if (slide) slide.classList.remove('active');
      if (dot) dot.classList.remove('active');
    }
    
    // Show current slide
    const currentSlide = document.getElementById(`tour-slide-${this.tourSlideIndex}`);
    const currentDot = document.getElementById(`tour-dot-${this.tourSlideIndex}`);
    if (currentSlide) currentSlide.classList.add('active');
    if (currentDot) currentDot.classList.add('active');

    // Handle Back Button
    const prevBtn = document.getElementById('tour-prev-btn');
    if (prevBtn) {
      if (this.tourSlideIndex === 1) {
        prevBtn.style.opacity = '0';
        prevBtn.style.pointerEvents = 'none';
      } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.pointerEvents = 'auto';
      }
    }

    // Handle Next Button
    const nextBtn = document.getElementById('tour-next-btn');
    if (nextBtn) {
      if (this.tourSlideIndex === 4) {
        nextBtn.innerHTML = `Get Started <i data-lucide="check" style="width: 14px; height: 14px;"></i>`;
      } else {
        nextBtn.innerHTML = `Next <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>`;
      }
      lucide.createIcons();
    }
  },

  openSkillAreaMatrixModal() {
    this.closeAllModals();
    const dialog = document.getElementById('matrix-dialog');
    if (dialog) {
      dialog.showModal();
      // Reset to tab 1 on open
      this.setMatrixTab(1);
      lucide.createIcons();
    }
  },

  setMatrixTab(version) {
    const tab1 = document.getElementById('matrix-tab-v1');
    const tab2 = document.getElementById('matrix-tab-v2');
    const content1 = document.getElementById('matrix-content-v1');
    const content2 = document.getElementById('matrix-content-v2');
    
    if (version === 1) {
      if (tab1) tab1.classList.add('active');
      if (tab2) tab2.classList.remove('active');
      if (content1) content1.style.display = 'flex';
      if (content2) content2.style.display = 'none';
    } else {
      if (tab1) tab1.classList.remove('active');
      if (tab2) tab2.classList.add('active');
      if (content1) content1.style.display = 'none';
      if (content2) content2.style.display = 'flex';
    }
  },


  openOnboardingModal(force = false) {
    this.closeAllModals();
    const dialog = document.getElementById('onboarding-dialog');
    if (dialog) {
      dialog.showModal();
      lucide.createIcons();
    }
  },

  dismissOnboarding() {
    this.appState.state.onboardingDismissed = true;
    this.appState.saveState();
    const dialog = document.getElementById('onboarding-dialog');
    if (dialog) {
      dialog.close();
    }
    this.render();
  },

  toggleAlwaysShowOnboarding(checked) {
    this.appState.state.alwaysShowOnboarding = checked;
    if (checked) {
      this.appState.state.onboardingDismissed = false;
    } else {
      this.appState.state.onboardingDismissed = true;
    }
    this.appState.saveState();
  },

  openCertificateModal() {
    this.closeAllModals();
    const roleId = this.appState.state.activeRoleId || 'sde';
    const role = ROLES_METADATA[roleId];
    const progress = this.appState.state.rolesProgress[roleId];
    const isUnlocked = progress.internshipStatus === 'passed' || progress.jobReadinessStatus === 'passed';

    const previewWrapper = document.getElementById('cert-modal-preview-wrapper');
    const actionsPanel = document.getElementById('cert-modal-actions-panel');

    // Render Certificate Preview
    previewWrapper.innerHTML = `
      <div class="cert-card-visual ${isUnlocked ? 'unlocked' : 'locked'}">
        <div class="cert-border-outer">
          <div class="cert-border-inner">
            <div class="cert-badge-gold">
              <i data-lucide="award"></i>
            </div>
            <h3 class="cert-academy-title">NextWave Academy</h3>
            <p class="cert-subtitle">VERIFIED SKILLS CREDENTIAL</p>
            <div class="cert-divider"></div>
            <p class="cert-text-certify">This is to certify that</p>
            <h2 class="cert-recipient-name">Harshit Sharma</h2>
            <p class="cert-text-achievement">has successfully met all evaluation criteria and cleared the fast-track professional assessment for the track of</p>
            <h4 class="cert-track-title">${role.title}</h4>
            <div class="cert-footer-row">
              <div class="cert-footer-col">
                <span class="lbl">DATE ISSUED</span>
                <span class="val">${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
              <div class="cert-footer-col flex-center">
                <span class="signature-line"></span>
                <span class="lbl">ACADEMY DIRECTORS</span>
              </div>
              <div class="cert-footer-col align-right">
                <span class="lbl">CREDENTIAL ID</span>
                <span class="val font-mono">NW-${role.id.toUpperCase()}-772E9D</span>
              </div>
            </div>
          </div>
        </div>
        ${!isUnlocked ? `
          <div class="cert-lock-overlay">
            <i data-lucide="lock" class="lock-icon"></i>
            <h3>Certificate Locked</h3>
            <p>Clear the fast-track assessment on the roadmap sidebar to unlock verification.</p>
          </div>
        ` : ''}
      </div>
    `;

    // Render Actions Panel
    if (isUnlocked) {
      actionsPanel.innerHTML = `
        <div class="actions-row-grid">
          <button class="btn btn-primary" onclick="AppUI.simulateCertDownload('${role.title}')" style="flex:1; justify-content:center; gap:8px;">
            <i data-lucide="download"></i> Download Verified PDF
          </button>
          
          <div class="social-share-group">
            <span class="share-title">Showcase achievement:</span>
            <div class="share-buttons">
              <button class="btn-share share-linkedin" onclick="AppUI.simulateSocialShare('LinkedIn', '${role.title}')" title="Share to LinkedIn">
                <i data-lucide="linkedin"></i>
              </button>
              <button class="btn-share share-twitter" onclick="AppUI.simulateSocialShare('Twitter / X', '${role.title}')" title="Share to Twitter / X">
                <i data-lucide="twitter"></i>
              </button>
              <button class="btn-share share-whatsapp" onclick="AppUI.simulateSocialShare('WhatsApp', '${role.title}')" title="Share to WhatsApp">
                <i data-lucide="message-circle"></i>
              </button>
              <button class="btn-share share-instagram" onclick="AppUI.simulateSocialShare('Instagram', '${role.title}')" title="Share to Instagram">
                <i data-lucide="instagram"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      actionsPanel.innerHTML = `
        <div class="actions-row-grid locked-state">
          <button class="btn btn-secondary disabled" style="flex:1; justify-content:center; gap:8px; cursor:not-allowed;" disabled>
            <i data-lucide="lock"></i> Download PDF (Locked)
          </button>
          <div class="social-share-group faded">
            <span class="share-title">Share option (Locked):</span>
            <div class="share-buttons">
              <button class="btn-share disabled" disabled><i data-lucide="linkedin"></i></button>
              <button class="btn-share disabled" disabled><i data-lucide="twitter"></i></button>
              <button class="btn-share disabled" disabled><i data-lucide="message-circle"></i></button>
              <button class="btn-share disabled" disabled><i data-lucide="instagram"></i></button>
            </div>
          </div>
        </div>
      `;
    }

    document.getElementById('certificate-dialog').showModal();
    lucide.createIcons();
  },

  simulateCertDownload(roleTitle) {
    alert(`📥 Downloading: Verified_Skills_Certificate_${roleTitle.replace(/\\s+/g, '_')}.pdf\\nYour professional certificate has been downloaded successfully!`);
  },

  simulateSocialShare(platform, roleTitle) {
    alert(`📢 Shared to ${platform}!\\nPost text: \"Thrilled to share that I\\'ve unlocked my Verified Skills Certification in ${roleTitle} from NextWave Academy! 🚀 🏆 #NextWaveCertified #Developer #CareerReady\"`);
  },

  toggleCourseExpand(courseId) {
    const el = document.getElementById(`course-expand-${courseId}`);
    if (el) {
      const isHidden = el.style.display === 'none';
      el.style.display = isHidden ? 'block' : 'none';
      
      const chevron = document.getElementById(`course-chevron-${courseId}`);
      if (chevron) {
        chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    }
  },
  
  init() {
    // Info click
    document.querySelector('.info-btn').addEventListener('click', () => {
      alert("NextWave Journey Portal helps you navigate career-aligned Role Roadmaps. Start a role at any time.");
    });

    // Reset button simulator
    window.resetJourneyProgress = () => {
      this.appState.resetAll();
      this.appState.state.onboardingDismissed = false;
      this.appState.state.alwaysShowOnboarding = false;
      this.appState.saveState();
      this.render();
      alert("App data reset to default! Onboarding will show on reload.");
    };

    // Sidebar jobs board link
    document.getElementById('sidebar-jobs-board-link').addEventListener('click', (e) => {
      e.preventDefault();
      const activeRole = this.getActiveRoleProgress();
      if (activeRole && (activeRole.boardsUnlocked.internship || activeRole.boardsUnlocked.jobs)) {
        this.openJobBoardModal(activeRole.boardsUnlocked.jobs ? 'jobs' : 'internship');
      } else {
        alert("🔒 Job Boards are locked! Please complete your Internship Prep or Job Readiness assessments on the right of your roadmap to unlock them.");
      }
    });

    // Streak tracker simulation
    setInterval(() => {
      const current = parseInt(document.getElementById('streak-counter').textContent);
      if (current === 0) {
        document.getElementById('streak-counter').textContent = "4";
      }
    }, 1000);

    // Auto-show onboarding if not dismissed or if alwaysShowOnboarding is true
    if (!this.appState.state.onboardingDismissed || this.appState.state.alwaysShowOnboarding) {
      setTimeout(() => {
        this.openOnboardingModal();
      }, 300);
    }

    this.render();
  },

  getActiveRoleProgress() {
    const roleId = this.appState.state.activeRoleId;
    if (!roleId) return null;
    return this.appState.state.rolesProgress[roleId];
  },

  calculateRoleOverallProgress(roleId) {
    const role = ROLES_METADATA[roleId];
    const progress = this.appState.state.rolesProgress[roleId];
    if (!progress) return 0;

    let totalCourses = role.courses.length;
    let completedCourses = 0;
    role.courses.forEach(c => {
      if (progress.courseProgress[c.id] === 100) {
        completedCourses++;
      }
    });

    let courseProgressPct = (completedCourses / totalCourses) * 100;
    let overall = courseProgressPct * 0.6;
    if (progress.internshipStatus === 'passed') overall += 20;
    if (progress.jobReadinessStatus === 'passed') overall += 20;

    return Math.round(overall);
  },

  currentTab: 'role_roadmaps', // 'growth_cycles' or 'role_roadmaps'

  switchTab(tab) {
    this.currentTab = tab;
    this.render();
  },

  getCourseIconHtml(iconType) {
    if (iconType === 'ccbp') {
      return `<span style="color: var(--primary); font-weight: 850; font-size: 14px; letter-spacing: -0.3px;">CCBP 4.0</span>`;
    }
    const mapping = {
      globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      responsive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
      database: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
      'gear-code': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
      monitor: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      javascript: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`,
      nodejs: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`,
      react: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)"></ellipse><circle cx="12" cy="12" r="2"></circle></svg>`,
      cubes: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
      probability: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
      chart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
      writing: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`,
      chip: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`
    };
    return mapping[iconType] || '';
  },

  getCircleProgressSvg(pct) {
    const r = 8;
    const circ = 2 * Math.PI * r;
    const offset = circ * (1 - pct / 100);
    return `
      <svg width="18" height="18" viewBox="0 0 24 24" style="transform: rotate(-90deg); flex-shrink: 0;">
        <circle cx="12" cy="12" r="${r}" stroke="var(--slate-200)" stroke-width="3.5" fill="transparent" />
        <circle cx="12" cy="12" r="${r}" stroke="var(--primary)" stroke-width="3.5" fill="transparent" 
                stroke-dasharray="${circ}" stroke-dashoffset="${offset}" />
      </svg>
    `;
  },

  renderGrowthCycles(container) {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '32px';
    wrapper.style.textAlign = 'left';

    wrapper.innerHTML = GROWTH_CYCLES_DATA.map((cycle) => {
      const coursesGridHtml = cycle.courses.map(course => {
        const iconHtml = this.getCourseIconHtml(course.icon);
        const circleSvg = this.getCircleProgressSvg(course.progress);
        const tagsHtml = course.tags.map(tag => `
          <span style="font-size: 9.5px; font-weight: 700; color: #475569; background: #F1F5F9; border: 0.5px solid var(--slate-200); padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">${tag}</span>
        `).join('');

        return `
          <div style="background: #FFFFFF; border: 0.5px solid var(--slate-200); border-radius: 12px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; min-height: 180px; box-shadow: 0 1px 3px rgba(0,0,0,0.01);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; min-height: 24px;">
                  ${iconHtml}
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="font-size: 12px; font-weight: 700; color: var(--primary);">${course.progress}%</span>
                  ${circleSvg}
                </div>
              </div>
              <div style="font-size: 9px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Course</div>
              <h4 style="font-size: 13.5px; font-weight: 700; color: #0F172A; margin: 0 0 6px 0; line-height: 1.3;">${course.number}. ${course.title}</h4>
              <p style="font-size: 12.5px; color: #64748B; margin: 0 0 12px 0; line-height: 1.45; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${course.desc}</p>
            </div>
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
                <span style="font-size: 11.5px; color: #64748B; font-weight: 500;">${course.topics}</span>
                <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                  ${tagsHtml}
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div>
          <!-- Header details -->
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; border-bottom: 1px solid var(--slate-200); padding-bottom: 12px; margin-bottom: 16px;">
            <div>
              <span style="font-size: 11px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Growth Cycle ${cycle.id}</span>
              <h3 style="font-size: 18px; font-weight: 700; color: #0F172A; margin: 4px 0 2px 0;">${cycle.title}</h3>
              <span style="font-size: 12.5px; color: #64748B; font-weight: 500;">${cycle.duration}</span>
            </div>
            
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 4px;">
              <div style="width: 120px; height: 6px; background: var(--slate-200); border-radius: 3px; overflow: hidden; position: relative;">
                <div style="position: absolute; left: 0; top: 0; bottom: 0; background: var(--primary); width: ${cycle.progress}%; border-radius: 3px;"></div>
              </div>
              <span style="font-size: 13.5px; font-weight: 700; color: var(--primary);">${cycle.progress}%</span>
            </div>
          </div>
          
          <!-- Cards Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
            ${coursesGridHtml}
          </div>
        </div>
      `;
    }).join('');

    container.appendChild(wrapper);
  },

  renderSkillBasedStructure(container) {
    this._expandedSkills = this._expandedSkills || { dsa: true };
    this._skillAreaVersion = this._skillAreaVersion || 1;

    const roleId = this.appState.state.activeRoleId || 'sde';
    const role = ROLES_METADATA[roleId];
    const primaryAss = role ? role.internshipAssessments[0] : { id: 'sde_primary' };
    const primaryAssId = primaryAss.id;

    const SKILL_AREAS_DATABASE = [
      {
        id: 'dsa',
        title: 'Programming with Problem Solving (DSA)',
        icon: 'code-2',
        iconColor: 'var(--primary)',
        levelText: 'Intermediate verified',
        levelBg: 'var(--brand-100)',
        levelColor: 'var(--primary)',
        courses: [
          { title: 'CCBP 4.0 Introduction', topics: '3 topics', progress: 100, tags: ['Coding Logic', 'Variables', 'Loops'] },
          { title: 'Python Programming Basics', topics: '3 topics', progress: 100, tags: ['Python Syntax', 'Writing Scripts', 'Functions'] },
          { title: 'Data Structures and Algorithms - Part I', topics: '3 topics', progress: 40, tags: ['Arrays', 'String Manipulation', 'Complexity'] },
          { title: 'Data Structures and Algorithms - Part II', topics: '4 topics', progress: 0, tags: ['Linked Lists', 'Recursion', 'Trees', 'Graphs'] }
        ]
      },
      {
        id: 'backend',
        title: 'Backend Development',
        icon: 'database',
        iconColor: '#10B981',
        levelText: 'Beginner verified',
        levelBg: '#ECFDF5',
        levelColor: '#10B981',
        courses: [
          { title: 'Introduction to Node.js & Express', topics: '3 topics', progress: 100, tags: ['Express.js', 'REST APIs', 'Server Setup'] },
          { title: 'Database Integration & SQL', topics: '4 topics', progress: 20, tags: ['SQL Queries', 'PostgreSQL', 'Indexing', 'ORMs'] },
          { title: 'Java Programming & OOP Principles', topics: '3 topics', progress: 0, tags: ['Java Basics', 'JVM Structure', 'OOP Classes'] },
          { title: 'Spring Boot Microservices', topics: '4 topics', progress: 0, tags: ['Spring Boot', 'Spring Security', 'JWT Auth'] }
        ]
      },
      {
        id: 'frontend',
        title: 'Frontend Development',
        icon: 'layout',
        iconColor: '#EC4899',
        levelText: 'Beginner verified',
        levelBg: '#FDF2F8',
        levelColor: '#EC4899',
        courses: [
          { title: 'HTML5 & CSS3 Essentials', topics: '3 topics', progress: 100, tags: ['HTML Semantics', 'CSS selectors', 'Flexbox'] },
          { title: 'Responsive Web Design & Tailwind', topics: '3 topics', progress: 100, tags: ['Tailwind CSS', 'Mobile First', 'Grid'] },
          { title: 'JavaScript Essentials', topics: '3 topics', progress: 100, tags: ['DOM manipulation', 'Scope', 'Asynchronous API'] },
          { title: 'React JS Foundations', topics: '4 topics', progress: 0, tags: ['React Components', 'State', 'Hooks', 'Context'] }
        ]
      },
      {
        id: 'software_eng',
        title: 'Software Engineering Fundamentals',
        icon: 'git-branch',
        iconColor: '#F59E0B',
        levelText: 'Beginner verified',
        levelBg: '#FFFBEB',
        levelColor: '#F59E0B',
        courses: [
          { title: 'Git Version Control & Github Workflows', topics: '2 topics', progress: 100, tags: ['Branching', 'Merges', 'PR Reviews'] },
          { title: 'Operating Systems & Networking Concepts', topics: '3 topics', progress: 0, tags: ['Process Threads', 'TCP/IP Sockets', 'DNS'] },
          { title: 'Agile & Software Development Lifecycle', topics: '3 topics', progress: 0, tags: ['SDLC Models', 'Agile Principles', 'Testing Basics'] }
        ]
      },
      {
        id: 'system_design',
        title: 'System Design',
        icon: 'git-commit',
        iconColor: '#3B82F6',
        levelText: 'Beginner verified',
        levelBg: 'var(--brand-50)',
        levelColor: '#3B82F6',
        courses: [
          { title: 'System Design Foundations', topics: '3 topics', progress: 10, tags: ['Caching', 'Load Balancers', 'Rate Limiting'] },
          { title: 'High-Level Distributed Systems', topics: '3 topics', progress: 0, tags: ['Database Partitioning', 'Sharding', 'CAP Theorem'] },
          { title: 'Low-Level Design Patterns', topics: '3 topics', progress: 0, tags: ['OOP Design', 'UML', 'Design Patterns'] }
        ]
      },
      {
        id: 'cloud_devops',
        title: 'Cloud and DevOps',
        icon: 'cloud',
        iconColor: '#8B5CF6',
        levelText: 'Not attempted',
        levelBg: '#F1F5F9',
        levelColor: '#64748B',
        courses: [
          { title: 'Docker Containers & Kubernetes pod config', topics: '3 topics', progress: 0, tags: ['Dockerfiles', 'Images', 'Pods', 'Deployments'] },
          { title: 'CI/CD Pipelines & AWS Cloud Infrastructure', topics: '3 topics', progress: 0, tags: ['Github Actions', 'AWS ECS', 'Jenkins Build'] }
        ]
      },
      {
        id: 'gen_ai',
        title: 'Generative AI Engineering',
        icon: 'sparkles',
        iconColor: '#A855F7',
        levelText: 'Beginner verified',
        levelBg: '#F3E8FF',
        levelColor: '#A855F7',
        courses: [
          { title: 'Prompt Engineering & LLM APIs', topics: '3 topics', progress: 100, tags: ['Gemini API', 'Prompt Flow', 'API tokens'] },
          { title: 'Vector Databases & RAG Architecture', topics: '3 topics', progress: 0, tags: ['Semantic Search', 'Pinecone', 'Embeddings'] }
        ]
      },
      {
        id: 'data_science',
        title: 'Data Science & Machine Learning',
        icon: 'bar-chart-3',
        iconColor: '#06B6D4',
        levelText: 'Not attempted',
        levelBg: '#F1F5F9',
        levelColor: '#64748B',
        courses: [
          { title: 'Excel charts & formulas Essentials', topics: '3 topics', progress: 100, tags: ['Pivot Tables', 'Data Cleaning', 'Macros'] },
          { title: 'Pandas & NumPy Data Wrangling', topics: '3 topics', progress: 0, tags: ['Dataframes', 'Aggregations', 'Matplotlib'] },
          { title: 'Machine Learning Foundations', topics: '4 topics', progress: 0, tags: ['Regression', 'Classification', 'Tuning'] }
        ]
      },
      {
        id: 'aptitude',
        title: 'Aptitude & Professional Skills',
        icon: 'user-check',
        iconColor: '#64748B',
        levelText: 'Intermediate verified',
        levelBg: 'var(--brand-100)',
        levelColor: 'var(--primary)',
        courses: [
          { title: 'Quantitative Reasoning & Logical Aptitude', topics: '3 topics', progress: 100, tags: ['Quantitative', 'Logical Reasoning', 'Puzzles'] },
          { title: 'Resume Building & Pitch Presentations', topics: '2 topics', progress: 0, tags: ['ATS Formatting', 'Interviews', 'Elevator Pitch'] }
        ]
      }
    ];

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '32px';
    wrapper.style.width = '100%';

    // Version switcher tabs
    const versionTabs = document.createElement('div');
    versionTabs.style.display = 'flex';
    versionTabs.style.gap = '8px';
    versionTabs.style.borderBottom = '1px solid var(--slate-200)';
    versionTabs.style.paddingBottom = '8px';
    versionTabs.style.marginBottom = '32px';
    versionTabs.style.width = '100%';
    versionTabs.innerHTML = `
      <button onclick="AppUI.setSkillAreaVersion(1)" style="background: ${this._skillAreaVersion === 1 ? 'var(--brand-100)' : 'none'}; border: none; color: ${this._skillAreaVersion === 1 ? 'var(--primary)' : '#64748B'}; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">Version 1</button>
      <button onclick="AppUI.setSkillAreaVersion(2)" style="background: ${this._skillAreaVersion === 2 ? 'var(--brand-100)' : 'none'}; border: none; color: ${this._skillAreaVersion === 2 ? 'var(--primary)' : '#64748B'}; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">Version 2</button>
      <button onclick="AppUI.setSkillAreaVersion(3)" style="background: ${this._skillAreaVersion === 3 ? 'var(--brand-100)' : 'none'}; border: none; color: ${this._skillAreaVersion === 3 ? 'var(--primary)' : '#64748B'}; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">Version 3</button>
    `;
    wrapper.appendChild(versionTabs);

    if (this._skillAreaVersion === 1) {
      // Accordion layout
      const accordionContainer = document.createElement('div');
      accordionContainer.style.display = 'flex';
      accordionContainer.style.flexDirection = 'column';
      accordionContainer.style.gap = '16px';
      accordionContainer.style.width = '100%';

      SKILL_AREAS_DATABASE.forEach(comp => {
        const isExpanded = this._expandedSkills[comp.id] || false;

        const compCard = document.createElement('div');
        compCard.style.background = '#FFFFFF';
        compCard.style.border = '0.5px solid var(--slate-200)';
        compCard.style.borderRadius = '12px';
        compCard.style.overflow = 'hidden';
        compCard.style.boxShadow = 'var(--shadow-sm)';
        compCard.style.marginBottom = '0px';

        const headerRow = document.createElement('div');
        headerRow.style.padding = '18px 24px';
        headerRow.style.display = 'flex';
        headerRow.style.justifyContent = 'space-between';
        headerRow.style.alignItems = 'center';
        headerRow.style.cursor = 'pointer';
        headerRow.style.userSelect = 'none';
        headerRow.style.transition = 'background 0.2s';
        headerRow.style.background = isExpanded ? '#FAFBFD' : '#FFFFFF';
        
        headerRow.onclick = () => {
          this._expandedSkills[comp.id] = !isExpanded;
          this.render();
        };

        headerRow.innerHTML = `
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 38px; height: 38px; border-radius: 50%; background: #F8FAFC; border: 1px solid var(--slate-200); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <i data-lucide="${comp.icon}" style="width: 18px; height: 18px; color: ${comp.iconColor};"></i>
            </div>
            <span style="font-size: 15.5px; font-weight: 600; color: #0F172A;">${comp.title}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: ${comp.levelBg}; color: ${comp.levelColor};">${comp.levelText}</span>
            <i data-lucide="${isExpanded ? 'chevron-up' : 'chevron-down'}" style="width: 18px; height: 18px; color: #94A3B8;"></i>
          </div>
        `;

        compCard.appendChild(headerRow);

        if (isExpanded) {
          const bodyContent = document.createElement('div');
          bodyContent.style.padding = '20px 24px';
          bodyContent.style.borderTop = '0.5px solid var(--slate-200)';
          bodyContent.style.background = '#FFFFFF';
          bodyContent.style.display = 'flex';
          bodyContent.style.flexDirection = 'column';
          bodyContent.style.gap = '14px';

          const courseGrid = document.createElement('div');
          courseGrid.style.display = 'grid';
          courseGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(260px, 1fr))';
          courseGrid.style.gap = '16px';
          courseGrid.style.width = '100%';

          comp.courses.forEach((course, idx) => {
            const cardHtml = AppUI.renderCourseCardHTML(course, idx, primaryAssId);
            const courseCardElement = document.createElement('div');
            courseCardElement.innerHTML = cardHtml;
            courseGrid.appendChild(courseCardElement.firstElementChild);
          });
          bodyContent.appendChild(courseGrid);
          compCard.appendChild(bodyContent);
        }
        accordionContainer.appendChild(compCard);
      });
      wrapper.appendChild(accordionContainer);
    } else if (this._skillAreaVersion === 2) {
      // Linear (main track) & Parallel (electives/independent) layout
      const gridWrapper = document.createElement('div');
      gridWrapper.style.display = 'flex';
      gridWrapper.style.flexDirection = 'column';
      gridWrapper.style.gap = '32px';
      gridWrapper.style.width = '100%';

      // 1. LINEAR CORE TRACK SECTION
      const linearSection = document.createElement('div');
      linearSection.style.display = 'flex';
      linearSection.style.flexDirection = 'column';
      linearSection.style.gap = '16px';
      linearSection.style.width = '100%';

      const linearHeader = document.createElement('div');
      linearHeader.innerHTML = `
        <h4 style="margin: 0; font-size: 13px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; text-align: left; display: flex; align-items: center; gap: 6px;">
          <i data-lucide="git-commit" style="width: 16px; height: 16px; color: var(--primary);"></i> Core Engineering Track (Sequential Sequence)
        </h4>
      `;
      linearSection.appendChild(linearHeader);

      const linearStepsList = document.createElement('div');
      linearStepsList.style.display = 'flex';
      linearStepsList.style.flexDirection = 'column';
      linearStepsList.style.gap = '16px';
      linearStepsList.style.width = '100%';

      const linearIds = ['dsa', 'backend', 'frontend'];
      const linearComps = SKILL_AREAS_DATABASE.filter(c => linearIds.includes(c.id));

      linearComps.forEach((comp, compIdx) => {
        const card = document.createElement('div');
        card.style.background = '#FFFFFF';
        card.style.border = '1px solid var(--slate-200)';
        card.style.borderRadius = '12px';
        card.style.padding = '16px';
        card.style.boxShadow = 'var(--shadow-sm)';
        card.style.display = 'flex';
        card.style.alignItems = 'stretch';
        card.style.gap = '24px';
        card.style.flexWrap = 'wrap';
        card.style.textAlign = 'left';
        card.style.position = 'relative';

        const coursesHtml = comp.courses.map((course, idx) => {
          return AppUI.renderCourseCardHTML(course, idx, primaryAssId);
        }).join('');

        card.innerHTML = `
          <!-- Left side: Skill Area info with path label -->
          <div style="flex: 0 0 240px; display: flex; flex-direction: column; justify-content: center; gap: 8px; border-right: 1px solid #F1F5F9; padding-right: 16px; min-width: 200px; box-sizing: border-box;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--brand-50); border: 1px solid var(--brand-200); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="font-size: 11px; font-weight: 800; color: var(--brand-600);">0${compIdx + 1}</span>
              </div>
              <span style="font-size: 14.5px; font-weight: 750; color: #0F172A; line-height: 1.35;">${comp.title}</span>
            </div>
            <div style="margin-top: 4px; display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 10px; font-weight: 650; text-transform: uppercase; padding: 2.5px 8px; border-radius: 4px; background: ${comp.levelBg}; color: ${comp.levelColor}; display: inline-block;">${comp.levelText}</span>
              <span style="font-size: 9.5px; font-weight: 600; color: #64748B; background: #FAFBFD; border: 0.5px solid var(--slate-200); padding: 2px 6px; border-radius: 4px;">Step ${compIdx + 1}</span>
            </div>
          </div>
          <!-- Right side: Horizontal course list -->
          <div style="flex: 1; min-width: 280px; display: flex; gap: 12px; overflow-x: auto; padding-bottom: 4px; -webkit-overflow-scrolling: touch; scrollbar-width: thin;">
            ${coursesHtml}
          </div>
        `;
        linearStepsList.appendChild(card);

        // Add visual link arrow between linear steps
        if (compIdx < linearComps.length - 1) {
          const arrowWrapper = document.createElement('div');
          arrowWrapper.style.display = 'flex';
          arrowWrapper.style.justifyContent = 'center';
          arrowWrapper.style.alignItems = 'center';
          arrowWrapper.style.margin = '-8px 0';
          arrowWrapper.innerHTML = `
            <div style="width: 32px; height: 32px; border-radius: 50%; background: #FAFBFD; border: 1px solid var(--slate-200); display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm); z-index: 2;">
              <i data-lucide="arrow-down" style="width: 15px; height: 15px; color: #94A3B8;"></i>
            </div>
          `;
          linearStepsList.appendChild(arrowWrapper);
        }
      });
      linearSection.appendChild(linearStepsList);
      gridWrapper.appendChild(linearSection);

      // 2. PARALLEL HUB SECTION
      const parallelSection = document.createElement('div');
      parallelSection.style.display = 'flex';
      parallelSection.style.flexDirection = 'column';
      parallelSection.style.gap = '16px';
      parallelSection.style.width = '100%';

      const parallelHeader = document.createElement('div');
      parallelHeader.innerHTML = `
        <h4 style="margin: 0; font-size: 13px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; text-align: left; display: flex; align-items: center; gap: 6px;">
          <i data-lucide="layout-grid" style="width: 16px; height: 16px; color: #06B6D4;"></i> Parallel Skills & Domain Electives (Independent)
        </h4>
      `;
      parallelSection.appendChild(parallelHeader);

      const parallelIds = ['software_eng', 'system_design', 'cloud_devops', 'gen_ai', 'data_science', 'aptitude'];
      const parallelComps = SKILL_AREAS_DATABASE.filter(c => parallelIds.includes(c.id));

      const parallelGrid = document.createElement('div');
      parallelGrid.style.display = 'grid';
      parallelGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(320px, 1fr))';
      parallelGrid.style.gap = '24px';
      parallelGrid.style.width = '100%';

      parallelComps.forEach(comp => {
        const card = document.createElement('div');
        card.style.background = '#FFFFFF';
        card.style.border = '1px solid var(--slate-200)';
        card.style.borderRadius = '12px';
        card.style.padding = '16px';
        card.style.boxShadow = 'var(--shadow-sm)';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.gap = '16px';
        card.style.textAlign = 'left';

        // Display courses in a very clean, compact row format to avoid stretching the card length
        const compactCoursesHtml = comp.courses.map((course, idx) => {
          const progressPct = course.progress;
          return `
            <div style="background: #FAFBFD; border: 0.5px solid var(--slate-200); border-radius: 8px; padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
              <div style="min-width: 0; flex: 1;">
                <div style="font-size: 12.5px; font-weight: 700; color: #0F172A; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${course.title}</div>
                <div style="font-size: 11px; color: #64748B; margin-top: 2px; display: flex; align-items: center; gap: 4px;">
                  <i data-lucide="book-open" style="width: 12px; height: 12px; color: #94A3B8;"></i>
                  <span>${course.topics || '3 topics'}</span>
                  <span>•</span>
                  <span>Progress ${progressPct}%</span>
                </div>
              </div>
              <div style="flex-shrink: 0;">
                ${progressPct === 100 ? `
                  <span style="color: #16803D; display: inline-flex; align-items: center;"><i data-lucide="check-circle-2" style="width: 15px; height: 15px; color: #16803D; fill: #DCFCE7;"></i></span>
                ` : `
                  <button onclick="AppUI.openAssessmentModal('${primaryAssId}', true); event.stopPropagation();" style="padding: 4px 10px; font-size: 10.5px; font-weight: 700; background: ${progressPct > 0 ? 'var(--primary)' : '#FFFFFF'}; color: ${progressPct > 0 ? '#FFFFFF' : 'var(--primary)'}; border: ${progressPct > 0 ? 'none' : '1px solid var(--primary)'}; border-radius: 4px; cursor: pointer;">
                    ${progressPct > 0 ? 'Continue' : 'Start'}
                  </button>
                `}
              </div>
            </div>
          `;
        }).join('');

        card.innerHTML = `
          <!-- Header -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 0.5px solid #F1F5F9; padding-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 32px; height: 32px; border-radius: 50%; background: #FAFBFD; border: 1px solid var(--slate-200); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <i data-lucide="${comp.icon}" style="width: 14px; height: 14px; color: ${comp.iconColor};"></i>
              </div>
              <span style="font-size: 14px; font-weight: 750; color: #0F172A; line-height: 1.35;">${comp.title}</span>
            </div>
            <span style="font-size: 9.5px; font-weight: 650; text-transform: uppercase; padding: 2px 6px; border-radius: 4px; background: ${comp.levelBg}; color: ${comp.levelColor}; flex-shrink: 0;">${comp.levelText}</span>
          </div>
          <!-- Compact course list -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${compactCoursesHtml}
          </div>
        `;
        parallelGrid.appendChild(card);
      });
      parallelSection.appendChild(parallelGrid);
      gridWrapper.appendChild(parallelSection);

      wrapper.appendChild(gridWrapper);
    } else if (this._skillAreaVersion === 3) {
      // Sequence-free Tiered grouping with collapsible elements
      AppUI._showV3Core = AppUI._showV3Core || false;
      AppUI._showV3Specialized = AppUI._showV3Specialized || false;

      const timelineWrapper = document.createElement('div');
      timelineWrapper.style.display = 'flex';
      timelineWrapper.style.flexDirection = 'column';
      timelineWrapper.style.gap = '32px';
      timelineWrapper.style.width = '100%';
      timelineWrapper.style.textAlign = 'left';

      // Group IDs
      const tier1Ids = ['dsa', 'aptitude'];
      const tier2Ids = ['software_eng', 'backend', 'frontend'];
      const tier3Ids = ['system_design', 'cloud_devops', 'gen_ai', 'data_science'];

      const tier1Comp = SKILL_AREAS_DATABASE.filter(c => tier1Ids.includes(c.id));
      const tier2Comp = SKILL_AREAS_DATABASE.filter(c => tier2Ids.includes(c.id));
      const tier3Comp = SKILL_AREAS_DATABASE.filter(c => tier3Ids.includes(c.id));

      const renderCompNode = (comp) => {
        const stepNode = document.createElement('div');
        stepNode.style.background = '#FFFFFF';
        stepNode.style.border = '0.5px solid var(--slate-200)';
        stepNode.style.borderRadius = '12px';
        stepNode.style.padding = '18px';
        stepNode.style.boxShadow = 'var(--shadow-sm)';
        stepNode.style.marginBottom = '0px';

        const coursesHtml = comp.courses.map((course, idx) => {
          return AppUI.renderCourseCardHTML(course, idx, primaryAssId);
        }).join('');

        stepNode.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #F8FAFC; border: 1px solid var(--slate-200); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <i data-lucide="${comp.icon}" style="width: 14px; height: 14px; color: ${comp.iconColor};"></i>
              </div>
              <h4 style="margin: 0; font-size: 14.5px; font-weight: 750; color: #0F172A;">${comp.title}</h4>
            </div>
            <span style="font-size: 9.5px; font-weight: 650; text-transform: uppercase; padding: 2px 6px; border-radius: 4px; background: ${comp.levelBg}; color: ${comp.levelColor}; white-space: nowrap;">${comp.levelText}</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
            ${coursesHtml}
          </div>
        `;
        return stepNode;
      };

      // 1. TIER 1 SECTION
      const tier1Section = document.createElement('div');
      tier1Section.style.display = 'flex';
      tier1Section.style.flexDirection = 'column';
      tier1Section.style.gap = '16px';
      tier1Section.style.width = '100%';

      const t1Header = document.createElement('div');
      t1Header.innerHTML = `
        <h4 style="margin: 0; font-size: 12px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">Tier 1: Core Foundation Skill Areas</h4>
      `;
      tier1Section.appendChild(t1Header);

      const tier1List = document.createElement('div');
      tier1List.style.display = 'flex';
      tier1List.style.flexDirection = 'column';
      tier1List.style.gap = '16px';
      tier1List.style.width = '100%';

      tier1Comp.forEach(comp => {
        tier1List.appendChild(renderCompNode(comp));
      });
      tier1Section.appendChild(tier1List);
      timelineWrapper.appendChild(tier1Section);

      // 2. TIER 2 SECTION
      const tier2Section = document.createElement('div');
      tier2Section.style.display = 'flex';
      tier2Section.style.flexDirection = 'column';
      tier2Section.style.gap = '16px';
      tier2Section.style.width = '100%';

      const t2Header = document.createElement('div');
      t2Header.innerHTML = `
        <h4 style="margin: 0; font-size: 12px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">Tier 2: Core Engineering Skill Areas</h4>
      `;
      tier2Section.appendChild(t2Header);

      const tier2List = document.createElement('div');
      tier2List.style.display = 'flex';
      tier2List.style.flexDirection = 'column';
      tier2List.style.gap = '16px';
      tier2List.style.width = '100%';
      
      // Show first 2 directly
      tier2Comp.slice(0, 2).forEach(comp => {
        tier2List.appendChild(renderCompNode(comp));
      });

      // Collapsible for Tier 2 secondary
      const tier2Hidden = tier2Comp.slice(2);
      if (tier2Hidden.length > 0) {
        const toggleBtnWrapper = document.createElement('div');
        toggleBtnWrapper.style.textAlign = 'center';
        toggleBtnWrapper.style.marginTop = '0px';
        toggleBtnWrapper.style.marginBottom = '0px';
        toggleBtnWrapper.innerHTML = `
          <button onclick="AppUI.toggleV3Core()" style="background: #F8FAFC; border: 1px solid var(--slate-200); color: var(--primary); font-size: 12.5px; font-weight: 700; cursor: pointer; padding: 8px 16px; border-radius: 20px; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;">
            <span>${AppUI._showV3Core ? 'Hide secondary core skill areas' : `Show ${tier2Hidden.length} more core skill area`}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px; transition: transform 0.2s; transform: ${AppUI._showV3Core ? 'rotate(180deg)' : 'rotate(0deg)'};"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        `;
        tier2List.appendChild(toggleBtnWrapper);

        if (AppUI._showV3Core) {
          tier2Hidden.forEach(comp => {
            tier2List.appendChild(renderCompNode(comp));
          });
        }
      }
      tier2Section.appendChild(tier2List);
      timelineWrapper.appendChild(tier2Section);

      // 3. TIER 3 SECTION
      const tier3Section = document.createElement('div');
      tier3Section.style.display = 'flex';
      tier3Section.style.flexDirection = 'column';
      tier3Section.style.gap = '16px';
      tier3Section.style.width = '100%';

      const t3Header = document.createElement('div');
      t3Header.innerHTML = `
        <h4 style="margin: 0; font-size: 12px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">Tier 3: Specialized Domain Skill Areas</h4>
      `;
      tier3Section.appendChild(t3Header);

      const tier3List = document.createElement('div');
      tier3List.style.display = 'flex';
      tier3List.style.flexDirection = 'column';
      tier3List.style.gap = '16px';
      tier3List.style.width = '100%';

      // Show first 1 directly (System Design)
      tier3Comp.slice(0, 1).forEach(comp => {
        tier3List.appendChild(renderCompNode(comp));
      });

      // Collapsible for Tier 3 secondary
      const tier3Hidden = tier3Comp.slice(1);
      if (tier3Hidden.length > 0) {
        const toggleBtnWrapper = document.createElement('div');
        toggleBtnWrapper.style.textAlign = 'center';
        toggleBtnWrapper.style.marginTop = '0px';
        toggleBtnWrapper.style.marginBottom = '0px';
        toggleBtnWrapper.innerHTML = `
          <button onclick="AppUI.toggleV3Specialized()" style="background: #F8FAFC; border: 1px solid var(--slate-200); color: var(--primary); font-size: 12.5px; font-weight: 700; cursor: pointer; padding: 8px 16px; border-radius: 20px; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;">
            <span>${AppUI._showV3Specialized ? 'Hide specialized skill areas' : `Show ${tier3Hidden.length} more specialized skill areas`}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px; transition: transform 0.2s; transform: ${AppUI._showV3Specialized ? 'rotate(180deg)' : 'rotate(0deg)'};"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        `;
        tier3List.appendChild(toggleBtnWrapper);

        if (AppUI._showV3Specialized) {
          tier3Hidden.forEach(comp => {
            tier3List.appendChild(renderCompNode(comp));
          });
        }
      }
      tier3Section.appendChild(tier3List);
      timelineWrapper.appendChild(tier3Section);

      wrapper.appendChild(timelineWrapper);
    }

    container.appendChild(wrapper);
  },

  render() {
    const contentArea = document.getElementById('journey-content-area');
    contentArea.innerHTML = ''; // Clear
    const widget = document.getElementById('dev-simulator-widget');
    if (widget) widget.remove();

    setTimeout(() => {
      lucide.createIcons();
    }, 50);

    // Sidebar jobs badge sync
    const activeRole = this.getActiveRoleProgress();
    const sidebarBadge = document.getElementById('sidebar-jobs-badge');
    if (activeRole && (activeRole.boardsUnlocked.internship || activeRole.boardsUnlocked.jobs)) {
      sidebarBadge.style.display = 'inline-flex';
      sidebarBadge.textContent = activeRole.boardsUnlocked.jobs ? "2" : "1";
    } else {
      sidebarBadge.style.display = 'none';
    }

    // Default currentTab if not initialized
    if (!this.currentTab) {
      this.currentTab = 'role_roadmaps';
    }

    // Render the Tabs Header only if we are on selection page or growth cycles view
    const shouldShowTabs = (this.currentTab === 'growth_cycles' || this.appState.state.activeRoleId === null);

    if (shouldShowTabs) {
      const tabsContainer = document.createElement('div');
      tabsContainer.style.display = 'flex';
      tabsContainer.style.alignItems = 'center';
      tabsContainer.style.gap = '8px';
      tabsContainer.style.background = 'var(--slate-200)';
      tabsContainer.style.padding = '4px';
      tabsContainer.style.borderRadius = '8px';
      tabsContainer.style.width = 'fit-content';
      tabsContainer.style.marginBottom = '32px';

      const isGrowthActive = this.currentTab === 'growth_cycles';
      const isRoadmapsActive = this.currentTab === 'role_roadmaps';

      const growthStyle = isGrowthActive 
        ? 'background: #FFFFFF; color: #0F172A; box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06); font-weight: 600;' 
        : 'background: transparent; color: #64748B; font-weight: 500; opacity: 0.85;';

      const roadmapsStyle = isRoadmapsActive 
        ? 'background: #FFFFFF; color: #0F172A; box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06); font-weight: 600;' 
        : 'background: transparent; color: #64748B; font-weight: 500; opacity: 0.85;';

      const growthTabLabel = (isGrowthActive && this.useNewStructure) ? 'Skill Based' : 'Growth Cycles';

      tabsContainer.innerHTML = `
        <button onclick="AppUI.switchTab('growth_cycles')" style="border: none; outline: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; border-radius: 6px; font-size: 13.5px; transition: all 0.2s; ${growthStyle}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 15px; height: 15px; color: ${isGrowthActive ? 'var(--primary)' : '#64748B'};"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <span class="tab-text-flip" style="display: inline-block;">${growthTabLabel}</span>
        </button>
        <button onclick="AppUI.switchTab('role_roadmaps')" style="border: none; outline: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; border-radius: 6px; font-size: 13.5px; transition: all 0.2s; ${roadmapsStyle}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 15px; height: 15px; color: ${isRoadmapsActive ? 'var(--primary)' : '#64748B'};"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          Role Roadmaps
        </button>
      `;
      contentArea.appendChild(tabsContainer);
 
       // Render toggle switch under the tabs only inside Growth Cycles tab
       if (isGrowthActive) {
         const switchWrapper = document.createElement('div');
         switchWrapper.style.display = 'flex';
         switchWrapper.style.flexDirection = 'column';
         switchWrapper.style.gap = '12px';
         switchWrapper.style.marginBottom = '32px';
         switchWrapper.style.textAlign = 'left';
 
         const trackBg = this.useNewStructure ? 'var(--primary)' : 'var(--slate-300)';
         const thumbTranslate = this.useNewStructure ? 'translateX(20px)' : 'translateX(0px)';
 
         switchWrapper.innerHTML = `
           <!-- Context copy for users -->
           <div style="font-size: 13px; color: #64748B; line-height: 1.45; max-width: 600px;">
             Explore a skill-area-focused layout instead of standard sprint-based timelines. Toggle the switch below to transition your learning milestones into a skill-based structure.
           </div>
           
           <!-- Switch row with toggle and tag -->
           <div style="display: flex; align-items: center; gap: 10px; cursor: pointer; width: fit-content;" id="new-structure-toggle-row">
             <div style="position: relative; width: 42px; height: 22px; background: ${trackBg}; border-radius: 999px; transition: background 0.2s; flex-shrink: 0;">
               <div style="position: absolute; left: 2px; top: 2px; width: 18px; height: 18px; background: #FFFFFF; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.15); transition: transform 0.2s; transform: ${thumbTranslate};"></div>
             </div>
             <span style="font-size: 13.5px; font-weight: 600; color: #475569; user-select: none;">New Structure</span>
             <span style="font-size: 9.5px; font-weight: 800; background: var(--brand-100); border: 0.5px solid var(--brand-300); color: var(--primary); padding: 1.5px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; margin-left: 2px;">New</span>
           </div>
         `;
 
         const toggleRow = switchWrapper.querySelector('#new-structure-toggle-row');
         if (toggleRow) {
           toggleRow.onclick = () => {
             this.useNewStructure = !this.useNewStructure;
             this.render();
           };
         }
 
         contentArea.appendChild(switchWrapper);
       }
    }

    // Render target view content inside a sub-container
    const innerContainer = document.createElement('div');
    innerContainer.id = 'inner-journey-content';
    contentArea.appendChild(innerContainer);

    if (this.currentTab === 'growth_cycles') {
      if (this.useNewStructure) {
        this.renderSkillBasedStructure(innerContainer);
      } else {
        this.renderGrowthCycles(innerContainer);
      }
    } else {
      if (this.appState.state.activeRoleId === null) {
        this.renderRoleSelectionRedesigned(innerContainer);
      } else {
        this.renderActiveRoleRoadmap(innerContainer);
      }
    }
  },

  /* RENDER SIMPLIFIED SELECTOR GRILL */
  renderRoleSelectionRedesigned(container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'enrolled-journey-container';

    // 1. Title Header
    const header = document.createElement('div');
    header.className = 'dashboard-header-panel';
    header.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; width: 100%; margin-bottom: 32px;">
        <div style="flex: 1; min-width: 280px;">
          <h2 style="font-family: var(--font-display); font-size: 26px; font-weight: 800; color: #0F172A; margin: 0 0 6px 0;">Find Your Career Path</h2>
          <p style="font-size: 14px; color: #64748B; margin: 0; line-height: 1.5;">Select a modern, role-based roadmap tailored for top product engineering, web development, and data teams.</p>
        </div>
        <button class="btn btn-secondary btn-journey-map-overview" onclick="AppUI.openOnboardingModal(true)" style="padding: 10px 18px; font-size: 13px; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border: 1px solid var(--border); background-color: #FFFFFF; cursor: pointer; transition: all 0.2s ease;">
          <i data-lucide="map" style="width:16px; height:16px; color: var(--primary);"></i> View Journey Map
        </button>
      </div>
    `;
    wrapper.appendChild(header);

    // 2. PATH FINDER QUIZ COMPONENT
    this.renderPathFinderQuiz(wrapper);

    // 4. CARDS GRID (Simplified cards only showing key differentiators)
    const grid = document.createElement('div');
    grid.className = 'role-grid-container';

    Object.keys(ROLES_METADATA).forEach(roleId => {
      const role = ROLES_METADATA[roleId];
      const isRecommended = this.appState.state.quizState.recommendedRoleId === roleId;

      const competenciesMap = {
        sde: [
          '1 – Programming with Problem Solving (DSA)',
          '2 – Frontend Development',
          '3 – Software Engineering Fundamentals',
          '6 – Aptitude & Professional Skills',
          '7 – Generative AI Engineering'
        ],
        ase: [
          '1 – Programming with Problem Solving (DSA)',
          '2 – Frontend Development',
          '3 – Software Engineering Fundamentals',
          '4 – Backend Development'
        ],
        frontend: [
          '1 – Programming with Problem Solving (DSA)',
          '2 – Frontend Development',
          '3 – Software Engineering Fundamentals'
        ],
        backend_node: [
          '1 – Programming with Problem Solving (DSA)',
          '4 – Backend Development',
          '3 – Software Engineering Fundamentals',
          '5 – System Design'
        ],
        backend_python: [
          '1 – Programming with Problem Solving (DSA)',
          '4 – Backend Development',
          '3 – Software Engineering Fundamentals',
          '5 – System Design'
        ],
        backend_java: [
          '1 – Programming with Problem Solving (DSA)',
          '4 – Backend Development',
          '3 – Software Engineering Fundamentals',
          '5 – System Design',
          '9 – Cloud and DevOps'
        ],
        data_analyst: [
          '4 – Backend Development',
          '6 – Aptitude & Professional Skills',
          '8 – Data Science & Machine Learning'
        ]
      };

      const logoMap = {
        sde: '<i data-lucide="chrome" style="color: #4285F4; width: 22px; height: 22px;"></i>',
        ase: '<i data-lucide="cpu" style="color: #EA4335; width: 22px; height: 22px;"></i>',
        frontend: '<i data-lucide="layout" style="color: #FBBC05; width: 22px; height: 22px;"></i>',
        backend_node: '<i data-lucide="database" style="color: #34A853; width: 22px; height: 22px;"></i>',
        backend_python: '<i data-lucide="code-2" style="color: #9333EA; width: 22px; height: 22px;"></i>',
        backend_java: '<i data-lucide="terminal" style="color: #2563EB; width: 22px; height: 22px;"></i>',
        data_analyst: '<i data-lucide="bar-chart-3" style="color: #EC4899; width: 22px; height: 22px;"></i>'
      };

      const companyMap = {
        sde: 'Google Inc.',
        ase: 'Oracle Corp.',
        frontend: 'Razorpay',
        backend_node: 'PayPal Inc.',
        backend_python: 'Spotify Technologies',
        backend_java: 'Wipro Technologies',
        data_analyst: 'Swiggy'
      };

      const skillAreas = competenciesMap[roleId] || ['Fundamentals', 'Deployment'];
      const roleLogo = logoMap[roleId] || '<i data-lucide="briefcase"></i>';
      const roleCompany = companyMap[roleId] || 'Product Team';

      const card = document.createElement('div');
      card.className = `role-card-redesigned cat-${role.category} ${isRecommended ? 'recommended-highlight' : ''}`;

      // Click event for the whole card
      card.onclick = (e) => {
        if (e.target.closest('.btn') || e.target.closest('button') || e.target.closest('a')) {
          return;
        }
        AppUI.openRoleOverviewModal(role.id);
      };

      card.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px; flex: 1;">
          <!-- Card Header with Logo and Title -->
          <div class="card-figma-header" style="display: flex; gap: 14px; align-items: center;">
            <div class="role-logo-circle" style="width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #F8FAFC; border: 1px solid var(--slate-200); flex-shrink: 0;">
              ${roleLogo}
            </div>
            <div style="min-width: 0;">
              <h3 class="role-card-title" style="margin: 0; font-size: 16px; font-weight: 850; color: #0F172A; line-height: 1.3;">${role.title}</h3>
            </div>
          </div>

          <!-- Recommended Badge if applicable -->
          ${isRecommended ? `
            <div class="role-card-pills" style="display: flex; flex-wrap: wrap; gap: 6px;">
              <span class="role-card-pill recommended" style="font-size: 10px; font-weight: 700; background-color: #ECFDF5; color: #10B981; padding: 3px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;"><i data-lucide="sparkles" style="width:10px; height:10px;"></i> Recommended</span>
            </div>
          ` : ''}

          <!-- Quick Info list (Average CTC) -->
          <div class="role-card-info-list" style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; color: #475569;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <i data-lucide="briefcase" style="width: 14px; height: 14px; color: #94A3B8;"></i>
              <span style="font-weight: 600; color: #0F172A;">Average CTC: <span class="gradient-text" style="font-weight: 800; font-size: 14.5px;">${role.indicativeCtc}</span></span>
            </div>
          </div>

          <!-- Skill Areas Section -->
          <div class="role-card-skill-areas" style="flex: 1; display: flex; flex-direction: column; gap: 6px;">
            <div style="display: inline-flex; align-items: center; gap: 6px; width: fit-content; margin-top: 4px;">
              <span style="font-size: 10.5px; font-weight: 800; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Skill Areas</span>
              <span class="info-tooltip-container left-aligned" style="position: relative; display: inline-flex; align-items: center; cursor: pointer;">
                <i data-lucide="info" style="width: 12px; height: 12px; color: #94A3B8; flex-shrink: 0;"></i>
                <span class="info-tooltip-box" style="width: 260px;">Skill Areas are the groups of skills that companies demand for jobs. These are the critical skills asked in technical interviews and required for engineering roles.</span>
              </span>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${skillAreas.map(comp => `
                <span class="skill-area-tag-pill" style="font-size: 11px; font-weight: 600; background-color: #F8FAFC; border: 1px solid var(--slate-200); color: #334155; padding: 3px 8px; border-radius: 6px; display: inline-flex; align-items: center;">${comp}</span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Bottom section: Hiring Companies and CTA -->
        <div class="role-card-footer">
          <!-- Top Hiring Companies -->
          <div class="role-card-hiring" style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 11px; font-weight: 700; color: #64748B; flex-shrink: 0;">Top Hiring:</span>
            <div style="display: flex; flex-wrap: wrap; gap: 4px; align-items: center;">
              ${role.companies.slice(0, 3).map(c => `
                <span style="font-size: 11px; font-weight: 600; padding: 2px 6px; border-radius: 4px; background: #FFFBEB; border: 1px solid #FEF3C7; color: var(--amber-700);">${c.name}</span>
              `).join('')}
            </div>
          </div>

          <!-- CTA Action Buttons -->
          <div class="role-card-cta-row" style="display: flex; align-items: center; gap: 10px; width: 100%;">
            <button class="btn btn-primary" onclick="AppUI.enrollInRoleDirect('${role.id}')" style="flex: 1; height: 40px; border-radius: 8px; font-size: 13px; font-weight: 750; display: inline-flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; box-shadow: var(--shadow-sm); width: 100%;">
              View Role <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
            </button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    container.appendChild(wrapper);
  },

  enrollInRoleDirect(roleId) {
    const curRoleId = this.appState.state.activeRoleId;
    if (curRoleId && curRoleId !== roleId) {
      this.openRoleSwitchModal(roleId);
    } else {
      this.appState.enrollInRole(roleId);
      this.render();
    }
  },

  takeAssessmentDirect(roleId) {
    const curRoleId = this.appState.state.activeRoleId;
    if (curRoleId && curRoleId !== roleId) {
      this.openRoleSwitchModal(roleId);
    } else {
      if (!curRoleId) {
        this.appState.enrollInRole(roleId);
      }
      const role = ROLES_METADATA[roleId];
      const assessId = role.internshipAssessments[0].id;
      this.openAssessmentModal(assessId, true);
    }
  },

  /* RENDER PATH FINDER QUIZ */
  renderPathFinderQuiz(parentContainer) {
    const quizState = this.appState.state.quizState;
    
    if (quizState.step === 0) {
      const closedPill = document.createElement('div');
      closedPill.className = 'quiz-section-container';
      closedPill.style.padding = '16px 24px';
      closedPill.innerHTML = `
        <div class="quiz-header" style="border:none; margin:0; padding:0;">
          <h3 style="font-size:15px;"><i data-lucide="compass"></i> Not sure which career matches your skills?</h3>
          <button class="quiz-toggle-btn" onclick="AppUI.startQuiz()"><i data-lucide="sparkles"></i> Try Career Path Finder</button>
        </div>
      `;
      parentContainer.appendChild(closedPill);
      return;
    }

    const quizBox = document.createElement('div');
    quizBox.className = 'quiz-section-container';

    const qHeader = document.createElement('div');
    qHeader.className = 'quiz-header';
    qHeader.innerHTML = `
      <h3><i data-lucide="compass"></i> Career Path Finder Quiz</h3>
      <button class="quiz-toggle-btn" onclick="AppUI.resetQuiz()"><i data-lucide="x"></i> Clear/Collapse</button>
    `;
    quizBox.appendChild(qHeader);

    const body = document.createElement('div');
    body.className = 'quiz-panel-body';

    if (quizState.step === 1) {
      body.innerHTML = `
        <span class="quiz-question-title">Step 1: What type of software tasks appeal to you most?</span>
        <div class="quiz-options-row">
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('interest', 'ui')">Designing user interfaces & visual layouts</div>
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('interest', 'backend')">Processing logic, server engines & databases</div>
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('interest', 'systems')">General software frameworks & computer systems</div>
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('interest', 'data')">Data statistics, insights & business metrics</div>
        </div>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width: 33%"></div></div>
      `;
    } else if (quizState.step === 2) {
      body.innerHTML = `
        <span class="quiz-question-title">Step 2: What is your current programming experience?</span>
        <div class="quiz-options-row">
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('experience', 'beginner')">Absolute beginner (Never coded before)</div>
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('experience', 'intermediate')">Know variables, loops & basic coding logic</div>
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('experience', 'advanced')">Familiar with OOP, databases & structures</div>
        </div>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width: 66%"></div></div>
      `;
    } else if (quizState.step === 3) {
      body.innerHTML = `
        <span class="quiz-question-title">Step 3: What is your main placement goal?</span>
        <div class="quiz-options-row">
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('goal', 'mnc')">Join top product MNCs (Uber, Amazon, PayPal)</div>
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('goal', 'startup')">Join fast-growing internet startups (Razorpay, Swiggy)</div>
          <div class="quiz-option-card" onclick="AppUI.submitQuizAnswer('goal', 'consultancy')">Get hired in large IT consultancies (TCS, Wipro, Infosys)</div>
        </div>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width: 95%"></div></div>
      `;
    } else if (quizState.step === 4) {
      const recRole = ROLES_METADATA[quizState.recommendedRoleId];
      body.innerHTML = `
        <div class="quiz-result-box">
          <div class="quiz-result-text">
            <h4>🎯 Recommended Path: ${recRole.title}</h4>
            <p>Based on your profile, this roadmap matches your technical experience level and career goals perfectly.</p>
          </div>
          <div style="display:flex; gap:12px;">
            <button class="btn btn-secondary" onclick="AppUI.resetQuiz()">Retake Quiz</button>
            <button class="btn btn-primary" onclick="AppUI.enrollInRoleDirect('${recRole.id}')">Start Learning Path</button>
          </div>
        </div>
      `;
    }

    quizBox.appendChild(body);
    parentContainer.appendChild(quizBox);
  },

  startQuiz() {
    this.appState.state.quizState.step = 1;
    this.appState.saveState();
    this.render();
  },

  resetQuiz() {
    this.appState.state.quizState = {
      step: 0,
      answers: { interest: null, experience: null, goal: null },
      recommendedRoleId: null
    };
    this.appState.saveState();
    this.render();
  },

  submitQuizAnswer(field, val) {
    const quizState = this.appState.state.quizState;
    quizState.answers[field] = val;
    
    if (quizState.step < 3) {
      quizState.step++;
    } else {
      quizState.step = 4;
      const ans = quizState.answers;
      let recId = 'ase';

      if (ans.interest === 'ui') {
        recId = 'frontend';
      } else if (ans.interest === 'data') {
        recId = 'data_analyst';
      } else if (ans.interest === 'systems') {
        if (ans.experience === 'beginner') {
          recId = 'ase';
        } else {
          recId = 'sde';
        }
      } else if (ans.interest === 'backend') {
        if (ans.goal === 'startup') {
          recId = 'backend_node';
        } else if (ans.goal === 'mnc') {
          recId = 'backend_java';
        } else {
          recId = 'backend_python';
        }
      }
      quizState.recommendedRoleId = recId;
    }
    this.appState.saveState();
    this.render();
  },

  getRoleLearningPath(role) {
    // Guarantee courses are enriched
    const courses = getEnrichedRoleCourses(role.id);
    role.courses = courses;

    if (role.id === 'sde') {
      return [
        {
          title: 'Programming with problem-solving',
          courses: [courses[0], courses[1], courses[2], courses[4], courses[6]]
        },
        {
          title: 'Front-end development',
          courses: [courses[7], courses[8], courses[9], courses[10]]
        },
        {
          title: 'Software engineering fundamentals',
          courses: [courses[3], courses[5], courses[11], courses[12], courses[13], courses[14]]
        },
        {
          title: 'Aptitude and professional skills',
          courses: [courses[15], courses[16], courses[17]]
        },
        {
          title: 'Generative AI engineering',
          courses: [courses[18], courses[19], courses[20]]
        }
      ];
    }

    if (role.id === 'ase') {
      return [
        {
          title: 'Programming & Problem Solving',
          courses: [courses[0], courses[1]]
        },
        {
          title: 'Web Development & Version Control',
          courses: [courses[3], courses[4], courses[9]]
        },
        {
          title: 'Database Systems & Infrastructure',
          courses: [courses[2], courses[5], courses[6]]
        },
        {
          title: 'Software Engineering Lifecycle',
          courses: [courses[7], courses[8], courses[10], courses[11]]
        }
      ];
    }

    if (role.id === 'frontend') {
      return [
        {
          title: 'HTML & CSS Responsive Layouts',
          courses: [courses[0], courses[1], courses[6]]
        },
        {
          title: 'Modern JavaScript & Dynamic Web',
          courses: [courses[2], courses[3]]
        },
        {
          title: 'React JS Component Architecture',
          courses: [courses[4], courses[7], courses[8]]
        },
        {
          title: 'Next.js & Performance Engineering',
          courses: [courses[5], courses[9], courses[10], courses[11]]
        }
      ];
    }

    return [
      {
        title: 'Stage 1: Core Foundations',
        topics: [
          {
            title: 'ESSENTIAL CONCEPTS',
            courses: [courses[0], courses[1]]
          },
          {
            title: 'PRACTICAL PROGRAMMING',
            courses: [courses[2], courses[3]]
          }
        ]
      },
      {
        title: 'Stage 2: Intermediate Concepts',
        topics: [
          {
            title: 'DATA & STORAGE',
            courses: [courses[4], courses[5]]
          },
          {
            title: 'ARCHITECTURE & APIs',
            courses: [courses[6], courses[7]]
          }
        ]
      },
      {
        title: 'Stage 3: Advanced Specialization',
        topics: [
          {
            title: 'PRODUCTION TOOLING',
            courses: [courses[8], courses[9]]
          },
          {
            title: 'SCALE & CAPSTONE',
            courses: [courses[10], courses[11]]
          }
        ]
      }
    ];
  },

  renderActiveRoleRoadmap(container) {
    const roleId = this.appState.state.activeRoleId;
    const role = ROLES_METADATA[roleId];
    if (!role) {
      this.appState.state.activeRoleId = null;
      this.appState.saveState();
      this.render();
      return;
    }
    const progress = this.appState.state.rolesProgress[roleId];
    const isAssessmentCleared = progress.internshipStatus === 'passed';
    const isFailed = progress.internshipStatus === 'failed';
    const primaryAss = role.internshipAssessments[0];

    const alternateNamesMap = {
      'sde': "'Software Engineer', 'Associate Developer', or 'Programmer Analyst'",
      'frontend': "'UI Engineer', 'Frontend Engineer', or 'Web Developer'",
      'backend': "'Backend Engineer', 'Systems Engineer', or 'Platform Engineer'",
      'data-science': "'ML Engineer', 'Data Analyst', or 'Quantitative Researcher'",
      'devops': "'Site Reliability Engineer', 'Cloud Infrastructure Engineer', or 'Platform Engineer'",
      'generative-ai': "'AI Developer', 'Prompt Engineer', or 'LLM Engineer'",
      'fullstack': "'Software Engineer', 'Product Engineer', or 'Full Stack Engineer'"
    };
    const alternateNames = alternateNamesMap[roleId] || "'Software Engineer', 'Associate Developer', or 'Programmer Analyst'";

    const tickerMetricsMap = {
      'sde': { hired: '1,240+', openings: '4,850+', trend: 'Top 1% high-growth career track in 2026.' },
      'frontend': { hired: '980+', openings: '3,620+', trend: 'High Demand: React & Next.js skills mandatory.' },
      'backend': { hired: '1,120+', openings: '4,150+', trend: 'Scale Critical: 94% of teams test DB indexing.' },
      'data-science': { hired: '540+', openings: '2,180+', trend: 'AI Surge: 3.5x year-over-year posting growth.' },
      'devops': { hired: '460+', openings: '1,950+', trend: 'Cloud First: Docker & Kubernetes are standard.' },
      'generative-ai': { hired: '320+', openings: '1,450+', trend: 'Fastest Growing: Emerging LLM & agent pipelines.' },
      'fullstack': { hired: '1,450+', openings: '5,920+', trend: 'Max Versatility: 2x higher hiring team priority.' }
    };
    const tickerMetrics = tickerMetricsMap[roleId] || { hired: '1,000+', openings: '4,000+', trend: 'High-growth career track in 2026.' };

        const packageStyles = {
      Foundational: { bg: 'var(--slate-50)', border: 'var(--slate-200)', color: 'var(--slate-600)', label: 'Foundational' },
      Beginner: { bg: 'var(--slate-50)', border: 'var(--slate-200)', color: 'var(--slate-600)', label: 'Beginner' },
      Intermediate: { bg: 'var(--brand-50)', border: 'var(--brand-200)', color: 'var(--brand-600)', label: 'Intermediate' },
      Advanced: { bg: 'var(--brand-100)', border: 'var(--brand-300)', color: 'var(--brand-800)', label: 'Advanced' },
      Expert: { bg: 'var(--amber-50)', border: 'var(--amber-200)', color: 'var(--amber-700)', label: 'Expert' }
    };

    const targetLevels = {
      sde: {
        "Programming with Problem Solving (DSA)": 4,
        "Frontend Development": 3,
        "Software Engineering Fundamentals": 4,
        "Backend Development": 4,
        "System Design & Cloud": 3,
        "Aptitude & Professional Skills": 3,
        "Generative AI Engineering": 2
      },
      ase: {
        "Programming with Problem Solving (DSA)": 2,
        "Frontend Development": 2,
        "Software Engineering Fundamentals": 1,
        "Backend Development": 1,
        "System Design & Cloud": 1,
        "Aptitude & Professional Skills": 2,
        "Generative AI Engineering": 1
      },
      frontend: {
        "Programming with Problem Solving (DSA)": 2,
        "Frontend Development": 3,
        "Software Engineering Fundamentals": 2,
        "Backend Development": 1,
        "System Design & Cloud": 1,
        "Aptitude & Professional Skills": 2,
        "Generative AI Engineering": 1
      }
    };

    const getFocusText = (title) => {
      const normKey = title.toLowerCase().replace(/[^a-z0-9]/g, '');
      const focusMap = {
        "programmingwithproblemsolving": "Arrays, Recursion, Trees, Graphs, Sorting",
        "programmingwithproblemsolvingdsa": "Arrays, Recursion, Trees, Graphs, Sorting",
        "frontenddevelopment": "HTML5/CSS3, ES6+, React JS, Next.js, SSR",
        "softwareengineeringfundamentals": "Git Branching, Clean Code, Code Reviews",
        "backenddevelopment": "API Design, DB Schemas, SQL, Security Rules",
        "systemdesign": "Microservices, Load Balancing, Caching, Databases",
        "systemdesigncloud": "Cloud Architectures, Load Balancing, DNS, AWS",
        "cloudanddevops": "CI/CD Pipelines, Docker, Kubernetes, Hosting",
        "aptitudeandprofessionalskills": "Analytical Thinking, Written & Verbal Communication",
        "generativeaiengineering": "LLMs, Prompt Design, Vector DBs, RAG",
        "datasciencemachinelearning": "Pandas/NumPy, Data Cleaning, Regression Models"
      };
      return focusMap[normKey] || "Core concepts and industry requirements";
    };

    // Count completed courses
    let completedCount = 0;
    role.courses.forEach(c => {
      if ((progress.courseProgress[c.id] || 0) === 100) completedCount++;
    });

    const totalCourses = role.courses.length;
    const learningPath = this.getRoleLearningPath(role);

    // Calculate level states for skill areas
    const skillAreaStates = learningPath.map((mod, modIdx) => {
      let maxQualifiedLevel = progress.qualifiedLevelsMap && progress.qualifiedLevelsMap[mod.title] !== undefined ? progress.qualifiedLevelsMap[mod.title] : 0;
      
      // If passed but qualifiedLevel is 0, fallback
      if (progress.internshipStatus === 'passed' && maxQualifiedLevel === 0) {
        maxQualifiedLevel = ((modIdx + 2) % 4) + 1;
      }

      let modCourses = [];
      if (mod.courses) {
        modCourses = mod.courses;
      } else if (mod.topics) {
        mod.topics.forEach(top => {
          modCourses.push(...top.courses);
        });
      }

      const firstUncompletedCourse = modCourses.find(c => (progress.courseProgress[c.id] || 0) < 100);

      return {
        mod,
        modIdx,
        level: maxQualifiedLevel,
        courses: modCourses,
        firstUncompletedCourse
      };
    });

    const verifiedCount = skillAreaStates.filter(f => f.level > 0).length;
    const lowestLevel = skillAreaStates.length > 0 ? Math.min(...skillAreaStates.map(f => f.level)) : 0;

    // Calculate sum of levels for circular gauge
    const sumOfLevels = skillAreaStates.reduce((acc, curr) => acc + curr.level, 0);

    // role_ready_percent formula: weight = 0.5 * (courses_completed / total_courses) + 0.5 * (sum_of_levels / 28)
    const roleReadyPercent = Math.min(100, Math.round((
      0.5 * (completedCount / totalCourses) + 
      0.5 * (sumOfLevels / 28)
    ) * 100));

    // Determine package tier based on lowest level verified across all skill areas
    let packageChip = 'Beginner';
    let packageDescription = 'Task execution & SDE-I readiness';
    
    if (lowestLevel === 2) {
      packageChip = 'Intermediate';
      packageDescription = 'Feature ownership & SDE-II readiness';
    } else if (lowestLevel === 3) {
      packageChip = 'Advanced';
      packageDescription = 'Module design & Senior SDE readiness';
    } else if (lowestLevel === 4) {
      packageChip = 'Expert';
      packageDescription = 'System architecture & Principal SDE readiness';
    }

    // Determine overall student state
    let studentState = 'A'; // A: Fresh, B: Learning, C: Assessed (weak), D: Assessed (mixed), E: Fully verified (high)
    if (progress.internshipStatus === 'none') {
      if (completedCount > 0) {
        studentState = 'B';
      } else {
        studentState = 'A';
      }
    } else {
      const allThreePlus = skillAreaStates.every(f => f.level >= 3);
      const allOneOrTwo = skillAreaStates.every(f => f.level <= 2);
      if (allThreePlus) {
        studentState = 'E';
      } else if (allOneOrTwo) {
        studentState = 'C';
      } else {
        studentState = 'D';
      }
    }

    // Next step configuration
    let nextStepPrimary = '';
    let nextStepSecondary = '';
    let nextStepCtaText = '';
    let nextStepSecondaryLink = '';

    if (studentState === 'A' || studentState === 'B') {
      nextStepPrimary = "Take the role assessment to verify your core levels.";
      nextStepSecondary = "Clear Level 2 in Programming with Problem Solving (DSA) to start.";
      nextStepCtaText = "Take assessment";
    } else {
      // Find the first skill area that is below target level
      const weakest = skillAreaStates.find(f => {
        const target = (targetLevels[roleId] && targetLevels[roleId][f.mod.title]) || 2;
        return f.level < target;
      });

      if (weakest) {
        const targetLvl = (targetLevels[roleId] && targetLevels[roleId][weakest.mod.title]) || 2;
        const levelNames = ['none', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
        const targetName = levelNames[targetLvl];
        const currentName = levelNames[weakest.level];

        nextStepPrimary = `Raise ${weakest.mod.title} to ${targetName}.`;
        nextStepSecondary = `Your current level is ${currentName}. Take the assessment to level up.`;
        nextStepCtaText = "Take assessment to level up";
      } else {
        nextStepPrimary = "You meet all target levels for this role!";
        nextStepSecondary = "You're fully job-ready. Explore matches now.";
        nextStepCtaText = "Explore jobs";
      }
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'enrolled-journey-container';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '24px';

    // Back Button header row
    const backBtnRow = document.createElement('div');
    backBtnRow.style.display = 'flex';
    backBtnRow.style.alignItems = 'center';
    backBtnRow.style.gap = '12px';
    backBtnRow.style.justifyContent = 'flex-start';
    backBtnRow.style.textAlign = 'left';
    backBtnRow.innerHTML = `
      <button onclick="AppUI.exitActiveRoleToViewSelection()" style="width: 32px; height: 32px; border-radius: 50%; background: #FFFFFF; border: 0.5px solid var(--slate-300); display: flex; align-items: center; justify-content: center; color: #475569; cursor: pointer; transition: all 0.2s ease; flex-shrink: 0; padding: 0;">
        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
      </button>
      <span style="font-size: 13.5px; font-weight: 500; color: #64748B;">Back to Career Tracks</span>
    `;
    wrapper.appendChild(backBtnRow);

    // 1. HEADER BLOCK
    const headerBlock = document.createElement('div');
    headerBlock.className = 'premium-card-item';
    headerBlock.style.padding = '32px';
    headerBlock.style.display = 'flex';
    headerBlock.style.flexWrap = 'wrap';
    headerBlock.style.gap = '28px';
    headerBlock.style.alignItems = 'flex-start';
    headerBlock.style.textAlign = 'left';

    const outcomesListHtml = [
      "Solve complex DSA problems under time pressure",
      "Design systems that scale to millions",
      "Build and deploy full-stack apps",
      "Write clean, tested, reviewable code",
      "Crack top product-company interviews"
    ].map(outcome => `
      <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #475569; line-height: 1.5;">
        <i data-lucide="check" style="width: 16px; height: 16px; color: var(--green-600); flex-shrink: 0; margin-top: 2px;"></i>
        <span>${outcome}</span>
      </li>
    `).join('');

    const isHeaderExpanded = this._headerExpanded || false;

    let headerLeftHtmlContent = '';
    if (isHeaderExpanded) {
      headerLeftHtmlContent = `
        <div style="margin-top: 12px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; border-bottom: 0.5px solid #F1F5F9; padding-bottom: 12px; border-top: 0.5px solid #F1F5F9; padding-top: 12px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 11px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Avg. CTC:</span>
            <span style="font-size: 15px; font-weight: 700; color: var(--primary);">${role.indicativeCtc || '₹8-30 LPA'}</span>
          </div>
          
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <span style="font-size: 11px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Companies hiring for this role:</span>
            <div style="display: flex; gap: 6px;">
              ${role.companies.map(c => {
                const logoColors = {
                  GS: '#1E3A8A', PP: '#003087', UB: '#000000', DI: '#0F172A',
                  OR: '#F30000', WP: '#47007A', IN: '#007CC3', TC: '#1B365D',
                  RP: '#0B72E7', SW: '#FC8019', FR: '#004A92', AM: '#FF9900',
                  SP: '#1ED760', NF: '#E50914', MS: '#00A4EF', GO: '#4285F4',
                  FB: '#1877F2', SF: '#00A1E0'
                };
                const bg = logoColors[c.logo] || '#64748B';
                return `
                  <span style="width: 24px; height: 24px; border-radius: 50%; background: ${bg}; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 500; font-family: monospace; box-shadow: var(--shadow-sm);" title="${c.name}">${c.logo}</span>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <div style="margin-top: 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; border-bottom: 0.5px solid #F1F5F9; padding-bottom: 6px;">
            <h4 style="margin: 0; font-size: 11px; font-weight: 500; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">What you'll be able to do</h4>
          </div>
          <div id="outcomes-content" style="display: block;">
            <ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px;">
              ${outcomesListHtml}
            </ul>
          </div>
        </div>
      `;
    }

    const headerLeft = `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 16px; text-align: left;">
        <div>
          <!-- Page title row -->
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <i data-lucide="${role.icon || 'code-2'}" style="width: 22px; height: 22px; color: var(--primary); flex-shrink: 0;"></i>
            <h2 style="font-size: 22px; font-weight: 500; color: #0F172A; margin: 0; line-height: 1.2;">${role.title}</h2>
            <div class="info-tooltip-container left-aligned tooltip-bottom" style="cursor: help; color: #94A3B8; display: inline-flex; align-items: center; padding: 4px; vertical-align: middle;">
              <i data-lucide="info" style="width: 16px; height: 16px;"></i>
              <div class="info-tooltip-box" style="width: 280px; font-size: 11.5px; font-weight: 500;">
                The same role can have 10 different names across companies. A '${role.title}' at one company might be listed as ${alternateNames} elsewhere. Search by skills and responsibilities, not just the title.
              </div>
            </div>
          </div>
          
          <!-- One-liner SDE description directly under title -->
          <p style="margin: 6px 0 0 0; font-size: 13.5px; color: #475569; line-height: 1.5; font-weight: 400; text-align: left; max-width: 800px;">
            ${role.description || "Design, build, and deploy robust scalable software systems. Master key programming paradigms, algorithms, and architectures to qualify for high-tier engineering packages."}
          </p>

          <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 10px; align-items: flex-start; width: 100%;">

            <!-- Progress stats row placed under matrix link -->
            <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <i data-lucide="award" style="width: 14.5px; height: 14.5px; color: var(--primary);"></i>
                <span style="font-size: 12.5px; color: #475569;"><strong style="font-weight: 600; color: #0F172A;">${verifiedCount} / 7</strong> skill areas verified</span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px;">
                <i data-lucide="book-open" style="width: 14.5px; height: 14.5px; color: var(--primary);"></i>
                <span style="font-size: 12.5px; color: #475569;"><strong style="font-weight: 600; color: #0F172A;">${completedCount} / ${totalCourses}</strong> courses completed</span>
              </div>
            </div>

            <!-- Action CTAs Row with View Matrix aligned to the right -->
            <div style="margin-top: 8px; display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 12px; box-sizing: border-box;">
              <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                <button onclick="document.getElementById('learning-path-section').scrollIntoView({ behavior: 'smooth' });"
                        style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 20px; background: var(--primary); border: none; color: #FFFFFF; font-weight: 600; font-size: 13.5px; border-radius: 8px; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px -1px rgba(12, 60, 255, 0.15);">
                  Start learning
                </button>
                <button onclick="AppUI.openAssessmentInfoModal('${primaryAss.id}', true);"
                        style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 9px 18px; background: #FFFFFF; border: 1.5px solid var(--primary); color: var(--primary); font-weight: 600; font-size: 13.5px; border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                  ${(isAssessmentCleared || isFailed) ? 'Retake Assessments' : 'Take Assessments'}
                </button>
              </div>
              
              <button onclick="document.getElementById('matrix-dialog').showModal();"
                      style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 9px 18px; background: #FFFFFF; border: 1px solid var(--slate-200); color: #475569; font-weight: 600; font-size: 13.5px; border-radius: 8px; cursor: pointer; transition: all 0.2s; margin-left: auto;">
                <i data-lucide="layout-grid" style="width: 15px; height: 15px; color: #64748B;"></i>
                View skill area matrix
              </button>
            </div>

            <!-- Animated Stats Ticker -->
            <div style="margin-top: 10px; border-top: 0.5px solid #F1F5F9; padding-top: 8px; width: 100%;">
              <div class="stats-ticker-container" style="height: 32px; overflow: hidden; position: relative;">
                <div class="ticker-track" style="display: flex; flex-direction: column; width: 100%; transition: transform 0.6s ease;">
                  <!-- Slide 1 -->
                  <div style="height: 32px; display: flex; align-items: center; gap: 8px;">
                    <div style="display: flex; align-items: center; margin-right: 4px;">
                      <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #FFFFFF; background: #3B82F6; color: #FFFFFF; font-size: 8px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; margin-right: -6px; z-index: 3;">A</span>
                      <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #FFFFFF; background: #10B981; color: #FFFFFF; font-size: 8px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; margin-right: -6px; z-index: 2;">M</span>
                      <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #FFFFFF; background: #F59E0B; color: #FFFFFF; font-size: 8px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; z-index: 1;">K</span>
                    </div>
                    <span style="font-size: 12.5px; color: #475569; line-height: 1.2;">
                      <strong style="color: #0F172A; font-weight: 650;">${tickerMetrics.hired} students</strong> hired for this role last quarter.
                    </span>
                  </div>
                  <!-- Slide 2 -->
                  <div style="height: 32px; display: flex; align-items: center; gap: 8px;">
                    <div style="width: 20px; height: 20px; border-radius: 50%; background: #ECFDF5; border: 0.5px solid var(--green-200); display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <i data-lucide="briefcase" style="width: 10px; height: 10px; color: #10B981;"></i>
                    </div>
                    <span style="font-size: 12.5px; color: #475569; line-height: 1.2;">
                      <strong style="color: #0F172A; font-weight: 650;">${tickerMetrics.openings} active openings</strong> listed last quarter.
                    </span>
                  </div>
                  <!-- Slide 3 -->
                  <div style="height: 32px; display: flex; align-items: center; gap: 8px;">
                    <div style="width: 20px; height: 20px; border-radius: 50%; background: var(--amber-50); border: 0.5px solid var(--amber-200); display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <i data-lucide="trending-up" style="width: 10px; height: 10px; color: var(--amber-600);"></i>
                    </div>
                    <span style="font-size: 12.5px; color: #475569; line-height: 1.2;">
                      <strong style="color: var(--amber-600); font-weight: 700;">${tickerMetrics.trend}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        ${headerLeftHtmlContent}
      </div>
    `;

    const expandCollapseRow = `
      <div style="width: 100%; display: flex; justify-content: center; margin-top: 6px; border-top: 0.5px solid #F1F5F9; padding-top: 8px; margin-bottom: -8px;">
        <button onclick="AppUI.toggleHeaderDetails()" style="background: none; border: none; color: var(--primary); font-size: 13px; font-weight: 650; cursor: pointer; padding: 4px 12px; display: inline-flex; align-items: center; gap: 4px; transition: opacity 0.2s;">
          <span>${isHeaderExpanded ? 'View less details' : 'View details'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px; transition: transform 0.2s; transform: ${isHeaderExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    `;

    headerBlock.innerHTML = headerLeft + expandCollapseRow;

    // 2. "HOW IT WORKS" PRODUCT TOUR GUIDE STRIP
    let tourStrip = null;
    if (!this._tourGuideDismissed) {
      tourStrip = document.createElement('div');
      tourStrip.id = 'how-it-works-tour-strip';
      tourStrip.innerHTML = `
        <div class="premium-card-item" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; text-align: left; width: 100%; box-sizing: border-box;">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 280px;">
            <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--brand-50); border: 1px solid var(--brand-200); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <i data-lucide="compass" style="width: 16px; height: 16px; color: var(--brand-600);"></i>
            </div>
            <div style="flex: 1; min-width: 0;">
              <h4 style="margin: 0; font-size: 13.5px; font-weight: 700; color: #0F172A;">How It Works</h4>
              <p style="margin: 2px 0 0 0; font-size: 12px; color: #475569; line-height: 1.4;">
                Learn how your career track, mapped skill areas, verified levels, and assessments work together in 1 minute.
              </p>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
            <button onclick="AppUI.openProductTourModal()" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; background: var(--brand-600); border: none; color: #FFFFFF; font-weight: 600; font-size: 12.5px; border-radius: 6px; cursor: pointer; transition: background 0.2s;">
              <i data-lucide="play" style="width: 12px; height: 12px; fill: #FFFFFF; color: #FFFFFF;"></i> Start Guide Tour
            </button>
            <button onclick="AppUI.dismissTourGuide()" style="padding: 8px 16px; background: #FFFFFF; border: 1px solid var(--slate-200); color: #475569; font-weight: 650; font-size: 12.5px; border-radius: 6px; cursor: pointer; transition: all 0.2s;">
               Dismiss
            </button>
          </div>
        </div>
      `;
    }

    // 3. NEXT STEP CARD
    const nextStepCard = document.createElement('div');
    nextStepCard.style.background = 'var(--brand-100)';
    nextStepCard.style.border = '0.5px solid var(--brand-300)';
    nextStepCard.style.borderRadius = '12px';
    nextStepCard.style.padding = '20px';
    nextStepCard.style.textAlign = 'left';
    nextStepCard.innerHTML = `
      <span style="font-size: 10px; font-weight: 500; color: var(--primary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Your next step</span>
      <h3 style="font-size: 18px; font-weight: 500; color: #0F172A; margin: 6px 0 4px 0; line-height: 1.3;">${nextStepPrimary}</h3>
      <p style="margin: 0 0 16px 0; font-size: 13px; color: #64748B; line-height: 1.45;">${nextStepSecondary}</p>
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 10px;">
        <button class="btn btn-primary" onclick="AppUI.handleNextStepCta('${studentState}')" style="padding: 10px 20px; font-size: 13px; background: var(--primary); border: none; color: #FFFFFF;">
          ${nextStepCtaText}
        </button>
        ${nextStepSecondaryLink ? `
          <a href="#" onclick="document.getElementById('assessment-section').scrollIntoView({ behavior: 'smooth' }); return false;" style="font-size: 12px; color: var(--primary-dark); text-decoration: underline;">
            ${nextStepSecondaryLink}
          </a>
        ` : ''}
      </div>
    `;
    // wrapper.appendChild(nextStepCard); // Hidden for now

    // Two-Column Content Layout split (Left: learning path, Right: assessments/job board/certificate)
    const columnsWrapper = document.createElement('div');
    columnsWrapper.style.display = 'flex';
    columnsWrapper.style.flexDirection = 'row';
    columnsWrapper.style.gap = '24px';
    columnsWrapper.style.alignItems = 'flex-start';
    columnsWrapper.style.marginTop = '0px';
    columnsWrapper.style.width = '100%';

    const leftCol = document.createElement('div');
    leftCol.style.flex = '1';
    leftCol.style.minWidth = '0';
    leftCol.style.display = 'flex';
    leftCol.style.flexDirection = 'column';
    leftCol.style.gap = '24px';

    // Append description and product tour boxes inside Left Column
    leftCol.appendChild(headerBlock);
    if (tourStrip) {
      leftCol.appendChild(tourStrip);
    }

    if (isFailed) {
      const failedAlertStrip = document.createElement('div');
      failedAlertStrip.style.background = 'var(--amber-50)';
      failedAlertStrip.style.border = '1px solid var(--amber-200)';
      failedAlertStrip.style.borderLeft = '4px solid var(--amber-500)';
      failedAlertStrip.style.borderRadius = '16px';
      failedAlertStrip.style.padding = '24px';
      failedAlertStrip.style.display = 'flex';
      failedAlertStrip.style.gap = '14px';
      failedAlertStrip.style.alignItems = 'flex-start';
      failedAlertStrip.style.textAlign = 'left';
      failedAlertStrip.style.boxShadow = 'var(--shadow-sm)';
      
      failedAlertStrip.innerHTML = `
        <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--amber-200); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--amber-600);">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <h4 style="margin: 0; font-size: 14px; font-weight: 700; color: #9A3412;">Reattempt Recommended</h4>
            <span style="font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; background: #FFD8A8; color: #D9480F; text-transform: uppercase; letter-spacing: 0.5px;">Attempted</span>
          </div>
          <p style="margin: 6px 0 14px 0; font-size: 13px; color: #7C2D12; line-height: 1.45;">
            Keep learning! You are close to verifying your skills. Review the skill areas below that need improvement, complete the pending courses, and reattempt when you are ready. There are no limits on reattempts.
          </p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <button onclick="AppUI.openAssessmentModal('${primaryAss.id}', true);" style="display: inline-flex; align-items: center; justify-content: center; padding: 8px 16px; background: var(--amber-600); border: none; color: #FFFFFF; font-weight: 600; font-size: 12.5px; border-radius: 6px; cursor: pointer; transition: background 0.2s; box-shadow: 0 2px 4px rgba(234, 88, 12, 0.15); border: none;">
              Retake Assessment
            </button>
            <button onclick="document.getElementById('learning-path-section').scrollIntoView({ behavior: 'smooth' });" style="background: none; border: 1px solid #FFD8A8; color: #C2410C; padding: 8px 16px; font-weight: 600; font-size: 12.5px; border-radius: 6px; cursor: pointer; transition: all 0.2s;">
              Review Skill Areas
            </button>
          </div>
        </div>
      `;
      leftCol.appendChild(failedAlertStrip);
    }

    const rightCol = document.createElement('div');
    rightCol.style.width = '340px';
    rightCol.style.flexShrink = '0';
    rightCol.style.display = 'flex';
    rightCol.style.flexDirection = 'column';
    rightCol.style.gap = '24px';
    rightCol.style.minWidth = '340px';

    // 4. LEARNING PATH SECTION
    const learningPathSection = document.createElement('div');
    learningPathSection.id = 'learning-path-section';
    learningPathSection.style.display = 'flex';
    learningPathSection.style.flexDirection = 'column';
    learningPathSection.style.gap = '16px';

    const learningPathHeader = document.createElement('div');
    learningPathHeader.style.textAlign = 'left';
    learningPathHeader.style.marginTop = '0px';
    learningPathHeader.innerHTML = `
      <h3 style="margin: 0 0 4px 0; font-size: 18px; font-weight: 500; color: #0F172A;">Your learning path</h3>
      <p style="margin: 0; font-size: 13px; color: #64748B; line-height: 1.4;">Learn any course, any time — no fixed order. Open a course to start learning.</p>
    `;
    learningPathSection.appendChild(learningPathHeader);

    // Grid details for skill areas
    const skillAreaListContainer = document.createElement('div');
    skillAreaListContainer.style.display = 'flex';
    skillAreaListContainer.style.flexDirection = 'column';
    skillAreaListContainer.style.gap = '16px';

    if (!this._expandedSkillAreas) {
      this._expandedSkillAreas = {};
      if (learningPath.length > 0) {
        this._expandedSkillAreas[learningPath[0].title] = true;
      }
    }

    // Removed duplicate targetLevels definition since it is defined at the top of the scope

    skillAreaStates.forEach((stateObj, index) => {
      const { mod, modIdx, level, courses, firstUncompletedCourse } = stateObj;
      const isExpanded = this._expandedSkillAreas[mod.title] === true;
      const targetLvl = (targetLevels[roleId] && targetLevels[roleId][mod.title]) || 2;
      const levelNames = ['none', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
      const targetLvlName = levelNames[targetLvl];
      const targetLvlPkg = targetLvl === 1 ? 'Internships & entry roles' : (targetLvl === 2 ? '₹3–5 LPA' : (targetLvl === 3 ? '₹8–15 LPA' : '₹15+ LPA'));

      // Calculate progress percentage inside this skill area
      let totalModCourses = courses.length;
      let completedModCourses = courses.filter(c => (progress.courseProgress[c.id] || 0) === 100).length;
      let progressPct = totalModCourses > 0 ? Math.round((completedModCourses / totalModCourses) * 100) : 0;

      // Verification Chip text
      let verificationChipText = 'Not verified yet';
      let verificationChipStyle = 'background: #F1F5F9; border: 0.5px solid var(--slate-200); color: #64748B;';
      
      if (progress.internshipStatus !== 'none') {
        if (level > 0) {
          const levelMap = {
            1: 'Beginner',
            2: 'Intermediate',
            3: 'Advanced',
            4: 'Expert'
          };
          verificationChipText = `${levelMap[level]} verified`;
          const chipColors = {
            1: { bg: 'var(--slate-50)', border: 'var(--slate-200)', color: 'var(--slate-800)' },
            2: { bg: 'var(--brand-50)', border: 'var(--brand-200)', color: 'var(--brand-600)' },
            3: { bg: 'var(--brand-100)', border: 'var(--brand-300)', color: 'var(--primary-dark)' },
            4: { bg: 'var(--amber-50)', border: 'var(--amber-200)', color: 'var(--amber-700)' }
          };
          const style = chipColors[level] || chipColors[1];
          verificationChipStyle = `background: ${style.bg}; border: 0.5px solid ${style.border}; color: ${style.color};`;
        } else {
          verificationChipText = 'Attempted — retake to verify';
          verificationChipStyle = 'background: var(--amber-50); border: 0.5px solid var(--amber-200); color: var(--amber-700);';
        }
      }

      // Target level badge styles
      const targetStyle = packageStyles[levelNames[targetLvl]] || packageStyles.Foundational;

      // Collapsed layout
      const focusCard = document.createElement('div');
      focusCard.id = `skill-area-card-${mod.title.replace(/\s+/g, '-')}`;
      focusCard.className = 'premium-card-item';
      focusCard.style.overflow = 'hidden';
      focusCard.style.textAlign = 'left';
      focusCard.style.padding = '0px';

      // Determine State A vs State B
      const hasStartedAnyCourse = courses.some(c => (progress.courseProgress[c.id] || 0) > 0);
      const isStateA = (level === 0 && !hasStartedAnyCourse);

      // Header row
      const cardHeader = document.createElement('div');
      cardHeader.style.padding = '20px 24px';
      cardHeader.style.display = 'flex';
      cardHeader.style.justifyContent = 'space-between';
      cardHeader.style.alignItems = 'flex-start';
      cardHeader.style.cursor = 'pointer';
      cardHeader.style.flexWrap = 'wrap';
      cardHeader.style.gap = '12px';
      cardHeader.onclick = () => AppUI.toggleSkillArea(mod.title);

      cardHeader.innerHTML = `
        <div style="display: flex; gap: 14px; text-align: left; align-items: center; flex: 1; min-width: 0;">
          <span style="font-size: 11px; font-weight: 700; color: var(--slate-600); background: var(--slate-50); border: 1px solid var(--slate-200); padding: 3px 8px; border-radius: 6px; flex-shrink: 0;">${index + 1}</span>
          <div style="min-width: 0; flex: 1;">
            <h4 style="margin: 0; font-size: 15.5px; font-weight: 700; color: #0F172A; line-height: 1.3;">${mod.title}</h4>
          </div>
        </div>
        
        <div style="display: flex; align-items: center; gap: 16px; flex-shrink: 0;">
          <span style="font-size: 13px; font-weight: 600; color: #64748B; flex-shrink: 0;">
            ${completedModCourses} / ${totalModCourses} completed
          </span>
          <button style="background: none; border: none; color: #64748B; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 4px;">
            <i data-lucide="${isExpanded ? 'chevron-up' : 'chevron-down'}" style="width: 18px; height: 18px;"></i>
          </button>
        </div>
      `;

      focusCard.appendChild(cardHeader);

      if (isExpanded) {
        const cardBody = document.createElement('div');
        cardBody.style.padding = '24px';
        cardBody.style.borderTop = '0.5px solid #F1F5F9';
        cardBody.style.background = '#FAFBFD';

        if (isStateA) {
          // --- STATE A: Fresh user ---
          
          // 1. Merged status line with insight + "know more" CTA
          const statusLine = document.createElement('div');
          statusLine.innerHTML = `
            <div style="font-size: 13.5px; color: #334155; font-weight: 600; margin-bottom: 12px; text-align: left; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span style="font-size: 16px;">🚀</span>
              <span>
                ${AppUI.getSkillAreaInsight(mod.title)}
                <button onclick="AppUI.openCompetencyStatsModal('${mod.title}'); event.stopPropagation();" style="background: none; border: none; color: var(--primary); font-size: 13.5px; font-weight: 700; cursor: pointer; padding: 0; text-decoration: underline; display: inline-flex; align-items: center; transition: opacity 0.2s;">
                  know more
                </button>
              </span>
            </div>
          `;
          cardBody.appendChild(statusLine);

          // 2. Simple completion text row (no progress bar or target requirements)
          const progressInfo = document.createElement('div');
          progressInfo.style.fontSize = '12.5px';
          progressInfo.style.color = '#64748B';
          progressInfo.style.fontWeight = '500';
          progressInfo.style.marginBottom = '20px';
          progressInfo.style.textAlign = 'left';
          progressInfo.innerHTML = `0 / ${totalModCourses} courses completed`;
          cardBody.appendChild(progressInfo);

          // 3. Course grid
          const courseGrid = document.createElement('div');
          courseGrid.style.display = 'grid';
          courseGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
          courseGrid.style.gap = '16px';

          courses.forEach((c, cIdx) => {
            const numTopics = c.topicsList ? c.topicsList.length : 3;
            const tagSubset = c.skills ? c.skills.slice(0, 3) : ['Foundations', 'Syntax', 'Debugging'];

            const courseCard = document.createElement('div');
            courseCard.className = 'premium-card-item';
            courseCard.style.borderRadius = '12px';
            courseCard.style.padding = '20px';
            courseCard.style.display = 'flex';
            courseCard.style.flexDirection = 'column';
            courseCard.style.justifyContent = 'space-between';
            courseCard.style.position = 'relative';

            // First course gets floating arrow (no text) and pulsating outline
            let isNextAction = (cIdx === 0);
            if (isNextAction) {
              courseCard.classList.add('active-course-pulse');
            }

            let badgeHtml = isNextAction ? `
              <div class="next-action-arrow" style="position: absolute; top: -16px; left: 24px; width: 26px; height: 26px; border-radius: 50%; background: var(--primary); border: 1.5px solid #FFFFFF; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(12, 60, 255, 0.2); z-index: 10; pointer-events: none;">
                <i data-lucide="arrow-down" style="width: 14px; height: 14px; stroke-width: 3.5px;"></i>
              </div>
            ` : '';

            let actionButton = '';
            if (isNextAction) {
              actionButton = `
                <button class="btn btn-primary" onclick="AppUI.openCourseDetailsDrawer('${c.id}')" style="background: var(--primary); color: #FFFFFF; font-size: 12.5px; font-weight: 600; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; margin-top: 16px; width: fit-content; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 4px 10px rgba(12, 60, 255, 0.1);">Start Course</button>
              `;
            } else {
              actionButton = `
                <button onclick="AppUI.openCourseDetailsDrawer('${c.id}')" style="background: none; border: none; color: var(--primary); font-size: 12.5px; font-weight: 600; cursor: pointer; text-align: left; padding: 0; margin-top: 16px; width: fit-content; display: inline-flex; align-items: center; gap: 4px;">Start course →</button>
              `;
            }

            courseCard.innerHTML = `
              ${badgeHtml}
              <div style="padding-right: 70px;">
                <h5 style="margin: 0; font-size: 14.5px; font-weight: 600; color: #0F172A; line-height: 1.35;">${c.title}</h5>
              </div>
              <div style="margin-top: 12px; font-size: 11.5px; color: #64748B;">
                <span>${numTopics} topics</span>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 12px;">
                ${tagSubset.map(tag => `<span style="font-size: 10.5px; color: #64748B; background: #F8FAFC; border: 0.5px solid var(--slate-200); padding: 2px 6px; border-radius: 4px;">${tag}</span>`).join('')}
              </div>
              ${actionButton}
            `;
            courseGrid.appendChild(courseCard);
          });
          cardBody.appendChild(courseGrid);

          // 4. Bottom skip assessment row (with Stand copy)
          const bottomSkipRow = document.createElement('div');
          bottomSkipRow.style.marginTop = '24px';
          bottomSkipRow.style.background = 'var(--brand-50)';
          bottomSkipRow.style.border = '0.5px solid var(--brand-200)';
          bottomSkipRow.style.borderRadius = '12px';
          bottomSkipRow.style.padding = '16px 20px';
          bottomSkipRow.style.display = 'flex';
          bottomSkipRow.style.alignItems = 'center';
          bottomSkipRow.style.justifyContent = 'space-between';
          bottomSkipRow.style.gap = '16px';
          bottomSkipRow.style.width = '100%';
          bottomSkipRow.style.boxSizing = 'border-box';

          bottomSkipRow.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
              <i data-lucide="zap" style="width: 18px; height: 18px; color: var(--primary); flex-shrink: 0;"></i>
              <div style="font-size: 13.5px; font-weight: 600; color: var(--slate-800); text-align: left; line-height: 1.4; flex: 1; min-width: 0;">
                Already know some of this? Let's take the assessment and know where you stand.
              </div>
            </div>
            <button onclick="AppUI.openAssessmentModal('${primaryAss.id}', true)" style="background: none; border: none; color: var(--primary); font-size: 13.5px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; padding: 0; flex-shrink: 0; transition: opacity 0.2s;">
              Take assessment <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
            </button>
          `;
          cardBody.appendChild(bottomSkipRow);

        } else {
          // --- STATE B: Verified user or in-progress learning ---

          // 1. Merged status line with insight + "know more" CTA
          const statusLine = document.createElement('div');
          statusLine.innerHTML = `
            <div style="font-size: 13.5px; color: #334155; font-weight: 600; margin-bottom: 12px; text-align: left; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span style="font-size: 16px;">🚀</span>
              <span>
                ${AppUI.getSkillAreaInsight(mod.title)}
                <button onclick="AppUI.openCompetencyStatsModal('${mod.title}'); event.stopPropagation();" style="background: none; border: none; color: var(--primary); font-size: 13.5px; font-weight: 700; cursor: pointer; padding: 0; text-decoration: underline; display: inline-flex; align-items: center; transition: opacity 0.2s;">
                  know more
                </button>
              </span>
            </div>
          `;
          cardBody.appendChild(statusLine);

          // 2. Simple completion text row (no progress bar or target requirements at top)
          const progressInfo = document.createElement('div');
          progressInfo.style.fontSize = '12.5px';
          progressInfo.style.color = '#64748B';
          progressInfo.style.fontWeight = '500';
          progressInfo.style.marginBottom = '20px';
          progressInfo.style.textAlign = 'left';
          progressInfo.innerHTML = `${completedModCourses} / ${totalModCourses} courses completed`;
          cardBody.appendChild(progressInfo);

          // 3. Course grid
          const courseGrid = document.createElement('div');
          courseGrid.style.display = 'grid';
          courseGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
          courseGrid.style.gap = '16px';

          // Determine next action course:
          // The first in-progress course, or if none, the first not-started course.
          let nextActionCourseId = null;
          const inProgressCourse = courses.find(c => {
            const p = progress.courseProgress[c.id] || 0;
            return p > 0 && p < 100;
          });
          if (inProgressCourse) {
            nextActionCourseId = inProgressCourse.id;
          } else {
            const notStartedCourse = courses.find(c => (progress.courseProgress[c.id] || 0) === 0);
            if (notStartedCourse) nextActionCourseId = notStartedCourse.id;
          }

          courses.forEach(c => {
            const cProgress = progress.courseProgress[c.id] || 0;
            const isCompleted = cProgress === 100;
            const numTopics = c.topicsList ? c.topicsList.length : 3;
            const tagSubset = c.skills ? c.skills.slice(0, 3) : ['Foundations', 'Syntax', 'Debugging'];

            const courseCard = document.createElement('div');
            courseCard.className = 'premium-card-item';
            courseCard.style.borderRadius = '12px';
            courseCard.style.padding = '20px';
            courseCard.style.display = 'flex';
            courseCard.style.flexDirection = 'column';
            courseCard.style.justifyContent = 'space-between';
            courseCard.style.position = 'relative';

            let isNextAction = (c.id === nextActionCourseId && !isCompleted);
            if (isNextAction) {
              courseCard.classList.add('active-course-pulse');
            }

            let badgeHtml = '';
            if (isCompleted) {
              // Minimal, subtle, grey check badge (non-prominent)
              badgeHtml = `
                <div style="position: absolute; right: 16px; top: 16px; display: inline-flex; align-items: center; gap: 4px; font-size: 11px; color: #94A3B8; font-weight: 500;">
                  <i data-lucide="check" style="width: 13.5px; height: 13.5px; color: var(--green-600); stroke-width: 3px;"></i> Completed
                </div>
              `;
            } else if (isNextAction) {
              badgeHtml = `
                <div class="next-action-arrow" style="position: absolute; top: -16px; left: 24px; width: 26px; height: 26px; border-radius: 50%; background: var(--primary); border: 1.5px solid #FFFFFF; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(12, 60, 255, 0.2); z-index: 10; pointer-events: none;">
                  <i data-lucide="arrow-down" style="width: 14px; height: 14px; stroke-width: 3.5px;"></i>
                </div>
              `;
            } else if (cProgress > 0) {
              badgeHtml = `<span style="position: absolute; right: 12px; top: 12px; font-size: 10px; font-weight: 500; color: var(--brand-600); background: var(--brand-50); padding: 2px 6px; border-radius: 4px;">In progress</span>`;
            }

            let actionButton = '';
            if (isCompleted) {
              actionButton = `
                <button onclick="AppUI.openCourseDetailsDrawer('${c.id}')" style="background: none; border: none; color: var(--primary); font-size: 12.5px; font-weight: 600; cursor: pointer; text-align: left; padding: 0; margin-top: 16px; width: fit-content; display: inline-flex; align-items: center; gap: 4px;">Revise course →</button>
              `;
            } else if (isNextAction) {
              actionButton = `
                <button class="btn btn-primary" onclick="AppUI.openCourseDetailsDrawer('${c.id}')" style="background: var(--primary); color: #FFFFFF; font-size: 12.5px; font-weight: 600; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; margin-top: 16px; width: fit-content; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 4px 10px rgba(12, 60, 255, 0.1);">${cProgress > 0 ? 'Continue course' : 'Start Course'}</button>
              `;
            } else {
              actionButton = `
                <button onclick="AppUI.openCourseDetailsDrawer('${c.id}')" style="background: none; border: none; color: var(--primary); font-size: 12.5px; font-weight: 600; cursor: pointer; text-align: left; padding: 0; margin-top: 16px; width: fit-content; display: inline-flex; align-items: center; gap: 4px;">${cProgress > 0 ? 'Continue →' : 'Start course →'}</button>
              `;
            }

            // Render course progress track only if progress > 0
            let progressTrackHtml = '';
            if (cProgress > 0) {
              progressTrackHtml = `
                <div style="margin-top: 12px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11.5px; color: #64748B; margin-bottom: 4px;">
                    <span>${numTopics} topics</span>
                    <span style="font-weight: 500; color: ${isCompleted ? 'var(--green-600)' : 'var(--primary)'}">${cProgress}%</span>
                  </div>
                  <div style="height: 5px; background: #F1F5F9; border-radius: 100px; overflow: hidden; width: 100%;">
                    <div style="width: ${cProgress}%; height: 100%; background: ${isCompleted ? 'var(--green-600)' : 'var(--primary)'}; border-radius: 100px;"></div>
                  </div>
                </div>
              `;
            } else {
              progressTrackHtml = `
                <div style="margin-top: 12px; font-size: 11.5px; color: #64748B;">
                  <span>${numTopics} topics</span>
                </div>
              `;
            }

            courseCard.innerHTML = `
              ${badgeHtml}
              <div style="padding-right: 70px;">
                <h5 style="margin: 0; font-size: 14.5px; font-weight: 600; color: #0F172A; line-height: 1.35;">${c.title}</h5>
              </div>
              ${progressTrackHtml}
              <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 12px;">
                ${tagSubset.map(tag => `<span style="font-size: 10.5px; color: #64748B; background: #F8FAFC; border: 0.5px solid var(--slate-200); padding: 2px 6px; border-radius: 4px;">${tag}</span>`).join('')}
              </div>
              ${actionButton}
            `;
            courseGrid.appendChild(courseCard);
          });
          cardBody.appendChild(courseGrid);

          // 4. Bottom Retake Row with progress-based retake actions (Praise/Motivate states configured)
          if (level <= 4) {
            const bottomRetakeRow = document.createElement('div');
            bottomRetakeRow.style.marginTop = '24px';
            if (level === 4) {
              bottomRetakeRow.style.background = 'var(--amber-50)';
              bottomRetakeRow.style.border = '0.5px solid var(--amber-200)';
            } else {
              bottomRetakeRow.style.background = 'var(--brand-50)';
              bottomRetakeRow.style.border = '0.5px solid var(--brand-200)';
            }
            bottomRetakeRow.style.borderRadius = '12px';
            bottomRetakeRow.style.padding = '16px 20px';
            bottomRetakeRow.style.display = 'flex';
            bottomRetakeRow.style.alignItems = 'center';
            bottomRetakeRow.style.justifyContent = 'space-between';
            bottomRetakeRow.style.gap = '16px';
            bottomRetakeRow.style.width = '100%';
            bottomRetakeRow.style.boxSizing = 'border-box';

            let levelDescriptionText = "";
            let levelButtonText = "";
            let iconMarkup = "";
            
            if (level === 0) {
              iconMarkup = `<i data-lucide="zap" style="width: 18px; height: 18px; color: var(--primary); flex-shrink: 0;"></i>`;
              levelDescriptionText = "Verify your skills and get an understanding of where you stand.";
              levelButtonText = "Take Assessment";
            } else if (level === 1) {
              iconMarkup = `<i data-lucide="trending-up" style="width: 18px; height: 18px; color: var(--primary); flex-shrink: 0;"></i>`;
              levelDescriptionText = "Good start! You have verified at Beginner level. Keep learning to reach Intermediate and unlock core job roles.";
              levelButtonText = "Retake Assessment";
            } else if (level === 2) {
              iconMarkup = `<i data-lucide="trending-up" style="width: 18px; height: 18px; color: var(--primary); flex-shrink: 0;"></i>`;
              levelDescriptionText = "Nice progress! You are Intermediate verified. Go to a higher level like Advanced to unlock premium salary packages.";
              levelButtonText = "Retake Assessment";
            } else if (level === 3) {
              iconMarkup = `<i data-lucide="award" style="width: 18px; height: 18px; color: var(--primary); flex-shrink: 0;"></i>`;
              levelDescriptionText = "Impressive job! You have verified your skills at the Advanced level. Retake the assessment to aim for Expert status.";
              levelButtonText = "Retake Assessment";
            } else if (level === 4) {
              iconMarkup = `<i data-lucide="award" style="width: 18px; height: 18px; color: var(--amber-600); flex-shrink: 0;"></i>`;
              levelDescriptionText = "Outstanding! You have cleared the Expert level and stand in the top 1% of developers on the platform.";
              levelButtonText = "";
            }

            let ctaButtonHtml = "";
            if (level < 4) {
              ctaButtonHtml = `
                <button onclick="AppUI.openAssessmentModal('${primaryAss.id}', true)" style="background: none; border: none; color: var(--primary); font-size: 13.5px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; padding: 0; flex-shrink: 0; transition: opacity 0.2s;">
                  ${levelButtonText} <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
                </button>
              `;
            }

            bottomRetakeRow.innerHTML = `
              <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
                ${iconMarkup}
                <div style="font-size: 13.5px; font-weight: 600; color: var(--slate-800); text-align: left; line-height: 1.4; flex: 1; min-width: 0;">
                  ${levelDescriptionText}
                </div>
              </div>
              ${ctaButtonHtml}
            `;
            cardBody.appendChild(bottomRetakeRow);
          }
        }

        focusCard.appendChild(cardBody);
      }
      
      skillAreaListContainer.appendChild(focusCard);
    });

    learningPathSection.appendChild(skillAreaListContainer);
    leftCol.appendChild(learningPathSection);

    // 5. ASSESSMENT SECTION
    const assessmentSection = document.createElement('div');
    assessmentSection.id = 'assessment-section';
    assessmentSection.className = 'premium-card-item';
    assessmentSection.style.textAlign = 'left';

    // State chip
    let assessChipText = 'Not attempted';
    let assessChipStyle = 'background: #F1F5F9; border: 0.5px solid var(--slate-200); color: #64748B;';
    
    if (isAssessmentCleared) {
      assessChipText = 'Cleared';
      assessChipStyle = 'background: var(--green-50); border: 0.5px solid var(--green-200); color: var(--green-600);';
    } else if (isFailed) {
      assessChipText = 'Attempted';
      assessChipStyle = 'background: #FEF3C7; border: 0.5px solid #FDE68A; color: var(--amber-700);';
    }

    // Level breakdown cards (always rendered)
    const levelNames = ['none', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
    const rowsHtml = skillAreaStates.map(f => {
       const hasUserLevel = f.level > 0;
       const targetLvl = (targetLevels[roleId] && targetLevels[roleId][f.mod.title]) || 2;
       const userLvlName = levelNames[f.level];
       const displayTitle = f.mod.title.replace(/^\d+\s*[–-]\s*/, '').trim();
       
       let badgeHtml = '';
       let retakeHtml = '';

       if (hasUserLevel && isAssessmentCleared) {
         const lvlStyle = packageStyles[userLvlName] || packageStyles.Foundational;
         // Achieved Level Badge (solid, colored)
         badgeHtml = `
           <span onclick="AppUI.showLevelBadgeTooltip(event, ${f.level}, '${userLvlName}', '${lvlStyle.label}')" style="cursor: pointer; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px; background: ${lvlStyle.bg}; border: 1px solid ${lvlStyle.border}; color: ${lvlStyle.color}; text-transform: uppercase; display: inline-flex; align-items: center;">
             ${userLvlName}
           </span>
         `;
         
         // If they got some lower levels, show "Improve" button next to it
         if (f.level < 4) {
           retakeHtml = `
             <button onclick="AppUI.openAssessmentModal('${primaryAss.id}', true); event.stopPropagation();" style="background: none; border: none; color: var(--amber-700); font-size: 12px; font-weight: 650; cursor: pointer; text-decoration: none; padding: 0; display: inline-flex; align-items: center; gap: 4px;">
               Improve <span style="font-size: 13px; line-height: 1;">&rsaquo;</span>
             </button>
           `;
         }
       } else {
         // Show syllabus skill area checklist
         const cleanTitle = f.mod.title.replace(/^\d+\s*[–-]\s*/, '').trim();
         const focusText = getFocusText(cleanTitle);
         badgeHtml = `
           <span style="font-size: 12px; color: #64748B; display: inline-flex; align-items: center; gap: 6px; font-weight: 500;">
             <i data-lucide="book-open" style="width: 13.5px; height: 13.5px; color: var(--primary);"></i>
             Focus: ${focusText}
           </span>
         `;
       }

       return `
         <div style="background: #FFFFFF; border: 0.5px solid var(--slate-200); border-radius: 8px; padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; text-align: left; box-shadow: var(--shadow-sm);">
           <div style="font-size: 13px; font-weight: 755; color: #0F172A; line-height: 1.45;">
             ${displayTitle}
           </div>
           <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
             ${badgeHtml}
             ${retakeHtml}
           </div>
         </div>
       `;
    }).join('');

    assessmentSection.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 0.5px solid #F1F5F9; padding-bottom: 12px; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <i data-lucide="clipboard-list" style="width: 18px; height: 18px; color: var(--primary);"></i>
          <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #0F172A; display: inline-flex; align-items: center; gap: 6px;">Assessments</h3>
          <div class="info-tooltip-container left-aligned tooltip-bottom" style="cursor: help; color: #94A3B8; display: inline-flex; align-items: center; padding: 4px; vertical-align: middle;">
            <i data-lucide="info" style="width: 15px; height: 15px;"></i>
            <div class="info-tooltip-box" style="width: 280px; font-size: 11.5px; font-weight: 500; text-align: left; line-height: 1.45;">
              <strong>Assessment Levels & Cut-off Criteria:</strong><br>
              • <strong>Beginner</strong>: 50% score threshold<br>
              • <strong>Intermediate (Target)</strong>: 75% score threshold<br>
              • <strong>Advanced</strong>: 85% score threshold<br>
              • <strong>Expert</strong>: 95% score threshold<br>
              Verify higher levels to qualify for top-tier job packages.
            </div>
          </div>
        </div>
        <span style="font-size: 11px; font-weight: 500; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; ${assessChipStyle}">${assessChipText}</span>
      </div>

      <p style="margin: 0 0 16px 0; font-size: 13px; color: #475569; line-height: 1.45;">
        These role assessments verify your skill area levels in each subject area. Take it anytime to verify your skills and unlock packages.
      </p>

      <div style="position: relative; display: inline-block;">
        <button id="assessment-cta-btn" class="btn btn-primary" onclick="AppUI.openAssessmentModal('${primaryAss.id}', true)" style="padding: 10px 20px; font-size: 13px; background: var(--primary); border: none; color: #FFFFFF; font-weight: 600; border-radius: 6px;">
          ${isAssessmentCleared ? 'Retake assessment' : 'Take assessment'}
        </button>
      </div>
    `;

    // 5b. TARGETS AND QUALIFIED LEVELS CARD (Split section)
    const targetsSection = document.createElement('div');
    targetsSection.className = 'premium-card-item';
    targetsSection.style.padding = '24px';
    targetsSection.style.textAlign = 'left';

    if (isAssessmentCleared) {
      targetsSection.innerHTML = `
        <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #0F172A;">Your qualified skill area levels</h3>
        <div style="margin-top: 6px; margin-bottom: 18px;">
          <button onclick="document.getElementById('matrix-dialog').showModal();" 
                  style="background: none; border: none; color: var(--primary); font-size: 13px; font-weight: 600; cursor: pointer; padding: 0; display: inline-flex; align-items: center; gap: 6px; transition: opacity 0.2s;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 15px; height: 15px; color: var(--primary);"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
            View skill area matrix
          </button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${rowsHtml}
        </div>
        <div style="margin-top: 16px; text-align: right;">
          <a href="#" onclick="AppUI.openAssessmentModal('${primaryAss.id}', true); return false;" style="font-size: 12.5px; color: var(--primary); text-decoration: underline; font-weight: 650;">
            Retake to improve any level
          </a>
        </div>
      `;
    } else {
      targetsSection.innerHTML = `
        <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: #0F172A; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="award" style="width: 18px; height: 18px; color: var(--primary);"></i> Assessment Blueprint
        </h3>
        <p style="margin: 8px 0 16px 0; font-size: 12.5px; color: #64748B; line-height: 1.45;">
          Prepare for the verification assessment. Clear this to unlock direct job board applications and earn your verified certificate.
        </p>

        <!-- Blueprint Stats Grid -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 20px; background: #F8FAFC; padding: 12px; border-radius: 8px; border: 0.5px solid var(--slate-200);">
          <div style="text-align: center;">
            <div style="font-size: 10px; font-weight: 600; color: #64748B; text-transform: uppercase;">Duration</div>
            <div style="font-size: 13px; font-weight: 700; color: #0F172A; margin-top: 2px;">90 Mins</div>
          </div>
          <div style="text-align: center; border-left: 0.5px solid var(--slate-200); border-right: 0.5px solid var(--slate-200);">
            <div style="font-size: 10px; font-weight: 600; color: #64748B; text-transform: uppercase;">Pass Mark</div>
            <div style="font-size: 13px; font-weight: 700; color: var(--primary); margin-top: 2px;">75%</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 10px; font-weight: 600; color: #64748B; text-transform: uppercase;">Attempts</div>
            <div style="font-size: 13px; font-weight: 700; color: #0F172A; margin-top: 2px;">Unlimited</div>
          </div>
        </div>

        <!-- Evaluation Topics -->
        <h4 style="margin: 0 0 10px 0; font-size: 13.5px; font-weight: 700; color: #334155;">Evaluated Skill Areas</h4>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
          ${skillAreaStates.map((f, idx) => {
            const cleanTitle = f.mod.title.replace(/^\d+\s*[–-]\s*/, '').trim();
            const focusText = getFocusText(cleanTitle);
            return `
              <div style="background: #FFFFFF; border: 0.5px solid var(--slate-200); border-radius: 8px; padding: 10px 12px; display: flex; flex-direction: column; gap: 4px;">
                <div style="font-size: 12.5px; font-weight: 650; color: #0F172A; display: flex; justify-content: space-between; align-items: center;">
                  <span>F${idx + 1}. ${cleanTitle}</span>
                  <span style="font-size: 10px; font-weight: 600; color: var(--primary); background: var(--brand-100); padding: 1px 6px; border-radius: 4px; text-transform: uppercase;">Required</span>
                </div>
                <div style="font-size: 11.5px; color: #64748B; line-height: 1.35;">
                  Focus: ${focusText}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Matrix button link placed neatly under blueprint -->
        <div style="border-top: 0.5px solid #F1F5F9; padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
          <button onclick="document.getElementById('matrix-dialog').showModal();" 
                  style="background: none; border: none; color: var(--primary); font-size: 13px; font-weight: 600; cursor: pointer; padding: 0; display: inline-flex; align-items: center; gap: 6px; transition: opacity 0.2s;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 15px; height: 15px; color: var(--primary);"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
            View skill area matrix
          </button>
        </div>
      `;
    }

    const rightColCardsContainer = document.createElement('div');
    rightColCardsContainer.style.display = 'flex';
    rightColCardsContainer.style.flexDirection = 'column';
    rightColCardsContainer.style.gap = '24px';
    rightColCardsContainer.style.width = '100%';

    rightColCardsContainer.appendChild(targetsSection);



    // 7. JOB BOARD SECTION
    const jobBoardSection = document.createElement('div');
    jobBoardSection.id = 'job-board-section';
    jobBoardSection.className = 'premium-card-item';
    jobBoardSection.style.padding = '24px';
    jobBoardSection.style.textAlign = 'left';

    // Callout strip message
    let jobCallout = '';
    if (verifiedCount === 0) {
      jobCallout = "Verify skill areas to boost your matches. Recruiters prioritise candidates with verified levels.";
    } else if (verifiedCount >= 5 && skillAreaStates.filter(f => f.level >= 3).length >= 5) {
      jobCallout = `You're a strong match for advanced roles — 12 roles hiring now.`;
    } else {
      jobCallout = `You're verified in ${verifiedCount} skill areas. Verify more to unlock higher-package roles.`;
    }

    jobBoardSection.innerHTML = `
      <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px; text-align: left;">
        <div style="width: 38px; height: 38px; border-radius: 8px; background: #ECFDF5; border: 1px solid var(--green-200); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <i data-lucide="briefcase" style="width: 18px; height: 18px; color: #10B981;"></i>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
            <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #0F172A;">Job Board</h3>
            <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; padding: 2px 8px; border-radius: 20px; background: #10B981; color: #FFFFFF;">Open</span>
          </div>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #475569; line-height: 1.4;">
            Apply for internships and full-time roles matched to your skills.
          </p>
        </div>
      </div>

      <!-- Skill Area box card -->
      <div style="background: #FFFFFF; border: 0.5px solid var(--slate-200); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span style="font-size: 13.5px; font-weight: 600; color: #0F172A;">Skill Areas earned</span>
          <span style="font-size: 13.5px; font-weight: 600; color: #10B981;">${verifiedCount} / ${skillAreaStates.length}</span>
        </div>
        
        <!-- Progress bar -->
        <div style="width: 100%; height: 8px; background: #F1F5F9; border-radius: 4px; overflow: hidden; margin-bottom: 12px;">
          <div style="width: ${(verifiedCount / skillAreaStates.length) * 100}%; height: 100%; background: #10B981; border-radius: 4px;"></div>
        </div>

        <!-- Trend indicator -->
        <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: #475569;">
          <i data-lucide="trending-up" style="width: 16px; height: 16px; color: #10B981; flex-shrink: 0;"></i>
          <span>${verifiedCount === 0 ? 'Earn your first skill area to stand out on the job board.' : `You've earned ${verifiedCount} skill areas! Stand out to recruiters.`}</span>
        </div>
      </div>

      <p style="font-size: 11.5px; color: #64748B; font-style: italic; text-align: center; margin: 12px 0 16px 0; line-height: 1.4;">
        Students with 3+ skill areas are 2x more likely to clear their first interview.
      </p>

      <button class="btn btn-primary" onclick="AppUI.openJobBoardModal('jobs')" style="width: 100%; padding: 12px; font-size: 13.5px; font-weight: 600; background: #10B981; border: none; color: #FFFFFF; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer;">
        Browse internships & jobs <i data-lucide="external-link" style="width: 15px; height: 15px; color: #FFFFFF;"></i>
      </button>
    `;
    leftCol.appendChild(jobBoardSection);


    columnsWrapper.appendChild(leftCol);
    wrapper.appendChild(columnsWrapper);

    container.appendChild(wrapper);

    // One-time assessment tooltip trigger
    if (this._assessmentTooltipShown === undefined || this._assessmentTooltipShown === false) {
      this._assessmentTooltipShown = true;
      setTimeout(() => {
        const btn = document.getElementById('assessment-cta-btn');
        if (btn) {
          let tooltipBubble = document.getElementById('assessment-cta-tooltip');
          if (!tooltipBubble) {
            tooltipBubble = document.createElement('div');
            tooltipBubble.id = 'assessment-cta-tooltip';
            tooltipBubble.style.position = 'absolute';
            tooltipBubble.style.background = 'var(--primary-dark)';
            tooltipBubble.style.color = '#FFFFFF';
            tooltipBubble.style.padding = '10px 14px';
            tooltipBubble.style.borderRadius = '8px';
            tooltipBubble.style.fontSize = '12px';
            tooltipBubble.style.width = '240px';
            tooltipBubble.style.zIndex = '9999';
            tooltipBubble.style.textAlign = 'left';
            tooltipBubble.style.lineHeight = '1.4';
            tooltipBubble.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
            tooltipBubble.innerHTML = `
              <div style="font-weight: 500; margin-bottom: 2px;">Note on assessments</div>
              This is not a pass/fail exam. It just shows your current levels — you can retake it anytime.
              <div style="font-size: 10px; color: var(--brand-300); margin-top: 6px; cursor: pointer; font-weight: 500;">Got it</div>
            `;
            document.body.appendChild(tooltipBubble);
          }
          
          const rect = btn.getBoundingClientRect();
          tooltipBubble.style.left = `${rect.left + window.scrollX - 60}px`;
          tooltipBubble.style.top = `${rect.top + window.scrollY - 95}px`;
          tooltipBubble.style.display = 'block';

          const dismiss = () => {
            if (tooltipBubble) {
              tooltipBubble.remove();
            }
          };
          tooltipBubble.onclick = dismiss;
          setTimeout(dismiss, 8000);
        }
      }, 300);
    }

    // Render the Floating Dev Simulator Widget
    this.renderDevSimulatorWidget();

    // Toggle outcomes collapsible
    setTimeout(() => {
      const btn = document.getElementById('toggle-outcomes-btn');
      const content = document.getElementById('outcomes-content');
      const text = document.getElementById('toggle-outcomes-text');
      const icon = document.getElementById('toggle-outcomes-icon');
      if (btn && content) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isHidden = content.style.display === 'none';
          content.style.display = isHidden ? 'block' : 'none';
          text.textContent = isHidden ? 'View less' : 'View more';
          icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        });
      }
    }, 100);

    // Trigger Lucide icons
    setTimeout(() => {
      lucide.createIcons();
    }, 50);
  },

  exitActiveRoleToViewSelection() {
    this.appState.state.activeRoleId = null;
    this.appState.saveState();
    this.render();
  },

  toggleHowItWorks(expanded) {
    this._howItWorksExpanded = expanded;
    this.render();
  },

  toggleHeaderDetails() {
    this._headerExpanded = !this._headerExpanded;
    this.render();
  },

  setSkillAreaVersion(ver) {
    this._skillAreaVersion = ver;
    this.render();
  },

  toggleV3Core() {
    this._showV3Core = !this._showV3Core;
    this.render();
  },

  toggleV3Specialized() {
    this._showV3Specialized = !this._showV3Specialized;
    this.render();
  },

  dismissTourGuide() {
    this._tourGuideDismissed = true;
    this.render();
  },

  handleNextStepCta(state) {
    if (state === 'A') {
      this._expandedSkillAreas["Programming with Problem Solving (DSA)"] = true;
      this.render();
      setTimeout(() => {
        const card = document.getElementById('skill-area-card-Programming-with-Problem-Solving-(DSA)');
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else if (state === 'B' || state === 'C' || state === 'D') {
      const section = document.getElementById('assessment-section');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (state === 'E') {
      this.openJobBoardModal('jobs');
    }
  },

  toggleSkillArea(title) {
    this._expandedSkillAreas[title] = !this._expandedSkillAreas[title];
    this.render();
  },

  showLevelBadgeTooltip(event, levelNum, levelName, packageLine) {
    event.stopPropagation();
    let tooltip = document.getElementById('level-badge-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'level-badge-tooltip';
      tooltip.style.position = 'absolute';
      tooltip.style.background = '#0F172A';
      tooltip.style.color = '#FFFFFF';
      tooltip.style.padding = '12px';
      tooltip.style.borderRadius = '8px';
      tooltip.style.fontSize = '12px';
      tooltip.style.width = '220px';
      tooltip.style.zIndex = '10000';
      tooltip.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.2)';
      tooltip.style.lineHeight = '1.45';
      document.body.appendChild(tooltip);
    }
    tooltip.innerHTML = `
      <div style="font-weight: 700; font-size: 13.5px; margin-bottom: 4px; color: #FFFFFF;">${levelName}</div>
      <div style="color: #94A3B8; margin-bottom: 8px;">Target jobs: ${packageLine}</div>
      <div style="font-size: 11px; color: var(--slate-300);">Qualified based on assessment score. Retake to improve level.</div>
    `;
    const rect = event.currentTarget.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY + 6}px`;
    tooltip.style.display = 'block';

    const hide = () => {
      tooltip.style.display = 'none';
      document.removeEventListener('click', hide);
    };
    setTimeout(() => {
      document.addEventListener('click', hide);
    }, 100);
  },

  simulateStudyTime(hrs) {
    const roleId = this.appState.state.activeRoleId;
    this.appState.increaseStudyTime(roleId, hrs);
    this.render();
  },

  toggleCourseCompletion(courseId) {
    const roleId = this.appState.state.activeRoleId;
    const progress = this.appState.state.rolesProgress[roleId];
    const current = progress.courseProgress[courseId] || 0;
    const target = current === 100 ? 0 : 100;
    this.appState.updateCourseProgress(roleId, courseId, target);
    this.render();
  },

  /* DEV SIMULATOR WIDGET CONTROLLER */
  renderDevSimulatorWidget() {
    const existing = document.getElementById('dev-simulator-widget');
    if (existing) existing.remove();

    const roleId = this.appState.state.activeRoleId;
    if (!roleId) return;

    const progress = this.appState.state.rolesProgress[roleId];

    const widget = document.createElement('div');
    widget.id = 'dev-simulator-widget';
    widget.className = 'dev-simulator-widget collapsed';

    widget.innerHTML = `
      <div class="simulator-widget-header" onclick="AppUI.toggleSimulatorWidget()">
        <span class="widget-title"><i data-lucide="terminal" style="width:14px;height:14px;display:inline-block;margin-right:4px;vertical-align:middle;"></i> Dev Simulator</span>
        <button class="widget-toggle-btn"><i data-lucide="chevron-up"></i></button>
      </div>
      <div class="simulator-widget-body" style="max-height: 480px; overflow-y: auto;">
        
        <div class="sim-section">
          <label>Prototype Presets</label>
          <div class="sim-btn-row">
            <button class="btn btn-sm btn-outline-primary" style="flex: 1; font-size: 11px; padding: 4px;" onclick="AppUI.simPresetNew()">New User (0%)</button>
            <button class="btn btn-sm btn-outline-primary" style="flex: 1; font-size: 11px; padding: 4px;" onclick="AppUI.simPresetGaveAssessment()">Gave Assess</button>
          </div>
        </div>

        <div class="sim-section">
          <label>Qualified Levels Sim</label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; width: 100%;">
            <button class="btn btn-sm btn-outline-success" style="font-size: 10.5px; padding: 4px 2px;" onclick="AppUI.simulateQualifiedLevel(1)">Beginner</button>
            <button class="btn btn-sm btn-outline-success" style="font-size: 10.5px; padding: 4px 2px;" onclick="AppUI.simulateQualifiedLevel(2)">Intermediate</button>
            <button class="btn btn-sm btn-outline-success" style="font-size: 10.5px; padding: 4px 2px;" onclick="AppUI.simulateQualifiedLevel(3)">Advanced</button>
            <button class="btn btn-sm btn-outline-success" style="font-size: 10.5px; padding: 4px 2px;" onclick="AppUI.simulateQualifiedLevel(4)">Expert</button>
          </div>
        </div>

        <div class="sim-section">
          <label>Course Progress Switch</label>
          <div style="display: flex; gap: 4px; width: 100%;">
            <button class="btn btn-sm btn-outline-secondary" style="flex: 1; padding: 4px 2px; font-size: 10px;" onclick="AppUI.simulateCourseProgress('not-started')">0% Start</button>
            <button class="btn btn-sm btn-outline-secondary" style="flex: 1; padding: 4px 2px; font-size: 10px;" onclick="AppUI.simulateCourseProgress('in-progress')">In Progress</button>
            <button class="btn btn-sm btn-outline-secondary" style="flex: 1; padding: 4px 2px; font-size: 10px;" onclick="AppUI.simulateCourseProgress('completed')">100% Done</button>
          </div>
        </div>

        <div class="sim-section" style="border-bottom: none; padding-bottom: 0; gap: 4px;">
          <label style="display:flex; align-items:center; gap:6px; text-transform:none; font-weight:normal; font-size:11px; cursor:pointer; margin-bottom:4px; user-select:none;">
            <input type="checkbox" id="sim-always-show-onboarding" onchange="AppUI.toggleAlwaysShowOnboarding(this.checked)" ${this.appState.state.alwaysShowOnboarding ? 'checked' : ''}>
            Always Show Onboarding
          </label>
          <button class="btn btn-sm btn-danger" style="width: 100%; font-size: 11px; padding: 4px;" onclick="resetJourneyProgress()">Reset All Progress</button>
        </div>
      </div>
    `;

    document.body.appendChild(widget);
    lucide.createIcons();
  },

  toggleSimulatorWidget() {
    const widget = document.getElementById('dev-simulator-widget');
    if (widget) {
      widget.classList.toggle('collapsed');
      const icon = widget.querySelector('.widget-toggle-btn i');
      if (icon) {
        if (widget.classList.contains('collapsed')) {
          icon.setAttribute('data-lucide', 'chevron-up');
        } else {
          icon.setAttribute('data-lucide', 'chevron-down');
        }
        lucide.createIcons();
      }
    }
  },

  setAssessmentStatusSim(isInternship, didPass) {
    const roleId = this.appState.state.activeRoleId;
    this.appState.setAssessmentResult(roleId, isInternship, didPass);
    this.render();
  },

  simPresetNew() {
    const roleId = this.appState.state.activeRoleId;
    if (!roleId) return;
    const progress = this.appState.state.rolesProgress[roleId];
    progress.internshipStatus = (roleId === 'sde') ? 'locked' : 'available';
    progress.jobReadinessStatus = 'locked';
    progress.qualifiedLevel = 0;
    progress.qualifiedLevelsMap = {};
    progress.certificateEarned = false;
    progress.boardsUnlocked = { internship: false, jobs: false };
    const role = ROLES_METADATA[roleId];
    role.courses.forEach(c => {
      progress.courseProgress[c.id] = 0;
    });
    this.appState.saveState();
    this.render();
  },

  simPresetGaveAssessment() {
    const roleId = this.appState.state.activeRoleId;
    if (!roleId) return;
    const role = ROLES_METADATA[roleId];
    const assessId = role.internshipAssessments[0].id;
    this.openAssessmentModal(assessId, true);
  },

  simulateQualifiedLevel(levelNum) {
    const roleId = this.appState.state.activeRoleId;
    if (!roleId) return;
    const progress = this.appState.state.rolesProgress[roleId];
    progress.internshipStatus = 'passed';
    progress.qualifiedLevel = levelNum;

    const role = ROLES_METADATA[roleId];
    const learningPath = this.getRoleLearningPath(role);
    progress.qualifiedLevelsMap = {};
    learningPath.forEach((mod, idx) => {
      let val = levelNum;
      if (idx % 2 === 1) {
        val = Math.max(1, levelNum - 1);
      } else if (idx % 3 === 2) {
        val = Math.min(4, levelNum + 1);
      }
      progress.qualifiedLevelsMap[mod.title] = val;
    });

    const courseDiffs = {
      // SDE
      sde_c1: ['beginner'], sde_c2: ['beginner', 'intermediate'], sde_c3: ['intermediate'],
      sde_c4: ['intermediate'], sde_c5: ['intermediate', 'advanced'], sde_c6: ['advanced'],
      sde_c7: ['advanced', 'expert'], sde_c8: ['beginner'], sde_c9: ['beginner', 'intermediate'],
      sde_c10: ['intermediate'], sde_c11: ['intermediate', 'advanced'], sde_c12: ['advanced'],
      sde_c13: ['intermediate', 'advanced'], sde_c14: ['intermediate'], sde_c15: ['advanced'],
      sde_c16: ['beginner'], sde_c17: ['beginner'], sde_c18: ['intermediate'],
      sde_c19: ['beginner', 'intermediate'], sde_c20: ['intermediate', 'advanced'], sde_c21: ['advanced', 'expert'],
      // ASE
      ase_c1: ['beginner'], ase_c2: ['beginner', 'intermediate'], ase_c3: ['intermediate'],
      ase_c4: ['beginner'], ase_c5: ['beginner', 'intermediate'], ase_c6: ['intermediate', 'advanced'],
      ase_c7: ['intermediate'], ase_c8: ['beginner'], ase_c9: ['intermediate'],
      ase_c10: ['intermediate', 'advanced'], ase_c11: ['advanced'], ase_c12: ['advanced', 'expert']
    };

    role.courses.forEach(c => {
      const diffs = courseDiffs[c.id] || ['beginner'];
      
      let maxLevelNum = 0;
      if (diffs.includes('expert')) maxLevelNum = 4;
      else if (diffs.includes('advanced')) maxLevelNum = 3;
      else if (diffs.includes('intermediate')) maxLevelNum = 2;
      else if (diffs.includes('beginner')) maxLevelNum = 1;

      if (maxLevelNum <= levelNum) {
        progress.courseProgress[c.id] = 100;
      } else {
        progress.courseProgress[c.id] = 0;
      }
    });

    this.appState.saveState();
    this.render();
  },

  simulateCourseProgress(statusType) {
    const roleId = this.appState.state.activeRoleId;
    if (!roleId) return;
    const progress = this.appState.state.rolesProgress[roleId];
    const role = ROLES_METADATA[roleId];
    
    role.courses.forEach((c, idx) => {
      if (statusType === 'not-started') {
        progress.courseProgress[c.id] = 0;
      } else if (statusType === 'completed') {
        progress.courseProgress[c.id] = 100;
      } else if (statusType === 'in-progress') {
        if (idx === 0) progress.courseProgress[c.id] = 100;
        else if (idx === 1) progress.courseProgress[c.id] = 60;
        else if (idx === 2) progress.courseProgress[c.id] = 20;
        else progress.courseProgress[c.id] = 0;
      }
    });

    this.appState.saveState();
    this.render();
  },

  /* OPEN ASSESSMENT SIMULATOR MODAL */
  openAssessmentModal(assessId, isInternship) {
    this.closeAllModals();
    const roleId = this.appState.state.activeRoleId;
    const role = ROLES_METADATA[roleId];
    
    let assessment = null;
    if (isInternship) {
      assessment = role.internshipAssessments.find(a => a.id === assessId);
      document.getElementById('assess-title').textContent = "Internship Eligibility Assessment";
      document.getElementById('assess-tag').textContent = "Stage: Internship Preparation";
      document.getElementById('assess-unlock-target').textContent = "Internship Placement Job Board";
    } else {
      assessment = role.jobAssessments.find(a => a.id === assessId);
      document.getElementById('assess-title').textContent = "Job Readiness Exam";
      document.getElementById('assess-tag').textContent = "Stage: Job Readiness";
      document.getElementById('assess-unlock-target').textContent = "Placement Job Board & Verified Skills Certificate";
    }

    document.getElementById('assess-subtitle').textContent = assessment.title;
    
    // Submit button event
    const submitBtn = document.getElementById('submit-assessment-btn');
    submitBtn.onclick = () => {
      const outcomeVal = document.querySelector('input[name="sim-outcome"]:checked').value;
      const didPass = outcomeVal === 'pass';
      
      this.appState.setAssessmentResult(roleId, isInternship, didPass);
      document.getElementById('assessment-dialog').close();
      this.render();
      
      if (didPass) {
        if (isInternship) {
          alert(`🎉 Congratulations! You cleared the assessment with 88%. The Internship Job Board is now UNLOCKED!`);
        } else {
          alert(`🏆 Outstanding! You cleared the Job Readiness assessment with 92%! Your Verified Skills Certificate has been generated, and the full-time Placement Board is now UNLOCKED!`);
        }
      } else {
        alert(`❌ Assessment score: ${isInternship ? '45%' : '50%'}. That's below the 75% passing threshold. Go through the courses and try again!`);
      }
    };

    document.getElementById('assessment-dialog').showModal();
    lucide.createIcons();
  },

  /* OPEN SKILL_AREA STATS DIALOG */
  openCompetencyStatsModal(title) {
    const cleanTitle = title.replace(/^\d+\s*[–-]\s*/, '').trim();
    const statsMap = {
      "Programming with Problem Solving (DSA)": {
        icon: "cpu",
        color: "var(--primary)",
        bgColor: "var(--brand-100)",
        borderColor: "var(--brand-300)",
        pillars: [
          { stat: "4.2x", label: "Interview Multiplier", desc: "Highest first-round technical clearance rate on the platform.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "Top Tier", label: "Industry Standard", desc: "Used as the absolute primary filter for entry-level SDE-I screening.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "85%", label: "Resource Efficiency", desc: "Proves you write optimized code that scales under peak traffic.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      },
      "Frontend Development": {
        icon: "layout",
        color: "#0284C7",
        bgColor: "#F0F9FF",
        borderColor: "#BAE6FD",
        pillars: [
          { stat: "2.9x", label: "Active Job Matches", desc: "Highest volume of instant interviews unlocked on the Job Board.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "92%", label: "Interactive UX Demand", desc: "Top startups list verified UI/state-management as key hiring criteria.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "100%", label: "UX Excellence", desc: "Proves you build responsive, pixel-perfect, accessible interfaces.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      },
      "Software Engineering Fundamentals": {
        icon: "git-branch",
        color: "#7C3AED",
        bgColor: "#F5F3FF",
        borderColor: "#DDD6FE",
        pillars: [
          { stat: "82%", label: "Lead Developer Rating", desc: "Tech leads flag Git and collaborative hygiene as top onboarding metrics.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "Universal", label: "Enterprise Collaboration", desc: "Standard for modern software delivery and continuous integration pipelines.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "Zero", label: "Onboarding Friction", desc: "Proves you contribute code instantly to established production repositories.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      },
      "Backend Development": {
        icon: "server",
        color: "#059669",
        bgColor: "#ECFDF5",
        borderColor: "var(--green-200)",
        pillars: [
          { stat: "3.8x", label: "Placements Ratio", desc: "Backend-ready developers show the fastest transition to full-stack roles.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "96%", label: "System Reliability", desc: "Proves database transaction management, caching, and secure API design.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "Top 3", label: "SaaS Requirements", desc: "Every modern application depends on robust server-side architecture.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      },
      "System Design": {
        icon: "network",
        color: "#DC2626",
        bgColor: "#FEF2F2",
        borderColor: "#FEE2E2",
        pillars: [
          { stat: "5.1x", label: "High-Tier Placement", desc: "Unlocks matches for advanced engineering and systems architect positions.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "Top 1%", label: "Architect Standard", desc: "Non-negotiable requirement for SDE-II and senior developer roles.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "99.9%", label: "Uptime Focus", desc: "Proves you design distributed systems with failovers and load balancing.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      },
      "System Design & Cloud": {
        icon: "cloud-lightning",
        color: "var(--amber-600)",
        bgColor: "var(--amber-50)",
        borderColor: "var(--amber-200)",
        pillars: [
          { stat: "4.8x", label: "Job Match Density", desc: "Highest relevance multiplier in modern DevOps and SRE hiring pools.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "Cloud", label: "Native Standard", desc: "AWS/GCP infrastructure design and continuous delivery integration.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "Auto", label: "Scaling Scale", desc: "Proves systems auto-scale efficiently while keeping cloud costs low.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      },
      "Cloud and DevOps": {
        icon: "container",
        color: "#2563EB",
        bgColor: "var(--brand-50)",
        borderColor: "var(--brand-200)",
        pillars: [
          { stat: "78%", label: "Team Autonomy Rate", desc: "Engineering teams seek developers who package and deploy their own code.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "CI/CD", label: "Continuous Delivery", desc: "Essential for modern teams shipping daily production updates.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "Zero", label: "Downtime Deployments", desc: "Proves knowledge of containers (Docker) and test pipelines.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      },
      "Aptitude & Professional Skills": {
        icon: "users",
        color: "#4B5563",
        bgColor: "#F9FAFB",
        borderColor: "#E5E7EB",
        pillars: [
          { stat: "3.0x", label: "Screening Pass Rate", desc: "Pass initial communication filters and team alignment checks.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "Agile", label: "Product Value", desc: "Highly prized by cross-functional product and design teams.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "Lead", label: "Readiness Score", desc: "Proves you can present designs, write docs, and align teams.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      },
      "Generative AI Engineering": {
        icon: "sparkles",
        color: "var(--amber-700)",
        bgColor: "#FFFBEB",
        borderColor: "#FDE68A",
        pillars: [
          { stat: "2.5x", label: "Emerging Job Matches", desc: "Highest growth category in software developer job openings.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "RAG", label: "Search Automation", desc: "Implement vector databases, search logic, and document parsing.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "LLM", label: "Model Pipelines", desc: "Proves you can implement Large Language Models and agentic workflows.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      },
      "Data Science & Machine Learning": {
        icon: "database",
        color: "#0891B2",
        bgColor: "#ECFEFF",
        borderColor: "#CFFAFE",
        pillars: [
          { stat: "4.0x", label: "Placement Growth", desc: "Unlocks quantitative analyst and machine learning pipelines.", color: "#16A34A", bgColor: "#DCFCE7" },
          { stat: "Data", label: "Driven Systems", desc: "Essential for building personal recommendations and automated analytics.", color: "#0284C7", bgColor: "#E0F2FE" },
          { stat: "Smart", label: "Pipeline Training", desc: "Proves you clean records, optimize parameters, and train models.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
        ]
      }
    };

    const roleId = this.appState.state.activeRoleId;
    const progress = this.appState.state.rolesProgress[roleId];
    const learningPath = this.getRoleLearningPath(ROLES_METADATA[roleId]);
    const modIdx = learningPath.findIndex(m => m.title === title);
    let level = 0;
    if (modIdx !== -1) {
      level = progress.qualifiedLevelsMap && progress.qualifiedLevelsMap[title] !== undefined ? progress.qualifiedLevelsMap[title] : 0;
      if (progress.internshipStatus === 'passed' && level === 0) {
        level = ((modIdx + 2) % 4) + 1;
      }
    }

    let highlightIdx = 1; // default Intermediate
    if (level === 2) highlightIdx = 1;
    if (level === 3) highlightIdx = 2;
    if (level === 4) highlightIdx = 3;

    const levelMap = { 1: 'Beginner', 2: 'Intermediate', 3: 'Advanced', 4: 'Expert' };
    const userLvlName = levelMap[level] || 'Beginner';
    const percentileText = level > 0 
      ? `You're ahead of 65% of learners currently at ${userLvlName}.`
      : `Achieve Intermediate to get ahead of 65% of peer learners.`;

    const roleName = ROLES_METADATA[roleId].title;
    const hiringDemandText = `1,240+ companies posted openings requiring this skill last month, and it appears in 78% of ${roleName} job listings.`;

    const stats = statsMap[cleanTitle] || statsMap[title] || {
      icon: "bar-chart-3",
      color: "var(--primary)",
      bgColor: "var(--brand-100)",
      borderColor: "var(--brand-300)",
      pillars: [
        { stat: "3.0x", label: "Selection Speed", desc: "Verified developers advance faster through screening pipelines.", color: "#16A34A", bgColor: "#DCFCE7" },
        { stat: "Priority", label: "Industry Standard", desc: "Tech teams prioritize candidates with verified capability here.", color: "#0284C7", bgColor: "#E0F2FE" },
        { stat: "85%", label: "Practical Application", desc: "Proves engineering capability and software development ownership.", color: "var(--amber-600)", bgColor: "var(--amber-50)" }
      ]
    };

    const dialog = document.getElementById('comp-stats-dialog');
    dialog.innerHTML = `
      <div style="padding: 20px 24px; border-bottom: 1.5px solid #F1F5F9; display: flex; justify-content: space-between; align-items: center; background: #FAFBFD;">
        <h3 style="margin: 0; font-size: 15.5px; font-weight: 755; color: #0F172A; display: flex; align-items: center; gap: 8px;">
          <div style="width: 28px; height: 28px; border-radius: 6px; background: ${stats.bgColor}; border: 1px solid ${stats.borderColor}; display: inline-flex; align-items: center; justify-content: center;">
            <i data-lucide="${stats.icon}" style="width: 15px; height: 15px; color: ${stats.color};"></i>
          </div>
          <span style="font-weight: 700;">${cleanTitle}</span>
        </h3>
        <button onclick="document.getElementById('comp-stats-dialog').close()" style="background: none; border: none; color: #94A3B8; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; transition: color 0.2s ease;">
          <i data-lucide="x" style="width: 18px; height: 18px;"></i>
        </button>
      </div>
      
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 20px; max-height: 80vh; overflow-y: auto;">
        
        <!-- Hiring Demand Banner -->
        <div style="background: #091E42; border-radius: 12px; padding: 18px 20px; text-align: left; color: #FFFFFF;">
          <div style="font-size: 11px; font-weight: 700; color: #38BDF8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">Hiring demand right now</div>
          <div style="font-size: 13.5px; font-weight: 500; line-height: 1.5; color: var(--slate-200);">
            ${hiringDemandText}
          </div>
        </div>

        <!-- Learner Percentile Rank Strip -->
        <div style="background: #0F172A; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px; text-align: left; color: #FFFFFF; border: 0.5px solid #1E293B;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: #1E293B; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px; color: #38BDF8;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <span style="font-size: 13px; font-weight: 600; color: #F1F5F9; letter-spacing: 0.2px;">
            ${percentileText}
          </span>
        </div>

        <!-- Package by Proficiency Level -->
        <div style="text-align: left;">
          <h4 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.5px;">Package by proficiency level</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; width: 100%;">
            <!-- Intermediate Card -->
            <div style="background: ${highlightIdx === 1 ? '#F0FDF4' : '#F8FAFC'}; border: ${highlightIdx === 1 ? '2.5px solid #16A34A' : '1px solid var(--slate-200)'}; border-radius: 8px; padding: 12px 10px; text-align: left; display: flex; flex-direction: column; gap: 4px; box-shadow: var(--shadow-sm);">
              <span style="font-size: 12px; font-weight: 600; color: ${highlightIdx === 1 ? '#15803D' : '#64748B'};">Intermediate</span>
              <span style="font-size: 18px; font-weight: 800; color: ${highlightIdx === 1 ? '#15803D' : '#0F172A'};">4.2 LPA</span>
              <span style="font-size: 11px; color: ${highlightIdx === 1 ? '#16A34A' : '#64748B'}; font-weight: 500;">32% shortlist rate</span>
            </div>
            <!-- Advanced Card -->
            <div style="background: ${highlightIdx === 2 ? '#F0FDF4' : '#F8FAFC'}; border: ${highlightIdx === 2 ? '2.5px solid #16A34A' : '1px solid var(--slate-200)'}; border-radius: 8px; padding: 12px 10px; text-align: left; display: flex; flex-direction: column; gap: 4px; box-shadow: var(--shadow-sm);">
              <span style="font-size: 12px; font-weight: 600; color: ${highlightIdx === 2 ? '#15803D' : '#64748B'};">Advanced</span>
              <span style="font-size: 18px; font-weight: 800; color: ${highlightIdx === 2 ? '#15803D' : '#0F172A'};">6.8 LPA</span>
              <span style="font-size: 11px; color: ${highlightIdx === 2 ? '#16A34A' : '#64748B'}; font-weight: 500;">58% shortlist rate</span>
            </div>
            <!-- Expert Card -->
            <div style="background: ${highlightIdx === 3 ? '#F0FDF4' : '#F8FAFC'}; border: ${highlightIdx === 3 ? '2.5px solid #16A34A' : '1px solid var(--slate-200)'}; border-radius: 8px; padding: 12px 10px; text-align: left; display: flex; flex-direction: column; gap: 4px; box-shadow: var(--shadow-sm);">
              <span style="font-size: 12px; font-weight: 600; color: ${highlightIdx === 3 ? '#15803D' : '#64748B'};">Expert</span>
              <span style="font-size: 18px; font-weight: 800; color: ${highlightIdx === 3 ? '#15803D' : '#0F172A'};">9.5 LPA</span>
              <span style="font-size: 11px; color: ${highlightIdx === 3 ? '#16A34A' : '#64748B'}; font-weight: 500;">74% shortlist rate</span>
            </div>
          </div>
          <div style="font-size: 11px; color: #64748B; margin-top: 6px; font-style: italic;">
            Based on 12,400 verified alumni placements
          </div>
        </div>
        
        <!-- Pillars mapping the three types of motivation visually -->
        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${[stats.pillars[0]].map((p, idx) => `
            <div style="display: flex; gap: 16px; align-items: center; text-align: left; background: #FFFFFF; border: 1px solid var(--slate-200); padding: 16px; border-radius: 12px; box-shadow: var(--shadow-sm);">
              <!-- Large Stat Box -->
              <div style="width: 72px; height: 52px; border-radius: 8px; background: ${p.bgColor}; border: 1px solid rgba(0,0,0,0.02); display: flex; align-items: center; justify-content: center; flex-shrink: 0; text-align: center; padding: 2px;">
                <span style="font-size: 16px; font-weight: 800; color: ${p.color}; tracking: -0.5px; line-height: 1.1;">${p.stat}</span>
              </div>
              
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
                  <h5 style="margin: 0; font-size: 13px; font-weight: 700; color: #0F172A;">${p.label}</h5>
                  <span style="font-size: 8.5px; font-weight: 700; text-transform: uppercase; padding: 1.5px 5px; border-radius: 4px; background: ${idx === 0 ? '#DCFCE7' : idx === 1 ? '#E0F2FE' : '#F3E8FF'}; color: ${idx === 0 ? '#15803D' : idx === 1 ? '#0369A1' : '#6B21A8'}; letter-spacing: 0.3px;">
                    ${idx === 0 ? 'Metrics' : idx === 1 ? 'Industry' : 'Impact'}
                  </span>
                </div>
                <p style="margin: 0; font-size: 12px; color: #64748B; line-height: 1.4;">${p.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <button onclick="document.getElementById('comp-stats-dialog').close()" style="width: 100%; padding: 12px; font-size: 13px; font-weight: 700; background: #0F172A; border: none; color: #FFFFFF; border-radius: 8px; cursor: pointer; transition: background 0.2s;">
          Got it, thanks!
        </button>
      </div>
    `;

    dialog.showModal();
    lucide.createIcons();
  },

  /* OPEN ASSESSMENT OVERVIEW POPOVER DIALOG */
  openAssessmentInfoModal(assessId, isInternship) {
    this.closeAllModals();
    const roleId = this.appState.state.activeRoleId;
    const progress = this.appState.state.rolesProgress[roleId];
    
    // Check if cleared
    const isAssessmentCleared = progress.internshipStatus === 'passed';
    const isFailed = progress.internshipStatus === 'failed';

    let assessChipText = 'Not attempted';
    let assessChipStyle = 'background: #F1F5F9; border: 0.5px solid var(--slate-200); color: #64748B;';
    
    if (isAssessmentCleared) {
      assessChipText = 'Cleared';
      assessChipStyle = 'background: var(--green-50); border: 0.5px solid var(--green-200); color: var(--green-600);';
    } else if (isFailed) {
      assessChipText = 'Attempted';
      assessChipStyle = 'background: #FEF3C7; border: 0.5px solid #FDE68A; color: var(--amber-700);';
    }

    const badge = document.getElementById('info-assess-status-badge');
    badge.textContent = assessChipText;
    badge.style.cssText = `font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; ${assessChipStyle}`;

    const launchBtn = document.getElementById('info-assess-launch-btn');
    launchBtn.textContent = isAssessmentCleared ? 'Retake assessment' : 'Take assessment';
    launchBtn.onclick = () => {
      document.getElementById('assessment-info-dialog').close();
      AppUI.openAssessmentModal(assessId, isInternship);
    };

    document.getElementById('assessment-info-dialog').showModal();
    lucide.createIcons();
  },

  /* OPEN JOB BOARD LISTINGS DIALOG */
  openJobBoardModal(boardType) {
    this.closeAllModals();
    const roleId = this.appState.state.activeRoleId;
    const role = ROLES_METADATA[roleId];
    
    const boardTitle = boardType === 'jobs' ? "Placement Job Board" : "Internship Job Board";
    const boardSub = boardType === 'jobs' 
      ? `Verified full-time opportunities for certified ${role.title} students`
      : `Exclusive internships for qualified ${role.title} candidates`;

    document.getElementById('job-board-title').textContent = boardTitle;
    document.getElementById('job-board-subtitle').textContent = boardSub;

    // Filter job entries for this role/type
    const jobs = MOCK_JOBS[boardType];
    const container = document.getElementById('jobs-listings-container');
    container.innerHTML = '';

    let filteredJobs = jobs.filter(j => {
      if (roleId === 'sde') return j.tags.includes('Java') || j.tags.includes('Algorithms') || j.tags.includes('Node.js') || j.tags.includes('System Design');
      if (roleId === 'frontend') return j.tags.includes('React') || j.tags.includes('JavaScript') || j.tags.includes('Tailwind');
      if (roleId === 'data_analyst') return j.tags.includes('Excel') || j.tags.includes('SQL') || j.tags.includes('Power BI') || j.tags.includes('Pandas');
      if (roleId.startsWith('backend')) return j.tags.includes('Node.js') || j.tags.includes('Express') || j.tags.includes('Python') || j.tags.includes('Java') || j.tags.includes('FastAPI');
      return true;
    });

    document.getElementById('jobs-count').textContent = `${filteredJobs.length} Active Openings`;

    filteredJobs.forEach(job => {
      const card = document.createElement('div');
      card.className = 'job-card';

      let tagsHTML = '';
      job.tags.forEach(t => {
        tagsHTML += `<span>${t}</span>`;
      });

      card.innerHTML = `
        <div class="job-details-col">
          <div class="job-comp-logo">${job.logo}</div>
          <div class="job-info-meta">
            <h4 class="job-role-name">${job.title}</h4>
            <span class="job-company-name">${job.company}</span>
            <div class="job-meta-pills">
              <span><i data-lucide="map-pin" style="width:10px;height:10px;display:inline;"></i> ${job.location}</span>
              ${tagsHTML}
            </div>
          </div>
        </div>
        <div class="job-salary-col">
          <span class="job-salary-lbl">${job.stipend || job.salary}</span>
          <button class="btn btn-primary" onclick="alert('Successfully applied to ${job.company}! We have shared your verified Skills Certificate and profile with their recruiting team.')">Apply Now</button>
        </div>
      `;
      container.appendChild(card);
    });

    document.getElementById('job-board-dialog').showModal();
    lucide.createIcons();
  },

  /* OPEN DETAILED OVERVIEW DIALOG */
  openRoleOverviewModal(roleId) {
    this.closeAllModals();
    const role = ROLES_METADATA[roleId];
    if (!role) return;

    // Top section details
    document.getElementById('overview-role-title').textContent = role.title;
    document.getElementById('overview-role-desc').textContent = role.description;
    
    // Skills summary (e.g. Includes SQL, Python, Tableau, and 3 more skills.)
    const skillsArray = role.focusSkill.split(',').map(s => s.trim());
    const primarySkills = skillsArray.slice(0, 3).join(', ');
    const remainingCount = Math.max(1, role.learnTopics.length - 3);
    document.getElementById('overview-role-includes-skills').innerHTML = `Includes <strong>${primarySkills}</strong>, and ${remainingCount} more skills.`;

    // Learners count
    const enrolledCountVal = ((role.durationDays * 89 + 1200) / 10).toFixed(1);
    document.getElementById('overview-enrolled-count').textContent = `${enrolledCountVal}k`;

    // Sidebar structured courses
    document.getElementById('overview-sidebar-courses-count').textContent = role.coursesCount;

    // Metrics bar values
    const diffEl = document.getElementById('overview-metric-difficulty');
    diffEl.textContent = role.difficulty;
    diffEl.className = 'metric-val';
    diffEl.setAttribute('data-difficulty', role.difficulty.toLowerCase().replace(' ', '-'));

    const durationWeeks = Math.round(role.durationDays / 7);
    document.getElementById('overview-metric-duration').textContent = `${durationWeeks} weeks`;
    document.getElementById('overview-metric-courses').textContent = `${role.coursesCount} courses`;
    document.getElementById('overview-metric-ctc').textContent = role.indicativeCtc;

    // About text
    document.getElementById('overview-role-about-text').textContent = role.description;

    // What you learn list (with checkmark icons)
    const learnList = document.getElementById('overview-role-learn-list');
    learnList.innerHTML = '';
    role.learnTopics.forEach(t => {
      const li = document.createElement('li');
      li.innerHTML = `<i data-lucide="check-circle-2" class="gain-check-icon"></i> <span>${t}</span>`;
      learnList.appendChild(li);
    });

    // Companies as clean pills
    const compContainer = document.getElementById('overview-role-companies');
    compContainer.innerHTML = '';
    role.companies.forEach(c => {
      const pill = document.createElement('span');
      pill.className = 'overview-company-pill-redesigned';
      pill.textContent = c.name;
      compContainer.appendChild(pill);
    });

    // Technologies covered pills
    const techContainer = document.getElementById('overview-role-technologies');
    techContainer.innerHTML = '';
    skillsArray.forEach(tech => {
      const pill = document.createElement('span');
      pill.className = 'overview-tech-pill-redesigned';
      pill.textContent = tech;
      techContainer.appendChild(pill);
    });

    // Footer meta details
    const footerDiff = document.getElementById('footer-metric-difficulty');
    footerDiff.textContent = role.difficulty;
    footerDiff.className = 'footer-difficulty-tag';
    footerDiff.setAttribute('data-difficulty', role.difficulty.toLowerCase().replace(' ', '-'));
    
    document.getElementById('footer-metric-duration').textContent = `${durationWeeks} weeks`;
    document.getElementById('footer-metric-courses').textContent = `${role.coursesCount} courses`;

    // Start learning buttons (both main and sticky footer)
    const enrollButtons = [
      document.getElementById('overview-enroll-btn'),
      document.getElementById('overview-enroll-btn-footer')
    ];
    const curRoleId = this.appState.state.activeRoleId;
    
    enrollButtons.forEach(btn => {
      if (!btn) return;
      if (curRoleId) {
        if (curRoleId === roleId) {
          btn.textContent = "Current Active Role";
          btn.disabled = true;
        } else {
          btn.innerHTML = `Switch to this Roadmap <i data-lucide="arrow-right" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-left:4px;"></i>`;
          btn.disabled = false;
          btn.onclick = () => {
            document.getElementById('role-overview-dialog').close();
            this.openRoleSwitchModal(roleId);
          };
        }
      } else {
        btn.innerHTML = `Start This Track <i data-lucide="arrow-right" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-left:4px;"></i>`;
        btn.disabled = false;
        btn.onclick = () => {
          this.appState.enrollInRole(roleId);
          document.getElementById('role-overview-dialog').close();
          this.render();
        };
      }
    });

    document.getElementById('role-overview-dialog').showModal();
    lucide.createIcons();
  },

  /* OPEN SWITCH CONFIRMATION MODAL */
  openRoleSwitchModal(newRoleId) {
    this.closeAllModals();
    const currentRoleId = this.appState.state.activeRoleId;
    const currentRole = ROLES_METADATA[currentRoleId];
    const newRole = ROLES_METADATA[newRoleId];
    
    const curProgress = this.appState.state.rolesProgress[currentRoleId];
    const newProgress = this.appState.state.rolesProgress[newRoleId];

    document.getElementById('switch-current-name').textContent = currentRole.title;
    document.getElementById('switch-current-time').textContent = `${curProgress.timeSpentHours.toFixed(1)} hrs`;
    
    const currentOverall = this.calculateRoleOverallProgress(currentRoleId);
    document.getElementById('switch-current-progress').textContent = `${currentOverall}%`;
    
    let curDone = 0;
    currentRole.courses.forEach(c => {
      if (curProgress.courseProgress[c.id] === 100) curDone++;
    });
    document.getElementById('switch-current-courses').textContent = `${curDone}/${currentRole.courses.length}`;

    // New role details
    document.getElementById('switch-new-name').textContent = newRole.title;
    document.getElementById('switch-new-duration').textContent = `~${newRole.durationDays} Days`;
    
    const newOverall = this.calculateRoleOverallProgress(newRoleId);
    document.getElementById('switch-new-progress').textContent = `${newOverall}% (Resume saved)`;

    // Calculate overlap to save days
    let overlapCount = 0;
    currentRole.courses.forEach(cc => {
      if (curProgress.courseProgress[cc.id] === 100) {
        const overlap = newRole.courses.find(nc => nc.title === cc.title);
        if (overlap) {
          overlapCount++;
          newProgress.courseProgress[overlap.id] = 100;
        }
      }
    });

    const daysSaved = overlapCount * 15;
    const finalDuration = Math.max(30, newRole.durationDays - daysSaved);

    const additionalTimeStr = daysSaved > 0 
      ? `+${finalDuration} Days (Saved ${daysSaved} days from overlapping courses!)`
      : `+${newRole.durationDays} Days`;
    
    document.getElementById('switch-new-additional-time').textContent = additionalTimeStr;

    // Confirm button event
    const confirmBtn = document.getElementById('confirm-switch-btn');
    confirmBtn.onclick = () => {
      this.appState.switchRole(newRoleId);
      document.getElementById('role-switch-dialog').close();
      this.render();
      alert(`🎉 Successfully switched path to ${newRole.title}! Your progress in ${currentRole.title} remains saved.`);
    };

    document.getElementById('role-switch-dialog').showModal();
    lucide.createIcons();
  }
};

// INITIALIZE APP
window.addEventListener('DOMContentLoaded', () => {
  AppUI.init();
});
