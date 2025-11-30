import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'Teacher Job Portal',
    title: "Teacher Job Portal",
    description: "A modern portal that connects educators with institutions in a simple, friendly way.",
    longDescription: "Teacher Job Portal is a single place to discover academic opportunities and manage the hiring journey. Teachers can search and filter roles, save jobs, set alerts, and apply with a short cover note. Employers can post openings and review applications. Everyone gets a clean, responsive experience with helpful notifications.",
    liveLink: "https://teacherjobportal.vercel.app/",
    githubLink: "https://github.com/Ananya-Hegde2001/Job_Portal",
    image: '/images/teacherjobportal.png',
    tags: [
      "React.js",
      "Tailwind CSS",
      "Gemini AI",
      "JavaScript",
      "SQLite",
      "Express",
      "Node.js"
    ],
  },
   {
    id: 'CrowdVision',
    title: "CrowdVision",
    description: "AI-Powered Crowd Density Monitoring System.",
    longDescription: "A professional, real-time crowd density monitoring system using YOLOv8 deep learning technology with a comprehensive web dashboard, user authentication, and responsive design.",
    liveLink: "https://github.com/Ananya-Hegde2001/Crowd_Density_Estimator",
    githubLink: "https://github.com/Ananya-Hegde2001/Crowd_Density_Estimator",
    image: '/images/crowdvision.png',
    tags: [
      "Python",
      "Yolov8",
      "Flask",
      "OpenCV",
      "Firebase",
      "JavaScript",

    ],
  },
  {
    id: 'JSON Tree Visualizer',
    title: "JSON Tree Visualizer",
    description: "Interactive JSON Tree Visualizer built with React + Vite and React Flow.",
    longDescription: "An interactive tool built with React and React Flow that visualizes JSON data as a navigable tree featuring JSONPath search, validation, and image export capabilities.",
    liveLink: "https://jsontree-visualizer.vercel.app/",
    githubLink: "https://github.com/Ananya-Hegde2001/JSON-Tree-Visualizer-Apiwiz",
    image: '/images/jsontreevisualizer.png',
    tags: [
      "React.js",
      "Vite",
      "JavaScript",
    ],
  },
  {
    id: 'School Bus Tracker App',
    title: "School Bus Tracker App",
    description: "Developed an Android app using Java, Android Studio, and Firebase for real-time school bus tracking to let parents monitor live location, speed, and ETA.",
    longDescription: "Developed an Android app using Java, Android Studio, and Firebase for real-time school bus GPS tracking, enabling parents to monitor location, speed, and ETA while enhancing student safety and improving school transportation management with fast, reliable performance.",
    liveLink: "https://github.com/Ananya-Hegde2001/School-Bus-Tracker-App",
    githubLink: "https://github.com/Ananya-Hegde2001/School-Bus-Tracker-App",
    image: '/images/schoolbustrackerapp.png',
    tags: [
      "Java",
      "Android Studio",
      "Firebase",
      "GPS",
    ],
  },
  {
    id: 'HR Analytics Employee Retention',
    title: "HR Analytics Employee Retention",
    description: "HR Analytics Employee Retention project analyzes employee data to predict retention trends and identify key factors influencing employee turnover using Python.",
    longDescription: "This project aims to analyze employee retention patterns using data-driven insights to help organizations improve workforce stability. The project leverages Python, data visualization tools, and machine learning models to predict employee retention outcomes.",
    liveLink: "https://hr-analytics-employee-retention.streamlit.app/",
    githubLink: "https://github.com/Ananya-Hegde2001/HR-Analytics-Employee-Retention",
    image: '/images/hr-analytics-employee-retention.png',
    tags: [
      "Python",
      "Data Visualization",
      "Machine Learning",
      "Pandas",
      "NumPy", 
      "Scikit-learn"
    ],
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
