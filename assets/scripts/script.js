// Seleccionar elementos necesarios
const backToTopButton = document.getElementById('backToTop');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link');

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Función para volver al inicio
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mejoras de accesibilidad para el menú de navegación
document.addEventListener('DOMContentLoaded', function() {
    navLinks.forEach(item => {
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// Función para cerrar el menú (que puedes llamar desde HTML con onclick="closeNavbar()")
function closeNavbar() {
    if (window.innerWidth < 992) {
        // Cierra el menú hamburguesa usando la API de Bootstrap
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
        
        // Cambia el estado del botón toggler
        navbarToggler.classList.add('collapsed');
        navbarToggler.setAttribute('aria-expanded', 'false');
    }
}

// Cerrar menú hamburguesa al hacer clic en un enlace (solo en móviles)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeNavbar();
    });
});

// Cerrar menú hamburguesa al hacer clic fuera (solo en móviles)
document.addEventListener('click', function(event) {
    if (window.innerWidth < 992) {
        const isClickInsideMenu = navbarCollapse.contains(event.target);
        const isClickOnToggler = navbarToggler.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggler && navbarCollapse.classList.contains('show')) {
            closeNavbar();
        }
    }
});

// También cerrar el menú al redimensionar la ventana (si cambia de móvil a escritorio)
window.addEventListener('resize', function() {
    if (window.innerWidth >= 992) {
        // En pantallas grandes, asegurarse de que el menú esté expandido
        navbarToggler.classList.remove('collapsed');
        navbarToggler.setAttribute('aria-expanded', 'true');
        navbarCollapse.classList.add('show');
    } else if (navbarCollapse.classList.contains('show')) {
        // En pantallas pequeñas, si el menú estaba abierto, mantenerlo cerrado inicialmente
        closeNavbar();
    }
});
