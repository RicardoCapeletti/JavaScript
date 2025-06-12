/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
  nome: 'Ricardo',
  sobrenome: 'Capeletti'
};
const b = a;

b.nome = 'Maria';
console.log(a);
console.log(b);