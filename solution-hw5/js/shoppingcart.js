let cart1 = [];
//declare class to update on add to cart step

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
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice, calculatedprice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.calculatedprice = calculatedprice;
    }

}

//Code to update cart1 with 4 rolls 
for (let i = 0; i < 1; i++) {
    additem1()
    additem2()
    additem3()
    additem4()
    //add parameters
}

//function for updating array
function addtocart() {
    let glaze = cinammonbunglazing[currentglazingindex].glazing;
    let packsizenum = cinammonbunpacksize[currentpacksizeindex].size;
    let addedRoll = new Roll(currentrollType, glaze, packsizenum, currentprice);
    cart.push(addedRoll);
    console.log("cart", cart);
}

//function for updating array
function additem1() {
    let glaze = "Sugar milk";
    let packsizenum = "1";
    let rollselect = "Original"
    updatecart(glaze, packsizenum, rollselect);
}

//function for updating array
function additem2() {
    let glaze = "Vanilla milk";
    let packsizenum = "12";
    let rollselect = "Walnut"
    updatecart(glaze, packsizenum, rollselect);
}

//function for updating array
function additem3() {
    let glaze = "Sugar milk";
    let packsizenum = "3";
    let rollselect = "Raisin"
    updatecart(glaze, packsizenum, rollselect);
}

//function for updating array
function additem4() {
    let glaze = "Keep original";
    let packsizenum = "3";
    let rollselect = "Apple";
    updatecart(glaze, packsizenum, rollselect);
}

//function to update and push

function updatecart(glaze, packsizenum, rollselect) {
    let base = rolls[rollselect].basePrice;
    let glazeidx = cinammonbunglazing.findIndex(x => x.glazing === glaze);
    let packsizeidx = cinammonbunpacksize.findIndex(x => x.size === packsizenum);
    let priceaddition = cinammonbunglazing[glazeidx].price;
    let packsizeadj = cinammonbunpacksize[packsizeidx].adjustment;
    let calculatedprice = ((base + priceaddition) * packsizeadj).toFixed(2);
    let addedRoll = new Roll(rollselect, glaze, packsizenum, base, calculatedprice);
    cart1.push(addedRoll);
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
    let cinnamonrolename =  this.rightside.querySelector('.cinnamonroll');
    cinnamonrolename.innerText = rollitem.type + " Cinammon Roll";
    let glazingholder =  this.rightside.querySelector('.glazing');
    glazingholder.innerText = "Glazing: " + rollitem.glazing;
    let packholder =  this.rightside.querySelector('.pack');
    packholder.innerText = "Pack Size: " + rollitem.size;
    this.priceupdate = cloned.querySelector('.kidsofcontainer');
    this.priceupdate.innerText = "$ " + rollitem.calculatedprice;
    let button = cloned.querySelector('.smallertext');
    console.log(button);
    button.addEventListener('click', () => {
        removecartitem(cloned,rollitem);
    });
    packholder.innerText = "Pack Size: " +rollitem.size;
    entry.append(cloned);
    updatetotalprice()
}

//update total price
function updatetotalprice() {
    let price = 0
    for (let i = 0; i < cart1.length; i++) {
    price = price + parseFloat(cart1[i].calculatedprice);
}
    let priceholder =  document.querySelector('.sep1');
    priceholder.innerText = "$" + price;
    console.log("price",price)
}
//initialize cart1
for (let i = 0; i < cart1.length; i++) {
    console.log(cart1[i]);
    displaycart(cart1[i]);
}

//removefunction
function removecartitem(cloned,rollitem) {
    console.log("remover");
    for (let i = 0; i < cart1.length; i++) {
        if (cart1[i]==rollitem) {
           cart1.splice(i,1);
           break;
          }
    }
    console.log(cart1);
    cloned.remove();
    updatetotalprice();
}


/*
Remove items from the cart
When users click the “Remove” link at any entry,  
the item should be removed from the cart array or set, 
the corresponding Roll entry should be removed from the DOM, 
and the price total at the bottom should be updated. 
Make sure to test your implementation against edge cases, e.g., when your cart is empty (cart.length == 0).
*/

