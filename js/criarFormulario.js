import { conectaApia } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarFormulario(evento) {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const sobrenome = document.querySelector("[data-sobrenome]").value;
  const email = document.querySelector("[data-email]").value;
  const idade = document.querySelector("[data-idade]").value;
  const cidade = document.querySelector("[data-cidade]").value;
  const logradouro = document.querySelector("[data-rua]").value;
  const estado = document.querySelector("[data-estado]").value;
  const bairro = document.querySelector("[data-bairro]").value;
  const cep = document.querySelector("[data-cep]").value;
  await conectaApia.criaFormulario(
    nome,
    sobrenome,
    email,
    idade,
    cidade,
    logradouro,
    estado,
    bairro,
    cep
  );
  window.location.href = "../pages/envio-concluido.html";
}
formulario.addEventListener("submit", (evento) => criarFormulario(evento));
