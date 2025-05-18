const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const cart = {};

const showProducts = () => {
  const root = document.getElementById("root");
  root.innerHTML = "";

  products.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.className = "product-box";

    productBox.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    root.appendChild(productBox);
  });
};



