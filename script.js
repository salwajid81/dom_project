// Add your code to this file
let body = document.querySelector("body");
body.style.backgroundColor ="darkblue";

let title =document.querySelector("h1");
title.style.textDecoration = "underline";

let title2 =document.querySelector("h2");
title2.style.textAlign = "center";
title2.innerHTML = "Here are Pokemons's incredible Gen 1 starters!"

let pokemons = document.querySelector("img")
pokemons.style.border = "5px dotted orange";

let containers = document.getElementsByClassName("pokemon_images");
for (let i=0; i<containers.length; i++){
    containers[i].style.border ="5px dotted orange"
}

let footer = document.querySelector("footer");
footer.style.textDecoration = "underline";
footer.innerHTML ="All Star Code - DOM Project";
footer.style.fontFamily='Times-New-Roman'

let names = document.querySelectorAll("h3");
    for (let i = 0; i < names.length; i++) {
        names[i].style.color = "#FDEFA6";
        names[i].innerHTML += ('!');
    }
