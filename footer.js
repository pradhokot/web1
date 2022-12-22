document.write(`
<script src="assets/jquery-3.6.1/jquery-3.6.1.min.js"></script>
<script src="assets/bootstrap-4.6.2-dist/js/bootstrap.bundle.min.js"></script>
<script>
// navbar shrink
$(window).scroll(function () {
   if ($(window).scrollTop() >= 150) {
      $('#navtop').addClass('shrink');
   } else {
      $('#navtop').removeClass('shrink');
   }
});

// notifikasi hide & show when scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos >= currentScrollPos) {
      $('#notifikasi').collapse('show');
   } else {
      $('#notifikasi').collapse('hide');
  }
  prevScrollpos = currentScrollPos;
}

// navbar open on mobile
$('#navcol').on('show.bs.collapse', function() {
   $('#navtop').addClass('nav-open');
});
$('#navcol').on('hide.bs.collapse', function() {
   $('#navtop').removeClass('nav-open');
});
</script>
`);