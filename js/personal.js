// =============================================================================
// PERSONAL INFORMATION
// =============================================================================
// This file contains all your personal information, skills, and content.
// Edit this file to update your about section, skills, and social links.

const personalInfo = {
    name: "Kesiena Berezi",
    title: "Tech Enthusiast",
    profileImage: "images/headshot.jpg",
    
    // About section content - these will appear with typing animation
    aboutText: [
        ">> Initializing profile data...",
        ">> I am a tech enthusiast with a dream to change the world",
        ">> Big Time Arsenal FC Fan",
        ">> Check out my cool projects",
        ">> Incase you havent noticed my favorite color is green",
        ">> I also like to play video games and watch anime",
        ">> Core competencies include:",
        ">> Currently exploring the intersections of technology and creativity"
    ],
    
    // Core competencies list
    coreCompetencies: [
        "AI/Machine Learning",
        "FIFA",
        "Software Development",
        "Arsenal FC",
        "Cloud Engineering",
        "Data Science"
    ],
    
    // Call to action text
    ctaText: "> Now Please check out my cool projects... ",
    
    // Social links
    socialLinks: [
        {
            platform: "github",
            url: "https://github.com/kb11031207",
            icon: "fab fa-github"
        },
        {
            platform: "linkedin", 
            url: "https://www.linkedin.com/in/kesiena-berezi-b936ba200/",
            icon: "fab fa-linkedin"
        },
        {
            platform: "twitter",
            url: "https://twitter.com/yourusername",
            icon: "fab fa-twitter"
        },
        {
            platform: "playstation",
            url: "https://playstation.com/yourusername",
            icon: "fab fa-playstation"
        },
        {
            platform: "twitch",
            url: "https://www.twitch.tv/k_b1103",
            icon: "fab fa-twitch"
        },
        {
            platform: "steam",
            url: "https://ea.com/yourusername",
            icon: "fab fa-steam"
        },
        {
            platform: "email",
            url: "mailto:kesiena.berezi@gmail.com",
            icon: "fas fa-envelope"
        }
    ],
    
    // Resume link
    resumeUrl: "https://docs.google.com/document/d/e/2PACX-1vSvkOsQEIvGBSZFN1RfcEItukQo_LOx7DqUMJWmadBUffSGRRqZEVr0yXaoTX-LJ6XHhuU8Atcdm3Hw/pub?embedded=true"
};

// =============================================================================
// SKILLS DATA
// =============================================================================

const skills = [
    // Programming Languages
    {
        id: 'python',
        name: 'Python',
        category: 'languages',
        icon: 'fab fa-python'
    },
    {
        id: 'javascript',
        name: 'Javascript',
        category: 'languages',
        icon: 'fab fa-js'
    },
    {
        id: 'java',
        name: 'Java',
        category: 'languages',
        icon: 'fab fa-java'
    },
    {
        id: 'dart',
        name: 'Dart',
        category: 'languages',
        icon: 'fas fa-mobile-alt'
    },
    {
        id: 'cpp',
        name: 'C++',
        category: 'languages',
        icon: 'fas fa-code'
    },
    {
        id: 'sql',
        name: 'SQL',
        category: 'languages',
        icon: 'fas fa-database'
    },
    
    // Frameworks
    {
        id: 'react',
        name: 'React',
        category: 'frameworks',
        icon: 'fab fa-react'
    },
    {
        id: 'flutter',
        name: 'Flutter',
        category: 'frameworks',
        icon: 'fas fa-mobile-alt'
    },
    {
        id: 'flask',
        name: 'Flask',
        category: 'frameworks',
        icon: 'fab fa-python'
    },
    
    // Tools
    {
        id: 'git',
        name: 'Git',
        category: 'tools',
        icon: 'fab fa-git-alt'
    },
    {
        id: 'azure',
        name: 'Azure',
        category: 'tools',
        icon: 'fas fa-cloud'
    },
    {
        id: 'gcp',
        name: 'GCP',
        category: 'tools',
        icon: 'fas fa-cloud'
    },
    {
        id: 'kubernetes',
        name: 'Kubernetes',
        category: 'tools',
        icon: 'fas fa-dharmachakra'
    },
    
    // AI/ML Technologies
    {
        id: 'machine-learning',
        name: 'Machine Learning',
        category: 'ai-ml',
        icon: 'fas fa-brain'
    },
    {
        id: 'tensorflow',
        name: 'TensorFlow',
        category: 'ai-ml',
        icon: 'fas fa-robot'
    },
    {
        id: 'computer-vision',
        name: 'Computer Vision',
        category: 'ai-ml',
        icon: 'fas fa-eye'
    },
    {
        id: 'data-science',
        name: 'Data Science',
        category: 'ai-ml',
        icon: 'fas fa-chart-line'
    },
    
    // Hardware & Embedded
    {
        id: 'arduino',
        name: 'Arduino',
        category: 'hardware',
        icon: 'fas fa-microchip'
    },
    {
        id: 'raspberry-pi',
        name: 'Raspberry Pi',
        category: 'hardware',
        icon: 'fab fa-raspberry-pi'
    },
    
    // Mobile Development
    {
        id: 'kotlin',
        name: 'Kotlin',
        category: 'languages',
        icon: 'fas fa-mobile-alt'
    },
    {
        id: 'android',
        name: 'Android',
        category: 'frameworks',
        icon: 'fab fa-android'
    },
    {
        id: 'mobile-development',
        name: 'Mobile Development',
        category: 'frameworks',
        icon: 'fas fa-mobile-alt'
    },
    {
        id: 'api-integration',
        name: 'API Integration',
        category: 'tools',
        icon: 'fas fa-plug'
    },
    {
        id: 'ui-ux-design',
        name: 'UI/UX Design',
        category: 'design',
        icon: 'fas fa-palette'
    },
    
    // Algorithms & Computer Science
    {
        id: 'algorithms',
        name: 'Algorithms',
        category: 'computer-science',
        icon: 'fas fa-project-diagram'
    },
    {
        id: 'data-structures',
        name: 'Data Structures',
        category: 'computer-science',
        icon: 'fas fa-sitemap'
    },
    {
        id: 'performance-optimization',
        name: 'Performance Optimization',
        category: 'computer-science',
        icon: 'fas fa-tachometer-alt'
    }
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// Get skills by category
function getSkillsByCategory(category) {
    if (category === 'all') return skills;
    return skills.filter(skill => skill.category === category);
}

// Get all unique skill categories
function getSkillCategories() {
    const categories = new Set(['all']);
    skills.forEach(skill => categories.add(skill.category));
    return Array.from(categories);
}

// Get skill by ID
function getSkillById(id) {
    return skills.find(skill => skill.id === id);
}

// Count projects for each skill (requires ProjectsData to be loaded)
function getSkillProjectCount(skillId) {
    if (typeof window.ProjectsData === 'undefined') return 0;
    return window.ProjectsData.getProjectsBySkill(skillId).length;
}

// Export for use in other files
window.PersonalData = {
    personalInfo,
    skills,
    getSkillsByCategory,
    getSkillCategories,
    getSkillById,
    getSkillProjectCount
}; 