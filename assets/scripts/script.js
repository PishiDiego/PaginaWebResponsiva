// Seleccionar el botón
const backToTopButton = document.getElementById('backToTop');

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
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    


// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos específicos de TU página
    const navbar = document.querySelector('header');
    const menu = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');
    
    // Verificar que los elementos existen
    if (!navbar || !menu || !hamburger) {
        console.error('No se encontraron los elementos del menú');
        return;
    }
    
    // Variable para controlar el estado del scroll
    let lastScrollTop = 0;
    
    // Función para manejar el scroll
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Ocultar o mostrar la barra de navegación según la dirección del scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll hacia abajo - ocultar navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll hacia arriba - mostrar navbar
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Cerrar el menú si está abierto durante el scroll
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
    
    // Función para toggle del menú hamburguesa
    function toggleMenu() {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
    
    // Función para cerrar el menú al hacer clic fuera
    function closeMenuOnClickOutside(event) {
        // Si el menú está activo y el clic NO fue en el menú ni en el botón hamburguesa
        if (menu.classList.contains('active') && 
            !menu.contains(event.target) && 
            !hamburger.contains(event.target) &&
            event.target.className !== 'bar') {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
    
    // Añadir event listeners
    window.addEventListener('scroll', handleScroll);
    hamburger.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenuOnClickOutside);
    
    // Cerrar menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('.nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Mejorar la experiencia táctil en dispositivos móviles
    document.addEventListener('touchstart', function() {}, {passive: true});
});
