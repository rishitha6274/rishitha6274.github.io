const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 0 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

function handleLogin() {
  const card = document.getElementById("cardInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();
  const errorDiv = document.getElementById("errorMsg");

  const user = customers.find(c => c.card === card && c.pin === pin);

  if (user) {
    document.body.innerHTML = <h1 style="text-align:center; margin-top: 6vh;">Welcome ${user.name}!</h1>;
  } else {
    errorDiv.textContent = "Invalid card number or PIN.";
  }
}