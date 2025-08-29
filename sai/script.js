document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Simulate a login action without actually collecting any data
  const username = document.getElementById('username').value;
  const message = `Welcome, ${username}! (This is just a mock login.)`;
  
  document.getElementById('message').textContent = message;

  // Optionally, clear the form
  this.reset();
});
