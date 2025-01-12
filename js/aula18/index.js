function criapessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criapessoa('Ricardo', 'Capeletti', 37);
console.log(pessoa1);