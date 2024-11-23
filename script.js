let resultField = document.getElementById('result');

function append(value) {
  resultField.value += value;
}

function clearResult() {
  resultField.value = '';
}

function calculate() {
  try {
    resultField.value = eval(resultField.value);
  } catch {
    resultField.value = 'Error';
  }
}


















var historyList = document.getElementById('historyList');  // Referencia al historial

// Función para calcular y agregar al historial
function calculate() {
  try {
    var result = eval(resultField.value); // Evalúa la operación
    resultField.value = result;

    // Registra la operación y el resultado en el historial
    var operation = `${resultField.value} = ${result}`;
    var historyItem = document.createElement('li');
    historyItem.textContent = operation;
    historyList.appendChild(historyItem);

    // Limita el historial a 5 operaciones recientes
    if (historyList.children.length > 5) {
      historyList.removeChild(historyList.firstChild); // Elimina la operación más antigua
    }
  } catch (error) {
    resultField.value = 'Error';
  }
}


// Función para alternar entre modo claro y modo oscuro
function toggleTheme() {
    // Cambiar el tema del body
    document.body.classList.toggle('dark-mode');
  
    // Cambiar el tema de la calculadora
    document.querySelector('.calculator').classList.toggle('dark-mode');
  
    // Cambiar el tema del campo de resultados
    document.getElementById('result').classList.toggle('dark-mode');
  
    // Cambiar el tema de los botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.toggle('dark-mode');
    });
  }


// Lógica de login
document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Usuario y contraseña de ejemplo
    if (username === 'usuario' && password === '12345') {
      // Si las credenciales son correctas, mostramos la calculadora
      document.getElementById('loginForm').style.display = 'none'; // Oculta el formulario de login
      document.getElementById('calculator').style.display = 'block'; // Muestra la calculadora
    } else {
      // Si las credenciales son incorrectas, mostramos el mensaje de error
      document.getElementById('error-message').style.display = 'block';
    }
  });


  function convert() {
    const unitType = document.getElementById('unit-type').value;
    const inputValue = parseFloat(document.getElementById('input-value').value);
    let output = '';
  
    if (isNaN(inputValue)) {
      output = 'Por favor, ingresa un valor válido.';
    } else {
      if (unitType === 'length') {
        const metersToKilometers = inputValue / 1000;
        const centimetersToMeters = inputValue * 100;
        output = `${inputValue} metros = ${metersToKilometers} kilómetros <br> ${inputValue} centímetros = ${centimetersToMeters} metros`;
      } else if (unitType === 'temperature') {
        const celsiusToFahrenheit = (inputValue * 9/5) + 32;
        const fahrenheitToCelsius = (inputValue - 32) * 5/9;
        output = `${inputValue} °C = ${celsiusToFahrenheit} °F <br> ${inputValue} °F = ${fahrenheitToCelsius} °C`;
      }
    }
  
    document.getElementById('output').innerHTML = output;
  }






