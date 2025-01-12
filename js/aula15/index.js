//let num1 = 9.54635;
//let num2 = Math.floor(num1); arredonda pra baixo
//let num2 = Math.ceil(num1); arredonda pra cima
//let num2 = Math.round(); da metade pra cima arredonda pra cima se nao pra baixo
//console.log(Math.max(1,2,3,4,5,6,-10,-50)); maior numero da sequencia
//console.log(Math.min(1,2,3,4,5,6,-10,-50)); menor numero da sequencia
//console.log(Math.random()); gera um numero aleatorio

const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>A raiz quadrada é  ${numero ** 0.5}. </p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}. </p>`
texto.innerHTML += `<p>É NaN ${Number.isNaN(numero)}. </p>`
texto.innerHTML += `<p>Arredondando para baixo é : ${Math.floor(numero)}. </p>`
texto.innerHTML += `<p>Arredondando para cima é : ${Math.ceil(numero)}. </p>`
texto.innerHTML += `<p>Com duas casas decimais é : ${numero.toFixed(2)}. </p>`