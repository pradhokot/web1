document.write(`
<nav class="navbar navbar-expand-lg" style="transition: .36s;">
   <div class="container">
      <a href="index.html" class="navbar-brand py-0">
         <img src="assets/img/logo.svg" class="img-fluid" alt="">
      </a>
      <style>
         #navtop .navbar-brand img {
            width: 40px;
            transition: .36s;
         }

         @media (min-width: 992px) {
            #navtop .navbar-brand img {
               width: 80px;
            }
         }
      </style>
      <div class="navbar-btn-group d-flex align-content-center ml-auto order-lg-3 ml-lg-0">
         <a href="#" class="btn" id="navUser"><i class="bi bi-person-circle"></i></a>
         <a href="#" class="position-relative text-decoration-none">
            <button class="btn" id="navCart"><i class="bi bi-cart"></i></button>
            <span class="badge bg-danger text-light rounded-pill" style="height: 18px; min-width: 18px; position: absolute; top: 0; left: calc(100% - .75rem); transform: translateX(-50%);">99+</span>
         </a>
      </div>
      </style>
      <button class="navbar-toggler border-0" data-toggle="collapse" data-target="#navcol" style="width: 56px; height: 40px; margin-right: -.75rem;">
         <i class="bi bi-three-dots-vertical"></i>
         <i class="bi bi-three-dots"></i>
      </button>
      <style>
         @media (max-width: 991.98px) {
            #navtop .navbar-btn-group .btn,
            #navtop .navbar-toggler {
               font-size: 1.25rem;
            }
         }
         @media (min-width: 992px) {
            #navtop .navbar .btn {
               font-size: 1.25rem;
            }
         }
      </style>
      <div class="collapse navbar-collapse" id="navcol">
         <form action="" class="d-flex flex-nowrap mt-2 mb-3 my-lg-0 order-lg-2">
            <input type="search" class="form-control px-0 bg-transparent border-0" placeholder="Search" onmouseover="this.select()"
               style="font-size: inherit; color: inherit;">
            <button class="btn"><i class="bi bi-search"></i></button>
         </form>
         <style>
            #navtop .navbar-collapse form {
               border-bottom: solid 1px #b4b4b4;
            }

            #navtop .navbar-collapse form .btn {
               min-width: 42px;
            }

            #navtop .navbar-collapse form .btn i {
               margin-right: -.75rem;
            }

            @media (min-width: 992px) {
               #navtop .navbar-collapse form {
                  border-bottom: solid 1px transparent;
                  position: relative;
               }

               #navtop .navbar-collapse form::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: .75rem;
                  height: 1px;
                  background-color: transparent;
                  transition: .36s;
               }

               #navtop .navbar-collapse form:hover::after {
                  background-color: #b4b4b4;
               }

               #navtop .navbar-collapse form .btn {
                  min-width: auto;
               }

               #navtop .navbar-collapse form .btn i {
                  margin-right: 0;
               }

               #navtop .navbar-collapse .form-control {
                  max-width: 0;
                  overflow: hidden;
                  transition: .36s;
               }

               #navtop .navbar-collapse form:hover .form-control {
                  max-width: 162px;
               }
            }
         </style>
         <ul class="navbar-nav text-uppercase order-lg-1 ml-auto mr-lg-4 fw-medium">
            <li class="nav-item"><a href="coffee.html" class="nav-link" id="navCoffee">coffee</a></li>
            <li class="nav-item"><a href="#" class="nav-link" id="navMachines">machines</a></li>
            <li class="nav-item"><a href="#" class="nav-link" id="navExplore">explore</a></li>
            <li class="nav-item"><a href="#" class="nav-link" id="navPartnership">partnership</a></li>
            <li class="nav-item"><a href="#" class="nav-link" id="navCafe">cafe</a></li>
            <li class="nav-item"><a href="#" class="nav-link" id="navGallery">gallery</a></li>
         </ul>
      </div>
      <style>
         @media (min-width: 992px) {

            #navtop .navbar-collapse {
               font-size: .875em;
            }
         }
      </style>
   </div>
</nav>
<style>
   #navtop .navbar * {
      line-height: 1;
      border-radius: 0;
      color: inherit;
   }

   #navtop .navbar {
      padding-top: 15px;
      padding-bottom: 15px;
   }

   @media (min-width: 992px) {
      #navtop .navbar {
         padding-top: 1.75rem;
         padding-bottom: 1.75rem;
      }
   }

   /* navbar light (default) */
   #navtop .navbar {
      background-color: rgba(255,255,255,1);
   }

   #navtop .navbar .nav-link,
   #navtop .navbar .btn,
   #navtop .navbar .form-select {
      opacity: .75;
      transition: .36s;
   }

   #navtop .navbar .nav-link:hover,
   #navtop .navbar .btn:hover,
   #navtop .navbar .form-select:hover {
      opacity: 1;
   }

   #navtop .navbar .nav-link.active,
   #navtop .navbar .btn.active,
   #navtop .navbar .form-select.active {
      opacity: 1;
      font-family: 'GoogleBold';
   }

   /* navbar dark */
   #navtop .navbar.navbar-dark * {
      color: white;
   }

   #navtop .navbar.navbar-dark {
      background-color: transparent;
   }

   /* navbar shrink */
   #navtop.shrink .navbar,
   #navtop.shrink .navbar.navbar-dark {
      background-color: rgba(255,255,255, 1);
   }
   
   #navtop.shrink .navbar *,
   #navtop.shrink .navbar.navbar-dark * {
      color: #323232;
   }

   @media (min-width: 992px) {
      #navtop.shrink .navbar {
         padding-top: 15px;
         padding-bottom: 15px;
      }

      #navtop.shrink .navbar-brand img {
         width: 50px;
      }
   }

   /* navbar open mobile */
   @media (max-width: 991.98px) {
      #navtop.nav-open .navbar,
      #navtop.shrink.nav-open .navbar,
      #navtop.shrink.nav-open .navbar.navbar-dark {
         background-color: rgba(255,255,255, 1);
      }
      
      #navtop.nav-open .navbar *,
      #navtop.nav-open .navbar.navbar-dark *,
      #navtop.shrink.nav-open .navbar *,
      #navtop.shrink.nav-open .navbar.navbar-dark * {
         color: #323232;
      }

      #navtop .navbar-toggler .bi-three-dots {display: none;}
      #navtop .navbar-toggler .bi-three-dots-vertical {display: inline;}

      #navtop.nav-open .navbar-toggler .bi-three-dots,
      #navtop.shrink.nav-open .navbar-toggler .bi-three-dots {display: inline;}
      #navtop.nav-open .navbar-toggler .bi-three-dots-vertical,
      #navtop.shrink.nav-open .navbar-toggler .bi-three-dots-vertical {display: none;}
   }
</style>
`)