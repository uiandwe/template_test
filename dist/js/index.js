$(document).ready(function(){
   $('.js--nav-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav.js--nav-features').addClass('fix-nav');
            $('nav .btn_support').addClass('active');    
            
        } else {
            $('nav.js--nav-features').removeClass('fix-nav');
            $('nav .btn_support').removeClass('active');
        }
    }, {
      offset: '0px;'
    });  
    
    $('.js--btn-support').waypoint(function (direction) {
        if (direction == "down") {
            $('nav .btn_support').addClass('active');
            
        } else {
            $('nav .btn_support').removeClass('active');
        }
    }, {
      offset: '0px;'
    });  
    
    $('nav .btn_support').on('click', function(){
        $sidebar = $(document).find(".sidebar");
        if($sidebar.hasClass("active")){
           $sidebar.removeClass("active");
        }
        else{
            $sidebar.addClass("active");
        }
            
            
    })

});