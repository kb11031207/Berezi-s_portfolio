// =============================================================================
// PROJECTS DATA
// =============================================================================
// This file contains all your project information.
// To add a new project, simply add a new object to the projects array below.
// Each project should have all the properties shown in the examples.

const projects = [
    {
        id: 'telemetry-app',
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
        id: 'credit-score-model',
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