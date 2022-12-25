document.write(`
<div id="homeBanner" class="carousel slide carousel-fade bg-dark overflow-hidden" data-ride="carousel"
   data-pause="false">
   <div class="carousel-inner">
      <div class="carousel-item active">
         <div class="carousel-caption text-dark">
            <div class="container">
               <h5>Let it snow, let it snow, let it snow!</h5>
               <h1 class="fw-medium">25% OFF.</h1>
               <p class="mb-3">*All Products.</p>
               <a href="#" class="btn btn-primary">SHOP NOW <i class="bi bi-chevron-right"></i></a>
            </div>
         </div>
      </div>
      <div class="carousel-item">
         <div class="carousel-caption text-dark">
            <div class="container">
               <h5>Five distinct blends, encapsulated.</h5>
               <h1 class="fw-medium">GOURMET Blend.</h1>
               <p class="mb-3"></p>
               <a href="#" class="btn btn-primary">SHOP NOW <i class="bi bi-chevron-right"></i></a>
            </div>
         </div>
      </div>
      <div class="carousel-item">
         <div class="carousel-caption">
            <div class="container">
               <h5>Intense and bold coffee beans.</h5>
               <h1 class="fw-medium">OMBRE Blend.</h1>
               <p class="mb-3"></p>
               <a href="#" class="btn btn-primary">SHOP NOW <i class="bi bi-chevron-right"></i></a>
            </div>
         </div>
      </div>
      <div class="carousel-item">
         <div class="carousel-caption">
            <div class="container">
               <h5>Zero caffeine, a whole lot of intensity. Now in beans.</h5>
               <h1 class="fw-medium">DECAFEIN Blend.</h1>
               <p class="mb-3"></p>
               <a href="#" class="btn btn-primary">SHOP NOW <i class="bi bi-chevron-right"></i></a>
            </div>
         </div>
      </div>
      <div class="carousel-item">
         <div class="carousel-caption">
            <div class="container">
               <h5>Hello.</h5>
               <h1 class="fw-medium">OUR LOYALTY PROGRAM IS HERE!</h1>
               <p class="mb-3"></p>
               <a href="#" class="btn btn-primary">SHOP NOW <i class="bi bi-chevron-right"></i></a>
            </div>
         </div>
      </div>
   </div>
   <div class="carousel-control" style="font-size: calc(2.5rem + 1vw);">
      <button class="carousel-control-prev" data-target="#homeBanner" data-slide="prev">
         <span class="bi bi-chevron-left"></span>
      </button>
      <button class="carousel-control-next" data-target="#homeBanner" data-slide="next">
         <span class="bi bi-chevron-right"></span>
      </button>
   </div>
   <ol class="carousel-indicators">
      <li data-target="#homeBanner" data-slide-to="0" class="active"></li>
      <li data-target="#homeBanner" data-slide-to="1"></li>
      <li data-target="#homeBanner" data-slide-to="2"></li>
      <li data-target="#homeBanner" data-slide-to="3"></li>
      <li data-target="#homeBanner" data-slide-to="4"></li>
   </ol>
</div>
<style>
   #homeBanner .carousel-item {
      /* height: 100vh; */
      position: relative;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
   }

   #homeBanner .carousel-item::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 50%;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, .35), transparent);
   }

   #homeBanner .carousel-caption {
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      padding-top: 55px 0;
      text-align: left;
      display: flex;
      align-items: center;
   }

   @media (max-width: 991.98px) {
      #homeBanner .carousel-caption {
         transform: translateY(18vh);
      }
   }

   @media (min-width: 992px) {
      #homeBanner .carousel-caption {
         padding-top: calc(136px - 1.75rem);
         padding-bottom: calc(136px - 1.75rem);
      }
   }

   #homeBanner .carousel-caption h1 {
      font-size: calc(2rem + .75vw);
      max-width: 680px;
   }

   @media (min-width: 992px) {
      #homeBanner .carousel-caption h1 {
         font-size: calc(2.5rem + 1vw);
      }
   }

   #homeBanner .carousel-control {
      display: none;
   }

   #homeBanner .carousel-control button {
      width: auto;
      /* top: 50%; */
      /* transform: translateY(-50%); */
      /* bottom: unset; */
      opacity: 0;
   }

   #homeBanner .carousel-control button:hover {
      opacity: 1;
   }

   @media (min-width: 1400px) {
      #homeBanner .carousel-control {
         display: block;
      }

      #homeBanner .carousel-control button {
         width: calc(50% - 555px);
      }
   }

   #homeBanner .carousel-indicators {
      left: unset;
      bottom: unset;
      top: 50%;
      left: calc(100% - 15px);
      right: unset;
      transform: translateY(-50%) translateX(-50%);
      margin: auto;
      flex-direction: column;
      width: auto;
   }

   #homeBanner .carousel-indicators li {
      width: 10px;
      height: 10px;
      margin: 0;
      border: solid 10px transparent;
      border-radius: 100%;
   }

   @media (min-width: 576px) {
      #homeBanner .carousel-indicators {
         left: calc(50% + 255px);
      }
   }

   @media (min-width: 768px) {
      #homeBanner .carousel-indicators {
         left: calc(50% + 345px);
      }
   }

   @media (min-width: 992px) {
      #homeBanner .carousel-indicators {
         left: calc(50% + 465px);
      }
   }

   @media (min-width: 1200px) {
      #homeBanner .carousel-indicators {
         left: calc(50% + 555px);
      }
   }

   /* update image banner */
   #homeBanner .carousel-item:nth-last-child(1) {
      background-image: url(assets/img/landing/banner5-mobile.jpg);
   }

   #homeBanner .carousel-item:nth-last-child(2) {
      background-image: url(assets/img/landing/banner4-mobile.jpg);
   }

   #homeBanner .carousel-item:nth-last-child(3) {
      background-image: url(assets/img/landing/banner3-mobile.jpg);
   }

   #homeBanner .carousel-item:nth-last-child(4) {
      background-image: url(assets/img/landing/banner2-mobile.jpg);
   }

   #homeBanner .carousel-item:nth-last-child(5) {
      background-image: url(assets/img/landing/banner1-mobile.jpg);
   }

   @media (min-width: 992px) {
      #homeBanner .carousel-item:nth-last-child(1) {
         background-image: url(assets/img/landing/banner5-desktop.jpg);
      }

      #homeBanner .carousel-item:nth-last-child(2) {
         background-image: url(assets/img/landing/banner4-desktop.jpg);
      }

      #homeBanner .carousel-item:nth-last-child(3) {
         background-image: url(assets/img/landing/banner3-desktop.jpg);
      }

      #homeBanner .carousel-item:nth-last-child(4) {
         background-image: url(assets/img/landing/banner2-desktop.jpg);
      }

      #homeBanner .carousel-item:nth-last-child(5) {
         background-image: url(assets/img/landing/banner1-desktop.jpg);
      }
   }
</style>
`);