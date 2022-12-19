document.write(`
<nav class="navbar navbar-expand-lg navbar-light">
   <div class="container">
      <a href="index.html" class="navbar-brand py-0">
         <img src="assets/img/logo.svg" class="img-fluid" alt="">
      </a>
      <style>
         .navbar-brand img {
            width: 40px;
         }

         @media (min-width: 992px) {
            .navbar-brand img {
               width: 80px;
            }
         }
      </style>
      <div class="navbar-btn-group d-flex align-content-center ml-auto order-lg-3 ml-lg-0">
         <a href="#" class="btn"><i class="bi bi-person-circle"></i></a>
         <div class="position-relative">
            <a href="#" class="btn">
               <i class="bi bi-cart"></i>
            </a>
            <span class="badge badge-danger" style="position: absolute; top: 25%; left: 75%; transform: translate(-50%, -50%); padding-right: .6em; padding-left: .6em; border-radius: 10rem;">+99</span>
         </div>
      </div>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol" style="width: 56px; height: 40px;">
         <i class="bi bi-three-dots-vertical"></i>
      </button>
      <style>
         @media (max-width: 991.98px) {
            .navbar-btn-group .btn,
            .navbar-toggler {
               font-size: 1.25rem;
            }
         }
      </style>
      <div class="collapse navbar-collapse" id="navcol">
         <form action="" class="d-flex flex-nowrap mt-2 mb-3 my-lg-0 order-lg-2">
            <input type="search" class="form-control px-0 bg-transparent border-0" placeholder="Search"
               style="font-size: inherit; color: inherit;">
            <button class="btn"><i class="bi bi-search"></i></button>
         </form>
         <style>
            .navbar-collapse form {
               border-bottom: solid 1px #b4b4b4;
            }

            .navbar-collapse form .btn {
               min-width: 42px;
            }

            .navbar-collapse form .btn i {
               margin-right: -.75rem;
            }

            @media (min-width: 992px) {
               .navbar-collapse form {
                  border-bottom: solid 1px transparent;
                  position: relative;
               }

               .navbar-collapse form::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: .75rem;
                  height: 1px;
                  background-color: transparent;
                  transition: .36s;
               }

               .navbar-collapse form:hover::after {
                  background-color: #b4b4b4;
               }

               .navbar-collapse form .btn {
                  min-width: auto;
               }

               .navbar-collapse form .btn i {
                  margin-right: 0;
               }

               .navbar-collapse .form-control {
                  max-width: 0;
                  transition: .36s;
                  overflow: hidden;
               }

               .navbar-collapse form:hover .form-control {
                  max-width: 162px;
               }
            }
         </style>
         <ul class="navbar-nav text-uppercase order-lg-1 ml-auto mr-lg-4 fw-bold">
            <li class="nav-item"><a href="#" class="nav-link">coffee</a></li>
            <li class="nav-item"><a href="#" class="nav-link">machines</a></li>
            <li class="nav-item"><a href="#" class="nav-link">explore</a></li>
            <li class="nav-item"><a href="#" class="nav-link">partnership</a></li>
            <li class="nav-item"><a href="#" class="nav-link">cafe</a></li>
            <li class="nav-item"><a href="#" class="nav-link">gallery</a></li>
         </ul>
      </div>
      <style>
         @media (min-width: 992px) {

            .navbar-collapse {
               font-size: .875em;
            }
         }
      </style>
   </div>
</nav>
<style>
   .navbar * {
      line-height: 1;
      border-radius: 0;
   }

   .navbar {
      padding-top: 15px;
      padding-bottom: 15px;
   }

   @media (min-width: 992px) {
      .navbar {
         padding-top: 1.75rem;
         padding-bottom: 1.75rem;
      }
   }
</style>
`)