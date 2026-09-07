// ===================================
// PROJECT GENERATION
// ===================================

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Generate Featured Projects (3D Ring)
    generateFeaturedProjects();

    // Generate All Projects Grid
    generateAllProjects();

    // ===================================
    // CONTACT FORM HANDLING
    // ===================================

    // Get contact form element
    const contactForm = document.getElementById('contactForm');

    // Handle form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
        });
    }

    // ===================================
    // HERO TYPEWRITER
    // ===================================

    // Get typewriter target element
    const target = document.getElementById("typewriter");

    // Start typewriter effect if element exists
    if (target) {
        const words = [
            "Software Developer",
            "AI Specialist",
            "Automation Enthusiast",
            "Creative Builder"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        // Typewriter animation function
        function typeEffect() {
            const currentWord = words[wordIndex];

            charIndex += isDeleting ? -1 : 1;
            target.textContent = currentWord.slice(0, charIndex);

            let delay = isDeleting ? 60 : 95;

            // finished typing the word
            if (!isDeleting && charIndex === currentWord.length) {
                delay = 1100;
                isDeleting = true;
            }

            // finished deleting
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 350;
            }

            setTimeout(typeEffect, delay);
        }

        typeEffect();
    }

});

// ===================================
// FEATURED PROJECTS (3D RING)
// ===================================

// Generate featured projects in 3D carousel
function generateFeaturedProjects() {
    const featuredRing = document.getElementById('featuredRing');
    if (!featuredRing) return;

    const featured = getFeaturedProjects();
    const quantity = featured.length;

    // Update the quantity CSS variable
    featuredRing.style.setProperty('--quantity', quantity);

    // Clear existing content
    featuredRing.innerHTML = '';

    // Generate cards
    featured.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.setProperty('--index', index);

        const link = project.demo || project.github || '#';
        const linkText = project.demo ? 'View Demo' : (project.github ? 'View Code' : 'Coming Soon');

        // Check if icon is an image path or emoji
        const isImage = project.icon.includes('.png') || project.icon.includes('.jpg') || project.icon.includes('.jpeg');
        const iconContent = isImage ? `<img src="${project.icon}" alt="${project.name}">` : project.icon;

        card.innerHTML = `
        <a href="${link}" target="_blank" rel="noopener noreferrer">
            <div class="img">${iconContent}</div>
            <div class="title">${project.name}</div>
            <div class="meta">${project.note || linkText}</div>
        </a>
    `;

        featuredRing.appendChild(card);
    });
}

// ===================================
// ALL PROJECTS HORIZONTAL SCROLL
// ===================================

// Generate all projects in horizontal scrollable grid
function generateAllProjects() {
    const projectsScroll = document.getElementById('projectsScroll');
    if (!projectsScroll) return;

    const allProjects = getAllProjects();

    // Clear existing content
    projectsScroll.innerHTML = '';

    // Generate project cards
    allProjects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card-grid';
                const hasLinks = project.github || project.demo;

                // Check if icon is an image path or emoji
                const isImage = project.icon.includes('.png') || project.icon.includes('.jpg') || project.icon.includes('.jpeg');
                const iconContent = isImage ? `<img src="${project.icon}" alt="${project.name}">` : project.icon;
                card.innerHTML = `
        <div class="project-icon">${iconContent}</div>
        <h3>${project.name}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
        ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        ${hasLinks ? `
            <div class="project-links">
            ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>` : ''}
            ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">Demo</a>` : ''}
            </div>
            ` : '<p class="coming-soon">Coming Soon</p>'}
            ${project.note ? `<p class="project-note">${project.note}</p>` : ''}
            `;
            projectsScroll.appendChild(card);
    });

    // Add "More Coming Soon" card at the end
    const moreCard = document.createElement('div');
    moreCard.className = 'more-coming-card';
    moreCard.innerHTML = `
        <div class="icon">🚀</div>
        <h4>More Projects Coming Soon</h4>
        <p>Building awesome things... Stay tuned!</p>
    `;
    projectsScroll.appendChild(moreCard);

    // Initialize scroll arrows
    initScrollArrows();
}

// ===================================
// SCROLL ARROW FUNCTIONALITY
// ===================================

// Initialize left/right scroll arrow buttons
function initScrollArrows() {
    const projectsScroll = document.getElementById('projectsScroll');
    const leftArrow = document.getElementById('scrollLeft');
    const rightArrow = document.getElementById('scrollRight');

    if (!projectsScroll || !leftArrow || !rightArrow) return;

    // Scroll amount (width of one card + gap)
    const scrollAmount = 250;

    // Left arrow click handler
    leftArrow.addEventListener('click', () => {
        projectsScroll.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Right arrow click handler
    rightArrow.addEventListener('click', () => {
        projectsScroll.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Update arrow visibility states based on scroll position
    function updateArrows() {
        const scrollLeft = projectsScroll.scrollLeft;
        const maxScroll = projectsScroll.scrollWidth - projectsScroll.clientWidth;

        // Disable left arrow at start
        if (scrollLeft <= 0) {
            leftArrow.classList.add('disabled');
        } else {
            leftArrow.classList.remove('disabled');
        }

        // Disable right arrow at end
        if (scrollLeft >= maxScroll - 5) { // -5 for small margin of error
            rightArrow.classList.add('disabled');
        } else {
            rightArrow.classList.remove('disabled');
        }
    }

    // Initial check
    updateArrows();

    // Update on scroll
    projectsScroll.addEventListener('scroll', updateArrows);
}