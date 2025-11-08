document.addEventListener('DOMContentLoaded', () => {
    // Get the containers for our new rows
    const discountRow = document.getElementById('discount-row');
    const newArrivalsRow = document.getElementById('new-arrivals-row');
    const fantasySciFiRow = document.getElementById('fantasy-scifi-row');
    const biographiesRow = document.getElementById('biographies-row');
    
    const cartCountElement = document.getElementById('cart-count');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // --- 1. Helper Function to create Star Ratings ---
    function getStarRating(rating) {
        let starsHTML = '';
        const fullStars = Math.floor(rating);
        const halfStar = (rating % 1) !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<span>★</span>'; // Full star
        }
        if (halfStar) {
            starsHTML += '<span class="half-star">★</span>'; 
        }
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<span>☆</span>'; // Empty star
        }
        return `<div class="star-rating">${starsHTML}</div>`;
    }

    // --- 2. Function to create a single product card HTML ---
    // THIS IS THE MOST IMPORTANT FUNCTION
    function createProductCard(product) {
        const stars = getStarRating(product.rating);
        
        return `
        <div class="product-card">

            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}">
                <div class="discount-badge">${product.discount}</div>
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="product-author">${product.author}</p>
                ${stars}
                <div class="price-container">
                    <span class="current-price">₹${product.price}</span>
                    <span class="old-price">₹${product.oldPrice}</span>
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
        `;
    }

    // --- 3. Display Products in their rows ---
    function displayProducts() {
        // Clear all rows first
        discountRow.innerHTML = '';
        newArrivalsRow.innerHTML = '';
        fantasySciFiRow.innerHTML = '';
        biographiesRow.innerHTML = '';

        // Distribute products into specific rows based on your products.js structure
        
        // Minimum 40% Discount (Products 1-5)
        products.slice(0, 5).forEach(product => {
            discountRow.innerHTML += createProductCard(product);
        });

        // New Arrivals (Products 6-10)
        products.slice(5, 10).forEach(product => {
            newArrivalsRow.innerHTML += createProductCard(product);
        });

        // Fantasy & Sci-Fi Bestsellers (Products 11-14)
        products.slice(10, 14).forEach(product => {
            fantasySciFiRow.innerHTML += createProductCard(product);
        });

        // Biographies & Memoirs (Products 15-17)
        products.slice(14, 17).forEach(product => {
            biographiesRow.innerHTML += createProductCard(product);
        });


        // Add event listeners to ALL new buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // --- 4. Add to Cart (Same as before) ---
    function addToCart(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        let existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        saveCart();
        updateCartCount();
    }

    // --- 5. Save Cart (Same as before) ---
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // --- 6. Update Cart Count (Same as before) ---
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountElement) { // Check if element exists before updating
            cartCountElement.textContent = totalItems;
        }
    }

    // --- Initial Setup ---
    // Check if the rows exist before trying to fill them
    if (discountRow && newArrivalsRow && fantasySciFiRow && biographiesRow) {
        displayProducts();
    }
    updateCartCount();
});