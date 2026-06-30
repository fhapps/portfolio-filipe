// Seletores dos elementos usados nas interações da página
const menuBotao = document.getElementById('menuBotao');
const menuLista = document.getElementById('menuLista');
const temaBotao = document.getElementById('temaBotao');
const formContato = document.getElementById('formContato');

// Abre e fecha o menu em telas menores
menuBotao.addEventListener('click', () => {
    const menuAberto = menuLista.classList.toggle('ativo');
    menuBotao.setAttribute('aria-expanded', menuAberto);
});

// Alterna entre tema claro e tema escuro
function alternarTema() {
    document.body.classList.toggle('tema-escuro');
    const escuroAtivo = document.body.classList.contains('tema-escuro');
    temaBotao.textContent = escuroAtivo ? 'Tema claro' : 'Tema escuro';
}

temaBotao.addEventListener('click', alternarTema);

// Função simples para validar formato de e-mail
function emailValido(email) {
    const expressao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expressao.test(email);
}

// Remove mensagens de erro antes de uma nova validação
function limparErros() {
    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroMensagem').textContent = '';
    document.getElementById('mensagemSucesso').textContent = '';
}

// Validação do formulário de contato e simulação de envio
formContato.addEventListener('submit', (evento) => {
    evento.preventDefault();
    limparErros();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    let formularioValido = true;

    if (nome === '') {
        document.getElementById('erroNome').textContent = 'Preencha o seu nome.';
        formularioValido = false;
    }

    if (email === '') {
        document.getElementById('erroEmail').textContent = 'Preencha o seu e-mail.';
        formularioValido = false;
    } else if (!emailValido(email)) {
        document.getElementById('erroEmail').textContent = 'Digite um e-mail válido.';
        formularioValido = false;
    }

    if (mensagem === '') {
        document.getElementById('erroMensagem').textContent = 'Digite a sua mensagem.';
        formularioValido = false;
    }

    if (formularioValido) {
        formContato.reset();
        document.getElementById('mensagemSucesso').textContent = 'Mensagem enviada com sucesso!';
        alert('Mensagem enviada com sucesso!');
    }
});
