const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

let cart = {};

const addToCart = (id) => {
  if (!(id in cart)) {
    cart = { ...cart, [id]: 1 }; 
  }
  console.log(cart);
};

const dispCart = () => {
  let str = "";
  for (let id in cart) {
    const item = products.find(p => p.id == id);
    str += `
      <div class="product-box">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <p>Qty: ${cart[id]}</p>
      </div>
    `;
  }
  root.innerHTML = str ? `<div class="row">${str}</div>` : "<p>Your cart is empty.</p>";
};

const showProducts = () => {
  let str = "";
  products.map(value => {
    str += `
      <div class="product-box">
        <h3>${value.name}</h3>
        <h4>$${value.price}</h4>
        <button onclick='addToCart(${value.id})'>Add to Cart</button>
      </div>
    `;
  });
  root.innerHTML = "<div class='row'>" + str + "</div>";
};