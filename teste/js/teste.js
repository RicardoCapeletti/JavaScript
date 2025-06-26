function criaObjeto (nome, idade) {
    return {
        nome,
        idade,

        mostra: function () {
            console.log(`Nome: ${nome}, Idade: ${idade}`);
        }
    };
}

const princesa = criaObjeto('Luna', 18);
princesa.mostra();