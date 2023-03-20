async function receberFormulario() {
  const conexao = await fetch("http://localhost:4000/formulario");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function criaFormulario(nome, sobrenome, email, idade) {
  const conexao = await fetch("http://localhost:4000/formulario", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      idade: idade,
    }),
  });
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}
async function buscaFormulario(termoDeBusca) {
  const conexao = await fetch(
    `http://localhost:4000/formulario?q=${termoDeBusca}`
  );
  const conexaoConvertida = conexao.json();
  return conexaoConvertida;
}

export const conectaApia = {
  receberFormulario,
  criaFormulario,
  buscaFormulario,
};
