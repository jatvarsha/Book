document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountElement = document.getElementById('cart-count'); // For header count
    
    // Load the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
        // Clear old items
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="padding: 1.5rem; text-align: center;">Your cart is empty.</p>';
            totalPriceElement.textContent = '0';
            updateCartCount(); // Update header count
            return;
        }

        cart.forEach(cartItem => {
            // Find the full product details from our 'products' list
            const product = products.find(p => p.id === cartItem.id);
            if (!product) return; // Skip if product not found

            const itemTotal = product.price * cartItem.quantity;
            total += itemTotal;

            // Create the HTML for the cart item
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <span>${product.title}</span>
                <span>₹${product.price}</span>
                <button class="quantity-btn" data-id="${product.id}" data-change="-1">-</button>
                <span>${cartItem.quantity}</span>
                <button class="quantity-btn" data-id="${product.id}" data-change="1">+</button>
                <span>Subtotal: ₹${itemTotal}</span>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        // Display the final total price (no decimals)
        totalPriceElement.textContent = total;

        // Add event listeners to all + and - buttons
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', updateQuantity);
        });

        updateCartCount(); // Update header count
    }

    function updateQuantity(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const change = parseInt(event.target.getAttribute('data-change'));

        let itemInCart = cart.find(item => item.id === productId);

        if (itemInCart) {
            itemInCart.quantity += change;

            // If quantity drops to 0 or less, remove the item
            if (itemInCart.quantity <= 0) {
                cart = cart.filter(item => item.id !== productId);
            }
        }
        
        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Refresh the cart display
        displayCartItems();
    }

    // --- Update Cart Count in Header (Copied from app.js) ---
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
        }
    }

    // --- Initial Load ---
    displayCartItems();
});