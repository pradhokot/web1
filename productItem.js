document.write(`
<div class="card card-product">
   <div class="card-header">
      <a href="#" class="card-img">
         <img src="assets/img/product/produk1.png" class="img-fluid w-100" alt="">
         <img src="assets/img/product/produk2.png" class="img-fluid w-100" alt="">
         <span class="position-wobler"><span class="wobler">20%</span></span>
      </a>
      <button class="btn btn-addtocart" data-toggle="modal" data-target="#modalAddToCart"><i class="bi bi-cart-plus"></i></button>
   </div>
   <div class="card-body">
      <p class="card-title">sumatra mandheling coffee capsules</p>
      <p class="card-text my-2">200g</p>
      <div class="card-text">
         <div class="product-price">
            <div class="reguler-price d-none">Rp 200.000,-</div>
            <div class="promo-price">
               <span class="discount-price order-sm-2">Rp 125.000,-</span>
               <span class="normal-price order-sm-1"><del>Rp 200.000,-</del></span>
            </div>
         </div>
      </div>
   </div>
</div>
`);