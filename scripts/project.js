// Projects data array with all portfolio projects
const projects = [{
    id: 1,
    name: "Smart UML Degree Pathway",
    description: "Full-stack academic planning platform that parses UMass Lowell transcripts via a Python PDF pipeline, maps degree progress, and delivers AI-powered course recommendations and schedule generation.",
    tech: ["Python", "Next.js", "PostgreSQL", "Flask", "NLP", "REST APIs"],
    github: null, 
    demo: "https://smart-degree-pathway.vercel.app",
    icon: "./assets/SMART_UML.png", 
    featured: true,
    },
    {
        id: 2,
        name: "Portfolio Website",
        description: "Personal portfolio built with vanilla HTML, CSS, and JavaScript. Features 3D project carousel, responsive design, and custom animations.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/Jayam743/Portfolio-Website",
        demo: "https://jayam743.github.io/Portfolio-Website/",
        icon: "./assets/Portfolio.png",
        featured: true,
    },
    {
        id: 3,
        name: "Luxeciaga Website",
        description: "Responsive business website built during internship at Luxeciaga with dynamic content management.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        github: null,
        demo: "https://luxeciaga.com/",
        icon: "./assets/Luxeciaga.png",
        featured: true,
    },
    {
        id: 4,
        name: "PyPhone",
        description: "Python-based application with 6 apps: Camera, Snake, Pong, Gallery, Browser, and bubble sort Visualizer. Built during SOARCS with a group.",
        tech: ["Python", "CustomTkinter", "GUI", "Web Camera", "Pygame"],
        github: "https://github.com/Jayam743/SoarCS",
        demo: "https://youtu.be/w59tqD9euUc?si=cPcVZcf_Te2i2tg7",
        icon: "./assets/Pyphone.png",
        featured: true
    },
    {
        id: 5,
        name: "Snake Game",
        description: "Classic snake game recreation with modern features and smooth gameplay.",
        tech: ["Python", "Pygame"],
        github: "https://github.com/Jayam743/Simple-Python-Projects",
        demo: null,
        icon: "./assets/Snake.png",
        featured: true
    },
    
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