class ValidadorFormulario {
  constructor(form) {
    this.form = form;
    this.nome = form.querySelector('#nome');
    this.email = form.querySelector('#email');
    this.mensagem = document.getElementById('mensagem');
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(event) {
    event.preventDefault(); // Impede o envio do formulário
    const nomeValido = this.validarNome(this.nome.value);
    const emailValido = this.validarEmail(this.email.value);

    if (nomeValido && emailValido) {
      this.mensagem.innerText = 'Formulário enviado com sucesso! 🥳';
      this.mensagem.style.color = 'green';
    } else {
      this.mensagem.innerText = 'Por favor, preencha os campos corretamente. 🙏';
      this.mensagem.style.color = 'red';
    }
  }

  validarNome(nome) {
    return nome.trim().length >= 3;
  }

  validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
}

// Ativa o validador quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('meuFormulario');
  new ValidadorFormulario(form);
});
