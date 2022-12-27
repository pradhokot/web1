document.write(`
<div id="sliderProduct" class="carousel slide carousel-product" data-ride="carousel" data-interval="3000"
   data-pause="false">
   <div class="carousel-inner row w-100 mx-auto flex-nowrap" role="listbox">
      <div class="carousel-item col-6 col-md-4 col-lg-3 active">
         <script src="productItem.js"></script>
      </div>
      <div class="carousel-item col-6 col-md-4 col-lg-3">
         <script src="productItem.js"></script>
      </div>
      <div class="carousel-item col-6 col-md-4 col-lg-3">
         <script src="productItem.js"></script>
      </div>
      <div class="carousel-item col-6 col-md-4 col-lg-3">
         <script src="productItem.js"></script>
      </div>
      <div class="carousel-item col-6 col-md-4 col-lg-3">
         <script src="productItem.js"></script>
      </div>
      <div class="carousel-item col-6 col-md-4 col-lg-3">
         <script src="productItem.js"></script>
      </div>
      <div class="carousel-item col-6 col-md-4 col-lg-3">
         <script src="productItem.js"></script>
      </div>
      <div class="carousel-item col-6 col-md-4 col-lg-3">
         <script src="productItem.js"></script>
      </div>
   </div>
   <a class="carousel-control carousel-control-prev w-auto" href="#sliderProduct" role="button" data-slide="prev">
      <i class="bi bi-chevron-left"></i>
      <span class="sr-only">Previous</span>
   </a>
   <a class="carousel-control carousel-control-next w-auto" href="#sliderProduct" role="button" data-slide="next">
      <i class="bi bi-chevron-right"></i>
      <span class="sr-only">Next</span>
   </a>
</div>

<style>
.carousel-product .carousel-item {
   margin-right: 0;
}

.carousel-product .carousel-inner .active+.carousel-item {
   display: block;
}

.carousel-product .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
.carousel-product .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)+.carousel-item {
   transition: none;
}

.carousel-product .carousel-inner .carousel-item-next {
   position: relative;
   transform: translate3d(0, 0, 0);
}

.carousel-product .active.carousel-item-left+.carousel-item-next.carousel-item-left,
.carousel-product .carousel-item-next.carousel-item-left+.carousel-item,
.carousel-product .carousel-item-next.carousel-item-left+.carousel-item+.carousel-item {
   position: relative;
   transform: translate3d(-100%, 0, 0);
   visibility: visible;
}

.carousel-product .carousel-inner .carousel-item-prev.carousel-item-right {
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
   display: block;
   visibility: visible;
}

.carousel-product .active.carousel-item-right+.carousel-item-prev.carousel-item-right,
.carousel-product .carousel-item-prev.carousel-item-right+.carousel-item,
.carousel-product .carousel-item-prev.carousel-item-right+.carousel-item+.carousel-item {
   position: relative;
   transform: translate3d(100%, 0, 0);
   visibility: visible;
   display: block;
   visibility: visible;
}

/* XS */
@media (max-width: 575.98px) {
   .carousel-product .carousel-inner .active.col-sm-6.carousel-item+.carousel-item+.carousel-item {
       position: absolute;
       top: 0;
       right: -50%;
       z-index: -1;
       display: block;
       visibility: visible;
   }
}

/* MD */
@media (min-width: 768px) and (max-width: 991.98px) {
   .carousel-product .carousel-inner .active.col-md-4.carousel-item+.carousel-item+.carousel-item+.carousel-item {
       position: absolute;
       top: 0;
       right: -33.3333%;
       z-index: -1;
       display: block;
       visibility: visible;
   }
}

@media (min-width: 768px) {
   .carousel-product .carousel-inner .active+.carousel-item+.carousel-item {
       display: block;
   }

   .carousel-product .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)+.carousel-item+.carousel-item {
       transition: none;
   }

   .carousel-product .carousel-inner .carousel-item-next {
       position: relative;
       transform: translate3d(0, 0, 0);
   }

   .carousel-product .carousel-item-next.carousel-item-left+.carousel-item+.carousel-item+.carousel-item {
       position: relative;
       transform: translate3d(-100%, 0, 0);
       visibility: visible;
   }

   .carousel-product .carousel-item-prev.carousel-item-right+.carousel-item+.carousel-item+.carousel-item {
       position: relative;
       transform: translate3d(100%, 0, 0);
       visibility: visible;
       display: block;
       visibility: visible;
   }

}


/*LG */
@media (min-width: 992px) {
   .carousel-product .carousel-inner .active+.carousel-item+.carousel-item+.carousel-item {
       display: block;
   }

   .carousel-product .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)+.carousel-item+.carousel-item+.carousel-item {
       transition: none;
   }

   .carousel-product .carousel-inner .active.col-lg-3.carousel-item+.carousel-item+.carousel-item+.carousel-item+.carousel-item {
       position: absolute;
       top: 0;
       right: -25%;
       z-index: -1;
       display: block;
       visibility: visible;
   }

   .carousel-product .carousel-item-next.carousel-item-left+.carousel-item+.carousel-item+.carousel-item+.carousel-item {
       position: relative;
       transform: translate3d(-100%, 0, 0);
       visibility: visible;
   }

   .carousel-product .carousel-item-prev.carousel-item-right+.carousel-item+.carousel-item+.carousel-item+.carousel-item {
       position: relative;
       transform: translate3d(100%, 0, 0);
       visibility: visible;
       display: block;
       visibility: visible;
   }

}

.carousel-product .carousel-control {
   font-size: 2.5rem;
   color: #323232;
   opacity: 0;
   visibility: hidden;
}

.carousel-product .carousel-control .bi {
   background-color: white;
}

.carousel-product:hover .carousel-control {
   opacity: .5;
   visibility: visible;
}

.carousel-product .carousel-control:hover {
   opacity: .875;
}
</style>
`);