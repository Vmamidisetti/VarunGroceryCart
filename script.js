/**
 * Grocery Store Application Logic
 */

const products = [
    { id: 1, name: "Fresh Apple", category: "Fruits", price: 49, unit: "1kg", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400" },
    { id: 2, name: "Banana", category: "Fruits", price: 30, unit: "12 pcs", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400" },
    { id: 3, name: "Spinach", category: "Vegetables", price: 20, unit: "500g", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400" },
    { id: 4, name: "Milk", category: "Dairy", price: 60, unit: "1L", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400" },
    { id: 5, name: "Eggs", category: "Dairy", price: 90, unit: "12 pcs", img: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=400" },
    { id: 6, name: "Coffee", category: "Beverages", price: 250, unit: "200g", img: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400" },
    { id: 7, name: "Grapes", category: "Fruits", price: 90, unit: "1kg", img: "https://i.pinimg.com/736x/a3/68/16/a3681615de5a0abd6a0f360c43531597.jpg" },
    { id: 8, name: "Carrot", category: "Vegetables", price: 30, unit: "500g", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400" },
    { id: 9, name: "Almond Milk", category: "Dairy", price: 150, unit: "1L", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJ2penNxm_pAvWEjuCUl1IHpF_XxCouUmuNZ_6z_ZOQ&s=10" },
    { id: 10, name: "Green Tea", category: "Beverages", price: 200, unit: "100g", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkB0Nts44o92oSihDWLegbgEDm04n-4XH_1gHCYL0Pw&s=10" },
    { id: 11, name: "Brown Bread", category: "Bakery", price: 40, unit: "400g", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 12, name: "Soap", category: "Personal Care", price: 50, unit: "1 bar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnRoduoYiMvJc1gxUN0IaPT3WJYdjKOr0unAVFb_5iA&s=10" }
];

let cart = {}; 
let activeCategory = "All";

function render() {
    const grid = document.getElementById('productGrid');
    const term = document.getElementById('searchInput').value.toLowerCase();
    const cats = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Beverages', 'Bakery', 'Personal Care'];
    
    // Refresh Navigation
    document.getElementById('categoryNav').innerHTML = cats.map(c => 
        `<button onclick="activeCategory='${c}'; render()" class="category-btn ${activeCategory===c?'active':''}">${c}</button>`
    ).join('');

    // Filtering logic
    const filtered = products.filter(p => 
        (activeCategory === 'All' || p.category === activeCategory) && 
        p.name.toLowerCase().includes(term)
    );
    
    document.getElementById('noProducts').classList.toggle('hidden', filtered.length > 0);

    // Build grid HTML
    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}" class="product-image">
            <div class="product-info">
                <h4 class="product-name">${p.name}</h4>
                <p class="product-weight">${p.unit}</p>
                <div class="product-bottom">
                    <p class="product-price">₹${p.price}</p>
                    ${cart[p.id] ? 
                        `<div class="qty-controller">
                            <button onclick="update(${p.id}, -1)" class="qty-btn">-</button> 
                            <span class="qty-count">${cart[p.id].qty}</span> 
                            <button onclick="update(${p.id}, 1)" class="qty-btn">+</button>
                        </div>` 
                        : `<button onclick="update(${p.id}, 1)" class="btn-add">Add</button>`}
                </div>
            </div>
        </div>
    `).join('');
    
    // Calculate totals
    let total = 0, items = 0;
    for(let id in cart) { 
        total += cart[id].qty * cart[id].price; 
        items += cart[id].qty; 
    }
    
    document.getElementById('cartCountBadge').innerText = items;
    document.getElementById('summaryTotalItems').innerText = items;
    document.getElementById('summaryTotalAmount').innerText = total;
    document.getElementById('cartSummary').classList.toggle('visible', items > 0);
}

function update(id, d) {
    if(!cart[id]) cart[id] = { ...products.find(p=>p.id===id), qty: 0 };
    cart[id].qty += d;
    if(cart[id].qty <= 0) delete cart[id];
    render();
}

function checkout() { 
    const alertBox = document.getElementById('customAlert');
    alertBox.classList.add('show');
    setTimeout(() => alertBox.classList.remove('show'), 3000);
    cart = {}; 
    render(); 
}

// Attach listeners safely
document.getElementById('searchInput').addEventListener('input', render);
document.getElementById('checkoutBtn').addEventListener('click', checkout);

// Initial Load
render();
