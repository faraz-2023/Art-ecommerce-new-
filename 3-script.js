// Smooth scroll to products section
document.getElementById("product-link").addEventListener("click", function(e) {
  e.preventDefault(); // stop default jump
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
});

//for add to cart

document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0;
  const cartCountEl = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(".btn-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      cartCountEl.textContent = cartCount;
    });
  });
});

//buy now button 

// Handle Buy Now buttons
const buyNowButtons = document.querySelectorAll(".btn-buy");

buyNowButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const productCard = e.target.closest(".col-4");
    const productName = productCard.querySelector("h4").textContent;
    const productPrice = productCard.querySelector("p").textContent;
    const productImg = productCard.querySelector("img").getAttribute("src");

    // Encode product info into URL
    const url = `checkout.html?name=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}&img=${encodeURIComponent(productImg)}`;
    window.location.href = url;
  });
});
