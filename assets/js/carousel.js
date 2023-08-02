function carousel() {
    var carousel = document.querySelector('.carousel');
    var slides = carousel.querySelectorAll('.slide');
    var totalSlides = slides.length;
    var currentSlide = 0;
  
    // Establecer la posición inicial de las diapositivas
    slides[currentSlide].style.left = '0';
  
    setInterval(function() {
      // Animación de desplazamiento hacia la izquierda
      slides[currentSlide].style.animation = 'slide-out-left 1s';
  
      // Calcular el índice de la siguiente diapositiva
      var nextSlide = (currentSlide + 1) % totalSlides;
  
      // Establecer la posición inicial de la siguiente diapositiva
      slides[nextSlide].style.left = '100%';
  
      // Animación de desplazamiento hacia la derecha
      slides[nextSlide].style.animation = 'slide-in-right 1s';
  
      // Actualizar la posición de las diapositivas
      slides[currentSlide].style.left = '-100%';
      slides[nextSlide].style.left = '0';
  
      // Actualizar la variable currentSlide
      currentSlide = nextSlide;
    }, 1000);
  }
  
  carousel();