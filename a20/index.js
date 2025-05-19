async function findUser() {
      const email = document.getElementById('emailInput').value.trim();
      const resultDiv = document.getElementById('result');

      if (!email) {
        resultDiv.textContent = "Please enter an email.";
        return;
      }

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (user) {
          resultDiv.innerHTML = `<strong>Name:</strong> ${user.name}`;
        } else {
          resultDiv.textContent = "No user found with that email.";
        }
      } catch (error) {
        resultDiv.textContent = "Error fetching user data.";
        console.error(error);
      }
    }