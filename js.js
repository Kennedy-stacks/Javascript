let cart = JSON.parse(localStorage.getItem("cart")) || [];
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(itemName, itemImage) {
  cart.push({ name: itemName, image: itemImage });
  saveCart();
  alert(itemName + " added to cart!");
}

document.querySelectorAll(".product-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const itemName = e.currentTarget.dataset.name;
    const itemImage = e.currentTarget.closest(".card").querySelector("img").src;

    addToCart(itemName, itemImage);
  });
});
