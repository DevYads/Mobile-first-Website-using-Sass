// console.log("Hello!");

var hamburger = document.getElementById("hamburger");
var header = document.querySelector(".header");
var body = document.querySelector("body");
var overlay = document.querySelector(".overlay");
var fadeElems = document.querySelectorAll(".has-fade");

hamburger.addEventListener("click", function() {

    if(header.classList.contains("open")){
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach(element => {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    }
    else{
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach(element => {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
    
});
