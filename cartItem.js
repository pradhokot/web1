document.write(`
<div class="cart-item">
   <div class="row">
      <div class="col col-12 col-xl-auto">
         <div class="position-relative">
            <button class="close" data-toggle="modal" data-target="#hapusCart"><span aria-hidden="true">&times;</span></button>
         </div>
      </div>
      <div class="col col-5 col-sm-3 col-md-2 col-lg-3 col-xl-2">
         <img src="assets/img/product/produk1.png" class="img-fluid w-100" alt="">
      </div>
      <div class="col col-7 col-sm-9 col-md-10 col-lg-9 col-xl">
         <div class="row justify-content-md-between">
            <div class="col col-12 col-md-5">
               <p class="mb-2">
                  <span class="fw-medium">sumatra mandheling coffee capsules</span> <small>200g</small>
               </p>
            </div>
            <div class="col col-12 col-md-auto order-md-3">
               <div class="product-price mb-2 mb-md-0">
                  <div class="reguler-price d-none"><span>Rp</span> <span>200.000,-</span></div>
                  <div class="promo-price d-block">
                     <div class="discount-price m-0"><span>Rp</span> <span>125.000,-</span></div>
                     <div class="normal-price m-0 small"><del>Rp 200.000,-</del></div>
                  </div>
               </div>
            </div>
            <div class="col col-12 col-md-auto order-md-2">
               <div class="input-group align-items-center">
                  <div class="input-group-prepend">
                     <button class="btn p-0" style="font-size: 1.25rem;">
                        <i class="bi bi-dash-circle"></i>
                     </button>
                  </div>
                  <input class="form-control text-center p-0 h-auto border-left-0 border-top-0 border-right-0 bg-transparent" value="1"
                     min="1" max="100" readonly type="number" style="font-size: 1.25rem; max-width: 50px;">
                  <div class="input-group-append">
                     <button class="btn p-0" style="font-size: 1.25rem;">
                        <i class="bi bi-plus-circle"></i>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<style>
   .cart-item {
      text-transform: capitalize;
      line-height: normal;
      padding-top: 15px;
      padding-bottom: 15px;
      background-color: transparent;
      transition: .36s;
   }

   .cart-item:hover {
      background-color: #f8f9fa;
   }

   .cart-item .row {
      margin: 0 -.25rem;
      align-items: center;
   }

   .cart-item .col {
      padding: 0 .25rem;
   }

   @media (min-width: 768px) {
      .cart-item .product-price {
         min-width: 110px;
         text-align: right;
      }

      .cart-item .reguler-price,
      .cart-item .discount-price {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
   }

   .cart-item .close {
      width: 28px;
      height: 28px;
      border-radius: .25rem;
   }

   .cart-item .close:hover {
      opacity: 1!important;
   }

   @media (max-width: 1139.98px) {
      .cart-item .close {
         position: absolute;
         top: 0;
         left: 0;
         transform: translateY(-25%) translateX(-25%);
         z-index: 100;
      }
   }
</style>
`);