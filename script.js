const calcular = document.getElementById('calcular');

function simularInvestimento () {
  const nome = document.getElementById('nome').value;
  const valorAplicado = document.getElementById('valorAplicado').value;
  const juros = document.getElementById('juros').value / 100;
  const tempoInvestimento = document.getElementById('tempoInvestimento').value;
  const resultado = document.getElementById('resultado');

  if (valorAplicado !== '' && juros !== '' && tempoInvestimento !== '') {

      const valorTotal = (valorAplicado * ((((1 + juros) ** tempoInvestimento) - 1) / juros)).toFixed(2)

      resultado.textContent = `Olá, ${nome}! aplicando R$ ${valorAplicado} a uma taxa de juros de ${juros * 100} % ao mês, durante ${tempoInvestimento} meses, você terá um valor total de ${valorTotal}`;

  }else {
      alert('Preencha todos os campos!');
  }
}

calcular.addEventListener('click', simularInvestimento);