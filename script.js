var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    376: {
      slidesPerView: 3,
      spaceBetween: 20,
      // slidesPerGroup: 20,
      spaceBetween: 30,
    },
  },
});

// Sketch Tab Change Script Start Here :-
function opentab(evt, name) {
  var i, content, links;

  content = document.getElementsByClassName("sketch-details");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  links = document.getElementsByClassName("sketch-link");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("default").click();
// Sketch Tab Change Script Ends Here :-



//On Scroll Button Visibile Script Starts
const showOnPx = 100;
const backToTopButton = document.querySelector(".bottomup");
const scrollContainer = () => document.documentElement || document.body;
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});
//On Scroll Button Visibile Script Ends

/*Counter */
// var counts = setInterval(updated);
// var upto = 0;
// function updated() {
//   var count = document.getElementById("count1");
//   count.innerHTML = ++upto;
//   if (upto === 560) {
//     clearInterval(counts);
//   }
// }

// function updated() {
//   var counts1 = setInterval(updated);
//   var upto1 = 0;
//   var count1 = document.getElementById("count2");
//   count1.innerHTML = ++upto1;
//   if (upto1 === 197) {
//     clearInterval(counts1);
//   }
// }

/*Counter JS Script Starts Here*/
$(document).ready(function () {
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    });
  };

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});
/*Counter JS Script Ends Here*/


/*Our Service Button Script Starts Here */
// document.getElementById("para").style.display="block";
function show(){
  const paras = document.getElementById("para");
  if(paras.style.display=="block"){
    paras.style.display="none";
  }
  else{
    paras.style.display="block";
  }
}
/*Our Service Ends Here */

/*Search Button Script Starts Here */
function find(){
  const s = document.getElementById("search");  
  if(s.style.display=="block"){
    s.style.display="none";
  }
  else{
    s.style.display="block";
  }
}
/*Search Button Script Ends Here */ 