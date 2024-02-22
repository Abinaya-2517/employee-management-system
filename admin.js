document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      fetch('http://localhost:3000/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.location.href = 'addbook.html'; 
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });