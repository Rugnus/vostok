//variables for "menu" button
var buttonState = 0;
var menuBtnVar = document.getElementById("menuBtn");

//id variables for buttons
var menuBtnHomeVar = document.getElementById("menuBtnHome");
var homeVar = document.getElementById("home");
var menuBtnAboutVar = document.getElementById("menuBtnAbout");
var aboutVar = document.getElementById("about");
var menuBtnProjectsVar = document.getElementById("menuBtnProjects");
var projectsVar = document.getElementById("projects");
var menuBtnContactVar = document.getElementById("menuBtnContact");
var contactVar = document.getElementById("contact");

//Starting position for lastLink and lastLinkMenu as we arrive at "Home" and to avoid 'undefined' error
var lastLink = document.getElementById("home");
var lastLinkMenu = document.getElementById("menuBtnHome");

//Runs some function whenever you scroll
window.onscroll = function () {
   scrolling()
};

//Runs whenever the page is scrolled
function scrolling() {
   hamburgler();
   scrollingLinkColor();
}

//Menu Button
function menuBtn() {
   if (buttonState == 0) {
      dropdownContainer.classList.add("visible");
      menuBtnVar.classList.add("menuClicked");
      buttonState = 1;
   } else {
      buttonState = 0;
      dropdownContainer.classList.remove("visible");
      menuBtnVar.classList.remove("menuClicked");
   }
}

//Closes hamburger menu
function hamburgler() {
   if (buttonState == 1) {
      buttonState = 0;
      dropdownContainer.classList.remove("visible");
      menuBtnVar.classList.remove("menuClicked");
   }
}

//Detects what section the page is scrolled to and changes the color of the menu and nav bar links
function scrollingLinkColor() {
   //total height of each element specified
   var hp = homePara.offsetHeight;
   var ap = aboutPara.offsetHeight;
   var pp = projectsPara.offsetHeight;
   var cp = contactPara.offsetHeight;

   //Gets scroll height from top of page to each element specified and total height of element using .top and .height
   var hm = homeHead.getBoundingClientRect();
   var ab = aboutHead.getBoundingClientRect();
   var pr = projectsHead.getBoundingClientRect();
   var co = contactHead.getBoundingClientRect();

   if (hm.top <= hm.height && hm.top >= -hp - hm.height) {
      home();
   }
   if (ab.top <= ab.height && ab.top >= -ap - ab.height) {
      about();
   }
   if (pr.top <= pr.height && pr.top >= -pp - pr.height) {
      projects();
   }
   if (co.top <= co.height && co.top >= -cp - co.height) {
      contact();
   }
}

//Changes the color depending on which link is clicked. Returns previous to white
function home() {
   menuBtnHomeVar.classList.add("clicked-button-color");
   homeVar.classList.add("clicked-button-color");
   if (lastLink !== document.getElementById("home")) {
      lastLink.classList.remove("clicked-button-color");
      lastLinkMenu.classList.remove("clicked-button-color");
   }
   lastLink = document.getElementById("home");
   lastLinkMenu = document.getElementById("menuBtnHome");
}

function about() {
   menuBtnAboutVar.classList.add("clicked-button-color");
   aboutVar.classList.add("clicked-button-color");
   if (lastLink !== document.getElementById("about")) {
      lastLink.classList.remove("clicked-button-color");
      lastLinkMenu.classList.remove("clicked-button-color");
   }
   lastLink = document.getElementById("about");
   lastLinkMenu = document.getElementById("menuBtnAbout");
}

function projects() {
   menuBtnProjectsVar.classList.add("clicked-button-color");
   projectsVar.classList.add("clicked-button-color");
   if (lastLink !== document.getElementById("projects")) {
      lastLink.classList.remove("clicked-button-color");
      lastLinkMenu.classList.remove("clicked-button-color");
   }
   lastLink = document.getElementById("projects");
   lastLinkMenu = document.getElementById("menuBtnProjects");
}

function contact() {
   menuBtnContactVar.classList.add("clicked-button-color");
   contactVar.classList.add("clicked-button-color");
   if (lastLink !== document.getElementById("contact")) {
      lastLink.classList.remove("clicked-button-color");
      lastLinkMenu.classList.remove("clicked-button-color");
   }
   lastLink = document.getElementById("contact");
   lastLinkMenu = document.getElementById("menuBtnContact");
}

// There to solve issue when "home" is highlighted after a refresh and the page was scrolled down already
scrollingLinkColor();


var flkty = new Flickity('.main-gallery', {
   // options
   cellAlign: 'left',
   contain: true
});