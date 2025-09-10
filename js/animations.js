// =============================================================================
// ANIMATION EFFECTS
// =============================================================================
// This file contains all the visual effects for the portfolio:
// - Matrix code rain effect
// - Circuit board connections with glow & color shift
// - Text color updates

// =============================================================================
// MATRIX CODE RAIN EFFECT
// =============================================================================

class MatrixRain {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.chars = "0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ @#$%^&*()_+-=[]{}|;:<>?,./";
        this.charArray = this.chars.split("");
        this.message = "WELCOME TO MY PAGE";
        this.messageArray = this.message.split("");
        this.messageIndex = 0;
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        window.addEventListener("resize", () => this.resizeCanvas());
        
        // Check if device is mobile or has limited resources
        this.isMobile = window.innerWidth <= 768 || 
                       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Adjust performance settings for mobile
        if (this.isMobile) {
            this.performanceMode = true;
        }
        
        this.startAnimation();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.fontSize = Math.max(12, Math.floor(this.canvas.width / 100));
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(1);
    }
    
    draw() {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Slight flickering effect on text
        let flickerIntensity = Math.random() * 0.5 + 0.5;
        this.ctx.fillStyle = "white";
        this.ctx.font = `${this.fontSize}px monospace`;

        for (let i = 0; i < this.drops.length; i++) {
            const text = this.messageArray[this.messageIndex];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;

            this.ctx.fillText(text, x, y);

            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;

            this.messageIndex = (this.messageIndex + 1) % this.messageArray.length;
        }
    }
    
    startAnimation() {
        // Adjust FPS based on device capabilities
        const fps = this.performanceMode ? 10 : 15; // Further reduce FPS on mobile
        const interval = 1000 / fps;
        
        setInterval(() => this.draw(), interval);
    }
}

// =============================================================================
// CIRCUIT BOARD CONNECTIONS
// =============================================================================

class CircuitBoard {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.paths = [];
        this.hue = 0;
        this.isIntroPhase = true;
        
        // Check device capabilities
        this.isMobile = window.innerWidth <= 768 || 
                       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Increase complexity after intro (but keep it simpler on mobile)
        setTimeout(() => {
            this.isIntroPhase = false;
            this.initPaths();
        }, 6000);
        
        this.init();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.initPaths();
        this.animate();
        
        window.addEventListener("resize", () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.initPaths();
        });
    }
    
    initPaths() {
        this.paths = [];
        // Adjust path count based on device and phase
        let pathCount;
        if (this.isMobile) {
            pathCount = this.isIntroPhase ? 2 : 4; // Much fewer paths on mobile
        } else {
            pathCount = this.isIntroPhase ? 5 : 10;
        }
        
        for (let i = 0; i < pathCount; i++) {
            this.paths.push(new Path(
                Math.random() * this.canvas.width, 
                Math.random() * this.canvas.height
            ));
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Slowly shift colors from red to blue
        this.hue += 0.5;
        if (this.hue > 360) this.hue = 0;

        for (let path of this.paths) {
            path.update();
            path.draw(this.ctx, this.hue);
        }

        requestAnimationFrame(() => this.animate());
    }
    
    getHue() {
        return this.hue;
    }
}

class Path {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.history = [{ x, y }];
        this.direction = Math.floor(Math.random() * 4);
    }

    update() {
        let step = 10;
        switch (this.direction) {
            case 0: this.x += step; break;  // Right
            case 1: this.x -= step; break;  // Left
            case 2: this.y += step; break;  // Down
            case 3: this.y -= step; break;  // Up
        }
        this.history.push({ x: this.x, y: this.y });

        if (Math.random() > 0.9) {
            this.direction = Math.floor(Math.random() * 4);
        }
    }

    draw(ctx, hue) {
        ctx.beginPath();
        
        // Dynamic color shift effect
        let dynamicColor = `hsl(${hue}, 100%, 60%)`;
        ctx.strokeStyle = dynamicColor;

        // Neon glow effect
        ctx.lineWidth = 1;
        ctx.shadowBlur = 10;
        ctx.shadowColor = dynamicColor; 

        for (let i = 0; i < this.history.length - 1; i++) {
            ctx.moveTo(this.history[i].x, this.history[i].y);
            ctx.lineTo(this.history[i + 1].x, this.history[i + 1].y);
        }
        ctx.stroke();
    }
}

// =============================================================================
// TEXT COLOR UPDATE BASED ON CIRCUIT ANIMATION
// =============================================================================

class TextColorUpdater {
    constructor(circuitBoard) {
        this.circuitBoard = circuitBoard;
        this.nameElement = document.querySelector(".name-reveal");
        this.isRunning = false;
        // Don't start immediately - wait for intro to finish
        setTimeout(() => this.startUpdating(), 5000);
    }
    
    updateTextColor() {
        if (!this.nameElement || !this.isRunning) return;
        
        // Get the current hue of the circuit
        let currentHue = this.circuitBoard.getHue() % 360;

        // Choose a contrasting color
        if (currentHue > 180) {
            this.nameElement.style.color = "#FF0015FF"; // Teal for cool hues
            this.nameElement.style.textShadow = "0px 0px 15px #00ffcc";
        } else {
            this.nameElement.style.color = "#ff007f"; // Magenta for warm hues
            this.nameElement.style.textShadow = "0px 0px 15px #ff007f";
        }
    }
    
    startUpdating() {
        this.isRunning = true;
        // Reduce frequency for better performance
        setInterval(() => this.updateTextColor(), 750);
    }
}

// =============================================================================
// INTRO SEQUENCE ANIMATION
// =============================================================================

class IntroSequence {
    constructor() {
        this.introSequence = document.querySelector('.intro-sequence');
        this.lineAnimation = document.querySelector('.line-animation');
        this.nameReveal = document.querySelector('.name-reveal');
        this.profileImage = document.querySelector('.profile-image img');
    }
    
    start() {
        // Check if mobile for faster intro
        const isMobile = window.innerWidth <= 768;
        const delays = isMobile ? { initial: 1000, expand: 800, fadeOut: 300 } : { initial: 2000, expand: 1500, fadeOut: 500 };
        
        // Preload the image first to avoid blocking
        this.preloadImage(() => {
            setTimeout(() => {
                requestAnimationFrame(() => {
                    this.lineAnimation.classList.add('animate');
                });
                
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        this.lineAnimation.classList.add('expand');
                        this.nameReveal.classList.add('visible');
                    });
                    
                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            this.lineAnimation.classList.add('fade-out');
                        });
                    }, delays.fadeOut);
                }, delays.expand);
                
            }, delays.initial);
        });
    }
    
    preloadImage(callback) {
        if (this.profileImage.complete) {
            callback();
        } else {
            this.profileImage.onload = callback;
        }
    }
    
    // Simpler animation version for DOM ready
    startSimple() {
        requestAnimationFrame(() => {
            this.lineAnimation.classList.add('animate');
            
            setTimeout(() => {
                this.nameReveal.classList.add('visible');
                this.lineAnimation.style.opacity = '0';
            }, 800);
        });
    }
}

// =============================================================================
// ANIMATION INITIALIZATION
// =============================================================================

function initializeAnimations() {
    // Initialize Matrix Rain
    const matrixRain = new MatrixRain("matrixCanvas");
    
    // Initialize Circuit Board
    const circuitBoard = new CircuitBoard("circuitCanvas");
    
    // Initialize Text Color Updater
    const textColorUpdater = new TextColorUpdater(circuitBoard);
    
    // Initialize Intro Sequence
    const introSequence = new IntroSequence();
    
    // Start intro when everything is loaded
    window.addEventListener('load', () => introSequence.start());
    
    // Fallback for DOM ready
    document.addEventListener('DOMContentLoaded', () => introSequence.startSimple());
}

// Export for use in other files
window.Animations = {
    MatrixRain,
    CircuitBoard,
    TextColorUpdater,
    IntroSequence,
    initializeAnimations
}; 