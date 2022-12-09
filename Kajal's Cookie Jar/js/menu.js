//image on menu page 

let imagemapping = {
    "Peanut": {
        "TextContent":"Peanut Brittle",
        "imageFile": "products/peanutbrittle.png"
    },
    "Lotus": {
        "TextContent":"Lotus Biscoff Stuffed",
        "imageFile": "products/lotusbiscoffstuffed.png"
    },
    "DarkChocolate": {
        "TextContent":"Dark Chocolate Chunk",
        "imageFile": "products/darkchoc.jpg"
    },
    "WhiteChocolate": {
        "TextContent":"White Chocolate Chunk",
        "imageFile": "products/whitechoc.jpg"
    },
    "nuthaz": {
        "TextContent":"Nutella Hazelnut Stuffed",
        "imageFile": "products/nutellahazelnut.jpg"
    },
    "Pista": {
        "TextContent":"Pistachio White Chocolate",
        "imageFile": "products/pitashio.png"
    }
};


function cookiedisplay(cookie) {
    console.log(cookie)
    const imagenode = document.getElementById('myImage');
    imagenode.src = imagemapping[cookie]["imageFile"];
    const textnode = document.getElementById('textlocation'); 
    textnode.innerHTML = imagemapping[cookie]["TextContent"];
}