// wow scripts

new WOW().init();

// owl carousel function
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({

    loop:false,
    margin:10,
    responsiveClass:true,
    items:1,
    merge:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:1,
            nav:false
        },
    }

  });
});

  
    
