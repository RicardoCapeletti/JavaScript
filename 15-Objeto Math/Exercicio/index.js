const textoDigitado = prompt("Digite seu nome: ");
const idparagrafo = document.getElementById("texto");


const numeroDigitado = prompt("Digite um número: ");
const idspan = document.getElementById("numero-titulo");

idparagrafo.innerHTML += `<p>Seu nome é: ${textoDigitado}</p>`;

idspan.innerHTML += `<p>O numero digitado foi: ${numeroDigitado}</p>`;

idspan.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numeroDigitado)}</p>`;

idspan.innerHTML += `<p>O numero é inteiro?: ${(Number.isInteger(Number(numeroDigitado)))}</p>`;

idspan.innerHTML += `<p>É NaN? ${(Number.isInteger(numeroDigitado))}</p>`;

idspan.innerHTML += `<p>Arredondado para baixo ${Math.floor(numeroDigitado)}</p>`;

idspan.innerHTML += `<p>Arredondado para cima ${Math.ceil(numeroDigitado)}</p>`;

idspan.innerHTML += `<p>Com duas casas decimais ${(Number(numeroDigitado).toFixed(2))}</p>`;


