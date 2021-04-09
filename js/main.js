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
    btn.addClass('showTop');
  } else {
    btn.removeClass('showTop');
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
      document.getElementById('greeting').innerHTML = "Good Night!";
   }
   else if (hour < 12){
         document.getElementById('greeting').innerHTML = "Good Morning!";
    }
    else if (hour < 19){
        document.getElementById('greeting').innerHTML = "Good Afternoon!";
    }
    else if (hour < 23){
        document.getElementById('greeting').innerHTML = "Good Evening!";
    }
    else{
        document.getElementById('greeting').innerHTML = "Good Night!";
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("button1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("button12");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

$(function(){
    $('.readmore a.more').on('click', function(){
        var $parent = $(this).parent();
        if($parent.data('visible')) {
            $parent.data('visible', false).find('.ellipsis').show()
            .end().find('.moreText').hide()
            .end().find('a.more').text('show more');
        } else {
            $parent.data('visible', true).find('.ellipsis').hide()
            .end().find('.moreText').show()
            .end().find('a.more').text('show less');
        }
    });
});




window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('show')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        }
        else {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}

});