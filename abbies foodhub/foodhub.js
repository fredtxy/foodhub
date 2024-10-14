function addToCart(event) {
    const itemCard = event.target.closest('.catecards');
    const cloneCard = itemCard.cloneNode(true);
    const button = cloneCard.querySelector('button');
if(button) button.remove();
document.getElementById('cartItems').appendChild(cloneCard);
}

const addToCartButtons = document.querySelectorAll('.add-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});