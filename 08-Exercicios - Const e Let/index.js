const nome = 'Ricardo';
const sobrenome = 'Capeletti';
const idade = 37;
const peso = 80;
const alturaEmM = 1.80;
const imc = peso / (alturaEmM * alturaEmM);

// Exemplo de template string
console.log(`Nome:`, nome, sobrenome, 'tem', idade, 'anos');
console.log(`Pesa:`, peso, 'kg');
console.log(`Altura:`, alturaEmM, 'm');
console.log(`Seu IMC é de`, imc); 

// Exemplo de template string com interpolação
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, mede ${alturaEmM} m e seu IMC é de ${imc}.`);