// Liste des produits par catégorie et marque
const productData = {
    shoes: {
        salomon: [
            { name: 'Chaussures Trail Salomon', price: 120.99 },
            { name: 'Chaussures Running Salomon', price: 110.99 }
        ],
        decathlon: [
            { name: 'Chaussures Trail Decathlon', price: 80.99 },
            { name: 'Chaussures Running Decathlon', price: 70.99 }
        ],
        hoka: [
            { name: 'Chaussures Trail Hoka', price: 130.99 }
        ],
        asics: [
            { name: 'Chaussures Running Asics', price: 90.99 }
        ]
    },
    clothes: {
        salomon: [
            { name: 'Veste Running Salomon', price: 79.99 }
        ],
        decathlon: [
            { name: 'Short Running Decathlon', price: 19.99 }
        ]
    },
    accessories: {
        salomon: [
            { name: 'Sac à dos Trail Salomon', price: 59.99 }
        ]
    }
};

// Panier
let cart = [];

// Mettre à jour les sous-catégories en fonction de la sélection
function updateSubCategory(category, subCategoryElementId) {
    const selectedBrand = document.getElementById(category === 'shoes' ? 'main-category' : category === 'clothes' ? 'main' : 'choose').value;
    const subCategorySelect = document.getElementById(subCategoryElementId);
    
    // Réinitialiser la sous-catégorie
    subCategorySelect.innerHTML = '<option value="">Sélectionnez une sous-catégorie</option>';

    // Si une marque est sélectionnée, remplir les sous-catégories
    if (selectedBrand && productData[category][selectedBrand]) {
        productData[category][selectedBrand].forEach((product, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = product.name;
            subCategorySelect.appendChild(option);
        });
    }
}

// Afficher les détails du produit sélectionné
function showProductDetails(category) {
    const subCategoryElementId = category === 'shoes' ? 'product' : category === 'clothes' ? 'sub' : 'accessories-product';
    const selectedIndex = document.getElementById(subCategoryElementId).value;
    const selectedBrand = document.getElementById(category === 'shoes' ? 'main-category' : category === 'clothes' ? 'main' : 'choose').value;

    if (selectedIndex) {
        const selectedProduct = productData[category][selectedBrand][selectedIndex];
        console.log(`Produit sélectionné : ${selectedProduct.name} - ${selectedProduct.price}€`);
    }
}

// Ajouter un produit au panier
function addToCart(category) {
    const subCategoryElementId = category === 'shoes' ? 'product' : category === 'clothes' ? 'sub' : 'accessories-product';
    const selectedIndex = document.getElementById(subCategoryElementId).value;
    const selectedBrand = document.getElementById(category === 'shoes' ? 'main-category' : category === 'clothes' ? 'main' : 'choose').value;

    if (selectedIndex) {
        const selectedProduct = productData[category][selectedBrand][selectedIndex];
        cart.push(selectedProduct);
        updateCartDisplay();
        alert(`Ajouté au panier: ${selectedProduct.name}`);
    }
}

// Mettre à jour l'affichage du panier
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toFixed(2)}€`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = `Total : ${total.toFixed(2)}€`;
}

// Fonction pour ouvrir le popup du panier
function openCart() {
    document.getElementById('cart-popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Fonction pour fermer le popup du panier
function closeCart() {
    document.getElementById('cart-popup').style.display = 'none';
}