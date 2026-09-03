export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live" | "video";
}

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  tags: string[];
  year: string;
  role: string;
  links: ProjectLink[];
  cover: string;
  sections: ProjectSection[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "jango",
    title: "Jango",
    tagline:
      "A private enterprise document assistant powered by Retrieval-Augmented Generation.",
    summary:
      "A full-stack AI document assistant that lets users upload PDFs, search their content semantically, and ask questions using grounded AI responses with source references.",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "ChromaDB",
      "LangChain",
      "Ollama",
      "Qwen3",
    ],
    year: "2026",
    role: "Full Stack Developer",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/utkarsh-0106/enterprise-document-rag",
        type: "github",
      },

    ],
    cover: "/jango.png",
    sections: [
      {
        heading: "Problem",
        body: [
          "Organizations often have large collections of private documents that are difficult to search and understand efficiently.",
          "Jango was built to provide a centralized AI-powered interface for asking questions directly against uploaded enterprise documents.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "The application uses React and Vite for the frontend and FastAPI for backend REST APIs.",
          "Uploaded PDFs are processed into text chunks, converted into embeddings using nomic-embed-text, and stored in ChromaDB for semantic retrieval.",
          "Qwen3 8B running through Ollama generates responses using the retrieved document context.",
        ],
      },
      {
        heading: "Tech Stack",
        body: [
          "Frontend: React, Vite, JavaScript, Axios",
          "Backend: Python, FastAPI, SQLAlchemy, JWT",
          "AI/RAG: LangChain, Ollama, Qwen3, nomic-embed-text",
          "Storage: SQLite, ChromaDB, local document storage",
          "Deployment: Vercel and Cloudflare Tunnel",
        ],
      },
      {
        heading: "Features",
        body: [
          "JWT-based user authentication and protected API endpoints.",
          "PDF upload, validation, processing, and document management.",
          "Semantic document retrieval using vector embeddings and ChromaDB.",
          "Grounded AI answers with document and page-level source references.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Building a reliable document ingestion pipeline required handling PDF validation, extraction, chunking, embeddings, and background processing.",
          "Maintaining user-level document isolation required filtering vector retrieval using authenticated user information.",
        ],
      },
      {
        heading: "Learning",
        body: [
          "Building Jango provided practical experience with RAG pipelines, vector databases, local LLM inference, authentication, and full-stack architecture.",
        ],
      },
      {
        heading: "Future Improvements",
        body: [
          "Add PostgreSQL and cloud object storage for production deployments.",
          "Introduce conversation history, role-based access control, hybrid search, and scalable inference infrastructure.",
        ],
      },
    ],
    gallery: [
      "/jango1.png",
      "/jango2.png",
      "/jango3.png",
    ],
  },

  {
    slug: "ai-developer-toolbox",
    title: "AI Developer Toolbox",
    tagline:
      "An AI-powered productivity platform that brings essential developer tools into one workspace.",
    summary:
      "A full-stack web application that combines multiple AI-powered developer utilities into a single consistent interface.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "AI",
      "Vercel",
      "Render",
    ],
    year: "2025",
    role: "Full Stack Developer",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/utkarsh-0106/ai-developer-toolbox",
        type: "github",
      },
      {
        label: "Live Demo",
        url: "https://ai-developer-toolbox-c3ud.vercel.app",
        type: "live",
      },
      {
        label: "Demo Video",
        url: "https://www.youtube.com/watch?v=shEffo8SwVw",
        type: "video",
      },
    ],
    cover: "/ai1.png",
    sections: [
      {
        heading: "Business Problem",
        body: [
          "Developers frequently switch between different AI tools for debugging, code generation, documentation, and productivity tasks.",
          "The goal was to create a unified platform where commonly used AI utilities could be accessed through one consistent interface.",
        ],
      },
      {
        heading: "Technical Problem",
        body: [
          "Different AI utilities require different inputs, loading states, and response formats.",
          "The application needed reusable components and architecture that allowed new tools to be added without duplicating large amounts of code.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "The frontend uses React, TypeScript, and Tailwind CSS for a responsive component-driven interface.",
          "The backend uses Node.js and Express to communicate with AI APIs while keeping API credentials protected from the client.",
          "Frontend and backend services are independently deployed using Vercel and Render.",
        ],
      },
      {
        heading: "Technology Stack",
        body: [
          "Frontend: React, TypeScript, Tailwind CSS",
          "Backend: Node.js, Express.js",
          "Deployment: Vercel and Render",
          "Version Control: Git and GitHub",
          "AI Integration: External AI APIs",
        ],
      },
      {
        heading: "Key Features",
        body: [
          "Multiple AI-powered developer utilities integrated into one application.",
          "Reusable component architecture for adding new tools.",
          "Responsive interface for desktop and mobile devices.",
          "Independent frontend and backend deployment architecture.",
        ],
      },
      {
        heading: "Engineering Decisions",
        body: [
          "Separated frontend and backend responsibilities to improve maintainability and protect API credentials.",
          "Used reusable components to reduce duplicated UI logic across different AI utilities.",
          "Used TypeScript to improve type safety and development reliability.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Managing multiple AI endpoints while maintaining consistent loading, error, and response states.",
          "Designing reusable components that remain flexible as the number of tools increases.",
        ],
      },
      {
        heading: "Key Learnings",
        body: [
          "Reusable architecture significantly improves maintainability as applications grow.",
          "Separating frontend and backend responsibilities simplifies deployment and future enhancements.",
        ],
      },
      {
        heading: "Future Improvements",
        body: [
          "Add secure user authentication and personalized dashboards.",
          "Allow users to save conversation history and generated outputs.",
          "Support multiple AI providers through a configurable backend architecture.",
        ],
      },
    ],
    gallery: [
      "/ai1.png",
      "/ai2.png",
      "/ai3.png",
    ],
  },

  {
    slug: "institutional-performance-analytics-system",
    title: "Institutional Performance Analytics System",
    tagline:
      "A data-driven analytics platform for measuring institutional performance across departments.",
    summary:
      "A full-stack analytics system that processes academic and operational data, provides interactive dashboards, and surfaces actionable insights.",
    tags: [
      "Python",
      "Streamlit",
      "Pandas",
      "Scikit-learn",
      "Data Visualization",
    ],
    year: "2024",
    role: "Solo Developer",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/utkarsh-0106/Institutional-Performance-Analytics-System",
        type: "github",
      },
      {
        label: "Live Demo",
        url: "https://institutional-performance-analytics-system-ujfv7cfx2uwpefuuzdb.streamlit.app/",
        type: "live",
      },
    ],
    cover: "/IPAS1.png",
    sections: [
      {
        heading: "Problem",
        body: [
          "Institutions collect large amounts of academic and operational data but often rely on scattered spreadsheets and static reports.",
          "The goal was to provide a centralized platform for visualizing performance and identifying areas requiring attention.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "The application is built using Streamlit with Pandas powering the data processing layer.",
          "Raw data is cleaned, normalized, and transformed into analysis-ready dataframes.",
          "Scikit-learn is used to identify correlations and potential outliers within the data.",
        ],
      },
      {
        heading: "Tech Stack",
        body: [
          "Python, Streamlit, Pandas, NumPy, Scikit-learn, and Plotly.",
          "A file-based data store is used for portability and simple deployment.",
        ],
      },
      {
        heading: "Features",
        body: [
          "Department-level performance dashboards with interactive filtering.",
          "Semester trend analysis with year-over-year comparisons.",
          "Automated outlier detection for identifying departments requiring attention.",
          "Exportable reports for offline stakeholder review.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Institutional data can contain inconsistent column names, missing values, and conflicting formats.",
          "A robust data normalization pipeline was required to produce reliable dashboard results.",
        ],
      },
      {
        heading: "Learning",
        body: [
          "Data quality is critical for analytics applications because unreliable input directly affects the decisions produced by dashboards.",
        ],
      },
      {
        heading: "Future Improvements",
        body: [
          "Move to a production database supporting concurrent users and incremental data loading.",
          "Add role-based access and predictive forecasting capabilities.",
        ],
      },
    ],
    gallery: [
      "/IPAS2.png",
      "/IPAS3.png",
      "/IPAS4.png",
    ],
  },

  {
    slug: "cinematch",
    title: "CineMatch",
    tagline:
      "A movie recommendation system that suggests films based on user preferences.",
    summary:
      "A content-based movie recommendation system that analyzes movie metadata and user preferences to surface relevant films.",
    tags: [
      "Python",
      "Flask",
      "Pandas",
      "Scikit-learn",
      "Recommendation System",
      "Render",
    ],
    year: "2023",
    role: "Solo Developer",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/utkarsh-0106/Movie_Recommendation_System",
        type: "github",
      },
      {
        label: "Live Demo",
        url: "https://movie-recommendation-system-12-8a23.onrender.com",
        type: "live",
      },
    ],
    cover: "/movie1.png",
    sections: [
      {
        heading: "Problem",
        body: [
          "Thousands of available movies can make it difficult for users to decide what to watch.",
          "The goal was to build a recommendation system that focuses on user taste rather than generic popularity.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "CineMatch uses content-based filtering to compare movie metadata and identify similar films.",
          "The recommendation engine is exposed through a lightweight web interface deployed on Render.",
        ],
      },
      {
        heading: "Tech Stack",
        body: [
          "Python, Pandas, Scikit-learn, content-based filtering, and a web frontend.",
        ],
      },
      {
        heading: "Features",
        body: [
          "Recommendations based on a user's preferred movie.",
          "Similarity-based matching to identify related films.",
          "Clean web interface accessible from different devices.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Sparse movie metadata could produce noisy similarity results, requiring careful feature selection and weighting.",
        ],
      },
      {
        heading: "Learning",
        body: [
          "Feature engineering plays an important role in recommendation quality because the model depends on the information being compared.",
        ],
      },
      {
        heading: "Future Improvements",
        body: [
          "Add collaborative filtering to combine content-based and user-behavior signals.",
          "Build persistent user taste profiles for more personalized recommendations.",
        ],
      },
    ],
    gallery: [
      "/movie1.png",
      "/movie2.png",
    ],
  },

  {
    slug: "track-n-test",
    title: "Track-n-Test",
    tagline:
      "A DSA progress tracker that turns practice into measurable progress.",
    summary:
      "A productivity tool for tracking DSA practice, monitoring topic coverage, and building consistent problem-solving habits.",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "DSA",
      "Productivity",
      "Progress Tracking",
    ],
    year: "2023",
    role: "Solo Developer",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/utkarsh-0106/track-n-test",
        type: "github",
      },
      {
        label: "Demo Video",
        url: "https://www.youtube.com/watch?v=hUGeNkS9zz4&t=11s",
        type: "video",
      },
    ],
    cover: "/tnt1.png",
    sections: [
      {
        heading: "Problem",
        body: [
          "DSA practice can become difficult to manage without a clear way to track solved problems, weak topics, and consistency.",
          "The goal was to turn scattered practice into measurable and visible progress.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "Track-n-Test allows users to record solved problems with topic, difficulty, and time information.",
          "The application aggregates this information into progress and consistency views.",
        ],
      },
      {
        heading: "Tech Stack",
        body: [
          "HTML, CSS, JavaScript, and browser-based local persistence.",
        ],
      },
      {
        heading: "Features",
        body: [
          "Log problems by topic, difficulty, and time taken.",
          "Topic coverage tracking to identify weak areas.",
          "Consistency tracking to encourage regular practice.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "The main challenge was selecting useful metrics without overwhelming users with unnecessary information.",
        ],
      },
      {
        heading: "Learning",
        body: [
          "Progress tools are most effective when they focus on metrics that directly influence user behavior.",
        ],
      },
      {
        heading: "Future Improvements",
        body: [
          "Add accounts and cloud synchronization for cross-device progress.",
          "Integrate with coding platforms to automatically import solved problems.",
        ],
      },
    ],
    gallery: [
      "/tnt2.png",
      "/tnt3.png",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}