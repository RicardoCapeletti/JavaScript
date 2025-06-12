let varA = 'A';
let varB = 'B';
let varC = 'C';

let temp = varA; // Cria uma variável temporária para armazenar o valor de A

varA = varB; // A recebe o valor de B
varB = varC; // B recebe o valor de C
varC = temp; // C recebe o valor de temp = A

console.log(varA, varB, varC); // Exibe os valores após a troca