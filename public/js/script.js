let data;
let object = {};
let count = 0;
localStorage.clear();
async function getProducts() {
    await fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>data = json);
    console.log(data);
    showProducts(data);
} 
getProducts();
function showProducts(data) { 
    const products = document.querySelector('.products'); 
    products.innerHTML = ''; 
    data.forEach((product) => { 
        const element = document.createElement('div'); 
        element.classList.add('product'); 
        element.innerHTML = ` 
            <div class="image"><img src="${product.image}" alt="image"></div>
            <div class="title">Title ${product.title}</div>
            <div class="category">Category ${product.category}</div>
            <div class="price">Price ${product.price}$</div>
            <div class="rating">Rate <span class="${getClassByRate(product.rating.rate)}">${product.rating.rate}</span> count ${product.rating.count} <span class="stars">${'★'.repeat(Math.floor(product.rating.rate))}</span></div>
        `; 
        element.addEventListener('click', () => {openModal(product.id)});
        products.appendChild(element); 
    });    
};
function getClassByRate(rating) { 
    if (rating >= 4.5) { 
        return 'green' 
    } else if (rating > 3) { 
        return 'orange' 
    } else { 
        return 'red' 
    } 
}
const modal = document.querySelector('.modal'); 
async function openModal(id) { 
    await fetch(`https://fakestoreapi.com/products/${id}`).then(response=>response.json()).then(json=>data = json);
    console.log(data);     
    modal.classList.add('show'); 
    modal.innerHTML = ` 
        <div class="modal_card"> 
            <div class="image"><img src="${data.image}" alt="image"></div>
            <div class="title">Title ${data.title}</div>
            <div class="category">Category ${data.category}</div>
            <div class="description">Description ${data.description}</div>
            <div class="price">Price ${data.price}$</div>
            <div class="rating">Rate <span class="${getClassByRate(data.rating.rate)}">${data.rating.rate}</span> count ${data.rating.count} <span class="stars">${'★'.repeat(Math.floor(data.rating.rate))}</span></div> 
            <div class="block">
                <button class = "add">Корзина</button>
                <button class="btn">Закрыть</button> 
            </div>
        </div> 
    `; 
    const btn = document.querySelector('.btn'); 
    btn.addEventListener('click', () => {closeModal()}); 
    const cart = document.querySelector('.add');
    cart.addEventListener('click', () => {
        object[count] = {
            'id' : id,
            'price' : data.price
        }
        localStorage.setItem(JSON.stringify(object), JSON.stringify(object)); 
        console.log(localStorage.key(JSON.stringify(object))); 
        count++;
        alert('Добавлено');
    });
} 
function closeModal() { 
    modal.classList.remove('show');
} 
