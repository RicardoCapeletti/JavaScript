/* function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    
    };
  } */


  /* function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
  }

  const pessoa = criaPessoa('Paulo', 'Vieira', 40);
  const pessoa1 = criaPessoa('Ricardo', 'Capeletti', 37);
  const pessoa2 = criaPessoa('Luiza, ', 'Capeletti', 27); */

const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Vieira',
    idade: 40,

    fala() {
      console.log(`${this.nome} ${this.sobrenome} está falando`);
    },
};

  pessoa.fala();
