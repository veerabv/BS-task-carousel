document.addEventListener("DOMContentLoaded", function() {
    $('.slider').slick({
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
      nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1
    });
  });