// Charger dynamiquement les produits
const products = [
    {
        name: 'Chaussures de running',
        price: 89.99,
        imageClass: 'bx bx-shoe',
        link: './products/running-shoes.html'
    },
    {
        name: 'Chaussures de trail',
        price: 99.99,
        imageClass: 'bx bx-shoe',
        link: './products/trail-shoes.html'
    },
    {
        name: 'Veste de running',
        price: 79.99,
        imageClass: 'bx bx-t-shirt',
        link: './products/running-jacket.html'
    }
];

// Récupérer la div des produits
const productList = document.getElementById('products');

// Panier pour stocker les produits ajoutés
let cart = [];

// Afficher les produits
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // Icône du produit
    const icon = document.createElement('i');
    icon.className = product.imageClass;
    productDiv.appendChild(icon);

    // Nom du produit
    const title = document.createElement('h3');
    title.textContent = product.name;
    productDiv.appendChild(title);

    // Prix du produit
    const price = document.createElement('p');
    price.textContent = `Prix : ${product.price.toFixed(2)}€`;
    productDiv.appendChild(price);

    // Bouton Ajouter au panier
    const button = document.createElement('button');
    button.textContent = 'Ajouter au panier';
    button.onclick = function() {
        addToCart(product.name, product.price);
    };
    productDiv.appendChild(button);

    // Lien local
    const link = document.createElement('a');
    link.href = product.link;
    link.textContent = 'Voir les détails';
    link.style.display = 'block';
    link.style.marginTop = '10px';
    productDiv.appendChild(link);

    // Ajouter le produit à la liste
    productList.appendChild(productDiv);
});

// Fonction pour ajouter des produits au panier
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`Le produit ${productName} à ${productPrice}€ a été ajouté au panier.`);
}

// Fonction pour ouvrir le popup du panier
function openCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Votre panier est vide</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price.toFixed(2)}€`;
            cartItems.appendChild(li);
        });
    }

    document.getElementById('cart-popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Fonction pour fermer le popup du panier
function closeCart() {
    document.getElementById('cart-popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Gérer l'ouverture et la fermeture du popup
document.getElementById('view-cart-btn').onclick = openCart;
document.querySelector('.close-btn').onclick = closeCart;
document.getElementById('overlay').onclick = closeCart;

