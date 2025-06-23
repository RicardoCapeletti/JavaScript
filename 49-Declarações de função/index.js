//1. Function Declaration
function digaOi() {
  return "Oi, amor!";
}

console.log(digaOi());

//2. Function Expression
const digaOi2 = function () {
  return "Oi, mozão!";
};

console.log(digaOi());

//3. Arrow Function
const digaOi3 = () => {
  return "Oi, meu chuchuzinho!";
};

console.log(digaOi());

// Versão curtinha:
const somar = (a, b) => a + b;

console.log(somar(2, 3)); // 5

//4. Named Function Expression
const digaOi4 = function digaOiInterno() {
  return "Oi, meu raio de sol!";
};

console.log(digaOi4());

//5. IIFE (Immediately Invoked Function Expression)
const resultado = (function () {
  return "Oi, linda! Executando sozinha ";
})();

console.log(resultado);

// Arrow version:
const resultado2 = (() => {
  return "Oi, gostoso(a)! Arrow se invocando ";
})();

console.log(resultado2);

//6. Função como método de objeto
const oi = {
  digaOi: function () {
    return "Oi";
  }
};

console.log(oi.digaOi());

//Versão moderna:
const oi2 = {
  digaOi() {
    return "Oi2";
  }
};

console.log(oi2.digaOi());

// 7. Função Construtora (Constructor Function)
function Namorada(nome) {
  this.nome = nome;
  this.dizerNome = function () {
    return "Oi, meu nome é " + this.nome + " 😘";
  };
}

const eu = new Namorada("Luana");

console.log(eu.dizerNome());

//8. Classe com método
class Namorada2 {
  constructor(nome) {
    this.nome = nome;
  }

  dizerOi5() {
    return `Oi, eu sou ${this.nome} S2`;
  }
}

const minhaLinda = new Namorada2("Luana");

console.log(minhaLinda.dizerOi5());

//9. Função Geradora (Generator Function)
function* geradoraDeAmor() {
  yield "💌";
  yield "💋";
  yield "💖";
}

const amorzinho = geradoraDeAmor();

console.log(amorzinho.next().value); // 💌
console.log(amorzinho.next().value); // 💋
console.log(amorzinho.next().value); // 💖

//10. Função Assíncrona (Async Function)
async function buscarBeijinho() {
  return "💋";
}

buscarBeijinho().then(console.log);







