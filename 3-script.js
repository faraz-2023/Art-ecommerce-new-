// Smooth scroll to products section
document.getElementById("product-link").addEventListener("click", function(e) {
  e.preventDefault(); // stop default jump
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
});
