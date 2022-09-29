//Storing current state of option dropdowns
let currentglazingindex = 0;
let currentpacksizeindex = 0;

//Arrays for constants
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

//Populate option dropdowns
let select1 = document.querySelector("#glazings");
for (let i = 0; i < cinammonbunglazing.length; i++) {
    const opt = document.createElement('option');
    opt.value = cinammonbunglazing[i].glazing;
    opt.innerHTML = cinammonbunglazing[i].glazing;
    select1.appendChild(opt);
}

let select2 = document.querySelector("#packsize");
for (let i = 0; i < cinammonbunpacksize.length; i++) {
    const opt = document.createElement('option');
    opt.value = cinammonbunpacksize[i].size;
    opt.innerHTML = cinammonbunpacksize[i].size;
    select2.appendChild(opt);
}

//What to do if glazing is updated
document.querySelector("#glazings").addEventListener('change', function () {
    let idx = cinammonbunglazing.findIndex(x => x.glazing === this.value);
    currentglazingindex = idx;
    updateprice();
});

//What to do if packsize is updated
document.querySelector("#packsize").addEventListener('change', function () {
    let idx = cinammonbunpacksize.findIndex(x => x.size === this.value);
    currentpacksizeindex = idx;
    updateprice();
});

//function for updating the number 
function updateprice() {
    let priceaddition = cinammonbunglazing[currentglazingindex].price;
    let packsizeadj = cinammonbunpacksize[currentpacksizeindex].adjustment;
    document.querySelector("#price").innerHTML = "$" + ((2.49 + priceaddition) * packsizeadj).toFixed(2);
}
