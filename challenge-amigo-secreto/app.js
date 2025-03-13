let amigos = [];
let amigosSorteados = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido agregado.");
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  input.value = "";
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agregue al menos un nombre antes de sortear.");
    return;
  }

  if (amigosSorteados.length === amigos.length) {
    alert("¡Todos los amigos secretos han sido sorteados!");
    reiniciarJuego();
    return;
  }

  let amigoSecreto;
  do {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    amigoSecreto = amigos[indiceAleatorio];
  } while (amigosSorteados.includes(amigoSecreto));

  amigosSorteados.push(amigoSecreto);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const ocultarButton = document.createElement("button");
  ocultarButton.textContent = "Ocultar";
  ocultarButton.classList.add("button-ocultar");
  ocultarButton.onclick = limpiarResultado;

  buttonContainer.appendChild(ocultarButton);
  resultado.appendChild(buttonContainer);
}

function limpiarResultado() {
  document.getElementById("resultado").innerHTML = "";
  if (amigosSorteados.length === amigos.length) {
    alert("¡Todos los amigos secretos han sido sorteados!");
    reiniciarJuego();
  }
}

function reiniciarJuego() {
  amigos = [];
  amigosSorteados = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
