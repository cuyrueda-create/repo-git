// 1️⃣ Seleccionamos los elementos del HTML que vamos a usar
const btnTemp = document.getElementById('btnTemp');  // El botón de convertir
const gradosC = document.getElementById('gradosC');  // El input donde el usuario escribe
const resultadoTemp = document.getElementById('resultadoTemp');  // El texto donde se mostrará el resultado

// 2️⃣ Agregamos un evento al botón: cuando se haga clic, ejecutará la función
btnTemp.addEventListener('click', function() {
  // 3️⃣ Obtenemos el valor que el usuario escribió y lo convertimos a número
  let celsius = parseFloat(gradosC.value);

  // 4️⃣ Verificamos que el valor no esté vacío o sea un número inválido
  if (isNaN(celsius)) {
    resultadoTemp.textContent = "Error ❌";
    return; // Detiene la función
  }

  // 5️⃣ Aplicamos la fórmula de conversión: (°C × 9/5) + 32 = °F
  let fahrenheit = (celsius * 9/5) + 32;

  // 6️⃣ Mostramos el resultado con un solo decimal
  resultadoTemp.textContent = fahrenheit.toFixed(1) + " °F";
});
