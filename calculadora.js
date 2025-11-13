// 1️⃣ Seleccionamos los elementos del HTML
const btnMedida = document.getElementById('btnMedida');
const medidaCm = document.getElementById('medidaCm');
const resultadoMedida = document.getElementById('resultadoMedida');

// 2️⃣ Evento para el clic en el botón
btnMedida.addEventListener('click', function() {
  // 3️⃣ Obtenemos el valor del input y lo convertimos a número
  let centimetros = parseFloat(medidaCm.value);

  // 4️⃣ Verificamos que el valor sea válido
  if (isNaN(centimetros)) {
    resultadoMedida.textContent = "Error ❌";
    return;
  }

  // 5️⃣ Realizamos la conversión: 1 metro = 100 cm
  let metros = centimetros / 100;

  // 6️⃣ Mostramos el resultado con dos decimales
  resultadoMedida.textContent = metros.toFixed(2) + " m";
});
