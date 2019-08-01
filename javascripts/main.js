/* Global $ */

// Scrolling
window.addEventListener('scroll', () => {
    
    console.log(pageYOffset)
    /*if(pageYOffset = 0){
        $(".content").css("transform","translate3d(0px,-100px,-50px)");
    }*/
});

// Scroll Revealing
var offset= "120", // offset (in px) from the original trigger point
    delay= "0", // values from 0 to 3000, with step 50ms
    duration= "400", // values from 0 to 3000, with step 50ms
    easing= "ease-in-out", // default easing for AOS animations
    once= "false", // whether animation should happen only once - while scrolling down
    mirror= "false", // whether elements should animate out while scrolling past them
    exp= "";

function aos(el, style, offset, delay, duration, easing, mirror, once, exp){
    $(el).not(exp).attr(
        {"data-aos":style,
        "data-aos-offset":offset,
        "data-aos-delay": delay,
        "data-aos-duration":duration,
        "data-aos-easing":easing,
        "data-aos-mirror":mirror,
        "data-aos-once":once 
        });
}
function aosStyle(el, style){ $(el).attr({"data-aos":style});}
function aosDelay(el, delay){ $(el).attr({"data-aos-delay": delay});}
function aosDuration(el, duration){ $(el).attr({"data-aos-duration":duration});}
function aosEasing(el, easing){ $(el).attr({"data-aos-easing":easing});}

aosStyle('.home *,.about *,.work *,.skills *', 'fade-up')
aosStyle('.contact h1,.contact .offset-4 *, .contact .col-3 *', 'fade-up')
aosDelay('.home h1:nth-child(1)', "200")
aosDuration('.home h1:nth-child(1)', "1000")


AOS.init();
/*
window.onscroll = function() {
    var Y = window.pageYOffset; 
    if ($(this).scrollTop() > 0) {
        $('.content .home').fadeIn(200);
    } else {
        $('.content .home').fadeOut(630);
    }
  }
/*



/*$("svg").hover(function(){
    $(".hair").addClass("hair-color");
});*/


/*
$("h1").mouseover(function() {
    $(this).css("transform","perspective(500px) translateZ(50px)");
});
$("h1").mouseout(function() {
    $(this).css("transform","perspective(500px) translateZ(0px)");
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style',"top:"+(e.pageY- 40)+"px; left:"+e.pageX+ "px");
})




// CSS Animation
/*
const brand =  document.querySelector('.brand');
brand.classList.add('animated', 'fadeInUp', 'visible');

const fromTo =  document.querySelector('.from-to');
fromTo.classList.add('animated', 'fadeInUp', 'visible');

const navList =  document.querySelector('.nav-list');
navList.classList.add('animated', 'fadeInUp', 'visible');

const portfolio =  document.querySelector('.portfolio');
portfolio.classList.add('animated', 'fadeInUp', 'visible');

const from =  document.querySelector('.from');
from.classList.add('animated', 'fadeInUp', 'visible');

const city =  document.querySelector('.city');
city.classList.add('animated', 'fadeInUp', 'visible');


const country =  document.querySelector('.country');
country.classList.add('animated', 'fadeInUp', 'visible');*/















/*function myFunction() {
    var elmnt = document.getElementsByTagName("BODY")[0];
    var y = elmnt.scrollHeight;
    var x = elmnt.scrollWidth;
    var t = elmnt.scrollTop;
    var yOff = window.pageYOffset;
    var cOff = elmnt.clientHeight
    document.querySelectorAll("#demo")[3].innerHTML = "Height: "     + y 
                                         + "px<br>Width: "      + x 
                                         + "px<br>TopScroll: "  + t 
                                         + "px<br>Y Offset: "  + yOff
                                         + "px<br>C Offset: "  + cOff;

        $(elmnt).scroll(function(){
            if( yOff > 6000){
            /*const country =  document.querySelector('.conact');
            country.classList.add('animated', 'fadeInUp', 'visible');
            // document.getElementById ("demo").innerHTML = "Hello";
        
            $('.contact').addClass('red');
            }
        })   
}
myFunction();*/

/*function scrollIt(){
    var contact = $('.home'),
        contactOffset = contact.Offset().top/2,
        documentAll = $(document);

        documentAll.on('scroll',function (){
            if(documentAll.scrollTop() > contactOffset && contact.hasClass('hidden')){
                contact.removeClass('hidden');
            //document.querySelectorAll("#demo")[3].innerHTML = contactOffset;
            } 
            
        })
}
scrollIt();

   
*/

