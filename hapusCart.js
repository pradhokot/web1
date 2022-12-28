document.write(`
<div id="hapusCart" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1"
   aria-labelledby="hapusCartLabel" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content" style="color: #721c24; background-color: #f8d7da; border-color: #f5c6cb;">
         <div class="modal-header pb-0 border-0">
            <h5 class="modal-title"><i class="bi bi-exclamation-triangle-fill"></i> Remove Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="modal-body">
            <h4 class="fw-medium4">
               Are you sure you want to remove this product from your shopping cart ?
            </h4>
            <div class="row align-items-center g-0">
               <div class="col-4">
                  <img src="assets/img/product/produk1.png" class="img-fluid w-100">
               </div>
               <div class="col-8 col-md-5" style="line-height: normal;">
                  <p class="text-capitalize mb-2 fw-medium">sumatra mandheling coffee capsules</p>
                  <p class="text-capitalize mb-0">200g</p>
               </div>
            </div>
         </div>
         <div class="modal-footer pt-0 border-0 d-lg-nowrap">
            <button class="btn btn-primary w-100" data-dismiss="modal">Cancel</button>
            <button class="btn btn-outline-danger w-100">Remove</button>
         </div>
      </div>
   </div>
</div>
`);