import { conectaApia } from "./conectaApi.js";
import constroicard from "./mostrarFormulario.js";
async function buscarFormulario(evento) {
  evento.preventDefault();
  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApia.buscaFormulario(dadosDePesquisa);
  const lista = document.querySelector("[data-lista]");
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  busca.forEach((elemento) =>
    lista.appendChild(
      constroicard(
        elemento.nome,
        elemento.sobrenome,
        elemento.email,
        elemento.idade
      )
    )
  );
  console.log(lista);
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", (evento) => buscarFormulario(evento));
