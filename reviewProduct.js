document.write(`
<h4 class="fw-medium mb-3 text-center text-md-left">Ratings & Reviews</h4>

<div class="row align-items-md-center">

   <div class="col-md-4 text-center angka-review">
      <h1 class="fw-bold display-1" style="line-height: 1;">0.0</h1>
      <p class="mb-md-0">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star"></i>
         <i class="bi bi-star"></i>
         <br>
         (3 x Reviews)
      </p>
   </div>
   <style>
   @media (min-width: 992px) {
      .angka-review {
         border-right: 1px solid rgba(0,0,0,.1); 
      }
   }
   </style>

   <div class="col-md-8">
      <ul class="list-unstyled mb-0">
         <li class="media align-items-center">
            <div class="fw-medium" style="width: 32px; text-align: center; font-size: 1.25rem;">5</div>
            <div class="media-body">
               <div class="progress rounded-pill">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 25%" aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
         </li>
         <li class="media align-items-center">
            <div class="fw-medium" style="width: 32px; text-align: center; font-size: 1.25rem;">4</div>
            <div class="media-body">
               <div class="progress rounded-pill">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 25%" aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
         </li>
         <li class="media align-items-center">
            <div class="fw-medium" style="width: 32px; text-align: center; font-size: 1.25rem;">3</div>
            <div class="media-body">
               <div class="progress rounded-pill">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 25%" aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
         </li>
         <li class="media align-items-center">
            <div class="fw-medium" style="width: 32px; text-align: center; font-size: 1.25rem;">2</div>
            <div class="media-body">
               <div class="progress rounded-pill">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 25%" aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
         </li>
         <li class="media align-items-center">
            <div class="fw-medium" style="width: 32px; text-align: center; font-size: 1.25rem;">1</div>
            <div class="media-body">
               <div class="progress rounded-pill">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 25%" aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
         </li>
      </ul>
   </div>

   <div class="col-12">
      <hr class="border-secondary">
      <div class="table-responsive text-nowrap text-center text-md-left mb-4">
         <button class="btn btn-sm btn-secondary active">All Reviews</button>
         <button class="btn btn-sm btn-secondary"><i class="bi bi-star-fill"></i> 5</button>
         <button class="btn btn-sm btn-secondary"><i class="bi bi-star-fill"></i> 4</button>
         <button class="btn btn-sm btn-secondary"><i class="bi bi-star-fill"></i> 3</button>
         <button class="btn btn-sm btn-secondary"><i class="bi bi-star-fill"></i> 2</button>
         <button class="btn btn-sm btn-secondary"><i class="bi bi-star-fill"></i> 1</button>
      </div>
      <div>
         <ul class="list-unstyled mb-0" id="commentList">
            <li class="media">
               <img src="assets/img/user/user.jpg" class="img-thumbnail rounded-circle mr-3" width="60" alt="...">
               <div class="media-body">
                  <h5 class="fw-medium">Yoggi Dhimas P.</h5>
                  <p>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star"></i>
                     <i class="bi bi-star"></i>
                  </p>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam modi illo quos voluptas
                     accusamus nobis sapiente a, voluptatibus facere illum repudiandae magni tenetur nam, saepe atque
                     quam aliquam laborum!
                  </p>
               </div>
            </li>
            <li class="media">
               <img src="assets/img/user/user.jpg" class="img-thumbnail rounded-circle mr-3" width="60" alt="...">
               <div class="media-body">
                  <h5 class="fw-medium">Yoggi Dhimas P.</h5>
                  <p>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star"></i>
                     <i class="bi bi-star"></i>
                  </p>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam modi illo quos voluptas
                     accusamus nobis sapiente a, voluptatibus facere illum repudiandae magni tenetur nam, saepe atque
                     quam aliquam laborum!
                  </p>
               </div>
            </li>
            <li class="media">
               <img src="assets/img/user/user.jpg" class="img-thumbnail rounded-circle mr-3" width="60" alt="...">
               <div class="media-body">
                  <h5 class="fw-medium">Yoggi Dhimas P.</h5>
                  <p>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star"></i>
                     <i class="bi bi-star"></i>
                  </p>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam modi illo quos voluptas
                     accusamus nobis sapiente a, voluptatibus facere illum repudiandae magni tenetur nam, saepe atque
                     quam aliquam laborum!
                  </p>
               </div>
            </li>
         </ul>
         <style>
            #commentList li {
               padding-top: 1rem;
               border-bottom: 1px solid rgba(0, 0, 0, .1);
            }

            #commentList li:last-of-type {
               border-bottom: 1px solid transparent;
            }
         </style>
      </div>
   </div>

</div>
`);