//Change navbar backround on scroll
window.addEventListener("scroll", function () {
  var element = document.querySelector("#OurSolution");
  var position = element.getBoundingClientRect();
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#ca1515";
    document.getElementById("NavProduct").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavOurStory").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavCaseStudies").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavContact").style.backgroundColor = "rgba(14,14,14)";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#Product");
  var position = element.getBoundingClientRect();
  if (position.top+1100 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavProduct").style.backgroundColor = "#ca1515";
    document.getElementById("NavOurStory").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavCaseStudies").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavContact").style.backgroundColor = "rgba(14,14,14)";
  }
});


window.addEventListener("scroll", function () {
  var element = document.querySelector("#OurStory");
  var position = element.getBoundingClientRect();
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavProduct").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavOurStory").style.backgroundColor = "#ca1515";
    document.getElementById("NavCaseStudies").style.backgroundColor = "rgba(14,14,14";
    document.getElementById("NavContact").style.backgroundColor = "rgba(14,14,14)";
  }
});


window.addEventListener("scroll", function () {
  var element = document.querySelector("#CaseStudies");
  var position = element.getBoundingClientRect();
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavProduct").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavOurStory").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#ca1515";
    document.getElementById("NavContact").style.backgroundColor = "rgba(14,14,14)";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#HomeForm");
  var position = element.getBoundingClientRect();
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavProduct").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavOurStory").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavCaseStudies").style.backgroundColor = "rgba(14,14,14)";
    document.getElementById("NavContact").style.backgroundColor = "#ca1515";
  }
});

function changeOurSolution(){
  var text1="<b>Márkafüggetlenül bármilyen típusú és hajtású autók szervizelése nagy tapasztalattal, szakértelemmel és odaadással. Kapcsolatban állunk a legnagyobb alkatrész nagykereskedésekkel, így mindig a legjobb minőséget tudjuk biztosítani. <br>Legyen szó akár a műszaki vizsga előtti, esetleg időszakos átvizsgálásról vagy bármilyen jellegű javításról, fontos, hogy autója megbízható kezekben legyen! <br> Nálunk személyesen meggyőződhet minden beépített alkatrészről. <br> Versenymúltunk és jelenünk miatt a legújabb technológiákat alkalmazzuk, így a lehető legjobb szolgáltatást nyújtjuk Önnek és autójának.</b>"
  var text2="<b>Ha érzed a késztetést, hogy feltépd az aszfaltot ÉS a murvát akkor a legjobb helyen jársz. Nálunk van arra lehetőséged, hogy valódi versenyző lehess, biztosítjuk számodra a technikai részt azaz a versenyautót, szerviz hátteret és a több éves elméleti és gyakorlati tudásunkat. Ha megakarod tenni az első lépésed a versenyző lét felé akkor keress minket telefonon vagy személyesen, ahol minden kérdésedre válaszolunk.</b>"
  var x = document.getElementById("oursolution");
  if (x.innerHTML === text2) {
    x.innerHTML = text1;
  } else {
    x.innerHTML = text2;
  }
}

function changeOurSolutioneng(){
  var text1="<b>Our goal was to create an interface for beginners and helps advanced users find the most suitable wallet. For this some questions need to be answered to assess the need needs on the basis of which we offer wallets. We strived to Our offer also includes free, easy-to-use wallets get them to help novice cryptos and also to be more advanced those with knowledge will also find their favorite. We're testing by filling out and accepting offers, more about our users we are trying to take down an hourly load, as the range of wallets is now available it is on a wide spectrum and it is not even certain where we know let's start with the big offer.</b>"
  var text2="<b>The following instructive sentence is mentioned by many in the cryptographic world. This means that if you do not own the Private Key, you may lose control of your cryptocurrency. It doesn't matter if the owner owns (non-custodial) the Private Key or possibly another person / company (custodial). Therefore, we believe that the safest method is to use non-custodial wallets. Furthermore, mining is not the only way to earn cryptocurrencies or operate a blockchain. Staking serves the same purpose, and all you have to do for the reward is store a certain amount in your cryptocurrency for a certain amount of time. Sounds good, right? Staging is simple: you need to store a certain amount of coins in a unique wallet that you use specifically for staking. Of course, you can’t spend the coins, they are tied down for a set period of time. You can try to trick the system, but you risk losing coins. However, you get a reward for storing it, just as you would for a miner. One of the main differences from mining is that you don't need mining tools, just a wallet (machine) with a certain amount of coins in it. For this reason, this solution is more environmentally friendly and cheaper, as it does not consume as much electricity as mining. The staking is similar to when you put your money in the bank as a deposit and you get interest afterwards. The amount of this interest depends on how long you commit your money. The longer you spend, the higher your interest rate. By completing our test, you can find out which portfolio best suits your needs and even generates revenue for you. Fill it out now so you can get a return today.</b>"
  var x = document.getElementById("oursolution");
  if (x.innerHTML === text2) {
    x.innerHTML = text1;
  } else {
    x.innerHTML = text2;
  }
}

function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function slidesPlugin(activeSlide = 0) {

  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  for (const slide of slides) {
      slide.addEventListener('click', () => {
      removeActiveClasses()

     slide.classList.add('active')
     })
  }

  function removeActiveClasses() {
      slides.forEach((slide) => {
      slide.classList.remove('active')
      })
  }
}
slidesPlugin()