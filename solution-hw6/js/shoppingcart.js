//Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice, calculatedprice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.calculatedprice = calculatedprice;
    }
}

//Roll function update
function displaycart(rollitem) {
    const template = document.querySelector('#carttemp');
    const cloned1 = template.content.cloneNode(true)
    const cloned = cloned1.querySelector('.containercart2');
    let entry = document.querySelector('.appendkids');
    this.imagereplace = cloned.querySelector('.productpicture3');
    let image = rolls[rollitem.type].imageFile;
    this.imagereplace.src = './products/' + image;
    this.rightside = cloned.querySelector('.kidsofcontainer1');
    let cinnamonrolename = this.rightside.querySelector('.cinnamonroll');
    cinnamonrolename.innerText = rollitem.type + " Cinammon Roll";
    let glazingholder = this.rightside.querySelector('.glazing');
    glazingholder.innerText = "Glazing: " + rollitem.glazing;
    let packholder = this.rightside.querySelector('.pack');
    packholder.innerText = "Pack Size: " + rollitem.size;
    this.priceupdate = cloned.querySelector('.kidsofcontainer');
    this.priceupdate.innerText = "$ " + rollitem.calculatedprice;
    let button = cloned.querySelector('.smallertext');
    button.addEventListener('click', () => {
        removecartitem(cloned, rollitem);
    });
    packholder.innerText = "Pack Size: " + rollitem.size;
    entry.append(cloned);
    updatetotalprice()
}

//update total price
function updatetotalprice() {
    let price = 0
    let shoppingcart = JSON.parse(localStorage.getItem("shoppingcart"));
    for (let i = 0; i < shoppingcart.length; i++) {
        price = price + parseFloat(shoppingcart[i].calculatedprice);
    }
    let priceholder = document.querySelector('.sep1');
    priceholder.innerText = "$" + price.toFixed(2);
}

//initialize shoppingcart

function initializecart() {
    let shoppingcart = JSON.parse(localStorage.getItem("shoppingcart"));
    if (shoppingcart == null) {
        shoppingcart = []
    }
    for (let i = 0; i < shoppingcart.length; i++) {
        displaycart(shoppingcart[i]);
    }
}

//removefunction
function removecartitem(cloned, rollitem) {
    let rollremoved = new Roll(rollitem.type, rollitem.glazing, rollitem.size, rollitem.basePrice, rollitem.calculatedprice);
    let shoppingcart1 = JSON.parse(localStorage.getItem("shoppingcart"));
    for (let i = 0; i < shoppingcart1.length; i++) {
        const reconstructedroll = new Roll(shoppingcart1[i].type, shoppingcart1[i].glazing, shoppingcart1[i].size, shoppingcart1[i].basePrice, shoppingcart1[i].calculatedprice);
        if (JSON.stringify(reconstructedroll) === JSON.stringify(rollremoved)) {
            shoppingcart1.splice(i, 1);
            localStorage.setItem("shoppingcart", JSON.stringify(shoppingcart1));
            console.log("Shopping Cart: ",localStorage.getItem("shoppingcart"));
            break;
        }
    }
    cloned.remove();
    updatetotalprice();
}
