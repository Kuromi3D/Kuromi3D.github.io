// Opcional: Ocultar el icono de WhatsApp en pantallas pequeñas
window.addEventListener('resize', function() {
  if (window.innerWidth < 768) {
      document.querySelector('.whatsapp-float').style.display = 'none';
  } else {
      document.querySelector('.whatsapp-float').style.display = 'block';
  }
});

// Opcional: Mostrar el icono de WhatsApp al hacer scroll
window.addEventListener('scroll', function() {
  var whatsappIcon = document.querySelector('.whatsapp-float');
  if (window.scrollY > 100) {
      whatsappIcon.style.display = 'block';
  } else {
      whatsappIcon.style.display = 'none';
  }
});

  document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide'); // Seleccionar todos los slides
  
    let currentIndex = 0;
    const interval = 3000; // Intervalo en milisegundos (3 segundos en este caso)
  
    let autoScrollInterval;
  
    // Función para mover el carrusel automáticamente
    function startAutoScroll() {
      autoScrollInterval = setInterval(function() {
        currentIndex = (currentIndex + 1) % slides.length; // Cambiar al siguiente slide
        updateCarousel();
      }, interval);
    }
  
    // Función para detener el movimiento automático del carrusel
    function stopAutoScroll() {
      clearInterval(autoScrollInterval);
    }
  
    // Función para actualizar el carrusel con el slide activo
    function updateCarousel() {
      slides.forEach((slide, index) => {
        if (index === currentIndex) {
          slide.classList.add('active'); // Mostrar el slide activo
        } else {
          slide.classList.remove('active'); // Ocultar los demás slides
        }
      });
    }
  
    // Event listener para el botón anterior
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1; // Cambiar al slide anterior
      updateCarousel();
      stopAutoScroll(); // Detener el movimiento automático al hacer clic manualmente
    });
  
    // Event listener para el botón siguiente
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % slides.length; // Cambiar al siguiente slide
      updateCarousel();
      stopAutoScroll(); // Detener el movimiento automático al hacer clic manualmente
    });
  
    // Agregar evento de clic a cada slide para seleccionarlo
    slides.forEach((slide, index) => {
      slide.addEventListener('click', function() {
        currentIndex = index; // Establecer el índice actual como el del slide clicado
        updateCarousel();
        stopAutoScroll(); // Detener el movimiento automático al hacer clic manualmente
      });
    });
  
    // Iniciar el movimiento automático cuando se carga la página
    startAutoScroll();
  
    // Detener el movimiento automático al pasar el cursor sobre el carrusel
    carousel.addEventListener('mouseenter', stopAutoScroll);
  
    // Reanudar el movimiento automático cuando el cursor deja el carrusel
    carousel.addEventListener('mouseleave', startAutoScroll);
  });
  