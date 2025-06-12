// Exemplo de arrays em JavaScript
//indices        0       1        2       3
const alunos = ['João', 'Maria', 'José', 'Ana'];

// Mudando o nome do aluno no indice 0
alunos[0] = 'Felipe';

// Adicionando um novo aluno no indice 4
alunos[4] = 'Caio';

// Adiciona um novo aluno no inicio do array
alunos.unshift('Fernanda');

// Adiciona um novo aluno no final do array
alunos.push('Lucas');

// Remove o primeiro aluno do array
alunos.shift(); 

// Remove o último aluno do array
alunos.pop();

// Exibe o tamanho do array alunos
console.log(alunos.length);

// Exibe o aluno no indice 3
console.log('Aluno no indice 3:', alunos[3]);

// Exibe todos os alunos
console.log('Alunos:', alunos);

// Exibe alunos do indice 1 ao 2 (não inclui o 3)
console.log(alunos.slice(1, 3));

// Exibe alunos do indice 1 até o penúltimo
console.log(alunos.slice(1, -1)); 

