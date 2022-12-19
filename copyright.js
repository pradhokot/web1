document.write(`
<footer id="copyright" class="small text-center bg-light">
   <div class="border-top">
      <div class="container py-4">
         <nav class="nav justify-content-center text-uppercase mb-4">
            <a href="#" class="nav-link active">home</a>
            <a href="#" class="nav-link">beans</a>
            <a href="#" class="nav-link">ground</a>
            <a href="#" class="nav-link">drip</a>
            <a href="#" class="nav-link">capsules</a>
            <a href="#" class="nav-link">membership</a>
            <a href="#" class="nav-link">contact</a>
            <a href="#" class="nav-link">brochure</a>
            <a href="#" class="nav-link">news</a>
         </nav>
         <nav class="nav justify-content-center" style="font-size: 1.75em;">
            <a href="#" target="_blank" class="nav-link px-lg-3"><i class="bi bi-twitter"></i></a>
            <a href="#" target="_blank" class="nav-link px-lg-3"><i class="bi bi-facebook"></i></a>
            <a href="#" target="_blank" class="nav-link px-lg-3"><i class="bi bi-instagram"></i></a>
            <a href="#" target="_blank" class="nav-link px-lg-3"><i class="bi bi-youtube"></i></a>
         </nav>
      </div>
   </div>
   <div class="border-top">
      <div class="container py-3">
         <div class="row justify-content-xl-between align-items-xl-center">
            <div class="col-xl-auto mb-3 d-lg-flex align-items-center justify-content-center mb-xl-0">
               <select name="" id=""
                  class="form-control form-control-sm rounded-0 w-auto mx-auto mb-3 mb-lg-0 ml-lg-0 mr-lg-3">
                  <option value="1">Language</option>
                  <option value="2">Bahasa</option>
                  <option value="3">Melayu</option>
                  <option value="4">Jawa</option>
               </select>
               <nav class="nav justify-content-center text-capitalize">
                  <a href="#" target="_blank" class="nav-link px-lg-2">privacy policy</a>
                  <a href="#" target="_blank" class="nav-link px-lg-2">terms & conditions</a>
                  <a href="#" target="_blank" class="nav-link px-lg-2">information on data protection</a>
                  <a href="#" target="_blank" class="nav-link px-lg-2">help?</a>
               </nav>
            </div>
            <div class="col-xl-auto">
               <span style="opacity: .75;">Copyright &copy; 2022 INDRACO. All rights reserved.</span>
            </div>
         </div>
      </div>
   </div>
</footer>
<style>
   #copyright * {
      color: inherit;
      font-size: inherit;
      line-height: 1;
   }

   #copyright a {
      opacity: .875;
   }

   #copyright a:hover,
   #copyright a.active {
      opacity: 1;
   }

   #copyright a.active {
      font-family: 'GoogleBold';
   }

   #copyright .border-top:last-of-type .nav .nav-link {
      position: relative;
   }

   #copyright .border-top:last-of-type .nav .nav-link::after {
      content: '|';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      opacity: .5;
      visibility: visible;
   }

   #copyright .border-top:last-of-type .nav .nav-link:first-of-type:after {
      opacity: 0;
      visibility: hidden;
   }
</style>
`)