//image on menu page 

let imagemapping = {
    "Peanut": {
        "TextContent":"Peanut Brittle",
        "imageFile": "products/peanutbrittle.png",
        "alttext": "peanut cookie"
    },
    "Lotus": {
        "TextContent":"Lotus Biscoff Stuffed",
        "imageFile": "products/lotusbiscoffstuffed.png",
        "alttext": "lotus stuffed cookie"
    },
    "DarkChocolate": {
        "TextContent":"Dark Chocolate Chunk",
        "imageFile": "products/darkchoc.png",
        "alttext": "dark chocolate cookie"
    },
    "WhiteChocolate": {
        "TextContent":"White Chocolate Chunk",
        "imageFile": "products/whitechoc.png",
        "alttext": "white chocolate cookie"
    },
    "nuthaz": {
        "TextContent":"Nutella Hazelnut Stuffed",
        "imageFile": "products/nutellahazelnut.png",
        "alttext": "nutella hazelnut cookie"
    },
    "Pista": {
        "TextContent":"Pistachio White Chocolate",
        "imageFile": "products/pitashio.png",
        "alttext": "pistachio cookie"
    }
};


function cookiedisplay(cookie) {
    console.log(cookie)
    const imagenode = document.getElementById('myImage');
    imagenode.src = imagemapping[cookie]["imageFile"];
    const textnode = document.getElementById('textlocation'); 
    textnode.innerHTML = imagemapping[cookie]["TextContent"];
    imagenode.alt = imagemapping[cookie]["alttext"];
}