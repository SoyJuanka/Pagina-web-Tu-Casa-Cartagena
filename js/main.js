document.addEventListener("DOMContentLoaded", () => {
  // 1. Renderizado de propiedades (Lo que ya tenías)
  renderPropertyCards("featured-properties", getFeaturedProperties());

  // 2. Formulario de contacto (Lo que ya tenías)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("¡Gracias por contactarnos! Te responderemos pronto.");
      contactForm.reset();
    });
  }

  // ==========================================================================
  // CÓDIGO NUEVO: MENÚ HAMBURGUESA (Tus SVG de Figma)
  // ==========================================================================
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    // Abre y cierra el menú alternando los iconos (Rayas <-> X)
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Cierra el menú automáticamente cuando el usuario toca una sección
    document.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

// ==========================================================================
  // CÓDIGO NUEVO: BOTÓN VOLVER ARRIBA (Aparece al hacer Scroll)
  // ==========================================================================
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  if (scrollTopBtn) {
    // 1. Controla que aparezca o desaparezca con el scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    // 2. NUEVO: Fuerza el scroll hacia arriba al hacer clic
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Evita el salto brusco del enlace nativo
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Sube de forma completamente fluida
      });
    }); // <-- Aquí cierra el addEventListener del clic
  } // <-- Aquí cierra el "if (scrollTopBtn)"

}); // <-- ¡ESTE ES EL IMPORTANTE! Aquí cierra el DOMContentLoaded del inicio del archivo