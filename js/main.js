// =============================================================================
// MAIN APPLICATION INITIALIZATION
// =============================================================================
// This file coordinates all modules and generates content from data files

// =============================================================================
// CONTENT GENERATOR
// =============================================================================

class ContentGenerator {
    constructor() {
        this.personalData = window.PersonalData;
        this.projectsData = window.ProjectsData;
    }
    
    // Generate all dynamic content
    generateContent() {
        this.generatePersonalInfo();
        this.generateAboutSection();
        this.generateProjectsSection();
        this.generateSkillsSection();
        this.generateSocialLinks();
        this.updateSkillProjectCounts();
        this.preloadImages();
    }
    
    // Generate personal info in the intro section
    generatePersonalInfo() {
        const { personalInfo } = this.personalData;
        
        // Update name and title
        const nameElement = document.querySelector('.name-reveal h1');
        const titleElement = document.querySelector('.name-reveal h2');
        const profileImg = document.querySelector('.profile-image img');
        
        if (nameElement) nameElement.textContent = personalInfo.name;
        if (titleElement) titleElement.textContent = personalInfo.title;
        if (profileImg) {
            profileImg.src = personalInfo.profileImage;
            profileImg.alt = personalInfo.name;
        }
    }
    
    // Generate about section content
    generateAboutSection() {
        const { personalInfo } = this.personalData;
        const terminalText = document.querySelector('.terminal-text');
        
        if (!terminalText) return;
        
        let html = '';
        
        // Add about text with typing animations
        personalInfo.aboutText.forEach((text, index) => {
            const delayClass = index === 0 ? 'typing' : `typing-delay-${Math.min(index + 1, 6)}`;
            
            if (text.includes('Core competencies')) {
                html += `<p class="${delayClass}">${text}</p>`;
                html += `<ul class="skills-list typing-delay-4">`;
                personalInfo.coreCompetencies.forEach(competency => {
                    html += `<li>${competency}</li>`;
                });
                html += `</ul>`;
            } else {
                html += `<p class="${delayClass}">${text}</p>`;
            }
        });
        
        // Add CTA text
        html += `
            <p class="cta-text typing-delay-6">
                ${personalInfo.ctaText}<span class="project-link">Please check out my cool projects</span>... <span class="cursor">█</span>
            </p>
        `;
        
        terminalText.innerHTML = html;
    }
    
    // Generate projects section
    generateProjectsSection() {
        this.generateProjectFilters();
        this.generateProjectCards();
    }
    
    // Generate project filter buttons
    generateProjectFilters() {
        const filtersContainer = document.querySelector('.project-filters');
        if (!filtersContainer) return;
        
        const categories = this.projectsData.getProjectCategories();
        
        const filtersHTML = categories.map(category => {
            const isActive = category === 'all' ? ' active' : '';
            const displayName = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
            return `<button class="filter-btn${isActive}" data-filter="${category}">${displayName}</button>`;
        }).join('');
        
        filtersContainer.innerHTML = filtersHTML;
    }
    
    // Generate project cards
    generateProjectCards() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;
        
        const projectsHTML = this.projectsData.projects.map(project => {
            return `
                <div class="project-card" data-category="${project.category.join(' ')}" data-skills="${project.skills.join(',')}">
                    <div class="project-header">
                        <span class="status-dot"></span>
                        <h3>${project.title}</h3>
                    </div>
                    <div class="project-content">
                        <p class="project-description">${project.description}</p>
                        <div class="progress-container">
                            <div class="progress-label">Completion</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${project.completion}%"></div>
                                <div class="progress-glow"></div>
                            </div>
                            <div class="progress-percentage">${project.completion}%</div>
                        </div>
                        <div class="tech-stack">
                            ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                    <div class="project-footer">
                        ${project.sourceLink ? `<a href="${project.sourceLink}" class="project-link">View Source <span class="arrow">→</span></a>` : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        projectsGrid.innerHTML = projectsHTML;
    }
    
    // Generate skills section
    generateSkillsSection() {
        this.generateSkillFilters();
        this.generateSkillCards();
    }
    
    // Generate skill filter buttons
    generateSkillFilters() {
        const filtersContainer = document.querySelector('.skills-filters');
        if (!filtersContainer) return;
        
        const categories = this.personalData.getSkillCategories();
        
        const filtersHTML = categories.map(category => {
            const isActive = category === 'all' ? ' active' : '';
            const displayName = category.charAt(0).toUpperCase() + category.slice(1);
            return `<button class="skill-filter-btn${isActive}" data-filter="${category}">${displayName}</button>`;
        }).join('');
        
        filtersContainer.innerHTML = filtersHTML;
    }
    
    // Generate skill cards
    generateSkillCards() {
        const skillsGrid = document.querySelector('.skills-grid');
        if (!skillsGrid) return;
        
        const skillsHTML = this.personalData.skills.map(skill => {
            const projectCount = this.personalData.getSkillProjectCount(skill.id);
            return `
                <div class="skill-card" data-category="${skill.category}" data-skill="${skill.id}">
                    <div class="skill-header">
                        <i class="${skill.icon}"></i>
                        <h3>${skill.name}</h3>
                    </div>
                    <div class="skill-projects">
                        <span class="project-count">${projectCount} Project${projectCount !== 1 ? 's' : ''}</span>
                    </div>
                </div>
            `;
        }).join('');
        
        skillsGrid.innerHTML = skillsHTML;
    }
    
    // Generate social links
    generateSocialLinks() {
        const socialIcons = document.querySelector('.social-icons');
        if (!socialIcons) return;
        
        const { personalInfo } = this.personalData;
        
        const socialHTML = personalInfo.socialLinks.map(link => {
            return `
                <a href="${link.url}" target="_blank" class="social-icon">
                    <i class="${link.icon}"></i>
                </a>
            `;
        }).join('');
        
        socialIcons.innerHTML = socialHTML;
    }
    
    // Update resume iframe
    updateResumeSection() {
        const { personalInfo } = this.personalData;
        const resumeIframe = document.querySelector('.resume-content iframe');
        
        if (resumeIframe && personalInfo.resumeUrl) {
            resumeIframe.src = personalInfo.resumeUrl;
        }
    }
    
    // Update skill project counts
    updateSkillProjectCounts() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            const skillId = card.getAttribute('data-skill');
            const projectCount = this.personalData.getSkillProjectCount(skillId);
            const countDisplay = card.querySelector('.project-count');
            
            if (countDisplay) {
                countDisplay.textContent = `${projectCount} Project${projectCount !== 1 ? 's' : ''}`;
            }
        });
    }
    
    // Preload all project images
    preloadImages() {
        const imageUrls = this.projectsData.projects
            .filter(project => project.images && project.images.length)
            .reduce((urls, project) => {
                urls.push(...project.images);
                return urls;
            }, []);

        // Create hidden container for preloaded images
        const preloadContainer = document.createElement('div');
        preloadContainer.style.display = 'none';
        preloadContainer.id = 'image-preload-container';
        document.body.appendChild(preloadContainer);

        // Preload each image
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
            preloadContainer.appendChild(img);
        });
    }
}

// =============================================================================
// APPLICATION COORDINATOR
// =============================================================================

class PortfolioApp {
    constructor() {
        this.contentGenerator = null;
        this.sections = null;
        this.animations = null;
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }
    
    initializeApp() {
        // Check if all required data is loaded
        if (!this.checkDataAvailability()) {
            console.error('Required data modules not loaded');
            return;
        }
        
        // Initialize content generation
        this.contentGenerator = new ContentGenerator();
        this.contentGenerator.generateContent();
        
        // Initialize animations
        if (window.Animations) {
            window.Animations.initializeAnimations();
        }
        
        // Initialize sections after content is generated
        setTimeout(() => {
            if (window.Sections) {
                this.sections = window.Sections.initializeSections();
            }
        }, 100);
        
        console.log('Portfolio app initialized successfully! 🚀');
    }
    
    checkDataAvailability() {
        return window.PersonalData && window.ProjectsData;
    }
    
    // Public method to add new projects (for easy testing/updating)
    addProject(projectData) {
        if (this.contentGenerator && window.ProjectsData) {
            window.ProjectsData.projects.push(projectData);
            this.contentGenerator.generateProjectCards();
            this.contentGenerator.updateSkillProjectCounts();
            
            // Re-setup event listeners for new project cards
            if (this.sections) {
                this.sections.sectionController.setupProjectInteractions();
            }
        }
    }
    
    // Public method to update personal info
    updatePersonalInfo(newInfo) {
        if (this.contentGenerator && window.PersonalData) {
            Object.assign(window.PersonalData.personalInfo, newInfo);
            this.contentGenerator.generatePersonalInfo();
            this.contentGenerator.generateAboutSection();
        }
    }
    
    // Public method to add new skills
    addSkill(skillData) {
        if (this.contentGenerator && window.PersonalData) {
            window.PersonalData.skills.push(skillData);
            this.contentGenerator.generateSkillCards();
            
            // Re-setup event listeners for new skill cards
            if (this.sections) {
                this.sections.sectionController.setupSkillInteractions();
            }
        }
    }
}

// =============================================================================
// GLOBAL INITIALIZATION
// =============================================================================

// Initialize the app
let portfolioApp;

// Ensure all scripts are loaded before initializing
function initializePortfolio() {
    const requiredModules = ['PersonalData', 'ProjectsData', 'Animations', 'Sections'];
    const loadedModules = requiredModules.filter(module => window[module]);
    
    if (loadedModules.length === requiredModules.length) {
        portfolioApp = new PortfolioApp();
    } else {
        // Wait a bit and try again
        setTimeout(initializePortfolio, 100);
    }
}

// Start initialization
initializePortfolio();

// Export for global access
window.PortfolioApp = PortfolioApp;
window.portfolioApp = portfolioApp; 