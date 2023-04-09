// pop up side Bar
let popmenu = document.querySelector("#opensidebar");
let sidebar = document.querySelector(".popupsidebar")

popmenu.addEventListener("click", function() {
  sidebar.classList.toggle("show_popupsidebar")
})

// side bar show more

let showdown = document.querySelector(".showmorebtn")
let showdowncontent = document.querySelector(".showmorecontent")

showdown.addEventListener("click", function() {
  showdowncontent.classList.toggle("show_showmorecontent")
  showdown.style.display = "none";
} )


// menu drop down pop up 

var picfordropup = document.querySelector(".picforpopup")
var contextpicpopup = document.querySelector(".popupwhenyouclickprofilepic")


picfordropup.addEventListener("click", function() {
  contextpicpopup.classList.toggle("show_popupwhenyouclickprofilepic")
})


// iframe description

var iframedes = document.querySelector(".iframedescription")
var iframeshowmore = document.querySelector(".iframeshowmore")
var iframedes2 = document.querySelector(".iframedescriptionshowmore")
var iframeshowless = document.querySelector(".iframeshowless")


iframeshowmore.addEventListener("click", function() {
  iframedes.style.display = "none";
  iframedes2.style.display = "block";
});

iframeshowless.addEventListener("click", function() {
  iframedes.style.display = "block";
  iframedes2.style.display = "none";
});