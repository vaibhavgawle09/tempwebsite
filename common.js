// common.js

// Function to update badge counts
function updateBadges() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    document.getElementById('cart-count').innerText = cartItems.length;
    document.getElementById('wishlist-count').innerText = wishlistItems.length;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    updateBadges();
  });
  