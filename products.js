const products = [
  // Necklaces/ Sets
  {
    name: "Sea Beaded Necklace 🐋",
    description: "Bring ocean vibes everywhere you go with this delicate sea-inspired beaded necklace! Perfect for beach days and casual looks. 🌊",
    category: "Necklaces",
    price: 160,
    originalPrice: 220,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/kIkS2MZiFWMq.jpg?width=500&height=500"
  },
  {
    name: "TSITP Inspired Necklace",
    description: "Channel your inner summer girl with this 'The Summer I Turned Pretty' inspired necklace. So dreamy and cute! 🌸",
    category: "Necklaces",
    price: 160,
    originalPrice: 220,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/gXbywU8EhndV.jpg?width=500&height=500"
  },
  {
    name: "Pearl Necklace",
    description: "Classic and timeless pearl necklace for that elegant and soft glam look. ✨",
    category: "Necklaces",
    price: 299,
    originalPrice: 350,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/pf2TkGeiAsYb.jpg?width=500&height=500"
  },
  {
    name: "Mirrorball Necklace",
    description: "Sparkle like a disco ball with our mirrorball necklace. Perfect for parties and fun nights out! 🎉",
    category: "Necklaces",
    price: 250,
    originalPrice: 299,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/nuQQ3moK0EQX.jpg?width=500&height=500"
  },
  {
    name: "Beachy Necklace",
    description: "Laid-back and cute beachy necklace to complete your summer outfits! ☀️",
    category: "Necklaces",
    price: 220,
    originalPrice: 260,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/MwfkA7JvsY9R.jpg?width=500&height=500"
  },

  // Phone Charms and Keychains
  {
    name: "Seed Bead Phone Charm",
    description: "Brighten your phone with this adorable seed bead charm. Colorful, lightweight, and super cute! 📱✨",
    category: "Phone Charms",
    price: 150,
    originalPrice: 180,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/jssRDUq42FLq.jpg?width=500&height=500"
  },
  {
    name: "Mirrorball Phone Charm",
    description: "A sparkling mirrorball phone charm that adds a little party everywhere you go! 🪩",
    category: "Phone Charms",
    price: 199,
    originalPrice: 220,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/PSmfaOCwjAbm.jpg?width=500&height=500"
  },
  {
    name: "Pearl Phone Charm",
    description: "Elegant pearl charm for your phone. Classy, cute, and absolutely essential! 🤍",
    category: "Phone Charms",
    price: 180,
    originalPrice: 199,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/Ih2cYlIiM6gr.jpg?width=500&height=500"
  },
  {
    name: "Daylight Phone Charm ☀️",
    description: "Sunshine in your pocket! The daylight charm brings brightness to every day. 🌼",
    category: "Phone Charms",
    price: 150,
    originalPrice: 180,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/a4Yta65FTzuw.jpg?width=500&height=500"
  },
  {
    name: "Red Phone Charm",
    description: "Bold and lively red charm to make your phone stand out! 🔴✨",
    category: "Phone Charms",
    price: 180,
    originalPrice: 220,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/mgyeyJ16yjfo.jpg?width=500&height=500"
  },

  // Earrings
  {
    name: "Pearl Earrings",
    description: "Dainty pearl earrings that go with *everything*! Classy and beautiful. 🤍",
    category: "Earrings",
    price: 150,
    originalPrice: 199,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/VghtvYU4TZ2C.jpg?width=500&height=500"
  },
  {
    name: "Cherry Earrings",
    description: "Dainty pearl earrings that go with *everything*! Classy and beautiful. 🤍",
    category: "Earrings",
    price: 200,
    originalPrice: 250,
    image: "https://media-hosting.imagekit.io/5a2680c48e1f4d48/earring1.jpg?Expires=1840340492&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tKl-JBJL-kfodXkwKL0asZImO7q9tRs7EcNS5nXDBhVk2EyRJ7MOmx1AZAFvaB8ejlmHx~Yzyr5IK0vBL1xNTOqQLmnf-OJTMxWDubamNxxmpwHNBfvqIQd-QT9me02hmNjpzpXY899lvSWReINd5xJdCr2LnSKH9vVmBSVSyJm5V5AjRweT4iwaCuE2Z9Uf3RQcBNWPDUYTkPGpJGZ6PzIz8ml-SuK-Jo9PIMZnpBIRwvsHw-cD5PsppKMNi-~ISRA8ZeyxfH7-jLr87HcZsQV1FngsbylFY2RuwA~lIIBOn1Um9Y2y0JC8onQ7oC~YYVga2TXumVZIrsgDBBovNA__"
  },
  {
    name: "Green Bead Earrings",
    description: "Dainty pearl earrings that go with *everything*! Classy and beautiful. 🤍",
    category: "Earrings",
    price: 200,
    originalPrice: 250,
    image: "https://media-hosting.imagekit.io/22eae86b48b042c1/earring2.jpg?Expires=1840340492&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=y1MoAX2t4zlI8zjPThunlPhmCZKPmWfzRNbRptAs31dZLNH0U7zhsTPld5V2xhMpu5TYCk0V0lLOoWb8h1Z8hR4S6D~JyG79QMWnWTIE6SVN1Cwt4nOwCvX1ndQ0C9Hcy4SIVTUKVN~i7s57ABAkz0-vHY9dinr7LLf~a8HJW7a5MTesmbTL1lGFTxT93eu12Lp9rCMoPtef~tnNdh~chfJE6TwM86S1xoHdY7F9GNH2sPdWjoMgfH9vGSL9QL4qoRQFJyi3S2Rg2w0AungKs0OR0zuhjxk9-9JV2zw-~iKLKNC4wvl2yMOGAVI3C4wq8bWQxlOUnfYg9GfH3NsG6g__"
  },
  // Pearl Jewellery
  {
    name: "Pearl Earrings",
    description: "Simple yet elegant pearl earrings perfect for everyday glam! 🌟",
    category: "Pearl Jewellery",
    price: 150,
    originalPrice: 199,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/VghtvYU4TZ2C.jpg?width=500&height=500"
  },
  {
    name: "Pearl Phone Charm",
    description: "A classic pearl touch for your phone – elegant, chic, and timeless. 💎",
    category: "Pearl Jewellery",
    price: 180,
    originalPrice: 199,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/Ih2cYlIiM6gr.jpg?width=500&height=500"
  },
  {
    name: "Pearl Bracelet",
    description: "Soft, pretty, and classy pearl bracelet that adds magic to your wrist. ✨",
    category: "Pearl Jewellery",
    price: 150,
    originalPrice: 180,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/WWLXuTJceiSx.jpg?width=500&height=500"
  },
  {
    name: "Pearl Necklace",
    description: "Stay classy forever with this timeless pearl necklace! 🤍✨",
    category: "Pearl Jewellery",
    price: 299,
    originalPrice: 350,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/pf2TkGeiAsYb.jpg?width=500&height=500"
  },

  // Bracelets
  {
    name: "Pearl Bracelet",
    description: "Sweet and simple pearl bracelet, perfect for every outfit! 🎀",
    category: "Bracelets",
    price: 150,
    originalPrice: 180,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/WWLXuTJceiSx.jpg?width=500&height=500"
  },
  {
    name: "Coquette Bracelets",
    description: "Romantic coquette vibes with these dainty bracelets. Soft, feminine, and dreamy! 💖",
    category: "Bracelets",
    price: 180,
    originalPrice: 220,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/p3GyrdQAntBb.jpg?width=500&height=500"
  },
  {
    name: "Autumn Bracelets",
    description: "Cozy autumn colors in bracelet form! 🍂 A must-have for sweater weather looks.",
    category: "Bracelets",
    price: 180,
    originalPrice: 220,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/2wlBvv3vvv7O.jpg?width=500&height=500"
  },
  {
    name: "Purple Braded Bracelet",
    description: "Soft purple braided bracelet – pastel dreams come true! 💜",
    category: "Bracelets",
    price: 150,
    originalPrice: 190,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/Fp12WuRzxp1D.jpg?width=500&height=500"
  },
  {
    name: "Live n Lift Bracelet (UNISEX)",
    description: "Motivational 'Live n Lift' bracelet for fitness and good vibes! 💪",
    category: "Bracelets",
    price: 250,
    originalPrice: 299,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/Pi2RRifBmf32.jpg?width=500&height=500"
  },
  {
    name: "Candlelight Bracelet",
    description: "Elegant and sparkly candlelight bracelet for soft, luxurious nights. 🕯️",
    category: "Bracelets",
    price: 330,
    originalPrice: 380,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/ahysPoq5esNX.jpg?width=500&height=500"
  },
  {
    name: "Starfish Bracelets",
    description: "Whimsical starfish charm bracelets – perfect for mermaid souls! 🐚",
    category: "Bracelets",
    price: 180,
    originalPrice: 199,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/uefzP93VVOoe.jpg?width=500&height=500"
  },
  {
    name: "Halloween Bracelets",
    description: "Spooky-cute Halloween themed bracelets for the witchy season! 🎃🕸️",
    category: "Bracelets",
    price: 220,
    originalPrice: 250,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/A6JvRmMDHlW8.jpg?width=500&height=500"
  },
  {
    name: "Style Bracelet",
    description: "Trendy and minimalistic style bracelet for your daily fits! ✨",
    category: "Bracelets",
    price: 150,
    originalPrice: 199,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/4aOQ7opuXOBw.jpg?width=500&height=500"
  },
  {
    name: "Yellow Bracelets",
    description: "Sunny yellow bracelets that brighten up any look! ☀️",
    category: "Bracelets",
    price: 180,
    originalPrice: 220,
    image: "https://dm2buy-resize-dynamic-cebdcaefgydgh6hu.z02.azurefd.net/dm2buy/a9qV1ExsrMFo.jpg?width=500&height=500"
  }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const categoryFilters = document.getElementById('category-filters');

// Show Products Function
function showProducts(productsList) {
  productsContainer.innerHTML = ''; // Clear container first

  productsList.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <h3>${product.name}</h3>
      <p class="product-desc">${product.description}</p>
      <p class="product-price">
        <span class="old-price">₹${product.originalPrice}</span> 
        <span class="current-price">₹${product.price}</span>
      </p>
    `;

    // Save product on click
    productCard.addEventListener('click', () => {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
      window.location.href = 'product.html';
    });

    productsContainer.appendChild(productCard);
  });
}

// Show all products initially
showProducts(products);

// Create Filter Buttons
const categories = ['All', ...new Set(products.map(p => p.category))];

categories.forEach(category => {
  const button = document.createElement('button');
  button.innerText = category;
  button.classList.add('filter-btn');

  if (category === 'All') button.classList.add('active');

  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (category === 'All') {
      showProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      showProducts(filtered);
    }
  });

  categoryFilters.appendChild(button);
});

// If category from URL
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get('category');
  const allButtons = document.querySelectorAll('.filter-btn');

  if (selectedCategory && categories.includes(selectedCategory)) {
    const filtered = products.filter(p => p.category === selectedCategory);
    showProducts(filtered);

    allButtons.forEach(btn => {
      btn.classList.toggle('active', btn.innerText === selectedCategory);
    });
  } else {
    showProducts(products);
  }
});
