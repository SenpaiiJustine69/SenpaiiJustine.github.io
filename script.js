// Get all tab links
const tabLinks = document.querySelectorAll('.tab-link');

// Add click event listener to each tab link
tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor link behavior
        
        // Get the target section to display
        const target = this.getAttribute('data-target');

        // Hide all sections
        const sections = document.querySelectorAll('.tab-content');
        sections.forEach(section => section.classList.remove('active'));

        // Show the clicked section
        const activeSection = document.getElementById(target);
        activeSection.classList.add('active');
    });
});

// By default, show the "home" section on page load
document.getElementById('home').classList.add('active');
