function recebeDados () {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let idade = document.getElementById("idade").value;
    return {nome, sobrenome, idade};
}

function criaObjetos (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

function mostraPessoa () {
    let dados = recebeDados();
    let pessoa = criaObjetos(dados.nome, dados.sobrenome, dados.idade);
    let dadosPessoa = `${pessoa.nome} ${pessoa.sobrenome} ${pessoa.idade}`;

    document.getElementById("resultado").innerHTML = `${dadosPessoa}`;
}