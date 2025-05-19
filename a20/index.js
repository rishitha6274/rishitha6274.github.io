async function lookupUser() {
  const email = document.getElementById('emailInput').value.trim();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');

  resultDiv.style.display = 'none';
  errorDiv.style.display = 'none';

  if (!email) {
    errorDiv.textContent = "Please enter an email.";
    errorDiv.style.display = "block";
    return;
  }

  try {
    const userRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await userRes.json();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      errorDiv.textContent = "User not found.";
      errorDiv.style.display = "block";
      return;
    }

    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsRes.json();
    const userPosts = posts.filter(p => p.userId === user.id);

    document.getElementById("name").textContent = `${user.name}`;
    document.getElementById("email").textContent = `Posts: ${userPosts.length}`;

    resultDiv.style.display = 'block';
  } catch (err) {
    console.error(err);
    errorDiv.textContent = "An error occurred while fetching data.";
    errorDiv.style.display = "block";
  }
}
