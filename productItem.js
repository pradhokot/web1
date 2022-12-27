document.write(`
<div class="card card-product">
   <div class="card-header">
      <a href="detailCoffee.html" class="card-img">
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
<style>
.card-product {
   max-width: 240px;
   text-transform: capitalize;
   margin: 0 auto;
   border-width: 0;
   border-radius: 0;
}

.card-product .card-header {
   position: relative;
   background-color: transparent;
   border-width: 0;
   padding: 0;
   border-radius: 0;
}

.card-product .card-img {
   display: block;
   padding-top: 100%;
   position: relative;
   border-radius: 0;
}

.card-product .position-wobler {
   position: absolute;
   bottom: 10%;
   right: 10%;
}

.card-product .wobler {
   background-color: red;
   color: white;
   width: calc(42px + .75vw);
   height: calc(42px + .75vw);
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   line-height: 1;
   font-family: 'GoogleBold';
   font-size: calc(1rem + .15vw);
   border: solid 1px white;
}

.card-product .btn-addtocart {
   background-color: #a9a9a9;
   color: white;
   position: absolute;
   top: 0;
   right: 0;
   width: 38px;
   height: 38px;
   display: flex;
   align-items: center;
   justify-content: center;
   line-height: 1;
   font-size: 1.25rem;
   outline: solid 1px white;
}

.card-product .btn-addtocart:hover {
   background-color: #323232;
}

.card-product .card-body {
   font-size: .875em;
   text-align: center;
   padding: 0;
}

.card-product .card-title {
   font-family: 'GoogleMedium';
   margin-bottom: 0;
   line-height: normal;
}

.card-product .card-img img {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   transition: .36s;
}

.card-product .card-img img:first-of-type,
.card-product.out-stock:hover .card-img img:first-of-type {
   opacity: 1;
   visibility: visible;
   transform: translate(-50%, -50%) scale(1);
}

.card-product .card-img img:last-of-type,
.card-product.out-stock:hover .card-img img:last-of-type {
   opacity: 0;
   visibility: hidden;
   transform: translate(-50%, -50%) scale(.5);
}

.card-product:hover .card-img img:first-of-type {
   opacity: 0;
   visibility: hidden;
   transform: translate(-50%, -50%) scale(.5);
}

.card-product:hover .card-img img:last-of-type {
   opacity: 1;
   visibility: visible;
   transform: translate(-50%, -50%) scale(1);
}

@media (min-width: 992px) {
   .card-product .btn-addtocart {
      opacity: 0;
      visibility: hidden;
      transition: .36s;
   }

   .card-product:hover .btn-addtocart {
      opacity: 1;
      visibility: visible;
   }
}

.card-product.out-stock .wobler,
.card-product.out-stock .btn-addtocart {
   display: none !important;
}

.card-product.out-stock .card-header::after {
   content: 'Out of Stock';
   font-family: 'GoogleBold';
   background-color: rgba(255, 255, 255, .75);
   color: #323232;
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 100;
   font-size: 1.25rem;
}
</style>
`);