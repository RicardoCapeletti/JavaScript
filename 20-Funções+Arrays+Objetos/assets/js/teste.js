function formularioLista () {
    const form = document.querySelector('.formulario');
    const saida = document.querySelector('#texto');

    const pessoas = [];

    function alimentaLista (e) {
        e.preventDefault();
        const nome = document.querySelector('#nome');

        pessoas.push({
            nome: nome.value,
        });

        console.log(pessoas);
        saida.innerHTML += `<p>${nome.value}</p>`

    };
    
    form.addEventListener('submit', alimentaLista);
}
formularioLista ();