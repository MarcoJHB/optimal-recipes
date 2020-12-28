AOS.init();

var elems=document.getElementsByClassName("mobile")


    document.getElementById("burger").addEventListener("click",function(){
        for(i=0; i<elems.length; i++){
        elems[i].classList.toggle("mobile-hidden");
        console.log("gelo");
        }
    });
    //elems[i].classList.toggle("mobile-hidden");

console.log(elems);

var burger = document.getElementById("burger");

window.addEventListener("resize",function(){
burger.style.top = (document.getElementById("top-nav").offsetHeight - burger.offsetHeight) / 2+"px";
})

burger.style.top = (document.getElementById("top-nav").offsetHeight - burger.offsetHeight) / 2+"px";

var x = (document.getElementById("top-nav").offsetHeight - burger.offsetHeight) / 2;

console.log(x+"heki");



const card = document.getElementById("card");

const tl = gsap.timeline({
  defaults: { ease: "power2.inOut", duration: 1.5 },
});



tl.from("img", {scaleX:1.4, scaleY:1.4, opacity: 0 })
.from(".top-nav",  { y: 20, clipPath: "inset(0 0 100% 0)" }, "-=0.8")
  .from(".features-card", { opacity: 0, delay: 0.5, duration: 1 }, "-=1.5")
  .from(
    ".seq",
    { y: -30, opacity: 0, stagger: 0.2, duration: 0.5 },
    "-=0.5"
  )
  .from("h3", { y: 20, clipPath: "inset(0 0 100% 0)" }, "-=0.8")
  .from(".header-btn", { x: 20, clipPath: "inset(0 0 100% 0)" }, "-=1.8");


  ////////////////////
  //NAVBAR ANIMATION//
  ////////////////////

 

  window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);

