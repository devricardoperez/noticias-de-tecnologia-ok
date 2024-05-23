document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });

$(document).ready(function(){
  var carousel = $(".owl-carousel");

  if (carousel.length) { // Verifica si el elemento existe
    carousel.owlCarousel({
      items: 4,
      margin: 10,
      loop: false, // desactiva el bucle
      nav: true,
      video: true,
      lazyLoad: true,
      slideBy: 3, // se desplaza de 3 en 3 videos
      responsive:{
        0:{
          items:1,
          slideBy: 1
        },
        600:{
          items:2,
          slideBy: 2
        },
        1000: {
          items: 3,
          slideBy: 3
        }
      }
    });

    // Pausar todos los videos cuando uno comienza a reproducirse
    carousel.find('video').on('play', function() {
      var currentVideo = this;
      carousel.find('video').each(function() {
        if (this !== currentVideo) {
          this.pause();
        }
      });
    });
  }
});
