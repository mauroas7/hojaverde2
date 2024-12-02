document.addEventListener('DOMContentLoaded', function() {
    const obtenerMembresiaBtn = document.getElementById('obtenerMembresia');
    const confirmarMembresiaBtn = document.getElementById('confirmarMembresia');

    obtenerMembresiaBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la acción predeterminada del botón
    });

    confirmarMembresiaBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Previene cualquier comportamiento predeterminado

        // Información de WhatsApp
        const phone = "542617208667"; // Número sin el "+"
        const message = "¡Hola! Estoy interesado en obtener una membresía."; // Mensaje precargado
        const url = 'https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}';

        // Detectar si es móvil o escritorio
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // Redirige a WhatsApp móvil
            window.location.href = 'https://wa.me/${phone}?text=${encodeURIComponent(message)}';
        } else {
            // Redirige a WhatsApp Web
            window.location.href = url;
        }

        // Cierra el modal (si aplica)
        const membershipModal = bootstrap.Modal.getInstance(document.getElementById('membershipModal'));
        if (membershipModal) {
            membershipModal.hide();
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Chequeo de configuracion del tema oscuro 
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateIcon(currentTheme === 'dark-mode');
    }



    // Event listener para tema oscuro
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


});document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    const obtenerMembresiaBtn = document.getElementById('obtenerMembresia');
    const membershipModal = new bootstrap.Modal(document.getElementById('membershipModal'));

    // Ir hasta arriba de la pagina
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