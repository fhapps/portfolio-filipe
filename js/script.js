const btnMenu = document.getElementById("btn-menu");
const listaMenu = document.getElementById("lista-menu");
const btnTema = document.getElementById("btn-tema");
const formulario = document.getElementById("form-contato");
const resultado = document.getElementById("resultado");

// Menu responsivo para celular
btnMenu.addEventListener("click", function () {
  listaMenu.classList.toggle("ativo");
});

// Alternância entre tema claro e escuro
btnTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    btnTema.textContent = "☀️";
  } else {
    btnTema.textContent = "🌙";
  }
});

// Validação do formulário de contato
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    resultado.style.color = "red";
    resultado.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValido.test(email)) {
    resultado.style.color = "red";
    resultado.textContent = "Digite um e-mail válido.";
    return;
  }

  resultado.style.color = "#16a34a";
  resultado.textContent = "Mensagem enviada com sucesso!";

  formulario.reset();
});
