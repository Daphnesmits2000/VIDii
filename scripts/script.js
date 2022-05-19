// JavaScript Document
console.log("Howdy!");

// MICKEY's en buttons klikbaar maken, geholpen door Milan

var mickey1 = document.querySelector(".mickey1");
var mickey2 = document.querySelector(".mickey2");
var mickey3 = document.querySelector(".mickey3");
var mickey4 = document.querySelector(".mickey4");


var kraam1 = document.querySelector(".kraam1");
var hotdogButton1 = document.querySelector(".Hotdog1");
var kraam2 = document.querySelector(".kraam2");
var hotdogButton2 = document.querySelector(".Hotdog2");
var kraam3 = document.querySelector(".kraam3");
var hotdogButton3 = document.querySelector(".Hotdog3");
var kraam4 = document.querySelector(".kraam4");
var hotdogButton4 = document.querySelector(".Hotdog4");


var background1 = document.querySelector(".gif1");
var background2 = document.querySelector(".achtergrond2");
var background3 = document.querySelector(".achtergrond3");
var background4 = document.querySelector(".achtergrond4");

var speechBubble = document.querySelector(".bubble");

hotdogButton1.addEventListener("click", function () {
    mickey1.classList.remove("verdwijnen")
    mickey2.classList.add("verdwijnen")
    mickey3.classList.add("verdwijnen")
    mickey4.classList.add("verdwijnen")

    kraam1.classList.remove("verdwijnen")
    kraam2.classList.add("verdwijnen")
    kraam3.classList.add("verdwijnen")
    kraam4.classList.add("verdwijnen")

    document.body.classList.add("j1929")
    document.body.classList.remove("j1935")
    document.body.classList.remove("j1953")
    document.body.classList.remove("j2004")

    speechBubble.classList.add("verdwijnen")
    speechBubble.textContent = "Tijdens Mickey zijn negende film, onthulde hij dat hij van Hotdogs houdt en deed zelfs een hotdogdans. Hij liet ons pas in deze film zien dat hij woorden kon uiten.";
})

hotdogButton2.addEventListener("click", function () {
    mickey1.classList.add("verdwijnen")
    mickey2.classList.remove("verdwijnen")
    mickey3.classList.add("verdwijnen")
    mickey4.classList.add("verdwijnen")

    kraam1.classList.add("verdwijnen")
    kraam2.classList.remove("verdwijnen")
    kraam3.classList.add("verdwijnen")
    kraam4.classList.add("verdwijnen")

    document.body.classList.remove("j1929")
    document.body.classList.add("j1935")
    document.body.classList.remove("j1953")
    document.body.classList.remove("j2004")

    speechBubble.classList.add("verdwijnen")
    speechBubble.textContent = "Met technologische vooruitgang worden kleurenfilms realiteit. Hierdoor zien we Mickey voor het eerst in kleur.";
})

hotdogButton3.addEventListener("click", function () {
    mickey1.classList.add("verdwijnen")
    mickey2.classList.add("verdwijnen")
    mickey3.classList.remove("verdwijnen")
    mickey4.classList.add("verdwijnen")

    kraam1.classList.add("verdwijnen")
    kraam2.classList.add("verdwijnen")
    kraam3.classList.remove("verdwijnen")
    kraam4.classList.add("verdwijnen")

    document.body.classList.remove("j1929")
    document.body.classList.remove("j1935")
    document.body.classList.add("j1953")
    document.body.classList.remove("j2004")

    speechBubble.classList.add("verdwijnen")
    speechBubble.textContent = "Mickey toont ons een unieke verschijning met sportieve wenkbrauwen, iets wat we niet meer terug zullen zien.";
})

hotdogButton4.addEventListener("click", function () {
    mickey1.classList.add("verdwijnen")
    mickey2.classList.add("verdwijnen")
    mickey3.classList.add("verdwijnen")
    mickey4.classList.remove("verdwijnen")

    kraam1.classList.add("verdwijnen")
    kraam2.classList.add("verdwijnen")
    kraam3.classList.add("verdwijnen")
    kraam4.classList.remove("verdwijnen")

    document.body.classList.remove("j1929")
    document.body.classList.remove("j1935")
    document.body.classList.remove("j1953")
    document.body.classList.add("j2004")

    speechBubble.classList.add("verdwijnen")
    speechBubble.textContent = "Met de komst van CGI laten Mickey en zijn vrienden ons een nieuw 3D-uiterlijk zien.";
})


mickey1.addEventListener("click", function () {
    speechBubble.classList.toggle("verdwijnen")
});

mickey2.addEventListener("click", function () {
    speechBubble.classList.toggle("verdwijnen")
});

mickey3.addEventListener("click", function () {
    speechBubble.classList.toggle("verdwijnen")
});

mickey4.addEventListener("click", function () {
    speechBubble.classList.toggle("verdwijnen")
});


