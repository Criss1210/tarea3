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




