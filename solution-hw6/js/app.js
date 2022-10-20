//variable section
let currentglazingindex = 0;
let currentpacksizeindex = 0;

//declare class to update on add to cart step
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice, calculatedprice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.calculatedprice = calculatedprice;
    }

}

//storeconstants
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const currentrollType = params.get('roll');
const currentprice = rolls[currentrollType].basePrice;
const currentimage = rolls[currentrollType].imageFile;


//Populate option dropdowns
const cinammonbunglazing = [
    { glazing: "Keep original", price: 0.00 },
    { glazing: "Sugar milk", price: 0.00 },
    { glazing: "Vanilla milk", price: 0.50 },
    { glazing: "Double chocolate", price: 1.50 }
];

const cinammonbunpacksize = [
    { size: "1", adjustment: 1.0 },
    { size: "3", adjustment: 3.0 },
    { size: "6", adjustment: 5.0 },
    { size: "12", adjustment: 10.0 }
];



//What to do if glazing is updated
let select1 = document.querySelector("#glazings");
for (let i = 0; i < cinammonbunglazing.length; i++) {
    const opt = document.createElement('option');
    opt.value = cinammonbunglazing[i].glazing;
    opt.innerHTML = cinammonbunglazing[i].glazing;
    select1.appendChild(opt);
}

//What to do if packsize is updated
let select2 = document.querySelector("#packsize");
for (let i = 0; i < cinammonbunpacksize.length; i++) {
    const opt = document.createElement('option');
    opt.value = cinammonbunpacksize[i].size;
    opt.innerHTML = cinammonbunpacksize[i].size;
    select2.appendChild(opt);
}


//update section
document.querySelector("#packsize").addEventListener('change', onpacksizeupdate);
document.querySelector("#glazings").addEventListener('change', onglazingupdate);

// Update the header text
const headerElement = document.querySelector('.largertext');
headerElement.innerText = currentrollType + " Cinnamon Roll";

// Update the image
let ImageElement = document.querySelector('.productpicture2');
ImageElement.src = './products/' + currentimage;

// Update the base price
document.querySelector("#price").innerHTML = "$" + currentprice;

//function update
//function for updating the number 
function onglazingupdate() {
    let idx = cinammonbunglazing.findIndex(x => x.glazing === this.value);
    currentglazingindex = idx;
    updateprice()
}

//function for updating the number 
function onpacksizeupdate() {
    let idx = cinammonbunpacksize.findIndex(x => x.size === this.value);
    currentpacksizeindex = idx;
    updateprice()
}

//function for updating the calculated price at the bottom
function updateprice() {
    let priceaddition = cinammonbunglazing[currentglazingindex].price;
    let packsizeadj = cinammonbunpacksize[currentpacksizeindex].adjustment;
    document.querySelector("#price").innerHTML = "$" + ((currentprice + priceaddition) * packsizeadj).toFixed(2);
}

function addtocart() {
    let glaze = cinammonbunglazing[currentglazingindex].glazing;
    let packsizenum = cinammonbunpacksize[currentpacksizeindex].size;
    updatecart(glaze, packsizenum, currentprice, currentrollType)
}


function updatecart(glaze, packsizenum, base1, rolltype) {
    let base = base1;
    let glazeidx = cinammonbunglazing.findIndex(x => x.glazing === glaze);
    let packsizeidx = cinammonbunpacksize.findIndex(x => x.size === packsizenum);
    let priceaddition = cinammonbunglazing[glazeidx].price;
    let packsizeadj = cinammonbunpacksize[packsizeidx].adjustment;
    let calculatedprice = ((base + priceaddition) * packsizeadj).toFixed(2);
    let addedRoll = new Roll(rolltype, glaze, packsizenum, base, calculatedprice);
    let shoppingcart = JSON.parse(localStorage.getItem("shoppingcart"));
    shoppingcart.push(addedRoll);
    localStorage.setItem("shoppingcart", JSON.stringify(shoppingcart));
    console.log("Shopping Cart: ",localStorage.getItem("shoppingcart"));

}



function checkinitializecart() {
    let shoppingcart = JSON.parse(localStorage.getItem("shoppingcart"));
    if (shoppingcart == null) {
        shoppingcart = []
        localStorage.setItem("sh2oppingcart", JSON.stringify(shoppingcart));
    }
}