let header = document.querySelector('h1');
header.innerHTML = 'Hora del Desafio.';

function botonConsole() {
    console.log("El boton fue Console fue clicado")
}

function botonPrompt() {
    let ciudadDeBrasil = prompt("Escribe el nombre de una ciudad de Brasil:");
    alert(`Estuve en ${ciudadDeBrasil} y me acorde de ti.`);
}

function botonAlert() {
    alert('Yo amo JS');
}

function botonSuma() {
    let numeroUno = parseFloat(prompt('Escribe el primer valor a sumar:'));
    let numeroDos = parseFloat(prompt('Escribe el segundo valor a sumar:'));
    let sumaDeNumeros = numeroUno + numeroDos;
    alert(`La suma de tus numeros es: ${sumaDeNumeros}`);
}