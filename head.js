document.write(`
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="assets/img/logo.ico">
<link rel="stylesheet" href="assets/bootstrap-4.6.2-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/bootstrap-icons-1.9.1/bootstrap-icons.css">
<style>
   @font-face {
      font-family: 'Google';
      src: url(assets/fonts/GoogleSans-Regular.woff);
      font-weight: 400;
      font-style: normal;
   }

   @font-face {
      font-family: 'GoogleMedium';
      src: url(assets/fonts/GoogleSans-Medium.woff);
      font-weight: 500;
      font-style: normal;
   }

   .fw-medium {
      font-family: 'GoogleMedium';
   }

   @font-face {
      font-family: 'GoogleBold';
      src: url(assets/fonts/GoogleSans-Bold.woff);
      font-weight: 700;
      font-style: normal;
   }

   .fw-bold {
      font-family: 'GoogleBold';
   }

   html,
   body {
      color: #323232;
      font-family: 'Google', sans-serif;
   }

   // * {outline: solid 1px green;}

   .wrapper section {
      margin-bottom: 5.5rem;
   }
   
   @media (min-width: 992px) {
      .wrapper section {
         margin-bottom: 7rem;
      }
   }

   ::placeholder {
      color: inherit!important;
      opacity: .5!important;
   }
   
   /* custom button */
   button:focus, input:focus, select:focus, textarea:focus, .btn, .form-control, .navbar-toggler:focus {
      outline: none!important;
      box-shadow: none!important;
      text-decoration: none!important;
   }
   
   .btn-primary {
      color: white;
      background-color: #fd4f00;
      border-color: #fd4f00;
   }

   .btn-primary:hover,
   .btn-primary.active {
      color: white;
      background-color: #fd1e00;
      border-color: #fd1e00;
   }

   .btn-light {
      color: #323232;
      background-color: #f4f4f4;
      border-color: #f4f4f4;
   }

   .btn-light:hover,
   .btn-light.active {
      color: #323232;
      background-color: #e4e4e4;
      border-color: #e4e4e4;
   }

   .btn-secondary {
      color: #323232;
      background-color: #d9d9d9;
      border-color: #d9d9d9;
   }

   .btn-secondary:hover,
   .btn-secondary.active {
      color: #white;
      background-color: #999;
      border-color: #999;
   }

   .btn-dark {
      color: white;
      background-color: #656565;
      border-color: #656565;
   }

   .btn-dark:hover,
   .btn-dark.active {
      color: white;
      background-color: #323232;
      border-color: #323232;
   }

   /* grid */
   .row.g-0 {
      margin: 0;
   }

   .row.g-0 > div {
      padding: 0;
      margin-top: 1.875px;
   }

   .row.g-1 {
      margin: 0 -1.875px;
   }

   .row.g-1 > div {
      padding: 0 1.875px;
      margin-top: 3.75px;
   }

   .row.g-2 {
      margin: 0 -3.75px;
   }

   .row.g-2 > div {
      padding: 0 3.75px;
      margin-top: 7.5px;
   }

   .row.g-3 {
      margin: 0 -7.5px;
   }

   .row.g-3 > div {
      padding: 0 7.5px;
      margin-top: 15px;
   }

   @media (min-width: 992px) {
      .row.g-lg-0 {
         margin: 0;
      }
   
      .row.g-lg-0 > div {
         padding: 0;
         margin-top: 1.875px;
      }
   
      .row.g-lg-1 {
         margin: 0 -1.875px;
      }
   
      .row.g-lg-1 > div {
         padding: 0 1.875px;
         margin-top: 3.75px;
      }
   
      .row.g-lg-2 {
         margin: 0 -3.75px;
      }
   
      .row.g-lg-2 > div {
         padding: 0 3.75px;
         margin-top: 7.5px;
      }
   
      .row.g-lg-3 {
         margin: 0 -7.5px;
      }
   
      .row.g-lg-3 > div {
         padding: 0 7.5px;
         margin-top: 15px;
      }
   }

   /* ------------------------- card product ------------------------- */
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
      outline: solid 1px white;
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
      font-family: 'GoogleBold';
      margin-bottom: 0;
      line-height: normal;
   }

   /* product price */
   .product-price {
      line-height: normal;
   }

   .product-price .promo-price {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
   }

   .product-price .discount-price,
   .product-price .normal-price {
      margin: 0 .25rem;
   }

   .product-price .reguler-price {
      font-family: 'GoogleMedium';
   }

   .product-price .discount-price {
      color: #fd4f00;
      font-family: 'GoogleMedium';
   }

   .product-price .normal-price {
      opacity: .75;
   }

   /* card product interactive */
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

   /* form check */
   .form-check-input {
      opacity: 0;
      visible: hidden;
   }

   .form-check input,
   .form-check label {
      cursor: pointer;
   }

   .form-check-circle {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: .3rem;
      width: 13px;
      height: 13px;
      border-radius: 100%;
      background-color: #a9a9a9;
   }

   .form-check input:checked ~ .form-check-circle {
      background-color: #323232;
   }
</style>
`);