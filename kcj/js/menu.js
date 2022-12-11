//script for navigation options

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//image on menu page 

let imagemapping = {
    "Peanut": {
        "TextContent":"Peanut Brittle",
        "imageFile": "../products/peanutbrittle.png",
        "alttext": "peanut cookie"
    },
    "Lotus": {
        "TextContent":"Lotus Biscoff Stuffed",
        "imageFile": "../products/lotusbiscoffstuffed.png",
        "alttext": "lotus stuffed cookie"
    },
    "DarkChocolate": {
        "TextContent":"Dark Chocolate Chunk",
        "imageFile": "../products/darkchoc.png",
        "alttext": "dark chocolate cookie"
    },
    "WhiteChocolate": {
        "TextContent":"White Chocolate Chunk",
        "imageFile": "../products/whitechoc.png",
        "alttext": "white chocolate cookie"
    },
    "nuthaz": {
        "TextContent":"Nutella Hazelnut Stuffed",
        "imageFile": "../products/nutellahazelnut.png",
        "alttext": "nutella hazelnut cookie"
    },
    "Pista": {
        "TextContent":"Pistachio White Chocolate",
        "imageFile": "../products/pitashio.png",
        "alttext": "pistachio cookie"
    }
};

//function to display image on menu page 


function cookiedisplay(cookie) {
    console.log(cookie)
    const imagenode = document.getElementById('myImage');
    imagenode.src = imagemapping[cookie]["imageFile"];
    const textnode = document.getElementById('textlocation'); 
    textnode.innerHTML = imagemapping[cookie]["TextContent"];
    imagenode.alt = imagemapping[cookie]["alttext"];
}