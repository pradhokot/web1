document.write(`
<script src="assets/jquery-3.6.1/jquery-3.6.1.min.js"></script>
<script src="assets/bootstrap-4.6.2-dist/js/bootstrap.bundle.min.js"></script>
<script>
// navbar shrink
$(window).scroll(function () {
   if ($(window).scrollTop() >= 150) {
      $('#navtop').addClass('shrink');
      $('#notifikasi').collapse('hide');
   } else {
      $('#navtop').removeClass('shrink');
      $('#notifikasi').collapse('show');
   }
});

// navbar open on mobile
$('#navcol').on('show.bs.collapse', function() {
   $('#navtop').addClass('nav-open');
});
$('#navcol').on('hide.bs.collapse', function() {
   $('#navtop').removeClass('nav-open');
});

// select input
$('input, textarea, .navbar form').hover(function() {
   $('input, textarea').select();
});
</script>
`);