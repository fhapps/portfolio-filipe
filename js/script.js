const btnMenu = document.getElementById("btn-menu");
const menuLinks = document.getElementById("menu-links");
const btnTema = document.getElementById("btn-tema");
const formulario = document.getElementById("form-contato");
const resultado = document.getElementById("resultado");

// Abre e fecha o menu em telas menores
btnMenu.addEventListener("click", function () {
  menuLinks.classList.toggle("ativo");
});

// Fecha o menu ao clicar em algum link
const links = menuLinks.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    menuLinks.classList.remove("ativo");
  });
});

// Alterna entre tema escuro e tema claro
btnTema.addEventListener("click", function () {
  document.body.classList.toggle("claro");

  if (document.body.classList.contains("claro")) {
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
    resultado.style.color = "#ef4444";
    resultado.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValido.test(email)) {
    resultado.style.color = "#ef4444";
    resultado.textContent = "Digite um e-mail válido.";
    return;
  }

  resultado.style.color = "#22c55e";
  resultado.textContent = "Mensagem enviada com sucesso!";

  formulario.reset();
});
