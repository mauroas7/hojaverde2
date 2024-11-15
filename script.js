document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateIcon(currentTheme === 'dark-mode');
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            updateIcon(false);
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateIcon(true);
        }
    });

    function updateIcon(isDarkMode) {
        if (isDarkMode) {
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-sun-fill');
        } else {
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-fill');
        }
    }

    // ... (rest of your existing JavaScript code)
});document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    const obtenerMembresiaBtn = document.getElementById('obtenerMembresia');
    const membershipModal = new bootstrap.Modal(document.getElementById('membershipModal'));

    // Scroll to top functionality
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Membership modal functionality
    obtenerMembresiaBtn.addEventListener('click', function(event) {
        event.preventDefault();
        membershipModal.show();
    });

    // Handle membership form submission
    document.getElementById('membership-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your form submission logic here
        console.log('Membership form submitted');
        membershipModal.hide();
    });

    // Handle order form submission
    document.getElementById('order-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your order form submission logic here
        console.log('Order form submitted');
        bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
    });
});
