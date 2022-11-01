// countdown
(function () {
   const second = 1000,
         minute = second * 60,
         hour = minute * 60,
         day = hour * 24;


   var end = new Date('04/07/2023 10:1 AM');
   const countDown = new Date(end).getTime(),
       x = setInterval(function() {    

         const now = new Date().getTime(),
               distance = countDown - now;

           document.getElementById("days").innerText = Math.floor(distance / (day)),
           document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
           document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
           document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

         //do something later when date is reached
         if (distance < 0) {
           document.getElementById("headline").innerText = "It's our wedding!";
           document.getElementById("countdown").style.display = "none";
           document.getElementById("content").style.display = "block";
           clearInterval(x);
         }
         //seconds
       }, 0)
 }());

 // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1700) {
      document.getElementById("sticky-nav").style.background = "#9AA8A8";
      document.getElementById("navbarNav").style.padding = "0";
   } else {
      document.getElementById("sticky-nav").style.background = "#E0908D";
      document.getElementById("navbarNav").style.padding = "auto";
   }
 }

 /* Code for changing active link on clicking */
   const boxes = document.querySelectorAll('.navbar #navbarNav .navbar-nav .nav-link');
   for (const box of boxes) {
      box.addEventListener('click', function handleClick() {
         var current = document.getElementsByClassName("active");

            current[0].className = current[0].className.replace(" active","");
            this.className += " active";
         });
   }
 
/* Code for changing active link on Scrolling */
$(document).ready(function() {
   $('a[href*=#]').bind('click', function(e) {
         e.preventDefault(); // prevent hard jump, the default behavior

         var target = $(this).attr("href"); // Set the target as variable

         // perform animated scrolling by getting top-position of target-element and set it as scroll target
         $('html, body').stop().animate({
               scrollTop: $(target).offset().top
         }, 550, function() {
               location.hash = target; //attach the hash (#jumptarget) to the pageurl
         });

         return false;
   });
});

$(window).scroll(function() {
   var scrollDistance = $(window).scrollTop();

   // Assign active class to nav links while scolling
   $('.page-section').each(function(i) {
         if ($(this).position().top <= scrollDistance) {
               $('.navbar #navbarNav .navbar-nav .nav-link.active').removeClass('active');
               $('.navbar #navbarNav .navbar-nav .nav-link').eq(i).addClass('active');
         }
   });
}).scroll();