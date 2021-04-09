const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
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
  modal.style.display = "flex";
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