const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: "₹2000" },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: "₹5000" },
];

function handleLogin() {
  const card = document.getElementById("cardInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();
  const errorDiv = document.getElementById("errorMsg");

  const user = customers.find(c => c.card === card && c.pin === pin);

  if (user) {
    document.body.innerHTML = `
      <div class="welcome-screen">
        <h1>Welcome ${user.name}!</h1>
        <div class="options-panel">
          <label for="actionSelect">Select Action:</label>
          <select id="actionSelect">
            <option value="">--Choose--</option>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
          <input type="number" id="amountInput" placeholder="Enter Amount" />
          <button onclick="handleTransaction('${user.card}')">Submit</button>
          <button class="exit-btn" onclick="location.reload()">Exit</button>
        </div>
        <div id="resultMessage" class="result-msg"></div>
      </div>
    `;
  } else {
    errorDiv.textContent = "Invalid card number or PIN.";
  }
}

function handleTransaction(cardNumber) {
  const action = document.getElementById("actionSelect").value;
  const amount = parseFloat(document.getElementById("amountInput").value);
  const messageDiv = document.getElementById("resultMessage");

  const user = customers.find(c => c.card === cardNumber);

  if (!action || isNaN(amount) || amount <= 0) {
    messageDiv.textContent = "Please select an action and enter a valid amount.";
    messageDiv.style.color = "#f43f5e";
    return;
  }

  if (action === "deposit") {
    user.balance += amount;
  } else if (action === "withdraw") {
    if (user.balance < amount) {
      messageDiv.textContent = "Insufficient balance.";
      messageDiv.style.color = "#f43f5e";
      return;
    }
    user.balance -= amount;
  }

  messageDiv.textContent = `Transaction successful. Updated Balance: ₹${user.balance}`;
  messageDiv.style.color = "#16a34a";
}