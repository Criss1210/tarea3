document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Usuario y contraseña de ejemplo
    if (username === 'usuario' && password === '12345') {
      // Si las credenciales son correctas, redirige a la página de la calculadora
      window.location.href = 'index.html'; // Redirige a la página de la calculadora
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      document.getElementById('error-message').style.display = 'block';
    }
  });