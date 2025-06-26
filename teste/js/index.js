//Factory Function (função fábrica)://

function criaUsuario1(nome) {
  return { //Objeto = Variaveis com muitos valores dentro chamados propriedades
    nome,
    dizerOi() { //Metodo = Função dentro de um objeto
      console.log(`Oi, eu sou ${nome}! 😄`);
    }
  };
}

const user1 = criaUsuario1('Luna');
user1.dizerOi();


 //Constructor Function (função construtora)://

function CriaUsuario2(nome) {
  this.nome = nome;
}

CriaUsuario2.prototype.dizerOi = function() {
  console.log(`Oi, eu sou ${this.nome}! 😄`);
};

const user2 = new CriaUsuario2('Thor');
user2.dizerOi();

//Class moderna (do ES6)://

class CriaUsuario3 {
  constructor(nome) {
    this.nome = nome;
  }

  dizerOi() {
    console.log(`Oi, eu sou ${this.nome}! 😄`);
  }
}

const user3 = new CriaUsuario3('Freya');
user3.dizerOi();

