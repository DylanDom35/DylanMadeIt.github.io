// Toggle the Contact Form visibility
function toggleContact() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.classList.toggle('active'); // Add or remove the 'active' class
        contactForm.style.display = contactForm.classList.contains('active') ? 'block' : 'none';
    } else {
        console.error("Contact form element not found.");
    }
}

// Simulate form submission
function submitForm() {
    alert('Your message has been sent! (This is a mock implementation).');
    toggleContact(); // Hide the form after submission
}

// Trigger CV download
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv/Dylan_Dominguez_CV.pdf'; // Path to your CV file
    link.download = 'Dylan_Dominguez_CV.pdf'; // File name for download
    link.click();
}

// Ensure loader hides after WebGL initialization
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        if (loader) loader.style.display = 'none'; // Hide the loader
    }, 1000); // Adjust timeout based on WebGL loading
});
