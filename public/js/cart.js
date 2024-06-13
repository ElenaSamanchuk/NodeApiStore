let object = {};
let count = 0;
let fullPrice = 0;
for (let i = 0; i < localStorage.length; i++) {
    object[i] = JSON.parse(localStorage.key(i));
    console.log(object[i][0].id);
}
console.log(object);
let cart = document.querySelector('.cart');  
cart.innerHTML = '';
count = 0;
async function order(id) { 
    await fetch(`https://fakestoreapi.com/products/${id}`).then(response=>response.json()).then(json=>data = json);
    console.log(data); 
    let cart = document.querySelector('.cart');    
    cart.innerHTML += ` 
        <div class="order"> 
            <div class="image"><img src="${data.image}" alt="image"></div>
            <div class="title">${data.title}</div>
            <div class="price">${data.price}$</div>
        </div> 
    `; 
} 
for (key in object) {
    order(object[key][key].id);
    console.log(object[key][key].id);
    fullPrice += Number(object[key][key].price);
}
let full = document.querySelector('.full');  
full.innerHTML = `${fullPrice}$`;