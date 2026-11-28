function limparEndereco() {
  document.getElementById('logradouro').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('uf').value = '';
}

async function buscarCep() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  limparEndereco();

  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const dados = await resposta.json();

  document.getElementById('logradouro').value = dados.logradouro;
  document.getElementById('bairro').value = dados.bairro;
  document.getElementById('cidade').value = dados.localidade;
  document.getElementById('uf').value = dados.uf;
}
