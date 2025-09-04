  const cartTotal = document.getElementById('cart-total');
  const hail = document.querySelectorAll('.hail');

  // Load existing cart count from localStorage or start at 0
  let total = parseInt(localStorage.getItem('cartTotal')) || 0;
  cartTotal.textContent = total;

  function updateCart() {
    cartTotal.textContent = total;
    localStorage.setItem('cartTotal', total); // Save in localStorage
  }

  // Add event listener to all product links
  hail.forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent page reload
      total += 1; // You can change this to price later
      updateCart();
    });
  });

