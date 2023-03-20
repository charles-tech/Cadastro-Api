import { conectaApia } from "./conectaApi.js";
const lista = document.querySelector("[data-lista]");

export default function constroicard(
  nome,
  sobrenome,
  email,
  idade,
  cidade,
  logradouro,
  estado,
  bairro,
  cep
) {
  const formulario = document.createElement("li");
  formulario.className = "formularios__item";

  formulario.innerHTML = `<div class="conteudo"> <p>Nome: ${nome}</p>
  <p>Sobrenome: ${sobrenome}</p>
  <p>E-mail: ${email}</p>
  <p>Idade: ${idade} anos</p>
  <p>Cidade: ${cidade}</p>
  <p>Rua: ${logradouro}</p>
  <p>Estado: ${estado}</p>
  <p>Bairro: ${bairro}</p>
  <p>Cep: ${cep}</p>
  </div>`;
  return formulario;
}

async function listaFormulario() {
  try {
    const listaApi = await conectaApia.receberFormulario();
    listaApi.forEach((elemento) =>
      lista.appendChild(
        constroicard(
          elemento.nome,
          elemento.sobrenome,
          elemento.email,
          elemento.idade,
          elemento.cidade,
          elemento.logradouro,
          elemento.estado,
          elemento.bairro,
          elemento.cep
        )
      )
    );
  } catch {
    lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi possivel carregar a lista de formulario</h2>`;
  }
}

listaFormulario();
