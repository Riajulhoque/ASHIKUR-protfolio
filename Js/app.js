$(function(){
  $(window).scroll(function(){
    let srcTop = $(window).scrollTop()
    if( srcTop > 900){  $(".nav").addClass('manuActive');
    $(".scrollToTop").slideDown();
  }
    else{ $(".nav").removeClass('manuActive');
    $(".scrollToTop").slideUp();
  }
  })

  
  $(".scrollToTop").click(function (){
    $('html,body').animate({ scrollTop:0}, 2000)
    
  });
})


