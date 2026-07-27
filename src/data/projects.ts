export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'live' | 'video';
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
    slug: 'institutional-performance-analytics-system',
    title: 'Institutional Performance Analytics System',
    tagline: 'A data-driven analytics platform for measuring institutional performance across departments.',
    summary:
      'A full-stack analytics system that ingests academic and operational data, surfaces actionable insights through interactive dashboards, and helps institutions make evidence-based decisions.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Data Visualization'],
    year: '2024',
    role: 'Solo Developer',
    links: [
      { label: 'GitHub', url: 'https://github.com/utkarsh-0106/Institutional-Performance-Analytics-System', type: 'github' },
      { label: 'Live Demo', url: 'https://institutional-performance-analytics-system-ujfv7cfx2uwpefuuzdb.streamlit.app/', type: 'live' },
    ],
    cover:
      '/IPAS1.png',
    sections: [
      {
        heading: 'Problem',
        body: [
          'Institutions collect enormous amounts of academic and operational data, but that data rarely translates into decisions. Stakeholders are forced to work with scattered spreadsheets and static reports, which makes it hard to spot trends, compare departments, or act early on declining performance.',
          'There was no single place to visualize performance holistically and drill down into the metrics that matter.',
        ],
      },
      {
        heading: 'Architecture',
        body: [
          'The system is built as a Streamlit application backed by a Pandas-powered data layer. Raw data is cleaned, normalized, and aggregated into analysis-ready frames at startup, then served to a set of interactive dashboard views.',
          'A lightweight ML layer uses Scikit-learn to surface correlations and flag outliers, so the dashboards do not just describe the past — they hint at what to investigate next.',
        ],
      },
      {
        heading: 'Tech Stack',
        body: [
          'Python, Streamlit, Pandas, NumPy, Scikit-learn, Plotly for interactive charts, and a file-based data store for portability.',
        ],
      },
      {
        heading: 'Features',
        body: [
          'Department-level performance dashboards with interactive filtering and drill-down.',
          'Trend analysis across semesters with year-over-year comparisons.',
          'Automated outlier detection that highlights departments needing attention.',
          'Exportable reports for stakeholders who prefer offline review.',
        ],
      },
      {
        heading: 'Challenges',
        body: [
          'Real institutional data is messy — inconsistent column names, missing values, and conflicting formats. Building a robust normalization layer was the difference between dashboards that worked and dashboards that lied.',
          'Keeping the Streamlit app responsive with large datasets required careful caching and selective aggregation.',
        ],
      },
      {
        heading: 'Learning',
        body: [
          'Data quality is a feature, not a prerequisite. The most valuable code in this project was the cleaning pipeline, not the charts.',
          'Dashboards are only useful if they answer a question. Designing views around stakeholder questions — not around available data — changed everything.',
        ],
      },
      {
        heading: 'Future Improvements',
        body: [
          'Move to a real database backend to support concurrent users and incremental data loads.',
          'Add role-based access so different stakeholders see only what is relevant to them.',
          'Introduce predictive forecasting so institutions can act before a trend becomes a problem.',
        ],
      },
    ],
    gallery: [
      '/IPAS2.png',
      '/IPAS3.png',
      '/IPAS4.png',
    ],
  },
  {
  slug: 'ai-developer-toolbox',
  title: 'AI Developer Toolbox',
  tagline:
    'An AI-powered productivity platform that brings essential developer tools into a single modern workspace.',

  summary:
    'AI Developer Toolbox is a full-stack web application that combines multiple AI-powered utilities into one unified platform. Instead of switching between different websites for code generation, text processing, debugging, or content creation, developers can access everything through a single consistent interface.',

  tags: [
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'Tailwind CSS',
    'AI',
    'Vercel',
    'Render'
  ],

  year: '2025',

  role: 'Full Stack Developer',

  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/utkarsh-0106/ai-developer-toolbox',
      type: 'github',
    },
    {
      label: 'Live Demo',
      url: 'https://ai-developer-toolbox-c3ud.vercel.app',
      type: 'live',
    },
    {
      label: 'Demo Video',
      url: 'https://www.youtube.com/watch?v=shEffo8SwVw',
      type: 'video',
    },
  ],

  cover: '/ai1.png',

  sections: [
    {
      heading: 'Business Problem',
      body: [
        'Developers regularly switch between multiple online AI tools for debugging, code generation, documentation, text formatting, and productivity tasks. This fragmented workflow increases context switching and reduces productivity.',
        'The goal was to build a unified platform where commonly used AI-powered utilities could be accessed through one consistent interface.',
      ],
    },

    {
      heading: 'Technical Problem',
      body: [
        'Each AI utility has different input requirements, loading states, and response formats. Building multiple independent pages would lead to duplicated logic and inconsistent user experience.',
        'The challenge was to design a reusable architecture that allowed new AI tools to be added with minimal code changes while maintaining a consistent UI.',
      ],
    },

    {
      heading: 'Architecture',
      body: [
        'The frontend was built using React, TypeScript, and Tailwind CSS, providing a responsive and component-driven user interface.',
        'The backend uses Node.js and Express to securely communicate with AI APIs while keeping API keys protected from the client.',
        'The frontend is deployed on Vercel and the backend is deployed on Render, enabling independent deployment and scalability.',
      ],
    },

    {
      heading: 'Technology Stack',
      body: [
        'Frontend: React, TypeScript, Tailwind CSS',
        'Backend: Node.js, Express.js',
        'Deployment: Vercel (Frontend), Render (Backend)',
        'Version Control: Git & GitHub',
        'AI Integration: External AI APIs',
      ],
    },

    {
      heading: 'Key Features',
      body: [
        'Multiple AI-powered developer tools integrated into a single application.',
        'Responsive interface that works across desktop and mobile devices.',
        'Reusable component architecture for rapid addition of new AI tools.',
        'Modern user interface with smooth animations and consistent interactions.',
        'Separation of frontend and backend deployments for easier maintenance.',
      ],
    },

    {
      heading: 'Engineering Decisions',
      body: [
        'Separated frontend and backend deployments to improve maintainability and keep API credentials secure.',
        'Designed reusable UI components to minimise duplicated code across AI tools.',
        'Used TypeScript to improve type safety and reduce runtime errors.',
        'Structured the project so additional AI utilities can be integrated without changing the overall application architecture.',
      ],
    },

    {
      heading: 'Challenges',
      body: [
        'Managing communication between multiple AI endpoints while maintaining a consistent user experience.',
        'Handling asynchronous API requests, loading states, and error scenarios without affecting responsiveness.',
        'Designing reusable components that remain flexible as the number of AI tools increases.',
      ],
    },

    {
      heading: 'Key Learnings',
      body: [
        'Scalable software depends more on good architecture than on adding features.',
        'Reusable components significantly improve maintainability as projects grow.',
        'Separating concerns between frontend and backend simplifies deployment and future enhancements.',
      ],
    },

    {
      heading: 'Future Improvements',
      body: [
        'Add secure user authentication and personal dashboards.',
        'Allow users to save AI conversation history and generated outputs.',
        'Introduce additional AI-powered developer utilities based on user feedback.',
        'Support multiple AI providers through a configurable backend architecture.',
      ],
    },
  ],

  gallery: [
    '/ai1.png',
    '/ai2.png',
    '/ai3.png',
  ],
},
  {
    slug: 'cinematch',
    title: 'CineMatch',
    tagline: 'A movie recommendation system that suggests films based on your taste.',
    summary:
      'A content-based movie recommendation system that analyzes movie metadata and user preferences to surface films you are likely to enjoy — deployed on Render.',
    tags: ['Python', 'Machine Learning', 'Recommendation System', 'Render'],
    year: '2023',
    role: 'Solo Developer',
    links: [
      { label: 'GitHub', url: 'https://github.com/utkarsh-0106/Movie_Recommendation_System', type: 'github' },
      { label: 'Live Demo', url: 'https://movie-recommendation-system-12-8a23.onrender.com', type: 'live' },
    ],
    cover:
      '/movie1.png',
    sections: [
      {
        heading: 'Problem',
        body: [
          'Choice paralysis is real. With thousands of films across streaming platforms, picking what to watch often takes longer than watching it.',
          'I wanted a recommendation system that understood taste — not just popularity.',
        ],
      },
      {
        heading: 'Architecture',
        body: [
          'CineMatch uses a content-based filtering approach: movie metadata is vectorized and compared against a user\'s preferred films to find the closest matches.',
          'The system is wrapped in a lightweight web interface and deployed on Render for public access.',
        ],
      },
      {
        heading: 'Tech Stack',
        body: ['Python, Pandas, Scikit-learn, a content-based filtering model, and a web frontend deployed on Render.'],
      },
      {
        heading: 'Features',
        body: [
          'Recommendations based on a favorite movie rather than generic popularity.',
          'Similarity scores so users understand why a film was suggested.',
          'A clean web interface accessible from any device.',
        ],
      },
      {
        heading: 'Challenges',
        body: [
          'Sparse metadata meant similarity scores could be noisy. Tuning the feature weighting was essential to get recommendations that felt right, not just technically correct.',
        ],
      },
      {
        heading: 'Learning',
        body: [
          'A recommendation system is only as good as the features it compares. Feature engineering — not the model — was the real work.',
        ],
      },
      {
        heading: 'Future Improvements',
        body: [
          'Add collaborative filtering to combine content-based and user-behavior signals.',
          'Let users build a taste profile over time instead of relying on a single favorite movie.',
        ],
      },
    ],
    gallery: [
      '/movie1.png',
      '/movie2.png',
    ],
  },
  {
    slug: 'track-n-test',
    title: 'Track-n-Test',
    tagline: 'A DSA progress tracker that turns practice into measurable progress.',
    summary:
      'A tool for tracking data-structures-and-algorithms practice — log problems, monitor topic coverage, and watch your consistency compound over time.',
    tags: ['DSA', 'Productivity', 'Progress Tracking'],
    year: '2023',
    role: 'Solo Developer',
    links: [
      { label: 'GitHub', url: 'https://github.com/utkarsh-0106/track-n-test', type: 'github' },
      { label: 'Demo Video', url: 'https://www.youtube.com/watch?v=hUGeNkS9zz4&t=11s', type: 'video' },
    ],
    cover:
      '/tnt1.png',
    sections: [
      {
        heading: 'Problem',
        body: [
          'DSA practice is a marathon, but most students treat it like a sprint — grinding problems with no system to track what they have covered, where they are weak, or how consistent they have been.',
          'I wanted a tracker that turned scattered practice into visible, motivating progress.',
        ],
      },
      {
        heading: 'Architecture',
        body: [
          'Track-n-Test lets users log solved problems with topic, difficulty, and time taken, then aggregates that data into coverage and consistency views.',
          'The focus is on clarity: what have I practiced, what have I skipped, and am I keeping it up?',
        ],
      },
      {
        heading: 'Tech Stack',
        body: ['A focused frontend with local persistence for tracking sessions and progress over time.'],
      },
      {
        heading: 'Features',
        body: [
          'Log problems by topic, difficulty, and time taken.',
          'Topic coverage view to spot weak areas at a glance.',
          'Consistency tracking so streaks become a habit, not a surprise.',
        ],
      },
      {
        heading: 'Challenges',
        body: [
          'The temptation was to add every metric. The discipline was to show only the metrics that change behavior.',
        ],
      },
      {
        heading: 'Learning',
        body: [
          'Progress tools should motivate, not overwhelm. The right number of metrics is almost always fewer than you think.',
        ],
      },
      {
        heading: 'Future Improvements',
        body: [
          'Add accounts and cloud sync so progress survives device changes.',
          'Integrate with problem platforms to auto-import solved problems.',
        ],
      },
    ],
    gallery: [
      '/tnt2.png',
      '/tnt3.png',
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
