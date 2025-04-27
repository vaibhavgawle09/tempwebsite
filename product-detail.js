// product-detail.js

document.addEventListener('DOMContentLoaded', () => {
    const productDetailContainer = document.getElementById('product-detail');
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
  
    if (selectedProduct) {
      productDetailContainer.innerHTML = `
        <div class="product-detail-card">
          <img src="${selectedProduct.image}" alt="${selectedProduct.name}" class="detail-image" />
          <div class="detail-info">
            <h2 class="detail-title">${selectedProduct.name}</h2>
            <p class="detail-description">${selectedProduct.description}</p>
            <p class="detail-price">
              <span class="old-price">₹${selectedProduct.originalPrice}</span>
              <span class="current-price">₹${selectedProduct.price}</span>
            </p>
  
            <div class="quantity-selector">
              <label for="quantity">Quantity:</label>
              <input type="number" id="quantity" min="1" value="1" />
            </div>
  
            <div class="detail-buttons">
            <button id="add-to-cart-btn" class="add-to-cart-btn">Add to Cart 🛒</button>
            <button id="buy-now-btn" class="buy-now-btn">Buy Now 💖</button>
            <button id="add-to-wishlist-btn" class="add-to-wishlist-btn">Add to Wishlist 🩷</button>
            </div>

  
            <div class="shipping-care">
              <h4>Shipping & Care</h4>
              <p>Ships within 2–5 days. Handle with love for longer life! ✨</p>
            </div>
          </div>
        </div>
      `;
  
      updateBadges();
  
      // Set up button event listeners
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    addToCart({ ...selectedProduct, quantity });
    alert('Added to cart!');
  });
  
  document.getElementById('buy-now-btn').addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    addToCart({ ...selectedProduct, quantity });
    window.location.href = 'cart.html';
  });
  
  // ⭐ New: Wishlist button
  document.getElementById('add-to-wishlist-btn').addEventListener('click', () => {
    addToWishlist(selectedProduct);
    alert('Added to wishlist!');
  });
  
  
    } else {
      productDetailContainer.innerHTML = `<p>Product not found. Please go back and select a product!</p>`;
    }
  });
  
  // Update cart and wishlist badge counts
  function updateBadges() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    document.getElementById('cart-count').innerText = cartItems.length;
    document.getElementById('wishlist-count').innerText = wishlistItems.length;
  }
  
  // Add product to cart
  function addToCart(product) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateBadges();
  }
  
  // Add product to wishlist (you may use this somewhere else)
  function addToWishlist(product) {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    wishlistItems.push(product);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    updateBadges();
  }
  