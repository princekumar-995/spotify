let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalElement = document.getElementById("total-price");
    
    cartList.innerHTML = "";
    cart.forEach((product) => {
        let li = document.createElement("li");
        li.textContent = `${product.item} - $${product.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    totalElement.textContent = totalPrice.toFixed(2);
}
