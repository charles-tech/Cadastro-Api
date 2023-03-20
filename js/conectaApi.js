async function receberFormulario() {
  const conexao = await fetch("http://localhost:4000/formulario");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

// Cep

async function buscarEndereco(cep) {
  var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  var consultaCepConvertida = await consultaCep.json();

  var cidade = document.getElementById("cidade");
  var logradouro = document.getElementById("endereco");
  var estado = document.getElementById("estado");
  var bairro = document.getElementById("bairro");
  var cep = document.getElementById("cep");

  cidade.value = consultaCepConvertida.localidade;
  logradouro.value = consultaCepConvertida.logradouro;
  estado.value = consultaCepConvertida.uf;
  bairro.value = consultaCepConvertida.bairro;
  cep.value = consultaCepConvertida.cep;
}

// cep.addEventListener("focusout", () => buscarEndereco(cep.value));

async function criaFormulario(
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
      cidade: cidade,
      logradouro: logradouro,
      estado: estado,
      bairro: bairro,
      cep: cep,
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
  buscarEndereco,
};
