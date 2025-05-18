function add(...values){
    console.log(values)

}

const products = [
  { id: 1, name: "Product 1", price: 34,qty:3, status:"pending" },
  { id: 2, name: "Product 2", price: 56,qty:5, status:"pending" },
  { id: 3, name: "Product 3", price: 40,qty:2, status:"pending" },
];

const cart= {1:4,3:5}

const order = products
  .filter(product => cart[product.id]) 
  .map(product => {
    const quantity = cart[product.id];
    const total = product.price * quantity;
    console.log(`Name: ${product.name}, price: ${product.price}, quantity: ${quantity}, total: ${total}`);
    return total;
  });

const orderValue = order.reduce((sum, val) => sum + val, 0);
console.log(`Order Value: ${orderValue}`);


