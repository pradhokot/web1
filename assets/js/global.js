// navbar shrink
$(window).scroll(function () {
   if ($(window).scrollTop() >= 1) {
      $('#navtop').addClass('shrink');
   } else {
      $('#navtop').removeClass('shrink');
   }
});

// notifikasi hide & show when scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos >= currentScrollPos) {
      $('#notifikasi').collapse('show');
   } else {
      $('#notifikasi').collapse('hide');
   }
   prevScrollpos = currentScrollPos;
}

// navbar open on mobile
$('#navcol').on('show.bs.collapse', function () {
   $('#navtop').addClass('nav-open');
});
$('#navcol').on('hide.bs.collapse', function () {
   $('#navtop').removeClass('nav-open');
});

// padding top wrapper
// $('.wrapper').css({ 'padding-top': ($('#navtop').height()) });

// fungsi carousel product (sliderProduct)
$('.carousel-product').on('slide.bs.carousel', function (e) {
   var $e = $(e.relatedTarget);
   var idx = $e.index();
   var itemsPerSlide = 4;
   var totalItems = $('.carousel-product .carousel-item').length;
   if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
         if (e.direction == "left") {
            $('.carousel-product .carousel-item').eq(i).appendTo('.carousel-product .carousel-inner');
         }
         else {
            $('.carousel-product .carousel-item').eq(0).appendTo('.carousel-product .carousel-inner');
         }
      }
   }
});