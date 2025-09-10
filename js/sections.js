// =============================================================================
// SECTION MANAGEMENT
// =============================================================================
// This file handles all popup/modal functionality, navigation, and filtering

// =============================================================================
// SECTION CONTROLLER CLASS
// =============================================================================

class SectionController {
    constructor() {
        this.sections = {
            about: document.querySelector('.about-section'),
            projects: document.querySelector('.projects-section'),
            resume: document.querySelector('.resume-section'),
            skills: document.querySelector('.skills-section'),
            projectDetails: document.querySelector('.project-details-popup'),
            projectsPopup: document.querySelector('.projects-popup')
        };
        
        this.initializeEventListeners();
    }
    
    // Open a section
    openSection(sectionName) {
        const section = this.sections[sectionName];
        if (section) {
            section.classList.add('visible');
            section.style.opacity = '1';
            section.style.pointerEvents = 'auto';
            
            // Special handling for about section animations
            if (sectionName === 'about') {
                this.restartAboutAnimations();
            }
        }
    }
    
    // Close a section
    closeSection(sectionName) {
        const section = this.sections[sectionName];
        if (section) {
            section.classList.remove('visible');
            section.style.opacity = '0';
            section.style.pointerEvents = 'none';
        }
    }
    
    // Restart typing animations in about section
    restartAboutAnimations() {
        const elements = document.querySelectorAll('.terminal-text p, .terminal-text ul');
        elements.forEach(element => {
            element.style.animation = 'none';
            element.offsetHeight; // Trigger reflow
            element.style.animation = null;
        });
    }
    
    // Initialize all event listeners
    initializeEventListeners() {
        this.setupTriggerButtons();
        this.setupCloseButtons();
        this.setupOutsideClickClose();
        this.setupProjectFiltering();
        this.setupSkillFiltering();
        this.setupProjectInteractions();
        this.setupSkillInteractions();
    }
    
    // Setup trigger buttons
    setupTriggerButtons() {
        // About section trigger
        const aboutTrigger = document.querySelector('.about-corner-button .glow-button');
        aboutTrigger?.addEventListener('click', () => this.openSection('about'));
        
        // Projects section trigger
        const projectsTrigger = document.querySelector('.button-container .glow-button');
        projectsTrigger?.addEventListener('click', () => {
            // Regenerate all projects and reset filters when opening main projects
            this.resetProjectsSection();
            this.openSection('projects');
        });
        
        // Resume section trigger
        const resumeTrigger = document.querySelector('#resume-trigger');
        resumeTrigger?.addEventListener('click', () => this.openSection('resume'));
        
        // Skills section trigger
        const skillsTrigger = document.querySelector('.skills-corner-button .glow-button');
        skillsTrigger?.addEventListener('click', () => this.openSection('skills'));
        
        // Project link in about section
        const projectLink = document.querySelector('.project-link');
        projectLink?.addEventListener('click', () => {
            this.closeSection('about');
            // Also reset projects when coming from about section
            this.resetProjectsSection();
            this.openSection('projects');
        });
    }
    
    // Setup close buttons
    setupCloseButtons() {
        Object.keys(this.sections).forEach(sectionName => {
            const section = this.sections[sectionName];
            const closeButton = section?.querySelector('.close-button');
            closeButton?.addEventListener('click', () => this.closeSection(sectionName));
        });
    }
    
    // Setup outside click to close
    setupOutsideClickClose() {
        Object.keys(this.sections).forEach(sectionName => {
            const section = this.sections[sectionName];
            section?.addEventListener('click', (e) => {
                if (e.target === section) {
                    this.closeSection(sectionName);
                }
            });
            
            // Prevent clicks inside containers from closing
            const container = section?.querySelector('.about-container, .projects-container, .resume-container, .skills-container, .popup-content');
            container?.addEventListener('click', (e) => e.stopPropagation());
        });
    }
    
    // Setup project filtering
    setupProjectFiltering() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                this.filterProjects(filterValue);
            });
        });
    }
    
    // Filter projects by category
    filterProjects(category) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category')?.split(' ') || [];
            
            if (category === 'all' || categories.includes(category)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
    
    // Setup skill filtering
    setupSkillFiltering() {
        const skillFilterButtons = document.querySelectorAll('.skill-filter-btn');
        
        skillFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                skillFilterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                this.filterSkills(filter);
            });
        });
    }
    
    // Filter skills by category
    filterSkills(category) {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'flex';
            } else {
                if (card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }
    
    // Setup project interactions
    setupProjectInteractions() {
        // This will be called after projects are dynamically generated
        this.setupProjectCardClicks();
    }
    
    // Setup project card click handlers
    setupProjectCardClicks() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectTitle = card.querySelector('h3')?.textContent;
                if (projectTitle && window.ProjectsData) {
                    const generatedId = this.titleToId(projectTitle);
                    const project = window.ProjectsData.getProjectById(generatedId);
                    if (project) {
                        this.showProjectDetails(project);
                    }
                }
            });
        });
    }
    
    // Convert title to ID format
    titleToId(title) {
        return title.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    }
    
    // Show project details popup
    showProjectDetails(project) {
        const popup = this.sections.projectDetails;
        if (!popup) return;
        
        // Update popup content
        popup.querySelector('.project-title').textContent = project.title;
        popup.querySelector('.project-overview').textContent = project.overview;
        popup.querySelector('.project-role').textContent = project.role;
        popup.querySelector('.project-challenges').textContent = project.challenges;
        popup.querySelector('.completion-percentage').textContent = `${project.completion}%`;
        popup.querySelector('.progress-fill').style.width = `${project.completion}%`;
        popup.querySelector('.status-description').textContent = project.statusDescription;
        
        // Update project status
        const statusText = popup.querySelector('.project-status .status-text');
        const statusDot = popup.querySelector('.project-status .status-dot');
        if (statusText && statusDot) {
            // Capitalize first letter of status
            const formattedStatus = project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ');
            statusText.textContent = `Status: ${formattedStatus}`;
            
            // Update status dot color based on project status
            statusDot.className = 'status-dot'; // Reset classes
            if (project.status === 'completed') {
                statusDot.classList.add('completed');
            } else if (project.status === 'in-progress') {
                statusDot.classList.add('in-progress');
            } else {
                statusDot.classList.add('pending');
            }
        }

        // Update tech stack
        const techStackContainer = popup.querySelector('.tech-stack');
        techStackContainer.innerHTML = project.techStack
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');

        // Handle image slider
        this.setupProjectImageSlider(popup, project);
        
        // Update links
        this.setupProjectLinks(popup, project);
        
        // Show popup
        this.openSection('projectDetails');
    }
    
    // Setup project image slider
    setupProjectImageSlider(popup, project) {
        const sliderContainer = popup.querySelector('.slider-container');
        const sliderDots = popup.querySelector('.slider-dots');
        const projectSlider = popup.querySelector('.project-slider');
        
        if (project.images && project.images.length > 0) {
            sliderContainer.innerHTML = project.images
                .map(img => `<img src="${img}" alt="Project screenshot">`)
                .join('');
            
            sliderDots.innerHTML = project.images
                .map((_, i) => `<div class="dot${i === 0 ? ' active' : ''}"></div>`)
                .join('');
            
            projectSlider.style.display = 'block';
            this.setupSliderControls(popup);
            this.showSlide(0);
        } else {
            projectSlider.style.display = 'none';
        }
    }
    
    // Setup project links
    setupProjectLinks(popup, project) {
        const projectLinks = popup.querySelector('.project-links');
        projectLinks.innerHTML = '';

        if (project.sourceLink) {
            projectLinks.innerHTML += `
                <a href="${project.sourceLink}" class="source-link" target="_blank">
                    <i class="fab fa-github"></i> View Source
                </a>
            `;
        }

        if (project.demoLink) {
            projectLinks.innerHTML += `
                <a href="${project.demoLink}" class="demo-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            `;
        }

        projectLinks.style.display = project.sourceLink || project.demoLink ? 'flex' : 'none';
    }
    
    // Setup slider controls
    setupSliderControls(popup) {
        const prevBtn = popup.querySelector('.slider-btn.prev');
        const nextBtn = popup.querySelector('.slider-btn.next');
        
        prevBtn?.replaceWith(prevBtn.cloneNode(true)); // Remove old listeners
        nextBtn?.replaceWith(nextBtn.cloneNode(true));
        
        const newPrevBtn = popup.querySelector('.slider-btn.prev');
        const newNextBtn = popup.querySelector('.slider-btn.next');
        
        newPrevBtn?.addEventListener('click', () => this.changeSlide(-1));
        newNextBtn?.addEventListener('click', () => this.changeSlide(1));
        
        // Dot click functionality
        const dots = popup.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.showSlide(index));
        });
    }
    
    // Slider functionality
    showSlide(n) {
        const popup = this.sections.projectDetails;
        const slides = popup.querySelectorAll('.slider-container img');
        const dots = popup.querySelectorAll('.dot');
        
        if (slides.length === 0) return;
        
        this.currentSlide = (n + slides.length) % slides.length;
        
        const offset = -this.currentSlide * 100;
        popup.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
        
        dots.forEach(dot => dot.classList.remove('active'));
        dots[this.currentSlide]?.classList.add('active');
    }
    
    changeSlide(direction) {
        const newSlide = (this.currentSlide || 0) + direction;
        this.showSlide(newSlide);
    }
    
    // Setup skill interactions
    setupSkillInteractions() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            card.addEventListener('click', () => {
                const skill = card.getAttribute('data-skill');
                const skillName = card.querySelector('h3')?.textContent;
                
                if (skill && window.ProjectsData) {
                    this.showSkillProjects(skill, skillName);
                }
            });
        });
    }
    
    // Reset projects section to show all projects with filters reset
    resetProjectsSection() {
        // Use the content generator to regenerate all projects
        if (window.portfolioApp && window.portfolioApp.contentGenerator) {
            window.portfolioApp.contentGenerator.generateProjectsSection();
            
            // Re-setup all project interactions after regeneration
            this.setupProjectCardClicks();
            this.setupProjectFiltering();
            
            // Reset filter buttons to "All" active
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            const allButton = document.querySelector('.filter-btn[data-filter="all"]');
            allButton?.classList.add('active');
        }
    }
    
    // Show projects related to a skill
    showSkillProjects(skillId, skillName) {
        const relatedProjects = window.ProjectsData.getProjectsBySkill(skillId);
        
        // Clear and populate projects grid
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = '';
        
        relatedProjects.forEach(project => {
            const projectCard = this.createProjectCardHTML(project);
            projectsGrid.innerHTML += projectCard;
        });
        
        // Re-setup project card clicks
        this.setupProjectCardClicks();
        
        // Close skills and open projects
        this.closeSection('skills');
        this.openSection('projects');
    }
    
    // Create project card HTML
    createProjectCardHTML(project) {
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
    }
}

// =============================================================================
// KEYBOARD NAVIGATION
// =============================================================================

class KeyboardNavigation {
    constructor(sectionController) {
        this.sectionController = sectionController;
        this.setupKeyboardListeners();
    }
    
    setupKeyboardListeners() {
        document.addEventListener('keydown', (e) => {
            // ESC to close any open section
            if (e.key === 'Escape') {
                Object.keys(this.sectionController.sections).forEach(sectionName => {
                    if (this.sectionController.sections[sectionName].classList.contains('visible')) {
                        this.sectionController.closeSection(sectionName);
                    }
                });
            }
            
            // Arrow keys for image slider when project details is open
            if (this.sectionController.sections.projectDetails.classList.contains('visible')) {
                if (e.key === 'ArrowLeft') this.sectionController.changeSlide(-1);
                if (e.key === 'ArrowRight') this.sectionController.changeSlide(1);
            }
        });
    }
}

// =============================================================================
// INITIALIZATION
// =============================================================================

function initializeSections() {
    const sectionController = new SectionController();
    const keyboardNavigation = new KeyboardNavigation(sectionController);
    
    return { sectionController, keyboardNavigation };
}

// Export for use in other files
window.Sections = {
    SectionController,
    KeyboardNavigation,
    initializeSections
}; 