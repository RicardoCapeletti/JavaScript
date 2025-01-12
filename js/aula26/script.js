
/* 

const msg = `Seu IMC é ${imc} (${nivel}).`;
    setResultado(msg, true);

if (!altura && !peso) {
    setResultado('Peso e altura inválida', false);
    return;
}


if (!peso) {
    setResultado('Peso inválido', false);
    return;
}

if (!altura) {
    setResultado('Altura inválida', false);
    return;
}
 */

/* 39.9
34.9
29.9
24.9
18.5
18.5
 */


const calculadora = document.querySelector('#formulario');
calculadora.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = getIMC(peso, altura);
    const nivel = nivelIMC(imc);

    const msg = (`Seu IMC é ${imc} (${nivel})`)
    setResultado(msg, true);

});

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function nivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Grau de obesidade 1', 'Grau de obesidade 2', 'Grau de obesidade 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}