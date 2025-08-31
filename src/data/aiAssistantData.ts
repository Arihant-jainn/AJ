// AI Assistant Knowledge Base
// Edit this file to add more information about Arihant Jain
// This data powers the AI assistant responses

export const portfolioData = {
  personal: {
    name: "Arihant Jain",
    title: "Full Stack Developer & Tech Enthusiast",
    location: "India",
    email: "arihant.jain@email.com",
    phone: "+91 98765 43210",
    github: "https://github.com/arihantjain",
    linkedin: "https://linkedin.com/in/arihantjain",
    summary: "Passionate fresher ready to build innovative solutions and contribute to cutting-edge projects",
    status: "Open to work - Actively seeking opportunities"
  },
  
  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "C++"],
    frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    ai_ml: ["Machine Learning (scikit-learn)", "Deep Learning (PyTorch, TensorFlow)", "NLP", "LangChain"],
    tools_devops: ["Git", "GitHub", "Docker", "Postman", "VS Code", "CI/CD"],
    cloud: ["AWS", "Vercel"],
    mobile: ["React Native", "Flutter"],
    currently_learning: ["Microservices", "Kubernetes", "Blockchain", "Web3", "Rust", "Go"]
  },
  
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User authentication", "Payment processing", "Inventory management", "Real-time analytics"],
      category: "fullstack"
    },
    {
      name: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing and machine learning capabilities",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      features: ["NLP capabilities", "Machine learning", "Real-time responses", "Context awareness"],
      category: "ai"
    },
    {
      name: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team coordination features",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      features: ["Real-time collaboration", "Task tracking", "Team management", "Progress analytics"],
      category: "web"
    },
    {
      name: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts and interactive maps",
      technologies: ["React Native", "TypeScript", "OpenWeather API"],
      features: ["Location-based forecasts", "Interactive maps", "Weather alerts", "Offline support"],
      category: "mobile"
    },
    {
      name: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for data processing, model training, and deployment automation",
      technologies: ["Python", "scikit-learn", "Docker", "AWS"],
      features: ["Data preprocessing", "Model training", "Automated deployment", "Performance monitoring"],
      category: "ai"
    }
  ],
  
  experience: {
    level: "Fresher",
    education: "Bachelor's in Computer Science",
    strengths: ["Quick learner", "Problem solver", "Team player", "Adaptable", "Creative thinker"],
    interests: ["Web development", "AI/ML", "Open source", "Tech blogging", "Poetry writing"],
    achievements: [
      "15+ personal projects completed",
      "1000+ hours of coding experience",
      "10+ open source contributions",
      "Tech blog with 2.5K+ reads"
    ]
  },
  
  availability: {
    status: "Open to work",
    interests: ["Full-time positions", "Internships", "Freelance projects", "Open source contributions"],
    preferences: ["Remote work", "Hybrid", "On-site"],
    notice_period: "Immediate",
    salary_expectation: "As per industry standards for freshers"
  },

  blog: {
    tech_posts: 6,
    poetry_posts: 6,
    total_reads: "2.5K+",
    writing_hours: "100+",
    topics: ["React", "JavaScript", "Machine Learning", "Database Design", "Poetry", "Developer Life"]
  },

  personality: {
    traits: ["Curious", "Dedicated", "Creative", "Analytical", "Collaborative"],
    hobbies: ["Coding", "Reading tech blogs", "Writing poetry", "Learning new technologies", "Contributing to open source"],
    values: ["Continuous learning", "Code quality", "User experience", "Innovation", "Teamwork"]
  }
};

// Response templates for common questions
export const responseTemplates = {
  skills: "Arihant has a comprehensive skill set including Python, JavaScript, TypeScript, Java, and C++ for programming. He's proficient in React.js, Next.js, and modern frontend technologies, along with Node.js and Express.js for backend development. He also has experience with AI/ML technologies like PyTorch, TensorFlow, and scikit-learn.",
  
  projects: "Arihant has built 15+ projects including an e-commerce platform with payment integration, an AI chatbot with NLP capabilities, a collaborative task management app, weather forecast mobile app, and machine learning pipelines. Each project demonstrates his full-stack development skills and ability to work with modern technologies.",
  
  experience: "As a passionate fresher, Arihant brings 1000+ hours of coding experience, has completed 15+ personal projects, and made 10+ open source contributions. He has a Bachelor's in Computer Science and is known for being a quick learner and problem solver.",
  
  contact: "You can reach Arihant at arihant.jain@email.com or +91 98765 43210. He's also active on GitHub (github.com/arihantjain) and LinkedIn. He's immediately available and open to discussing opportunities!",
  
  availability: "Arihant is actively seeking opportunities as a fresher developer. He's open to full-time positions, internships, and freelance projects. He prefers remote or hybrid work but is flexible with arrangements. He can start immediately.",

  blog: "Arihant maintains an active blog with 6 tech articles and 6 poetry pieces, accumulating 2.5K+ reads. He writes about React, JavaScript, Machine Learning, and also expresses his creative side through technology-inspired poetry.",

  personality: "Arihant is curious, dedicated, and creative. He values continuous learning, code quality, and innovation. In his free time, he enjoys coding, reading tech blogs, writing poetry, and contributing to open source projects."
};

// Keywords mapping for better response matching
export const keywordMapping = {
  skills: ["skill", "technology", "tech", "programming", "language", "framework", "frontend", "backend", "database", "ai", "ml", "machine learning"],
  projects: ["project", "work", "portfolio", "built", "created", "developed", "app", "application", "website"],
  experience: ["experience", "background", "education", "fresher", "level", "qualification", "degree"],
  contact: ["contact", "reach", "email", "phone", "connect", "hire", "linkedin", "github"],
  availability: ["available", "job", "work", "opportunity", "position", "hiring", "employment", "career"],
  blog: ["blog", "writing", "article", "post", "poetry", "tech blog", "content"],
  personality: ["personality", "traits", "hobbies", "interests", "values", "character", "about"]
};

// Enhanced response generation
export const generateResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Check for specific keywords and return appropriate responses
  for (const [category, keywords] of Object.entries(keywordMapping)) {
    if (keywords.some(keyword => message.includes(keyword))) {
      return responseTemplates[category as keyof typeof responseTemplates];
    }
  }
  
  // Default response for unmatched queries
  return "I'm here to help you learn more about Arihant Jain! You can ask me about his skills, projects, experience, availability, blog, or how to contact him. What would you like to know?";
};