// =============================================================================
// PROJECTS DATA
// =============================================================================
// This file contains all your project information.
// To add a new project, simply add a new object to the projects array below.
// Each project should have all the properties shown in the examples.

const projects = [
    {
        id: 'telemetry-application',
        title: 'Telemetry Application',
        category: ['in-progress', 'featured'],
        status: 'in-progress',
        completion: 50,
        description: 'Developing an application for the solar car team to monitor and visualize telemetry data in real-time.',
        overview: 'A real-time telemetry monitoring system for the solar car team that collects, processes, and visualizes data from various sensors.',
        role: 'Lead Developer responsible for project management, system architecture, backend development, and real-time data processing pipeline.',
        challenges: 'Handling real-time data streams from multiple sensors, implementing efficient data storage, and creating responsive visualizations. Solved using WebSocket connections and optimized database schemas.',
        statusDescription: 'Currently waiting on the firmware and hardware for the board responsible for transmitting the data to the database to be completed.',
        techStack: ['Flutter', 'Javascript', 'Snowflake'],
        skills: ['flutter', 'javascript', 'sql'],
        images: [
            'images/telem1.jpg',
            'images/telem2.jpg',
            'images/telem3.jpg'
        ],
        sourceLink: null, // Add GitHub link when available
        demoLink: null    // Add demo link when available
    },
    {
        id: 'credit-score-prediction-model',
        title: 'Credit Score Prediction Model',
        category: ['completed'],
        status: 'completed',
        completion: 100,
        description: 'Built a machine learning model to predict credit scores based on financial and demographic data.',
        overview: 'A machine learning model that predicts credit scores using financial and demographic data, helping financial institutions assess credit risk.',
        role: 'Data Scientist & ML Engineer responsible for model development, training, and validation.',
        challenges: 'Handling imbalanced data, feature engineering for complex financial metrics, and ensuring model fairness across demographic groups.',
        statusDescription: 'Successfully deployed and being used in production with 85% accuracy.',
        techStack: ['Python', 'AI-Assisted Development', 'Data Science', 'Machine Learning'],
        skills: ['python', 'sql', 'machine-learning', 'data-science'],
        images: [
            'images/cc.jpg',
            'images/cc2.jpg'
        ],
        sourceLink: 'https://github.com/kb11031207/Credit-Score-Anaylsis-Project.git',
        demoLink: null
    },
    {
        id: 'bee-hive-agent',
        title: 'Bee Hive Agent',
        category: ['completed', 'featured'],
        status: 'completed',
        completion: 100,
        description: 'Trained an RL Model on the Bee Hive(Reversi) Game to learn optimal strategies.',
        overview: 'An AI agent trained using reinforcement learning to play the Bee Hive (Reversi) game at a competitive level.',
        role: 'ML Engineer responsible for implementing the RL algorithm and training pipeline.',
        challenges: 'Designing an effective reward system, optimizing the training process for complex game states, and implementing efficient state representation.',
        statusDescription: 'Agent successfully trained and achieves a 70% win rate against advanced players.',
        techStack: ['Python', 'AI-Assisted Development', 'Machine Learning'],
        skills: ['python', 'machine-learning'],
        images: [
            'images/cc.jpg',
            'images/cc2.jpg'
        ],
        sourceLink: 'https://github.com/kb11031207/RL_BEEHIVE.git',
        demoLink: null
    },
    {
        id: 'ball-bearing-classification-project',
        title: 'Ball Bearing Classification Project',
        category: ['completed', 'featured'],
        status: 'completed',
        completion: 100,
        description: 'A complete computer vision and robotics system for automatically classifying and sorting ball bearings by material type (Brass, Nylon, Steel) and size (1/2" and 1/4"). Features VGG16-based CNN with transfer learning, real-time inference on Raspberry Pi, and Arduino-controlled mechanical sorting.',
        overview: 'This project implements a complete computer vision and robotics system for automatically classifying and sorting ball bearings by material type (Brass, Nylon, Steel) and size (1/2" and 1/4"). The system combines machine learning, real-time inference on Raspberry Pi, and mechanical sorting using Arduino-controlled servos. Developed for MEE206 - Mechanical Student Design Project.',
        role: 'Lead Developer responsible for the complete system architecture including machine learning pipeline development, real-time inference implementation, hardware integration, and mechanical control system design.',
        challenges: 'Key challenges included implementing VGG16-based CNN with transfer learning for material classification, optimizing TensorFlow Lite deployment on Raspberry Pi for real-time performance (~30ms inference), establishing reliable serial communication between Pi and Arduino, and addressing model overfitting issues. The model was intentionally overfit to the specific training setup for optimal performance, though this limits generalization to different environments.',
        statusDescription: 'Successfully deployed complete end-to-end system achieving 100% classification accuracy during real-time testing. System demonstrates seamless integration between ML inference, real-time processing, and mechanical automation. The high accuracy was achieved by intentionally overfitting the model to the specific real time setup conditions.',
        techStack: ['Python', 'TensorFlow', 'TensorFlow Lite', 'OpenCV', 'PiCamera2', 'Arduino C++', 'VGG16', 'Transfer Learning', 'Serial Communication'],
        skills: ['python', 'machine-learning', 'computer-vision', 'tensorflow', 'arduino', 'raspberry-pi', 'cpp'],
        images: [
            'images/cc.jpg',
            'images/cc2.jpg'
        ],
        sourceLink: 'https://github.com/kb11031207/Ball_Bearing_Classification',
        demoLink: null
    },
    {
        id: 'nasa-apod-viewer',
        title: 'NASA APOD Viewer',
        category: ['completed'],
        status: 'completed',
        completion: 100,
        description: 'Android app that displays NASA\'s Astronomy Picture of the Day (APOD) using their public API with a beautified UI design.',
        overview: 'A native Android application built with Kotlin that integrates with NASA\'s APOD API to display stunning astronomy images and data. The app showcases modern Android development practices including RecyclerView implementation, custom theming, and API integration. Developed as part of AND101 coursework focusing on API consumption and UI beautification.',
        role: 'Android Developer responsible for full app development including API integration, UI/UX design, RecyclerView implementation, and custom styling.',
        challenges: 'Key challenges included integrating with NASA\'s public API, implementing efficient RecyclerView with multiple data points, creating custom themes and styles for enhanced user experience, and optimizing image loading for astronomy photos. Applied modern Android development patterns for clean architecture.',
        statusDescription: 'Successfully completed Android application demonstrating API integration, custom UI theming, and efficient data display. Project showcases proficiency in Kotlin, Android SDK, and modern mobile development practices.',
        techStack: ['Kotlin', 'Android SDK', 'NASA API', 'RecyclerView', 'Custom Themes', 'Gradle'],
        skills: ['kotlin', 'android', 'api-integration', 'mobile-development'],
        images: [
            'images/apod.gif'
        ],
        sourceLink: 'https://github.com/kb11031207/Nasa_Api',
        demoLink: null
    },
    {
        id: 'moodflix---movie-suggestion-app',
        title: 'MoodFlix - Movie Suggestion App',
        category: ['completed'],
        status: 'completed',
        completion: 100,
        description: 'Collaborative Android app that provides personalized movie suggestions based on user mood. Features intuitive UI design with mood-based navigation and seamless movie discovery experience.',
        overview: 'MoodFlix is a team-developed Android application built with Kotlin that suggests movies based on the user\'s current mood. This collaborative project involved 6 team members, with a focus on creating an engaging user experience through thoughtful UI/UX design and layout implementation. The app demonstrates modern Android development practices and effective team collaboration.',
        role: 'UI/UX Designer & Frontend Developer responsible for complete UI design, layout implementation, user interface architecture, and visual design system. Focused on creating intuitive mood-based navigation and seamless user experience flows.',
        challenges: 'Key challenges included designing an intuitive mood-selection interface, creating responsive layouts that work across different screen sizes, implementing cohesive visual design language, and coordinating UI specifications with team members. Successfully delivered consistent design patterns and user-friendly interface components.',
        statusDescription: 'Successfully completed collaborative Android project with 6 team members. Delivered comprehensive UI/UX design and layout implementation, contributing to a polished movie suggestion app with intuitive mood-based interface.',
        techStack: ['Kotlin', 'Android SDK', 'XML Layouts', 'Material Design', 'Collaborative Development'],
        skills: ['kotlin', 'android', 'mobile-development', 'ui-ux-design'],
        images: [
            'images/MovieSuggestionDemo.gif'
        ],
        sourceLink: 'https://github.com/kb11031207/Movie26',
        demoLink: 'https://youtu.be/Q9Z0BLLmeIo'
    },
    {
        id: 'ukkonen-suffix-tree',
        title: 'Ukkonen\'s Suffix Tree Implementation',
        category: ['completed'],
        status: 'completed',
        completion: 100,
        description: 'Java implementation of Ukkonen\'s algorithm for constructing suffix trees with O(n) time complexity. Features generalized suffix trees, pattern matching, and performance testing utilities.',
        overview: 'A comprehensive implementation of Ukkonen\'s algorithm for efficient suffix tree construction. This advanced data structures project includes support for generalized suffix trees (GST) that can handle multiple strings, fast pattern matching capabilities, and extensive testing utilities. The implementation demonstrates deep understanding of complex algorithms and optimization techniques.',
        role: 'Algorithm Developer responsible for implementing the complete Ukkonen\'s algorithm, designing generalized suffix tree extensions, developing pattern matching functionality, and creating comprehensive testing and validation tools.',
        challenges: 'Key challenges included implementing the complex Ukkonen\'s algorithm with proper suffix links, handling edge cases in generalized suffix trees for multiple strings, optimizing for O(n) time complexity, and developing robust testing frameworks. Successfully delivered efficient implementation with validation tools and performance testing capabilities.',
        statusDescription: 'Successfully implemented complete Ukkonen\'s suffix tree algorithm achieving O(n) construction time and O(m + k) pattern matching. Includes comprehensive testing suite and validation tools for algorithm verification.',
        techStack: ['Java', 'Algorithms', 'Data Structures', 'Python', 'Performance Testing', 'Algorithm Validation'],
        skills: ['java', 'algorithms', 'data-structures', 'python', 'performance-optimization'],
        images: [
            'images/cc.jpg',
            'images/cc2.jpg'
        ],
        sourceLink: 'https://github.com/kb11031207/ukonnen_v2',
        demoLink: null
    },
    {
        id: 'sliac-fantasy-football---full-stack-app',
        title: 'SLIAC Fantasy Football - Full-Stack App',
        category: ['completed', 'featured'],
        status: 'completed',
        completion: 100,
        description: 'Full-stack fantasy football web app for the St. Louis Intercollegiate Athletic Conference (SLIAC). Users build squads, join leagues, and earn points from real SLIAC player stats. Built with React + Vite frontend and ASP.NET Core 8 REST API with JWT auth.',
        overview: 'SLIAC Fantasy Football is a full-stack web application that lets users manage fantasy squads and compete in leagues using real SLIAC soccer data. The backend is a clean-layered ASP.NET Core 8 API (controllers, services, repositories, Dapper + SQL Server) with JWT authentication, league/squad management, gameweek tracking, and automated points calculation. A Python scraper pipeline ingests teams, players, fixtures, and stats. The frontend is a React + Vite SPA that consumes the API. The project demonstrates REST API design, auth, relational data modeling, and full-stack integration.',
        role: 'Full-stack developer: designed and implemented the API (ASP.NET Core 8, Dapper, SQL Server), JWT auth and resource-based authorization, service/repository layers, league and squad business logic, points calculation, and integration with a React + Vite frontend. Contributed to data pipeline (Python scrapers) and database schema. Delivered a deployed app with Docker support.',
        challenges: 'Implementing correct fantasy scoring rules across positions (goals, assists, clean sheets, cards, shots, etc.), modeling leagues/squads/gameweeks and keeping data consistent, securing endpoints with JWT and resource ownership, and integrating scraped SLIAC data (HTML/PDF) into a reliable pipeline. Addressed validation, error handling, and API design for a smooth frontend experience.',
        statusDescription: 'Completed full-stack SLIAC Fantasy Football app with live frontend at sliacfantasy.kberezi.tech. Backend API supports auth, leagues, squads, gameweeks, fixtures, and player stats with Swagger documentation. Data is fed by Python scrapers; app is containerized and suitable for portfolio demonstration.',
        techStack: ['ASP.NET Core 8', 'C#', 'SQL Server', 'React', 'Swagger/OpenAPI', 'Python', 'Docker'],
        skills: ['csharp', 'asp-net-core', 'rest-api', 'react', 'sql-server', 'jwt', 'full-stack', 'docker'],
        images: [
            // Add a screenshot or GIF, e.g. 'images/SliacFantasyDemo.gif' or 'images/SliacFantasyScreenshot.png'
        ],
        sourceLink: 'https://github.com/kb11031207/CSCI_316_Proj',
        demoLink: 'https://sliacfantasy.kberezi.tech'
    }
   
];

// =============================================================================
// PROJECT HELPER FUNCTIONS
// =============================================================================

// Get all unique categories from projects
function getProjectCategories() {
    const categories = new Set(['all']);
    projects.forEach(project => {
        project.category.forEach(cat => categories.add(cat));
    });
    return Array.from(categories);
}

// Get projects by category
function getProjectsByCategory(category) {
    if (category === 'all') return projects;
    return projects.filter(project => project.category.includes(category));
}

// Get project by ID
function getProjectById(id) {
    return projects.find(project => project.id === id);
}

// Get projects by skill
function getProjectsBySkill(skill) {
    return projects.filter(project => 
        project.skills.includes(skill.toLowerCase())
    );
}

// Export for use in other files
window.ProjectsData = {
    projects,
    getProjectCategories,
    getProjectsByCategory,
    getProjectById,
    getProjectsBySkill
}; 