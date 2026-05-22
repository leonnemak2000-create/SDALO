console.log("Scientific Discoveries About Living Organisms loaded");



/* CARD ANIMATION */

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", function(){

        card.style.transform = "translateY(0px) scale(1)";

    });

});



/* BUTTON EFFECT */

let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button){

    button.addEventListener("mouseenter", function(){

        button.style.opacity = "0.8";

    });

    button.addEventListener("mouseleave", function(){

        button.style.opacity = "1";

    });

});



/* NAVBAR SHADOW ON SCROLL */

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 20){

        navbar.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";

    }

    else{

        navbar.style.boxShadow = "none";

    }

});



/* WELCOME MESSAGE */

window.addEventListener("load", function(){

    setTimeout(function(){

        alert("Welcome to Scientific Discoveries About Living Organisms!");

    }, 500);

});



/* HERO TEXT ANIMATION */

let heroTitle = document.querySelector(".hero h1");

if(heroTitle){

    heroTitle.style.opacity = "0";

    heroTitle.style.transform = "translateY(-30px)";



    setTimeout(function(){

        heroTitle.style.transition = "1s";

        heroTitle.style.opacity = "1";

        heroTitle.style.transform = "translateY(0px)";

    }, 300);

}



/* CARD CLICK EFFECT */

cards.forEach(function(card){

    card.addEventListener("click", function(){

        card.style.backgroundColor = "#ffe5e5";

    });

});



/* RANDOM FACTS */

let facts = [

    "Frogs can breathe through their skin.",

    "Penguins are birds that cannot fly.",

    "Sharks have existed longer than dinosaurs.",

    "Dolphins are mammals, not fish.",

    "Some turtles can live over 100 years."

];



function showFact(){

    let randomNumber = Math.floor(Math.random() * facts.length);

    console.log("Animal Fact: " + facts[randomNumber]);

}



showFact();