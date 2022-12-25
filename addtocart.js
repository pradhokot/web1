document.write(`
<div id="modalAddToCart" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1"
   aria-labelledby="modalAddToCartLabel" aria-hidden="true">
   <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
         <div class="modal-header pb-0 border-0">
            <h5 class="modal-title">+ 1 item added to your cart</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="modal-body">
            <div class="container-fluid">
               <div class="row align-items-center">
                  <div class="col-lg-4">
                     <img src="assets/img/product/produk1.png" class="img-fluid">
                  </div>
                  <div class="col">
                     <h4 class="fw-medium text-capitalize">sumatra mandheling coffee capsules</h4>
                     <p>200g</p>
                     <p class="mb-0">
                        Our Nanyang Coffee is a favourite of the older generation due to its traditional old-school flavour that delights your palate with every sip reminding you of home. It has a rich and robust aroma that exudes a gentle, bittersweet taste, best paired with your morning kaya or peanut butter toast and half-boiled eggs.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div class="modal-footer pt-0 border-0">
            <hr class="border-secondary w-100">
            <div class="container-fluid px-0">
               <div class="row fw-medium align-items-center justify-content-between">
                  <div class="col">
                     <div class="input-group align-items-center">
                        <div class="input-group-prepend mr-3 d-none d-sm-block">Qty.</div>
                        <div class="input-group-prepend">
                           <button class="btn p-0" style="font-size: 1.25rem;">
                              <i class="bi bi-dash-circle"></i>
                           </button>
                        </div>
                        <input class="form-control text-center p-0 h-auto border-0" value="1" min="1" max="100" style="font-size: 1.25rem; max-width: 50px;">
                        <div class="input-group-append">
                           <button class="btn p-0" style="font-size: 1.25rem;">
                              <i class="bi bi-plus-circle"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="col-auto">
                     Subtotal Rp 350.000,-
                  </div>
               </div>
            </div>
            <hr class="border-secondary w-100" style="margin-bottom: .75rem;">
            <div class="container-fluid px-0">
               <div class="row row-cols-1 row-cols-lg-2">
                  <div class="col pr-lg-2 mb-1 mb-lg-0">
                     <button class="btn btn-secondary w-100" data-dismiss="modal">Continue Shopping</button>
                  </div>
                  <div class="col pl-lg-2">
                     <a href="#" class="btn btn-primary w-100">Shopping Cart & Checkout</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
`);