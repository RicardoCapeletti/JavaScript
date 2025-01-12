function funcaoForm () {
    const captura = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    captura.addEventListener('submit', eventoForm);

    const pessoas = [];

    function eventoForm (evento) {
        evento.preventDefault();
        const nome = captura.querySelector('.nome');
        const sobrenome = captura.querySelector('.sobrenome');
        const peso = captura.querySelector('.peso');
        const altura = captura.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);
        resultado.innerHTML += (`<p>Nome: ${nome.value} <br> Sobrenome: ${sobrenome.value} <br> Peso: ${peso.value} <br> Altura: ${altura.value}<p/>`);
    }
}

funcaoForm();