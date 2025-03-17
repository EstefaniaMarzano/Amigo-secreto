// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un nombre
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value.trim();

  if (nombre && !amigos.includes(nombre)) {
    amigos.push(nombre);
    mostrarListaAmigos();
    inputAmigo.value = ""; // Limpiar el input
  } else {
    alert("Por favor, ingresa un nombre válido y que no esté duplicado.");
  }
}

// Función para mostrar la lista de amigos en el ul
function mostrarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de mostrar los nuevos elementos

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para realizar el sorteo
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Se necesitan al menos 2 participantes para realizar el sorteo.");
    return;
  }

  const shuffled = [...amigos].sort(() => Math.random() - 0.5);
  const resultados = shuffled.map((amigo, index) => {
    const destinatario = shuffled[(index + 1) % shuffled.length];
    return `${amigo} regala a ${destinatario}`;
  });

  mostrarResultados(resultados);
}

// Función para mostrar los resultados
function mostrarResultados(resultados) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = ""; // Limpiar los resultados anteriores

  resultados.forEach((resultado) => {
    const li = document.createElement("li");
    li.textContent = resultado;
    resultadoDiv.appendChild(li);
  });
}
