let currentglazingindex = 0;
let currentpacksizeindex = 0;
let cart = [];

//declare class to update on add to cart step
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

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

//function for updating the number 
document.querySelector("#glazings").addEventListener('change', function () {
    let idx = cinammonbunglazing.findIndex(x => x.glazing === this.value);
    currentglazingindex = idx;
    updateprice()
});

//function for updating the number 
document.querySelector("#packsize").addEventListener('change', function () {
    let idx = cinammonbunpacksize.findIndex(x => x.size === this.value);
    currentpacksizeindex = idx;
    updateprice()
});

//storeconstants
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const currentrollType = params.get('roll');
const currentprice = rolls[currentrollType].basePrice;
const currentimage = rolls[currentrollType].imageFile;


// Update the header text
const headerElement = document.querySelector('.largertext');
headerElement.innerText = currentrollType + " Cinnamon Roll";

// Update the image
let ImageElement = document.querySelector('.productpicture2');
ImageElement.src = './products/' + currentimage;

// Update the base price
document.querySelector("#price").innerHTML = "$" + currentprice;

//function for updating the calculated price at the bottom
function updateprice() {
    let priceaddition = cinammonbunglazing[currentglazingindex].price;
    let packsizeadj = cinammonbunpacksize[currentpacksizeindex].adjustment;
    document.querySelector("#price").innerHTML = "$" + ((currentprice + priceaddition) * packsizeadj).toFixed(2);
}

//function for updating array
function addtocart() {
    let glaze = cinammonbunglazing[currentglazingindex].glazing;
    let packsizenum = cinammonbunpacksize[currentpacksizeindex].size;
    let addedRoll = new Roll(currentrollType, glaze, packsizenum, currentprice);
    cart.push(addedRoll);
    console.log(cart);
}