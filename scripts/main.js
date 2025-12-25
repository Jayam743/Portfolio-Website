// ===================================
// CONTACT FORM HANDLING
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // Contact form submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show success message
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.add('show');

            // Reset form
            this.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);

            // TODO: Later, send to backend
            // const formData = new FormData(this);
            // fetch('/api/contact', { method: 'POST', body: formData })
        });

        // ===================================
        // HERO TYPEWRITER
        // ===================================
        const target = document.getElementById("typewriter");

        if (target) {
            const words = [
                "Software Developer",
                "AI Specialist",
                "Automation Enthusiast",
                "builder"
            ];

            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

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

    }

});