import { conectaApia } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarFormulario(evento) {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const sobrenome = document.querySelector("[data-sobrenome]").value;
  const email = document.querySelector("[data-email]").value;
  const idade = document.querySelector("[data-idade]").value;
  await conectaApia.criaFormulario(nome, sobrenome, email, idade);
  window.location.href = "../pages/envio-concluido.html";
}
formulario.addEventListener("submit", (evento) => criarFormulario(evento));
