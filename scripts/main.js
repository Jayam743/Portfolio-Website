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
  }

});