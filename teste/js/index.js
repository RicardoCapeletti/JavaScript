const pessoas = [];

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  pessoas.push({
    nome: formulario.nome.value,
    sobrenome: formulario.sobrenome.value,
    idade: formulario.idade.value
  });

  atualizarLista();
  this.reset();
});

function atualizarLista() {
  const lista = document.getElementById("listaPessoas");
  lista.innerHTML = pessoas
    .map((p, i) => `<li>${i + 1}. ${p.nome} ${p.sobrenome} - ${p.idade} anos</li>`)}