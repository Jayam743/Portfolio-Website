// Projects data array with all portfolio projects
const projects = [{
        id: 1,
        name: "Portfolio Website",
        description: "Personal portfolio built with vanilla HTML, CSS, and JavaScript. Features 3D project carousel, responsive design, and custom animations.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/SmokyOP743/Portfolio-Website",
        demo: null, // Set to your live site URL when deployed, or keep null
        icon: "assets/Portfolio.png",
        featured: true,
    },
    {
        id: 2,
        name: "PyPhone",
        description: "Python-based application with 6 apps: Camera, Snake, Pong, Gallery, Browser, and bubble sort Visualizer. Built during SOARCS with a group.",
        tech: ["Python", "CustomTkinter"],
        github: "https://github.com/SmokyOP743/SoarCS",
        demo: "https://youtu.be/w59tqD9euUc?si=cPcVZcf_Te2i2tg7",
        icon: "assets/PyPhone.png",
        featured: true
    },
    {
        id: 3,
        name: "Snake Game",
        description: "Classic snake game recreation with modern features and smooth gameplay.",
        tech: ["Python", "Pygame"],
        github: "https://github.com/SmokyOP743/Simple-Python-Projects",
        demo: null,
        icon: "assets/Snake.png",
        featured: true
    },
    {
        id: 4,
        name: "Luxeciaga Website",
        description: "Responsive business website built during internship at Luxeciaga with dynamic content management.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        github: null, // Keep null if you can't share code
        demo: "https://luxeciaga.com/",
        icon: "assets/Luxeciaga.png",
        featured: true,
    }
    // Add more projects here as you build them!
    // Just copy the structure above and change the values
];

// Get only featured projects for 3D carousel
function getFeaturedProjects() {
    return projects.filter(p => p.featured);
}

// Get all projects for grid display
function getAllProjects() {
    return projects;
}

// Export functions for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, getFeaturedProjects, getAllProjects };
}