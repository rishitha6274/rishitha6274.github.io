if (!localStorage.getItem("customers")) {
  const initialCustomers = [
    { card: "1234567890", pin: "1234", name: "John", balance: 2000 },
    { card: "1234567891", pin: "2345", name: "Cathy", balance: 5000 },
  ];
  localStorage.setItem("customers", JSON.stringify(initialCustomers));
}

function handleLogin() {
  const card = document.getElementById("cardInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();
  const errorDiv = document.getElementById("errorMsg");

  const customers = JSON.parse(localStorage.getItem("customers"));
  const user = customers.find(c => c.card === card && c.pin === pin);

  if (user) {
    document.body.innerHTML = `
      <div class="welcome-screen">
        <h1 class="fade-in-right">Welcome ${user.name}!</h1>
        <p><strong>Current Balance:</strong> ₹<span id="balanceAmount">${user.balance.toFixed(2)}</span></p>
        <div class="options-panel">
          <label for="actionSelect">Select Action:</label>
          <select id="actionSelect" onchange="showTransferFields()">
            <option value="">--Choose--</option>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
            <option value="transfer">Fund Transfer</option>
          </select>
          <div id="amountSection">
            <input type="number" id="amountInput" placeholder="Enter Amount" />
          </div>
          <div id="transferSection" style="display: none;">
            <input type="text" id="recipientCard" placeholder="Recipient Card Number" />
          </div>
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

function showTransferFields() {
  const action = document.getElementById("actionSelect").value;
  const transferSection = document.getElementById("transferSection");

  if (action === "transfer") {
    transferSection.style.display = "block";
  } else {
    transferSection.style.display = "none";
  }
}

function handleTransaction(cardNumber) {
  const action = document.getElementById("actionSelect").value;
  const amount = parseFloat(document.getElementById("amountInput").value);
  const messageDiv = document.getElementById("resultMessage");

  const customers = JSON.parse(localStorage.getItem("customers"));
  const senderIndex = customers.findIndex(c => c.card === cardNumber);
  const sender = customers[senderIndex];

  if (!action || isNaN(amount) || amount <= 0) {
    messageDiv.textContent = "Please select an action and enter a valid amount.";
    messageDiv.style.color = "#f43f5e";
    return;
  }

  if (action === "deposit") {
    sender.balance += amount;
  } else if (action === "withdraw") {
    if (sender.balance < amount) {
      messageDiv.textContent = "Insufficient balance.";
      messageDiv.style.color = "#f43f5e";
      return;
    }
    sender.balance -= amount;
  } else if (action === "transfer") {
    const recipientCard = document.getElementById("recipientCard").value.trim();
    const recipientIndex = customers.findIndex(c => c.card === recipientCard);
    const recipient = customers[recipientIndex];

    if (!recipientCard || recipientCard === cardNumber) {
      messageDiv.textContent = "Invalid recipient card number.";
      messageDiv.style.color = "#f43f5e";
      return;
    }

    if (recipientIndex === -1) {
      messageDiv.textContent = "Recipient not found.";
      messageDiv.style.color = "#f43f5e";
      return;
    }

    if (sender.balance < amount) {
      messageDiv.textContent = "Insufficient balance for transfer.";
      messageDiv.style.color = "#f43f5e";
      return;
    }

    sender.balance -= amount;
    recipient.balance += amount;
    customers[recipientIndex] = recipient;
  }

  customers[senderIndex] = sender;
  localStorage.setItem("customers", JSON.stringify(customers));

  document.getElementById("balanceAmount").textContent = sender.balance.toFixed(2);

  messageDiv.textContent = `Transaction successful. Updated Balance: ₹${sender.balance.toFixed(2)}`;
  messageDiv.style.color = "#16a34a";
}
