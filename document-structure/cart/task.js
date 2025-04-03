const addButtons = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');
const quantityControls = document.querySelectorAll('.product__quantity-control');

quantityControls.forEach(quantityControl => {
    quantityControl.addEventListener('click', () => {
        const value = quantityControl.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        console.log(value);

        if (quantityControl.classList.contains('product__quantity-control_dec')) {
            if (parseInt(value.innerText) === 1) {
                return;
            }
            value.innerText = parseInt(value.innerText) - 1;
        }

        if (quantityControl.classList.contains('product__quantity-control_inc')) {
            value.innerText = parseInt(value.innerText) + 1;
        }
    });
});

addButtons.forEach(addButton => {
    addButton.addEventListener('click', (e) => {
        const product = e.currentTarget.closest('.product');

        const cartProduct = document.createElement('div');
        cartProduct.dataset.id = product.dataset.id;

        const productsInCart = Array.from(cart.children);
        
        const index = productsInCart.findIndex(productInCart => productInCart.dataset.id === cartProduct.dataset.id);
        if (index !== -1) {
            productsInCart[index].querySelector('.cart__product-count').innerText = parseInt(productsInCart[index].querySelector('.cart__product-count').innerText) + parseInt(product.querySelector('.product__quantity-value').innerText);
            return;
        };

        cartProduct.classList.add('cart__product');
        
        cartProduct.innerHTML = `<img class="cart__product-image" src="${product.querySelector('.product__image').src}">
        <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerText}</div>`;

        cart.appendChild(cartProduct);
    });
});