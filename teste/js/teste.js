//------------------------FACTORY----------------------------//

function criaObjeto (nome, idade) {
    return {
        nome,
        idade,

        mostra: function () {
            console.log(`Nome: ${nome} Idade: ${idade}`);
        }
    };
}

const namo = criaObjeto ('Luna', 18);
namo.mostra();

//------------------------CONSTRUCTOR---------------------------//

function CriaObjeto2 (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

CriaObjeto2.prototype.mostra2 = function () {
    console.log(`Nome: ${this.nome} Idade: ${this.idade}`);
}

const namo2 = new CriaObjeto2 ('Priscila', 19);
namo2.mostra2();

//-------------------------CLASS----------------------------//

class Objeto3 {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    mostra3 () {
        console.log(`Nome: ${this.nome} Idade: ${this.idade}`);
    }
}

const namo3 = new Objeto3 ('Ana', 20);
namo3.mostra3();