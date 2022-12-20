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

   * {
      // outline: solid 1px green;
   }

   .wrapper {
      // min-height: calc(100vh - 209px);
      padding-top: 70px;
      margin-bottom: 6rem;
   }
   
   @media (min-width: 992px) {
      .wrapper {
         padding-top: 136px;
         margin-bottom: 9rem;
      }
   }

   ::placeholder {
      color: inherit!important;
      opacity: .5!important;
   }

   .btn-primary {
      color: white;
      background-color: #fd4f00;
      border-color: #fd4f00;
   }
</style>
`)