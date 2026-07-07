// Array containing available store items, each defined by an ID, name, category, pricing, unit size, and image URL
const products = [
    { id: 1, name: "Fresh Apple", category: "Fruits", price: 49, unit: "1kg", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400" },
    { id: 2, name: "Banana", category: "Fruits", price: 30, unit: "12 pcs", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400" },
    { id: 3, name: "Spinach", category: "Vegetables", price: 20, unit: "500g", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400" },
    { id: 4, name: "Milk", category: "Dairy", price: 60, unit: "1L", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400" },
    { id: 5, name: "Eggs", category: "Dairy", price: 90, unit: "12 pcs", img: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=400" },
    { id: 6, name: "Coffee", category: "Beverages", price: 250, unit: "200g", img: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400" },
    { id: 7, name: "Grapes", category: "Fruits", price: 90, unit: "1kg", img: "data:image/jpeg;base64,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" },
    { id: 8, name: "Carrot", category: "Vegetables", price: 30, unit: "500g", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400" },
    { id: 9, name: "Almond Milk", category: "Dairy", price: 150, unit: "1L", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJ2penNxm_pAvWEjuCUl1IHpF_XxCouUmuNZ_6z_ZOQ&s=10" },
    { id: 10, name: "Green Tea", category: "Beverages", price: 200, unit: "100g", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkB0Nts44o92oSihDWLegbgEDm04n-4XH_1gHCYL0Pw&s=10" },
    { id: 11, name: "Brown Bread", category: "Bakery", price: 40, unit: "400g", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 12, name: "Soap", category: "Personal Care", price: 50, unit: "1 bar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnRoduoYiMvJc1gxUN0IaPT3WJYdjKOr0unAVFb_5iA&s=10" }
];


// Stores the current user's selections and the currently filtered product category
let cart = {}, activeCategory = "All";



/**
 * Updates the DOM to reflect the current product list, search filters, and cart status.
 */
function render() {
    const grid = document.getElementById('productGrid');
    const term = document.getElementById('searchInput').value.toLowerCase();
    const cats = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Beverages', 'Bakery', 'Personal Care'];
    
    // Generates the category navigation buttons
    document.getElementById('categoryNav').innerHTML = cats.map(c => 
        `<button onclick="activeCategory='${c}'; render()" class="category-btn ${activeCategory===c?'active':''}">${c}</button>`
    ).join('');

    // Filters the products based on the selected category and search input
    const filtered = products.filter(p => (activeCategory==='All'||p.category===activeCategory) && p.name.toLowerCase().includes(term));
    
    // Adds 'hidden' if filtered.length is 0, removes it if > 0
document.getElementById('noProducts').classList.toggle('hidden', filtered.length === 0);

    // Builds the product display cards
    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}" class="product-image">
            <div class="product-info">
                <h4 class="product-name">${p.name}</h4>
                <p class="product-weight">${p.unit}</p>
                <div class="product-bottom">
                    <p class="product-price">₹${p.price}</p>
                    ${cart[p.id] ? 
                        `<div class="qty-controller"><button onclick="update(${p.id}, -1)" class="qty-btn">-</button> <span class="qty-count">${cart[p.id].qty}</span> <button onclick="update(${p.id}, 1)" class="qty-btn">+</button></div>` 
                        : `<button onclick="update(${p.id}, 1)" class="btn-add">Add</button>`}
                </div>
            </div>
        </div>
    `).join('');
    
    // Calculates the cart totals
    let total = 0, items = 0;
    for(let id in cart) { total += cart[id].qty * cart[id].price; items += cart[id].qty; }
    
    // Updates UI elements for cart summary
    document.getElementById('cartCountBadge').innerText = items;
    document.getElementById('summaryTotalItems').innerText = items;
    document.getElementById('summaryTotalAmount').innerText = total;
    document.getElementById('cartSummary').classList.toggle('visible', items > 0);
}

/**
 * Adjusts the quantity of a specific item in the cart.
 * @param {number} id - The unique product identifier.
 * @param {number} d - The change in quantity (e.g., 1 or -1).
 */
function update(id, d) {
    if(!cart[id]) cart[id] = { ...products.find(p=>p.id===id), qty: 0 };
    cart[id].qty += d;
    if(cart[id].qty <= 0) delete cart[id];
    render();
}

/**
 * Handles the checkout process, alerts the user, and resets the cart.
 */
function checkout() { 
    const alertBox = document.getElementById('customAlert');
    alertBox.classList.add('show');
    setTimeout(() => alertBox.classList.remove('show'), 3000);
    cart={}; 
    render(); 
}

// Event listeners
document.getElementById('searchInput').oninput = render;
document.getElementById('checkoutBtn').onclick = checkout;

// Initial render call
render();