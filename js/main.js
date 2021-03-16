$(document).ready(function() {
    let $btns = $('.project-area .button-group button');

    $btns.click(function(e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
$('.project-area .grid').isotope({
    filter : selector
});
    return false;
    });

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled:true}
    });

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    });

    let nav_offset_top = $('.header-area').height() + 50;

    function navbarFixed() {
        if($('.header_area').lenght) {
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }
                else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            });
        }
    }

    navbarFixed();

    var btn = $('#fixedButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});

window.onload = function() {
    setTimeout (function () {
     scrollTo(0,0);
    }, 10); //100ms for example
   }


   window.onload = ( function() {        
    getDateTime();
     })(); 

function getDateTime() {
    var now     = new Date(); 
    var hour    = now.getHours(); 
   if (hour < 5){  
      document.getElementById('greeting').innerHTML = "Good Night";
   }
   else if (hour < 12){
         document.getElementById('greeting').innerHTML = "Good Morning";
    }
    else if (hour < 19){
        document.getElementById('greeting').innerHTML = "Good Afternoon";
    }
    else if (hour < 11){
        document.getElementById('greeting').innerHTML = "Good Evening";
    }
    else{
        document.getElementById('greeting').innerHTML = "Good Night";
    }
}

});